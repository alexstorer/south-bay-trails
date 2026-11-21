// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Penitencia Creek Trail page. Every entry carries at least one source URL.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  scc2008: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2008/0806/0806Board09_Penitencia_Creek_Ridge_Trail.pdf",
  scc2013: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2013/1310/20131003Board10_Penitencia_Creek.pdf",
  r1bRebid: "https://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2136&meta_id=572765",
  r1bAward: "https://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2136&meta_id=573794",
  te2018: "https://legistar.granicus.com/sanjose/attachments/dc3b3520-95a4-478e-bab8-6bc12dcb49ab.pdf",
  te2025: "https://legistar.granicus.com/sanjose/attachments/0cdb6891-5119-4fae-a83d-33b516789b9d.pdf",
  vtaFact: "https://www.vta.org/sites/default/files/documents/upctrail_update032017web.pdf",
  om2020: "https://legistar.granicus.com/sanjose/attachments/bbc9d44f-76c4-43e7-af20-03dd5d3a86f7.pdf",
  mca2020: "https://legistar.granicus.com/sanjose/attachments/e54e4bf7-023d-4cae-94cd-5e8825104351.pdf",
  coop11: "https://legistar.granicus.com/sanjose/attachments/e81c6a56-0244-4ab5-ad73-7dd0679c30ba.pdf",
  coop11text: "https://legistar.granicus.com/sanjose/attachments/c200ed7b-a468-4d81-8968-717350340dfd.pdf",
  bbuv: "https://legistar.granicus.com/sanjose/attachments/35c94b95-358e-4e5a-ab9b-7ff283300d6e.pdf",
  bbuvMemo: "https://legistar.granicus.com/sanjose/attachments/0d77d0a5-c602-4d3a-b72a-9fef37220b5e.pdf",
  obag: "https://mtc.ca.gov/sites/default/files/County_OBAG_projects.pdf",
  psr: "https://assets.valleywater.org/files/Upper%20Pen%20PSR%20final%202022.pdf",
  vwE4: "https://www.valleywater.org/project-updates/e4-upper-penitencia-creek-flood-protection-0",
  vwShell: "https://assets.valleywater.org/files/2024-3-11_Upper%20Penitencia%20Project%20Shell_JOL.pdf",
  vwFlood: "https://assets.valleywater.org/files/E4%20upper%20pen%20flood%20map.pdf",
  vwWTP: "https://www.valleywater.org/penitencia-water-treatment-plant",
  vwGoodNeighbor: "https://www.valleywater.org/project-updates/good-neighbor-program-valley-water-addressing-encampments-unsheltered-people",
  vwF5: "https://www.valleywater.org/project-updates/f5-good-neighbor-program-encampment-cleanup",
  sfei2012: "https://www.sfei.org/sites/default/files/biblio_files/Upper_Penitencia_HE_061412_highres_forprinting.pdf",
  sfei2018: "https://assets.valleywater.org/files/UpperPenVision_FINAL_121418-website.pdf",
  county1977: "https://files.santaclaracounty.gov/migrated/penitencia-creek-county-park-master-plan-july-1977.pdf",
  ridgeMap: "https://ridgetrail.org/wp-content/uploads/2017/07/2019_SantaClara_PenitenciaCreek.pdf",
  ridgeBart: "https://ridgetrail.org/bart-to-trails-in-san-jose/",
  ridgeNew: "https://ridgetrail.org/berryessa-bart/",
  horii2008: "https://www.stpfriends.org/PenitenciaCrkDed/PenitenciaDed.html",
  nrt: "https://www.nrtapplication.org/trails/penitencia-creek-trail",
  osa2020: "https://news.openspaceauthority.org/blog/bart-station",
  spotSweeps: "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/",
  coyote: "../coyote-creek/",
};

