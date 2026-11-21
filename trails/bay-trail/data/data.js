// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the San Francisco Bay Trail in San José page. Every entry carries at least one source URL.
// Two layers: the City's Trail Reach layer (MAINLINE, BAY01…BAY09D + Connector) and MTC's regional Bay Trail layer
// (side features "MTC-<segment>", existing trail only). See scripts/reaches_bay-trail.py.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  cityQ: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query?where=NAME%3D%27Bay+Trail%27&outFields=*&returnGeometry=false&f=json",
  cityPage: "http://web.archive.org/web/20260508150750/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2947/2058",
  mtcLayer: "https://services3.arcgis.com/i2dkYWmb4wHvYPda/arcgis/rest/services/bay_trail/FeatureServer/0",
  mtcItem: "https://www.arcgis.com/home/item.html?id=7555b7dd7da546db8196241292e58144",
  mtcHub: "https://opendata.mtc.ca.gov/datasets/MTC::san-francisco-bay-trail/about",
  mtcViewer: "https://mtc.maps.arcgis.com/apps/mapviewer/index.html?layers=7555b7dd7da546db8196241292e58144",
  mtcGaps: "https://opendata.mtc.ca.gov/datasets/bay-trail-gap-closure-implementation-plan-prioritization-bay-trail-gaps-2024",
  map7: "https://mtc.ca.gov/operations/regional-trails-parks/san-francisco-bay-trail/map-numbers/map-7-alviso-newark",
  btgcipPage: "https://mtc.ca.gov/operations/regional-trails-parks/san-francisco-bay-trail/bay-trail-gap-closure-implementation-plan",
  btgcip: "https://mtc.ca.gov/sites/default/files/documents/2024-08/BTGCIP_Report_08_27_2024.pdf",
  gap2005: "https://mtc.ca.gov/sites/default/files/documents/2022-10/Final-Gap-Analysis-Study-2005-09-15-reduced.pdf",
  memo2002: "http://web.archive.org/web/20090805124344/http://www.sanjoseca.gov/clerk/agenda/6_18_02docs/6_18_02_5.2.htm",
  ceqa2002: "https://ceqanet.lci.ca.gov/2002022017",
  ceqa2010: "https://ceqanet.lci.ca.gov/2010102043",
  ceqaRwf: "https://ceqanet.lci.ca.gov/2011052074/2",
  amp1998: "http://web.archive.org/web/20120515160335/http://www.sanjoseca.gov/planning/spec_plan/Alviso%20Master%20Plan.pdf",
  scc2004: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2004/0405/0405Board13_Alviso_Marina.pdf",
  scc2018: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2019/1910/20191017Board03H_South_SF_Bay_Shoreline_Project_Ex3.pdf",
  scc2022: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2024/2409/20240905Board3E_ShorelineProject_Ex4.pdf",
  scc2024: "http://scc.ca.gov/webmaster/ftp/pdf/sccbb/2024/2404/20240418Board06_Shoreline_Project_staffrec.pdf",
  scc2026: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2026/0618/20260618Board03C_Shoreline_Project.pdf",
  fact2023: "https://www.fws.gov/sites/default/files/documents/San%20Francisco%20Bay%20Shoreline%20Project%20Fact%20Sheet_May%202023_0.pdf",
  shore2018: "https://legistar.granicus.com/sanjose/attachments/8297c332-b214-48f3-b7a0-9be68534bce7.pdf",
  a18_2020: "https://legistar.granicus.com/sanjose/attachments/acb01100-ccc5-4080-b865-1d6e1df49658.pdf",
  coop2020: "https://legistar.granicus.com/sanjose/attachments/9ce9c456-2abc-42f0-a95a-3097830d1425.pdf",
  a18_2023: "https://legistar.granicus.com/sanjose/attachments/d3a09fe5-a0a2-49a9-8ded-f59746f01fa9.pdf",
  a18pres: "https://legistar.granicus.com/sanjose/attachments/ff01072f-43b4-4e24-8139-861389dff079.pdf",
  te2025: "https://legistar.granicus.com/sanjose/attachments/e134f06c-4efb-42d2-bf3c-68c6bcb3fc67.pdf",
  te2025pres: "https://legistar.granicus.com/sanjose/attachments/62f4e003-f946-4814-bc94-4807b8fe2bd3.pdf",
  grt2023: "https://legistar.granicus.com/sanjose/attachments/c8524355-3435-47db-aef3-746b68ee2a6d.pdf",
  grtBike: "https://legistar.granicus.com/sanjose/attachments/78497774-4318-4e0d-8787-1dbda4926686.pdf",
  pump2017: "https://legistar.granicus.com/sanjose/attachments/644ba744-af81-4d84-bc59-1dcbf71b11b0.pdf",
  rail237: "https://legistar.granicus.com/sanjose/attachments/065984ff-8206-46c7-bfb3-4eb6385592f6.pdf",
  bpac237: "https://legistar.granicus.com/sanjose/attachments/3fbff527-6087-45b1-81e5-a4e6ad3f20e9.pdf",
  sr2tbt: "https://www.mtc.ca.gov/sites/default/files/meetings/attachments/6640/3b_26_0595_1_Summary_Sheet_SR2TBT.pdf?cb=c473f183",
  flood1983: "https://assets.valleywater.org/files/1983%20Flood%20Report_0.pdf",
  vwShoreline: "https://www.valleywater.org/shoreline",
  vwFaq: "https://www.valleywater.org/news-events/news-releases/AlvisoFrequentlyAskedQuestions",
  vwMilestone: "https://www.valleywater.org/news/milestone-reached-south-san-francisco-bay-shoreline-phase-i-project",
  vwCamp: "https://www.valleywater.org/project-updates/good-neighbor-program-valley-water-addressing-encampments-unsheltered-people",
  sbspAlviso: "https://www.southbayrestoration.org/pond-complexes/alviso",
  sbspWork: "https://www.southbayrestoration.org/page/current-work",
  fwsSbsp: "https://www.fws.gov/project/south-san-francisco-bay-restoration",
  refugeTrails: "https://www.fws.gov/refuge/don-edwards-san-francisco-bay/visit-us/trails",
  drawbridge: "https://en.wikipedia.org/wiki/Drawbridge,_California",
  almanac2003: "https://www.almanacnews.com/morgue/2003/2003_02_19.salt.html",
  nbc2011: "https://www.nbcbayarea.com/news/local/alviso-salt-pond-gates-open/1893262/",
  kqed2017: "https://www.kqed.org/news/11328162/san-jose-flooding-14000-told-to-evacuate",
  knee2026: "https://www.kneedeeptimes.org/united-alviso-for-change-climate-resilience/",
  knee2025: "https://www.kneedeeptimes.org/south-bay-levee-alviso-san-jose/",
  sji2021: "https://www.sanjoseinside.com/news/as-sea-levels-rise-who-will-pay-to-protect-and-restore-south-bays-shore/",
  spot2022: "https://sanjosespotlight.com/valley-water-breaks-ground-on-north-san-jose-alviso-flood-control-project-san-francisco-bay-area-shoreline-flooding-tidal-marsh-rising-sea-level-climate-change/",
  nbc2023: "https://www.nbcbayarea.com/news/local/south-bay/alviso-pink-pond/3363552/",
  lnm2025: "https://localnewsmatters.org/2025/04/25/san-jose-sweeps-homeless-encampment-near-future-microsoft-data-center-property/",
  spot2026: "https://sanjosespotlight.com/san-joses-winter-flood-risks-come-into-focus/",
  chron2026: "https://www.sfchronicle.com/climate/article/alviso-el-nino-flooding-22495755.php",
  coyotePage: "../coyote-creek/",
  guadalupePage: "../guadalupe-river/",
};

