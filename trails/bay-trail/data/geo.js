// Location links: which reaches each event, document and plan sheet refers to.
// R(from, to) is a range along MAINLINE (west → east). Side ids are MTC's existing regional segments.
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const WHOLE = MAINLINE;
const GOLD = ["BAY09", "BAY09a", "BAY09B"];                       // the Reach 9/9B Gold St crossing
const WEST = ["Connector", "BAY09", "BAY09D", "BAY09B", "BAY09a"];
const MARINA = ["BAY07A", "MTC-3030", "MTC-3022"];
const VILLAGE = ["BAY08A", "BAY07", "BAY08", "BAY06"];
const LOOP = ["MTC-3000", "MTC-3000.1", "MTC-3000.2", "MTC-3000.3"];   // refuge loop around Ponds A9–A15
const EEC = ["BAY04", "BAY05", "MTC-3042", "MTC-3043"];
const R45 = ["BAY03", "BAY02"];                                      // where the levee's Reaches 4–5 will run
const EAST = ["BAY01", "MTC-3012", "MTC-3004", "MTC-3028.1"];
const MTC_ALL = ["MTC-3000", "MTC-3000.1", "MTC-3000.2", "MTC-3000.3", "MTC-3042", "MTC-3043", "MTC-3022", "MTC-3030", "MTC-3028.1", "MTC-3012", "MTC-3004"];
const SHORE = ["BAY07A", ...LOOP, ...R45];                          // Shoreline levee, marina to Coyote Creek
const MARINA_PT = [37.4298, -121.9804], GOLD_PT = [37.4235, -121.9774], EEC_PT = [37.4394, -121.9600];

// Year each reach opened. approx: true = inferred. MTC "pre-1989" segments are drawn from 1989.
const BUILT = {
  "Connector": { y: 1989, approx: true },          // MTC 3038: pre-1989
  "BAY09D": { y: 2023.0, approx: true },           // open in the City's Jan 2023 layer update; actual year unknown
  "MTC-3000": { y: 1989, approx: true }, "MTC-3000.1": { y: 1989, approx: true }, "MTC-3000.2": { y: 1989, approx: true }, "MTC-3000.3": { y: 1989, approx: true },
  "MTC-3042": { y: 1989, approx: true }, "MTC-3043": { y: 1989, approx: true }, "MTC-3030": { y: 1989, approx: true },
  "MTC-3022": { y: 2004 }, "MTC-3012": { y: 2006 }, "MTC-3004": { y: 2006 }, "MTC-3028.1": { y: 2011 },
};