const REACH_NOTES = {
  "PEN01A": { gap: true, text: "Berryessa BART to the Coyote Creek Trail, across the San José Flea Market site. No master plan exists for it (2021), and the Berryessa Rd undercrossing makes it \"particularly challenging.\" Valley Water's flood project would carry the trail to Coyote Creek, but its construction money was pulled in 2023.", src: SRC.bbuv },
  "PEN01B": { text: "The Upper Penitencia Creek Trail Connector: King Rd to Berryessa BART, built by VTA with $1.51M in federal OBAG money and opened with the station on June 13, 2020. City-owned since 2021.", src: SRC.vtaFact },
  "PEN02A": { text: "Unpaved on purpose: the 2008 design kept this stretch cheap because flood-control work may move the channel.", src: SRC.scc2008 },
  "PEN02B": { text: "Paved, on Valley Water land near King Rd (Reach 6 master plan, 2003).", src: "https://ceqanet.lci.ca.gov/2003052008" },
  "PEN03": { text: "Along Mabury Rd through the Mabury Park / Penitencia Creek Park chain.", src: "https://ceqanet.lci.ca.gov/2003052008" },
  "PEN04": { text: "County land, Mabury Rd to Jackson Ave. The creek flooded nearby streets in 2017 and 2023.", src: SRC.vwE4 },
  "PEN05": { text: "Jackson Ave to I-680, on Valley Water land. Valley Water cleared a camp of about 30 tents here in early 2025.", src: SRC.spotSweeps },
  "PEN06": { text: "Under I-680 to Capitol Ave. Paved; there's no gap at the freeway.", src: SRC.gis },
  "PEN07": { text: "Capitol Ave to Summerview, maintained by County Parks.", src: SRC.gis },
  "PEN08": { text: "Summerview to Viceroy, County-maintained on Valley Water land.", src: SRC.gis },
  "PEN09": { text: "Through Penitencia Creek County Park to Piedmont Rd. A 2007 grant moved an eroding stretch of trail in the park.", src: SRC.scc2008 },
  "PEN10": { text: "Gravel, past Valley Water's percolation ponds (Reach 2 master plan, 2001).", src: "https://ceqanet.lci.ca.gov/2001122052" },
  "PEN11": { text: "Gravel, Pond 2 to Noble Ave.", src: "https://ceqanet.lci.ca.gov/2001122052" },
  "PEN12": { text: "\"Reach 1B,\" Noble Ave to Dorel Dr: boardwalks among old sycamores, finished in 2017 after years of permit delays. Total cost $2.36M, against a $1.49M budget in 2013.", src: SRC.r1bAward },
  "PEN13": { gap: true, text: "Dorel Dr to the Alum Rock Park entrance, the last 0.17 mi. In 2013 a neighboring owner wouldn't negotiate an easement; riders use the road shoulder.", src: SRC.scc2013 },
};

// Downstream (Coyote Creek) → upstream (Alum Rock Park).
const MAINLINE = ["PEN01A","PEN01B","PEN02A","PEN02B","PEN03","PEN04","PEN05","PEN06","PEN07","PEN08","PEN09","PEN10","PEN11","PEN12","PEN13"];
const PARENT = { PEN08A: "PEN08" };
const SIDE_KIND = { PEN08A: "Park link" };
const NOT_GAP = [];
const OWNERS = { PRIVATE: "Private land", SCC: "Santa Clara County Parks", SCVWD: "Valley Water land", PRNS: "City of San José Parks", DOT: "City street right-of-way", NEIGHCITY: "Outside City jurisdiction" };
const INTRO_CAP = "Coyote Creek to Alum Rock Park";
const INTRO_MARKS = [
  ["Coyote Creek", [37.36795, -121.88044], "left"], ["Berryessa BART", [37.3690, -121.8749], "left"], ["I-680", [37.38017, -121.85839], "right"],
  ["Penitencia Creek County Park", [37.3886, -121.8493], "left"], ["Noble Ave", [37.39304, -121.83363], "right"], ["Alum Rock Park", [37.3965, -121.7995], "right"],
];
const LANDMARKS = [
  { key: true, name: "Coyote Creek Trail", ll: [37.36795, -121.88044] },
  { key: true, name: "Berryessa/North San José BART", ll: [37.3690, -121.8749] },
  { name: "San José Flea Market", ll: [37.3670, -121.8770] },
  { name: "King Rd", ll: [37.37028, -121.87165] },
  { name: "Jackson Ave", ll: [37.37646, -121.86127] },
  { key: true, name: "I-680", ll: [37.38017, -121.85839] },
  { name: "Capitol Ave / Penitencia Creek light rail", ll: [37.3825, -121.8562] },
  { key: true, name: "Penitencia Creek County Park", ll: [37.3886, -121.8493] },
  { name: "Piedmont Rd", ll: [37.39056, -121.84241] },
  { key: true, name: "Noble Ave", ll: [37.39304, -121.83363] },
  { key: true, name: "Alum Rock Park", ll: [37.3965, -121.7995] },
];

