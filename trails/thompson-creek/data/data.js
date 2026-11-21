// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Thompson Creek Trail page. Every entry carries at least one source URL.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  gisQuery: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query?where=NAME%3D%27Thompson+Creek%27&outFields=REACHID,REACHNAME,DEVELOPMENTSTATUS,LENGTHMI,OWNERLAND,DATEOPENED&returnGeometry=false&f=json",
  wiki: "https://en.wikipedia.org/wiki/Thompson_Creek_(Santa_Clara_County,_California)",
  vwDone: "https://www.valleywater.org/accordion/thompson-creek-0",
  vwHec: "https://www.valleywater.org/accordion/thompson-creek",
  page2005: "https://web.archive.org/web/20050305144502/http://www.sanjoseca.gov:80/prns/Trails%20Info/Trails%20thompson%20creek%20segment%20maps.htm",
  page2008: "https://web.archive.org/web/20080404153228/http://www.sjparks.org:80/Trails/Thompson/index.asp",
  page2010: "https://web.archive.org/web/20100501203236/http://www.sjparks.org:80/Trails/Thompson/index.asp",
  ceqa: "https://ceqanet.lci.ca.gov/2004122094",
  checklist: "https://www.dropbox.com/scl/fi/g2p0qum2el9kax16cgy02/2016MB_BP-CAP_SJ_ThompsonCreekTrail_CS_Checklist.pdf?rlkey=ruzylurfnyr7c1qagmnqpj6jz&raw=1",
  strat: "https://material-civet.files.svdcdn.com/production/images/documents/StrategicPlan.pdf?dm=1627321644",
  cip16: "https://sanjose.granicus.com/MetaViewer.php?view_id=2&clip_id=8773&meta_id=558805",
  riparian: "https://sanjose.granicus.com/MetaViewer.php?meta_id=559729",
  cip17a: "https://sanjose.granicus.com/MetaViewer.php?event_id=2673&meta_id=619106",
  cip17b: "https://legistar.granicus.com/sanjose/attachments/8301a253-d3c4-4089-a9e1-8085fd3371f7.pdf",
  cip18: "https://legistar.granicus.com/sanjose/attachments/443b0aaf-552b-43be-89d1-fbd22a31b8c7.pdf",
  cip18b: "https://legistar.granicus.com/sanjose/attachments/6e4793ff-298f-4429-9857-84267a8b8713.pdf",
  ptf18: "https://legistar.granicus.com/sanjose/attachments/1f04e44e-78bb-4c0a-8677-414559f4e32c.pdf",
  te18m: "https://legistar.granicus.com/sanjose/attachments/dc3b3520-95a4-478e-bab8-6bc12dcb49ab.pdf",
  te18p: "https://legistar.granicus.com/sanjose/attachments/43a4fe81-40ed-454b-937f-57106682e758.pdf",
  bridgeway: "https://bridgewaycci.com/project/san-jose/",
  outfall: "https://legistar.granicus.com/sanjose/attachments/dd82d60a-7bea-4240-adc9-67220b7050a0.pdf",
  outfallAmend: "https://legistar.granicus.com/sanjose/attachments/5466ef8f-fe61-4262-b01e-b8f7bc0b1f00.pdf",
  ptf19: "https://legistar.granicus.com/sanjose/attachments/83fcb43a-a50d-41a6-9eb8-1e79b387880c.pdf",
  ptf19a: "https://legistar.granicus.com/sanjose/attachments/50972c8e-1b73-4c75-8ca4-a4a2225a82aa.pdf",
  ptf20: "https://legistar.granicus.com/sanjose/attachments/bb077f2b-c648-48ea-b6c9-e8baf850d2bb.pdf",
  ptf20a: "https://legistar.granicus.com/sanjose/attachments/051457e6-9c64-43a7-89fa-fc7084a64d50.pdf",
  ptf21: "https://legistar.granicus.com/sanjose/attachments/4aface37-d029-4ff9-9847-996f4feb7f6a.pdf",
  ptf21a: "https://legistar.granicus.com/sanjose/attachments/f04e7075-8334-42ce-9055-6ed7f449b92b.pdf",
  ptf22: "https://legistar.granicus.com/sanjose/attachments/10ef7ca4-f9c0-4f36-99db-d6626c35ca7b.pdf",
  ptf22a: "https://legistar.granicus.com/sanjose/attachments/dca9a1e6-5989-4880-8fa4-95f01b1e2206.pdf",
  te22: "https://legistar.granicus.com/sanjose/attachments/452daa66-eade-47a9-b243-ccbbf5bc4d7d.pdf",
  te23: "https://legistar.granicus.com/sanjose/attachments/8c1976ed-3e47-4c32-b923-a957d2da70d7.pdf",
  pdo23: "https://legistar.granicus.com/sanjose/attachments/02594714-bcf4-466f-a3fa-96c7eee95785.pdf",
  pdo23a: "https://legistar.granicus.com/sanjose/attachments/d31b8f6d-a7f4-4e98-bb9c-4296ceb6b423.pdf",
  te24m: "https://legistar.granicus.com/sanjose/attachments/ad15677b-33e2-4a44-861c-eb6aec773fa0.pdf",
  te24p: "https://legistar.granicus.com/sanjose/attachments/ab32d32a-3751-4302-bf2e-a9bbb1eea122.pdf",
  pdo24: "https://legistar.granicus.com/sanjose/attachments/b5c345db-58dd-4560-8ec0-a59b6766cf56.pdf",
  pdo24a: "https://legistar.granicus.com/sanjose/attachments/4b0801ff-260e-4c46-9361-e0e597106ad1.pdf",
  te25m: "https://legistar.granicus.com/sanjose/attachments/b1c10c5f-2894-4a6d-ac21-3746ffa675e4.pdf",
  te25p: "https://legistar.granicus.com/sanjose/attachments/0cdb6891-5119-4fae-a83d-33b516789b9d.pdf",
  pdo25: "https://legistar.granicus.com/sanjose/attachments/06d9ef0c-34e8-46d0-b3dd-5ea0941809fc.pdf",
  pdo25a: "https://legistar.granicus.com/sanjose/attachments/888c995b-5059-4f59-b6e5-472050d1d19c.pdf",
  te26: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  vta: "https://2016measureb.vta.org/projects/thompson-creek-trail",
  vwMaint: "https://www.valleywater.org/news/photo-slideshow-valley-water-performs-annual-work-in-creeks-for-flood-protection",
  ktvu: "https://www.ktvu.com/news/valley-water-to-pay-unhoused-residents-to-keep-encampments-clean",
  vwZones: "https://www.valleywater.org/news-events/news-releases/valley-water-board-directors-approves-ordinance-reduce-encampments-along",
  spot2025: "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/",
  gauge: "https://valleywateralert.org/info/1463info.php",
  noaa: "https://water.noaa.gov/gauges/thqc1",
  cityPage: "https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/3023/2028",
};

