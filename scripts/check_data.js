// Cross-checks one trail's hand-maintained data files. Run: node scripts/check_data.js trails/<slug>
// Exits non-zero if anything references an event, document, plan sheet, photo or reach that doesn't exist.
const fs = require("fs"), path = require("path");
const root = path.resolve(process.argv[2] || ".");
const src = ["data/reaches.js", "data/data.js", "data/geo.js"].map(f => fs.readFileSync(path.join(root, f), "utf8")).join("\n");
const out = new Function(src + `; return { REACHES, MAINLINE, TIMELINE, EVENT_GEO, OUTCOMES, DOCS, DOC_GEO, DOC_DATES,
  SCHEMATICS, SCH_GROUPS, PHOTOS, BUILT, CHAPTERS, GAPS, QUOTES, SITE_UPDATED };`)();
const { REACHES, MAINLINE, TIMELINE, EVENT_GEO, OUTCOMES, DOCS, DOC_GEO, DOC_DATES, SCHEMATICS, SCH_GROUPS, PHOTOS, BUILT, CHAPTERS, GAPS } = out;
const ids = new Set(REACHES.features.map(f => f.properties.id));
const dates = new Set(TIMELINE.map(e => e.d));
const titles = new Set(DOCS.flatMap(g => g.items.map(i => i[0])));
const sch = new Set(SCHEMATICS.map(s => s.k));
const photos = new Set(PHOTOS.map(p => p.f));
const problems = [], warnings = [];
const need = (cond, msg) => { if (!cond) problems.push(msg); };
MAINLINE.forEach(id => need(ids.has(id), `MAINLINE id not in GIS: ${id}`));
TIMELINE.forEach(e => { if (!EVENT_GEO[e.d]) warnings.push(`event without location: ${e.d} ${e.t}`); });
Object.entries(EVENT_GEO).forEach(([d, g]) => {
  need(dates.has(d), `EVENT_GEO key with no event: ${d}`);
  (g.r || []).forEach(id => need(ids.has(id), `EVENT_GEO ${d}: unknown reach ${id}`));
  [].concat(g.sch || []).forEach(k => need(sch.has(k), `EVENT_GEO ${d}: unknown plan sheet ${k}`));
  (g.ph || []).forEach(f => need(photos.has(f), `EVENT_GEO ${d}: unknown photo ${f}`));
});
Object.keys(OUTCOMES).forEach(d => need(dates.has(d), `OUTCOMES key with no event: ${d}`));
titles.forEach(t => { if (!(t in DOC_GEO)) warnings.push(`document without location: ${t}`); if (!DOC_DATES[t]) warnings.push(`document without date: ${t}`); });
Object.keys(DOC_GEO).forEach(t => need(titles.has(t), `DOC_GEO key matches no document: ${t}`));
Object.keys(DOC_DATES).forEach(t => need(titles.has(t), `DOC_DATES key matches no document: ${t}`));
Object.values(DOC_GEO).forEach(r => (r || []).forEach(id => need(ids.has(id), `DOC_GEO: unknown reach ${id}`)));
SCHEMATICS.forEach(s => {
  s.r.forEach(id => need(ids.has(id), `plan sheet ${s.k}: unknown reach ${id}`));
  ["", "_thumb"].forEach(x => need(fs.existsSync(path.join(root, `img/schematics/${s.k}${x}.jpg`)), `missing image img/schematics/${s.k}${x}.jpg`));
});
const grouped = SCH_GROUPS.flatMap(g => g[1]);
grouped.forEach(k => need(sch.has(k), `SCH_GROUPS: unknown plan sheet ${k}`));
sch.forEach(k => { if (!grouped.includes(k)) warnings.push(`plan sheet not in any atlas group: ${k}`); });
Object.keys(BUILT).forEach(id => { if (!ids.has(id)) warnings.push(`BUILT id not in GIS: ${id}`); });
CHAPTERS.forEach(c => { need(photos.has(c.ph), `chapter ${c.n}: unknown photo`); c.r.forEach(id => need(ids.has(id), `chapter ${c.n}: unknown reach ${id}`)); });
GAPS.forEach(g => g.ids.forEach(id => need(ids.has(id), `GAPS ${g.name}: unknown reach ${id}`)));
const age = (Date.now() - Date.parse(out.SITE_UPDATED)) / 864e5;
console.log(`SITE_UPDATED ${out.SITE_UPDATED} (${Math.round(age)} days ago) · ${TIMELINE.length} events · ${titles.size} documents · ${sch.size} plan sheets · ${photos.size} photos · ${ids.size} reaches`);
warnings.forEach(w => console.log("warn  " + w));
problems.forEach(p => console.log("ERROR " + p));
console.log(problems.length ? `${problems.length} error(s)` : "OK");
process.exit(problems.length ? 1 : 0);
