#!/usr/bin/env python3
"""Refresh the Bay Trail page's geometry from two layers that disagree about what is open.

1. The City of San José Trail Reach layer (NAME = 'Bay Trail'): the City's own planned route
   (BAY01 … BAY09D plus a "Connector"). These reaches form MAINLINE on the page.
2. MTC's regional San Francisco Bay Trail layer: segments marked "Existing" whose city field
   includes San Jose. Most are dirt levee trails on the Don Edwards refuge, at Alviso Marina
   County Park and on Valley Water levees that the City layer leaves out. They are added as
   side features with ids "MTC-<segment>", a PARENT guess (nearest City reach) printed below,
   and status "Open Paved" or "Open Interim" from MTC's surface field.

MTC segments are skipped when they duplicate a City reach (DUPLICATES) or belong to Sunnyvale
or Fremont (their trails run mostly outside San José). Writes trails/bay-trail/data/
reaches.geojson and reaches.js with the same properties as the other trails
(id, name, status, mi, opened, owner, surface), and prints what changed since the last run.

    python3 scripts/reaches_bay-trail.py             # fetch both layers
    python3 scripts/reaches_bay-trail.py --offline   # reuse the copies in data/source/
"""
import argparse, json, math, os, sys, urllib.parse, urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
_spec = importlib.util.spec_from_file_location("reaches_gis", os.path.join(os.path.dirname(os.path.abspath(__file__)), "reaches_gis.py"))
G = importlib.util.module_from_spec(_spec); _spec.loader.exec_module(G)   # reuse trim(), rnd(), summary()

CITY = G.LAYER
CITY_WHERE = G.TRAILS["bay-trail"][0]
MTC = "https://services3.arcgis.com/i2dkYWmb4wHvYPda/arcgis/rest/services/bay_trail/FeatureServer/0/query"
MTC_WHERE = "status = 'Existing' AND city LIKE '%San Jose%'"
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "trails", "bay-trail", "data")
SRC_CITY = os.path.join(DATA, "source", "bay_trail_reaches_sjgis.geojson")
SRC_MTC = os.path.join(DATA, "source", "bay_trail_existing_mtc.geojson")

# MTC segments that draw the same path as a City reach (keep the City version).
DUPLICATES = {"3038": "Connector", "3044": "BAY09D"}
SKIP_AGENCY = ("Sunnyvale", "Fremont")
# MTC has no segment names; these describe where each one runs.
NAMES = {
    "3000": "Refuge levee loop: Alviso Marina north",
    "3000.1": "Refuge levee loop: north side",
    "3000.2": "Refuge levee loop: northwest corner",
    "3000.3": "Refuge levee loop: west side, back to the marina",
    "3042": "Refuge trails at the Environmental Education Center",
    "3043": "Refuge spur north of the education center",
    "3022": "Alviso Marina County Park",
    "3030": "Valley Water levee, Gold St bridge to the marina",
    "3028.1": "Hwy 237 trail, Zanker Rd to Coyote Creek",
    "3012": "Coyote Creek Trail in Milpitas, Hwy 237 to Dixon Landing",
    "3004": "McCarthy Blvd link at Dixon Landing (Milpitas)",
}
OWNER = {"U.S. Fish": "USFWS", "Santa Clara County": "COUNTY", "Santa Clara Valley Water": "SCVWD",
         "Milpitas": "MILPITAS", "San Jose PRNS": "PRNS", "San Jose Public Works": "DOT"}

def fetch(url, where, dest, offline):
    if offline:
        return json.load(open(dest))
    q = url + "?" + urllib.parse.urlencode({"where": where, "outFields": "*", "outSR": 4326, "f": "geojson"})
    raw = urllib.request.urlopen(urllib.request.Request(q, headers=G.UA), timeout=120).read()
    open(dest, "wb").write(raw)
    return json.loads(raw)

def seg_id(n):
    n = float(n)
    return str(int(n)) if n == int(n) else str(n)

def pts(g):
    return [c for part in (g["coordinates"] if g["type"] == "MultiLineString" else [g["coordinates"]]) for c in part]