const REACH_NOTES = {
  "THO01W": { text: "Tully Rd to Quimby Rd on the west bank, paved by City project 6325 and finished October 20, 2017. The contractor, Bridgeway Civil Constructors, also laid a 12-inch water line and more than 500 ft of retaining wall. It was the first City trail to pay the Santa Clara Valley Habitat Plan fee, which added $200,000.", src: SRC.cip18 },
  "THO01E": { text: "A gravel path on the east bank between Tully Rd and Quimby Rd; with the paved west side it forms a loop. No project to pave it has been found. When it opened isn't recorded in GIS.", src: SRC.gisQuery },
  "THO02": { text: "Quimby Rd to Aborn Ct / Westgrove Ln (GIS ends it at Chesapeake Cir). A gravel trail from 2008, paved in 2022–23 with a $610,000 VTA Measure B grant, park fees and construction taxes, and opened in August 2023. Gateways carry etched Chinook salmon. The City's 12-hour count here: 163 people in 2023, 391 in 2024.", src: SRC.te24m },
  "THO03": { gap: true, text: "A short link from the end of the 2023 paving to Aborn Rd. It was part of the 2008 gravel trail from Tully Rd to Aborn Rd, but GIS now lists it as planned.", src: SRC.gisQuery },
  "THO04": { gap: true, text: "Aborn Rd to Wynfair Ridge Way by way of Yerba Buena Ave, 2.3 mi on Valley Water land. Unfunded; the Measure B request would pay only for schematic design.", src: SRC.checklist },
  "THO05": { gap: true, text: "Wynfair Ridge Way to Larkspur Canyon Dr. The only reach GIS lists on City parks land rather than Valley Water land. Unfunded.", src: SRC.gisQuery },
  "THO06": { gap: true, text: "Larkspur Canyon Dr to Heartland Way at San Felipe Rd, the master plan's southern end. Unfunded.", src: SRC.ceqa },
};

// North (Tully Rd / Lake Cunningham) → south (Heartland Way).
const MAINLINE = ["THO01W", "THO02", "THO03", "THO04", "THO05", "THO06"];
const PARENT = { THO01E: "THO01W" };
const SIDE_KIND = { THO01E: "East-bank path" };
const NOT_GAP = [];
const OWNERS = { "SCV WATER DISTRICT": "Valley Water land", SCVWD: "Valley Water land", PRNS: "City of San José Parks" };
const INTRO_CAP = "Lake Cunningham to Heartland Way";
const INTRO_FIT = { paddingTopLeft: [110, 70], paddingBottomRight: [40, 24] }; // room for the west-side labels
const INTRO_MARKS = [
  ["Tully Rd", [37.3330, -121.8105], "left"], ["Quimby Rd", [37.3240, -121.8082], "left"], ["Aborn Rd", [37.3137, -121.7945], "left"],
  ["Yerba Buena Ave", [37.2964, -121.7734], "left"], ["Heartland Way", [37.2683, -121.7374], "left"],
];
const LANDMARKS = [
  { key: true, name: "Lake Cunningham", ll: [37.3355, -121.8055] },
  { key: true, name: "Tully Rd", ll: [37.3330, -121.8105] },
  { key: true, name: "Quimby Rd", ll: [37.3240, -121.8082] },
  { name: "Chesapeake Cir", ll: [37.3157, -121.7964] },
  { key: true, name: "Aborn Rd", ll: [37.3137, -121.7945] },
  { name: "Wynfair Ridge Way / Yerba Buena Ave", ll: [37.2964, -121.7734] },
  { name: "Larkspur Canyon Dr", ll: [37.2873, -121.7638] },
  { key: true, name: "Heartland Way / San Felipe Rd", ll: [37.2683, -121.7374] },
];