const GAP05 = "Bay Trail Gap Analysis Study (2005)";
const SHOREMEMO = "Valley Water/City meeting, Dec 2018";
const SCHEMATICS = [
  { k: "gap05-map", t: "The 2005 gap study's Santa Clara County map", d: GAP05 + ", county map", r: WHOLE, src: SRC.gap2005, short: "County map" },
  { k: "gap05-short", t: "Short-term gaps in San José, priced in 2005", d: GAP05 + ", Table 8", r: [...R45, "BAY05", "BAY07", "MTC-3028.1"], src: SRC.gap2005, short: "Cost table" },
  { k: "gap05-mid", t: "Mid-term gaps, including Pond A18 and Gold St", d: GAP05 + ", mid-term table", r: WHOLE, src: SRC.gap2005, short: "Cost table" },
  { k: "gap05-long", t: "Long-term gaps: the Gold St bridge and Newby Island", d: GAP05 + ", long-term table", r: ["BAY09", "BAY09D", "BAY09B"], src: SRC.gap2005, short: "Cost table" },
  { k: "btg-sc", t: "2024 scores for Santa Clara County's four gaps", d: "MTC Gap Closure Implementation Plan, appendix", r: [...GOLD, ...VILLAGE, ...R45], src: SRC.btgcip, short: "Score table" },
  { k: "amp-bike", t: "Alviso's planned bicycle network, 1998", d: "Alviso Master Plan, Fig. 11", r: [...WEST, ...MARINA, ...VILLAGE], src: SRC.amp1998, short: "Plan map" },
  { k: "amp-trails", t: "Alviso's planned trails and pathways, 1998", d: "Alviso Master Plan, Fig. 12", r: [...WEST, ...MARINA, ...VILLAGE, ...LOOP], src: SRC.amp1998, short: "Plan map" },
  { k: "eia-auth", t: "The authorized levee: $177.2M, 4 miles, 2,900 acres of marsh", d: SHOREMEMO + ", slide 3", r: SHORE, src: SRC.shore2018, short: "Slide" },
  { k: "eia-rec", t: "Levee trails, existing trails and proposed Bay Trail", d: SHOREMEMO + ", slide 4", r: [...MARINA, ...LOOP, ...EEC, ...R45], src: SRC.shore2018, short: "Trail map" },
  { k: "fact-map", t: "Phase I: levee, marsh and two pedestrian bridges", d: "Shoreline Project fact sheet, May 2023", r: SHORE, src: SRC.fact2023, short: "Fact sheet" },
  { k: "fact-trail", t: "Trail closures and haul routes during construction", d: "Shoreline Project fact sheet, May 2023, p. 2", r: [...MARINA, ...LOOP, ...EEC], src: SRC.fact2023, short: "Fact sheet" },
  { k: "align-2017", t: "The levee alignment as proposed around 2017", d: "T&E memo, March 2025, p. 2", r: SHORE, src: SRC.te2025, short: "Alignment" },
  { k: "align-2025", t: "Reaches 4–5 redrawn on higher ground, 2025", d: "T&E memo, March 2025, p. 4", r: R45, src: SRC.te2025, short: "Alignment" },
  { k: "ve-2023", t: "Value engineering: the 2015 alignment across the plant's land", d: "Joint presentation, Nov 2023", r: R45, src: SRC.a18pres, short: "Slide" },
  { k: "a18-map", t: "Pond A18, the plant land the levee needs", d: "Council memo, Dec 2020, Attachment A", r: R45, src: SRC.coop2020, short: "Aerial" },
  { k: "a18-offer", t: "Valley Water's $13.78M offer for Pond A18", d: "Council memo, Feb 2020, p. 3", r: R45, src: SRC.a18_2020, short: "Offer table" },
  { k: "scc-fund", t: "Who pays for the levee: $512.5M, $59.4M unfunded", d: "Coastal Conservancy staff recommendation, June 2026, p. 4", r: SHORE, src: SRC.scc2026, short: "Funding table" },
  { k: "grt-flood", t: "The Guadalupe River Trail flooded under Hwy 237", d: "Council memo, March 2026, Fig. 1 (photo: Tim Oey)", r: ["BAY09"], src: SRC.grtBike, short: "Photo" },
];
const SCH_GROUPS = [
  ["Plans for the whole shoreline", ["gap05-map", "amp-bike", "amp-trails"]],
  ["What the gaps were supposed to cost", ["gap05-short", "gap05-mid", "gap05-long", "btg-sc"]],
  ["The shoreline levee", ["eia-auth", "eia-rec", "fact-map", "fact-trail", "align-2017", "align-2025", "ve-2023", "scc-fund"]],
  ["Pond A18 and the treatment plant", ["a18-map", "a18-offer"]],
  ["West end", ["grt-flood"]],
];

