// Location links: which reaches each event, document and plan sheet refers to.
// R(from, to) is a range along MAINLINE (north → south).
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const WHOLE = MAINLINE;
const NORTH = ["THO01W", "THO01E"];            // Tully Rd to Quimby Rd, both banks
const QA = ["THO02"];                          // Quimby Rd to Aborn Ct, paved 2023
const INTERIM08 = ["THO01W", "THO01E", "THO02", "THO03"]; // the 2008 gravel trail, Tully Rd to Aborn Rd
const SOUTH = R("THO02", "THO06");             // the Measure B request, Quimby Rd to Heartland Way
const SOUTHGAP = R("THO03", "THO06");
const LAKE = [37.3355, -121.8055], QUIMBY = [37.3240, -121.8082];

// Year each reach opened. The 2008 gravel trail ran Tully Rd to Aborn Rd; Tully–Quimby was paved
// in Oct 2017 and Quimby–Aborn Ct in Aug 2023. approx: true = which bank the 2008 trail used isn't documented.
const BUILT = {
  "THO01W": { y: 2008.42 }, "THO02": { y: 2008.42 },
  "THO01E": { y: 2008.42, approx: true },
};

const SCHEMATICS = [
  { k: "te-tully", t: "The newly paved trail from Tully Rd to Quimby Rd, November 2017", d: "T&E presentation, April 2018", r: ["THO01W"], src: SRC.te18p, short: "Photo" },
  { k: "te-top10", t: "2017's top ten trail projects, including Tully–Quimby", d: "T&E annual update memo, March 2018", r: ["THO01W"], src: SRC.te18m, short: "Report" },
  { k: "cip-2018", t: "Completed projects: Tully–Quimby done October 20, 2017", d: "CIP semi-annual report, April 2018, Appendix 2", r: ["THO01W"], src: SRC.cip18, short: "Table" },
  { k: "te-gateway22", t: "Gateway design with Chinook salmon set in concrete", d: "T&E annual report memo, March 2022, Fig. 13", r: QA, src: SRC.te22, short: "Design" },
  { k: "te-gateway23", t: "Gateway concept and a sample salmon panel", d: "T&E annual update memo, March 2023, Figs. 16–17", r: QA, src: SRC.te23, short: "Design" },
  { k: "te-before-after", t: "The Westgrove entrance before and after paving", d: "T&E presentation, April 2024", r: QA, src: SRC.te24p, short: "Before/after" },
  { k: "te-open", t: "Walking the newly paved trail, Quimby Rd to Aborn Ct", d: "T&E annual update memo, March 2024, Fig. 7", r: QA, src: SRC.te24m, short: "Photo" },
  { k: "te-counts", t: "Trail counts, 2020–2024: Quimby–Westgrove from 163 to 391", d: "T&E annual report memo, March 2025", r: QA, src: SRC.te25m, short: "Chart" },
  { k: "ptf-2019", t: "Measure B candidates: $13.0M for Quimby Rd to the city limit", d: "Parks CIP status report, October 2019, Table 5", r: SOUTH, src: SRC.ptf19, short: "Table" },
  { k: "vta-checklist", t: "The Measure B request: build Quimby–Aborn, design the rest", d: "Measure B Complete Streets checklist, March 2020", r: SOUTH, src: SRC.checklist, short: "Form" },
  { k: "ptf-2020", t: "VTA's 10-year list: $2.41M requested, $610K awarded", d: "Parks CIP status report, October 2020, Table 5", r: SOUTH, src: SRC.ptf20, short: "Table" },
  { k: "outfall-map", t: "Outfall 258 at Timberline Ct, near Yerba Buena Ave", d: "Council memo, May 2019, location map", r: ["THO04"], src: SRC.outfall, short: "Location map" },
];
const SCH_GROUPS = [
  ["Tully Rd to Quimby Rd, 2017", ["te-tully", "te-top10", "cip-2018"]],
  ["Quimby Rd to Aborn Ct, 2023", ["te-gateway22", "te-gateway23", "te-before-after", "te-open", "te-counts"]],
  ["Money for the rest", ["ptf-2019", "vta-checklist", "ptf-2020"]],
  ["The creek", ["outfall-map"]],
];