const LOOP_NOTE = { text: "Part of a dirt levee loop of about nine miles around former salt Ponds A9–A15 on the Don Edwards refuge. When the ponds are breached it becomes about three miles of out-and-back trail. On the regional map only; the City's layer leaves it out.", src: SRC.scc2022 };
const REACH_NOTES = {
  "Connector": { text: "A paved path along Hwy 237 west of the Guadalupe River, and most of what the City counts as open Bay Trail. The City lists a neighboring city as its owner; MTC credits San José Public Works and dates it before 1989 (segment 3038, 1.19 mi).", src: SRC.cityQ },
  "BAY09": { gap: true, text: "From the Marriott connector north along the Guadalupe to Alviso, on private land. In design since the 2010 Reach 9/9B environmental review. MTC calls it gap 3035 and puts it in its lowest-priority tier, at $5M–$25M.", src: SRC.btgcip },
  "BAY09D": { text: "A 0.16-mile paved piece near Gold St, open on both maps (MTC segment 3044). The City lists private land; MTC lists San José Parks.", src: SRC.cityQ },
  "BAY09B": { gap: true, text: "A planned bridge over the Guadalupe River and Alviso Slough just west of Gold St (MTC gap 3046, $2M–$5M). MTC estimates about 71% of it would flood with 1 m of sea level rise.", src: SRC.btgcip },
  "BAY09a": { gap: true, text: "Under Gold St on Valley Water land. The 2010 design calls for three undercrossings: at the new bridge, the railroad and Gold St.", src: SRC.ceqa2010 },
  "BAY07A": { gap: true, text: "Alviso Marina to the railroad and a future pedestrian bridge. The regional map already shows a 0.48-mile Valley Water levee trail here; the Shoreline levee's railroad crossing and bridge are in design.", src: SRC.vwShoreline },
  "BAY08A": { gap: true, text: "North First St south to Wilson Dr. Planned, with no project.", src: SRC.cityQ },
  "BAY07": { gap: true, text: "First and Gold streets to Hope St and Mill Rd in Alviso village. The 2005 gap study priced the Gold St piece at $29,661.", src: SRC.gap2005 },
  "BAY08": { gap: true, text: "An unnamed planned piece east of North First St. No project.", src: SRC.cityQ },
  "BAY06": { gap: true, text: "Through Alviso village from Spreckles Ave to Hope and Elizabeth streets. When the plan went to Council in 2002, residents worried about visitors and traffic.", src: SRC.memo2002 },
  "BAY04": { gap: true, text: "Los Esteros Rd to Clark St, across undeveloped land. Planned.", src: SRC.cityQ },
  "BAY05": { gap: true, text: "Los Esteros Rd to the refuge's Environmental Education Center, which already has a 4.5-mile loop trail.", src: SRC.map7 },
  "BAY03": { gap: true, text: "Zanker Rd to Los Esteros Rd, past the wastewater plant's lands. The 2005 gap study called it a short-term project at $453,697. It hasn't been built.", src: SRC.gap2005 },
  "BAY02": { gap: true, text: "Coyote Creek to Zanker Rd, on private land. The Shoreline levee's Reaches 4–5, still in design, are planned through here on high ground north of the wastewater plant.", src: SRC.te2025 },
  "BAY01": { gap: true, text: "Dixon Landing Rd to Hwy 237 on the west bank of Coyote Creek. Planned by the City, but a paved trail on the Milpitas bank has covered the same distance since 2006.", src: SRC.map7 },
  "MTC-3000": LOOP_NOTE, "MTC-3000.1": LOOP_NOTE, "MTC-3000.2": LOOP_NOTE, "MTC-3000.3": LOOP_NOTE,
  "MTC-3042": { text: "Dirt refuge trails around the Environmental Education Center and Mallard Slough. Parts close on and off for levee work through November 2028. Regional map only.", src: SRC.sbspWork },
  "MTC-3043": { text: "A short dirt refuge spur north of the education center. Regional map only.", src: SRC.mtcItem },
  "MTC-3022": { text: "The trail and boardwalk at Alviso Marina County Park, rebuilt with Coastal Conservancy and Bay Trail grants; MTC dates it 2004.", src: SRC.scc2004 },
  "MTC-3030": { text: "A Valley Water levee along Alviso Slough from the Gold St bridge to the marina, where the City still shows a planned reach (BAY07A).", src: SRC.mtcItem },
  "MTC-3028.1": { text: "The paved Hwy 237 trail from Zanker Rd to Coyote Creek, built by San José in 2011. The City maps it as part of its separate Hwy 237 Bikeway rather than the Bay Trail.", src: SRC.cityPage },
  "MTC-3012": { text: "Milpitas's paved trail on the east bank of Coyote Creek, Hwy 237 to Dixon Landing, finished in 2006. It covers the trip the City's planned BAY01 would make on the other bank.", src: SRC.map7 },
  "MTC-3004": { text: "A short paved link at McCarthy Blvd and Dixon Landing, in Milpitas, finished in 2006.", src: SRC.mtcItem },
};

// West (Hwy 237 at the Guadalupe / Alviso) → east (Coyote Creek / Dixon Landing). City reaches only.
const MAINLINE = ["Connector", "BAY09", "BAY09D", "BAY09B", "BAY09a", "BAY07A", "BAY08A", "BAY07", "BAY08", "BAY06", "BAY04", "BAY05", "BAY03", "BAY02", "BAY01"];
// Existing regional (MTC) segments, attached to the nearest City reach (printed by scripts/reaches_bay-trail.py).
const PARENT = { "MTC-3000": "BAY07A", "MTC-3000.1": "BAY07A", "MTC-3000.2": "BAY07A", "MTC-3000.3": "BAY07A", "MTC-3022": "BAY07A", "MTC-3030": "BAY07A",
  "MTC-3042": "BAY05", "MTC-3043": "BAY05", "MTC-3028.1": "BAY01", "MTC-3012": "BAY01", "MTC-3004": "BAY01" };
const SIDE_KIND = Object.fromEntries(Object.keys(PARENT).map(id => [id, "Regional Bay Trail (MTC)"]));
const NOT_GAP = [];
const OWNERS = { DOT: "City street right-of-way", PRIVATE: "Private land", SCVWD: "Valley Water land", NEIGHCITY: "Neighboring city", PRNS: "City of San José Parks",
  USFWS: "U.S. Fish & Wildlife Service (refuge)", COUNTY: "Santa Clara County Parks", MILPITAS: "City of Milpitas" };
