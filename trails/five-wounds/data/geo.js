// Location links: which trail reaches (City GIS REACHIDs) each event, document and plan sheet refers to.
// Ranges are written as R(from, to) along the north→south MAINLINE order defined in data.js.
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const WHOLE = MAINLINE;
const VTA_LAND = R("FIV01", "FIV09");
const SEG1 = ["FIV11b", "FIV11a"];
const SEG2 = R("FIV03", "FIV10");
const SEG2B = R("FIV03", "FIV09");
const SOUTH_PLAN = R("FIV06", "FIV11a");             // 2018/2022 study area: Whitton Ave → Story Rd
const TRESTLE = [37.3269, -121.8661], STATION = [37.3505, -121.8660];

// Year each reach opened. approx: true = year not documented; inferred from the earliest record.
const BUILT = { FIV10: { y: 2006.9, approx: true } };

const HRE = "Historic Resources Evaluation (TreanorHL, July 2023)";
const BTS = "Bridge Type Selection Report (GHD, Aug 2023)";
const MP26 = "Master plan community meeting (City/BKF, July 2026)";
const FEAS = "Feasibility Study (RRM, Aug 2022)";
const GHD = "Structural Evaluation (GHD, Aug 2023)";
const SOI = "Secretary of the Interior's Standards review (TreanorHL, July 2023)";
const SCHEMATICS = [
  // The whole corridor
  { k: "mp26-segments", t: "The trail in four segments, as the City split it in July 2026", d: MP26, r: WHOLE, src: SRC.mp2026, short: "Segment map" },
  { k: "cc10-overview", t: "2010 community concept: the rail-to-trail corridor", d: "BART Station Area Community Concept Plan, Fig. 44 (2010)", r: VTA_LAND, src: SRC.concept2010, short: "Concept plan" },
  { k: "psa-parcels", t: "Who owns what: the parcels VTA is handing over", d: "City memo on the VTA purchase agreement, Aug 2023", r: VTA_LAND, src: SRC.psa2023, short: "Parcel map" },
  { k: "atp18-map", t: "Proposed alignment in the 2018 state grant bid", d: "City ATP grant memo, Nov 2018", r: WHOLE, src: SRC.atp2018, short: "Grant map" },
  { k: "city-map", t: "City trail map: the alignment north to Mabury Rd", d: "City Trail Program map, July 2018", r: WHOLE, src: SRC.cityMap, short: "City map" },
  { k: "feas-cost", t: "Phase 1 rough estimate: $14.8–19.7M", d: FEAS + ", Fig. 24", r: SOUTH_PLAN, src: SRC.feas2022, short: "Cost estimate" },
  { k: "atp20-cost", t: "What $34M would buy: the 2020 itemized estimate", d: "City ATP grant memo, Aug 2020", r: R("FIV02", "FIV11a"), src: SRC.atp2020, short: "Cost estimate" },
  // North: BART and Little Portugal
  { k: "bart-station", t: "28th St/Little Portugal station plan, with the \"Future Five Wounds Trail\"", d: "VTA station fact sheet, Jan 2026", r: ["FIV01", "FIV02"], src: SRC.vtaStation, short: "Station plan" },
  { k: "cc10-north", t: "2010 concept: the northern end toward Lower Silver Creek", d: "BART Station Area Community Concept Plan, Fig. 52 (2010)", r: ["FIV01", "FIV02"], src: SRC.concept2010, short: "Concept plan" },
  // Middle: the rail line and 22nd St
  { k: "mp26-seg2", t: "Segment 2: 22nd St and the old railbed to Santa Clara St", d: MP26, r: SEG2, src: SRC.mp2026, short: "Master plan" },
  { k: "mp26-william", t: "Planned crossing at William St and 23rd St", d: MP26, r: ["FIV09", "FIV10"], src: SRC.mp2026, short: "Master plan" },
  { k: "feas-north", t: "2022 preferred route: 22nd St to Whitton Ave", d: FEAS + ", Fig. 10", r: R("FIV06", "FIV10"), src: SRC.feas2022, short: "Feasibility" },
  { k: "feas-23rd", t: "Two options at William and 23rd St, compared", d: FEAS + ", Fig. 19", r: ["FIV09"], src: SRC.feas2022, short: "23rd St options" },
  { k: "mp26-22nd", t: "Planned bike boulevard and path along 22nd St", d: MP26, r: ["FIV10"], src: SRC.mp2026, short: "Master plan" },
  // South: the trestle
  { k: "hre-photos", t: "The trestle today, from below and from the Coyote Creek Trail", d: HRE + ", Figs. 6–9", r: ["FIV11a"], src: SRC.hre, short: "Trestle photos" },
  { k: "hre-aerial", t: "Aerial views of the trestle block", d: HRE + ", Figs. 1–2", r: SEG1, src: SRC.hre, short: "Aerial" },
  { k: "hre-train", t: "A Western Pacific train in the William Street Yard, c. 1978, looking toward the trestle", d: HRE + ", Fig. 21", r: ["FIV10", "FIV11b", "FIV11a"], src: SRC.hre, short: "Rail history" },
  { k: "hre-wpmap", t: "The Western Pacific's San Jose Branch, c. 1950", d: HRE + ", Fig. 10", r: WHOLE, src: SRC.hre, short: "Rail map" },
  { k: "feas-south", t: "2022 preferred route: Story Rd across the creek and the old landfill", d: FEAS + ", Fig. 10", r: SEG1, src: SRC.feas2022, short: "Feasibility" },
  { k: "soi-aerial", t: "The trestle, the Coyote Creek Trail and the planned route from above", d: SOI + ", Fig. 1", r: ["FIV11a"], src: SRC.soi, short: "Aerial" },
  { k: "ghd-scan", t: "3D scan of the trestle and a typical bent", d: GHD + ", Figs. 1–2", r: ["FIV11a"], src: SRC.structural, short: "Scan" },
  { k: "ghd-fire", t: "A typical bent, and one damaged by the 2021 fire", d: GHD + ", Figs. 4–5", r: ["FIV11a"], src: SRC.structural, short: "Fire damage" },
  { k: "bts-retrofit", t: "Option 1: retrofit the trestle with steel bents", d: BTS + ", Fig. 4", r: ["FIV11a"], src: SRC.bts, short: "Option 1" },
  { k: "bts-truss", t: "Option 2: a steel truss bridge in its place", d: BTS + ", Figs. 6–7", r: ["FIV11a"], src: SRC.bts, short: "Option 2" },
  { k: "soi-alt3", t: "Option 3: a new truss beside the stabilized trestle", d: SOI + ", Alternative 3 elevation", r: ["FIV11a"], src: SRC.soi, short: "Option 3" },
  { k: "bts-options", t: "The three options compared: cost, permits, schedule", d: BTS + ", Sec. 6", r: ["FIV11a"], src: SRC.bts, short: "Comparison" },
];
const SCH_GROUPS = [
  ["The whole corridor", ["mp26-segments", "cc10-overview", "psa-parcels", "atp18-map", "city-map", "atp20-cost", "feas-cost", "hre-wpmap"]],
  ["North: BART and Little Portugal", ["bart-station", "cc10-north"]],
  ["Middle: 22nd St and the old railbed", ["mp26-seg2", "feas-north", "mp26-william", "feas-23rd", "mp26-22nd", "hre-train"]],
  ["South: the Coyote Creek trestle", ["feas-south", "hre-photos", "hre-aerial", "soi-aerial", "ghd-scan", "ghd-fire", "bts-retrofit", "bts-truss", "soi-alt3", "bts-options"]],
];

