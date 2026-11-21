// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-20";

// Curated research data for the Silver Creek Trail page (Lower and Upper Silver Creek).
// Every entry carries at least one source URL.

const VWL = id => `https://scvwd.legistar.com/LegislationDetail.aspx?ID=${id}`;
const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  mp2007: "https://web.archive.org/web/20260715232629/https://www.sanjoseca.gov/home/showpublisheddocument/20669/636687969371700000",
  mpOrig: "https://www.sanjoseca.gov/home/showpublisheddocument/20669/636687969371700000",
  ceqaTrail: "https://ceqanet.lci.ca.gov/2007072056",
  ceqaFlood: "https://ceqanet.lci.ca.gov/2000102034",
  cityMap: "https://web.archive.org/web/20260715223115/https://www.sanjoseca.gov/home/showpublisheddocument/20673/636687969377330000",
  cityUpperMap: "https://web.archive.org/web/20260516232534/https://www.sanjoseca.gov/home/showpublisheddocument/20679/636687969385770000",
  cityPage: "https://web.archive.org/web/20260613100500/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/3013/2058?npage=2",
  cityUpperPage: "https://web.archive.org/web/20260614011616/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/3019/2058?npage=2",
  dobern2018: "https://legistar.granicus.com/sanjose/attachments/b9d2c069-7e8d-48ce-b69f-5ff81bdddb6c.pdf",
  ptf2015: "https://sanjose.granicus.com/MetaViewer.php?view_id=2&clip_id=8154&meta_id=515258",
  te2025: "https://legistar.granicus.com/sanjose/attachments/b1c10c5f-2894-4a6d-ac21-3746ffa675e4.pdf",
  te2026: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  te2026pres: "https://legistar.granicus.com/sanjose/attachments/86debace-1793-423b-aaa6-859de4f30f9d.pdf",
  fwPSA: "https://legistar.granicus.com/sanjose/attachments/3f78c199-216a-4372-8a12-88cbcc8aebd0.pdf",
  vwList: "https://www.valleywater.org/accordion/lower-silver-creek",
  vwDone: "https://www.valleywater.org/news/valley-water-completes-lower-silver-creek-flood-protection-project",
  vwLOMR: "https://www.valleywater.org/Lower-Silver-Creek-LOMR",
  vwCunningham: "https://www.valleywater.org/project-updates/cunningham-flood-detention-facility-certification-project",
  cip2021: "https://assets.valleywater.org/files/2020-06/CHAPTER%2003%20Flood%20Protection.pdf",
  cip2018: "https://assets.valleywater.org/files/2018-01/Chapter%203%20-%20Flood%20Protection.pdf",
  m15_0343: VWL("1371&GUID=F7CB7489-5F21-411A-ABC5-FFBE18242387"),
  m16_0342: VWL("2099&GUID=141779DC-FD4D-4695-A078-749206BAB5DB"),
  m17_0245: VWL("2944&GUID=E92595DA-109C-481C-B99A-72975229DC5D"),
  m17_0741: VWL("3440&GUID=BE04B609-5B9C-433D-8FF5-28C051567C72"),
  m18_0338: VWL("3958&GUID=10A4086A-E160-40B1-861C-472886B3AE72"),
  m18_0595: VWL("4215&GUID=BB313C19-FB1E-4411-9BB8-A6458C33AF98"),
  m19_0118: VWL("4889&GUID=BFA145FB-097A-4138-97E1-840DA853C9FF"),
  m20_0155: VWL("6150&GUID=43C56327-6A5D-48ED-A155-37B6336B5C9F"),
  m20_0528: VWL("6522&GUID=E2E4F0C0-8BC0-4C49-91AE-E88939F81F78"),
  m20_1142: VWL("7134&GUID=3347F87B-A430-4598-A462-BE64AA6D9480"),
  audit2019: "https://scvwd.legistar1.com/scvwd/attachments/f4ebd213-d7d8-4df3-9979-f81d1e9d23a7.pdf",
  vwReachMap: "https://scvwd.legistar1.com/scvwd/attachments/6d1fe1c4-0bd1-473c-93f4-3022bae78707.pdf",
  vwFunding: "https://scvwd.legistar1.com/scvwd/attachments/07a6314a-a6d8-4580-a726-e45919a40c9a.pdf",
  vwChron: "https://scvwd.legistar1.com/scvwd/attachments/fc3f58d9-32a1-4482-95f3-6bfc81c73edd.pdf",
  shimmick: "https://www.shimmick.com/portfolio/silver-creek-flood-protection-lower-silver-creek-flood-protection/",
  traillink: "https://www.traillink.com/trail/lower-silver-creek-trail/",
  wiki: "https://en.wikipedia.org/wiki/Lower_Silver_Creek_(Coyote_Creek_tributary)",
};