// Timeline. cat: plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1911", cat: "flood", t: "Floods end the Alum Rock railroad", x: "The Alum Rock Steam Railroad, which carried visitors up the canyon to the springs from 1890, is destroyed by floods.", s: [["Coastal Conservancy staff report (2013)", SRC.scc2013]] },
  { d: "1973-10", cat: "plan", t: "Alum Rock Park's creek trail becomes a National Recreation Trail", x: "The 2.5-mile Penitencia Creek Trail inside Alum Rock Park, upstream of this page's trail, is designated a National Recreation Trail.", s: [["National Recreation Trails database", SRC.nrt]] },
  { d: "1974", cat: "flood", t: "Penitencia Water Treatment Plant opens", x: "Valley Water's plant in the foothills, up to 40 million gallons a day, gives the creek corridor much of its water infrastructure.", s: [["Valley Water", SRC.vwWTP]] },
  { d: "1977", cat: "plan", t: "City, County and water district agree on a creek park chain", x: "A cooperative agreement sets out a chain of parks and trail along the creek, and the County adopts its Penitencia Creek Park master plan.", s: [["Coastal Conservancy (2008)", SRC.scc2008], ["County master plan, July 1977", SRC.county1977]] },
  { d: "1982", cat: "flood", t: "A decade of floods", x: "The creek floods in 1978, 1980, 1982, 1983, 1986, 1995 and 1998; it can't carry even a 10-year storm. The 1982 flood does $1–2 million in damage.", s: [["Valley Water project page", SRC.vwE4], ["Valley Water fact sheet", SRC.vwShell]] },
  { d: "1995-11", cat: "plan", t: "Countywide plan maps a Ridge Trail route", x: "The County's Trails Master Plan names the Penitencia corridor as a Bay Area Ridge Trail route.", s: [["Coastal Conservancy (2013)", SRC.scc2013]] },
  { d: "2001-12-13", cat: "plan", t: "Plan for the percolation ponds stretch", x: "A master plan for Piedmont Rd to Noble Ave adds trail, picnic sites and bridges over the recharge-pond spillways on a 26-acre site.", s: [["CEQA 2001122052", "https://ceqanet.lci.ca.gov/2001122052"]] },
  { d: "2003-05-01", cat: "plan", t: "Plan for the King Rd / Mabury stretch", x: "A three-phase master plan for trails along the creek near King and Mabury roads (\"Reach 6\").", s: [["CEQA 2003052008", "https://ceqanet.lci.ca.gov/2003052008"]] },
  { d: "2006-10", cat: "plan", t: "Plan for Noble Ave to Alum Rock Park", x: "The Council adopts the Reach 1 master plan for the upstream end. (City and state sources give October 17 and October 31.)", s: [["Council memo (2016)", SRC.r1bRebid], ["CEQA 2006072117", "https://ceqanet.lci.ca.gov/2006072117"]] },
  { d: "2007-05", cat: "fund", t: "Grant to move an eroding trail", x: "The Coastal Conservancy gives County Parks $50,640 to relocate a badly eroding 0.1-mile piece of trail in Penitencia Creek County Park.", s: [["Coastal Conservancy (2008)", SRC.scc2008]] },
  { d: "2008-06-05", cat: "fund", t: "$150,000 for King Rd to Mabury", x: "A state grant pays for about a third of a $455,000 trail segment, mostly gravel on purpose because future flood work might remove it.", s: [["Coastal Conservancy (2008)", SRC.scc2008]] },
  { d: "2008-10-25", cat: "build", t: "Dedicated as part of the Bay Area Ridge Trail", x: "A ceremony at Penitencia Creek Park dedicates about 3 miles, Noble Ave to Mabury Rd, on Valley Water, City, County and Caltrans land.", s: [["Ron Horii's dedication photos", SRC.horii2008]] },
  { d: "2010", cat: "plan", t: "Room for a trail at the BART station", x: "VTA and the City's station-access study for Berryessa BART leaves room for a trail connection along the creek.", s: [["VTA fact sheet (2017)", SRC.vtaFact]] },
  { d: "2012-11", cat: "fund", t: "Voters fund a flood project", x: "Valley Water's Safe, Clean Water measure includes the Upper Penitencia Creek Flood Protection Project.", s: [["Valley Water", SRC.vwE4]] },
  { d: "2013-03", cat: "fund", t: "$1.51M federal grant for the BART link", x: "The City and VTA win One Bay Area Grant money for a trail from King Rd to the future station.", s: [["MTC OBAG list", SRC.obag], ["Council memo (2020)", SRC.om2020]] },
  { d: "2013-10-03", cat: "fund", t: "$200,000 for Noble Ave to Dorel Dr", x: "The Coastal Conservancy grant goes toward a $1.49M budget for \"Reach 1B.\" The last 0.2 mile to Alum Rock Park is left out because a neighboring owner won't negotiate an easement.", s: [["Coastal Conservancy (2013)", SRC.scc2013]] },
  { d: "2014-01", cat: "plan", t: "The percolation ponds join the City parks system", x: "Permitting for the Penitencia ponds moves from the water district to San José Parks.", s: [["San José Inside", "https://sanjoseinside.com/2014/05/15/accusations-fly-in-war-of-model-warship-clubs"]] },
  { d: "2014-02-13", cat: "build", t: "Reach 1B bids come in; nothing can be awarded", x: "Eight bids arrive, but the Army Corps permit and PG&E pole moves are years from ready, and the bid is cancelled.", s: [["Council memo (2016)", SRC.r1bRebid]] },
  { d: "2016", cat: "flood", t: "Army Corps steps back from the flood project", x: "The Corps says it can't support a multi-purpose Upper Penitencia project, and Valley Water takes the lead.", s: [["Valley Water", SRC.vwE4]] },
  { d: "2016-05-17", cat: "build", t: "Reach 1B awarded on the third try", x: "After a bid protest sinks the second round, Wattis Construction wins at $1.03M. With design and staff time, the project totals $2.36M.", s: [["Council memo", SRC.r1bAward], ["Rebid memo", SRC.r1bRebid]] },
  { d: "2017", cat: "build", t: "Noble Ave to Dorel Dr opens", x: "Boardwalks around the creek's sycamores, bank stabilization and a Dorel Dr trailhead. The City lists it complete in 2017.", s: [["T&E annual update (2018)", SRC.te2018]] },
  { d: "2017-02-10", cat: "flood", t: "Creek spills into the streets", x: "Penitencia Creek overflows overnight near Mabury Rd and Educational Park Dr.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/penitencia-creek-in-san-jose-spills-over-floods-streets/41878/"]] },
  { d: "2019-12-17", cat: "flood", t: "Valley Water picks a flood plan", x: "With no federal money, the board advances Phases I and II, Coyote Creek to Capitol Ave, at $24M (2019 dollars). The plan includes extending the trail from King Rd to Coyote Creek.", s: [["Planning study (2022)", SRC.psr]] },
  { d: "2020-03-16", cat: "build", t: "City agrees to maintain the BART trail", x: "VTA built the trail; San José Parks will maintain it for about $5,500 a year. A drainage fix is still pending.", s: [["Council memo", SRC.om2020]] },
  { d: "2020-06-13", cat: "build", t: "BART reaches Berryessa, and the trail reaches BART", x: "The station opens with the trail link from King Rd, the first direct transit-to-trail connection in the Bay Area Ridge Trail's history. You can now ride from the train to Alum Rock Park.", s: [["Bay Area Ridge Trail", SRC.ridgeBart], ["Open Space Authority", SRC.osa2020]] },
  { d: "2021-05-25", cat: "fund", t: "VTA pays $162,000 for the drainage fix", x: "The City takes ownership of the station trail, retroactive to January 2021, and VTA pays for drainage changes.", s: [["Council memo", SRC.coop11], ["Agreement text", SRC.coop11text]] },
  { d: "2021-06-22", cat: "plan", t: "Berryessa BART Urban Village approved", x: "The plan for the flea market site, up to 3,450 homes, notes there's no master plan for the trail from BART to Coyote Creek.", s: [["Plan (adopting resolution)", SRC.bbuv], ["San José Spotlight", "https://sanjosespotlight.com/san-jose-flea-market-vendors-offered-11th-hour-deal/"]] },
  { d: "2023-01", cat: "flood", t: "Floods at the flea market and the county park", x: "The creek leaves mud and debris at the San José Flea Market and Penitencia Creek County Park and floods the lot by the BART station. Alum Rock Park closes for months.", s: [["Valley Water", SRC.vwE4], ["CBS News Bay Area", "https://www.cbsnews.com/sanfrancisco/news/storm-damage-san-jose-alum-rock-park-closed/"]] },
  { d: "2023-01-24", cat: "fund", t: "Flood project loses its construction money", x: "Facing cost increases across its program, Valley Water removes construction funding for Upper Penitencia. Design continues.", s: [["Valley Water", SRC.vwE4]] },
  { d: "2024", cat: "build", t: "New signs from BART to Noble", x: "San José finishes a wayfinding sign project along the trail.", s: [["Trail Network annual report (2025)", SRC.te2025]] },
  { d: "2024-11-26", cat: "camp", t: "Valley Water bans camping on its land", x: "Before the ban, Upper Penitencia was one of the creeks with the most encampments. In early 2025 crews clear a camp of about 30 tents between Jackson Ave and I-680.", s: [["Valley Water", SRC.vwGoodNeighbor], ["San José Spotlight", SRC.spotSweeps]] },
  { d: "2025-02-13", cat: "flood", t: "Creek floods an apartment complex again", x: "Upper Penitencia overflows into the Betty Ann Gardens apartments, displacing about 40 people, the second major overflow there in two years. King Rd closes.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/san-jose-penitencia-creek-betty-ann-gardens/3794084/"], ["KTVU", "https://www.ktvu.com/news/dozens-sj-apt-residents-cleaning-up-after-creek-floods-units"]] },
  { d: "2026-01-13", cat: "flood", t: "Valley Water rethinks the flood project", x: "The board asks for targeted fixes at flooding hot spots and phased work; planning now runs to 2027.", s: [["Valley Water", SRC.vwE4]] },
  { d: "2027", cat: "flood", future: true, t: "Flood planning due", x: "The re-planned Upper Penitencia project, which the trail extension to Coyote Creek depends on, is expected to finish planning in 2027.", s: [["Valley Water", SRC.vwE4]] },
];

