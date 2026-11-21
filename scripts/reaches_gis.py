#!/usr/bin/env python3
"""Refresh a trail's geometry from the City of San José Trail Reach GIS layer.

For trails that come entirely from the City layer (see TRAILS below). Downloads the trail's
reaches, trims them to what the site uses, writes trails/<slug>/data/reaches.geojson and
reaches.js, and prints what changed since the last run so you know which hand-maintained
tables in data.js and geo.js to revisit. Coyote Creek and Los Gatos Creek have their own
scripts (reaches_coyote-creek.py, reaches_los-gatos-creek.py).

    python3 scripts/reaches_gis.py five-wounds             # fetch from the City GIS
    python3 scripts/reaches_gis.py five-wounds --offline   # reuse the copy in data/source/
"""
import argparse, datetime, json, os, sys, urllib.request

import urllib.parse
LAYER = "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query"
# slug: (SQL where clause on the City layer, raw-copy file name)
TRAILS = {
    "five-wounds": ("UPPER(NAME) LIKE '%WOUND%' OR UPPER(REACHNAME) LIKE '%WOUND%'", "five_wounds_trail_reaches_sjgis.geojson"),
    "penitencia-creek": ("NAME = 'Penitencia Creek'", "penitencia_creek_reaches_sjgis.geojson"),
    "silver-creek": ("NAME IN ('Lower Silver Creek (North)', 'Upper Silver Creek')", "silver_creek_reaches_sjgis.geojson"),
    "guadalupe-river": ("NAME = 'Guadalupe River'", "guadalupe_river_reaches_sjgis.geojson"),
    "three-creeks": ("NAME = 'Three Creeks'", "three_creeks_reaches_sjgis.geojson"),
}
UA = {"User-Agent": "south-bay-trails-site (github.com/alexstorer/south-bay-trails)"}
HERE = os.path.dirname(os.path.abspath(__file__))

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
        p = f["properties"]; g = f.get("geometry")
        if not g: continue
        rid = (p.get("REACHID") or "").strip() or "Connector"
        name = (p.get("REACHNAME") or "").strip()
        if " - " in name: name = name.split(" - ", 1)[1].strip()
        op = p.get("DATEOPENED")
        feats.append({"type": "Feature",
            "geometry": {"type": g["type"], "coordinates": rnd(g["coordinates"])},
            "properties": {"id": rid, "name": " ".join((name or rid).split()), "status": p["DEVELOPMENTSTATUS"],
                "mi": round(p.get("LENGTHMI") or 0, 2),
                "opened": datetime.datetime.utcfromtimestamp(op / 1000).strftime("%Y-%m") if op else None,
                "owner": (p.get("OWNERLAND") or "").upper() or None, "surface": p.get("SURFACE")}})
    return {"type": "FeatureCollection", "features": feats}

def summary(fc):
    out = {}
    for f in fc["features"]:
        p = f["properties"]; out.setdefault(p["id"], (p["status"], p["opened"], p["mi"]))
    return out

def main():
    global DATA, SRC
    ap = argparse.ArgumentParser(); ap.add_argument("slug", choices=sorted(TRAILS)); ap.add_argument("--offline", action="store_true")
    a = ap.parse_args()
    where, fname = TRAILS[a.slug]
    DATA = os.path.join(HERE, "..", "trails", a.slug, "data")
    os.makedirs(os.path.join(DATA, "source"), exist_ok=True)
    SRC = os.path.join(DATA, "source", fname)
    URL = LAYER + "?" + urllib.parse.urlencode({"where": where, "outFields": "*", "outSR": 4326, "f": "geojson"})
    if a.offline:
        src = json.load(open(SRC))
    else:
        raw = urllib.request.urlopen(urllib.request.Request(URL, headers=UA), timeout=120).read()
        open(SRC, "wb").write(raw); src = json.loads(raw)
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