const REACH_NOTES = {
  "SCL01": { gap: true, text: "Coyote Creek (Watson Park) to Wooster Ave, the trail's planned downstream end. The City's Coyote Creek Trail design for Watson Park to Julian St, begun in 2025, keeps room for a link here.", src: SRC.te2026 },
  "SCL02": { gap: true, text: "Wooster Ave to Hwy 101. The Five Wounds rail corridor reaches Lower Silver Creek near Wooster Ave.", src: SRC.fwPSA },
  "SCL03": { gap: true, text: "Across Hwy 101. The 2007 master plan found an undercrossing \"not feasible\" and proposed a new pedestrian bridge over the freeway.", src: SRC.mp2007 },
  "SCL04": { gap: true, text: "Schulte Dr to McKee Rd, including the McKee/King intersection, where Valley Water did the first flood work in 1993.", src: SRC.vwList },
  "SCL05": { gap: true, text: "McKee Rd to Checkers Dr. Built as flood channel in 2004; no trail yet.", src: SRC.vwList },
  "SCL05A": { text: "Wooden bridge from Minus De Oro to Plata Arroyo Park.", src: SRC.gis },
  "SCL06": { gap: true, text: "Checkers Dr to Alum Rock Ave. The creek runs in a concrete box culvert here; the master plan squeezes the trail between the culvert and the street.", src: SRC.mp2007 },
  "SCL07": { gap: true, text: "Alum Rock Ave to Lausett Ave, in design, on a levee road from Valley Water's 2004–06 flood work.", src: SRC.vwList },
  "SCL07A": { text: "Lausett Ave pedestrian bridge.", src: SRC.gis },
  "SCL08": { gap: true, text: "Lausett Ave to E. San Antonio St, in design.", src: SRC.gis },
  "SCL09": { gap: true, text: "E. San Antonio St to Kammerer Ave, in design.", src: SRC.gis },
  "SCL09A": { text: "Kammerer Ave pedestrian bridge. A bridge between the Mayfair and Dobern neighborhoods got lights in 2025 after 15 years of requests; which one isn't stated.", src: "https://abc7news.com/post/east-san-jose-residents-celebrate-safety-improvements-lower-silver-creek-bridge/17433094/" },
  "SCL10": { gap: true, text: "Kammerer Ave to Jackson Ave, in design. The trail would cross I-680 through the existing S. Jackson Ave underpass.", src: SRC.mp2007 },
  "SCL11B": { gap: true, text: "Jackson Ave to the Dobern bridge. Valley Water's 2010–13 flood work reserved room for the trail.", src: SRC.cip2021 },
  "SCL11A": { text: "The Dobern pedestrian bridge: built 2005, raised with ADA ramps in 2016–17 ($3.25M), with City-paid retaining walls ($372,980) for a future trail underneath.", src: SRC.dobern2018 },
  "SCL11C": { text: "Planned link from the Dobern bridge to the S. Capitol Ave frontage road.", src: SRC.cip2021 },
  "SCL12": { text: "Dobern Ave to Story Rd through Capitol Park, on a PG&E corridor.", src: SRC.ptf2015 },
  "SCL13": { text: "Story Rd to Brenford Dr, beside Valley Water's 2012–15 flood reach.", src: SRC.m17_0741 },
  "SCL14": { gap: true, text: "Brenford Dr to Foxdale Dr. For now, a quarter mile on city streets.", src: SRC.traillink },
  "SCL15": { text: "Foxdale Dr to Ocala Ave on a PG&E corridor; unimproved in 2007, paved since.", src: SRC.mp2007 },
  "SCL16": { gap: true, text: "Ocala Ave to Cunningham Dr along Capitol Expwy. The master plan noted VTA's willingness to build it with the Capitol Expwy light rail.", src: SRC.mp2007 },
  "SCL17": { text: "Into Lake Cunningham Regional Park, which doubles as Valley Water's flood-detention basin (certified 2019).", src: SRC.vwCunningham },
  "SCL18": { text: "Lake Cunningham to Tully Rd: a study route toward a future Thompson Creek Trail.", src: SRC.gis },
  "SCU01": { text: "Upper Silver Creek, in Evergreen: 0.9 mile through Silver Creek Linear Park. The City says there's no study or master plan for this trail.", src: SRC.cityUpperPage },
  "SCU02": { gap: true, text: "Upper Silver Creek, Silver Creek Rd to The Ranch: planned, with no study or master plan.", src: SRC.cityUpperPage },
};