const PROJECTS = [
  { name: "Noble Ave → Dorel Dr (Reach 1B)", id: "SJ #6955", year: 2017, mi: 0.38, cost: 2.364, contract: 1.028, funding: "Park Trust Fund, C&C tax; Coastal Conservancy $200K; Valley Water $300K", src: SRC.r1bAward, note: "Includes $1.23M in project delivery" },
  { name: "King Rd → Berryessa BART", id: "VTA", year: 2020, mi: null, kind: "station link", cost: 1.514, contract: null, funding: "Federal OBAG grant (amount shown); City match", src: SRC.obag, note: "Grant amount; VTA's final cost isn't published" },
];
const PM_EST = [
  { name: "Reach 1B budget in 2013", sub: "planned", mi: 0.38, cost: 1.49, note: "$1.49M budget at grant time", src: SRC.scc2013 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "Reach 1B (actual)", pm: 2.364 / 0.38 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
];
const DEFAULT_PM = 2.364 / 0.38;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Coyote Creek → Berryessa BART", ids: ["PEN01A"], mi: 0.50, status: "Planned", hard: "Private flea-market land; Berryessa Rd undercrossing; tied to unfunded flood project" },
  { name: "Dorel Dr → Alum Rock Park", ids: ["PEN13"], mi: 0.17, status: "Design", hard: "Needs an easement a neighbor wouldn't give (2013)" },
];