// Timeline. cat: plan | build | fund | flood | camp
const CAT_LABELS = { flood: "The creek & Valley Water", camp: "Encampments" };
const TIMELINE = [
  { d: "1970", cat: "flood", t: "The creek is extended to Silver Creek Marsh", x: "Thompson Creek, once called Dry Creek, is extended to the marsh, and foothill creeks are later tied into it for storm drainage.", s: [["Wikipedia", SRC.wiki]] },
  { d: "1978", cat: "flood", t: "The marsh becomes Lake Cunningham", x: "Silver Creek Marsh is dug out as a flood-detention basin, today's Lake Cunningham, at what is now the trail's north end.", s: [["Wikipedia", SRC.wiki]] },
  { d: "1980", cat: "flood", t: "Valley Water channels Quimby Rd to Aborn", x: "Its completed-projects list puts the construction cost at $680,000.", s: [["Valley Water project list", SRC.vwDone]] },
  { d: "1991", cat: "flood", t: "More channel work, Quimby Rd to Westgrove", x: "A $240,000 Valley Water project on the stretch the 2023 trail would follow.", s: [["Valley Water project list", SRC.vwDone]] },
  { d: "2002", cat: "plan", t: "A feasibility study", x: "The City studies whether a continuous trail could run along Thompson Creek. The study isn't online.", s: [["City trail page (archived 2010)", SRC.page2010]] },
  { d: "2004-11", cat: "plan", t: "The plan goes to the bike committee", x: "Outreach for the master plan runs to seven public meetings that reach 385 people, plus four technical committee meetings.", s: [["Measure B checklist (2020)", SRC.checklist]] },
  { d: "2004-12-20", cat: "plan", t: "Environmental review: about 7 miles", x: "The City files a Negative Declaration for a multi-use trail of about 7 miles from Lake Cunningham Park to San Felipe Rd and Heartland Way.", s: [["CEQAnet 2004122094", SRC.ceqa]] },
  { d: "2005-04", cat: "plan", t: "Master plan completed", x: "The plan sets the alignment and recreation features. The Parks Commission and Council approved it; the date of the Council vote wasn't found, and the plan itself is no longer online.", s: [["City trail page (archived 2010)", SRC.page2010], ["Measure B checklist (2020)", SRC.checklist]] },
  { d: "2008-06", cat: "build", t: "A gravel trail opens, Tully Rd to Aborn Rd", x: "An interim, unpaved trail opens along the northern two miles. A January 2008 version of the City page had aimed for summer 2007.", s: [["City trail page (archived 2010)", SRC.page2010], ["City trail page (archived 2008)", SRC.page2008]] },
  { d: "2016-02-11", cat: "build", t: "Plans nearly done for Tully to Quimby", x: "Design project 5290 has a $1,185,000 baseline and a target of October 2016. Quimby to Aborn is at 95% plans with no budget.", s: [["CIP status report", SRC.cip16]] },
  { d: "2016-05", cat: "fund", t: "First trail to pay the Habitat Plan fee", x: "The City's trail strategic plan says the Tully–Quimby permit under the county Habitat Plan adds $200,000 to the project.", s: [["Trail Strategic Plan", SRC.strat]] },
  { d: "2017-02-06", cat: "build", t: "Tully to Quimby under construction", x: "Construction project 6325 has a $1,186,217 baseline and a January 2017 finish date. Quimby–Aborn design is budgeted at $700,000.", s: [["CIP semi-annual report", SRC.cip17a], ["Bridgeway Civil Constructors", SRC.bridgeway]] },
  { d: "2017-10-20", cat: "build", t: "Tully Rd to Quimby Rd paved", x: "The City lists the project complete on October 20, 2017: about 5,000 ft of trail with a new water line and retaining walls.", s: [["CIP report, April 2018", SRC.cip18], ["T&E presentation (2018)", SRC.te18p]] },
  { d: "2018", cat: "flood", t: "Valley Water repairs the bank at Timberline Ct", x: "An eroded creek bank near a City storm outfall is repaired in summer 2018.", s: [["Council memo (2019)", SRC.outfall]] },
  { d: "2019-06-18", cat: "flood", t: "$740,000 to fix Outfall 258", x: "The Council agrees to pay Valley Water up to $410,000, 55%, to replace a corroded 48-inch storm outfall into the creek at Timberline Ct.", s: [["Council memo", SRC.outfall]] },
  { d: "2019-10-28", cat: "fund", t: "$13.0M for the rest, the City estimates", x: "A Park Trust Fund reserve holds $554,000 for Quimby–Aborn. On its list of Measure B candidates the City puts Quimby Rd to the city limit, 5.0 mi, at $13.0M.", s: [["Parks CIP status report", SRC.ptf19], ["PTF project list", SRC.ptf19a]] },
  { d: "2019-12-17", cat: "flood", t: "Outfall deal raised to $425,000", x: "State Fish and Wildlife requires three years of monitoring for a 60-inch live oak beside the outfall.", s: [["Council memo", SRC.outfallAmend]] },
  { d: "2020-03-20", cat: "fund", t: "The Measure B request", x: "The City asks VTA to fund building Quimby Rd to Aborn Rd (1.05 mi) and designing the rest to Heartland Way (5.5 mi), including repairing or replacing five footbridges.", s: [["Measure B checklist", SRC.checklist]] },
  { d: "2020-05", cat: "fund", t: "On VTA's 10-year list", x: "VTA's board puts the trail on its Measure B priority list with a $2.41M request. Quimby–Aborn gets $610,000 in the first two-year cycle.", s: [["Parks CIP status report (2020)", SRC.ptf20]] },
  { d: "2021", cat: "fund", t: "Grant agreement signed", x: "In fiscal 2020–21 the City and VTA sign the $610,000 grant; the plans are at 90%.", s: [["Parks CIP report (2021)", SRC.ptf21], ["VTA Measure B", SRC.vta]] },
  { d: "2021-09-30", cat: "flood", t: "Bank protection at Quimby Creek", x: "Valley Water places rock and rootwads where Quimby Creek joins Thompson Creek.", s: [["Valley Water", SRC.vwMaint]] },
  { d: "2022-03-16", cat: "build", t: "Quimby–Aborn: construction set for summer", x: "The project adds decorative gateways and paving, paid for with Measure B, park fees and City construction taxes. The memo gives the length as 0.64 mi; later reports say 1.06.", s: [["T&E annual report", SRC.te22]] },
  { d: "2022", cat: "build", t: "Bike lanes on Quimby Rd", x: "DOT finishes protected bike lanes on Quimby Rd from Capitol Expressway to Ruby Ave, crossing the trail.", s: [["T&E annual update (2023)", SRC.te23]] },
  { d: "2023-03-13", cat: "build", t: "Almost built", x: "The City says Quimby to Aborn Ct is almost done and will open over the summer.", s: [["T&E annual update", SRC.te23]] },
  { d: "2023-08", cat: "build", t: "Quimby Rd to Aborn Ct opens", x: "After 15 years as a gravel path, 1.06 mi opens paved, with Chinook salmon etched into the trailheads. Use rises 75% over the unpaved trail.", s: [["T&E presentation (2024)", SRC.te24p], ["T&E annual update (2024)", SRC.te24m]] },
  { d: "2023-08-28", cat: "camp", t: "Clean Camps, Clean Creeks", x: "Valley Water's gift-card program for keeping encampments clean covers nine waterways, among them Thompson Creek.", s: [["KTVU", SRC.ktvu]] },
  { d: "2023-09-13", cat: "fund", t: "$557,062 from Measure B", x: "The largest of the grant reimbursements reaches the City.", s: [["Park fee report, Attachment A (2024)", SRC.pdo24a], ["VTA Measure B", SRC.vta]] },
  { d: "2024-03-18", cat: "build", t: "Use up 75%", x: "Counts in fall 2023 show 75% more people than on the unpaved trail in fall 2022.", s: [["T&E annual update", SRC.te24m]] },
  { d: "2024-09-11", cat: "build", t: "Trail count up 140%", x: "The City's annual count at Quimby–Westgrove finds 391 people in 12 hours, up from 163.", s: [["T&E annual report (2025)", SRC.te25m]] },
  { d: "2024-10-28", cat: "fund", t: "Grant closed out", x: "The City reports the $610,000 grant for Quimby Rd to Westgrove Ln fully reimbursed and closed.", s: [["Park fee & CIP report", SRC.pdo24]] },
  { d: "2024-11-26", cat: "camp", t: "No camping on Valley Water land", x: "Valley Water bans encampments on its creek lands, which include most of the Thompson Creek corridor.", s: [["Valley Water", SRC.vwZones]] },
  { d: "2025-08-25", cat: "camp", t: "\"Moving upstream\"", x: "As Valley Water clears camps, District 8 Councilmember Domingo Candelas says people are moving up Thompson Creek.", s: [["San José Spotlight", SRC.spot2025]] },
  { d: "2025-11-24", cat: "plan", t: "The rest is still only on a list", x: "The remaining 6 miles to Heartland Way are still listed as \"placed on the 10-year priority list,\" with no grant.", s: [["Park fee & CIP report", SRC.pdo25]] },
  { d: "2026-03-23", cat: "fund", t: "No money for the network", x: "The City puts the cost of finishing all its trails at $300–400M and says there is no defined funding.", s: [["T&E annual report (2026)", SRC.te26]] },
];