// Downstream (Coyote Creek) → upstream (Lake Cunningham), then the separate Upper Silver Creek piece.
const MAINLINE = ["SCL01","SCL02","SCL03","SCL04","SCL05","SCL06","SCL07","SCL08","SCL09","SCL10","SCL11B","SCL11A","SCL12","SCL13","SCL14","SCL15","SCL16","SCL17","SCU01","SCU02"];
const PARENT = { SCL05A: "SCL05", SCL07A: "SCL07", SCL09A: "SCL09", SCL11C: "SCL11A", SCL18: "SCL17" };
const SIDE_KIND = { SCL05A: "Bridge", SCL07A: "Bridge", SCL09A: "Bridge", SCL11C: "Planned link", SCL18: "Study route" };
const NOT_GAP = [];
const OWNERS = { SCVWD: "Valley Water land", PRNS: "City of San José Parks", DOT: "City street right-of-way", PRIVATE: "Private / PG&E corridor" };
const INTRO_CAP = "Coyote Creek to Lake Cunningham, plus Upper Silver Creek";
const INTRO_MARKS = [
  ["Coyote Creek", [37.35648, -121.87364], "left"], ["Hwy 101", [37.3570, -121.8690], "right"], ["Alum Rock Ave", [37.35551, -121.85021], "right"],
  ["I-680 / Jackson", [37.35151, -121.83674], "left"], ["Story Rd", [37.34939, -121.82912], "left"], ["Lake Cunningham", [37.3368, -121.8056], "right"],
  ["Upper Silver Creek", [37.2979, -121.80012], "left"],
];
const LANDMARKS = [
  { key: true, name: "Coyote Creek · Watson Park", ll: [37.35648, -121.87364] },
  { key: true, name: "Hwy 101", ll: [37.3570, -121.8690] },
  { name: "McKee / King", ll: [37.35789, -121.8608] },
  { key: true, name: "Alum Rock Ave", ll: [37.35551, -121.85021] },
  { name: "Mayfair", ll: [37.3530, -121.8440] },
  { key: true, name: "Jackson Ave / I-680", ll: [37.35151, -121.83674] },
  { name: "Dobern bridge", ll: [37.35265, -121.83286] },
  { key: true, name: "Story Rd", ll: [37.34939, -121.82912] },
  { key: true, name: "Lake Cunningham", ll: [37.3368, -121.8056] },
  { key: true, name: "Silver Creek Linear Park (Upper Silver Creek)", ll: [37.2979, -121.80012] },
];