const INTRO_CAP = "Hwy 237 at the Guadalupe to Dixon Landing";
const INTRO_FIT = { paddingTopLeft: [70, 30], paddingBottomRight: [100, 20] };
const INTRO_MARKS = [
  ["Guadalupe River", [37.4235, -121.9774], "left"], ["Alviso Marina", [37.4298, -121.9804], "left"],
  ["Refuge center", [37.4394, -121.9600], "right"], ["Zanker Rd", [37.4285, -121.9406], "right"], ["Dixon Landing", [37.4532, -121.9250], "right"],
];
const LANDMARKS = [
  { key: true, name: "Hwy 237 / Guadalupe River", ll: [37.4155, -121.9798] },
  { key: true, name: "Gold St bridge", ll: [37.4235, -121.9774] },
  { key: true, name: "Alviso Marina County Park", ll: [37.4298, -121.9804] },
  { key: true, name: "Refuge Environmental Education Center", ll: [37.4394, -121.9600] },
  { name: "Los Esteros Rd", ll: [37.4312, -121.9646] },
  { key: true, name: "Zanker Rd", ll: [37.4285, -121.9406] },
  { key: true, name: "Coyote Creek", ll: [37.4311, -121.9296] },
  { name: "Hwy 237 / Coyote Creek", ll: [37.4235, -121.9253] },
  { key: true, name: "Dixon Landing Rd", ll: [37.4532, -121.9250] },
];