const EVENT_GEO = {
  "1876": { r: LOOP, w: "Union Pacific line across the refuge", ph: ["Morning Train Passing Alviso Marina Salt Ponds (35994875874).jpg"] },
  "1968": { r: MARINA, pt: MARINA_PT, w: "Alviso Marina", ph: ["Old Alviso Marina - panoramio.jpg"] },
  "1983-03-01": { r: VILLAGE, w: "Alviso" },
  "1987": { r: WHOLE },
  "1989": { r: WHOLE },
  "1996": { r: EAST, w: "Lower Coyote Creek" },
  "1997-10-21": { r: MARINA, pt: MARINA_PT, w: "Alviso Marina County Park" },
  "1998-12-07": { r: [...MARINA, ...VILLAGE], sch: ["amp-trails", "amp-bike"] },
  "2000-04": { r: MARINA, pt: MARINA_PT, w: "Alviso Marina" },
  "2002-06-18": { r: WHOLE },
  "2003-02-11": { r: [...LOOP, "MTC-3042", "MTC-3043"], ph: ["Alviso salt ponds aerial.jpg"] },
  "2004": { r: WEST, w: "Lower Guadalupe River" },
  "2004-05-27": { r: ["MTC-3022"], pt: MARINA_PT, w: "Alviso Marina County Park", ph: ["New Alviso Boat Launch - panoramio.jpg"] },
  "2005-09-15": { r: WHOLE, sch: ["gap05-map", "gap05-short"] },
  "2006": { r: ["MTC-3012", "MTC-3004"] },
  "2010": { r: LOOP, ph: ["Restoration work at Don Edwards San Francisco Bay National Wildlife Refuge (5410349567).jpg"] },
  "2010-10-26": { r: GOLD, pt: GOLD_PT, w: "Gold St bridge", sch: "gap05-long" },
  "2011": { r: ["MTC-3028.1"], ph: ["Coyote Creek under highway 237.jpg"] },
  "2011-06-01": { r: LOOP, w: "Alviso Slough" },
  "2013": { r: WEST, ph: ["Bicycle ^ Pedestrian Trail Guadalupe River - panoramio.jpg"] },
  "2013-01-11": { r: R45, w: "Wastewater treatment plant" },
  "2015-12-18": { r: SHORE, sch: "eia-rec" },
  "2016-11": { r: SHORE },
  "2016-12": { r: SHORE, sch: "eia-auth" },
  "2017-02": { r: EAST, w: "Coyote Creek" },
  "2017-09-13": { r: VILLAGE, w: "Alviso" },
  "2018-03-22": { r: [...LOOP, ...R45, "MTC-3028.1"] },
  "2018-07": { r: SHORE, sch: "eia-auth" },
  "2020-02-06": { r: R45, sch: ["a18-offer", "a18-map"] },
  "2021-02": { r: R45 },
  "2021-12": { r: ["BAY07A", "MTC-3000", "MTC-3030"], pt: MARINA_PT, w: "Alviso Marina to Artesian Slough", sch: "fact-map" },
  "2022-05-05": { r: SHORE },
  "2023-02": { r: R45, sch: "ve-2023" },
  "2023-11": { r: MARINA, pt: MARINA_PT, w: "Alviso Marina County Park", ph: ["Mt Hamilton from Alviso Marina County Park CA Aug 2019.jpg"] },
  "2024-04-18": { r: R45, sch: "fact-trail" },
  "2024-08-27": { r: [...GOLD, ...VILLAGE, ...R45], sch: "btg-sc" },
  "2024-11-26": { r: ["MTC-3030", "BAY09"] },
  "2025-03-17": { r: R45, sch: ["align-2025", "align-2017"] },
  "2025-04-21": { r: EAST, w: "Alviso-Milpitas Rd near Hwy 237" },
  "2025-09-25": { r: ["BAY07A", "MTC-3000", "MTC-3030"], pt: MARINA_PT, w: "Alviso Marina to Artesian Slough", ph: ["Alviso Marina County Park CA Aug 2019 3.jpg"] },
  "2026-03-23": { r: ["BAY09", "Connector"], sch: "grt-flood" },
  "2026-06-18": { r: SHORE, sch: "scc-fund" },
  "2026-09-29": { r: ["Connector", "BAY09"], w: "Hwy 237 trail at the Gold St Connector" },
  "2026-11-13": { r: VILLAGE, w: "Alviso" },
};