const EVENT_GEO = {
  "1970": { r: WHOLE },
  "1978": { r: NORTH, pt: LAKE, w: "Lake Cunningham", ph: ["Lake Cunningham.jpg"] },
  "1980": { r: ["THO02", "THO03"] },
  "1991": { r: QA },
  "2002": { r: WHOLE },
  "2004-11": { r: WHOLE },
  "2004-12-20": { r: WHOLE },
  "2005-04": { r: WHOLE },
  "2008-06": { r: INTERIM08 },
  "2016-02-11": { r: ["THO01W"] },
  "2016-05": { r: ["THO01W"] },
  "2017-02-06": { r: ["THO01W"], sch: "te-top10" },
  "2017-10-20": { r: ["THO01W"], sch: ["te-tully", "cip-2018"] },
  "2018": { r: ["THO04"], w: "Timberline Ct" },
  "2019-06-18": { r: ["THO04"], w: "Timberline Ct", sch: "outfall-map" },
  "2019-10-28": { r: SOUTH, sch: "ptf-2019" },
  "2019-12-17": { r: ["THO04"], w: "Timberline Ct" },
  "2020-03-20": { r: SOUTH, sch: "vta-checklist" },
  "2020-05": { r: SOUTH, sch: "ptf-2020" },
  "2021": { r: QA },
  "2021-09-30": { r: QA },
  "2022-03-16": { r: QA, sch: "te-gateway22" },
  "2022": { r: ["THO01W", "THO02"], pt: QUIMBY, w: "Quimby Rd" },
  "2023-03-13": { r: QA, sch: "te-gateway23" },
  "2023-08": { r: QA, sch: ["te-before-after", "te-open"] },
  "2023-08-28": { r: WHOLE },
  "2023-09-13": { r: QA },
  "2024-03-18": { r: QA },
  "2024-09-11": { r: QA, sch: "te-counts" },
  "2024-10-28": { r: QA },
  "2024-11-26": { r: WHOLE },
  "2025-08-25": { r: WHOLE },
  "2025-11-24": { r: SOUTHGAP },
  "2026-03-23": { r: SOUTHGAP },
};

const DOC_GEO = {
  "Master plan Negative Declaration (CEQAnet 2004122094)": WHOLE,
  "Measure B Complete Streets checklist (2020)": SOUTH,
  "Trail Program Strategic Plan (2016)": ["THO01W"],
  "City trail page: segment maps (archived 2005)": WHOLE,
  "City trail page (archived 2008)": INTERIM08,
  "City trail page (archived 2010)": WHOLE,
  "T&E annual update memo (2018)": ["THO01W"],
  "T&E presentation (2018)": ["THO01W"],
  "T&E annual report memo (2022)": QA,
  "T&E annual update memo (2023)": QA,
  "T&E annual update memo (2024)": QA,
  "T&E presentation (2024)": QA,
  "T&E annual report memo (2025)": QA,
  "T&E presentation (2025)": QA,
  "T&E annual report memo (2026)": null,
  "CIP annual status report (Feb 2016)": ["THO01W", "THO02"],
  "CIP semi-annual report (Feb 2017)": ["THO01W", "THO02"],
  "CIP semi-annual report (Oct 2017)": ["THO01W", "THO02"],
  "CIP semi-annual report (Apr 2018)": ["THO01W"],
  "Parks CIP status report 2017–18 (Nov 2018)": ["THO01W"],
  "CIP annual report 2017–18 (Dec 2018)": ["THO01W"],
  "Parks CIP status report 2018–19": SOUTH,
  "Park Trust Fund project list 2018–19": QA,
  "Parks CIP status report 2019–20": SOUTH,
  "Park Trust Fund project list 2019–20": QA,
  "Parks CIP annual report 2020–21": QA,
  "Park Trust Fund project list 2020–21": QA,
  "Parks CIP status report 2021–22": QA,
  "Park Trust Fund project list 2021–22": QA,
  "Park fee & CIP report 2022–23": QA,
  "Park fee & CIP report 2022–23, Attachment A": QA,
  "Park fee & CIP report 2023–24": QA,
  "Park fee & CIP report 2023–24, Attachment A": QA,
  "Park fee & CIP report 2024–25": SOUTH,
  "Park fee & CIP report 2024–25, Attachment A": QA,
  "Council memo: Outfall 258 repair (2019)": ["THO04"],
  "Council memo: Outfall 258 amendment (2019)": ["THO04"],
  "T&E: riparian corridor work plan (2016)": null,
};

// Endpoint labels, north end first.
const REACH_ENDS = {
  "THO01W": ["Tully Rd", "Quimby Rd"], "THO01E": ["Tully Rd", "Quimby Rd"],
  "THO02": ["Quimby Rd", "Chesapeake Cir"], "THO03": ["Chesapeake Cir", "Aborn Rd"],
  "THO04": ["Aborn Rd", "Wynfair Ridge Way"], "THO05": ["Wynfair Ridge Way", "Larkspur Canyon Dr"],
  "THO06": ["Larkspur Canyon Dr", "Heartland Way"],
};