// Timeline. cat: rail | plan | build | fund | flood | camp
const CAT_LABELS = { rail: "Railroad", flood: "Floods, levees & salt ponds", camp: "Crowds, encampments & safety" };
const TIMELINE = [
  { d: "1876", cat: "rail", t: "A railroad crosses the marsh", x: "The narrow-gauge South Pacific Coast Railroad builds drawbridges over Mud Slough and Coyote Creek to link Newark with Alviso and San José. The line, now Union Pacific's, still splits the Alviso refuge trails in two.", s: [["Wikipedia: Drawbridge", SRC.drawbridge], ["Coastal Conservancy (2024)", SRC.scc2024]] },
  { d: "1968", cat: "build", t: "The County builds Alviso Marina", x: "After buying land in 1964 and a parcel from Leslie Salt, Santa Clara County opens a 76-slip marina. Silt later fills it in.", s: [["Coastal Conservancy (2004)", SRC.scc2004]] },
  { d: "1983-03-01", cat: "flood", t: "Alviso floods", x: "Floodwaters top Grand Ave and pour into Alviso, 3 to 7 feet deep. About 1,700 people are evacuated, 362 homes are badly damaged, and Hwy 237 closes for about ten days.", s: [["Valley Water 1983 flood report, pp. 12–14", SRC.flood1983]] },
  { d: "1987", cat: "plan", t: "The idea of a Bay Trail", x: "State Senator Bill Lockyer's SB 100 sets out a trail around the whole Bay.", s: [["Council memo (2002)", SRC.memo2002]] },
  { d: "1989", cat: "plan", t: "A regional Bay Trail Plan", x: "The Association of Bay Area Governments adopts a plan with the trail's alignment and policies.", s: [["Council memo (2002)", SRC.memo2002]] },
  { d: "1996", cat: "flood", t: "Coyote Creek levees finished", x: "Valley Water's Lower Coyote Creek project builds levees from Montague Expressway to the Bay, protecting Alviso from a 100-year creek flood.", s: [["Valley Water FAQ", SRC.vwFaq]] },
  { d: "1997-10-21", cat: "plan", t: "A plan for Alviso Marina County Park", x: "The County adopts a two-phase master plan: shoreline access and a boardwalk first, a boat launch second.", s: [["Coastal Conservancy (2004)", SRC.scc2004]] },
  { d: "1998-12-07", cat: "plan", t: "The Alviso Master Plan", x: "San José adopts a specific plan for Alviso that maps a bicycle network and trails through the village.", s: [["Alviso Master Plan", SRC.amp1998]] },
  { d: "2000-04", cat: "fund", t: "$150,000 for a marina boardwalk", x: "The Coastal Conservancy moves Bay Trail money to Alviso Marina for trail work, a boardwalk across the old marina basin, benches and signs.", s: [["Coastal Conservancy (2004)", SRC.scc2004]] },
  { d: "2002-06-18", cat: "plan", t: "San José's Bay Trail Master Plan", x: "The Council takes up a plan for a 13.3-mile San José section; its environmental review describes about 11 miles in nine reaches. The plan cost $431,844.", s: [["Council memo (archived)", SRC.memo2002], ["CEQA 2002022017", SRC.ceqa2002]] },
  { d: "2003-02-11", cat: "fund", t: "Salt ponds bought for $100M", x: "The state Wildlife Conservation Board approves buying Cargill's South Bay salt ponds for tidal-marsh restoration: 16,500 acres by the Almanac's count, 15,100 by the Fish and Wildlife Service's.", s: [["The Almanac", SRC.almanac2003], ["USFWS", SRC.fwsSbsp]] },
  { d: "2004", cat: "flood", t: "Lower Guadalupe flood project finished", x: "Valley Water's levees give 100-year protection between I-880 and Alviso.", s: [["Valley Water FAQ", SRC.vwFaq]] },
  { d: "2004-05-27", cat: "fund", t: "$500,000 for Alviso Marina", x: "The Conservancy funds the marina's shoreline access. Phase 1 totals $2.31M, including $1.25M of Valley Water flood work. MTC records the marina's Bay Trail segment as finished in 2004.", s: [["Coastal Conservancy (2004)", SRC.scc2004]] },
  { d: "2005-09-15", cat: "plan", t: "A regional study prices the gaps", x: "The Bay Trail gap study lists 14 gaps in San José and prices them at $16.1M in 2005 dollars. With funding, it says, the whole regional trail could be finished in 15 years.", s: [["Gap Analysis Study", SRC.gap2005]] },
  { d: "2006", cat: "build", t: "Milpitas opens its Coyote Creek trail", x: "A paved trail on the creek's east bank, Hwy 237 to Dixon Landing, joins the regional Bay Trail: 2.3 miles along San José's edge.", s: [["MTC Bay Trail layer", SRC.mtcItem]] },
  { d: "2010", cat: "flood", t: "Pond A6 opens to the tides", x: "The first of the Alviso salt ponds is breached for marsh restoration. Others follow: A8's gates in 2011, A17 in 2012, A19 and A20 in 2021.", s: [["South Bay Salt Pond Restoration", SRC.sbspAlviso]] },
  { d: "2010-10-26", cat: "plan", t: "Environmental review for the Gold St crossing", x: "The City's Reach 9/9B plan: about 2,320 feet of paved trail along the Guadalupe, a bridge west of the railroad bridge, and undercrossings at the bridge, the railroad and Gold St.", s: [["CEQA 2010102043", SRC.ceqa2010]] },
  { d: "2011", cat: "build", t: "Hwy 237 trail reaches Coyote Creek", x: "San José builds 0.85 miles of paved trail beside Hwy 237 from Zanker Rd to Coyote Creek, closing a gap the 2005 study had priced at $276,266.", s: [["MTC Bay Trail layer", SRC.mtcItem], ["Gap Analysis Study", SRC.gap2005]] },
  { d: "2011-06-01", cat: "flood", t: "Pond A8's gates open", x: "Opening gates on Alviso Slough reconnects about 1,400 acres of former salt pond to the tides.", s: [["NBC Bay Area", SRC.nbc2011]] },
  { d: "2013", cat: "build", t: "The Guadalupe River Trail reaches Alviso", x: "The river trail is finished north to Alviso, where it meets the Bay Trail.", s: [["Council memo (2026)", SRC.grtBike]] },
  { d: "2013-01-11", cat: "plan", t: "A master plan for the wastewater plant's land", x: "A draft environmental report covers the 2,680-acre treatment-plant site: habitat restoration, parks, trails and development through 2040.", s: [["CEQA 2011052074", SRC.ceqaRwf]] },
  { d: "2015-12-18", cat: "plan", t: "The Army Corps signs off on a shoreline levee", x: "The authorized project: a 4-mile levee, 2,900 acres of tidal marsh, and a trail on the levee from Alviso Marina to the Coyote Creek trail at McCarthy Blvd.", s: [["Valley Water/City presentation (2018)", SRC.shore2018]] },
  { d: "2016-11", cat: "fund", t: "Voters pass Measure AA", x: "A Bay Area parcel tax for wetlands. It later funds Alviso levee and salt-pond work.", s: [["San Jose Inside (2021)", SRC.sji2021]] },
  { d: "2016-12", cat: "fund", t: "Congress authorizes $177.2M", x: "The WIIN Act authorizes design and construction of the shoreline levee at $177.2M. (A 2023 City memo gives $194M for the December 2015 authorization.)", s: [["Valley Water/City presentation (2018)", SRC.shore2018], ["Joint memo (2023)", SRC.a18_2023]] },
  { d: "2017-02", cat: "flood", t: "Coyote Creek floods; Alviso stays dry", x: "About 14,000 San José residents upstream are told to evacuate. Alviso, at the creek's mouth, doesn't flood.", s: [["KQED", SRC.kqed2017], ["KneeDeep Times (2026)", SRC.knee2026]] },
  { d: "2017-09-13", cat: "flood", t: "$13.1M for an Alviso storm pump station", x: "The City funds a pump station to drain Alviso's streets.", s: [["Council memo", SRC.pump2017]] },
  { d: "2018-03-22", cat: "fund", t: "Breaching ponds will cost trail miles", x: "The Conservancy funds a $100,000 trail study. Its staff count about 7.4 miles of levee trail lost to breaches, offset by 3.3 miles around Pond A18 and 1.6 miles along Hwy 237: a net loss of about 2.2 miles.", s: [["Coastal Conservancy (2018)", SRC.scc2018]] },
  { d: "2018-07", cat: "fund", t: "$177.2M from Congress, with a deadline", x: "A disaster supplemental funds the levee. The local share is $103.8M, and all flood-protection work is to be built by January 2023.", s: [["Valley Water/City presentation (2018)", SRC.shore2018]] },
  { d: "2020-02-06", cat: "fund", t: "Valley Water offers $13.8M for Pond A18", x: "The levee's eastern reaches need the wastewater plant's Pond A18. Valley Water offers $13,778,000 for it and easements; the City starts negotiating.", s: [["Council memo", SRC.a18_2020]] },
  { d: "2021-02", cat: "fund", t: "The levee's cost nearly triples", x: "The Army Corps updates the cost to $545M. In September it pauses design of Reaches 4–5, east of Artesian Slough.", s: [["Joint memo (2023)", SRC.a18_2023], ["T&E memo (2025)", SRC.te2025]] },
  { d: "2021-12", cat: "build", t: "Levee construction begins", x: "Work starts on Reaches 1–3, from Alviso Marina across the railroad to Artesian Slough. Partners hold a groundbreaking in April 2022.", s: [["T&E memo (2025)", SRC.te2025], ["San José Spotlight", SRC.spot2022]] },
  { d: "2022-05-05", cat: "fund", t: "$3.2M from ABAG", x: "The Conservancy passes a $3,161,921 ABAG grant to Valley Water for the levee project.", s: [["Coastal Conservancy (2022)", SRC.scc2022]] },
  { d: "2023-02", cat: "fund", t: "$91M more from Congress", x: "Federal funding reaches $219M and the Army Corps restarts design of Reaches 4–5.", s: [["T&E memo (2025)", SRC.te2025]] },
  { d: "2023-11", cat: "camp", t: "Crowds at the pink pond", x: "A pink salt pond at Alviso Marina goes viral and draws about 1,000 visitors a day. Refuge staff warn that the crowds scare off migrating birds.", s: [["NBC Bay Area", SRC.nbc2023]] },
  { d: "2024-04-18", cat: "fund", t: "$10M more from the Conservancy", x: "$2.57M for replanting and $7.43M for Reaches 4–5. The project includes 1.8 miles of Bay Trail and connecting trails.", s: [["Coastal Conservancy (2024)", SRC.scc2024]] },
  { d: "2024-08-27", cat: "plan", t: "San José's gaps ranked lowest priority", x: "MTC's gap-closure plan puts all three of San José's remaining Bay Trail gaps (3014, 3035 and 3046) in Tier 4: lower priority, higher cost.", s: [["Gap Closure Implementation Plan", SRC.btgcip]] },
  { d: "2024-11-26", cat: "camp", t: "No camping on Valley Water land", x: "Valley Water bans camping on its lands, including the Guadalupe and Coyote levee trails.", s: [["Valley Water", SRC.vwCamp]] },
  { d: "2025-03-17", cat: "plan", t: "A cheaper route for Reaches 4–5", x: "A redesigned levee alignment uses existing high ground north of the wastewater plant and the Zanker landfill. The project still needs about 895 acres of plant land.", s: [["T&E memo", SRC.te2025], ["Joint presentation (2023)", SRC.a18pres]] },
  { d: "2025-04-21", cat: "camp", t: "RV encampment cleared by Hwy 237", x: "The City sweeps an RV encampment on Alviso-Milpitas Rd.", s: [["Local News Matters", SRC.lnm2025]] },
  { d: "2025-09-25", cat: "build", t: "Two miles of levee finished", x: "Reaches 1–3 stand 15.2 feet high with a 16-foot aggregate-base trail on top. Reaches 4–5 remain; Valley Water expects full protection around 2035.", s: [["Valley Water", SRC.vwMilestone], ["Valley Water project page", SRC.vwShoreline]] },
  { d: "2026-03-23", cat: "plan", t: "The river trail floods under Hwy 237", x: "A City plan for Guadalupe River Trail connections notes the underpass floods, and recommends signs on the Hwy 237 trail between Alviso and the river trail.", s: [["Council memo", SRC.grtBike]] },
  { d: "2026-06-18", cat: "fund", t: "$512.5M, with $59.4M still to find", x: "The Conservancy adds $4.05M. Its funding table puts the levee project at $512,539,647, with $59,442,364 not yet raised.", s: [["Coastal Conservancy (2026)", SRC.scc2026]] },
  { d: "2026-09-29", cat: "rail", t: "A grant bid for the Hwy 237 rail crossing", x: "The Hwy 237 trail stops at the Union Pacific tracks and sends riders onto the Gold St Connector, where 24 trains and 10,000 cars pass a day. The City seeks $8.5M toward a $10M fix.", s: [["Council memo", SRC.rail237], ["BPAC letter", SRC.bpac237]] },
  { d: "2026-11-13", cat: "flood", t: "A flood emergency before El Niño", x: "San José declares a local emergency and sets aside $5.5M for flood preparedness; a UC Davis report lists Alviso as high risk. The Chronicle reports Reaches 4–5 aren't expected until 2038.", s: [["San José Spotlight", SRC.spot2026], ["SF Chronicle (paywall)", SRC.chron2026]] },
];