const DOC_GEO = {
  "Alviso Master Plan (1998)": [...MARINA, ...VILLAGE],
  "Council memo: San José Bay Trail Master Plan (2002)": WHOLE,
  "Bay Trail Gap Analysis Study (ABAG, 2005)": WHOLE,
  "Bay Trail Gap Closure Implementation Plan (MTC, 2024)": [...GOLD, ...VILLAGE, ...R45],
  "Council memo: Guadalupe River Trail master plan update (2023)": WEST,
  "Council memo: Guadalupe River Trail bike connections plan (2026)": WEST,
  "Valley Water/City meeting: Shoreline Project update (2018)": SHORE,
  "Council memo: offer to buy Pond A18 (2020)": R45,
  "Council memo: Shoreline cost share with Valley Water (2020)": R45,
  "Shoreline Project fact sheet (2023)": SHORE,
  "Joint memo: Shoreline levee and Pond A18 (2023)": R45,
  "Joint presentation: Shoreline levee and Pond A18 (2023)": R45,
  "T&E memo: Shoreline levee and sea level rise (2025)": SHORE,
  "T&E presentation: Shoreline levee (2025)": R45,
  "Staff recommendation: Alviso Marina access (2004)": MARINA,
  "Staff recommendation: Shoreline Project (2018)": SHORE,
  "Staff recommendation: Shoreline Project (2022)": SHORE,
  "Staff recommendation: Shoreline Project (2024)": SHORE,
  "Staff recommendation: Shoreline Project (2026)": SHORE,
  "Council memo: Hwy 237 trail rail crossing grant (2026)": ["Connector", "BAY09"],
  "BPAC letter supporting the rail crossing (2026)": ["Connector", "BAY09"],
  "MTC summary: Safe Routes to Transit & Bay Trail grants, cycle 2 (2026)": null,
  "CEQA: Bay Trail Master Plan Negative Declaration (2002)": WHOLE,
  "CEQA: Bay Trail Reach 9/9B Mitigated Negative Declaration (2010)": GOLD,
  "CEQA: wastewater plant master plan draft EIR (2013)": R45,
  "Valley Water: 1983 flood report": VILLAGE,
  "Council memo: Alviso storm pump station (2017)": VILLAGE,
};

// Endpoint labels, west end first.
const REACH_ENDS = {
  "Connector": ["Hwy 237, Sunnyvale side", "Hwy 237 near the Guadalupe"], "BAY09": ["Hwy 237", "Marriott connector"], "BAY09D": ["Marriott connector", "Guadalupe River"],
  "BAY09B": ["Guadalupe south bank", "North bank"], "BAY09a": ["Gold St west", "Gold St east"], "BAY07A": ["Alviso Marina", "Railroad"],
  "BAY08A": ["Wilson Dr", "North First St"], "BAY07": ["Hope St / Mill Rd", "First St / Gold St"], "BAY08": ["North First St", "East of First St"],
  "BAY06": ["Hope / Elizabeth St", "Spreckles Ave"], "BAY04": ["Clark St", "Los Esteros Rd"], "BAY05": ["Los Esteros Rd", "Refuge education center"],
  "BAY03": ["Los Esteros Rd", "Zanker Rd"], "BAY02": ["Zanker Rd", "Coyote Creek"], "BAY01": ["Hwy 237", "Dixon Landing Rd"],
};