// Per-event extras, keyed by the event's date string in TIMELINE.
//   r: reaches · pt: point · w: place label when there are no reaches · ph: photos · sch: plan sheets
const EVENT_GEO = {
  "1922": { r: WHOLE, pt: TRESTLE, sch: ["hre-wpmap", "hre-photos"] },
  "1982": { r: WHOLE, ph: ["Some of Roger Puta's Western Pacific Photos (27217538290).jpg"] },
  "1995": { r: WHOLE, sch: "hre-train" },
  "2002-08": { r: WHOLE },
  "2002-12": { r: VTA_LAND },
  "2003-08-19": { r: R("FIV02", "FIV10") },
  "2006-12": { r: ["FIV10"], sch: "mp26-22nd" },
  "2010": { r: WHOLE },
  "2010-09": { r: VTA_LAND, sch: ["cc10-overview", "cc10-north"] },
  "2011-09-02": { r: VTA_LAND },
  "2011-12": { r: SEG1, pt: TRESTLE, sch: "hre-aerial" },
  "2013-08-06": { r: SEG1 },
  "2013-11-19": { r: VTA_LAND, ph: ["Little Portugal, San Jose CA 01.jpg"] },
  "2014-10-30": { pt: STATION, w: "28th St/Little Portugal station site", r: ["FIV02"], ph: ["Tail tracks south of Berryessa station, June 2020.JPG"] },
  "2014-12-04": { pt: TRESTLE, r: ["FIV11a"] },
  "2015": { r: R("FIV06", "FIV09") },
  "2018-07-31": { r: SOUTH_PLAN, sch: "atp18-map" },
  "2018-08": { r: WHOLE },
  "2019": { r: ["FIV10"] },
  "2020-06": { r: WHOLE },
  "2020-06-18": { r: SOUTH_PLAN },
  "2020-09-01": { r: R("FIV02", "FIV11a"), sch: "atp20-cost" },
  "2021-03": { pt: TRESTLE, r: ["FIV11a"], sch: ["ghd-fire", "hre-photos"] },
  "2022-06": { r: VTA_LAND, sch: "psa-parcels" },
  "2022-08-30": { r: SOUTH_PLAN, sch: ["feas-cost", "feas-south", "feas-north", "feas-23rd"] },
  "2023-06": { pt: TRESTLE, r: ["FIV11a"], sch: "hre-photos" },
  "2023-08-02": { pt: TRESTLE, r: ["FIV11a"], sch: ["bts-options", "bts-retrofit", "bts-truss", "soi-alt3", "ghd-scan"] },
  "2023-09-12": { r: VTA_LAND, sch: "psa-parcels" },
  "2023-10-31": { r: WHOLE },
  "2024-02-08": { r: VTA_LAND },
  "2024-03-11": { r: VTA_LAND, ph: ["Five Wounds Portuguese National Church, Little Portugal, Santa Clara Street, San Jose 06.jpg"] },
  "2024-06-14": { pt: STATION, w: "28th St/Little Portugal station site", r: ["FIV02"] },
  "2025-07": { r: R("FIV03", "FIV11a") },
  "2026-01-17": { pt: TRESTLE, r: ["FIV11a"] },
  "2026-03-04": { pt: TRESTLE, r: ["FIV11a"], sch: ["bts-truss", "soi-alt3"] },
  "2026-04-14": { pt: TRESTLE, r: ["FIV11a"], ph: ["ThreeCreeksTrail TrestleBridge.JPG"] },
  "2026-06": { pt: STATION, w: "28th St/Little Portugal station site", r: ["FIV02"], sch: "bart-station", ph: ["USA-San Jose-Church of the Five Wounds-1.jpg"] },
  "2026-07-09": { r: SEG2, sch: ["mp26-segments", "mp26-seg2"] },
  "2027-03": { r: SEG2 },
  "2027-12": { r: SEG2, sch: "mp26-william" },
  "2031": { r: WHOLE },
  "2039-02-28": { pt: STATION, w: "28th St/Little Portugal station site", r: ["FIV01", "FIV02"], sch: "bart-station" },
};

