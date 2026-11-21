// Location links: which reaches each event, document and plan sheet refers to.
// R(from, to) is a range along MAINLINE (downstream → upstream).
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const LOWER = R("SCL01", "SCL17");
const FLOOD13 = R("SCL01", "SCL10");                  // Valley Water Reaches 1–3: Coyote Creek → I-680
const FLOOD46 = R("SCL10", "SCL16");                  // Reaches 4–6: I-680 → Cunningham Ave
const UPPER = ["SCU01", "SCU02"];
const LAKE = [37.3368, -121.8056], DOBERN = [37.35265, -121.83286], CONFLUENCE = [37.35648, -121.87364];

const BUILT = {
  SCL05A: { y: 2004, approx: true }, SCL07A: { y: 2006, approx: true }, SCL09A: { y: 2005, approx: true },
  SCL11A: { y: 2005.7 }, SCL12: { y: 2007, approx: true }, SCL13: { y: 2015.9, approx: true }, SCL15: { y: 2014, approx: true },
  SCL17: { y: 1990, approx: true }, SCU01: { y: 2000, approx: true },
};

const SCHEMATICS = [
  { k: "city-lsc-map", t: "City trail map: Lower Silver Creek, Coyote Creek to Lake Cunningham", d: "City of San José Trail Program map", r: LOWER, src: SRC.cityMap, short: "Trail map" },
  { k: "city-upper-map", t: "City trail map: Silver Creek Valley and Upper Silver Creek", d: "City of San José Trail Program map", r: UPPER, src: SRC.cityUpperMap, short: "Trail map" },
  { k: "vw-reaches", t: "Valley Water's flood project, Reaches 1–6, with the old 1% flood zone", d: "Valley Water board attachment, 2015", r: R("SCL01", "SCL16"), src: SRC.vwReachMap, short: "Reach map" },
  { k: "vw-r4-6-map", t: "Reaches 4–6: I-680 to Cunningham Ave", d: "Valley Water board presentation, May 2017", r: FLOOD46, src: SRC.m17_0245, short: "Location map" },
  { k: "cip-r4-6", t: "Reaches 4–6 project location", d: "Valley Water capital plan 2021–25", r: FLOOD46, src: SRC.cip2021, short: "Location map" },
  { k: "vw-funding", t: "Who paid for Reaches 4–6: stimulus, state and district money", d: "Valley Water funding chart, Sept 2015", r: FLOOD46, src: SRC.vwFunding, short: "Funding chart" },
  { k: "vw-5c-cost", t: "Reaches 5C–6A: $18.2M award, $20.9M final", d: "Valley Water board presentation, Nov 2017", r: ["SCL13", "SCL14"], src: SRC.m17_0741, short: "Cost slide" },
  { k: "vw-jackson-photo", t: "The rebuilt creek, looking upstream from Jackson Ave", d: "Valley Water board presentation, May 2017", r: ["SCL10", "SCL11B"], src: SRC.m17_0245, short: "Photo" },
  { k: "cip-1969", t: "February 1969: Silver Creek floods the future Lake Cunningham", d: "Valley Water capital plan 2021–25", r: ["SCL17"], src: SRC.cip2021, short: "1969 flood" },
];
const SCH_GROUPS = [
  ["Trail maps", ["city-lsc-map", "city-upper-map"]],
  ["The flood project", ["vw-reaches", "vw-r4-6-map", "cip-r4-6", "vw-funding", "vw-5c-cost", "vw-jackson-photo"]],
  ["Lake Cunningham", ["cip-1969"]],
];