const DOC_DATES = {
  "Alviso Master Plan (1998)": ["1998-12-07", "printed"],
  "Council memo: San José Bay Trail Master Plan (2002)": ["2002-06-18", "printed"],
  "Bay Trail Gap Analysis Study (ABAG, 2005)": ["2005-09", "printed"],
  "Bay Trail Gap Closure Implementation Plan (MTC, 2024)": ["2024-07", "printed"],
  "Council memo: Guadalupe River Trail master plan update (2023)": ["2023-03-21", "printed"],
  "Council memo: Guadalupe River Trail bike connections plan (2026)": ["2026-03-23", "printed"],
  "Valley Water/City meeting: Shoreline Project update (2018)": ["2018-12-12", "printed"],
  "Council memo: offer to buy Pond A18 (2020)": ["2020-02-06", "printed"],
  "Council memo: Shoreline cost share with Valley Water (2020)": ["2020-12", "inferred"],
  "Shoreline Project fact sheet (2023)": ["2023-05", "inferred"],
  "Joint memo: Shoreline levee and Pond A18 (2023)": ["2023-11-08", "printed"],
  "Joint presentation: Shoreline levee and Pond A18 (2023)": ["2023-11-13", "inferred"],
  "T&E memo: Shoreline levee and sea level rise (2025)": ["2025-03-17", "printed"],
  "T&E presentation: Shoreline levee (2025)": ["2025-04-07", "inferred"],
  "Staff recommendation: Alviso Marina access (2004)": ["2004-05-27", "printed"],
  "Staff recommendation: Shoreline Project (2018)": ["2018-03-22", "printed"],
  "Staff recommendation: Shoreline Project (2022)": ["2022-05-05", "printed"],
  "Staff recommendation: Shoreline Project (2024)": ["2024-04-18", "printed"],
  "Staff recommendation: Shoreline Project (2026)": ["2026-06-18", "printed"],
  "Council memo: Hwy 237 trail rail crossing grant (2026)": ["2026-09-08", "printed"],
  "BPAC letter supporting the rail crossing (2026)": ["2026-09-28", "printed"],
  "MTC summary: Safe Routes to Transit & Bay Trail grants, cycle 2 (2026)": ["2026-06-10", "printed"],
  "CEQA: Bay Trail Master Plan Negative Declaration (2002)": ["2002-02-07", "filed"],
  "CEQA: Bay Trail Reach 9/9B Mitigated Negative Declaration (2010)": ["2010-10-26", "filed"],
  "CEQA: wastewater plant master plan draft EIR (2013)": ["2013-01-11", "filed"],
  "Valley Water: 1983 flood report": ["1983", "printed"],
  "Council memo: Alviso storm pump station (2017)": ["2017-09-13", "printed"],
};

const CHAPTERS = [
  { n: "1", t: "Across the Guadalupe", sub: "West · Hwy 237 to Alviso Marina",
    r: [...WEST, ...MARINA], ph: "Alviso, San Jose 1.jpeg",
    x: "From Sunnyvale the Bay Trail follows Hwy 237, most of what the City's map shows open. To reach Alviso it has to cross the Guadalupe River at Gold St, a bridge and three undercrossings that have been in design since 2010. At the marina the regional map picks up a Valley Water levee and the County park's boardwalk." },
  { n: "2", t: "Salt ponds and the village", sub: "Alviso village and the refuge",
    r: [...VILLAGE, ...LOOP, ...EEC], ph: "Restoration work at Don Edwards San Francisco Bay National Wildlife Refuge (5410349567).jpg",
    x: "The City's route runs on streets through Alviso and none of it is built. North of town, dirt levees on the former Cargill salt ponds carry about 13 miles of refuge trail that the regional map counts as Bay Trail. As the ponds are breached for marsh, the 9-mile loop will shrink to about 3 miles of out-and-back trail." },
  { n: "3", t: "Waiting for the levee", sub: "East · Los Esteros Rd to Dixon Landing",
    r: [...R45, ...EAST], ph: "Coyote Creek under highway 237.jpg",
    x: "East of Alviso the trail is to ride the new shoreline levee to Coyote Creek, but Reaches 4–5 are still in design and aren't expected before 2035. Riders use the Hwy 237 trail, built in 2011, and the Milpitas trail on Coyote Creek's east bank, open since 2006, while the City's own west-bank reach is only planned." },
];