const STATS = ({ gapMi }) => [
  ["4.2 mi", "open from Berryessa BART to Dorel Dr, about 0.9 mi of it gravel"],
  [gapMi.toFixed(2) + " mi", "missing, at the two ends: Coyote Creek and Alum Rock Park"],
  ["$2.36M", "for the 0.38-mile Noble–Dorel boardwalk stretch, 59% over its 2013 budget"],
  ["2020", "the year BART arrived: the Ridge Trail's first direct transit-to-trail connection"],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget at the time", "Final"];
const DELIVERY = [
  ["Noble Ave → Dorel Dr (Reach 1B)", "Construction \"immediately\" (Oct 2013)", "Bids cancelled 2014 and 2016; built 2016–17", "bad", "$1.49M (2013)", "$2.36M (+59%)", "bad", SRC.r1bAward],
  ["King Rd → Berryessa BART", "Open with BART in 2018", "Opened with BART, June 2020", "warn", "~$2.5M (VTA, 2017)", "Not published", "unk", SRC.vtaFact],
  ["Flood project Phases I–II (with trail to Coyote Creek)", "Construction 2025–28", "Construction money removed Jan 2023; re-planning to 2027", "bad", "$24M (2019 $)", "Not built", "unk", SRC.psr],
];
const OFFICIAL_EST = {
  head: ["Phase", "", "Estimate (2019 $)", "What it covers"],
  rows: [
    ["I", "Coyote Creek → King Rd", null, 17.1, "Flood work plus the trail extension from BART to Coyote Creek"],
    ["II", "King Rd → Capitol Ave", null, 6.7, "Flood protection for 1,250 parcels including the BART station"],
    ["III", "Capitol Ave → Dorel Dr", null, 43, "Deferred"],
  ],
};

const DOCS = [
  { g: "Plans & studies", items: [
    ["County Penitencia Creek Park Master Plan (1977)", SRC.county1977],
    ["SFEI historical ecology of Upper Penitencia Creek (2012)", SRC.sfei2012],
    ["SFEI resilient landscape vision (2018)", SRC.sfei2018],
    ["Valley Water flood project planning study (2022)", SRC.psr],
    ["Valley Water project fact sheet (2024)", SRC.vwShell],
    ["Valley Water 100-year flood map", SRC.vwFlood],
    ["Berryessa BART Urban Village Plan (2021)", SRC.bbuv],
  ]},
  { g: "Trail maps", items: [
    ["Bay Area Ridge Trail: Penitencia Creek map (2019)", SRC.ridgeMap],
    ["VTA trail connector fact sheet (2017)", SRC.vtaFact],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: percolation ponds (Reach 2) master plan (2001)", "https://ceqanet.lci.ca.gov/2001122052"],
    ["CEQA: King Rd / Mabury (Reach 6) master plan (2003)", "https://ceqanet.lci.ca.gov/2003052008"],
    ["CEQA: Noble Ave to Alum Rock Park (Reach 1) (2006)", "https://ceqanet.lci.ca.gov/2006072117"],
  ]},
  { g: "Council & agency records", items: [
    ["Coastal Conservancy: King Rd to Mabury grant (2008)", SRC.scc2008],
    ["Coastal Conservancy: Noble to Dorel grant (2013)", SRC.scc2013],
    ["Council memo: Reach 1B rebid (2016)", SRC.r1bRebid],
    ["Council memo: Reach 1B award (2016)", SRC.r1bAward],
    ["Trail Network annual update (2018)", SRC.te2018],
    ["Council memo: BART O&M agreement (2020)", SRC.om2020],
    ["Council memo: BART real-estate actions (2020)", SRC.mca2020],
    ["Council memo: VTA Cooperative Agreement 11 (2021)", SRC.coop11],
    ["Berryessa BART Urban Village staff memo (2021)", SRC.bbuvMemo],
    ["Trail Network annual report presentation (2025)", SRC.te2025],
    ["MTC OBAG 1 project list", SRC.obag],
  ]},
];

const MAPS = [
  { t: "Bay Area Ridge Trail: Penitencia Creek", d: "3.9 miles from Berryessa BART toward Alum Rock Park, with a route map.", u: "https://ridgetrail.org/trail-section/penitencia-creek/", tag: "Guide" },
  { t: "BARTable by bike: Berryessa Ridge Trail", d: "BART's ride guide from the station to Alum Rock Park.", u: "https://bartable.bart.gov/featured/bartable-bike-berryessa-ridge-trail", tag: "Guide" },
  { t: "Valley Water: Upper Penitencia flood project", d: "Project updates, phases and maps.", u: SRC.vwE4, tag: "Official" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
  { t: "NOAA gauge at Dorel Dr", d: "Live creek level for Upper Penitencia Creek.", u: "https://water.noaa.gov/gauges/ptdc1", tag: "Data" },
];

const NEWS = [
  ["2011-04-07", "KQED (Quest)", "Geological Outings Around the Bay: Alum Rock Park", "https://www.kqed.org/quest/13629/geological-outings-around-the-bay-alum-rock-park", "Andrew Alden's geology guide to Alum Rock Park, which 'occupies the small, steep valley of Penitencia Creek carved into the hills east of San Jose' — mineral springs, Hayward/Calaveras fault zone."],
  ["2014-05-15", "San José Inside", "Accusations Fly in Battle of Model Warship Clubs", "https://sanjoseinside.com/2014/05/15/accusations-fly-in-war-of-model-warship-clubs", "Rival model-warship clubs feud over permits to stage battles on the Penitencia ponds, which joined the city parks system in January 2014 (moving permitting from the water district to San José parks); ponds were then drained for the drought."],
  ["2017-02-10", "NBC Bay Area", "Penitencia Creek in San Jose Spills Over, Floods Streets", "https://www.nbcbayarea.com/news/local/penitencia-creek-in-san-jose-spills-over-floods-streets/41878/", "Penitencia Creek overflowed overnight, flooding residential streets near Mabury Road at Educational Park Drive."],
  ["2017-02-27", "San José Inside", "San Jose to Request Federal, State Aid for Flood Cleanup", "https://sanjoseinside.com/2017/02/27/san-jose-to-request-federal-state-aid-for-flood-cleanup", "After the Feb. 21 Coyote Creek flood, the city seeks emergency aid; flood reached mobile home parks along Old Oakland Road and Upper Penitencia Creek in Berryessa before cellphone alerts went out."],
  ["2020-05-19", "BART", "BART opens Milpitas and Berryessa stations for passenger service", "https://www.bart.gov/news/articles/2020/news20200519", "BART and VTA announce June 13, 2020 opening of the $2.3B, 10-mile extension, including Berryessa/North San José station (context for the trail's BART connection)."],
  ["2020-06-12", "Streetsblog San Francisco", "BART Begins to Berryessa", "https://sf.streetsblog.org/2020/06/12/bart-begins-to-berryessa-this-weekend", "Ribbon-cutting coverage for Berryessa and Milpitas stations; notes bike racks, BikeLink lockers and indoor bike storage at both stations."],
  ["2020-07-01", "Open Space Authority (blog)", "Urban Open Space Corner: A New Opportunity to Take BART to Open Space", "https://news.openspaceauthority.org/blog/bart-station", "Berryessa BART opening includes a new 0.7-mile trail link to the Penitencia Creek Trail — first direct transit-to-trail connection in Bay Area Ridge Trail history, continuing via Alum Rock Park to Sierra Vista OSP."],
  ["2021-06-29", "San José Spotlight", "UPDATE: San Jose lawmakers approve Berryessa urban village, shrink flea market", "https://sanjosespotlight.com/san-jose-flea-market-vendors-offered-11th-hour-deal/", "Council unanimously approves the Berryessa BART Urban Village: 61.5 acres of the flea market site rezoned for up to 3,450 homes; flea market shrinks to 5 acres, with a vendor transition fund."],
  ["2021-09-30", "BARTable (BART)", "BARTable by bike: Berryessa Ridge Trail", "https://bartable.bart.gov/featured/bartable-bike-berryessa-ridge-trail", "Ride guide from Berryessa/North San José station: an easy flat route along Penitencia Creek through Penitencia Creek County Park to Alum Rock Park, or a steep climb to Sierra Vista OSP."],
  ["2022-07-28", "San José Spotlight", "San Jose dedicates funds to maintain its oldest park", "https://sanjosespotlight.com/san-jose-dedicates-funds-money-to-maintain-its-oldest-park-alum-rock-east-side-outdoors-recreation/", "Council allocates $170,000 for a dedicated facility supervisor plus $70,000 for a vehicle at Alum Rock Park after decades of comparative neglect."],
  ["2023-01-03", "San José Spotlight", "Flood risk grows as San Jose expects more rain", "https://sanjosespotlight.com/flood-risk-grows-as-san-jose-expects-more-rain/", "New Year's storms put neighborhoods near Penitencia Creek County Park on Mabury and King roads on flood alert; unhoused creekside residents hit hardest."],
  ["2023-01-04", "San José Spotlight", "Storm displaces San Jose homeless living along creeks", "https://sanjosespotlight.com/storm-displaces-san-jose-homeless-living-along-creeks/", "City declares emergency and evacuates creekside encampments; Valley Water monitors hotspots including neighborhoods near Penitencia Creek County Park."],
  ["2023-01-12", "CBS News Bay Area", "Storm damage prompts San Jose to keep Alum Rock Park closed", "https://www.cbsnews.com/sanfrancisco/news/storm-damage-san-jose-alum-rock-park-closed/", "Rockslides, mudslides and flooding keep Alum Rock Park closed since New Year's Eve; ranger Danny Nguyen dodges boulders on the Penitencia Creek trail."],
  ["2023-01-17", "ABC7 News", "Here's what SJ's Alum Rock Park looks like, still closed due to 'hazardous conditions' from storms", "https://abc7news.com/alum-rock-park-san-jose-closed-storm-damage/12711197/", "Rangers describe erosion, rock- and mudslides; a tree falling into the creek took out part of a retaining wall believed to support the park road."],
  ["2023-04-15", "KTVU FOX 2", "Popular South Bay park, closed in December due to storm damage, reopens", "https://www.ktvu.com/news/popular-south-bay-park-closed-in-december-due-to-storm-damage-reopens", "Alum Rock Park reopens to walkers and cyclists; the only road in is down to one lane, so no public vehicles."],
  ["2023-04-15", "San José Spotlight", "Silicon Valley's Central Bikeway could be a game changer", "https://sanjosespotlight.com/silicon-valleys-santa-clara-county-bicycle-superhighway-path-central-bikeway-could-be-a-game-changer/", "VTA's proposed 10-mile protected Central Bikeway (~$213M) would start at Penitencia Creek County Park and run past Berryessa BART on Mabury Road toward Santa Clara."],
  ["2023-08-17", "San José Spotlight", "San Jose's oldest park remains in disrepair", "https://sanjosespotlight.com/san-joses-oldest-park-remains-in-disrepair/", "Months after the storms, Alum Rock Park's road remains closed to cars pending engineering review; trails open to hikers and bikers. Notes a planned dog park at Penitencia Creek Park."],
  ["2024-03-29", "CBS News Bay Area", "San Jose's Alum Rock Park reopens many areas ahead of Easter weekend", "https://www.cbsnews.com/sanfrancisco/news/san-jose-alum-rock-park-reopens-areas-easter-weekend/", "Park road reopens to cars as a single lane behind temporary barriers; permanent repairs estimated at $19 million await funding."],
  ["2024-05-15", "KTVU FOX 2", "South Bay's largest water provider seeks ban on unhoused encampments near waterways", "https://www.ktvu.com/news/south-bays-largest-water-provider-seeks-ban-on-unhoused-encampments-near-waterways", "Valley Water proposes banning encampments along its waterways; Mayor Mahan warns it could push hundreds into neighborhoods without a housing plan."],
  ["2025-02-06", "San José Spotlight", "Silicon Valley water agency flops on outreach ahead of sweeps", "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/", "Valley Water began sweeps before nonprofit outreach contracts were in place, including a ~30-tent camp on Upper Penitencia Creek between North Jackson Avenue and I-680."],
  ["2025-02-14", "NBC Bay Area", "San Jose flooding: City wants to prevent Penitencia Creek from overflowing again", "https://www.nbcbayarea.com/news/local/san-jose-penitencia-creek-betty-ann-gardens/3794084/", "Atmospheric-river storm sends Penitencia Creek into Betty Ann Gardens apartments, displacing ~40 residents — second major overflow there in two years; city and Valley Water look at prevention."],
  ["2025-02-14", "KTVU FOX 2", "Dozens of SJ apartment residents clean up after creek floods units", "https://www.ktvu.com/news/dozens-sj-apt-residents-cleaning-up-after-creek-floods-units", "Upper Penitencia Creek over its banks floods 16 units at Betty Ann Garden Apartments; DOT crews shut King Road."],
  ["2025-08-25", "San José Spotlight", "Valley Water land sees reduction in San Jose homeless camps", "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/", "Under its no-camping ordinance Valley Water removed 462 encampments; population on its land fell from 450+ (concentrated on Coyote, Upper Penitencia, Lower Silver creeks and Guadalupe River) to 224."],
  ["2025-08-28", "Local News Matters", "Valley Water sees fewer homeless residents on its lands since starting no-camping policy", "https://localnewsmatters.org/2025/08/28/valley-water-sees-fewer-homeless-residents-on-its-lands-since-staring-no-camping-policy/", "Syndicated version of the San José Spotlight report on encampment declines on Valley Water property (title/date verified; WebFetch blocked, page retrieved via curl)."],
];

const PHOTOS = [
  {"f": "Upper Penitencia Creek.jpg", "c": "Stone gateposts mark the Upper Penitencia Creek crossing near Berryessa BART", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.370442, -121.874344], "y": 2021},
  {"f": "Berryessa North San Jose BART station on opening day.jpg", "c": "A BART train at Berryessa/North San José station on opening weekend, June 2020", "a": "Troy", "l": "CC BY-SA 4.0", "ll": [37.369242, -121.874918], "y": 2020},
  {"f": "Berryessa station from the north, June 2020.JPG", "c": "Berryessa/North San José station on its first day of service", "a": "Pi.1415926535", "l": "CC BY-SA 3.0", "ll": [37.369052, -121.874595], "y": 2020},
  {"f": "Bike station at Berryessa station, June 2020.JPG", "c": "Bike station under the guideway at Berryessa/North San José BART", "a": "Pi.1415926535", "l": "CC BY-SA 3.0", "ll": [37.369099, -121.875028], "y": 2020},
  {"f": "Bioretention garden at Berryessa station, June 2020.JPG", "c": "Stormwater bioretention garden at Berryessa/North San José station", "a": "Pi.1415926535", "l": "CC BY-SA 3.0", "ll": [37.368044, -121.874233], "y": 2020},
  {"f": "Berryessa Flea Market from new BART station.jpg", "c": "The San José Flea Market seen from the new Berryessa BART station", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.368775, -121.875239], "y": 2020},
  {"f": "Penitencia Creek VTA 1900 05.JPG", "c": "Penitencia Creek light rail station on Capitol Ave, near the creek crossing", "a": "Pedro Xing", "l": "CC0", "ll": [37.382546, -121.856179], "y": 2012},
  {"f": "VTA light rail san jose penitencia creek station.jpg", "c": "VTA light rail train at Penitencia Creek station in Berryessa", "a": "XAtsukex", "l": "CC BY-SA 3.0", "ll": [37.3825, -121.8562], "approx": true, "y": null},
  {"f": "Miguelita Creek from Alum Rock Road.jpg", "c": "Miguelita Creek canyon, a neighboring foothill creek (stand-in; not on the trail)", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": null, "y": 2020},
  {"f": "Alum Rock Park - panoramio.jpg", "c": "The old railroad trestle and Alum Rock outcrop at the Alum Rock Park entrance", "a": "Annette Teng", "l": "CC BY 3.0", "ll": [37.396439, -121.7982], "y": 2014},
  {"f": "Alum Rock Park Bridge.jpg", "c": "Stone arch bridge over Penitencia Creek in Alum Rock Park", "a": "Dawn Ellner", "l": "CC BY 2.0", "ll": [37.3965, -121.7995], "approx": true, "y": 2007},
  {"f": "Alum Rock Bridge.JPG", "c": "Stone bridge across the rocky bed of Penitencia Creek, Alum Rock Park", "a": "Oleg Alexandrov", "l": "CC BY-SA 3.0", "ll": [37.3965, -121.7995], "approx": true, "y": 2012},
  {"f": "AlumRockPenCreekBridge wb.jpg", "c": "Walkers pass a stone bridge over Penitencia Creek in Alum Rock Park", "a": "Elf", "l": "CC BY-SA 3.0", "ll": [37.3965, -121.7995], "approx": true, "y": 2004},
  {"f": "Liverock Forest at Alum Rock Park.jpg", "c": "A creek runs through riparian trees in Alum Rock Park", "a": "Benzozo001", "l": "CC BY-SA 4.0", "ll": [37.39687, -121.802277], "y": 2025},
  {"f": "Alum Rock Park pathway.jpg", "c": "A paved, tree-lined pathway in Alum Rock Park in autumn", "a": "Vlad Butsky", "l": "CC BY 2.0", "ll": [37.3965, -121.7995], "approx": true, "y": 2004},
  {"f": "Alum Rock Park.jpg", "c": "A dirt trail climbs through green hills in Alum Rock Park", "a": "Melissa McMasters", "l": "CC BY 2.0", "ll": [37.3965, -121.7995], "approx": true, "y": 2016},
  {"f": "Alum Rock Park Fountain.jpg", "c": "Mineral-spring rotunda in Alum Rock Park", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.396563, -121.79913], "y": 2013},
];