const PROJECTS = [
  { name: "Tully Rd → Quimby Rd", id: "SJ #5290/6325", year: 2017, mi: 0.64, cost: 2.371, contract: null, funding: "Park Trust Fund; Habitat Plan fee $200K included", src: SRC.cip17a, note: "Design ($1.185M) and construction ($1.186M) baselines; final cost not published" },
  { name: "Quimby Rd → Aborn Ct", id: "SJ #7525/422Y", year: 2023, mi: 1.06, cost: 0.713, contract: null, funding: "VTA Measure B $610K; Park Trust Fund; construction taxes", src: SRC.pdo25a, note: "Spending recorded through FY2024-25 in the City's park-fee reports, which appear to include the grant-reimbursed costs; design (#7525) had a separate $700K baseline; no final total published" },
  { name: "Outfall 258 repair (creek, not trail)", id: "City/Valley Water", year: 2019, mi: null, kind: "outfall", cost: 0.74, contract: null, funding: "City up to $425K; Valley Water the rest", src: SRC.outfall, note: "Total project cost" },
];
const PM_EST = [
  { name: "Quimby Rd → city limit, 2019", sub: "City estimate", mi: 5.0, cost: 13.0, note: "Total project delivery, on the City's Measure B candidate list", src: SRC.ptf19 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "City 2019 estimate", pm: 13.0 / 5.0 },
  { label: "Tully–Quimby budget", pm: 2.371 / 0.64 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
];
const DEFAULT_PM = 13.0 / 5.0;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Chesapeake Cir → Aborn Rd", ids: ["THO03"], mi: 0.18, status: "Planned", hard: "Short link past the end of the 2023 paving; part of the 2008 gravel trail" },
  { name: "Aborn Rd → Wynfair Ridge Way", ids: ["THO04"], mi: 2.30, status: "Planned", hard: "Valley Water land along Yerba Buena Ave; footbridges to repair or replace; unfunded" },
  { name: "Wynfair Ridge Way → Larkspur Canyon Dr", ids: ["THO05"], mi: 0.88, status: "Planned", hard: "City parks land; unfunded" },
  { name: "Larkspur Canyon Dr → Heartland Way", ids: ["THO06"], mi: 2.83, status: "Planned", hard: "Into the foothills to San Felipe Rd; unfunded" },
];

