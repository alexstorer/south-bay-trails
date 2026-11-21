// Location links: which reaches each event, document and plan sheet refers to.
// R(from, to) is a range along MAINLINE (downstream → upstream).
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const WHOLE = MAINLINE;
const LOWER = R("PEN01A", "PEN05");                  // Valley Water Phases I–II area: Coyote Creek → Capitol
const COUNTY = R("PEN06", "PEN09");
const PONDS = ["PEN10", "PEN11"];
const BART = [37.3690, -121.8749], ALUM_ROCK = [37.3965, -121.7995], CONFLUENCE = [37.36795, -121.88044];

// Year each reach opened. approx: true = inferred.
const BUILT = {
  PEN03: { y: 2008.8, approx: true }, PEN04: { y: 1992, approx: true }, PEN05: { y: 2008.8, approx: true }, PEN06: { y: 2008.8, approx: true },
  PEN07: { y: 1992, approx: true }, PEN08: { y: 1992, approx: true }, PEN08A: { y: 1992, approx: true }, PEN09: { y: 1992, approx: true },
  PEN10: { y: 2008.8, approx: true }, PEN11: { y: 2008.8, approx: true }, PEN02A: { y: 2010, approx: true }, PEN02B: { y: 2010, approx: true },
  PEN12: { y: 2017.5 }, PEN01B: { y: 2020.45 },
};

const PSR = "Valley Water planning study (2022)";
const MP77 = "County master plan (Royston, Hanamoto, Beck & Abey, July 1977)";
const SCHEMATICS = [
  { k: "mp77-west", t: "1977 plan: King Rd past the flea market to Coyote Creek", d: MP77 + ", master plan sheet", r: R("PEN01A", "PEN02B"), src: SRC.county1977, short: "1977 plan" },
  { k: "mp77-middle", t: "1977 plan: Summerdale to King Rd, with new lakes and a future city park", d: MP77 + ", master plan sheet", r: R("PEN03", "PEN08"), src: SRC.county1977, short: "1977 plan" },
  { k: "mp77-east", t: "1977 plan: Alum Rock Park to Summerdale, the percolation ponds reshaped as lakes", d: MP77 + ", master plan sheet", r: R("PEN08", "PEN13"), src: SRC.county1977, short: "1977 plan" },
  { k: "mp77-concept", t: "1977 park concept: natural, transition and activity zones", d: MP77 + ", concept plan", r: WHOLE, src: SRC.county1977, short: "Concept" },
  { k: "mp77-ponds", t: "1977 section: three lakes joined by cascades where the ponds are", d: MP77 + ", Reach 2", r: PONDS, src: SRC.county1977, short: "Section" },
  { k: "mp77-reach4", t: "1977 section: a bike trail and a four-acre lake beside Penitencia Creek Rd", d: MP77 + ", Reach 4", r: ["PEN07", "PEN08"], src: SRC.county1977, short: "Section" },
  { k: "ridge-map", t: "Bay Area Ridge Trail map: Berryessa BART to Alum Rock Park", d: "Bay Area Ridge Trail Council, 2019", r: WHOLE, src: SRC.ridgeMap, short: "Trail map" },
  { k: "psr-reaches", t: "Valley Water's flood-project reaches along the creek", d: PSR + ", Fig. 2-5", r: R("PEN01A", "PEN12"), src: SRC.psr, short: "Reach map" },
  { k: "psr-openspace", t: "Public open space along the creek corridor", d: PSR + ", Fig. 2-1", r: WHOLE, src: SRC.psr, short: "Open space" },
  { k: "vw-flood", t: "100-year flood zone around Upper Penitencia Creek", d: "Valley Water flood map", r: LOWER, src: SRC.vwFlood, short: "Flood map" },
  { k: "vw-phases", t: "Flood project phases I–III", d: "Valley Water fact sheet, March 2024", r: R("PEN01A", "PEN12"), src: SRC.vwShell, short: "Phases" },
  { k: "psr-cost", t: "Flood project cost: $24M for Phases I–II, $43M for Phase III", d: PSR + ", Ch. 8", r: R("PEN01A", "PEN12"), src: SRC.psr, short: "Cost table" },
  { k: "psr-confluence", t: "The unbuilt link: Berryessa BART and the flea market to Coyote Creek", d: PSR + ", Fig. 2-7", r: ["PEN01A", "PEN01B"], src: SRC.psr, short: "Aerial" },
  { k: "vta-connector", t: "VTA's trail connector from King Rd to Berryessa BART", d: "VTA fact sheet, March 2017", r: ["PEN01B", "PEN02A"], src: SRC.vtaFact, short: "Alignment" },
  { k: "psr-king", t: "Reach 2: King Rd to Jackson Ave", d: PSR + ", Fig. 2-8", r: R("PEN02A", "PEN04"), src: SRC.psr, short: "Aerial" },
  { k: "psr-capitol", t: "Reach 4: Capitol Ave into Penitencia Creek County Park", d: PSR + ", Fig. 2-12", r: ["PEN07", "PEN08"], src: SRC.psr, short: "Aerial" },
  { k: "reach1b-map", t: "Reach 1B location map: Noble Ave to Dorel Dr", d: "City of San José Council memo, May 2016", r: ["PEN12"], src: SRC.r1bRebid, short: "Location map" },
];
const SCH_GROUPS = [
  ["The whole creek", ["ridge-map", "psr-reaches", "psr-openspace"]],
  ["The 1977 plan: a park chain with a chain of lakes", ["mp77-concept", "mp77-west", "mp77-middle", "mp77-east", "mp77-ponds", "mp77-reach4"]],
  ["Flood protection and the trail", ["vw-flood", "vw-phases", "psr-cost"]],
  ["Downstream: BART and the missing link", ["psr-confluence", "vta-connector", "psr-king"]],
  ["Upstream: the county park and Alum Rock", ["psr-capitol", "reach1b-map"]],
];