const EVENT_GEO = {
  "1969-02": { pt: LAKE, w: "Lake Cunningham", r: ["SCL17"], sch: "cip-1969" },
  "1978": { pt: LAKE, w: "Lake Cunningham", r: ["SCL17"], ph: ["Lake Cunningham.jpg"] },
  "1983": { r: LOWER },
  "1993": { r: ["SCL04", "SCL05"] },
  "2000": { r: LOWER },
  "2000-10-10": { r: R("SCL01", "SCL16"), sch: "vw-reaches" },
  "2003-01": { r: LOWER },
  "2004": { r: R("SCL01", "SCL07"), ph: ["Miguelita or Lower Silver Creek at 101.jpg"] },
  "2005": { r: R("SCL07", "SCL10"), pt: DOBERN },
  "2007-12-04": { r: LOWER, sch: "city-lsc-map" },
  "2009-04-16": { r: FLOOD46, sch: "vw-funding" },
  "2010-08-24": { r: R("SCL10", "SCL12"), sch: "vw-r4-6-map" },
  "2012-04-24": { r: ["SCL13", "SCL14"], sch: "vw-5c-cost" },
  "2013-12": { r: R("SCL10", "SCL12"), sch: "vw-jackson-photo" },
  "2014-06-30": { r: R("SCL12", "SCL15") },
  "2014-09": { r: ["SCL13", "SCL14"] },
  "2015-08-19": { r: R("SCL01", "SCL16") },
  "2015-10-27": { r: FLOOD46 },
  "2016-06-14": { pt: DOBERN, w: "Dobern bridge", r: ["SCL11A", "SCL11B"] },
  "2018-06-26": { pt: DOBERN, w: "Dobern bridge", r: ["SCL11A"] },
  "2018-08-14": { r: ["SCL15", "SCL16"] },
  "2019-10": { pt: LAKE, w: "Lake Cunningham", r: ["SCL17"], ph: ["Lower Silver Creek draining from Lake Cunningham Regional Park.jpg"] },
  "2020-12": { r: FLOOD46, sch: "cip-r4-6" },
  "2021-11-26": { r: R("SCL01", "SCL16") },
  "2023-09-12": { pt: CONFLUENCE, w: "Wooster Ave", r: ["SCL01", "SCL02"], ph: ["Miguelita or Lower Silver Creek confluence with Coyote Creek.jpg"] },
  "2024-11-26": { r: LOWER },
  "2025-04-07": { r: LOWER },
  "2025-08-04": { r: ["SCL09", "SCL11A"] },
  "2026-04-13": { r: FLOOD13 },
  "2028": { r: FLOOD13 },
};

const DOC_GEO = {
  "Lower Silver Creek Trail Master Plan (2007)": LOWER,
  "City map: Lower Silver Creek Trail": LOWER,
  "City map: Silver Creek Valley & Upper Silver Creek trails": UPPER,
  "Valley Water: flood project reach map (2015)": R("SCL01", "SCL16"),
  "CEQA: Lower Silver Creek watershed project (2000)": R("SCL01", "SCL16"),
  "CEQA: Lower Silver Creek Trail Master Plan (2007)": LOWER,
  "Board memo 15-0343: project history": R("SCL01", "SCL16"),
  "Reaches 4–6 external funding chart (2015)": FLOOD46,
  "Consultant chronology (2015)": FLOOD46,
  "Board memo 16-0342: Dobern bridge crossing": ["SCL11A", "SCL11B"],
  "Board memo 17-0245: Reaches 4–5B completion": R("SCL10", "SCL12"),
  "Board memo 17-0741: Reaches 5C–6A completion": ["SCL13", "SCL14"],
  "Board memo 18-0338: Cunningham detention award": ["SCL17"],
  "Board memo 18-0595: Reach 6B acceptance": ["SCL15", "SCL16"],
  "Performance audit of the project's consultant agreement (2019)": FLOOD46,
  "Board memo 20-1142: Reaches 5C–6A final acceptance": ["SCL13", "SCL14"],
  "Capital plan 2018–22, flood chapter": FLOOD46,
  "Capital plan 2021–25, flood chapter": FLOOD46,
  "Park Trust Fund annual report, FY2013–14": R("SCL12", "SCL15"),
  "Council memo: Dobern bridge retaining walls (2018)": ["SCL11A", "SCL11B"],
  "Council memo: Five Wounds corridor purchase (2023)": ["SCL01", "SCL02"],
  "Trail Network annual report (2025)": LOWER,
  "Trail Network annual report (2026)": FLOOD13,
  "Trail Network presentation (Apr 2026)": FLOOD13,
};