const STATS = ({ gapMi }) => [
  ["1.7 mi", "paved from Tully Rd to Aborn Ct, in 2017 and 2023, plus a 0.9-mi gravel path on the east bank"],
  [gapMi.toFixed(1) + " mi", "missing south of Aborn Rd to Heartland Way, with no money for design or construction"],
  ["$610K", "the one outside grant found: VTA Measure B, for Quimby Rd to Aborn Ct"],
  ["+140%", "people counted on the new paved stretch in 2024 compared with 2023"],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget", "Final"];
const DELIVERY = [
  ["Tully Rd → Quimby Rd (#6325)", "Finish by Jan 20, 2017 (Feb 2017 report)", "Finished Oct 20, 2017, about 9 months later", "warn", "$1.19M construction baseline", "Final cost not published", "unk", SRC.cip17a],
  ["Quimby Rd → Aborn Ct (#422Y)", "Build from summer 2022, open summer 2023", "Opened Aug 2023; plans had sat at 90–95% since 2017 waiting for money", "warn", "$610K Measure B + park fees", "Grant fully spent; total not published", "unk", SRC.pdo24],
  ["2005 master plan", "About 7 miles, Lake Cunningham to Heartland Way", "1.7 mi paved in 21 years; 6.2 mi unbuilt", "bad", "Plan's estimate not online", "City 2019: $13.0M for the rest", "unk", SRC.ceqa],
  ["Southern reaches (Measure B)", "Design to Heartland Way on VTA's 10-year list (2020)", "No grant as of Nov 2025", "bad", "$2.41M requested", "Not funded", "unk", SRC.pdo25],
];
const OFFICIAL_EST = {
  head: ["Item", "Miles", "City figure", "What it covers"],
  rows: [
    ["2017", "Quimby–Aborn design", null, 0.70, "Baseline budget for the 95% plans, project 7525"],
    ["2019", "Quimby Rd to the city limit", 5.0, 13.0, "Estimated total project delivery, on the City's list of Measure B candidates"],
    ["2020", "Measure B request", 6.55, 2.41, "Build Quimby to Westgrove and design the rest to Heartland Way"],
    ["2020", "Measure B award", 1.05, 0.61, "First grant cycle: final design and construction, Quimby Rd to Aborn Ct"],
  ],
  total: null,
};

const DOCS = [
  { g: "Plans & environmental review", items: [
    ["Master plan Negative Declaration (CEQAnet 2004122094)", SRC.ceqa],
    ["Measure B Complete Streets checklist (2020)", SRC.checklist],
    ["Trail Program Strategic Plan (2016)", SRC.strat],
  ]},
  { g: "City trail pages (archived)", items: [
    ["City trail page: segment maps (archived 2005)", SRC.page2005],
    ["City trail page (archived 2008)", SRC.page2008],
    ["City trail page (archived 2010)", SRC.page2010],
  ]},
  { g: "Trail annual reports", items: [
    ["T&E annual update memo (2018)", SRC.te18m],
    ["T&E presentation (2018)", SRC.te18p],
    ["T&E annual report memo (2022)", SRC.te22],
    ["T&E annual update memo (2023)", SRC.te23],
    ["T&E annual update memo (2024)", SRC.te24m],
    ["T&E presentation (2024)", SRC.te24p],
    ["T&E annual report memo (2025)", SRC.te25m],
    ["T&E presentation (2025)", SRC.te25p],
    ["T&E annual report memo (2026)", SRC.te26],
  ]},
  { g: "Capital program & park fee reports", items: [
    ["CIP annual status report (Feb 2016)", SRC.cip16],
    ["CIP semi-annual report (Feb 2017)", SRC.cip17a],
    ["CIP semi-annual report (Oct 2017)", SRC.cip17b],
    ["CIP semi-annual report (Apr 2018)", SRC.cip18],
    ["Parks CIP status report 2017–18 (Nov 2018)", SRC.ptf18],
    ["CIP annual report 2017–18 (Dec 2018)", SRC.cip18b],
    ["Parks CIP status report 2018–19", SRC.ptf19],
    ["Park Trust Fund project list 2018–19", SRC.ptf19a],
    ["Parks CIP status report 2019–20", SRC.ptf20],
    ["Park Trust Fund project list 2019–20", SRC.ptf20a],
    ["Parks CIP annual report 2020–21", SRC.ptf21],
    ["Park Trust Fund project list 2020–21", SRC.ptf21a],
    ["Parks CIP status report 2021–22", SRC.ptf22],
    ["Park Trust Fund project list 2021–22", SRC.ptf22a],
    ["Park fee & CIP report 2022–23", SRC.pdo23],
    ["Park fee & CIP report 2022–23, Attachment A", SRC.pdo23a],
    ["Park fee & CIP report 2023–24", SRC.pdo24],
    ["Park fee & CIP report 2023–24, Attachment A", SRC.pdo24a],
    ["Park fee & CIP report 2024–25", SRC.pdo25],
    ["Park fee & CIP report 2024–25, Attachment A", SRC.pdo25a],
  ]},
  { g: "The creek", items: [
    ["Council memo: Outfall 258 repair (2019)", SRC.outfall],
    ["Council memo: Outfall 258 amendment (2019)", SRC.outfallAmend],
    ["T&E: riparian corridor work plan (2016)", SRC.riparian],
  ]},
];

const MAPS = [
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
  { t: "City GIS: Thompson Creek reaches", d: "Status, length, landowner and opening date for each reach (JSON).", u: SRC.gisQuery, tag: "Data" },
  { t: "VTA: 2016 Measure B, Thompson Creek Trail", d: "The grant, its allocation and what has been spent.", u: SRC.vta, tag: "Official" },
  { t: "City trail page", d: "The City's current page for the trail.", u: SRC.cityPage, tag: "Official" },
  { t: "Valley Water ALERT: Thompson Creek at Quimby Rd", d: "Live stream gauge, recording since 1958.", u: SRC.gauge, tag: "Live data" },
  { t: "NOAA: Thompson Creek above Quimby", d: "River forecast gauge.", u: SRC.noaa, tag: "Live data" },
  { t: "Wikipedia: Thompson Creek", d: "The creek's history, from Dry Creek to flood channel.", u: SRC.wiki, tag: "Guide" },
];

const NEWS = [
  ["2021-09-30", "Valley Water", "Photo slideshow: Valley Water performs annual work in creeks for flood protection", "https://www.valleywater.org/news/photo-slideshow-valley-water-performs-annual-work-in-creeks-for-flood-protection", "Crews fixed erosion along Thompson Creek at the Quimby Creek confluence with rock and rootwads."],
  ["2021-11-29", "Valley Water", "Valley Water completes Lower Silver Creek flood protection project", "https://www.valleywater.org/news/valley-water-completes-lower-silver-creek-flood-protection-project", "With the Lower Silver Creek project and the Cunningham Flood Detention Facility done, FEMA removed thousands of East San José homes from the 100-year floodplain."],
  ["2023-03-18", "San José Spotlight", "East San Jose lake restoration loses funding", "https://sanjosespotlight.com/east-san-jose-lake-cunningham-restoration-loses-funding/", "The Council voted 8-3 to move $3.2 million in Measure T money from Lake Cunningham restoration to public-safety projects."],
  ["2023-07-06", "San José Spotlight", "East San Jose lake finally receives funding for restoration", "https://sanjosespotlight.com/east-san-jose-lake-cunningham-finally-receives-state-california-funding-for-restoration/", "The state budget set aside $1.5 million, mainly for wetlands to clean up Lake Cunningham's water."],
  ["2023-08-23", "Valley Water", "Valley Water continues to expand level of service dedicated to cleaning trash generated by encampments", "https://www.valleywater.org/news-events/news-releases/valley-water-continues-expand-level-service-dedicated-cleaning-trash", "More staff and money to double encampment cleanups along county creeks. Doesn't name Thompson Creek."],
  ["2023-08-26", "San José Spotlight", "Silicon Valley water district helps the homeless and environment", "https://sanjosespotlight.com/santa-clara-county-silicon-valley-water-district-helps-the-homeless-and-environment/", "Toilets and wash stations at 20 creekside sites and a debit-card incentive for clean camps. Doesn't name Thompson Creek."],
  ["2023-08-28", "KTVU FOX 2", "Valley Water to pay unhoused residents to keep encampments clean", "https://www.ktvu.com/news/valley-water-to-pay-unhoused-residents-to-keep-encampments-clean", "The \"Clean Camps, Clean Creeks\" gift-card program targets nine waterways, including Thompson Creek and Lower Silver Creek."],
  ["2023-10-26", "CBS News Bay Area", "South Bay residents warned of flood risks ahead of rainy season", "https://www.cbsnews.com/sanfrancisco/news/flood-warning-rainy-season-san-jose-santa-clara-countyvalley-water/", "A flood briefing beside Lower Silver Creek, downstream of Thompson Creek, where crews had removed 4 feet of sediment."],
  ["2024-02-09", "San José Spotlight", "District 8 San Jose council candidates debate at Evergreen forum", "https://sanjosespotlight.com/district-8-san-jose-council-candidates-debate-at-evergreen-forum/", "Homelessness in the creeks and money for Lake Cunningham were among the topics in the trail's council district."],
  ["2024-08-29", "San José Spotlight", "East San Jose gets funds to clean lake", "https://sanjosespotlight.com/east-san-jose-gets-federal-funds-to-clean-lake-cunningham-park/", "$850,000 in federal money for flood prevention, filtration and restoration at Lake Cunningham."],
  ["2024-11-26", "Valley Water", "Valley Water Board of Directors approves ordinance to reduce encampments along creeks, waterways and water supply facilities", "https://www.valleywater.org/news-events/news-releases/valley-water-board-directors-approves-ordinance-reduce-encampments-along", "The Water Resources Protection Zones Ordinance bans camping on Valley Water's creek lands."],
  ["2025-01-02", "CBS News Bay Area", "Santa Clara Valley Water's encampment ban along waterways goes into effect", "https://www.cbsnews.com/sanfrancisco/news/santa-clara-valley-water-homeless-encampment-ban-ordinance/", "The ban takes effect, with enforcement first aimed at the worst environmental harms. Reported from Coyote Creek; the date is the article's update date."],
  ["2025-02-06", "San José Spotlight", "Silicon Valley water agency flops on outreach ahead of sweeps", "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/", "Valley Water began clearing camps without the nonprofit outreach it had promised."],
  ["2025-08-25", "San José Spotlight", "Valley Water land sees reduction in San Jose homeless camps", "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/", "462 encampments removed; Councilmember Domingo Candelas says people are moving upstream along Thompson Creek."],
  ["2025-11-28", "San José Spotlight", "San Jose officials want denser housing on former golf course", "https://sanjosespotlight.com/san-jose-officials-want-denser-housing-on-former-golf-course/", "The City wants denser housing on the former Pleasant Hills Golf Course and better walking links to Lake Cunningham Regional Park."],
];

const PHOTOS = [
  {"f": "Lake Cunningham 1.1.jpg", "c": "Sailboat by the dock at Lake Cunningham, near the trail's north end at Tully Rd", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.334453, -121.807114], "y": 2012},
  {"f": "Lake Cunningham.jpg", "c": "Lake Cunningham with Raging Waters beyond", "a": "JaGa", "l": "CC BY-SA 4.0", "ll": [37.336869, -121.805565], "y": 2008},
  {"f": "Lake Cunningham 1.JPG", "c": "Viewing deck over Lake Cunningham, with the Evergreen foothills on the horizon", "a": "Oleg Alexandrov", "l": "CC BY-SA 4.0", "ll": [37.3355, -121.8055], "approx": true, "y": 2015},
  {"f": "Lake Cunningham 3.JPG", "c": "Shoreline path and picnic area at Lake Cunningham Regional Park", "a": "Oleg Alexandrov", "l": "CC BY-SA 4.0", "ll": [37.3355, -121.8055], "approx": true, "y": 2015},
  {"f": "Lake Cunningham 1.2.jpg", "c": "Lake Cunningham docks under the golden foothills", "a": "Miles Gehm", "l": "CC BY 2.0", "ll": [37.335833, -121.803], "y": 2017},
  {"f": "Pelicans and Cormorants Lined Up (50447164866).jpg", "c": "White pelicans and a cormorant on Lake Cunningham", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.337205, -121.809364], "y": 2020},
  {"f": "Coyote by Lake Cunningham (52616758659).jpg", "c": "A coyote by Lake Cunningham", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.33448, -121.810189], "y": 2023},
  {"f": "Lower Silver Creek draining from Lake Cunningham Regional Park.jpg", "c": "Lower Silver Creek leaving Lake Cunningham Regional Park; Thompson Creek feeds it", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.34025, -121.810208], "y": 2020},
  {"f": "Lower Silver Creek, San Jose, California, US.jpg", "c": "Lower Silver Creek near Lake Cunningham", "a": "Clyde Charles Brown", "l": "CC BY-SA 4.0", "ll": [37.336639, -121.815806], "y": 2025},
  {"f": "Thompson Creek (San Jose, California).jpg", "c": "Aerial view of Thompson Creek through Evergreen's neighborhoods", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.32, -121.8], "approx": true, "y": 2019},
  {"f": "Murillo Park 3122.jpg", "c": "Pond-side walkway at Murillo Park in Evergreen, east of the trail", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.320194, -121.774689], "y": 2021},
  {"f": "Evergreen SJ.jpeg", "c": "Palms and the snow-dusted Evergreen foothills at sunset", "a": "Vlad Butsky", "l": "CC BY 2.0", "ll": [37.31543, -121.77932], "y": 2010},
  {"f": "Panoramic of Evergreen.jpg", "c": "The Evergreen valley floor rising to the eastern foothills", "a": "Muss0", "l": "CC BY-SA 4.0", "ll": null, "y": 2016},
  {"f": "Evergreen Lake - Evergreen Valley College 0837.jpg", "c": "Fountain on the lake at Evergreen Valley College", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.299106, -121.762231], "y": 2021},
  {"f": "Montgomery Hill Monument.jpg", "c": "Montgomery Hill glider monument, a California Historical Landmark in Evergreen", "a": "AlMcGuire", "l": "CC BY-SA 4.0", "ll": [37.299292, -121.771036], "y": 2019},
  {"f": "Montgomery Hill during Winter.jpg", "c": "Winter view from Montgomery Hill toward the valley", "a": "GasolineOfACan", "l": "CC BY 4.0", "ll": [37.2995, -121.7705], "approx": true, "y": 2023},
  {"f": "View of Evergreen, San Jose (from the Silver Creek Hills) 1991.jpg", "c": "Evergreen from the Silver Creek Hills, the foothills the planned trail heads toward", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.289153, -121.792961], "y": 2021},
  {"f": "Silver Creek Hills Open Space Preserve 3683.jpg", "c": "Grassy ridge of the Silver Creek Hills Open Space Preserve at dusk", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.290939, -121.783522], "y": 2021},
];

