#!/usr/bin/env python3
"""Refresh the trail geometry.

Two sources, stitched together north → south:
  * City of San José Trail Reach GIS layer (every feature named "Los Gatos Creek"). This covers
    San José (reach IDs LGC01–LGC07) and, as unnamed county features, the trail through Campbell
    and Los Gatos Creek County Park down to Vasona Lake.
  * OpenStreetMap route relation 5335571 ("Los Gatos Creek Trail") for the Town of Los Gatos
    section the City layer doesn't cover: Vasona Lake to Lexington Dam.

The long unnamed county feature is cut at road crossings into named reaches (CAM1, CAM2, LGCP,
VAS1), and the OSM ways become LG1–LG3. Writes data/reaches.geojson and data/reaches.js and
prints what changed since the last run (new or removed reaches, status changes, new opening
dates) so you know which hand-maintained tables in data/data.js and data/geo.js to revisit.

    python3 scripts/update_reaches.py              # fetch both sources
    python3 scripts/update_reaches.py --offline    # reuse the copies in data/source/
"""
import argparse, datetime, json, math, os, sys, urllib.request

GIS_URL = ("https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query"
           "?where=UPPER(NAME)+LIKE+%27%25GATOS%25%27&outFields=*&outSR=4326&f=geojson")
OSM_URL = "https://api.openstreetmap.org/api/0.6/relation/5335571/full.json"
UA = {"User-Agent": "los-gatos-creek-trail-site (github.com/alexstorer/los-gatos-creek-trail)"}
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")
SRC_GIS = os.path.join(DATA, "source", "los_gatos_creek_trail_reaches_sjgis.geojson")
SRC_OSM = os.path.join(DATA, "source", "osm_relation_5335571.json")

# Cut points along the long county feature (Bascom Ave → Vasona Lake), as [lat, lng] of the road crossing.
COUNTY_CUTS = [
    ("CAM1", "Bascom Ave To Campbell Ave", "CAMPBELL", None),
    ("CAM2", "Campbell Ave To San Tomas Expwy", "CAMPBELL", [37.2871, -121.9381]),
    ("LGCP", "San Tomas Expwy To Hwy 85", "SCC", [37.2721, -121.9488]),
    ("VAS1", "Hwy 85 To Vasona Lake", "SCC", [37.2577, -121.9617]),
]
# Cut points along the OSM chain (Vasona Lake → Lexington Dam).
OSM_CUTS = [
    ("LG1", "Vasona Lake To Hwy 9 (Los Gatos-Saratoga Rd)", "SCC", None),
    ("LG2", "Hwy 9 To Main St", "TOWN", [37.2273, -121.9772]),
    ("LG3", "Main St To Lexington Dam", "TOWN", [37.2214, -121.9817]),
]
UNPAVED = {"gravel", "unpaved", "dirt", "compacted", "fine_gravel", "ground"}

def mi(coords):
    R = 3958.8; s = 0
    for (x1, y1), (x2, y2) in zip(coords, coords[1:]):
        p1, p2 = math.radians(y1), math.radians(y2)
        a = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(x2 - x1) / 2) ** 2
        s += 2 * R * math.asin(math.sqrt(a))
    return s

def rnd(c):
    if isinstance(c[0], (int, float)):
        return [round(c[0], 5), round(c[1], 5)]
    out = [rnd(x) for x in c]
    if out and isinstance(out[0][0], float):          # drop repeated vertices
        o = [out[0]]
        for p in out[1:]:
            if p != o[-1]: o.append(p)
        return o
    return out

def nearest(coords, ll):
    return min(range(len(coords)), key=lambda i: (coords[i][1] - ll[0]) ** 2 + (coords[i][0] - ll[1]) ** 2)

def cut(coords, cuts):
    """Split a [lng,lat] line at the vertices nearest each cut point; yields (id, name, owner, piece)."""
    idx = [0] + [nearest(coords, c[3]) for c in cuts[1:]] + [len(coords) - 1]
    for (rid, name, owner, _), a, b in zip(cuts, idx, idx[1:]):
        yield rid, name, owner, coords[a:b + 1]

def feat(rid, name, status, coords, owner, surface, opened=None, mtype="LineString", miles=None):
    return {"type": "Feature", "geometry": {"type": mtype, "coordinates": rnd(coords)},
            "properties": {"id": rid, "name": " ".join(name.split()), "status": status,
                           "mi": round(miles if miles is not None else mi(coords), 2),
                           "opened": opened, "owner": owner, "surface": surface}}

