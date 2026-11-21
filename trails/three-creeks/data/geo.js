// Location links: which reaches each event, document and plan sheet refers to.
// R(from, to) is a range along MAINLINE (west → east).
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const WHOLE = MAINLINE;
const WEST = R("3CR_01", "3CR_07");          // the western alignment bought in 2011 (plus the Minnesota–Guadalupe piece)
const EAST = R("3CR_07A", "3CR_19");         // the unbuilt eastern alignment
const BRIDGE = ["3CR_01A"];
const PAVED17 = ["3CR_03", "3CR_04", "3CR_06"];
const LONUS = ["3CR_01", "3CR_02"];
const TRESTLE = [37.3149, -121.9037], WILLOW = [37.3109, -121.8963];

// Year each reach opened. approx: true = inferred.
const BUILT = {
  "3CR_07": { y: 2008, approx: true },
  "3CR_03": { y: 2018.6 }, "3CR_04": { y: 2018.6 }, "3CR_06": { y: 2018.6 },
  "3CR_01A": { y: 2021.01 },
  "3CR_01": { y: 2022.5, approx: true }, "3CR_02": { y: 2022.5, approx: true },
};

const MP = "Three Creeks Trail Master Plan (RHAA, 2014)";
const SKY = "SKY Lane Trail Vision Study (Callander Associates, 2015)";
const SCHEMATICS = [
  { k: "map-west", t: "The western alignment: Lonus St to the Guadalupe River", d: "City of San José trail map", r: WEST, src: SRC.mapWest, short: "Trail map" },
  { k: "map-east", t: "The eastern alignment: Hwy 87 to Coyote Creek", d: "City of San José trail map", r: EAST, src: SRC.mapEast, short: "Trail map" },
  { k: "mp-sec1", t: "Master plan: gateways and features, west half", d: MP + ", Fig. 3", r: R("3CR_01", "3CR_04"), src: SRC.mp2014, short: "Alignment" },
  { k: "mp-sec2", t: "Master plan: gateways and features, east half", d: MP + ", Fig. 4", r: R("3CR_04", "3CR_07"), src: SRC.mp2014, short: "Alignment" },
  { k: "mp-r1", t: "Reach 1: the Lonus St entrance and river-rock pilasters", d: MP + ", Figs. 5–6", r: ["3CR_01", "3CR_01A"], src: SRC.mp2014, short: "Reach 1" },
  { k: "mp-r2", t: "Reach 2: bridge to Coe Ave, with a fruit-crate gateway", d: MP + ", Fig. 7", r: ["3CR_02"], src: SRC.mp2014, short: "Reach 2" },
  { k: "mp-r3", t: "Reach 3: Coe Ave to Broadway, garden seating and truss fence", d: MP + ", Fig. 8", r: ["3CR_03"], src: SRC.mp2014, short: "Reach 3" },
  { k: "mp-r4", t: "Reach 4: Broadway to Willow St, the iris garden and water tower", d: MP + ", Fig. 9", r: ["3CR_04"], src: SRC.mp2014, short: "Reach 4" },
  { k: "mp-r5", t: "Reach 5: the Willow St / Bird Ave crossing", d: MP + ", Fig. 10", r: ["3CR_05"], src: SRC.mp2014, short: "Reach 5" },
  { k: "mp-r6", t: "Reach 6: Bird Ave to Minnesota, the planned Heart's Delight playground", d: MP + ", Fig. 11", r: ["3CR_06"], src: SRC.mp2014, short: "Reach 6" },
  { k: "mp-r7", t: "Reach 7: Minnesota Ave to the Guadalupe River", d: MP + ", Fig. 12", r: ["3CR_07"], src: SRC.mp2014, short: "Reach 7" },
  { k: "mp-cost", t: "Master plan cost estimate: $5.92M (2013 $)", d: MP + ", pp. 122–123", r: WEST, src: SRC.mp2014, short: "Cost table" },
  { k: "te-bridge", t: "The Three Creeks Pedestrian Bridge over Los Gatos Creek", d: "T&E annual update, April 2021, Fig. 2", r: BRIDGE, src: SRC.te2021, short: "Photo" },
  { k: "te-lonus", t: "Lonus St entrance before and after: 2014 and 2022", d: "T&E annual update, March 2023, Figs. 14–15", r: LONUS, src: SRC.te2023, short: "Before/after" },
  { k: "memo-7715", t: "The 2017 contract: Lonus St to Minnesota Ave", d: "Council memo, February 2017, location map", r: R("3CR_01", "3CR_06"), src: SRC.award2017, short: "Location map" },
  { k: "sky-context", t: "SKY Lane: the eastern corridor in context", d: SKY + ", Fig. 3", r: EAST, src: SRC.sky, short: "Context" },
  { k: "sky-plan-w", t: "SKY Lane: Guadalupe River to Monterey Rd", d: SKY + ", Fig. 15", r: R("3CR_07A", "3CR_14"), src: SRC.sky, short: "Trail plan" },
  { k: "sky-plan-e", t: "SKY Lane: Monterey Rd to Senter Rd", d: SKY + ", Fig. 15", r: R("3CR_14", "3CR_18"), src: SRC.sky, short: "Trail plan" },
  { k: "cd-plazas", t: "Construction plans: the Cannery, Willow, Delmas and Water Tower plazas", d: "7715 construction plans (MIG), Sept 2016", r: PAVED17, src: SRC.cd2016, short: "Plan sheet" },
  { k: "cd-tower", t: "Construction plans: the Willow St water tower with its steel \"3\"", d: "7715 construction plans (MIG), Sept 2016", r: ["3CR_04"], src: SRC.cd2016, short: "Plan sheet" },
  { k: "cd-signal", t: "Construction plans: the trail signal at Minnesota Ave", d: "7715 construction plans, Sept 2016", r: ["3CR_06", "3CR_07"], src: SRC.cd2016, short: "Plan sheet" },
  { k: "sky-r1", t: "SKY Lane rendering: a spiral ramp and spire over Hwy 87", d: SKY + ", visual simulation", r: R("3CR_08", "3CR_10"), src: SRC.sky, short: "Rendering" },
  { k: "sky-r2", t: "SKY Lane rendering: the elevated trail along Monterey Rd and the stadiums", d: SKY + ", visual simulation", r: R("3CR_14", "3CR_17"), src: SRC.sky, short: "Rendering" },
  { k: "sky-r3", t: "SKY Lane rendering: looking toward Municipal Stadium", d: SKY + ", visual simulation", r: R("3CR_16", "3CR_18"), src: SRC.sky, short: "Rendering" },
  { k: "ames-status", t: "An advocate's 2012 map: who owns each piece, Los Gatos Creek to Kelley Park", d: "L. Ames, update for Jim Beall, March 2012", r: WHOLE, src: SRC.ames2012, short: "Advocate map" },
  { k: "ames-crossings", t: "An advocate's 2012 map: every crossing, rated by cost", d: "L. Ames, update for Jim Beall, March 2012", r: WHOLE, src: SRC.ames2012, short: "Advocate map" },
  { k: "te-fence", t: "2023 encampment deterrents, including the Three Creeks fence", d: "T&E presentation, April 2024", r: WEST, src: SRC.te2024, short: "Slide" },
];
const SCH_GROUPS = [
  ["The whole trail", ["map-west", "map-east"]],
  ["The 2014 master plan, reach by reach", ["mp-sec1", "mp-sec2", "mp-r1", "mp-r2", "mp-r3", "mp-r4", "mp-r5", "mp-r6", "mp-r7", "mp-cost"]],
  ["What got built", ["memo-7715", "cd-plazas", "cd-tower", "cd-signal", "te-bridge", "te-lonus", "te-fence"]],
  ["The east: an advocate's maps and SKY Lane", ["ames-status", "ames-crossings", "sky-context", "sky-plan-w", "sky-plan-e", "sky-r1", "sky-r2", "sky-r3"]],
];