const OUTCOMES = {
  "2017-02-06": [
    ["Completed", "good", "Yes, on October 20, 2017."],
    ["Schedule", "warn", "About nine months after the January 2017 date in this report, and a year after the October 2016 target in the 2016 report. The City had moved the date to August 2017 by October."],
    ["Budget", "unk", "The baseline didn't change. The final cost and the contract amount aren't published."],
  ],
  "2022-03-16": [
    ["Completed", "good", "Yes, in August 2023."],
    ["Schedule", "warn", "It opened in summer 2023 as promised in March 2023, but the plans had been at 90–95% since 2017, waiting for money."],
    ["Budget", "unk", "The $610,000 grant was fully spent. The contractor, bid and total cost aren't published."],
  ],
  "2005-04": [
    ["Completed", "bad", "1.7 of about 7.9 mapped miles are paved, 21 years on, plus a gravel path on the east bank."],
  ],
  "2020-05": [
    ["Progress", "bad", "The southern 6 miles are still on the priority list with no grant, as of November 2025."],
  ],
};

const QUOTES = [
  {"q": "One of the things that I've seen, especially along Thompson Creek that's adjacent to the Coyote Creek area, is folks moving upstream (into) other parts of the city", "who": "Domingo Candelas", "role": "San José City Councilmember, District 8", "src": "San José Spotlight, 2025", "u": "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/"},
  {"q": "We have already begun to see environmental recovery in Water Resources Protection Zones areas.", "who": "Matt Keller", "role": "Valley Water spokesperson", "src": "San José Spotlight, 2025", "u": "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/"},
  {"q": "The idea is, the less bio-waste entering the creek channel provides a water-quality benefit.", "who": "Jennifer Codianne", "role": "Deputy Operating Officer, Valley Water", "src": "KTVU FOX 2, 2023", "u": "https://www.ktvu.com/news/valley-water-to-pay-unhoused-residents-to-keep-encampments-clean"},
  {"q": "It means the world. This park is an environmental gem in San Jose. It's 200 acres of open space, trees, the lake, the birds, the fish.", "who": "Arvind Kumar", "role": "Lake Cunningham volunteer", "src": "San José Spotlight, 2024", "u": "https://sanjosespotlight.com/east-san-jose-gets-federal-funds-to-clean-lake-cunningham-park/"},
  {"q": "There's an environmental disaster on Lake Cunningham with regards to the water quality.", "who": "Domingo Candelas", "role": "San José City Councilmember, District 8", "src": "San José Spotlight, 2023", "u": "https://sanjosespotlight.com/east-san-jose-lake-cunningham-restoration-loses-funding/"},
  {"q": "The intention of this ordinance is not to result in the criminalization of unsheltered people living along our waterways.", "who": "Nai Hsueh", "role": "Chair, Valley Water Board of Directors", "src": "Valley Water, 2024", "u": "https://www.valleywater.org/news-events/news-releases/valley-water-board-directors-approves-ordinance-reduce-encampments-along"},
];
