#!/usr/bin/env python3
"""Cut a plan sheet / map out of a PDF page into img/schematics/<key>.jpg (+ _thumb.jpg).

    python3 scripts/make_figure.py SOURCE.pdf PAGE KEY [--dpi 120] [--crop x0 y0 x1 y1]

--crop takes fractions of the page (0–1), e.g. --crop 0.02 0.05 0.98 0.41 for the top
third. Without --crop the page is trimmed to its non-white content. Needs pdftoppm
(poppler) and Pillow. Then add an entry to SCHEMATICS (and SCH_GROUPS) in data/geo.js.
"""
import argparse, os, subprocess, sys, tempfile
from PIL import Image, ImageChops

OUT = os.environ.get("FIG_OUT") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "img", "schematics")

def trim(im, pad=12):
    d = ImageChops.difference(im, Image.new("RGB", im.size, (255, 255, 255))).convert("L").point(lambda v: 255 if v > 30 else 0)
    bb = d.getbbox() or (0, 0, im.width, im.height)
    return im.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(im.width, bb[2] + pad), min(im.height, bb[3] + pad)))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf"); ap.add_argument("page", type=int); ap.add_argument("key")
    ap.add_argument("--dpi", type=int, default=120); ap.add_argument("--crop", type=float, nargs=4)
    a = ap.parse_args()
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(["pdftoppm", "-f", str(a.page), "-l", str(a.page), "-r", str(a.dpi), "-png", a.pdf, f"{t}/p"], check=True)
        im = Image.open(os.path.join(t, sorted(os.listdir(t))[0])).convert("RGB")
    if a.crop:
        x0, y0, x1, y1 = a.crop
        im = im.crop((int(x0 * im.width), int(y0 * im.height), int(x1 * im.width), int(y1 * im.height)))
    im = trim(im)
    os.makedirs(OUT, exist_ok=True)
    full = im.copy(); full.thumbnail((1800, 1800)); full.save(f"{OUT}/{a.key}.jpg", quality=80, optimize=True, progressive=True)
    th = im.copy(); th.thumbnail((560, 560)); th.save(f"{OUT}/{a.key}_thumb.jpg", quality=76, optimize=True)
    print(f"wrote img/schematics/{a.key}.jpg {full.size} and _thumb.jpg")

if __name__ == "__main__":
    sys.exit(main())