const PROJECTS = [
  { name: "Shoreline levee, Phase I", id: "USACE · Valley Water", year: 2025, mi: null, kind: "levee + marsh", cost: 512.54, contract: null, funding: "Army Corps $232.6M; Valley Water $79.8M; Restoration Authority $61.5M; DWR $21M (+$28M pending); Coastal Conservancy $22.1M; WCB $5.1M; ABAG $3.2M; $59.4M not yet raised", src: SRC.scc2026, note: "Funding plan, June 2026, for all five reaches; mostly flood control and marsh, with a levee-top trail" },
  { name: "Cargill salt ponds (whole South Bay)", id: "State · federal", year: 2003, mi: null, kind: "land", cost: 100, contract: null, funding: "State $72M; federal $8M; foundations $20M", src: SRC.almanac2003, note: "15,100–16,500 acres around the South Bay, not just Alviso" },
  { name: "Alviso Marina access, Phase 1", id: "County Parks", year: 2004, mi: null, kind: "park", cost: 2.307, contract: null, funding: "Coastal Conservancy $500K; Valley Water flood work $1.25M; others not itemized", src: SRC.scc2004, note: "Phase 1 budget; the $3M boat ramp was a separate phase" },
  { name: "San José Bay Trail Master Plan", id: "City", year: 2002, mi: null, kind: "plan", cost: 0.432, contract: 0.303, funding: "Consultant $303,444; City design management $128,400", src: SRC.memo2002, note: "Planning only; no construction" },
];
const PM_EST = [
  { name: "2005 gap study, San José", sub: "MTC estimate, 2005 $", mi: 16.46, cost: 16.093, note: "14 gaps, 86,886 ft; planning-level estimate", src: SRC.gap2005 },
  { name: "Gold St gap 3035, 2005", sub: "MTC estimate, 2005 $", mi: 1.24, cost: 3.335, note: "Sunnyvale trail to the Gold St bridge", src: SRC.gap2005 },
  { name: "Gold St gap 3035, 2024", sub: "MTC tier, low end", mi: 0.96, cost: 5, note: "MTC's $5M–$25M tier; this uses the bottom of the range", src: SRC.btgcip },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: SRC.coyotePage },
];
const PRESETS = [
  { label: "2005 study average", pm: 16.093 / 16.46 },
  { label: "Gap 3035, 2024 low end", pm: 5 / 0.96 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "Gap 3035, 2024 high end", pm: 25 / 0.96 },
];
const DEFAULT_PM = 5 / 0.96;
const EST_EXTRAS = [
  { name: "Hwy 237 trail rail crossing at Gold St", short: "rail crossing", cost: 10, note: "City estimate in its 2026 grant application; a crossing on the Hwy 237 trail, not on the City's Bay Trail reaches" },
];

const GAPS = [
  { name: "Gold St crossing (Reach 9/9B)", ids: ["BAY09", "BAY09a", "BAY09B"], mi: 1.38, status: "Design", hard: "Private land, a river bridge and three undercrossings; in design since 2010; MTC tiers add up to $7M–$30M" },
  { name: "Alviso Marina → railroad", ids: ["BAY07A"], mi: 0.52, status: "Planned", hard: "Valley Water land; the regional map shows a levee trail here already; Shoreline railroad bridge in design" },
  { name: "Alviso village streets", ids: ["BAY07", "BAY06"], mi: 1.39, status: "Planned", hard: "On-street through the village; residents raised traffic concerns in 2002" },
  { name: "North First St", ids: ["BAY08A", "BAY08"], mi: 1.33, status: "Planned", hard: "On-street; no project" },
  { name: "Los Esteros Rd and the refuge center", ids: ["BAY04", "BAY05"], mi: 1.12, status: "Planned", hard: "Undeveloped land; links to the refuge's existing loop" },
  { name: "Los Esteros Rd → Coyote Creek", ids: ["BAY03", "BAY02"], mi: 2.45, status: "Planned", hard: "Wastewater plant and private land; tied to the Shoreline levee's Reaches 4–5 (2035–2038)" },
  { name: "Hwy 237 → Dixon Landing (west bank)", ids: ["BAY01"], mi: 2.58, status: "Planned", hard: "Refuge and Valley Water land; a paved trail on the Milpitas bank already makes this trip" },
];

const MTC_OPEN = () => REACHES.features.filter(f => f.properties.id.startsWith("MTC-"));
const STATS = ({ gapMi }) => {
  const m = MTC_OPEN(), dirt = m.filter(f => f.properties.status === "Open Interim").reduce((s, f) => s + f.properties.mi, 0);
  return [
    ["0.96 mi", "open on the City's own Bay Trail map: a path along Hwy 237 that a neighboring city owns, and 0.16 mi near Gold St"],
    [gapMi.toFixed(1) + " mi", "of the City's route still planned or in design, including the Gold St crossing studied since 2010"],
    [dirt.toFixed(1) + " mi", "of dirt refuge, County and Valley Water levee trail around Alviso that the regional map counts as open. The 9-mile refuge loop will shrink to about 3"],
    ["$512.5M", "for the shoreline levee that is to carry the trail east of Alviso; $59.4M of it isn't funded"],
  ];
};

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget at the time", "Latest"];
const DELIVERY = [
  ["San José Bay Trail Master Plan (2002)", "A 13.3-mile San José section", "0.96 of 11.7 mi open (City map)", "bad", "$431,844 for the plan", "No construction estimate", "unk", SRC.memo2002],
  ["2005 gap study: San José's 14 gaps", "Short-term gaps in 5 years; all in 15 if funded", "2 of 14 closed, per MTC's layer", "bad", "$16.1M (2005 $)", "No update; lowest priority in 2024", "unk", SRC.gap2005],
  ["Gold St crossing (Reach 9/9B)", "Environmental review in 2010", "Still in design, 16 years on", "bad", "$3.34M for gap 3035 (2005)", "$7M–$30M in MTC tiers (2024)", "bad", SRC.btgcip],
  ["Shoreline levee: schedule", "All flood-protection work by January 2023 (2018)", "Half done 2025; rest 2035–38", "bad", "–", "–", "unk", SRC.shore2018],
  ["Shoreline levee: cost", "Authorized 2015–16", "Nearly tripled by 2021", "bad", "$177.2M (a 2023 memo says $194M)", "$545M (2021); $512.5M (2026)", "bad", SRC.scc2026],
  ["Hwy 237 trail rail crossing", "Grant application, September 2026", "Awards due early 2027", "unk", "$10M ($8.5M grant, $1.5M City)", "Not funded yet", "unk", SRC.rail237],
];
const OFFICIAL_EST = {
  head: ["Segment", "Miles", "Estimate (2005 $)", "Where, and what happened since"],
  rows: [
    ["3014", "Los Esteros Rd, Spreckles Ave to Zanker Rd", 1.79, 0.454, "Short term. Still a gap (City BAY03)"],
    ["3017", "Spreckles Ave, Los Esteros Rd to State St", 0.31, 0.325, "Short term. Still a gap (City BAY05–06)"],
    ["3021", "Zanker Rd to Coyote Creek", 0.72, 0.290, "Short term. Still a gap (City BAY02, private land)"],
    ["3025", "Gold St, Alviso County Park to State St", 0.43, 0.030, "Short term. Still a gap (City BAY07)"],
    ["3028", "West edge of Coyote Creek, Hwy 237 to Zanker Rd", 0.66, 0.276, "Short term. Built 2011: the Hwy 237 trail"],
    ["3004", "N. McCarthy Blvd bridge", 0.23, 0.015, "Mid term. MTC shows it built in 2006 (Milpitas)"],
    ["3011", "Alviso / Pond A18", 3.10, 3.559, "Mid term. Still a gap; the levee's Reaches 4–5, in design, cover this area"],
    ["3020", "Shoreline north of State St, Catherine St to Spreckles Ave", 0.81, 0.833, "Mid term. Still a gap"],
    ["3021.1", "Zanker Rd at the Hwy 237 trail", 0.46, 0.192, "Mid term. Not verified"],
    ["3023", "State St, Gold St to Spreckles Ave", 0.68, 0.234, "Mid term. Still a gap"],
    ["3033", "Hwy 237 to Gold and Taylor streets", 1.58, 4.290, "Mid term. Not verified"],
    ["3034", "Gold St, Hwy 237 pathway to State St", 0.81, 0.314, "Mid term. The rail crossing is still a gap (2026 grant bid)"],
    ["3000.1", "Newby Island loop (private development)", 3.64, 1.947, "Long term. MTC reuses the number for today's refuge loop"],
    ["3035", "Sunnyvale trail to the Gold St bridge", 1.24, 3.335, "Long term. Still a gap: City BAY09, in design"],
  ],
  total: ["16.46", "$16.09M"],
};

