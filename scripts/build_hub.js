// Builds data/hub.js: one summary per trail (headline numbers, simplified lines, cover photo) for
// the landing page and the trail switcher. Run after changing any trail's data:
//   node scripts/build_hub.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const meta = JSON.parse(fs.readFileSync(path.join(root, "trails.json"), "utf8"));

// Ramer–Douglas–Peucker on [lat,lng] in degrees (tolerance ~5 m)
function rdp(pts, eps = 0.00005) {
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]];
  let idx = 0, dmax = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i], dx = b[1] - a[1], dy = b[0] - a[0];
    const d = Math.abs(dy * p[1] - dx * p[0] + b[1] * a[0] - b[0] * a[1]) / (Math.hypot(dx, dy) || 1e-12);
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax <= eps) return [a, b];
  return rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps));
}

const trails = [];
for (const m of meta) {
  const dir = path.join(root, "trails", m.slug);
  if (m.pending || !fs.existsSync(path.join(dir, "data", "data.js"))) continue;
  const src = ["data/reaches.js", "data/data.js", "data/geo.js"].map(f => fs.readFileSync(path.join(dir, f), "utf8")).join("\n");
  const T = new Function(src + "; return { REACHES, MAINLINE, GAPS, TIMELINE, DOCS, SCHEMATICS, PHOTOS, NEWS, PROJECTS, SITE_UPDATED, CHAPTERS };")();
  const byId = {};
  T.REACHES.features.forEach(f => (byId[f.properties.id] ||= []).push(f));
  const mi = id => Math.max(0, ...(byId[id] || []).map(f => f.properties.mi));
  const st = id => (byId[id] || [{ properties: {} }])[0].properties.status || "";
  const mainMi = T.MAINLINE.reduce((s, id) => s + mi(id), 0);
  const openMi = T.MAINLINE.filter(id => st(id).startsWith("Open")).reduce((s, id) => s + mi(id), 0);
  const gapMi = T.GAPS.reduce((s, g) => s + g.mi, 0);
  const geom = [];
  let lat0 = 90, lat1 = -90, lng0 = 180, lng1 = -180;
  T.REACHES.features.forEach(f => {
    const g = f.geometry, parts = g.type === "MultiLineString" ? g.coordinates : [g.coordinates];
    parts.forEach(p => {
      const ll = p.map(c => [+c[1].toFixed(5), +c[0].toFixed(5)]);
      ll.forEach(([la, ln]) => { lat0 = Math.min(lat0, la); lat1 = Math.max(lat1, la); lng0 = Math.min(lng0, ln); lng1 = Math.max(lng1, ln); });
      geom.push({ s: f.properties.status, m: T.MAINLINE.includes(f.properties.id) ? 1 : 0, c: rdp(ll) });
    });
  });
  // Strip: mainline reaches north → south as [status, miles]
  const strip = T.MAINLINE.map(id => [st(id), +mi(id).toFixed(2)]);
  const years = T.TIMELINE.map(e => +e.d.slice(0, 4));
  trails.push({
    slug: m.slug, name: m.name, tagline: m.tagline, cover: m.cover,
    mainMi: +mainMi.toFixed(2), openMi: +openMi.toFixed(2), gapMi: +gapMi.toFixed(2), gaps: T.GAPS.length,
    spent: +T.PROJECTS.reduce((s, p) => s + p.cost, 0).toFixed(2),
    events: T.TIMELINE.length, docs: T.DOCS.reduce((s, g) => s + g.items.length, 0), sheets: T.SCHEMATICS.length,
    photos: T.PHOTOS.length, news: T.NEWS.length, span: [Math.min(...years), Math.max(...years)], updated: T.SITE_UPDATED,
    bounds: [[lat0, lng0], [lat1, lng1]], strip, geom,
  });
}
// Order the switcher and cards as listed in trails.json
const out = { built: new Date().toISOString().slice(0, 10), trails };
fs.writeFileSync(path.join(root, "data", "hub.js"), "const HUB=" + JSON.stringify(out) + ";\n");
console.log(trails.map(t => `${t.slug}: ${t.openMi} open / ${t.gapMi} gap / ${t.mainMi} mapped · ${t.geom.length} lines`).join("\n"));
console.log("data/hub.js", (fs.statSync(path.join(root, "data", "hub.js")).size / 1024).toFixed(0) + " KB");