// Timeline. cat: plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1969-02", cat: "flood", t: "Silver Creek floods the future Lake Cunningham", x: "Valley Water still uses the photo: floodwater from Lower Silver Creek over the fields that became Lake Cunningham Regional Park.", s: [["Valley Water capital plan", SRC.cip2021]] },
  { d: "1978", cat: "flood", t: "A park that's also a flood basin", x: "San José and the water district agree to build Lake Cunningham as a joint park and flood-detention facility, dug from the old Silver Creek marsh.", s: [["Valley Water board memo", SRC.m18_0338], ["Wikipedia", SRC.wiki]] },
  { d: "1983", cat: "plan", t: "Federal watershed plan", x: "The Soil Conservation Service (now NRCS) leads the Lower Silver Creek Watershed Plan, the federal basis of the flood project. The Army Corps isn't involved.", s: [["Valley Water memo 15-0343", SRC.m15_0343]] },
  { d: "1993", cat: "flood", t: "First flood work at McKee and King", x: "Valley Water finishes Reach 2A at the McKee/King intersection for $190,000.", s: [["Valley Water project list", SRC.vwList]] },
  { d: "2000", cat: "plan", t: "The Greenprint names a Silver Creek trail", x: "The City's parks plan first identifies Lower Silver Creek trail reaches, and Valley Water launches a program to speed up the flood project.", s: [["2007 trail master plan", SRC.mp2007], ["Valley Water memo 15-0343", SRC.m15_0343]] },
  { d: "2000-10-10", cat: "flood", t: "Environmental review for five miles of creek", x: "Valley Water files a Negative Declaration for flood and habitat work from Coyote Creek to Cunningham Ave.", s: [["CEQA 2000102034", SRC.ceqaFlood]] },
  { d: "2003-01", cat: "plan", t: "City and Valley Water agree to share creek land for trails", x: "A Collaborative Action Plan supports trails on water-district land.", s: [["Council memo (2018)", SRC.dobern2018]] },
  { d: "2004", cat: "flood", t: "Coyote Creek to Lausett Ave rebuilt", x: "Reaches 1–2 ($14.7M) and Reach 3 phase 1 ($10.4M) are finished, creating 20-ft levee roads the trail plan later proposes to use.", s: [["Valley Water project list", SRC.vwList], ["Shimmick", SRC.shimmick]] },
  { d: "2005", cat: "flood", t: "Lausett Ave to I-680; the Dobern bridge", x: "Reach 3 phase 2 is finished for $6.4M, and the City and Valley Water build a pedestrian bridge at Dobern Ave.", s: [["Valley Water project list", SRC.vwList], ["Valley Water memo 16-0342", SRC.m16_0342]] },
  { d: "2007-12-04", cat: "plan", t: "Council adopts the trail master plan", x: "Callander Associates' plan lays out eight reaches from Coyote Creek to Lake Cunningham, mostly on Valley Water's new levee roads, with a new bridge over Hwy 101.", s: [["Master plan (archived, partial)", SRC.mp2007], ["CEQA 2007072056", SRC.ceqaTrail]] },
  { d: "2009-04-16", cat: "fund", t: "Federal stimulus for the upper reaches", x: "USDA announces stimulus money through NRCS for Reaches 4–6; the district eventually receives $20.2M.", s: [["Valley Water memo 15-0343", SRC.m15_0343], ["Valley Water memo 17-0245", SRC.m17_0245]] },
  { d: "2010-08-24", cat: "flood", t: "$26M contract: I-680 to Story Rd", x: "R&L Brosamer wins Reaches 4–5B: about a mile of channel with culverts at Jackson Ave and Capitol Expwy and a new Lyndale Ave footbridge.", s: [["Valley Water memo 17-0245", SRC.m17_0245]] },
  { d: "2012-04-24", cat: "flood", t: "$18M contract: Story Rd to Moss Point Dr", x: "Proven Management wins Reaches 5C–6A, including the Story Rd box culvert.", s: [["Valley Water memo 17-0741", SRC.m17_0741]] },
  { d: "2013-12", cat: "flood", t: "I-680 to Story Rd done, except at Dobern", x: "A 300-ft floodwall gap is left at the Dobern bridge while PG&E moves a gas main.", s: [["Valley Water memo 15-0343", SRC.m15_0343]] },
  { d: "2014-06-30", cat: "fund", t: "City spends on the Dobern–Foxdale trail", x: "The Park Trust Fund shows about $231,000 spent on \"Lower Silver Creek Reach VI (Dobern–Foxdale)\" through mid-2014, plus a $158,000 retaining-wall budget.", s: [["Park Trust Fund report", SRC.ptf2015]] },
  { d: "2014-09", cat: "flood", t: "Defective piles cost a year", x: "Tests find flaws in floodwall piles on Reaches 5C–6A; completion slips from November 2014 to November 2015.", s: [["Valley Water memo 15-0343", SRC.m15_0343]] },
  { d: "2015-08-19", cat: "flood", t: "A $176M project, 25-ft floodwalls", x: "NBC reports Valley Water's work from San José to Lake Cunningham should take about 3,800 homes out of the flood plain.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/south-bay-flood-protection-project/81393/"]] },
  { d: "2015-10-27", cat: "fund", t: "Board orders an audit", x: "After media coverage, Valley Water's board sends the project's management contract to audit. The 2019 report finds a disclosed conflict of interest but no double billing.", s: [["Valley Water memo 19-0118", SRC.m19_0118], ["Audit report", SRC.audit2019]] },
  { d: "2016-06-14", cat: "flood", t: "Dobern bridge raised, with room for a trail", x: "A $3.0M contract raises the footbridge and closes the floodwall gap. At the City's request, the design leaves space for a trail underneath.", s: [["Valley Water memo 16-0342", SRC.m16_0342]] },
  { d: "2018-06-26", cat: "fund", t: "City pays $372,980 for trail walls at Dobern", x: "Retaining walls and planting so a future trail can pass under the Dobern bridge, up from $258,000 budgeted in 2016.", s: [["Council memo", SRC.dobern2018]] },
  { d: "2018-08-14", cat: "flood", t: "Last creek reach to Cunningham Ave accepted", x: "Reach 6B, Moss Point Dr to Cunningham Ave, finishes about a year and a half behind its 2016 target.", s: [["Valley Water memo 18-0595", SRC.m18_0595], ["Memo 20-0155", SRC.m20_0155]] },
  { d: "2019-10", cat: "flood", t: "Lake Cunningham certified as a flood basin", x: "An $11.6M project raises levees along Capitol Expwy and Cunningham Ave and adds a pedestrian path.", s: [["Valley Water", SRC.vwCunningham]] },
  { d: "2020-12", cat: "flood", t: "Flood project complete", x: "\"All of the improvements and revegetation maintenance for Reaches 4–6 are complete.\" Total for Reaches 4–6: about $102M.", s: [["Valley Water memo 20-1142", SRC.m20_1142], ["Capital plan", SRC.cip2021]] },
  { d: "2021-11-26", cat: "flood", t: "Thousands of homes leave the flood map", x: "FEMA's revised map takes effect, removing thousands of East San José homes from the 100-year floodplain.", s: [["Valley Water", SRC.vwDone]] },
  { d: "2023-09-12", cat: "plan", t: "Five Wounds corridor to reach Silver Creek", x: "The City takes over the old rail line from VTA, including Julian St to Lower Silver Creek, so the Five Wounds Trail can meet this one near Wooster Ave.", s: [["Council memo", SRC.fwPSA]] },
  { d: "2024-11-26", cat: "camp", t: "Valley Water bans camping on its land", x: "Before the ban, Lower Silver Creek was one of the creeks with the most encampments. By August 2025 the agency had removed 462 camps.", s: [["San José Spotlight", "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/"]] },
  { d: "2025-04-07", cat: "plan", t: "City seeks grants to finish the design", x: "The annual trail report lists a technical memo and permitting for the Lower Silver Creek Trail, and grant applications for design and construction.", s: [["T&E report (2025)", SRC.te2025]] },
  { d: "2025-08-04", cat: "build", t: "Lights on a creek footbridge", x: "After 15 years of requests over robberies and assaults, a Lower Silver Creek footbridge between Mayfair and Dobern gets lights.", s: [["ABC7", "https://abc7news.com/post/east-san-jose-residents-celebrate-safety-improvements-lower-silver-creek-bridge/17433094/"]] },
  { d: "2026-04-13", cat: "plan", t: "Stalled on \"jurisdictional ambiguity\"", x: "The City says sorting out reviews and permits with Valley Water and the Army Corps \"could take an additional two years,\" with regulatory feasibility expected 2026–28.", s: [["T&E report (2026)", SRC.te2026], ["Presentation, slide 14", SRC.te2026pres]] },
  { d: "2028", cat: "plan", future: true, t: "Regulatory feasibility due", x: "The City's estimate for finishing the permitting review of the trail on Valley Water's levees.", s: [["T&E presentation (2026)", SRC.te2026pres]] },
];

