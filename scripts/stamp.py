#!/usr/bin/env python3
"""Mark a content update: set SITE_UPDATED (default: today) in one trail's data.js, or all of
them, bump the ?v= cache-busting stamps in every page, and rebuild data/hub.js.

    python3 scripts/stamp.py                      # all trails, today
    python3 scripts/stamp.py guadalupe-river      # one trail
    python3 scripts/stamp.py coyote-creek 2027-03-15
"""
import glob, os, re, subprocess, sys, time
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
args = sys.argv[1:]
day = next((a for a in args if re.fullmatch(r"\d{4}-\d{2}-\d{2}", a)), time.strftime("%Y-%m-%d"))
slugs = [a for a in args if a != day] or [os.path.basename(os.path.dirname(os.path.dirname(p))) for p in glob.glob(os.path.join(root, "trails", "*", "data", "data.js"))]
for slug in slugs:
    p = os.path.join(root, "trails", slug, "data", "data.js"); s = open(p).read()
    s, n = re.subn(r'const SITE_UPDATED = "[^"]*";', f'const SITE_UPDATED = "{day}";', s); assert n == 1, slug
    open(p, "w").write(s)
v = time.strftime("%Y%m%d%H%M"); m = 0
for p in [os.path.join(root, "index.html")] + glob.glob(os.path.join(root, "trails", "*", "index.html")):
    h = open(p).read(); h, k = re.subn(r"\?v=\d+", "?v=" + v, h); m += k; open(p, "w").write(h)
subprocess.run(["node", os.path.join(root, "scripts", "build_hub.js")], check=True, stdout=subprocess.DEVNULL)
print(f"SITE_UPDATED = {day} for {', '.join(sorted(slugs))}; {m} asset stamps set to v={v}; data/hub.js rebuilt")