const DOCS = [
  { g: "Plans & studies", items: [
    ["Alviso Master Plan (1998)", SRC.amp1998],
    ["Council memo: San José Bay Trail Master Plan (2002)", SRC.memo2002],
    ["Bay Trail Gap Analysis Study (ABAG, 2005)", SRC.gap2005],
    ["Bay Trail Gap Closure Implementation Plan (MTC, 2024)", SRC.btgcip],
    ["Council memo: Guadalupe River Trail master plan update (2023)", SRC.grt2023],
    ["Council memo: Guadalupe River Trail bike connections plan (2026)", SRC.grtBike],
  ]},
  { g: "Shoreline levee", items: [
    ["Valley Water/City meeting: Shoreline Project update (2018)", SRC.shore2018],
    ["Council memo: offer to buy Pond A18 (2020)", SRC.a18_2020],
    ["Council memo: Shoreline cost share with Valley Water (2020)", SRC.coop2020],
    ["Shoreline Project fact sheet (2023)", SRC.fact2023],
    ["Joint memo: Shoreline levee and Pond A18 (2023)", SRC.a18_2023],
    ["Joint presentation: Shoreline levee and Pond A18 (2023)", SRC.a18pres],
    ["T&E memo: Shoreline levee and sea level rise (2025)", SRC.te2025],
    ["T&E presentation: Shoreline levee (2025)", SRC.te2025pres],
  ]},
  { g: "Coastal Conservancy grants", items: [
    ["Staff recommendation: Alviso Marina access (2004)", SRC.scc2004],
    ["Staff recommendation: Shoreline Project (2018)", SRC.scc2018],
    ["Staff recommendation: Shoreline Project (2022)", SRC.scc2022],
    ["Staff recommendation: Shoreline Project (2024)", SRC.scc2024],
    ["Staff recommendation: Shoreline Project (2026)", SRC.scc2026],
  ]},
  { g: "Hwy 237 trail", items: [
    ["Council memo: Hwy 237 trail rail crossing grant (2026)", SRC.rail237],
    ["BPAC letter supporting the rail crossing (2026)", SRC.bpac237],
    ["MTC summary: Safe Routes to Transit & Bay Trail grants, cycle 2 (2026)", SRC.sr2tbt],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: Bay Trail Master Plan Negative Declaration (2002)", SRC.ceqa2002],
    ["CEQA: Bay Trail Reach 9/9B Mitigated Negative Declaration (2010)", SRC.ceqa2010],
    ["CEQA: wastewater plant master plan draft EIR (2013)", SRC.ceqaRwf],
  ]},
  { g: "Floods & Alviso", items: [
    ["Valley Water: 1983 flood report", SRC.flood1983],
    ["Council memo: Alviso storm pump station (2017)", SRC.pump2017],
  ]},
];