// Where each document applies (null = not location-specific). Keyed by document title in DOCS.
const DOC_GEO = {
  "Neighborhood Improvement Plan Amendment, 2nd draft (2006)": WHOLE,
  "BART Station Area Community Concept Plan (2010)": VTA_LAND,
  "Feasibility Study: Story Rd to Whitton Ave (2022)": SOUTH_PLAN,
  "Master plan community meeting presentation (July 2026)": WHOLE,
  "Community meeting flyer (July 2026)": WHOLE,
  "City Five Wounds Trail map": WHOLE,
  "Historic Resources Evaluation (TreanorHL, 2023)": ["FIV11a"],
  "Secretary of the Interior's Standards report (2023)": ["FIV11a"],
  "Structural Evaluation (GHD, 2023)": ["FIV11a"],
  "Bridge Type Selection Report (GHD, 2023)": ["FIV11a"],
  "City summary of information on the trestle (2026)": ["FIV11a"],
  "Story Road Landfill drawings (posted by Save Our Trails)": ["FIV11a"],
  "Council minutes: floating park designation (2003)": R("FIV02", "FIV10"),
  "VTA letter supporting the trail (2011)": VTA_LAND,
  "ATP grant application memo (2018)": SOUTH_PLAN,
  "Urban village plans amendment memo (2018)": VTA_LAND,
  "Coastal Conservancy planning grant staff report (2020)": SOUTH_PLAN,
  "2020 ATP grant memo, with cost estimate": R("FIV02", "FIV11a"),
  "Mayor and councilmembers' memo on the ATP grant (2020)": R("FIV02", "FIV11a"),
  "VTA purchase and sale agreement memo (2023)": VTA_LAND,
  "VTA purchase and sale agreement resolution (2023)": VTA_LAND,
  "Public letters on the VTA agreement (2023)": VTA_LAND,
  "BKF Engineers master agreement memo (2023)": WHOLE,
  "Trail Network annual report (2026)": R("FIV03", "FIV11a"),
  "CEQA: Five Wounds Trail planning, exemption (2020)": SOUTH_PLAN,
  "CEQA: Five Wounds Urban Village Plan Update, NOP (2024)": VTA_LAND,
  "VTA fact sheet: 28th St/Little Portugal station (2026)": ["FIV01", "FIV02"],
  "FTA monitoring report, BART Phase II (Aug 2026)": ["FIV01", "FIV02"],
};