const DOC_DATES = {
  "Master plan Negative Declaration (CEQAnet 2004122094)": ["2004-12-20", "filed"],
  "Measure B Complete Streets checklist (2020)": ["2020-03-20", "printed"],
  "Trail Program Strategic Plan (2016)": ["2016-05", "printed"],
  "City trail page: segment maps (archived 2005)": ["2005-03-05", "inferred"],
  "City trail page (archived 2008)": ["2008-01-30", "printed"],
  "City trail page (archived 2010)": ["2010-04-29", "printed"],
  "T&E annual update memo (2018)": ["2018-03-14", "printed"],
  "T&E presentation (2018)": ["2018-04-02", "cited"],
  "T&E annual report memo (2022)": ["2022-03-16", "printed"],
  "T&E annual update memo (2023)": ["2023-03-13", "printed"],
  "T&E annual update memo (2024)": ["2024-03-18", "printed"],
  "T&E presentation (2024)": ["2024-04-08", "cited"],
  "T&E annual report memo (2025)": ["2025-03-17", "printed"],
  "T&E presentation (2025)": ["2025-04-07", "cited"],
  "T&E annual report memo (2026)": ["2026-03-23", "printed"],
  "CIP annual status report (Feb 2016)": ["2016-02-11", "printed"],
  "CIP semi-annual report (Feb 2017)": ["2017-02-06", "printed"],
  "CIP semi-annual report (Oct 2017)": ["2017-10-23", "printed"],
  "CIP semi-annual report (Apr 2018)": ["2018-04", "printed"],
  "Parks CIP status report 2017–18 (Nov 2018)": ["2018-11-26", "printed"],
  "CIP annual report 2017–18 (Dec 2018)": ["2018-12", "printed"],
  "Parks CIP status report 2018–19": ["2019-10-28", "printed"],
  "Park Trust Fund project list 2018–19": ["2019-10-28", "inferred"],
  "Parks CIP status report 2019–20": ["2020-10-26", "printed"],
  "Park Trust Fund project list 2019–20": ["2020-10-26", "inferred"],
  "Parks CIP annual report 2020–21": ["2021-10-18", "printed"],
  "Park Trust Fund project list 2020–21": ["2021-10-18", "inferred"],
  "Parks CIP status report 2021–22": ["2023-01-23", "printed"],
  "Park Trust Fund project list 2021–22": ["2023-01-23", "inferred"],
  "Park fee & CIP report 2022–23": ["2023-10-23", "printed"],
  "Park fee & CIP report 2022–23, Attachment A": ["2023-10-23", "inferred"],
  "Park fee & CIP report 2023–24": ["2024-10-28", "printed"],
  "Park fee & CIP report 2023–24, Attachment A": ["2024-10-28", "inferred"],
  "Park fee & CIP report 2024–25": ["2025-11-24", "printed"],
  "Park fee & CIP report 2024–25, Attachment A": ["2025-11-24", "inferred"],
  "Council memo: Outfall 258 repair (2019)": ["2019-05-28", "printed"],
  "Council memo: Outfall 258 amendment (2019)": ["2019-12-17", "cited"],
  "T&E: riparian corridor work plan (2016)": ["2016-02-17", "printed"],
};

const CHAPTERS = [
  { n: "1", t: "From Lake Cunningham", sub: "North · Tully Rd to Quimby Rd",
    r: NORTH, ph: "Lake Cunningham 1.1.jpg",
    x: "The first stretch was paved in 2017: 0.6 mi on the west bank, with a gravel path on the east bank that makes a loop. It was the first City trail to pay the county Habitat Plan fee, which added $200,000. The trail doesn't yet connect to Lake Cunningham Park itself; that link is still under study." },
  { n: "2", t: "Paved at last", sub: "Quimby Rd to Aborn Rd",
    r: ["THO02", "THO03"], ph: "Evergreen SJ.jpeg",
    x: "A gravel path from 2008, this mile was paved in 2022–23 with a $610,000 VTA Measure B grant and park fees, and opened in August 2023 with Chinook salmon etched into its gateways. The count of people using it more than doubled the next year. A 0.2-mi link to Aborn Rd is still unbuilt." },
  { n: "3", t: "Six miles on paper", sub: "South · Aborn Rd to Heartland Way",
    r: SOUTHGAP, ph: "Montgomery Hill during Winter.jpg",
    x: "The 2005 master plan carries the trail on toward the foothills and San Felipe Rd. It's on VTA's 10-year Measure B list with a $2.41M request to design it, but no grant has come. In 2019 the City estimated the stretch south of Quimby Rd at $13.0M." },
];