const OUTCOMES = {
  "2013-10-03": [
    ["Completed", "good", "Yes, in 2017."],
    ["Schedule", "bad", "About three years late: two bid rounds were cancelled over permits, PG&E poles and a bid protest."],
    ["Budget", "bad", "Over: $2.36M against a $1.49M budget (+59%). Design and staff time ($1.23M) cost more than construction."],
  ],
  "2013-03": [
    ["Completed", "good", "Yes, opened with the station."],
    ["Schedule", "warn", "Two years later than VTA's 2018 target, because BART itself was late."],
  ],
  "2019-12-17": [["Progress", "bad", "Construction money was removed in January 2023; the trail extension to Coyote Creek waits with it."]],
  "2021-06-22": [["Progress", "pend", "No master plan for BART to Coyote Creek yet."]],
};

const QUOTES = [
  {"q": "This new trail connection offers the opportunity for people from all backgrounds to access the Ridge Trail and all the wonderful parks and open space they may not even know are nearby.", "who": "Liz Westbrook", "role": "Trail Program Director, Bay Area Ridge Trail Council", "src": "Open Space Authority blog, 2020", "u": "https://news.openspaceauthority.org/blog/bart-station"},
  {"q": "This park is known for flooding. Flooding is a crucial part of its history but this is the worst I've seen it", "who": "Danny Nguyen", "role": "San José park ranger", "src": "CBS News Bay Area, 2023", "u": "https://www.cbsnews.com/sanfrancisco/news/storm-damage-san-jose-alum-rock-park-closed/"},
  {"q": "The waterway doesn't have the capacity for the amount of flow that comes out of the hills when there's a large atmospheric river that comes through", "who": "David Cohen", "role": "San José City Councilmember (District 4)", "src": "NBC Bay Area, 2025", "u": "https://www.nbcbayarea.com/news/local/san-jose-penitencia-creek-betty-ann-gardens/3794084/"},
  {"q": "When you look at it on TV and see it affect others, until it hits your house, you'll never understand", "who": "Lisa Rhines", "role": "Betty Ann Garden Apartments resident displaced by flooding", "src": "KTVU FOX 2, 2025", "u": "https://www.ktvu.com/news/dozens-sj-apt-residents-cleaning-up-after-creek-floods-units"},
];