const EVENT_GEO = {
  "1922-05-01": { r: WEST, pt: TRESTLE, w: "Willow Glen Trestle", ph: ["ThreeCreeksTrail TrestleBridge.JPG", "Sign of Bygone Fruit Orchard - panoramio.jpg"] },
  "2000": { r: WHOLE },
  "2000-09": { r: WEST },
  "2003": { r: R("3CR_01", "3CR_06") },
  "2004": { r: WEST, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2004-01-07": { r: WEST },
  "2007-11-06": { r: R("3CR_01", "3CR_08A") },
  "2009-06-24": { r: WHOLE, sch: "map-east" },
  "2012-03-15": { r: EAST, sch: ["ames-status", "ames-crossings"] },
  "2010": { r: R("3CR_01", "3CR_06") },
  "2011-06-14": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2011-09-27": { r: R("3CR_01", "3CR_06"), sch: "map-west" },
  "2012-10-08": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2013-03-26": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2013-05-17": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle", ph: ["ThreeCreeksTrail TrestleBridge.JPG"] },
  "2014-01": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2014-05-20": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2014-07-28": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2014-11-04": { r: WEST, sch: ["mp-sec1", "mp-cost"], ph: ["Three Creeks Trail at Coe Avenue in Willow Glen, San Jose, California.JPG"] },
  "2015": { r: BRIDGE },
  "2015-10": { r: EAST, sch: ["sky-r1", "sky-plan-w"] },
  "2016-08-12": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2017-02-28": { r: PAVED17, sch: ["memo-7715", "cd-plazas"] },
  "2017": { r: ["3CR_01", "3CR_01A"] },
  "2017-05": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2018-08": { r: PAVED17, pt: WILLOW, w: "Willow St", ph: ["Three Creeks Trail decorative water tower.jpg", "Iris garden three creeks trail San Jose.jpg"], sch: "mp-r4" },
  "2018": { r: PAVED17 },
  "2018-10-10": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2019-07": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2020-05-18": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2020-06-22": { r: BRIDGE, pt: TRESTLE, w: "Willow Glen Trestle" },
  "2020-10-20": { r: BRIDGE },
  "2021-01-05": { r: BRIDGE, pt: TRESTLE, w: "Three Creeks bridge", sch: "te-bridge" },
  "2021-01-12": { r: LONUS },
  "2021-07-15": { r: LONUS },
  "2022": { r: LONUS, sch: "te-lonus" },
  "2023": { r: WEST, sch: "te-fence" },
  "2026-04-14": { r: ["3CR_19"], w: "Coyote Creek, off the map's east end" },
};

const DOC_GEO = {
  "Three Creeks Trail Master Plan, Western Alignment (RHAA, 2014)": WEST,
  "SKY Lane Trail Vision Study, eastern alignment (Callander, 2015)": EAST,
  "CH2M HILL trestle engineering study (2012)": BRIDGE,
  "City map: Western Alignment": WEST,
  "City map: Eastern Alignment": EAST,
  "CEQA: pedestrian bridge (2013–15)": BRIDGE,
  "CEQA: master plan MND (2014)": WEST,
  "Superior Court order (July 2014)": BRIDGE,
  "Court of Appeal opinion H041563 (2016)": BRIDGE,
  "Superior Court order (June 2019)": BRIDGE,
  "Court of Appeal opinion H047068 (2020)": BRIDGE,
  "Council memo: Prop 40 bridge grants (2013)": BRIDGE,
  "Info memo: Three Creeks bridge issues (2013)": BRIDGE,
  "Council memo: Coe–Minnesota award (2017)": PAVED17,
  "T&E annual update (2018)": PAVED17,
  "Trail annual report 2018–19": PAVED17,
  "Council memo: bridge change order (2020)": BRIDGE,
  "Council memo: Lonus–Coe paving (2020)": LONUS,
  "Lonus–Coe bid notice (2021)": LONUS,
  "Lonus–Coe bid results (2021)": LONUS,
  "T&E annual update (2021)": BRIDGE,
  "T&E annual report (2022)": LONUS,
  "T&E annual update (2023)": LONUS,
  "T&E presentation: deterrent projects (2024)": WEST,
  "Friends of the Willow Glen Trestle: background (2020)": BRIDGE,
  "Focus group report: Willow Glen Spur Trail (2009)": WHOLE,
  "Construction plans: Lonus St to Minnesota Ave, 80 sheets (2016, 70 MB)": R("3CR_01", "3CR_06"),
  "L. Ames: The Three-Creeks Trail, an update for Jim Beall (2012)": WHOLE,
};

// Endpoint labels, west end first.
const REACH_ENDS = {
  "3CR_01": ["Lonus St", "Los Gatos Creek"], "3CR_01A": ["West bank", "East bank"], "3CR_02": ["Bridge", "Coe Ave"],
  "3CR_03": ["Coe Ave", "Broadway Ave"], "3CR_04": ["Broadway Ave", "Willow St"], "3CR_05": ["Willow St", "Bird Ave"],
  "3CR_06": ["Bird Ave", "Minnesota Ave"], "3CR_07": ["Minnesota Ave", "Guadalupe River"], "3CR_07A": ["Guadalupe River", "River bridge"],
  "3CR_08": ["Guadalupe River bridge", "Hwy 87"], "3CR_08A": ["Hwy 87", "Alma Ave"], "3CR_09": ["Hwy 87", "Rail line east of 87"],
  "3CR_10": ["Rail line", "Almaden Rd"], "3CR_11": ["Almaden Rd", "Near Little Orchard St"], "3CR_12": ["Near Little Orchard St", "Little Orchard St"],
  "3CR_13": ["Little Orchard St", "Pomona Ave"], "3CR_14": ["Pomona Ave", "Monterey Rd"], "3CR_15": ["Monterey Rd", "Rail line"],
  "3CR_16": ["Rail line", "7th St"], "3CR_17": ["7th St", "10th St"], "3CR_18": ["10th St", "Alma Ave / Senter Rd"],
  "3CR_19": ["Alma Ave / Senter Rd", "Story Rd / Keyes St"],
};

const DOC_DATES = {
  "Three Creeks Trail Master Plan, Western Alignment (RHAA, 2014)": ["2014-11-25", "printed"],
  "SKY Lane Trail Vision Study, eastern alignment (Callander, 2015)": ["2015-10", "printed"],
  "CH2M HILL trestle engineering study (2012)": ["2012-10-08", "cited"],
  "City map: Western Alignment": ["2013-08", "file"],
  "City map: Eastern Alignment": ["2013-08", "file"],
  "CEQA: pedestrian bridge (2013–15)": ["2013-11-19", "filed"],
  "CEQA: master plan MND (2014)": ["2014-11", "filed"],
  "Superior Court order (July 2014)": ["2014-07-28", "printed"],
  "Court of Appeal opinion H041563 (2016)": ["2016-08-12", "printed"],
  "Superior Court order (June 2019)": ["2019-06-28", "file"],
  "Court of Appeal opinion H047068 (2020)": ["2020-05-18", "printed"],
  "Council memo: Prop 40 bridge grants (2013)": ["2013-03-04", "printed"],
  "Info memo: Three Creeks bridge issues (2013)": ["2013-05-17", "printed"],
  "Council memo: Coe–Minnesota award (2017)": ["2017-02-06", "printed"],
  "T&E annual update (2018)": ["2018-04-02", "printed"],
  "Trail annual report 2018–19": ["2019", "printed"],
  "Council memo: bridge change order (2020)": ["2020-10-08", "printed"],
  "Council memo: Lonus–Coe paving (2020)": ["2020-12-18", "printed"],
  "Lonus–Coe bid notice (2021)": ["2021-07-12", "printed"],
  "Lonus–Coe bid results (2021)": ["2021-07-15", "printed"],
  "T&E annual update (2021)": ["2021-04-05", "printed"],
  "T&E annual report (2022)": ["2022-03-16", "printed"],
  "T&E annual update (2023)": ["2023-03-13", "printed"],
  "T&E presentation: deterrent projects (2024)": ["2024-04-08", "printed"],
  "Friends of the Willow Glen Trestle: background (2020)": ["2020-02-11", "printed"],
  "Focus group report: Willow Glen Spur Trail (2009)": ["2009-06-24", "printed"],
  "Construction plans: Lonus St to Minnesota Ave, 80 sheets (2016, 70 MB)": ["2016-09-23", "printed"],
  "L. Ames: The Three-Creeks Trail, an update for Jim Beall (2012)": ["2012-03-15", "printed"],
};

const CHAPTERS = [
  { n: "1", t: "Where the trestle stood", sub: "West · Lonus St to Coe Ave",
    r: R("3CR_01", "3CR_02"), ph: "ThreeCreeksTrail TrestleBridge.JPG",
    x: "For six years this was the most fought-over 200 feet of trail in San José. The 1922 timber trestle (pictured in 2014) came down in June 2020 after preservationists lost their last appeal; the steel bridge that replaced it had been waiting in storage since 2015. It opened in January 2021." },
  { n: "2", t: "Through Willow Glen", sub: "Coe Ave to the Guadalupe River",
    r: R("3CR_03", "3CR_07"), ph: "Iris garden three creeks trail San Jose.jpg",
    x: "Paved in 2018, the old spur is now a neighborhood path with fruit-crate gateways, an iris garden and a \"3\" water tower at Willow St. It breaks for one crossing at Willow and Bird, where the old right-of-way is private, then runs to the Guadalupe River." },
  { n: "3", t: "The missing third creek", sub: "East · Guadalupe River to Coyote Creek",
    r: R("3CR_07A", "3CR_19"), ph: "Almaden Road underpass 1310.JPG",
    x: "East of the river the old rail line has mostly disappeared into back lots, freeways and active tracks. Focus groups in 2008 called a continuous street-level trail unlikely; a 2015 vision study drew an elevated \"SKY Lane\" instead. No route has been chosen and no money set aside, so the trail doesn't yet reach Coyote Creek." },
];
