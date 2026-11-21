#!/usr/bin/env python3
"""Refresh the trail geometry from the City of San José Trail Reach GIS layer.

Downloads every reach whose name contains "COYOTE", trims it to what the site uses,
writes data/reaches.geojson and data/reaches.js, and prints what changed since the
last run (new or removed reaches, status changes, new opening dates) so you know
which hand-maintained tables in data/data.js and data/geo.js to revisit.

    python3 scripts/update_reaches.py            # fetch from the City GIS
    python3 scripts/update_reaches.py --file X   # use an already-downloaded GeoJSON
"""
import argparse, datetime, json, os, sys, urllib.request

URL = ("https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query"
       "?where=UPPER(NAME)+LIKE+%27%25COYOTE%25%27&outFields=*&outSR=4326&f=geojson")
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")
SKIP = {"COY07-1", "COY07-2"}          # alternate on-street alignments; COY07.1 is kept
NAMES = {                              # reaches with no usable GIS name
    "COY00": "Hwy 237 to Dixon Landing Rd (Milpitas)",
    "COY19B": "Shady Oaks / Odette Morrow Trail",
    "COY13B": "Spur near Tully Rd",
    "COY15-1": "Tuers Rd ramp at Singleton crossing",
}

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

def trim(src):
    feats = []
    for f in src["features"]:
        p = f["properties"]; rid = p.get("REACHID") or ""
        if rid.startswith("COA") or rid in SKIP or not f.get("geometry"):
            continue                                   # COA = Coyote Alamitos Canal, a different trail
        name = (p.get("REACHNAME") or "").strip()
        if " - " in name: name = name.split(" - ", 1)[1].strip()
        if not name:
            name = NAMES.get(rid)
            if not name and (p.get("LENGTHMI") or 0) > 5:
                name, rid = "Coyote Creek Parkway: Metcalf Rd to Anderson Dam", "PARKWAY"
            name = name or "Connector"
        if rid == "COY00": name = NAMES["COY00"]
        if rid == "COY06" and p.get("DEVELOPMENTSTATUS") == "Design":
            rid = "COY06-D"                            # the City reuses COY06 for two pieces
        op = p.get("DATEOPENED")
        feats.append({"type": "Feature",
            "geometry": {"type": f["geometry"]["type"], "coordinates": rnd(f["geometry"]["coordinates"])},
            "properties": {"id": rid, "name": " ".join(name.split()), "status": p["DEVELOPMENTSTATUS"],
                "mi": round(p.get("LENGTHMI") or 0, 2),
                "opened": datetime.datetime.utcfromtimestamp(op / 1000).strftime("%Y-%m") if op else None,
                "owner": p.get("OWNERLAND"), "surface": p.get("SURFACE")}})
    return {"type": "FeatureCollection", "features": feats}

def summary(fc):
    out = {}
    for f in fc["features"]:
        p = f["properties"]; out.setdefault(p["id"], (p["status"], p["opened"], p["mi"]))
    return out

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--file")
    a = ap.parse_args()
    if a.file:
        src = json.load(open(a.file))
    else:
        req = urllib.request.Request(URL, headers={"User-Agent": "coyote-creek-trail-site (github.com/alexstorer)"})
        src = json.load(urllib.request.urlopen(req, timeout=120))
    new = trim(src)
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
    print(f"{len(new['features'])} features written.")
    print("Changes since last run:\n" + ("\n".join(changes) if changes else "  none"))
    if changes:
        print("\nReview: BUILT (geo.js), GAPS / REACH_NOTES / MAINLINE (data.js), and the intro copy.")

if __name__ == "__main__":
    sys.exit(main())