const MAPS = [
  { t: "Two maps, two answers", d: "The City's layer shows 0.96 mi of Bay Trail open in San José. MTC's regional layer also counts the refuge, County and Valley Water levee trails around Alviso. This page draws both: City reaches as the main line, MTC's as side routes.", u: SRC.mtcItem, tag: "Read first" },
  { t: "MTC Bay Trail map viewer", d: "The regional layer: existing and proposed segments, surface, agency and year built.", u: SRC.mtcViewer, tag: "Map" },
  { t: "MTC Bay Trail Map 7: Alviso to Newark", d: "The regional trail map for this stretch, with the refuge loops and Milpitas trail.", u: SRC.map7, tag: "Guide" },
  { t: "Valley Water: Shoreline Project", d: "Levee construction updates, schedule and trail closures.", u: SRC.vwShoreline, tag: "Official" },
  { t: "South Bay Salt Ponds: Alviso complex", d: "Pond-by-pond restoration history; current trail closures.", u: SRC.sbspAlviso, tag: "Official" },
  { t: "Don Edwards refuge trails", d: "Which refuge trails are open, and seasonal rules.", u: SRC.refugeTrails, tag: "Guide" },
  { t: "MTC gap-closure plan", d: "How the region ranks every Bay Trail gap, with cost tiers.", u: SRC.btgcipPage, tag: "Official" },
  { t: "MTC Bay Trail data download", d: "The regional layer as open data.", u: SRC.mtcHub, tag: "Download" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's main line.", u: SRC.gis, tag: "Download" },
  { t: "City Bay Trail page (archived)", d: "The City's description of its Bay Trail reaches.", u: SRC.cityPage, tag: "Official" },
];

const NEWS = [
  ["2003-02-19", "The Almanac", "Salt pond purchase: 16,500 acres for $100 million", "https://www.almanacnews.com/morgue/2003/2003_02_19.salt.html", "The state approves moving 16,500 acres of Cargill salt ponds to federal and state agencies for marsh restoration, in a $100 million deal brokered by Sen. Dianne Feinstein."],
  ["2004-10-01", "Bay Nature", "A Tall Order", "https://baynature.org/article/a-tall-order/", "Restoring the newly bought ponds to tidal wetland has to preserve the flood protection they give low-lying Alviso."],
  ["2006-03-13", "San Jose Inside", "The Port of Alviso", "https://www.sanjoseinside.com/news/the_port_of_alviso/", "Historian Leonard McKay traces Alviso from a mission-era port to a community sinking from groundwater pumping and floods."],
  ["2008-07-21", "San Jose Inside", "Alviso Slough Restoration Project is Outside of Water District's Core Mission", "https://www.sanjoseinside.com/news/alviso_slough_restoration_project_is_outside_of_water_districts_core_missio/", "A column argues against a $22 million dredging plan for Alviso Slough, citing the water district's mission and flood risk."],
  ["2011-04-25", "San Jose Inside (column)", "WeePeeCeePee", "https://sanjoseinside.com/2011/04/25/04_25_11_water_pollution_control_plant", "Councilmember Pierluigi Oliverio on the treatment plant's land: habitat, parks and trails, or offices. Alviso residents raise traffic concerns."],
  ["2011-06-02", "NBC Bay Area", "Alviso Salt Pond Gates Open", "https://www.nbcbayarea.com/news/local/alviso-salt-pond-gates-open/1893262/", "Gates at Pond A8 open, reconnecting about 1,400 acres to the tides."],
  ["2013-06-29", "Bay Nature", "Baylands Public Access", "https://baynature.org/article/baylands-access", "A guide to the Alviso ponds from the refuge's Environmental Education Center, including the Mallard Slough and Alviso Slough trails."],
  ["2014-06", "Estuary News", "Freeing Fish While Locking up Mercury", "https://archive.estuarynews.org/estuary-news-freeingfishandlockingupmercury/", "Restoring Pond A8 meant managing mercury from the New Almaden mines in Alviso Slough."],
  ["2016-12-08", "San Jose Inside", "Rising Seas, Federal Inaction and Donald Trump Turn Climate Change into a Local Issue", "https://www.sanjoseinside.com/news/investigative-reports/how-rising-seas-government-squabbling-turned-climate-change-into-a-local-issue/", "Alviso as a test case for sea level rise, with about $175 million planned for levees and marsh; residents recall 1983."],
  ["2017-02-23", "KQED", "San Jose Flood: Thousands Still Waiting for OK to Go Home", "https://www.kqed.org/news/11328162/san-jose-flooding-14000-told-to-evacuate", "Coyote Creek overflows and about 14,000 residents are evacuated upstream of Alviso."],
  ["2018-06-17", "KQED", "South Bay Salt Ponds: It's Not Pretty, Yet", "https://www.kqed.org/news/11675409/south-bay-salt-ponds-its-not-pretty-yet", "Measure AA money goes to salt-pond restoration, a 50-year effort on more than 15,000 acres."],
  ["2018-07-01", "KQED", "The Bay Area's Sinking Neighborhood Gets a Boost", "https://www.kqed.org/news/11678417/the-bay-areas-sinking-neighborhood-gets-a-boost", "$4.4 million in Measure AA money for the shoreline levee; Alviso has creek protection but none from the Bay."],
  ["2018-08-10", "KTVU", "South Bay flood prevention project awarded $177 million", "https://www.ktvu.com/news/south-bay-flood-prevention-project-awarded-177-million", "Funding for the 4-mile levee would let agencies retire the old salt-pond berms."],
  ["2021-11-04", "San Jose Inside", "As Sea Levels Rise, Who Will Pay to Protect and Restore South Bay's Shore?", "https://www.sanjoseinside.com/news/as-sea-levels-rise-who-will-pay-to-protect-and-restore-south-bays-shore/", "The levee's cost grows from $194 million to $545 million. Who pays, and will tech companies help?"],
  ["2022-01-19", "CBS San Francisco", "Levee Project Launched to Protect Flood-Prone South Bay Community of Alviso", "https://www.cbsnews.com/sanfrancisco/news/levee-project-launched-to-protect-flood-prone-south-bay-community-of-alviso/", "A four-mile levee to replace salt-pond berms that aren't FEMA-certified."],
  ["2022-04-14", "San José Spotlight", "Valley Water breaks ground on North San Jose flood control project", "https://sanjosespotlight.com/valley-water-breaks-ground-on-north-san-jose-alviso-flood-control-project-san-francisco-bay-area-shoreline-flooding-tidal-marsh-rising-sea-level-climate-change/", "Groundbreaking for the $545 million levee and 2,900 acres of marsh, then targeted for completion in 2036."],
  ["2022-04-14", "CBS San Francisco", "Project to Ease South Bay Flooding Breaks Ground in San Jose", "https://www.cbsnews.com/sanfrancisco/news/project-to-ease-south-bay-flooding-breaks-ground-in-san-jose/", "Phase I groundbreaking: a four-mile levee plus marsh restoration."],
  ["2023-11-06", "NBC Bay Area", "Pink pond draws thousands to Alviso Marina County Park", "https://www.nbcbayarea.com/news/local/south-bay/alviso-pink-pond/3363552/", "About 1,000 visitors a day come to photograph a pink salt pond; refuge staff worry about birds."],
  ["2024-12-16", "San José Spotlight", "North San Jose residents spar with city over neglected community", "https://sanjosespotlight.com/north-san-jose-alviso-residents-spar-with-city-over-neglected-community/", "Alviso residents fix up their neighborhood themselves; City parks staff remove their work at Alviso Park."],
  ["2025-09-25", "Valley Water (news release)", "Milestone reached in South San Francisco Bay Shoreline Phase I Project", "https://www.valleywater.org/news/milestone-reached-south-san-francisco-bay-shoreline-phase-i-project", "Reaches 1–3, two miles of levee north of Hwy 237, are finished; all flood protection expected by about 2035."],
  ["2025-10-08", "San José Spotlight (op-ed)", "Santos: South Bay shoreline project hits milestone", "https://sanjosespotlight.com/santos-south-san-francisco-bay-shoreline-project-hits-milestone/", "A Valley Water director on the finished two miles of levee."],
  ["2025-10-14", "KneeDeep Times", "King Kong Levee: Two Miles Done, Two To Go", "https://www.kneedeeptimes.org/south-bay-levee-alviso-san-jose/", "Half of the $545 million levee is done after about 20 years of planning; it also enables the Bay Trail through the area."],
  ["2026-05-21", "KneeDeep Times", "Alviso Stays Strong, With Help from NGO", "https://www.kneedeeptimes.org/united-alviso-for-change-climate-resilience/", "Local groups build flood resilience in Alviso; the town stayed dry in 2017."],
  ["2026-11-13", "San José Spotlight", "San Jose's winter flood risks come into focus", "https://sanjosespotlight.com/san-joses-winter-flood-risks-come-into-focus/", "A local emergency and $5.5 million for flood preparedness, with Alviso listed as high risk."],
];

const PHOTOS = [
  { f: "Alviso Marina County Park View At Sunset.jpg", c: "Boardwalk overlook at Alviso Marina County Park as evening clouds gather", a: "Wanderenvy", l: "CC BY-SA 3.0", ll: [37.4295, -121.98], approx: true, y: 2013 },
  { f: "Alviso Marina County Park.jpg", c: "Marsh grasses and open bay at Alviso Marina County Park", a: "Wanderenvy", l: "CC BY-SA 3.0", ll: [37.4295, -121.98], approx: true, y: 2013 },
  { f: "South Bay Yacht Club, 1491 Hope St., Alviso Historic District, Alviso, CA.JPG", c: "South Bay Yacht Club (1903) in the Alviso Historic District", a: "Sanfranman59", l: "CC BY-SA 3.0", ll: [37.42704, -121.979248], y: 2012 },
  { f: "Bayside Cannery in historic Alivso, San Jose 2298.jpg", c: "The old Bayside Canning Co. building in historic Alviso", a: "Cristiano Tomás", l: "CC BY-SA 4.0", ll: [37.428231, -121.979064], y: 2021 },
  { f: "Memorial to Jenny Lind disaster.jpg", c: "Memorial to the 1853 Jenny Lind steamboat disaster at Alviso Marina", a: "LittleT889", l: "CC BY-SA 4.0", ll: [37.430008, -121.980361], y: 2021 },
  { f: "Old Alviso Marina - panoramio.jpg", c: "Marsh and slough at the old Alviso Marina", a: "Noah_Loverbear", l: "CC BY-SA 3.0", ll: [37.430193, -121.979984], y: 2013 },
  { f: "New Alviso Boat Launch - panoramio.jpg", c: "The rebuilt Alviso boat launch on Alviso Slough", a: "Noah_Loverbear", l: "CC BY-SA 3.0", ll: [37.429256, -121.981824], y: 2013 },
  { f: "Alviso, San Jose 1.jpeg", c: "Levee trail leading out from Alviso Marina toward the bay", a: "Vlad Butsky", l: "CC BY 2.0", ll: [37.429928, -121.97975], y: 2008 },
  { f: "Morning Train Passing Alviso Marina Salt Ponds (35994875874).jpg", c: "Morning train crossing beyond the Alviso salt ponds, Mission Peak behind", a: "Don DeBold", l: "CC BY 2.0", ll: [37.431111, -121.981112], y: 2017 },
  { f: "Black-necked Stilts in flight.jpg", c: "Black-necked stilts in flight over Alviso Marina", a: "Don DeBold", l: "CC BY 2.0", ll: [37.430161, -121.983665], y: 2009 },
  { f: "Least sandpiper, Calidris minutilla, at Alviso Marina County Park, Santa Clara, California, USA (30917582121).jpg", c: "Least sandpipers foraging at Alviso Marina County Park", a: "Derek Keats", l: "CC BY 2.0", ll: [37.434686, -121.978762], y: 2016 },
  { f: "Mt Hamilton from Alviso Marina County Park CA Aug 2019.jpg", c: "Mount Hamilton beyond a pink salt pond and Alviso homes", a: "Thomson200", l: "CC0", ll: [37.43, -121.979], approx: true, y: 2019 },
  { f: "Salt ponds, Alviso Marina County Park CA Aug 2019.jpg", c: "Salt-crusted former evaporation pond beside the Alviso trail", a: "Thomson200", l: "CC0", ll: [37.432, -121.979], approx: true, y: 2019 },
  { f: "Alviso Marina County Park CA Aug 2019 3.jpg", c: "Gravel levee trail between marsh and salt ponds near Alviso", a: "Thomson200", l: "CC0", ll: [37.432, -121.979], approx: true, y: 2019 },
  { f: "Bicycle ^ Pedestrian Trail Guadalupe River - panoramio.jpg", c: "Bike and pedestrian path along the Guadalupe River levee at Alviso", a: "Noah_Loverbear", l: "CC BY-SA 3.0", ll: [37.422304, -121.976169], y: 2013 },
  { f: "Guadalupe River strainer at Alviso.jpg", c: "Debris jam on the Guadalupe River at Alviso after a 2021 storm", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.422975, -121.976061], y: 2021 },
  { f: "Restoration work at Don Edwards San Francisco Bay National Wildlife Refuge (5410349567).jpg", c: "Excavator reshaping Pond A6 levees for tidal marsh restoration, 2010", a: "Pacific Southwest Region USFWS", l: "Public domain", ll: [37.45, -121.99], approx: true, y: 2010 },
  { f: "Alviso salt ponds aerial.jpg", c: "Aerial view of salt ponds and former salt ponds around Alviso", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.44, -121.96], approx: true, y: 2018 },
  { f: "The real view of a Jack Rabbit.jpg", c: "Black-tailed jackrabbit in the grasses east of Alviso", a: "Don McCullough", l: "CC BY 2.0", ll: [37.440451, -121.961245], y: 2013 },
  { f: "Close up (9163470378).jpg", c: "American white pelican in flight over the Alviso baylands", a: "Don McCullough", l: "CC BY 2.0", ll: [37.440451, -121.961245], y: 2013 },
  { f: "Coyote Creek under highway 237.jpg", c: "Coyote Creek passing under Hwy 237 near the trail's east end", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.424133, -121.925392], y: 2021 },
];