const EVENT_GEO = {
  "1911": { pt: ALUM_ROCK, w: "Alum Rock Park", ph: ["Alum Rock Park - panoramio.jpg"] },
  "1973-10": { pt: ALUM_ROCK, w: "Alum Rock Park", ph: ["Alum Rock Park Bridge.jpg"] },
  "1974": { w: "East foothills (off the trail)" },
  "1918": { r: WHOLE },
  "1975": { r: WHOLE },
  "1977-07-18": { r: WHOLE, sch: ["mp77-middle", "mp77-ponds"] },
  "1982": { r: LOWER, sch: "vw-flood" },
  "1995-11": { r: WHOLE },
  "2001-12-13": { r: PONDS },
  "2003-05-01": { r: R("PEN02A", "PEN03") },
  "2006-10": { r: ["PEN12", "PEN13"] },
  "2007-05": { r: ["PEN09"] },
  "2008-06-05": { r: R("PEN02A", "PEN03") },
  "2008-10-25": { r: R("PEN03", "PEN11"), sch: "ridge-map" },
  "2010": { pt: BART, w: "Berryessa BART", r: ["PEN01B"] },
  "2012-11": { r: LOWER },
  "2013-03": { pt: BART, w: "Berryessa BART", r: ["PEN01B"], sch: "vta-connector" },
  "2013-10-03": { r: ["PEN12", "PEN13"], sch: "reach1b-map" },
  "2014-01": { r: PONDS },
  "2014-02-13": { r: ["PEN12"] },
  "2016": { r: LOWER },
  "2016-05-17": { r: ["PEN12"], sch: "reach1b-map" },
  "2017": { r: ["PEN12"] },
  "2017-02-10": { r: ["PEN03", "PEN04"] },
  "2019-12-17": { r: LOWER, sch: ["vw-phases", "psr-cost"] },
  "2020-03-16": { r: ["PEN01B"] },
  "2020-06-13": { pt: BART, w: "Berryessa BART", r: ["PEN01B"], ph: ["Berryessa North San Jose BART station on opening day.jpg", "Upper Penitencia Creek.jpg"] },
  "2021-05-25": { r: ["PEN01B"] },
  "2021-06-22": { r: ["PEN01A"], ph: ["Berryessa Flea Market from new BART station.jpg"], sch: "psr-confluence" },
  "2023-01": { r: ["PEN01A", "PEN04", "PEN09"], pt: ALUM_ROCK },
  "2023-01-24": { r: LOWER },
  "2024": { r: R("PEN01B", "PEN11") },
  "2024-11-26": { r: ["PEN05"] },
  "2025-02-13": { r: ["PEN02A", "PEN02B"] },
  "2026-01-13": { r: LOWER },
  "2027": { r: ["PEN01A"] },
};

const DOC_GEO = {
  "County Penitencia Creek Park Master Plan (Royston, Hanamoto, Beck & Abey, 1977)": WHOLE,
  "SFEI historical ecology of Upper Penitencia Creek (2012)": WHOLE,
  "SFEI resilient landscape vision (2018)": R("PEN01A", "PEN12"),
  "Valley Water flood project planning study (2022)": R("PEN01A", "PEN12"),
  "Valley Water project fact sheet (2024)": R("PEN01A", "PEN12"),
  "Valley Water 100-year flood map": LOWER,
  "Berryessa BART Urban Village Plan (2021)": ["PEN01A", "PEN01B"],
  "Bay Area Ridge Trail: Penitencia Creek map (2019)": WHOLE,
  "VTA trail connector fact sheet (2017)": ["PEN01B"],
  "CEQA: percolation ponds (Reach 2) master plan (2001)": PONDS,
  "CEQA: King Rd / Mabury (Reach 6) master plan (2003)": R("PEN02A", "PEN03"),
  "CEQA: Noble Ave to Alum Rock Park (Reach 1) (2006)": ["PEN12", "PEN13"],
  "Coastal Conservancy: King Rd to Mabury grant (2008)": R("PEN02A", "PEN03"),
  "Coastal Conservancy: Noble to Dorel grant (2013)": ["PEN12", "PEN13"],
  "Council memo: Reach 1B rebid (2016)": ["PEN12"],
  "Council memo: Reach 1B award (2016)": ["PEN12"],
  "Trail Network annual update (2018)": ["PEN12"],
  "Council memo: BART O&M agreement (2020)": ["PEN01B"],
  "Council memo: BART real-estate actions (2020)": ["PEN01A", "PEN01B"],
  "Council memo: VTA Cooperative Agreement 11 (2021)": ["PEN01B"],
  "Berryessa BART Urban Village staff memo (2021)": ["PEN01A", "PEN01B"],
  "Trail Network annual report presentation (2025)": R("PEN01B", "PEN12"),
  "MTC OBAG 1 project list": ["PEN01B"],
};