// City trail spending with published amounts.
const PROJECTS = [
  { name: "Trail walls under the Dobern bridge", id: "SJ (via Valley Water)", year: 2018, mi: null, kind: "undercrossing prep", cost: 0.373, contract: null, funding: "Construction & Conveyance tax (District 5)", src: SRC.dobern2018 },
  { name: "Dobern → Foxdale trail (Reach VI)", id: "SJ #7215", year: 2014, mi: null, kind: "spent through FY13–14", cost: 0.231, contract: null, funding: "Park Trust Fund", src: SRC.ptf2015, note: "$152,137 in FY13–14 plus $79,231 earlier" },
];
const PM_EST = [
  { name: "Penitencia Creek Reach 1B", sub: "benchmark (built 2017)", mi: 0.38, cost: 2.364, note: "Boardwalk trail, Noble Ave to Dorel Dr", src: "../penitencia-creek/" },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "Penitencia Reach 1B", pm: 2.364 / 0.38 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "Bridge-heavy (Coyote's Mabury–Empire)", pm: 13.72 / 0.58 },
];
const DEFAULT_PM = 28.11 / 3.48;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Coyote Creek → Hwy 101", ids: ["SCL01","SCL02"], mi: 0.34, status: "Planned", hard: "Meets the Coyote Creek and Five Wounds trails" },
  { name: "Hwy 101 → Alum Rock Ave", ids: ["SCL03","SCL04","SCL05","SCL06"], mi: 1.52, status: "Planned", hard: "Needs a bridge over Hwy 101; creek in a box culvert along King Rd" },
  { name: "Alum Rock Ave → Jackson Ave", ids: ["SCL07","SCL08","SCL09","SCL10"], mi: 1.18, status: "Design", hard: "Levee roads exist; permits stuck on \"jurisdictional ambiguity\"" },
  { name: "Jackson Ave → Dobern bridge", ids: ["SCL11B"], mi: 0.23, status: "Planned", hard: "Room reserved in the flood project" },
  { name: "Brenford Dr → Foxdale Dr", ids: ["SCL14"], mi: 0.34, status: "Planned", hard: "On-street for now" },
  { name: "Ocala Ave → Cunningham Dr", ids: ["SCL16"], mi: 0.26, status: "Planned", hard: "Along Capitol Expwy" },
  { name: "Upper Silver Creek: Silver Creek Rd → The Ranch", ids: ["SCU02"], mi: 0.47, status: "Planned", hard: "No study or master plan" },
];