def from_gis(src):
    feats, county_end = [], None
    for f in src["features"]:
        p = f["properties"]; g = f.get("geometry")
        if not g: continue
        rid = (p.get("REACHID") or "").strip()
        status = p["DEVELOPMENTSTATUS"]
        if status == "Identify": continue                # an unbuilt idea with no alignment yet
        op = p.get("DATEOPENED")
        opened = datetime.datetime.utcfromtimestamp(op / 1000).strftime("%Y-%m") if op else None
        if rid:
            name = (p.get("REACHNAME") or "").strip()
            if " - " in name: name = name.split(" - ", 1)[1].strip()
            feats.append(feat(rid, name or rid, status, g["coordinates"], p.get("OWNERLAND"), p.get("SURFACE"),
                              opened, g["type"], p.get("LENGTHMI") or 0))
            continue
        L = p.get("LENGTHMI") or 0
        if L > 3:                                        # the long county feature, Bascom → Vasona
            coords = g["coordinates"]
            if coords[0][1] < coords[-1][1]: coords = coords[::-1]
            county_end = coords[-1]
            for rid, name, owner, piece in cut(coords, COUNTY_CUTS):
                feats.append(feat(rid, name, status, piece, owner, p.get("SURFACE")))
        elif L > 1:                                      # parallel path on the other bank in Campbell
            feats.append(feat("CAM-E", "East-bank path: Campbell Ave To San Tomas Expwy", status, g["coordinates"], "CAMPBELL", p.get("SURFACE"), mtype=g["type"]))
        else:
            feats.append(feat("Connector", "Connector", status, g["coordinates"], p.get("OWNERLAND"), p.get("SURFACE"), mtype=g["type"]))
    return feats, county_end

def from_osm(osm, start):
    """Chain the relation's ways south of `start` ([lng,lat]) into one line, keeping each vertex's surface."""
    nodes = {e["id"]: (e["lon"], e["lat"]) for e in osm["elements"] if e["type"] == "node"}
    ways = [e for e in osm["elements"] if e["type"] == "way"]
    south = [w for w in ways if min(nodes[n][1] for n in w["nodes"]) < start[1] + 0.008 and max(nodes[n][1] for n in w["nodes"]) < 37.2530]
    # begin with the way passing nearest the county feature's end, trimmed to the part south of it
    def d2(n): x, y = nodes[n]; return (x - start[0]) ** 2 + (y - start[1]) ** 2
    first = min(south, key=lambda w: min(d2(n) for n in w["nodes"]))
    k = min(range(len(first["nodes"])), key=lambda i: d2(first["nodes"][i]))
    ns = first["nodes"]
    seq = ns[k:] if nodes[ns[-1]][1] < nodes[ns[0]][1] else ns[:k + 1][::-1]
    chain = [(n, first["tags"].get("surface")) for n in seq]
    used = {first["id"]}
    while True:
        tail = chain[-1][0]
        nxt = next((w for w in south if w["id"] not in used and tail in (w["nodes"][0], w["nodes"][-1])), None)
        if not nxt: break
        used.add(nxt["id"])
        ns = nxt["nodes"] if nxt["nodes"][0] == tail else nxt["nodes"][::-1]
        chain += [(n, nxt["tags"].get("surface")) for n in ns[1:]]
    coords = [nodes[n] for n, _ in chain]
    feats = []
    for rid, name, owner, piece in cut(coords, OSM_CUTS):
        a = coords.index(piece[0]); surf = [s for _, s in chain[a:a + len(piece)]]
        gravel = sum(1 for s in surf if s in UNPAVED) > len(surf) / 2
        feats.append(feat(rid, name, "Open Interim" if gravel else "Open Paved", piece, owner, "Gravel" if gravel else "Paved"))
    return feats

def summary(fc):
    out = {}
    for f in fc["features"]:
        p = f["properties"]; out.setdefault(p["id"], (p["status"], p["opened"], p["mi"]))
    return out

def fetch(url, path):
    data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120).read()
    open(path, "wb").write(data)
    return json.loads(data)

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--offline", action="store_true")
    a = ap.parse_args()
    gis = json.load(open(SRC_GIS)) if a.offline else fetch(GIS_URL, SRC_GIS)
    osm = json.load(open(SRC_OSM)) if a.offline else fetch(OSM_URL, SRC_OSM)
    feats, end = from_gis(gis)
    if not end: sys.exit("County feature (Bascom → Vasona) not found in the City layer; check COUNTY_CUTS.")
    feats += from_osm(osm, end)
    new = {"type": "FeatureCollection", "features": feats}
    old_path = os.path.join(DATA, "reaches.geojson")
    old = summary(json.load(open(old_path))) if os.path.exists(old_path) else {}
    cur = summary(new)
    changes = []
    for rid in sorted(set(old) | set(cur)):
        if rid not in old: changes.append(f"  NEW      {rid}: {cur[rid]}")
        elif rid not in cur: changes.append(f"  REMOVED  {rid}: {old[rid]}")
        elif old[rid] != cur[rid]: changes.append(f"  CHANGED  {rid}: {old[rid]} -> {cur[rid]}")
    json.dump(new, open(old_path, "w"), separators=(",", ":"))
    open(os.path.join(DATA, "reaches.js"), "w").write("const REACHES=" + json.dumps(new, separators=(",", ":")) + ";")
    print(f"{len(feats)} features written.")
    print("Changes since last run:\n" + ("\n".join(changes) if changes else "  none"))
    if changes:
        print("\nReview: BUILT (geo.js), GAPS / REACH_NOTES / MAINLINE (data.js), and the intro copy.")

if __name__ == "__main__":
    sys.exit(main())