// Human labels for reach endpoints (north end first).
const REACH_ENDS = {
  FIV01: ["Lower Silver Creek Trail", "Julian St"], FIV02: ["Julian St", "Santa Clara St"], FIV03: ["Santa Clara St", "Shortridge Ave"],
  FIV04: ["Shortridge Ave", "San Fernando St"], FIV05: ["San Fernando St", "Whitton Ave"], FIV06: ["Whitton Ave", "San Antonio St"],
  FIV07: ["San Antonio St", "24th St"], FIV08: ["24th St", "23rd St"], FIV09: ["23rd St", "William St"], FIV10: ["William St", "I-280"],
  FIV11b: ["I-280", "I-280"], FIV11a: ["I-280", "Story Rd"],
};

// Document dates. src: printed | filed | file | unverified
const DOC_DATES = {
  "Neighborhood Improvement Plan Amendment, 2nd draft (2006)": ["2006-12", "printed"],
  "BART Station Area Community Concept Plan (2010)": ["2010-09", "printed"],
  "Feasibility Study: Story Rd to Whitton Ave (2022)": ["2022-08-30", "printed"],
  "Master plan community meeting presentation (July 2026)": ["2026-07-09", "printed"],
  "Community meeting flyer (July 2026)": ["2026-07", "printed"],
  "Historic Resources Evaluation (TreanorHL, 2023)": ["2023-07-13", "printed"],
  "Secretary of the Interior's Standards report (2023)": ["2023-07-21", "printed"],
  "Structural Evaluation (GHD, 2023)": ["2023-08-02", "printed"],
  "Bridge Type Selection Report (GHD, 2023)": ["2023-08-02", "printed"],
  "City summary of information on the trestle (2026)": ["2026-03-09", "file"],
  "City Five Wounds Trail map": ["2018-07-18", "printed"],
  "Council minutes: floating park designation (2003)": ["2003-08-19", "printed"],
  "VTA letter supporting the trail (2011)": ["2011-09-02", "printed"],
  "ATP grant application memo (2018)": ["2018-11-26", "printed"],
  "Urban village plans amendment memo (2018)": ["2018-11", "file"],
  "Coastal Conservancy planning grant staff report (2020)": ["2020-06-18", "printed"],
  "2020 ATP grant memo, with cost estimate": ["2020-08-20", "printed"],
  "Mayor and councilmembers' memo on the ATP grant (2020)": ["2020-08-28", "printed"],
  "VTA purchase and sale agreement memo (2023)": ["2023-08-21", "printed"],
  "VTA purchase and sale agreement resolution (2023)": ["2023-09-12", "printed"],
  "Public letters on the VTA agreement (2023)": ["2023-09", "file"],
  "BKF Engineers master agreement memo (2023)": ["2023-10-10", "printed"],
  "Trail Network annual report (2026)": ["2026-03-23", "printed"],
  "CEQA: Five Wounds Trail planning, exemption (2020)": ["2020-06-26", "filed"],
  "CEQA: Five Wounds Urban Village Plan Update, NOP (2024)": ["2024-03-11", "filed"],
  "VTA fact sheet: 28th St/Little Portugal station (2026)": ["2026-01", "printed"],
  "FTA monitoring report, BART Phase II (Aug 2026)": ["2026-08-28", "printed"],
};

// The three "chapters" in the intro, north to south.
const CHAPTERS = [
  { n: "1", t: "Waiting for BART", sub: "Little Portugal · Lower Silver Creek to Santa Clara St",
    r: ["FIV01", "FIV02"], ph: "USA-San Jose-Church of the Five Wounds-1.jpg",
    x: "Behind Five Wounds Church, the old rail line is now a BART construction site. VTA will hand this stretch to the City only after the 28th St/Little Portugal station opens, now targeted for 2039." },
  { n: "2", t: "The railbed in between", sub: "Santa Clara St to I-280",
    r: R("FIV03", "FIV10"), ph: "Three Creeks Trail at Coe Avenue in Willow Glen, San Jose, California.JPG",
    x: "South of Santa Clara St the tracks run between back fences and across six streets to William St, where a widened sidewalk on 22nd St, the trail's only open piece, continues to I-280. Planning is under way. Pictured: the Three Creeks Trail in Willow Glen, a finished rail-trail on the same Western Pacific branch." },
  { n: "3", t: "The trestle", sub: "I-280 to Story Rd",
    r: SEG1, ph: "ThreeCreeksTrail TrestleBridge.JPG",
    x: "Past I-280 the corridor crosses Coyote Creek on a 1922 timber trestle, burned in 2021 and found near collapse in 2023. Whether to save it is unresolved, and this segment is on hold. Pictured: its sister trestle in Willow Glen, torn down in 2020." },
];