const STATS = ({ gapMi }) => [
  ["1.7 mi", "of Lower Silver Creek trail open, in pieces between Dobern Ave and Lake Cunningham"],
  [gapMi.toFixed(1) + " mi", "still missing, including everything from Coyote Creek to Jackson Ave"],
  ["~$140M", "spent by Valley Water rebuilding the creek, 1993–2020, leaving levee roads the trail plan counts on"],
  ["2007", "the year the trail master plan was adopted. In 2026, permitting \"could take an additional two years\""],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget at award", "Final"];
const DELIVERY = [
  ["Flood Reaches 4–5B: I-680 → Story Rd", "Awarded Aug 2010", "Done Dec 2013 (except Dobern gap)", "good", "$25.95M", "$28.81M (+11%)", "warn", SRC.m17_0245],
  ["Flood Reaches 5C–6A: Story Rd → Moss Point", "Nov 2014", "Nov 2015 (defective piles)", "bad", "$18.22M", "$20.95M (+15%)", "warn", SRC.m17_0741],
  ["Flood Reach 6B: Moss Point → Cunningham Ave", "Dec 2016", "Accepted Aug 2018", "bad", "$12.68M", "$13.0–13.8M (sources differ)", "warn", SRC.m18_0595],
  ["Dobern bridge crossing", "Summer 2016", "Jan 2017", "good", "$3.00M", "$3.25M (+8.5%)", "warn", SRC.m20_0528],
  ["City share: trail walls at Dobern", "–", "Paid 2018", "good", "$258K (2016)", "$373K (+45%)", "bad", SRC.dobern2018],
  ["The trail itself (2007 master plan)", "Coyote Creek → Lake Cunningham", "~1.7 mi open; permits 2026–28; no construction money", "bad", "Not recovered", "–", "unk", SRC.te2026],
];
// The flood project the trail is supposed to ride on.
const OFFICIAL_EST = {
  head: ["Reach", "", "Cost", "Built"],
  rows: [
    ["2A", "McKee/King intersection", null, 0.19, "1993"],
    ["1–2", "Coyote Creek → McKee Rd", null, 14.67, "2002–04"],
    ["3 (ph. 1)", "McKee Rd → Lausett Ave", null, 10.41, "2004"],
    ["3 (ph. 2)", "Lausett Ave → I-680", null, 6.37, "2005"],
    ["3", "Alum Rock Ave → Lausett Ave", null, 9.81, "2006"],
    ["4–5B", "I-680 → Story Rd (final contract)", null, 28.81, "2010–13"],
    ["5C–6A", "Story Rd → Moss Point Dr (final contract)", null, 20.95, "2012–15"],
    ["6B", "Moss Point Dr → Cunningham Ave", null, 13.0, "2014–18"],
    ["–", "Dobern bridge crossing", null, 3.25, "2016–17"],
    ["–", "Lake Cunningham flood-basin certification (total project)", null, 11.84, "2018–19"],
  ],
};

const DOCS = [
  { g: "Plans & maps", items: [
    ["Lower Silver Creek Trail Master Plan (2007)", SRC.mpOrig],
    ["City map: Lower Silver Creek Trail", SRC.cityMap],
    ["City map: Silver Creek Valley & Upper Silver Creek trails", SRC.cityUpperMap],
    ["Valley Water: flood project reach map (2015)", SRC.vwReachMap],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: Lower Silver Creek watershed project (2000)", SRC.ceqaFlood],
    ["CEQA: Lower Silver Creek Trail Master Plan (2007)", SRC.ceqaTrail],
  ]},
  { g: "Valley Water records", items: [
    ["Board memo 15-0343: project history", SRC.m15_0343],
    ["Reaches 4–6 external funding chart (2015)", SRC.vwFunding],
    ["Consultant chronology (2015)", SRC.vwChron],
    ["Board memo 16-0342: Dobern bridge crossing", SRC.m16_0342],
    ["Board memo 17-0245: Reaches 4–5B completion", SRC.m17_0245],
    ["Board memo 17-0741: Reaches 5C–6A completion", SRC.m17_0741],
    ["Board memo 18-0338: Cunningham detention award", SRC.m18_0338],
    ["Board memo 18-0595: Reach 6B acceptance", SRC.m18_0595],
    ["Performance audit of the project's consultant agreement (2019)", SRC.audit2019],
    ["Board memo 20-1142: Reaches 5C–6A final acceptance", SRC.m20_1142],
    ["Capital plan 2018–22, flood chapter", SRC.cip2018],
    ["Capital plan 2021–25, flood chapter", SRC.cip2021],
  ]},
  { g: "San José records", items: [
    ["Park Trust Fund annual report, FY2013–14", SRC.ptf2015],
    ["Council memo: Dobern bridge retaining walls (2018)", SRC.dobern2018],
    ["Council memo: Five Wounds corridor purchase (2023)", SRC.fwPSA],
    ["Trail Network annual report (2025)", SRC.te2025],
    ["Trail Network annual report (2026)", SRC.te2026],
    ["Trail Network presentation (Apr 2026)", SRC.te2026pres],
  ]},
];

const MAPS = [
  { t: "City project page (archived)", d: "\"6.5 miles once fully developed,\" Lake Cunningham to the Coyote Creek Trail.", u: SRC.cityPage, tag: "Official" },
  { t: "TrailLink: Lower Silver Creek Trail", d: "Guide to the open Dobern–Ocala stretch and its on-street link.", u: SRC.traillink, tag: "Guide" },
  { t: "Valley Water: flood map revision", d: "FEMA map changes from the finished flood project.", u: SRC.vwLOMR, tag: "Official" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
];

const NEWS = [
  ["2015-08-19", "NBC Bay Area", "Water District Project Aims to Protect South Bay Residents From Flooding", "https://www.nbcbayarea.com/news/local/south-bay-flood-protection-project/81393/", "Valley Water building a $176M Lower Silver Creek project (widened channels, 25-ft floodwalls) from San Jose to Lake Cunningham; expected to take ~3,800 homeowners out of FEMA flood plain."],
  ["2019-03-01", "San José Spotlight", "Estremera: Valley Water making progress on important projects", "https://sanjosespotlight.com/estremera-valley-water-making-progress-on-important-projects/", "Op-ed by Valley Water director Tony Estremera: Lower Silver Creek project recently completed; Lake Cunningham flood-detention upgrades to protect ~3,200 homes and businesses. (Same text ran in San Jose Inside.)"],
  ["2019-09-30", "San Jose Inside", "Op-Ed: Valley Water Close to Finalizing Key Flood Protections at Lake Cunningham Park", "https://www.sanjoseinside.com/opinion/op-ed-valley-water-close-to-finalizing-key-flood-protections-at-lake-cunningham-park/", "Estremera op-ed: $11.6M Cunningham flood detention project nearly done; Valley Water invested $191M in both Lower Silver Creek flood projects; FEMA certification could end mandatory flood insurance."],
  ["2021-11-29", "Valley Water", "Valley Water Completes Lower Silver Creek Flood Protection Project", "https://www.valleywater.org/news/valley-water-completes-lower-silver-creek-flood-protection-project", "Lower Silver Creek and Cunningham projects complete; FEMA Letter of Map Revision (effective Nov 26, 2021) removes thousands of East San Jose homes from the 100-year floodplain."],
  ["2023-07-06", "San José Spotlight", "East San Jose lake finally receives funding for restoration", "https://sanjosespotlight.com/east-san-jose-lake-cunningham-finally-receives-state-california-funding-for-restoration/", "State budget allocates $1.5M for Lake Cunningham, mainly wetland restoration to improve poor water quality in the man-made lake."],
  ["2023-09-14", "San José Spotlight", "East San Jose walking trail will be expanded", "https://sanjosespotlight.com/east-san-jose-five-wounds-walking-biking-trail-will-be-expanded/", "Council approves final land buy to extend Five Wounds Trail (Coyote Creek to Silver Creek) to 2.17 miles by 2031, toward the future Little Portugal BART station."],
  ["2024-07-03", "KQED", "San José's Revamped Waterpark Reopens July Fourth in Time for Bay Area Heat Wave", "https://www.kqed.org/news/11992887/san-joses-revamped-waterpark-reopens-july-4th-in-time-for-bay-area-heat-wave", "Former Raging Waters at Lake Cunningham reopens as CaliBunga after a $6.5M renovation under new management."],
  ["2024-08-29", "San José Spotlight", "East San Jose gets funds to clean lake", "https://sanjosespotlight.com/east-san-jose-gets-federal-funds-to-clean-lake-cunningham-park/", "$850K federal earmark (Rep. Jimmy Panetta, Councilmember Domingo Candelas) for Lake Cunningham flood prevention, filtration and restoration, building on volunteer invasive-plant removal."],
  ["2024-08-29", "NBC Bay Area", "Swimming in San Jose's Lake Cunningham? City leaders are working to make it feasible", "https://www.nbcbayarea.com/news/local/south-bay/san-jose-lake-cunningham-revitalization/3638650/", "Leaders tout $850K grant aimed at making Lake Cunningham swimmable again by tackling contamination, adding filtration and removing invasive plants."],
  ["2024-12-17", "San José Spotlight", "San Jose's first homeless safe sleeping site opens in March", "https://sanjosespotlight.com/san-joses-first-homeless-safe-sleeping-site-opens-in-march/", "56-tent safe sleeping site at 1157 E. Taylor St. by Watson Park (near the Silver/Coyote confluence area), with a no-encampment zone around the park and school."],
  ["2025-08-05", "ABC7", "East San Jose residents celebrate safety with neighborhood bridge improvements", "https://abc7news.com/post/east-san-jose-residents-celebrate-safety-improvements-lower-silver-creek-bridge/17433094/", "New lights on the Lower Silver Creek pedestrian bridge linking Mayfair and Dobern after 15+ years of resident advocacy over robberies and assaults."],
  ["2025-08-25", "San José Spotlight", "Valley Water land sees reduction in San Jose homeless camps", "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/", "Valley Water removed 462 encampments under its no-camping policy; population fell from 450+ (concentrated on Coyote, Upper Penitencia and Lower Silver creeks and Guadalupe River) to 224."],
  ["2026-06-12", "KQED", "San José Loses Its Only Major Water Park — for Now", "https://www.kqed.org/news/12087398/san-jose-loses-its-only-major-water-park-for-now", "The Lake Cunningham water park (Raging Waters/CaliBunga) closes for summer 2026 while new operator plans a rebuilt aquatic destination."],
  ["2026-06-14", "ABC7", "NorCal's largest waterpark CaliBunga closes after 2 years at San Jose's Lake Cunningham Regional Park", "https://abc7news.com/post/norcals-largest-waterpark-calibunga-formerly-raging-waters-closes-2-years-san-joses-lake-cunningham-regional-park/19297477/", "City partners with Lakeside Partners on a redesigned water park at Lake Cunningham Regional Park."],
  ["2026-07-20", "San José Spotlight", "Historic trestle halts San Jose trail plans", "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/", "City pauses the southern Five Wounds Trail segment over the 1922 Coyote Creek Trestle; trail is pitched as linking Berryessa BART, Lower Silver Creek Trail and Coyote Creek Trail."],
];

const PHOTOS = [
  {"f": "Miguelita or Lower Silver Creek confluence with Coyote Creek.jpg", "c": "Silver Creek meets Coyote Creek near Watson Park, the trail's planned north end", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.356322, -121.873914], "y": 2020},
  {"f": "Miguelita or Lower Silver Creek at 101.jpg", "c": "Concrete channel of Lower Silver Creek where it passes under US 101", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.357075, -121.868831], "y": 2020},
  {"f": "Lower Silver Creek.jpg", "c": "Lower Silver Creek emerging from under McKee Road and King Road", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.358611, -121.861525], "y": 2020},
  {"f": "Lower Silver Creek at Babb Creek confluence, Silver Ave.jpg", "c": "Babb Creek confluence seen from the Silver Ave. footbridge", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.356444, -121.824389], "y": 2020},
  {"f": "Lower Silver Creek at Cunningham Ave.jpg", "c": "\"Silver Creek 1976\" bridge plaque over the wide channel at Cunningham Ave", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.34025, -121.810208], "approx": true, "y": 2020},
  {"f": "Lower Silver Creek draining from Lake Cunningham Regional Park.jpg", "c": "Lower Silver Creek leaving Lake Cunningham Regional Park", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.34025, -121.810208], "y": 2020},
  {"f": "Lower Silver Creek, San Jose, California, US.jpg", "c": "Winter light on Lower Silver Creek near Lake Cunningham", "a": "Clyde Charles Brown", "l": "CC BY-SA 4.0", "ll": [37.336639, -121.815806], "approx": true, "y": 2025},
  {"f": "Lake Cunningham.jpg", "c": "Lake Cunningham, the creek's flood-detention basin, with water slides beyond", "a": "JaGa", "l": "CC BY-SA 4.0", "ll": [37.336869, -121.805565], "y": 2008},
  {"f": "Lake Cunningham 1.1.jpg", "c": "Dock and small sailboat on Lake Cunningham", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.334453, -121.807114], "y": 2012},
  {"f": "Lake Cunningham 2.JPG", "c": "Tule reeds and the Diablo Range foothills across Lake Cunningham", "a": "Oleg Alexandrov", "l": "CC BY-SA 4.0", "ll": [37.3355, -121.805], "approx": true, "y": 2015},
  {"f": "Lake Cunningham 3.JPG", "c": "Lake Cunningham shoreline and picnic area in spring", "a": "Oleg Alexandrov", "l": "CC BY-SA 4.0", "ll": [37.3355, -121.805], "approx": true, "y": 2015},
  {"f": "Pelicans and Cormorants Lined Up (50447164866).jpg", "c": "White pelicans and a cormorant by Pelican Island, Lake Cunningham", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.337205, -121.809364], "y": 2020},
  {"f": "Coyote by Lake Cunningham (52616758659).jpg", "c": "A coyote trots through Lake Cunningham park", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.33448, -121.810189], "y": 2023},
  {"f": "20140928 Cunningham by Rod Bula 43 (15260833399).jpg", "c": "Bowls of the Lake Cunningham Regional Skate Park", "a": "Miles Gehm", "l": "CC BY 2.0", "ll": [37.336258, -121.80457], "y": 2014},
  {"f": "Calibunga Waterpark, San Jose, California, US.jpg", "c": "CaliBunga (ex-Raging Waters) entrance at Lake Cunningham, closed in 2026", "a": "Clyde Charles Brown", "l": "CC BY-SA 4.0", "ll": [37.334581, -121.812911], "y": 2025},
  {"f": "Sailboats at the park (203100715).jpg", "c": "Sailboats on Lake Cunningham below the East Foothills", "a": "Jodie Wilson", "l": "CC BY 2.0", "ll": [37.336, -121.806], "approx": true, "y": 2006},
  {"f": "View of Evergreen, San Jose (from the Silver Creek Hills) 1992.jpg", "c": "Stand-in: Evergreen seen from the Silver Creek Hills, Upper Silver Creek country", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": null, "approx": true, "y": 2021},
  {"f": "Silver Creek Hills Open Space Preserve 3683.jpg", "c": "Stand-in: dry grass in Silver Creek Hills Open Space Preserve, near the headwaters", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": null, "y": 2021},
];

const OUTCOMES = {
  "2007-12-04": [
    ["Completed", "bad", "Mostly not. Nineteen years later about 1.7 miles are open on Lower Silver Creek, none of it downstream of Jackson Ave."],
    ["Budget", "unk", "The plan's cost chapter is in a part of the document we couldn't retrieve."],
  ],
  "2012-04-24": [
    ["Schedule", "bad", "A year late (November 2015 instead of 2014) because of defective floodwall piles."],
    ["Budget", "warn", "$20.95M final against an $18.22M award (+15%)."],
  ],
  "2010-08-24": [["Budget", "warn", "$28.81M final against a $25.95M award (+11%), with 37 change orders."]],
  "2018-06-26": [["Progress", "pend", "The walls are built; the trail that would pass under the bridge isn't."]],
  "2026-04-13": [["Progress", "pend", "Permitting review expected 2026–28; no construction money identified."]],
};

const QUOTES = [
  {"q": "This bridge, once a dark and dangerous path through our community, has been transformed.", "who": "Peter Ortiz", "role": "San José District 5 Councilmember", "src": "ABC7, 2025", "u": "https://abc7news.com/post/east-san-jose-residents-celebrate-safety-improvements-lower-silver-creek-bridge/17433094/"},
  {"q": "Now with these new lights, this bridge no longer just connects two sides of the creek - it connects communities.", "who": "Danny Sanchez", "role": "Pastor, City Peace Project", "src": "ABC7, 2025", "u": "https://abc7news.com/post/east-san-jose-residents-celebrate-safety-improvements-lower-silver-creek-bridge/17433094/"},
  {"q": "Now that Lower Silver Creek has been upgraded to withstand higher flows, Valley Water wants to ensure Lake Cunningham can also capture potential higher flows.", "who": "Tony Estremera", "role": "Valley Water Board Director, District 6 (op-ed author)", "src": "San Jose Inside, 2019", "u": "https://www.sanjoseinside.com/opinion/op-ed-two-key-projects-offer-flood-protection-for-thousands-of-homes-in-san-joses-east-side/"},
  {"q": "If we had all the funding and resources to do all 40 miles of the trail network, we would.", "who": "Ed Bautista", "role": "San José parks department spokesperson", "src": "San José Spotlight, 2026", "u": "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/"},
];