// Endpoint labels, downstream end first.
const REACH_ENDS = {
  PEN01A: ["Coyote Creek", "Berryessa BART"], PEN01B: ["Berryessa BART", "King Rd"], PEN02A: ["King Rd", "King Rd +1,200 ft"],
  PEN02B: ["King Rd +1,200 ft", "Mabury Rd"], PEN03: ["Mabury Rd", "Mabury Rd near Jackson"], PEN04: ["Mabury Rd", "Jackson Ave"],
  PEN05: ["Jackson Ave", "I-680"], PEN06: ["I-680", "Capitol Ave"], PEN07: ["Capitol Ave", "Summerview Ave"], PEN08: ["Summerview Ave", "Viceroy Ave"],
  PEN08A: ["Viceroy Dr", "Penitencia Creek Park"], PEN09: ["Viceroy Ave", "Piedmont Rd"], PEN10: ["Piedmont Rd", "Pond 2"],
  PEN11: ["Pond 2", "Noble Ave"], PEN12: ["Noble Ave", "Dorel Dr"], PEN13: ["Dorel Dr", "Alum Rock Park"],
};

const DOC_DATES = {
  "County Penitencia Creek Park Master Plan (Royston, Hanamoto, Beck & Abey, 1977)": ["1977-07-18", "printed"],
  "SFEI historical ecology of Upper Penitencia Creek (2012)": ["2012-06", "printed"],
  "SFEI resilient landscape vision (2018)": ["2018-12-14", "file"],
  "Valley Water flood project planning study (2022)": ["2022", "file"],
  "Valley Water project fact sheet (2024)": ["2024-03", "printed"],
  "Berryessa BART Urban Village Plan (2021)": ["2021-06-22", "printed"],
  "Bay Area Ridge Trail: Penitencia Creek map (2019)": ["2019", "printed"],
  "VTA trail connector fact sheet (2017)": ["2017-03", "printed"],
  "CEQA: percolation ponds (Reach 2) master plan (2001)": ["2001-12", "filed"],
  "CEQA: King Rd / Mabury (Reach 6) master plan (2003)": ["2003-05", "filed"],
  "CEQA: Noble Ave to Alum Rock Park (Reach 1) (2006)": ["2006-07", "filed"],
  "Coastal Conservancy: King Rd to Mabury grant (2008)": ["2008-06-05", "printed"],
  "Coastal Conservancy: Noble to Dorel grant (2013)": ["2013-10-03", "printed"],
  "Council memo: Reach 1B rebid (2016)": ["2016-05-05", "printed"],
  "Council memo: Reach 1B award (2016)": ["2016-05-11", "printed"],
  "Trail Network annual update (2018)": ["2018-03-14", "printed"],
  "Council memo: BART O&M agreement (2020)": ["2020-03-16", "printed"],
  "Council memo: BART real-estate actions (2020)": ["2020-09", "file"],
  "Council memo: VTA Cooperative Agreement 11 (2021)": ["2021-05", "file"],
  "Berryessa BART Urban Village staff memo (2021)": ["2021-05-28", "printed"],
  "Trail Network annual report presentation (2025)": ["2025-02", "file"],
  "MTC OBAG 1 project list": ["2015-03-31", "file"],
};

const CHAPTERS = [
  { n: "1", t: "Off the train", sub: "Downstream · Coyote Creek to I-680",
    r: R("PEN01A", "PEN05"), ph: "Upper Penitencia Creek.jpg",
    x: "Step off BART at Berryessa and the trail starts right there, past the King Rd signal and along Mabury Rd. What's missing is the half mile the other way, across the flea market to Coyote Creek. It waits on a flood project that lost its construction money in 2023." },
  { n: "2", t: "The park chain", sub: "I-680 to Noble Ave",
    r: R("PEN06", "PEN11"), ph: "Penitencia Creek VTA 1900 05.JPG",
    x: "Under I-680 and past the Penitencia Creek light-rail station (pictured), the trail runs through Penitencia Creek County Park and on gravel past Valley Water's percolation ponds. This is the stretch dedicated as Bay Area Ridge Trail in 2008." },
  { n: "3", t: "Into the foothills", sub: "Noble Ave to Alum Rock Park",
    r: ["PEN12", "PEN13"], ph: "Alum Rock Park Bridge.jpg",
    x: "Boardwalks thread through old sycamores to Dorel Dr. The last 0.17 mile to Alum Rock Park, where a 1973 National Recreation Trail continues up the canyon, still runs on the road shoulder." },
];