def dist(a, b):  # metres, equirectangular
    k = math.cos(math.radians(37.43))
    return 111320 * math.hypot((a[0] - b[0]) * k, a[1] - b[1])

def nearest(f, city):
    best = (1e18, None)
    P = pts(f["geometry"])[::3] or pts(f["geometry"])
    for c in city:
        Q = pts(c["geometry"])
        d = min(dist(p, q) for p in P for q in Q)
        if d < best[0]: best = (d, c["properties"]["id"])
    return best

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--offline", action="store_true")
    a = ap.parse_args()
    os.makedirs(os.path.join(DATA, "source"), exist_ok=True)
    city = G.trim(fetch(CITY, CITY_WHERE, SRC_CITY, a.offline))["features"]
    mtc_raw = fetch(MTC, MTC_WHERE, SRC_MTC, a.offline)["features"]

    side, skipped = [], []
    for f in mtc_raw:
        p, g = f["properties"], f.get("geometry")
        if not g: continue
        sid = seg_id(p["segment_nu"])
        if sid in DUPLICATES: skipped.append(f"  {sid}: same path as City {DUPLICATES[sid]}"); continue
        if any(s in (p.get("agency") or "") for s in SKIP_AGENCY): skipped.append(f"  {sid}: {p['agency']}"); continue
        surf = (p.get("surface") or "").strip() or None
        yr = (p.get("year_cmplt") or "").strip() or None
        side.append({"type": "Feature", "geometry": {"type": g["type"], "coordinates": G.rnd(g["coordinates"])},
            "properties": {"id": "MTC-" + sid, "name": NAMES.get(sid, f"MTC segment {sid} ({p.get('agency')})"),
                "status": "Open Paved" if surf == "Paved" else "Open Interim",
                "mi": round(float(p.get("miles") or 0), 2), "opened": yr,
                "owner": next((v for k, v in OWNER.items() if (p.get("agency") or "").startswith(k)), None),
                "surface": surf}})
    side.sort(key=lambda f: f["properties"]["id"])

    # PARENT guess: the nearest City reach. Pieces of one MTC loop (3000, 3000.1 …) share a parent.
    parents, groups = {}, {}
    for f in side:
        d, pid = nearest(f, city)
        grp = f["properties"]["id"].split(".")[0]
        if grp not in groups or d < groups[grp][0]: groups[grp] = (d, pid)
    for f in side:
        parents[f["properties"]["id"]] = groups[f["properties"]["id"].split(".")[0]][1]

    new = {"type": "FeatureCollection", "features": city + side}
    old_path = os.path.join(DATA, "reaches.geojson")
    old = G.summary(json.load(open(old_path))) if os.path.exists(old_path) else {}
    cur = G.summary(new)
    changes = []
    for rid in sorted(set(old) | set(cur)):
        if rid not in old: changes.append(f"  NEW      {rid}: {cur[rid]}")
        elif rid not in cur: changes.append(f"  REMOVED  {rid}: {old[rid]}")
        elif old[rid] != cur[rid]: changes.append(f"  CHANGED  {rid}: {old[rid]} -> {cur[rid]}")
    json.dump(new, open(old_path, "w"), separators=(",", ":"))
    open(os.path.join(DATA, "reaches.js"), "w").write("const REACHES=" + json.dumps(new, separators=(",", ":")) + ";")

    tot = lambda fs, pred: sum(f["properties"]["mi"] for f in fs if pred(f["properties"]))
    print(f"{len(city)} City reaches ({tot(city, lambda p: p['status'].startswith('Open')):.2f} mi open of {tot(city, lambda p: True):.2f})"
          f" + {len(side)} MTC existing segments ({tot(side, lambda p: True):.2f} mi) written.")
    print("Skipped MTC segments:\n" + ("\n".join(skipped) or "  none"))
    print("PARENT = " + json.dumps(parents))
    print("Changes since last run:\n" + ("\n".join(changes) if changes else "  none"))
    if changes:
        print("\nReview: BUILT, PARENT/SIDE_KIND, GAPS, REACH_NOTES and the intro copy.")

if __name__ == "__main__":
    sys.exit(main())