// Endpoint labels, downstream end first.
const REACH_ENDS = {
  SCL01: ["Coyote Creek", "Wooster Ave"], SCL02: ["Wooster Ave", "Hwy 101"], SCL03: ["Hwy 101", "Schulte Dr"], SCL04: ["Schulte Dr", "McKee Rd"],
  SCL05: ["McKee Rd", "Checkers Dr"], SCL06: ["Checkers Dr", "Alum Rock Ave"], SCL07: ["Alum Rock Ave", "Lausett Ave"], SCL08: ["Lausett Ave", "San Antonio St"],
  SCL09: ["San Antonio St", "Kammerer Ave"], SCL10: ["Kammerer Ave", "Jackson Ave"], SCL11B: ["Jackson Ave", "Dobern bridge"], SCL11A: ["Dobern bridge", "Dobern Ave"],
  SCL12: ["Dobern Ave", "Story Rd"], SCL13: ["Story Rd", "Brenford Dr"], SCL14: ["Brenford Dr", "Foxdale Dr"], SCL15: ["Foxdale Dr", "Ocala Ave"],
  SCL16: ["Ocala Ave", "Cunningham Dr"], SCL17: ["Capitol Expwy", "Lake Cunningham"], SCU01: ["Greenyard St", "Silver Creek Rd"], SCU02: ["Silver Creek Rd", "The Ranch"],
  SCL05A: ["Minus De Oro", "Plata Arroyo Park"], SCL07A: ["Lausett Ave", "Lausett Ave"], SCL09A: ["Kammerer Ave", "Kammerer Ave"], SCL11C: ["Dobern bridge", "Capitol Ave"], SCL18: ["Lake Cunningham", "Tully Rd"],
};

const DOC_DATES = {
  "Lower Silver Creek Trail Master Plan (2007)": ["2007-12-10", "printed"],
  "City map: Lower Silver Creek Trail": ["2006-11", "file"],
  "City map: Silver Creek Valley & Upper Silver Creek trails": ["2008-02", "file"],
  "Valley Water: flood project reach map (2015)": ["2015-09", "file"],
  "CEQA: Lower Silver Creek watershed project (2000)": ["2000-10", "filed"],
  "CEQA: Lower Silver Creek Trail Master Plan (2007)": ["2007-07", "filed"],
  "Board memo 15-0343: project history": ["2015-10-13", "printed"],
  "Reaches 4–6 external funding chart (2015)": ["2015-09-01", "printed"],
  "Consultant chronology (2015)": ["2015-09", "file"],
  "Board memo 16-0342: Dobern bridge crossing": ["2016-06-14", "printed"],
  "Board memo 17-0245: Reaches 4–5B completion": ["2017-05-23", "printed"],
  "Board memo 17-0741: Reaches 5C–6A completion": ["2017-11-28", "printed"],
  "Board memo 18-0338: Cunningham detention award": ["2018-06-12", "printed"],
  "Board memo 18-0595: Reach 6B acceptance": ["2018-08-14", "printed"],
  "Performance audit of the project's consultant agreement (2019)": ["2019-02-26", "printed"],
  "Board memo 20-1142: Reaches 5C–6A final acceptance": ["2020-12", "file"],
  "Capital plan 2018–22, flood chapter": ["2018-01", "file"],
  "Capital plan 2021–25, flood chapter": ["2020-06", "file"],
  "Park Trust Fund annual report, FY2013–14": ["2015-04-27", "printed"],
  "Council memo: Dobern bridge retaining walls (2018)": ["2018-06-26", "printed"],
  "Council memo: Five Wounds corridor purchase (2023)": ["2023-08-21", "printed"],
  "Trail Network annual report (2025)": ["2025-03-17", "printed"],
  "Trail Network annual report (2026)": ["2026-03-23", "printed"],
  "Trail Network presentation (Apr 2026)": ["2026-04-13", "printed"],
};

const CHAPTERS = [
  { n: "1", t: "A rebuilt creek, no trail yet", sub: "Coyote Creek to I-680",
    r: FLOOD13, ph: "Miguelita or Lower Silver Creek confluence with Coyote Creek.jpg",
    x: "From its meeting with Coyote Creek near Watson Park, Lower Silver Creek runs in a channel Valley Water rebuilt by 2006, past McKee and King, Alum Rock Ave and the Mayfair neighborhood. The levee roads are there; the trail isn't. It would need a bridge over Hwy 101, and permits are stuck on who has jurisdiction." },
  { n: "2", t: "Pieces in Capitol Park", sub: "Jackson Ave to Lake Cunningham",
    r: R("SCL11B", "SCL17"), ph: "Lower Silver Creek.jpg",
    x: "Past the raised Dobern footbridge, the open trail picks up along PG&E corridors through Capitol Park to Story Rd and Ocala Ave, with a short detour on city streets, then into Lake Cunningham, a park that doubles as the creek's flood basin." },
  { n: "3", t: "Upper Silver Creek", sub: "Evergreen",
    r: UPPER, ph: "Lower Silver Creek draining from Lake Cunningham Regional Park.jpg",
    x: "Several miles upstream in Evergreen, a separate 0.9-mile path follows Upper Silver Creek through Silver Creek Linear Park. The City has no study or master plan for linking it up." },
];