const OUTCOMES = {
  "2002-06-18": [
    ["Completed", "bad", "No. Of the 11.7 miles on the City's Bay Trail map, 0.96 are open, and most of that is a path along Hwy 237 that the City lists under a neighboring city."],
    ["Budget", "unk", "The plan cost $431,844. No construction estimate for the City's route has been published."],
  ],
  "2005-09-15": [
    ["Completed", "bad", "Mostly not. MTC's layer shows two of the 14 gaps closed (the Hwy 237 trail and the McCarthy Blvd link); the study's 15-year horizon passed in 2020."],
    ["Budget", "unk", "No updated total. MTC's 2024 plan prices San José's remaining gaps in ranges, the largest (3014) at over $25M."],
  ],
  "2010-10-26": [["Progress", "bad", "Sixteen years after its environmental review, the Gold St crossing is still listed as in design, with no construction date or current estimate found."]],
  "2016-12": [
    ["Schedule", "bad", "All flood work was due by January 2023. Reaches 1–3 finished in 2025; Reaches 4–5 are expected between 2035 (Valley Water) and 2038 (Chronicle)."],
    ["Budget", "bad", "$177.2M authorized; $545M by 2021; a $512.5M funding plan in 2026 with $59.4M still unraised."],
  ],
};

const QUOTES = [
  { q: "Alviso is a mini New Orleans. We've created something that we can't walk away from.", who: "John Bourgeois", role: "Wetland ecologist, California Coastal Conservancy", src: "San Jose Inside, 2016", u: "https://www.sanjoseinside.com/news/investigative-reports/how-rising-seas-government-squabbling-turned-climate-change-into-a-local-issue/" },
  { q: "Those existing berms there are not FEMA certified. They're really just the muck from the bay piled on top to create a low barrier", who: "Sunshine Julian", role: "Capital Engineering Manager, Valley Water", src: "CBS San Francisco, 2022", u: "https://www.cbsnews.com/sanfrancisco/news/levee-project-launched-to-protect-flood-prone-south-bay-community-of-alviso/" },
  { q: "All this brown water came rushing in from the side streets. People were running around trying to evacuate. They barricaded everything, but it filled up all the homes and destroyed businesses.", who: "Mark Espinoza", role: "Third-generation Alviso resident, recalling 1983", src: "San Jose Inside, 2016", u: "https://www.sanjoseinside.com/news/investigative-reports/how-rising-seas-government-squabbling-turned-climate-change-into-a-local-issue/" },
  { q: "There are people that show up to our public meetings whose homes have flooded three times in their lifetime.", who: "John Bourgeois", role: "Project manager, South Bay Salt Pond Restoration Project", src: "KQED, 2018", u: "https://www.kqed.org/news/11678417/the-bay-areas-sinking-neighborhood-gets-a-boost" },
  { q: "Nobody knows if it will work. It's a very difficult and complicated eco-system to re-create.", who: "Craig Breon", role: "Executive director, Santa Clara Valley Audubon Society", src: "The Almanac, 2003", u: "https://www.almanacnews.com/morgue/2003/2003_02_19.salt.html" },
  { q: "These ponds are important for migratory birds to stop here for a safe place and introducing hundreds of people to this area is going to scare the birds away", who: "Miguel Marquez", role: "Ranger, Don Edwards San Francisco Bay National Wildlife Refuge", src: "NBC Bay Area, 2023", u: "https://www.nbcbayarea.com/news/local/south-bay/alviso-pink-pond/3363552/" },
  { q: "I remember the floods in the 1960s, 80s, and as recently as 1995. It wasn't just the water, but the damage and fear they brought. This project is more than infrastructure; it's an important step toward peace of mind for our community.", who: "Richard Santos", role: "Valley Water Board Director, District 3", src: "Valley Water, 2025", u: "https://www.valleywater.org/news/milestone-reached-south-san-francisco-bay-shoreline-phase-i-project" },
  { q: "I'm glad because it sucks when it floods. You can lose everything. I'm glad that they're doing that", who: "Letty Solano", role: "Alviso-area resident", src: "CBS San Francisco, 2022", u: "https://www.cbsnews.com/sanfrancisco/news/levee-project-launched-to-protect-flood-prone-south-bay-community-of-alviso/" },
];
