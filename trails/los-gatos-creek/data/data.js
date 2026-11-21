// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Los Gatos Creek Trail explorer.
// Every entry carries at least one source URL. Compiled November 2026.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  osm: "https://www.openstreetmap.org/relation/5335571",
  mp1985: "https://calsj.org/LosGatosCreekTrailMasterPlan-1985.pdf",
  ames2018: "https://wgbackfence.net/LGCT_2018.pdf",
  amesGap: "https://wgbackfence.net/LGCTgap.pdf",
  horii5: "http://www.rhorii.com/BABP/lgcrktr5.htm",
  lgcpMP: "https://web.archive.org/web/20140722201446/https://www.sccgov.org/sites/parks/PlansProjects/Documents/Los-Gatos-Creek/188535lgc_MasterPlan.pdf",
  vasona2012: "https://web.archive.org/web/20140721210437/https://www.sccgov.org/sites/parks/PlansProjects/Documents/Los-Gatos-Creek/2012-11-07-Presentation.pdf",
  vasonaISMND: "https://web.archive.org/web/20191111214641/https://www.sccgov.org/sites/parks/PlansProjects/Documents/Vasona-and-Los-Gatos-Creek/envir-review-los-gatos-creek-trail-irrigation-system.pdf",
  memoBridge2020: "https://legistar.granicus.com/sanjose/attachments/a9afb1b9-e32d-45da-881c-8eefa1e1d656.pdf",
  memoLonusCoe: "https://legistar.granicus.com/sanjose/attachments/16d3e110-258e-4642-8bdb-c08739409fbd.pdf",
  memoThreeCreeks2017: "https://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2674&meta_id=621111",
  cip2016: "https://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2124&meta_id=557564",
  ptf2015: "https://sanjose.granicus.com/MetaViewer.php?view_id=2&clip_id=8154&meta_id=515258",
  ch2m2018: "https://legistar.granicus.com/sanjose/attachments/336b02e8-50d5-458d-9f67-96cb8a9acf7c.pdf",
  google2018: "https://legistar.granicus.com/sanjose/attachments/6d732e0c-ba51-4016-bfc2-56768d21c8e4.pdf",
  dwDA: "https://legistar.granicus.com/sanjose/attachments/0eb2a75e-4aea-49f4-af9e-6c153efe0a4a.pdf",
  dwPlanning: "https://legistar.granicus.com/sanjose/attachments/268a6356-aa92-4cd6-b1ef-2ec5e34ff2a7.pdf",
  trails1819: "https://sanjose.legistar.com/View.ashx?GUID=4EBD45E4-3ED4-4F6C-9103-F91BE00BA19F&ID=7864882&M=F",
  te2021: "https://legistar.granicus.com/sanjose/attachments/5578b5ec-e50b-468b-ad79-b9aff760153b.pdf",
  te2022: "https://legistar.granicus.com/sanjose/attachments/452daa66-eade-47a9-b243-ccbbf5bc4d7d.pdf",
  te2023: "https://legistar.granicus.com/sanjose/attachments/8c1976ed-3e47-4c32-b923-a957d2da70d7.pdf",
  te2024: "https://sanjose.legistar.com/View.ashx?GUID=17F352EB-3082-48D3-BDEF-7231CBF5815D&ID=12828167&M=F",
  te2024pres: "https://legistar.granicus.com/sanjose/attachments/ab32d32a-3751-4302-bf2e-a9bbb1eea122.pdf",
  te2025: "https://legistar.granicus.com/sanjose/attachments/b1c10c5f-2894-4a6d-ac21-3746ffa675e4.pdf",
  te2026: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  te2026F: "https://legistar.granicus.com/sanjose/attachments/51786c83-08e2-4723-826d-878390f8e720.pdf",
  tip2021: "https://mtc.ca.gov/sites/default/files/21-05.pdf",
  envision: "https://www.vta.org/sites/default/files/documents/FINAL%2520BOARD%2520ADOPTED%2520PROJECT%2520LIST.PDF",
  measureB: "https://www.vta.org/sites/default/files/2021-09/ProgramManual_0928.pdf",
  bart4f: "https://www.vta.org/sites/default/files/2022-04/TechRrpts_8Section4f_feb20_2018.pdf",
  vwCleanup2024: "https://s3.us-west-1.amazonaws.com/valleywater.org.us-west-1/s3fs-public/051724%20item%204.2.%20-%20REVISED%20Attachment%201%20-%20Powerpoint.pdf",
  vwBank2017: "https://www.valleywater.org/sites/default/files/Los%20Gatos%20Creek%20Bank%20Repair%20-%20Upstream%20of%20San%20Fernando%20Street.pdf",
  vwVasona: "https://www.valleywater.org/accordion/vasona-dam-and-reservoir",
  vwLexington: "https://www.valleywater.org/accordion/lexington-reservoir-and-lenihan-dam",
  vwLexFacts: "https://assets.valleywater.org/files/Lexington%20Reservoir%20Fact%20Sheet_022719_JA.pdf",
  vw1982: "https://www.valleywater.org/sites/default/files/1982%20Flood%20Report.pdf",
  vw1995: "https://valleywater.org/sites/default/files/1995%20Flood%20Report.pdf",
  vwOrdinance: "https://www.valleywater.org/news/valley-water-board-directors-approves-ordinance-reduce-encampments-along",
  lgDesign2019: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-b0f1b5abec2a4b838108d24d2887936e/ITEM-Attachment-002-4decc373b8c541099830ead75eb6b9f6.pdf",
  lgPrelim2020: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-21e67aee9f1b472a8c5b47e7a3077393/ITEM-Attachment-010-f0180cc39215432a9b7efe282ca3bfd4.pdf",
  lgPrelimPlans: "https://www.losgatosca.gov/DocumentCenter/View/24228/Preliminary-Plans",
  lgBridgeOptions: "https://www.losgatosca.gov/DocumentCenter/View/24227/Bridge-Options-",
  lgFinalPlans: "https://www.losgatosca.gov/DocumentCenter/View/32486/Final-Los-Gatos-Creek-Trail-Trailhead-Plans-2022-12-01",
  lgBids2023: "https://www.losgatosca.gov/DocumentCenter/View/33321/Bid-Results-LGCT-Hwy9-Trailhead-Connector-project",
  lgCIP2023: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-c7c0a52896384be8803dbd22d940a4db/ITEM-Attachment-012-4f6902294e93479cac5adfa369188bcd.pdf",
  lgCloseout2025: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-88d6357a03194ca9bfb4dacf516e8760/ITEM-Attachment-009-678f275299b04342b48429793d2a7d7b.pdf",
  lgHwy9Page: "https://www.losgatosca.gov/2557/Los-Gatos-Creek-Trailhead-Connector-to-H",
  lgOpening2025: "https://www.losgatosca.gov/CivicAlerts.aspx?AID=2719",
  lgTDA2025: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-2c0045f9dee749938cb3c3f591b58edc/ITEM-Attachment-014-ae1da5e4cbe3420ba52615132d9c11ab.pdf",
  lgATP2026: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/losgatos-meet-38433177efc94a699543b79d1415b082/ITEM-Attachment-001-1e0630b5598f45c7b48bede8e985038d.pdf",
  lgBPOC: "https://www.losgatosca.gov/2556/Hwy-17-Bicycle-Pedestrian-Overcrossing",
  lgDetour2024: "https://www.losgatosca.gov/CivicSend/ViewMessage/message/243642",
  lgAnnual0910: "https://www.losgatosca.gov/ArchiveCenter/ViewFile/Item/2163",
  campReso: "https://campbellca.gov/DocumentCenter/View/23725/CC-Resolution-13253---Pruneyard-Creek-Trail-Extension-23-LL",
  campBids: "https://campbellca.gov/DocumentCenter/View/23911/23-LL_bid-summary",
  campAward: "https://www.campbellca.gov/DocumentCenter/View/23910/23-LL_Notice-of-Intent-to-Award",
  campDone: "https://pub-campbell.escribemeetings.com/FileStream.ashx?DocumentId=871",
  campFlood2023: "https://www.campbellca.gov/m/newsflash/Archive/Item/706?arcId=1758",
  campHamilton: "https://www.campbellca.gov/1505/Hamilton-AvenueState-Route-17-Bicycle-Ov",
  midpen2024: "https://www.openspace.org/about/press/midpen-open-space-reaches-major-milestone-highway-17-wildlife-and-trail-crossings",
  vtaSR17: "https://www.vta.org/sites/default/files/2025-01/FS-SR17-ENG-122424.pdf",
  ridge17: "https://ridgetrail.org/highway17/",
  spotlightSweeps: "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/",
  r5plan: "https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2999/2058",
  merc2007: "https://www.mercurynews.com/2007/10/20/los-gatos-creek-trail-opens-new-section-in-san-jose/",
  sjiTrestle: "https://www.sanjoseinside.com/news/after-years-long-preservation-battle-san-jose-finally-tears-down-willow-glen-trestle/",
  coyote: "https://alexstorer.github.io/coyote-creek-trail/",
};

// Extra context attached to reaches (keyed by reach ID: City GIS REACHIDs, or this site's IDs for
// the county and Los Gatos pieces).
const REACH_NOTES = {
  "LGC01": { gap: true, text: "Park Ave to the Guadalupe River (\"Reach 5D/E\"). The creek runs through box culverts under Park Ave and Montgomery St, so the 2008 plan crosses Park Ave at the signal, cuts through private parking lots and needs to buy 170 S. Autumn St, then follows Autumn St to Santa Clara St ($1.26M). VTA estimated $9.2M in 2017 dollars. Most of it is tied to Google's Downtown West agreement, which has been on hold since April 2023.", src: SRC.envision },
  "LGC01A": { gap: true, text: "Santa Clara St to the San Fernando St light-rail line, on the east bank. Shown as \"in design\" in City GIS; the 2006–08 Reach 5 environmental review put the trail here.", src: "https://ceqanet.lci.ca.gov/2006092004" },
  "LGC02": { gap: true, text: "An undercrossing beneath W. San Carlos St and the Caltrain bridge to Park Ave (\"Reach 5B/C\"): 5% ramps, 8 ft of clearance under about 48 trains a day. The 2008 plan priced 5B at $2.40M and 5C, past the fire training center, at $1.84M. Design has sat at 90% since 2019. The City's 2018 construction estimate was $4.68M; regional funding plans list construction money as \"Later.\"", src: SRC.ch2m2018 },
  "LGC03": { text: "San Carlos St (Dupont St stairs) to Auzerais Ave, past Del Monte Park. Built by the adjacent housing developer as a condition of approval (\"Reach 5A\"), probably opened in early 2009. In 2018 the City counted 173 users a day here, against 1,072 at Hamilton Ave in Campbell.", src: SRC.trails1819 },
  "LGC04": { text: "Lonus St to Auzerais Ave, under I-280. Dedicated October 20, 2007; the City spent about 10 years assembling roughly $4M for it.", src: SRC.horii5 },
  "LGC04A": { text: "Bridge link from Gregory St on the east bank. The 1985 master plan proposed a \"bridge crossing to Gregory Street.\"", src: SRC.mp1985 },
  "LGC04-1": { gap: true, text: "A short link from the Lonus St trailhead to the Three Creeks bridge (opened January 2021). In design since 2022; meanwhile riders use 130 ft of Lonus St.", src: SRC.te2022 },
  "LGC05": { gap: true, text: "Lincoln Ave to Meridian Ave, the trail's main gap. Back yards on both banks run to the middle of the creek, and the channel is steep-sided and floods. The 1985 plan gave up and routed the trail onto Willow St and Glen Eyrie Ave. No design, environmental review or cost estimate exists.", src: SRC.mp1985 },
  "LGC05A": { gap: true, text: "A planned 145-ft creek crossing. Advocates have proposed bridges at Avis Dr or Cherry Ave; the City hasn't said which.", src: SRC.amesGap },
  "LGC05B": { gap: true, text: "A planned ramp from Meridian Ave down to Twinbrook Dr. The 1985 plan proposed a Meridian undercrossing on Water District land here; some of the lots next to it are now owned by Valley Water.", src: SRC.amesGap },
  "LGC06": { text: "Leigh Ave to Meridian Ave, reached over a steel bridge from Blackford School. Dedicated June 26, 1999, after Willow Glen neighbors restored the creek bank. A bank collapse near St. Elizabeth Dr closed part of it until the City repaired it (reopened by March 2026). No-encampment zone since early 2025.", src: SRC.horii5 },
  "LGC06A": { text: "Wooden bridge from Elizabeth St to the south bank." },
  "LGC07": { text: "Bascom Ave to Leigh Ave, passing under Leigh Ave. Open before 1999; the exact year isn't on record online. In June 2025 two women were sexually assaulted on this stretch; police arrested a suspect the next day.", src: "https://www.ktvu.com/news/sjpd-catches-man-wanted-2-sex-assaults-popular-trail" },
  "CAM1": { text: "Campbell's stretch from the Bascom Ave undercrossing past the Pruneyard and under Hwy 17 to Campbell Park. Campbell maintains about 3 miles of paved trail, including a 2-mile loop. A spur to E. Campbell Ave behind the Pruneyard was built in 2025–26.", src: "https://www.campbellca.gov/facilities/facility/details/Los-Gatos-Creek-Trail-29" },
  "CAM2": { text: "Campbell Park to San Tomas Expwy / Camden Ave, with paths on both banks. Built in the late 1970s. The east-side path flooded in January 2023.", src: SRC.lgcpMP },
  "CAM-E": { text: "Parallel path on the other bank between Campbell Park and Camden Ave, closed during the January 2023 floods.", src: SRC.campFlood2023 },
  "LGCP": { text: "Los Gatos Creek County Park: percolation ponds made from gravel pits the water district bought in 1957. The park opened in 1967; most of its land is leased from Valley Water.", src: SRC.lgcpMP },
  "VAS1": { text: "From Hwy 85 past Lark Ave to Vasona Lake. The trail ducks under Hwy 85, completed in 1994.", src: "https://en.wikipedia.org/wiki/California_State_Route_85" },
  "LG1": { text: "Through Vasona Lake County Park and Oak Meadow Park, under Blossom Hill Rd and Roberts Rd (bridge rebuilt 2010), to Hwy 9. Valley Water drained Vasona Lake for dam repairs in 2024.", src: SRC.vasonaISMND },
  "LG2": { text: "Hwy 9 to Main St in downtown Los Gatos. A new bridge and switchback ramps at Hwy 9 opened in April 2025 ($9.27M).", src: SRC.lgCloseout2025 },
  "LG3": { text: "Main St past Forbes Mill to the base of Lenihan (Lexington) Dam, mostly gravel on the old Los Gatos–Santa Cruz railbed, ending in a steep climb to Alma Bridge Rd. A planned Hwy 17 trail overcrossing here would link to the Bay Area Ridge Trail.", src: "https://www.traillink.com/trail/los-gatos-creek-trail/" },
};

// Mainline order north → south for the strip diagram (parallel paths & links excluded).
const MAINLINE = ["LGC01","LGC02","LGC03","LGC04","LGC04-1","LGC05","LGC06","LGC07","CAM1","CAM2","LGCP","VAS1","LG1","LG2","LG3"];
// Side routes: which mainline reach each hangs off, and what kind of thing it is.
const PARENT = { LGC01A: "LGC01", LGC04A: "LGC04", LGC05A: "LGC05", LGC05B: "LGC05", LGC06A: "LGC06", "CAM-E": "CAM2" };
const SIDE_KIND = { LGC01A: "Alternate alignment", LGC04A: "Bridge link", LGC05A: "Planned crossing", LGC05B: "Planned ramp", LGC06A: "Bridge link", "CAM-E": "Parallel path" };
const NOT_GAP = [];
const OWNERS = { SCVWD: "Valley Water land", PRNS: "City of San José Parks", SCC: "Santa Clara County Parks", CAMPBELL: "City of Campbell", TOWN: "Town of Los Gatos" };

const INTRO_CAP = "Guadalupe River to Lexington Dam";
const INTRO_MARKS = [
  ["Guadalupe River", [37.3322, -121.8993], "right"], ["Diridon Station", [37.3297, -121.9025], "left"], ["Lincoln Ave", [37.3126, -121.9043], "right"],
  ["Meridian Ave", [37.3073, -121.9137], "left"], ["Campbell", [37.2871, -121.9381], "right"], ["Vasona Lake", [37.2445, -121.9659], "left"],
  ["Los Gatos", [37.2214, -121.9817], "right"], ["Lexington Dam", [37.2016, -121.9880], "right"],
];

const LANDMARKS = [
  { key: true, name: "Guadalupe River confluence", ll: [37.3322, -121.8993] },
  { name: "SAP Center", ll: [37.3327, -121.9010] },
  { key: true, name: "Diridon Station", ll: [37.3297, -121.9025] },
  { name: "Del Monte Park", ll: [37.3210, -121.9041] },
  { name: "Three Creeks bridge (old trestle site)", ll: [37.3150, -121.9037] },
  { key: true, name: "Meridian Ave · trail resumes", ll: [37.3073, -121.9137] },
  { name: "Leigh Ave", ll: [37.2998, -121.9227] },
  { name: "Pruneyard", ll: [37.2900, -121.9330] },
  { key: true, name: "Campbell Park", ll: [37.2871, -121.9381] },
  { name: "Los Gatos Creek County Park", ll: [37.2642, -121.9523] },
  { key: true, name: "Vasona Lake", ll: [37.2445, -121.9659] },
  { name: "Oak Meadow Park", ll: [37.2370, -121.9720] },
  { name: "Hwy 9 trailhead connector", ll: [37.2273, -121.9772] },
  { key: true, name: "Downtown Los Gatos · Forbes Mill", ll: [37.2221, -121.9803] },
  { key: true, name: "Lexington Dam · trail ends", ll: [37.2016, -121.9880] },
];

// Timeline. cat: plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1935", cat: "flood", t: "Vasona Dam built", x: "The water district's percolating dam on Los Gatos Creek, one of six reservoirs voters approved in 1934, creates Vasona Lake. New gates went in in 1997.", s: [["Valley Water", SRC.vwVasona]] },
  { d: "1940", cat: "build", t: "Highway 17 opens; the railroad closes", x: "The new highway over the Santa Cruz Mountains opens and trains stop running through the Los Gatos Creek canyon. The gravel trail south of downtown Los Gatos now follows the old railbed.", s: [["Wikipedia: Los Gatos Creek Trail", "https://en.wikipedia.org/wiki/Los_Gatos_Creek_Trail"], ["Wikipedia: SR 17", "https://en.wikipedia.org/wiki/California_State_Route_17"]] },
  { d: "1952", cat: "flood", t: "Lexington Dam built", x: "A 195-ft earthen dam, paid for with a $2.5 million bond, floods the town of Lexington. The trail's south end is at its base.", s: [["Valley Water fact sheet", SRC.vwLexFacts], ["Valley Water", SRC.vwLexington]] },
  { d: "1957", cat: "flood", t: "Gravel pits become percolation ponds", x: "The water district buys the Oka Lane gravel pits and turns them into groundwater-recharge ponds, today the heart of Los Gatos Creek County Park.", s: [["2002 County Park Master Plan", SRC.lgcpMP]] },
  { d: "1966-03", cat: "plan", t: "County buys land for Los Gatos Creek County Park", x: "After supervisors approve a park plan, the County buys 10.2 acres from the water district. Parking, restrooms and lawn open in 1967 for about $104,000, including a $30,000 federal grant.", s: [["2002 County Park Master Plan", SRC.lgcpMP]] },
  { d: "1974", cat: "plan", t: "Streamside Park Committee forms", x: "County Supervisor Rod Diridon Sr. gathers a citizens' committee from every city along the creek to push for one continuous trail. It meets until 2000.", s: [["Larry Ames, trail history (2018)", SRC.ames2018]] },
  { d: "1974-11", cat: "plan", t: "Creek master plan opens the ponds to the public", x: "The water district adopts \"Los Gatos Creek – A Master Plan for Environmental Development,\" prepared with the Audubon Society. Until then the ponds were a closed recharge site.", s: [["2002 County Park Master Plan", SRC.lgcpMP]] },
  { d: "1978", cat: "build", t: "Campbell builds its trail", x: "The County sets up a committee of all four cities and the water district to coordinate the trail. Campbell builds several trail projects in the late 1970s, plants the ponds and puts up an observation tower.", s: [["2002 County Park Master Plan", SRC.lgcpMP], ["Larry Ames (2018)", SRC.ames2018]] },
  { d: "1982", cat: "flood", t: "1982 storms", x: "January and spring storms drop 11.5 inches at the Lexington gauge in two weeks and flood much of the county.", s: [["Valley Water 1982 flood report", SRC.vw1982]] },
  { d: "1985-12", cat: "plan", t: "San José adopts a trail master plan", x: "The plan covers 3.5 miles from Bascom Ave to the Guadalupe River in five reaches, priced at $2.21M in 1985 dollars. Between Meridian and Lincoln it gives up on the creek: back yards run to mid-stream, so riders go on-street.", s: [["1985 Master Plan (PDF)", SRC.mp1985]] },
  { d: "1993", cat: "fund", t: "Willow Glen neighbors restore the creek bank", x: "Using a $66,500 state urban-stream grant, the Willow Glen Neighborhood Association replants half a mile of bare water-district land. The project helps the City win trail money.", s: [["WGNA project write-up", "https://wgbackfence.net/arcata.htm"]] },
  { d: "1994", cat: "build", t: "Highway 85 crosses the creek", x: "The southern stretch of Hwy 85 opens in pieces between 1991 and 1994; the trail passes under it near Lark Ave. When the trail undercrossing itself opened isn't documented.", s: [["Wikipedia: SR 85", "https://en.wikipedia.org/wiki/California_State_Route_85"]] },
  { d: "1995-01", cat: "flood", t: "1995 floods", x: "Lexington Reservoir rises 28 feet in two days and Vasona spills. Alma Bridge Rd closes, and Campbell reports damage to a pedestrian/bicycle structure.", s: [["Valley Water 1995 flood report", SRC.vw1995]] },
  { d: "1999-06-26", cat: "build", t: "Leigh Ave to Meridian Ave opens", x: "About three-quarters of a mile of trail, reached by a steel bridge from Blackford School, is dedicated. It's built with local, County, state and federal money after 1994 and 1998 environmental reviews.", s: [["Bay Area Back Pages", SRC.horii5], ["CEQA 1998041125", "https://ceqanet.lci.ca.gov/1998041125"]] },
  { d: "2002-10-29", cat: "plan", t: "Master plan for Los Gatos Creek County Park", x: "County Parks, Campbell and the water district plan the 147-acre park. The cost table includes $1.75M to renovate and widen the trail, with no schedule.", s: [["2002 Master Plan (archived PDF)", SRC.lgcpMP]] },
  { d: "2004-05", cat: "plan", t: "Reach 4 plan keeps the Willow Glen trestle", x: "The City approves an environmental document for the trail from Coe Ave to Auzerais Ave that would reuse the 1922 Western Pacific rail trestle over the creek.", s: [["2014 comment letter quoting it", "https://www.wgtrestle.org/3CrksTrail_IS-MND_1st-LLA-comments.pdf"]] },
  { d: "2007-10-20", cat: "build", t: "Lonus St to Auzerais Ave opens under I-280", x: "A half-mile stretch links Willow Glen toward downtown. The City spent 10 years assembling about $4 million for it.", s: [["Mercury News", SRC.merc2007], ["Bay Area Back Pages", SRC.horii5]] },
  { d: "2008-06-17", cat: "plan", t: "Reach 5 Master Plan: the last mile, $5.9M", x: "The Council adopts Callander Associates' plan for Auzerais Ave to Santa Clara St, priced at $5.86M. It drops an undercrossing at Santa Clara St because it would raise flood levels, rejects running the trail through the Park Ave culvert, and, after the CPUC and VTA refuse a path through the San Fernando light-rail station, sends it along Autumn St. The key piece, an undercrossing beneath San Carlos St and the railroad, can't be built until the fire training center moves.", s: [["Reach 5 Master Plan (2008)", SRC.r5plan], ["CEQA 2006092004", "https://ceqanet.lci.ca.gov/2006092004/2"]] },
  { d: "2009-01-29", cat: "build", t: "San Carlos St to Auzerais Ave finished", x: "The Mercury News reports another San José segment finished. The 2008 Reach 5 plan says the stretch from Auzerais Ave to Old San Carlos St was built by the neighboring housing developer as a condition of approval.", s: [["Mercury News (headline)", "https://www.mercurynews.com/2009/01/29/new-segment-of-los-gatos-creek-trail-finished-in-san-jose/"]] },
  { d: "2009-10-20", cat: "flood", t: "Lenihan Dam outlet rebuilt", x: "Valley Water replaces the dam's buckling outlet pipe with a new 2,000-ft tunnel, raising release capacity from 70 to 410 cfs. It cost $39 million.", s: [["Valley Water fact sheet", SRC.vwLexFacts], ["ENR", "https://www.enr.com/articles/33228-lenihan-dam-outlet-modifications"]] },
  { d: "2010-12-21", cat: "build", t: "New Roberts Rd bridge and trail undercrossing", x: "Los Gatos replaces its 1918 Roberts Rd bridge. Art reliefs line the walls where the trail passes underneath.", s: [["Town annual report FY2009/10", SRC.lgAnnual0910]] },
  { d: "2011", cat: "plan", t: "San José buys the Willow Glen trestle", x: "The City acquires the 1922 rail trestle over Los Gatos Creek for the Three Creeks Trail, which will connect at Lonus St.", s: [["San José Inside", SRC.sjiTrestle]] },
  { d: "2012-11-07", cat: "plan", t: "County studies rebuilding the Vasona lakeshore trail", x: "County Parks compares alignments along Vasona Lake. The chosen route is priced at $1.72M with retaining walls or $2.05M with a concrete deck.", s: [["County Parks presentation (archived)", SRC.vasona2012]] },
  { d: "2013-04-11", cat: "flood", t: "Beavers turn up downtown", x: "A beaver family is found where Los Gatos Creek meets the Guadalupe River. Beavers reintroduced at Lexington in 1997 swam all the way down the creek.", s: [["KQED", "https://www.kqed.org/quest/52239/beavers-return-to-san-jose"]] },
  { d: "2013-06-04", cat: "camp", t: "Camps cleared beside Blackford Elementary", x: "San José removes encampments along the creek at Leigh Ave after the school's principal reports fights on the trail.", s: [["Patch", "https://patch.com/california/campbell/homeless-relocation-from-los-gatos-creek-trail-begins-tuesday"]] },
  { d: "2014-05-20", cat: "build", t: "Contract to replace the trestle; a lawsuit stops it", x: "The City signs a $1.63M contract to swap the wooden trestle for a steel bridge. Preservationists sue, and an injunction holds the project up for six years.", s: [["Council memo, Oct 2020", SRC.memoBridge2020]] },
  { d: "2014-06-17", cat: "plan", t: "Diridon plan keeps the creek in", x: "Staff had proposed dropping the plan to free Los Gatos Creek from its culvert near Park Ave. The Council puts creek restoration back and aims to carry the trail to the Guadalupe River Trail.", s: [["Streetsblog SF", "https://sf.streetsblog.org/2014/06/19/san-jose-approves-plans-for-creek-restoration-and-less-traffic"]] },
  { d: "2014-12", cat: "build", t: "Del Monte Park opens beside the trail", x: "A $3.37M park with a dog park along the trail, paid for largely with a state Prop 84 grant. The opening month comes from secondary sources.", s: [["Park Trust Fund report 2015", SRC.ptf2015], ["State grant record", "https://www.parksforcalifornia.org/project/1474/"]] },
  { d: "2016-10-18", cat: "plan", t: "Pruneyard permit requires a trail spur", x: "Campbell's permit for the Pruneyard requires a bike path from the creek trail to E. Campbell Ave through Caltrans land beside Hwy 17.", s: [["Campbell Resolution 13253", SRC.campReso]] },
  { d: "2017-01-10", cat: "flood", t: "Lexington spills; trail closes", x: "Lexington Reservoir fills and spills for the first time since 2011. Parts of the trail in Campbell and Los Gatos close.", s: [["KTVU", "https://www.ktvu.com/news/los-gatos-creek-trail-closed-due-to-reservoir-flood-spillover"], ["ABC7", "https://abc7news.com/weather/creeks-and-dams-overflow-in-los-gatos-during-storm/1698374/"]] },
  { d: "2017-02-20", cat: "flood", t: "The creek takes over the trail", x: "In the Presidents' Day storm, Los Gatos Creek covers the trail completely in places. Valley Water later rock-lines 170 ft of eroded bank near San Fernando St.", s: [["ABC7", "https://abc7news.com/1764844"], ["Valley Water notice", SRC.vwBank2017]] },
  { d: "2017-06-23", cat: "plan", t: "A real entrance at Hwy 9 is proposed", x: "Los Gatos proposes trailhead connectors so people no longer have to \"bootleg\" onto the trail down a dirt slope at Highway 9.", s: [["Mercury News", "https://www.mercurynews.com/2017/06/23/new-trailhead-connectors-proposed-for-los-gatos-creek-trail/"]] },
  { d: "2017-12", cat: "build", t: "Caltrain rebuilds its creek bridge", x: "Caltrain replaces its 1935 bridge over Los Gatos Creek after San José pushed for enough clearance for a future trail undercrossing.", s: [["Caltrain", "https://www.caltrain.com/projects/los-gatos-creek-bridge-replacement"], ["Green Caltrain", "https://www.greencaltrain.com/2016/07/city-of-san-jose-opposes-caltrain-los-gatos-creek-bridge-change-that-will-put-trail-under-water-much-of-winter/"]] },
  { d: "2018-06-19", cat: "fund", t: "San Carlos undercrossing: $1M budgeted, $4.68M needed", x: "A Council memo lists the Reach 5 undercrossing with $1M in the capital budget against a projected $4.68M construction cost.", s: [["Council memo", SRC.ch2m2018]] },
  { d: "2018-12-04", cat: "plan", t: "Google deal includes the creek", x: "San José sells Google land beside the creek near Park Ave. The agreement's goals include access to Los Gatos Creek \"with an emphasis on ecological restoration.\"", s: [["Council memo", SRC.google2018]] },
  { d: "2019-08", cat: "plan", t: "Undercrossing design reaches 90%", x: "With Caltrain's bridge done, design resumes. The last 10% will wait until construction money is found.", s: [["Trail annual report 2018–19", SRC.trails1819]] },
  { d: "2019-10-01", cat: "fund", t: "Los Gatos hires a designer for the Hwy 9 connector", x: "A $486,747 design contract with Mott MacDonald, funded mostly by a $343,000 federal grant.", s: [["Staff report", SRC.lgDesign2019]] },
  { d: "2020-06", cat: "fund", t: "Measure B: $2.59M for a \"gap closure\"", x: "VTA's 10-year bike and pedestrian list fully funds San José's \"Los Gatos Creek Trail Gap Closure.\" Which gap it means isn't stated.", s: [["VTA Measure B manual", SRC.measureB]] },
  { d: "2020-06-22", cat: "build", t: "The trestle comes down", x: "After four Council votes and a seven-year fight, demolition of the 1922 trestle begins. A steel bridge stored in Colorado replaces it.", s: [["San José Inside", SRC.sjiTrestle], ["San José Spotlight", "https://sanjosespotlight.com/how-a-seven-year-fight-to-save-a-san-jose-trestle-ended/"]] },
  { d: "2021-01", cat: "build", t: "Three Creeks bridge opens at Lonus St", x: "The new bridge connects the Three Creeks Trail to the Los Gatos Creek Trail. The contract grew to $2.49M and the project to $3.91M.", s: [["T&E annual update 2021", SRC.te2021], ["Mercury News", "https://www.mercurynews.com/2021/01/06/bridge-replacing-the-willow-glen-trestle-finally-opens-to-the-public-the-end/"]] },
  { d: "2021-05-25", cat: "plan", t: "Council approves Google's Downtown West", x: "The development agreement has Google build two creek-trail segments, a creek park and two connectors, each triggered when certain buildings are approved. The City agrees to seek Valley Water easements.", s: [["Development Agreement (PDF)", SRC.dwDA], ["San José Inside", "https://www.sanjoseinside.com/news/san-jose-city-council-approves-googles-downtown-west-project/"]] },
  { d: "2023-01-09", cat: "flood", t: "Storms flood Campbell's trail", x: "Campbell closes the east-side path from Campbell Park to Camden Ave. A week later Lexington Reservoir crests its spillway again.", s: [["City of Campbell", SRC.campFlood2023], ["NBC Bay Area", "https://www.nbcbayarea.com/news/local/south-bay/south-bay-reservoirs-filled/3131102/"]] },
  { d: "2023-04-21", cat: "plan", t: "Google pauses Downtown West", x: "Construction is put on hold with no restart date. Because the creek-trail obligations are tied to building milestones, they stall too.", s: [["CNBC", "https://www.cnbc.com/2023/04/21/googles-80-acre-san-jose-mega-campus-on-hold-amid-economic-slowdown-.html"], ["Press Democrat, 2026", "https://www.pressdemocrat.com/2026/03/12/google-san-jose-campus-downtown/"]] },
  { d: "2023-06", cat: "fund", t: "Last-minute grant saves the Hwy 9 connector", x: "All five bids come in over budget. Los Gatos adds $2.84M in reallocated federal grants to keep the project alive.", s: [["Mercury News", "https://www.mercurynews.com/2023/06/14/last-minute-funding-saves-los-gatos-creek-trail-connector-project/"], ["Staff report", SRC.lgCIP2023]] },
  { d: "2023-08-01", cat: "build", t: "Hwy 9 connector contract: $6.53M", x: "Granite Construction is awarded the job with a 10% contingency. Ground is broken October 12, 2023.", s: [["Bid results", SRC.lgBids2023], ["Closeout report", SRC.lgCloseout2025]] },
  { d: "2023-08-21", cat: "camp", t: "Nine tons of trash out of the creek", x: "A three-day Valley Water cleanup between Leigh and Bascom avenues hauls out 9 tons.", s: [["San José Inside", "https://www.sanjoseinside.com/news/valley-water-spends-2-4m-to-collect-trash-in-local-waterways/"]] },
  { d: "2024-03", cat: "flood", t: "Vasona Lake drained", x: "Valley Water empties the reservoir for the first time since 2005 to clear debris from the dam and outlet pipes. That fall it replaces a failing retaining wall beside the trail, with a detour.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/vasona-reservoir-los-gatos-drained-repairs/3494386/"], ["Town of Los Gatos", SRC.lgDetour2024]] },
  { d: "2024-04-08", cat: "camp", t: "Encampment fencing at Lonus St and Del Monte Park", x: "San José lists new encampment-deterrent sites on the trail. Valley Water and the City had cleared camps from Bascom to Meridian and San Carlos to Santa Clara that spring.", s: [["T&E presentation", SRC.te2024pres], ["Valley Water update", SRC.vwCleanup2024]] },
  { d: "2024-10-01", cat: "plan", t: "Hwy 17 wildlife and trail crossing clears review", x: "Midpen finishes environmental review for a trail bridge over Hwy 17 near Lexington, linking the creek trail to the Bay Area Ridge Trail. Estimated cost: $39 million.", s: [["Midpen", SRC.midpen2024], ["VTA fact sheet", SRC.vtaSR17]] },
  { d: "2024-11-01", cat: "build", t: "Hwy 9 bridge craned into place", x: "The prefabricated bike and pedestrian bridge is set overnight beside the 1956 Highway 9 bridge.", s: [["Town of Los Gatos", SRC.lgHwy9Page]] },
  { d: "2024-11-26", cat: "camp", t: "Valley Water bans camping on its creek land", x: "Enforcement starts January 2, 2025. Crews sweep Los Gatos Creek between Leigh and Meridian and between Hamilton and Bascom, and post no-encampment zones.", s: [["Valley Water", SRC.vwOrdinance], ["San José Spotlight", SRC.spotlightSweeps]] },
  { d: "2025-04-17", cat: "build", t: "Hwy 9 trailhead connector opens", x: "A new creek bridge, a ramp from University Ave and a switchback on the north side give step-free access at Highway 9. Total project cost: $9.27M.", s: [["Town of Los Gatos", SRC.lgOpening2025], ["Los Gatan", "https://losgatan.com/bike-and-pedestrian-infrastructure-celebrated-in-los-gatos-with-opening-of-hwy-9-bridge/"]] },
  { d: "2025-06-04", cat: "camp", t: "Two assaults near Leigh Ave", x: "Two women are sexually assaulted on the trail between Leigh and Bascom. San José police arrest a suspect the next day.", s: [["KTVU", "https://www.ktvu.com/news/sjpd-catches-man-wanted-2-sex-assaults-popular-trail"], ["Los Gatan", "https://losgatan.com/sjpd-arrests-man-suspected-in-los-gatos-creek-trail-sex-assault/"]] },
  { d: "2025-06-17", cat: "fund", t: "Money banked for a Hwy 17 bike bridge", x: "Los Gatos accepts $2.47M toward a 20-ft-wide bridge over Hwy 17 just south of Blossom Hill Rd, reaching the trail at Roberts Rd.", s: [["Staff report", SRC.lgTDA2025]] },
  { d: "2025-08-16", cat: "camp", t: "E-bike complaints at Vasona", x: "Los Gatos residents complain about teens on high-powered, non-street-legal e-bikes on the trail and in Vasona park. The mayor later writes that most of the danger comes from e-motorcycles.", s: [["San José Spotlight", "https://sanjosespotlight.com/los-gatos-residents-upset-over-reckless-e-bike-riders/"], ["Los Gatan", "https://losgatan.com/mayors-message-the-path-toward-a-safer-e-bike-landscape/"]] },
  { d: "2026-02-03", cat: "plan", t: "Campbell studies a bike bridge at Hamilton Ave", x: "Campbell accepts a feasibility study for a bike crossing of Hwy 17 at Hamilton Ave, near the trail. Next step: a Caltrans project document.", s: [["City of Campbell", SRC.campHamilton]] },
  { d: "2026-03-03", cat: "build", t: "Pruneyard spur finished (reported)", x: "Campbell reportedly accepts the paved path from the trail to E. Campbell Ave. This date comes from a summary of a City document we couldn't open.", s: [["City of Campbell (notice of completion)", SRC.campDone], ["Resolution 13253", SRC.campReso]] },
  { d: "2026-03-23", cat: "flood", t: "Collapsed bank repaired near Meridian", x: "San José repairs bank erosion and reopens the trail between Meridian Ave and St. Elizabeth Dr. Neither the closure date nor the cost is reported.", s: [["T&E annual report 2026", SRC.te2026]] },
  { d: "2026-05-19", cat: "fund", t: "Los Gatos seeks $20M for the Hwy 17 bridge", x: "The Council applies for state and regional grants. The bridge is now estimated at $26.6M for 2028 construction.", s: [["Staff report", SRC.lgATP2026], ["Project page", SRC.lgBPOC]] },
  { d: "2027", cat: "plan", future: true, t: "Hwy 17 trail overcrossing construction", x: "Construction near Lexington is scheduled to start in mid-2027 if about $17M more is found.", s: [["Bay Area Ridge Trail", SRC.ridge17], ["Midpen", SRC.midpen2024]] },
  { d: "2028", cat: "plan", future: true, t: "Hwy 17 bike bridge at Blossom Hill", x: "If the grants come through, construction would start in 2027–28 and take 1½–2 years.", s: [["Town of Los Gatos", SRC.lgBPOC]] },
];

// Completed projects with documented costs. kind labels a project with no trail length.
const PROJECTS = [
  { name: "Lonus St → Auzerais Ave", id: "San José", year: 2007, mi: 0.49, cost: 4.0, contract: null, funding: "About $4M assembled over 10 years; award memo not online", src: SRC.merc2007, note: "Approximate total, 2007 dollars" },
  { name: "Three Creeks bridge at Lonus St", id: "SJ #7232", year: 2021, mi: null, kind: "bridge", cost: 3.906, contract: 2.486, funding: "Subdivision Park Trust Fund", src: SRC.memoBridge2020 },
  { name: "Hwy 9 trailhead connector", id: "Los Gatos", year: 2025, mi: null, kind: "bridge + ramps", cost: 9.267, contract: 6.897, funding: "Federal OBAG $6.5M, air-district TFCA $0.76M, 2016 Measure B $0.69M, Town $1.43M", src: SRC.lgCloseout2025 },
  { name: "Pruneyard spur to E. Campbell Ave", id: "Campbell 23-LL", year: 2026, mi: null, kind: "spur", cost: 0.704, contract: 0.269, funding: "Pruneyard owner $250K, parkland fees $353K, TDA $62K, TFCA $40K", src: SRC.campReso, note: "Budget at award; final cost not published" },
];
// Per-mile estimates and benchmarks shown beside the built projects (not money spent).
const PM_EST = [
  { name: "San Carlos St undercrossing", sub: "City estimate, 2018", mi: 0.27, cost: 4.683, note: "$4.683M construction ÷ 0.27 mi (Reach 5b/c)", src: SRC.ch2m2018 },
  { name: "Reach 5 Master Plan (2008)", sub: "City plan, 2008 $", mi: 1.0, cost: 5.857, note: "$5.86M for the \"mile-long\" Auzerais–Santa Clara segment", src: SRC.r5plan },
  { name: "Park Ave → Santa Clara St", sub: "VTA estimate, 2017 $", mi: 0.56, cost: 9.2, note: "$9.2M ÷ 0.56 mi (Reach 5d, LGC01 + LGC01A)", src: SRC.envision },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects, $28.1M for 3.48 mi", src: SRC.coyote },
];
// Calculator presets ($M per mile).
const PRESETS = [
  { label: "1985 plan, 1985 $", pm: 2.2094 / 3.5 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "Reach 5 plan (2008)", pm: 5.857 / 1.0 },
  { label: "Lonus–Auzerais (2007)", pm: 4.0 / 0.49 },
  { label: "Diridon estimate (2017 $)", pm: 9.2 / 0.56 },
  { label: "San Carlos undercrossing (2018)", pm: 4.683 / 0.27 },
];
const EST_EXTRAS = [];

// Remaining mainline gaps (City GIS, Nov 2026), north → south.
const GAPS = [
  { name: "Park Ave → Guadalupe River", ids: ["LGC01","LGC01A"], mi: 0.44, status: "Planned", hard: "Culverts under Park Ave; tied to Google's paused Downtown West. VTA est. $9.2M (2017 $)" },
  { name: "San Carlos St → Park Ave", ids: ["LGC02"], mi: 0.27, status: "Design", hard: "Undercrossing at 90% design since 2019; City est. $4.68M (2018), unfunded" },
  { name: "Lonus St → Three Creeks bridge", ids: ["LGC04-1"], mi: 0.05, status: "Design", hard: "In design since 2022; 130 ft of Lonus St in the meantime" },
  { name: "Lincoln Ave → Meridian Ave", ids: ["LGC05","LGC05A","LGC05B"], mi: 0.74, status: "Planned", hard: "Private back yards to mid-creek; no design or estimate" },
];

// The headline numbers on the page.
const STATS = ({ gapMi }) => [
  ["10.2 mi", "continuous trail from Lexington Dam north to Meridian Ave in San José"],
  [gapMi.toFixed(1) + " mi", "of mainline gaps left, all in San José: Willow Glen and the Diridon area"],
  ["$9.3M", "for Los Gatos's Hwy 9 trailhead connector, a single bridge and ramps opened in 2025"],
  ["$13.9M", "official estimates for just the two downtown gaps (2017–18). The Willow Glen gap has none."],
];

// Delivery scorecard rows: project, planned finish at award, actually opened, schedule status,
// budget at award, final, budget status, source.
const DELIVERY = [
  ["Three Creeks bridge at Lonus St (San José)", "Dec 2016", "Jan 2021", "bad", "$1.63M contract; $2.95M project", "$2.49M contract (+53%); $3.91M project (+32%)", "bad", SRC.memoBridge2020],
  ["Hwy 9 trailhead connector (Los Gatos)", "End of 2024", "Apr 2025", "warn", "$6.53M contract + 10% contingency", "$6.90M (+5.6%, within contingency); $9.27M project", "warn", SRC.lgCloseout2025],
  ["Pruneyard spur (Campbell)", "Not stated", "2026 (reported)", "unk", "$704K budget; $269K low bid", "Not published", "unk", SRC.campReso],
];

// The City's 1985 estimate, phase by phase. [phase, description, miles, $M, what happened]
const OFFICIAL_EST = {
  head: ["Phase", "Miles", "Estimate (Dec 1985 $)", "What happened"],
  rows: [
    ["I", "Bascom Ave to Leigh Ave area", null, 0.2826, "Built, before 1999"],
    ["IA", "City property improvements on Glen Eyrie Ave", null, 0.0123, "Part of the on-street detour"],
    ["II", "Linear park and school crossing (Leigh–Meridian)", null, 0.6696, "Built 1999"],
    ["IIA", "Trail connection to Meridian Ave", null, 0.2074, "Built 1999"],
    ["III", "Lincoln Ave to Gregory St connection", null, 0.3814, "Lonus–Gregory built 2007; Lincoln–Lonus still on-street"],
    ["IV", "Gregory St crossing to Park Ave", null, 0.3654, "To San Carlos St built 2007–09; San Carlos–Park Ave in design"],
    ["V", "Park Ave to the confluence", null, 0.2907, "Not built"],
  ],
  total: ["3.5", "$2.21M"],
};

const DOCS = [
  { g: "Master plans & studies", items: [
    ["San José Los Gatos Creek Trail Master Plan (1985 scan, 24 MB)", SRC.mp1985],
    ["Master Plan for Los Gatos Creek County Park (2002)", SRC.lgcpMP],
    ["County Parks: Vasona lakeshore trail alternatives (2012)", SRC.vasona2012],
    ["Countywide Trails Master Plan Update (scan)", "https://web.archive.org/web/20140722200613/https://www.sccgov.org/sites/parks/PlansProjects/Documents/TrailsMasterPlan/Entire_Countywide_Trails_Master_Plan_Searchable.pdf"],
    ["VTA Envision Silicon Valley project list (trail cost estimates)", SRC.envision],
    ["Larry Ames: the Los Gatos Creek Trail, a brief history (2018)", SRC.ames2018],
    ["Larry Ames: tour of the Meridian–Lincoln gap (2025)", SRC.amesGap],
  ]},
  { g: "Design plans (schematics)", items: [
    ["Hwy 9 trailhead connector: preliminary plans", SRC.lgPrelimPlans],
    ["Hwy 9 trailhead connector: bridge options", SRC.lgBridgeOptions],
    ["Hwy 9 trailhead connector: final plans, 79 sheets (37 MB)", SRC.lgFinalPlans],
    ["Downtown West Development Agreement, with trail exhibits (large)", SRC.dwDA],
    ["Los Gatos Creek Trail Reach 5 Master Plan (Callander Associates, 2008)", SRC.r5plan],
  ]},
  { g: "Trail & park maps", items: [
    ["County Parks: Los Gatos Creek Trail map, part 1 (north)", "https://web.archive.org/web/20240227233135/https://parks.sccgov.org/sites/g/files/exjcpb961/files/396244los_gatos_creek_part1.pdf"],
    ["County Parks: Los Gatos Creek Trail map, part 2 (south)", "https://web.archive.org/web/20240416083430/https://parks.sccgov.org/sites/g/files/exjcpb961/files/219870los_gatos_creek_part2.pdf"],
    ["County Parks: Los Gatos Creek County Park map", "https://web.archive.org/web/20211209002810/https://parks.sccgov.org/sites/g/files/exjcpb961/files/332563los-gatos.pdf"],
    ["County Parks: Vasona Lake County Park map", "https://web.archive.org/web/20231206221022/https://parks.sccgov.org/sites/g/files/exjcpb961/files/33462vasona.pdf"],
    ["County Parks: Lexington Reservoir guide map", "https://files.santaclaracounty.gov/exjcpb1516/2024-10/lexington-reservoir-guide-map.pdf"],
    ["County Parks: Los Gatos Creek Trail guide map (2024)", "https://files.santaclaracounty.gov/exjcpb1516/2024-11/los-gatos-creek-trail-guide-map.pdf?VersionId=t8_Ck4XKPOtDeSIxyYehmMb0H9qpKp6N"],
    ["Bay Area Ridge Trail: Sierra Azul & Lexington Reservoir", "https://ridgetrail.org/wp-content/uploads/2017/07/2019_SantaClara_SierraAzulandLexingtonReservoir.pdf"],
    ["VTA fact sheet: SR 17 wildlife and trail crossing", SRC.vtaSR17],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: trail at Leigh/Meridian, TDA grant (1994)", "https://ceqanet.lci.ca.gov/1994083014"],
    ["CEQA: Meridian–Leigh, Phase IIA (1998)", "https://ceqanet.lci.ca.gov/1998041125"],
    ["CEQA: Lenihan Dam outlet modifications (2003)", "https://ceqanet.lci.ca.gov/2003022090"],
    ["CEQA: Reach 5, notice of preparation (2006)", "https://ceqanet.lci.ca.gov/2006092004"],
    ["CEQA: Reach 5, Negative Declaration (2008)", "https://ceqanet.lci.ca.gov/2006092004/2"],
    ["CEQA: streambank repair at Glen Eyrie Ave (2010)", "https://ceqanet.lci.ca.gov/2010022022"],
    ["CEQA: Caltrain Los Gatos Creek bridge (2013)", "https://ceqanet.lci.ca.gov/2013082087"],
    ["IS/MND: Vasona trail & irrigation improvements (2017)", SRC.vasonaISMND],
    ["CEQA: Hwy 9 trailhead connector (2021)", "https://ceqanet.lci.ca.gov/2021070376"],
    ["VTA BART Phase II: Section 4(f) report (trail crossings)", SRC.bart4f],
  ]},
  { g: "San José memos & reports", items: [
    ["Park Trust Fund annual report, FY2013–14", SRC.ptf2015],
    ["Capital program status report (Feb 2016)", SRC.cip2016],
    ["Three Creeks Trail award, Lonus link bid alternate (2017)", SRC.memoThreeCreeks2017],
    ["CH2M agreement: undercrossing cost estimate (2018)", SRC.ch2m2018],
    ["Google Diridon MOU and land sales (2018)", SRC.google2018],
    ["Trail program annual report 2018–19", SRC.trails1819],
    ["Three Creeks bridge completion & cost (Oct 2020)", SRC.memoBridge2020],
    ["Three Creeks Lonus–Coe paving (Dec 2020)", SRC.memoLonusCoe],
    ["Downtown West planning memo (2021)", SRC.dwPlanning],
    ["Trail Network annual update (2021)", SRC.te2021],
    ["Trail Network annual report (2022)", SRC.te2022],
    ["Trail Network annual report (2023)", SRC.te2023],
    ["Trail Network annual update (2024)", SRC.te2024],
    ["Trail Network annual report (2025)", SRC.te2025],
    ["Trail Network annual report (2026)", SRC.te2026],
    ["2026 report, Appendix F: maintenance & no-return zones", SRC.te2026F],
  ]},
  { g: "Los Gatos, Campbell & regional records", items: [
    ["Los Gatos: Hwy 9 connector design contract (2019)", SRC.lgDesign2019],
    ["Los Gatos: Hwy 9 connector preliminary design (2020)", SRC.lgPrelim2020],
    ["Los Gatos: Hwy 9 connector bid results (2023)", SRC.lgBids2023],
    ["Los Gatos: capital funding reallocation (June 2023)", SRC.lgCIP2023],
    ["Los Gatos: Hwy 9 connector closeout & final budget (Dec 2025)", SRC.lgCloseout2025],
    ["Los Gatos: TDA funds for Hwy 17 bike bridge (2025)", SRC.lgTDA2025],
    ["Los Gatos: grant applications for Hwy 17 bike bridge (2026)", SRC.lgATP2026],
    ["Campbell: Resolution 13253, Pruneyard spur (2025)", SRC.campReso],
    ["Campbell: Pruneyard spur bid summary (2025)", SRC.campBids],
    ["MTC TIP revision: Reach 5 underpass funding (2021)", SRC.tip2021],
    ["VTA 2016 Measure B program manual (2021)", SRC.measureB],
    ["Valley Water: encampment cleanup update (2024)", SRC.vwCleanup2024],
    ["Valley Water: bank repair upstream of San Fernando St (2017)", SRC.vwBank2017],
    ["Valley Water: Lexington Reservoir fact sheet (2019)", SRC.vwLexFacts],
    ["Valley Water: 1982 flood report", SRC.vw1982],
    ["Valley Water: 1995 flood report", SRC.vw1995],
  ]},
];

const MAPS = [
  { t: "OpenStreetMap route relation", d: "Community-mapped route \"LGC\" (relation 5335571), the source of this site's Los Gatos section.", u: SRC.osm, tag: "Open data" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this site's San José and Campbell lines: every reach with status and length.", u: SRC.gis, tag: "Download" },
  { t: "City GIS: Trail REST service", d: "ArcGIS REST endpoint (layer 538) for live queries.", u: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538", tag: "API" },
  { t: "County Parks: Los Gatos Creek County Park", d: "Hours, access points and guide maps.", u: "https://parks.santaclaracounty.gov/locations/los-gatos-creek-county-park", tag: "Official" },
  { t: "County Parks: Vasona Lake County Park", d: "\"The trail begins at Lexington Reservoir and follows the Los Gatos Creek for nearly 9.5 miles.\"", u: "https://parks.santaclaracounty.gov/locations/vasona-lake-county-park", tag: "Official" },
  { t: "County Parks: closures and alerts", d: "Current detours on the county stretches.", u: "https://parks.santaclaracounty.gov/closures-and-alerts", tag: "Official" },
  { t: "Los Gatos: Hwy 17 bike/ped overcrossing", d: "Location map and rendering of the planned bridge at Blossom Hill Rd.", u: SRC.lgBPOC, tag: "Project" },
  { t: "Midpen: Hwy 17 wildlife and trail crossings", d: "Renderings and timeline for the crossing near Lexington.", u: "https://www.openspace.org/what-we-do/projects/highway-17-wildlife-and-trail-crossings", tag: "Project" },
  { t: "TrailLink", d: "Rails-to-Trails Conservancy guide: 11.9 mi from W. San Carlos St to Alma Bridge Rd.", u: "https://www.traillink.com/trail/los-gatos-creek-trail/", tag: "Guide" },
  { t: "Wikipedia: Los Gatos Creek Trail", d: "Encyclopedia overview, with a mile-by-mile table.", u: "https://en.wikipedia.org/wiki/Los_Gatos_Creek_Trail", tag: "Reference" },
];

const NEWS = [
  ["2007-10-20", "Mercury News", "Los Gatos Creek Trail opens new section in San Jose", "https://www.mercurynews.com/2007/10/20/los-gatos-creek-trail-opens-new-section-in-san-jose/", "A half-mile stretch running along the creek under I-280, linking Willow Glen to the edge of downtown, opened after the city spent 10 years assembling $4 million in funding."],
  ["2009-01-29", "Mercury News", "New segment of Los Gatos Creek Trail finished in San Jose", "https://www.mercurynews.com/2009/01/29/new-segment-of-los-gatos-creek-trail-finished-in-san-jose/", "The paper reported that another new San Jose segment of the trail was finished."],
  ["2011-03-28", "Mercury News", "Storms pound Los Gatos, fill Lexington, Vasona", "https://www.mercurynews.com/2011/03/28/storms-pound-los-gatos-fill-lexington-vasona/", "March 2011 storms filled both Lexington and Vasona reservoirs, the two Los Gatos Creek reservoirs at the trail's south end."],
  ["2011-11-01", "Mercury News", "Wanderlust: Following Los Gatos Creek", "https://www.mercurynews.com/2011/11/01/wanderlust-following-los-gatos-creek/", "A travel feature follows the creek's 24-mile route from the Santa Cruz Mountains through Los Gatos, Campbell and San Jose, where it links several parks, three reservoirs and many ponds."],
  ["2012-01-12", "Silicon Valley Cyclist (Ray Hosler)", "Trail Work Moves Ahead in South Bay", "https://rayhosler.wordpress.com/2012/01/12/trail-work-moves-ahead-in-south-bay/", "San Jose had bought land from Union Pacific for the 3 Creeks Trail, giving it \"the land needed to build a trail linking Los Gatos Creek Trail with Guadalupe River Trail.\""],
  ["2013-04-11", "KQED (Quest)", "Beavers Return to San Jose", "https://www.kqed.org/quest/52239/beavers-return-to-san-jose", "A beaver family was found where Los Gatos Creek meets the Guadalupe River. Beavers had been reintroduced at Lexington Reservoir in 1997, and these ones swam down Los Gatos Creek to get there."],
  ["2013-04-25", "Mercury News", "San Jose Council votes to demolish wooden trestle, but bridge now the target of a preservation movement", "https://www.mercurynews.com/2013/04/25/san-jose-council-votes-to-demolish-wooden-trestle-but-bridge-now-the-target-of-a-preservation-movement/", "The council voted to replace the Willow Glen railroad trestle over Los Gatos Creek, which set off a preservation fight."],
  ["2013-06-04", "Patch (Campbell)", "Homeless Relocation From Los Gatos Creek Trail Begins Tuesday", "https://patch.com/california/campbell/homeless-relocation-from-los-gatos-creek-trail-begins-tuesday", "San Jose began removing encampments along the creek beside Blackford Elementary at Leigh Avenue after giving 72 hours' notice. The school's principal had reported fights on the trail next to the school."],
  ["2013-07-15", "Mercury News", "Los Gatos shorts: Patrols increasing on creek trail", "https://www.mercurynews.com/2013/07/15/los-gatos-shorts-patrols-increasing-on-creek-trail/", "A Los Gatos news brief announced more patrols on the creek trail."],
  ["2013-07-25", "San Jose Inside", "Trails of the City: Great and Growing", "https://www.sanjoseinside.com/opinion/7_25_13_san_jose_trails_guadalupe_los_gatos/", "A column on San Jose's 54 miles of trails says the Los Gatos Creek Trail ends at Meridian Avenue and that USA Today had named it one of the nation's best trails."],
  ["2014-06-16", "Streetsblog San Francisco", "San Jose Diridon Area Plan Could Add Parking, Lose Trail, Pass Council Tues.", "https://sf.streetsblog.org/2014/06/16/diridon-plan-may-gain-parking-and-lose-creek-trail-restoration", "City staff proposed dropping the plan to daylight Los Gatos Creek, which runs through a culvert under Montgomery Street and Park Avenue. Staff cited cost and the 2008 Los Gatos Creek Trail Reach 5 Master Plan."],
  ["2014-06-19", "Streetsblog San Francisco", "San Jose Approves Diridon Plan, With Creek Restoration and Reduced Traffic", "https://sf.streetsblog.org/2014/06/19/san-jose-approves-plans-for-creek-restoration-and-less-traffic", "The council unanimously approved Sam Liccardo's motion to keep Los Gatos Creek restoration in the Diridon Station Area Plan. The goal is to carry the trail to the Guadalupe River Trail north of Santa Clara Street."],
  ["2015-05-20", "Mercury News", "Willow Glen trestle: San Jose City Council votes for razing despite residents' pleas", "https://www.mercurynews.com/2015/05/20/willow-glen-trestle-san-jose-city-council-votes-for-razing-despite-residents-pleas/", "The council voted 7-2, its fourth such vote, to replace the trestle with a steel bridge. The city had already put $1 million into the bridge, and $1.8 million in grants could expire if the project stalled."],
  ["2016-10-26", "Mercury News", "More garbage, homeless camps reported along Los Gatos Creek", "https://www.mercurynews.com/2016/10/26/more-garbage-homeless-camps-reported-along-los-gatos-creek/", "South Bay Clean Creeks Coalition volunteers reported more encampments along the creek in San Jose's District 6, and more trash since game wardens stopped patrolling the area."],
  ["2017-01-10", "KTVU", "Los Gatos Creek Trail closed due to reservoir flood spillover", "https://www.ktvu.com/news/los-gatos-creek-trail-closed-due-to-reservoir-flood-spillover", "Parts of the trail in Campbell and Los Gatos closed after Lexington Reservoir reached capacity and spilled into the creek, its first time that full since 2011."],
  ["2017-01-12", "ABC7 News (KGO)", "Creeks and dams overflow in Los Gatos during storm", "https://abc7news.com/weather/creeks-and-dams-overflow-in-los-gatos-during-storm/1698374/", "Lexington overflowed about a foot and a half above its spillway, and water poured over the Vasona Dam spillway. Rangers closed flooded parts of Vasona park."],
  ["2017-02-12", "Mercury News", "VIDEO: Follow the flow as Lexington Reservoir spills over", "https://www.mercurynews.com/2017/02/12/video-follow-the-flow-as-lexington-reservoir-spills-over/", "A video piece follows water spilling from Lexington Reservoir down Los Gatos Creek during the wet winter of 2017."],
  ["2017-02-21", "ABC7 News (KGO)", "South Bay slammed by storm, Los Gatos Creek takes over", "https://abc7news.com/1764844", "The Feb. 20 storm left Los Gatos Creek covering the trail completely, and residents along the trail prepared for possible overflow."],
  ["2017-02-21", "Mercury News", "Campbell: Los Gatos Creek Trail to see new workout stations", "https://www.mercurynews.com/2017/02/21/campbell-los-gatos-creek-trail-to-see-new-workout-stations/", "The Campbell Parks and Recreation Foundation planned to install nine privately funded workout stations (about $15,000) on the Campbell Park loop on March 3-4, replacing 18 old wooden structures."],
  ["2017-06-23", "Mercury News", "New trailhead connectors proposed for Los Gatos Creek Trail", "https://www.mercurynews.com/2017/06/23/new-trailhead-connectors-proposed-for-los-gatos-creek-trail/", "A proposal would mean trail users no longer have to 'bootleg' onto the trail at Highway 9. This was the start of the Highway 9 Trailhead Connector."],
  ["2017-08-01", "SFGATE", "Second beaver family in 150 years makes Los Gatos Creek home", "https://www.sfgate.com/local/article/Beavers-making-a-comeback-in-Los-Gatos-Creek-11725571.php", "Trail cameras caught a beaver building a dam in Los Gatos Creek. The coalition's director credited cleared encampments and the 180 tons of trash it had removed from local waterways."],
  ["2017-08-08", "Mercury News", "New mural on Los Gatos Creek Trail highlights local wildlife", "https://www.mercurynews.com/2017/08/08/new-mural-on-los-gatos-creek-trail-celebrates-local-wildlife/", "The South Bay Clean Creeks Coalition and local artists painted a wildlife mural in the Leigh Avenue underpass in Willow Glen."],
  ["2019-08-22", "San Jose Spotlight", "Google unveils framework for San Jose Diridon Station area", "https://sanjosespotlight.com/google-unveils-framework-for-san-jose-diridon-station-area/", "Google's early Diridon framework included about 15 acres of parks and green space, plus extended creek trails and greenways along the Guadalupe River and Los Gatos Creek."],
  ["2020-03-22", "Mercury News", "Coronavirus shutdown fills Bay Area trails with clueless exercisers: Roadshow", "https://www.mercurynews.com/2020/03/22/coronavirus-shutdown-shows-that-good-road-rules-need-to-apply-to-bike-trails-roadshow/", "A cyclist described the trail on the first day of shelter-in-place as busy while the roads were quiet, with near-misses such as groups walking four abreast near the Vasona Dam."],
  ["2020-06-22", "San Jose Inside", "After Years-Long Preservation Battle, San Jose Finally Tears Down Willow Glen Trestle", "https://www.sanjoseinside.com/news/after-years-long-preservation-battle-san-jose-finally-tears-down-willow-glen-trestle/", "Demolition began on the trestle, built in 1922 for the Western Pacific Railroad and acquired by the city in 2011, to make way for a pedestrian bridge on the Three Creeks Trail."],
  ["2020-06-27", "San Jose Spotlight", "How a seven year fight to save a San Jose trestle ended", "https://sanjosespotlight.com/how-a-seven-year-fight-to-save-a-san-jose-trestle-ended/", "A steel bridge stored in Colorado was set to replace the nearly 100-year-old trestle over Los Gatos Creek. Councilmember Dev Davis said it would be connected by fall."],
  ["2020-08-29", "Mercury News", "Willow Glen trestle saga really ends with new bridge's installation", "https://www.mercurynews.com/2020/08/29/willow-glen-trestle-saga-really-ends-with-new-bridges-installation/", "Installation of the new steel bridge over Los Gatos Creek began after a preservation battle of more than six years."],
  ["2021-01-06", "Mercury News", "Goodbye, Willow Glen Trestle: New pedestrian bridge finally opens to the public.", "https://www.mercurynews.com/2021/01/06/bridge-replacing-the-willow-glen-trestle-finally-opens-to-the-public-the-end/", "The steel bridge that replaced the Willow Glen Trestle opened, connecting the Three Creeks Trail with the Los Gatos Creek Trail."],
  ["2021-08-08", "Mercury News", "Residents worry about litter along Los Gatos Creek", "https://www.mercurynews.com/2021/08/08/residents-worry-about-litter-along-los-gatos-creek/", "Residents reported a rise in trash along the Campbell stretch of the trail. One longtime user, a teacher, said he recently found bullet casings on the trail."],
  ["2022-03-13", "Mercury News", "Early spring causes overgrowth on Los Gatos Creek Trail", "https://www.mercurynews.com/2022/03/13/early-spring-causes-overgrowth-on-los-gatos-creek-trail/", "Early spring weather made vegetation along the trail in Los Gatos grow sooner than usual, causing early overgrowth."],
  ["2023-06-14", "Mercury News", "Last-minute funding saves Los Gatos Creek Trail connector project", "https://www.mercurynews.com/2023/06/14/last-minute-funding-saves-los-gatos-creek-trail-connector-project/", "Los Gatos received a reallocated $2.8 million VTA grant that kept the Highway 9 trailhead connector project alive."],
  ["2023-09-01", "San Jose Inside", "Valley Water Spends $2.4M to Collect Trash in Local Waterways", "https://www.sanjoseinside.com/news/valley-water-spends-2-4m-to-collect-trash-in-local-waterways/", "A three-day Valley Water cleanup on Los Gatos Creek, starting Aug. 21 between 'Lee' (likely Leigh) and Bascom avenues, collected 9 tons of trash."],
  ["2024-02-24", "San Jose Spotlight", "'A step in the right direction': Los Gatos places homeless residents in hotels", "https://sanjosespotlight.com/a-step-in-the-right-direction-los-gatos-places-homeless-residents-in-hotels/", "Los Gatos began offering unhoused residents hotel rooms during extreme weather. The story profiles Ron Hilla, a 65-year-old who lives on the Los Gatos Creek Trail."],
  ["2024-05-15", "Los Gatan", "Volunteers gather for Los Gatos Creek Trail cleanup", "https://losgatan.com/volunteers-gather-for-los-gatos-creek-trail-cleanup/", "Los Gatos Kiwanis and the Los Gatos High School Key Club held a volunteer trail cleanup starting from Old Forbes Mill."],
  ["2024-10-27", "Mercury News", "Los Gatos Creek trail detours in place this fall", "https://www.mercurynews.com/2024/10/27/los-gatos-creek-trail-detours-in-place-this-fall/", "Detours were set up on the trail while Valley Water repaired the Vasona Dam."],
  ["2025-02-06", "San Jose Spotlight", "Silicon Valley water agency flops on outreach ahead of sweeps", "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/", "Under its November 2024 ban on camping along 333 miles of its waterways, Valley Water cleared encampments on Los Gatos Creek between Leigh and Meridian avenues and between Hamilton and Bascom avenues in Campbell, before its promised outreach had started."],
  ["2025-04-18", "Mercury News", "Los Gatos Trailhead Connector Bridge opening was 20 years in the making", "https://www.mercurynews.com/2025/04/18/los-gatos-trailhead-connector-bridge-opening-was-20-years-in-the-making/", "Public works director Nicolle Burnham said nearly 20 years of planning and design led to Thursday's ribbon-cutting for the Highway 9 connector bridge."],
  ["2025-04-24", "Los Gatan", "Highway 9 Bridge Opens for Bikes and Pedestrians", "https://losgatan.com/bike-and-pedestrian-infrastructure-celebrated-in-los-gatos-with-opening-of-hwy-9-bridge/", "A prefabricated, ADA-compliant bike and pedestrian bridge was dedicated beside the 1956 Highway 9 bridge, giving step-free trail access from both sides of the creek."],
  ["2025-06-05", "KTVU", "SJPD catches man wanted for 2 sex assaults on popular trail", "https://www.ktvu.com/news/sjpd-catches-man-wanted-2-sex-assaults-popular-trail", "San Jose police arrested a suspect in two sexual assaults on the trail between Leigh and Bascom avenues, after two days of searching."],
  ["2025-06-10", "Mercury News", "Husband and wife clean Los Gatos Creek Trail on daily walks", "https://www.mercurynews.com/2025/06/10/husband-and-wife-clean-los-gatos-creek-trail-on-daily-walks/", "For about 18 months, Sue and Darrell Kupka had picked up one or two grocery bags of trash a day on their Oak Meadow Drive to Lark Avenue loop."],
  ["2025-06-11", "Los Gatan", "SJPD arrests man suspected in Los Gatos Creek Trail sex assault", "https://losgatan.com/sjpd-arrests-man-suspected-in-los-gatos-creek-trail-sex-assault/", "Police arrested 21-year-old Pablo Chan near Leigh Avenue and De Rose Way on June 5 for attacks on the trail the morning of June 4."],
  ["2025-08-16", "San Jose Spotlight", "Los Gatos residents upset over reckless e-bike riders", "https://sanjosespotlight.com/los-gatos-residents-upset-over-reckless-e-bike-riders/", "Vice Mayor Rob Moore held a meeting on teens riding high-powered, non-street-legal e-bikes (motors over 750 watts). Residents had posted video of riders harassing geese at Vasona Park."],
  ["2026-03-19", "Los Gatan", "Mayor's Message: The path toward a safer e-bike landscape", "https://losgatan.com/mayors-message-the-path-toward-a-safer-e-bike-landscape/", "Mayor Rob Moore wrote that most dangerous riding involves e-motorcycles that can top 60 mph, not legal Class 1-3 e-bikes. The same column ran in the Mercury News on 2026-03-17."],
  ["2026-07-01", "Mercury News", "Despite e-bike safety risks, enforcement remains challenging", "https://www.mercurynews.com/2026/07/01/despite-e-bike-safety-risks-enforcement-remains-challenging/", "Rising e-bike crashes in Santa Clara County are creating problems for police, pedestrians and riders."],
  ["2026-10-18", "Mercury News", "After devastating flooding almost a decade ago, is San Jose prepared for a 'Super El Niño?'", "https://www.mercurynews.com/2026/10/18/after-devastating-flooding-almost-a-decade-ago-is-san-jose-prepared-for-a-super-el-nino/", "With a possible record winter ahead, officials are working to shore up creeks and tighten emergency response, nearly a decade after the 2017 floods."],
  ["2016-07-07", "Green Caltrain", "City of San Jose opposes Caltrain Los Gatos Creek bridge change that will put trail under water much of winter", "https://www.greencaltrain.com/2016/07/city-of-san-jose-opposes-caltrain-los-gatos-creek-bridge-change-that-will-put-trail-under-water-much-of-winter/", "A lower undercrossing would flood about 14 days in a typical winter."],
  ["2023-04-21", "CNBC", "Google's 80-acre San Jose mega campus on hold amid economic slowdown", "https://www.cnbc.com/2023/04/21/googles-80-acre-san-jose-mega-campus-on-hold-amid-economic-slowdown-.html", "Downtown West, which carries the creek-trail commitments, is paused."],
];

// Photos from Wikimedia Commons. ll = camera location from the file's geotag ("approx" = placed by subject).
const PHOTOS = [
  {"f": "LosGatosCreekTrailHikersOct07.JPG", "c": "Hikers on the gravel trail in the hills above downtown Los Gatos", "a": "Elf", "l": "CC BY-SA 4.0", "ll": [37.215, -121.981], "approx": true, "y": 2007},
  {"f": "LosGatosCreekTrailAndWaterPipeOct07.JPG", "c": "Trail beside the big water pipeline below Lexington Dam, Los Gatos", "a": "Elf", "l": "CC BY-SA 4.0", "ll": [37.211, -121.983], "approx": true, "y": 2007},
  {"f": "LexingtonReservoirLenihanDam.jpg", "c": "Lenihan Dam and Lexington Reservoir, the trail's southern end", "a": "Elf", "l": "CC BY-SA 3.0", "ll": [37.202954, -121.984077], "y": 2007},
  {"f": "Lexington Reservoice.jpg", "c": "Lexington Reservoir on Los Gatos Creek, ringed by Santa Cruz Mountains forest", "a": "Rammenon1999", "l": "CC BY-SA 4.0", "ll": [37.197, -121.988], "approx": true, "y": 2019},
  {"f": "Forbes Mill Front.jpg", "c": "Historic Forbes Mill (1854) beside the trail in downtown Los Gatos", "a": "Martin Worsham", "l": "CC BY-SA 4.0", "ll": [37.222103, -121.980337], "y": 2019},
  {"f": "Vasona Reservoir - panoramio (1).jpg", "c": "Golden-hour view across Vasona Lake framed by reeds, Los Gatos", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.246497, -121.9644], "y": 2014},
  {"f": "Vasona Reservoir - panoramio.jpg", "c": "Evening light on Vasona Lake with the foothills beyond", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.24664, -121.96466], "y": 2014},
  {"f": "Beautiful landscape, Vasona Lake (48640329701).jpg", "c": "Storm clouds over the wide water of Vasona Lake", "a": "bluesbby from Mountain View, USA", "l": "CC BY 2.0", "ll": [37.243, -121.966], "approx": true, "y": 2019},
  {"f": "Vasona Bridge (34548761725).jpg", "c": "Red arched footbridge over the creek inlet at Vasona Lake", "a": "bluesbby from Mountain View, USA", "l": "CC BY 2.0", "ll": [37.2385, -121.97], "approx": true, "y": 2017},
  {"f": "Tree island in the lake (49452234787).jpg", "c": "Tree-covered island, a bird roost, in Vasona Lake", "a": "bluesbby from Mountain View, USA", "l": "CC BY 2.0", "ll": [37.243, -121.967], "approx": true, "y": 2020},
  {"f": "Los Gatos Creek - panoramio.jpg", "c": "Los Gatos Creek in late light by the Campbell percolation ponds", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.271894, -121.948657], "y": 2014},
  {"f": "Camden Ponds in Los Gatos Creek County Park - panoramio.jpg", "c": "Islands in the percolation ponds at Los Gatos Creek County Park", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.26866, -121.95093], "y": 2014},
  {"f": "Los Gatos Creek County Park - panoramio.jpg", "c": "Canada geese and goslings on the path by the ponds, Campbell", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.26866, -121.94991], "y": 2014},
  {"f": "Bridge over Los Gatos Creek - panoramio.jpg", "c": "Trail users crossing a covered bridge over the creek in Campbell", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.27264, -121.947974], "y": 2014},
  {"f": "Los Gatos Creek Trail 2.jpg", "c": "Paved trail along the creek under a big sky, south of Campbell Ave", "a": "Grendelkhan", "l": "CC BY-SA 4.0", "ll": [37.277925, -121.946408], "y": 2020},
  {"f": "Los Gatos Creek Trail (Campbell, California).jpg", "c": "Pink blossoms beside the paved trail in Campbell in spring", "a": "roarofthefour", "l": "CC BY-SA 2.0", "ll": [37.28, -121.944], "approx": true, "y": 2008},
  {"f": "Branta canadensis family by the side of Los Gatos Creek Trail.jpg", "c": "Goose family walking the trail edge near Campbell Park", "a": "Grendelkhan", "l": "CC BY-SA 4.0", "ll": [37.285214, -121.938992], "y": 2023},
  {"f": "Campbell Park from the air looking South.jpg", "c": "Aerial of Campbell Park, where the trail meets downtown Campbell", "a": "Grendelkhan", "l": "CC BY-SA 4.0", "ll": [37.287694, -121.938675], "y": 2024},
  {"f": "Footpath near Los Gatos Creek Trail 2.jpg", "c": "Grassy dirt footpath beside the trail on the Campbell-San Jose edge", "a": "Grendelkhan", "l": "CC BY-SA 4.0", "ll": [37.297819, -121.92825], "y": 2020},
  {"f": "ThreeCreeksTrail TrestleBridge.JPG", "c": "Old wooden rail trestle over Los Gatos Creek in Willow Glen", "a": "Peterpj77", "l": "CC BY-SA 3.0", "ll": [37.314683, -121.903672], "y": 2014},
  {"f": "North end of the Los Gatos Creek Trail.jpg", "c": "Trail's northern segment ends near San Carlos St in Midtown San Jose", "a": "mliu92", "l": "CC BY-SA 2.0", "ll": [37.323642, -121.902875], "y": 2022},
  {"f": "San Carlos St Overpass.jpg", "c": "San Carlos St overpass and stairs at the trail gap near Diridon", "a": "mliu92", "l": "CC BY-SA 2.0", "ll": [37.323642, -121.902875], "y": 2022},
  {"f": "Del Monte Park in Midtown San Jose.jpg", "c": "Del Monte Park beside Los Gatos Creek in Midtown San Jose", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.321022, -121.904114], "y": 2021},
  {"f": "New urbano-ism - panoramio.jpg", "c": "Guadalupe River near the Los Gatos Creek confluence, downtown San Jose", "a": "Scott Thompson", "l": "CC BY 3.0", "ll": [37.332682, -121.898246], "y": 2013},
  {"f": "Chinook salmon leaping Los Gatos Creek 2018-12 Mike Tamaro.jpg", "c": "Chinook salmon leaping a barrier on Los Gatos Creek", "a": "Schmiebel", "l": "CC BY-SA 4.0", "ll": null, "y": 2018},
];

// Scorecards: did it get done, on time, on budget? Keyed by TIMELINE date.
// s: good | warn | bad | unk (not reported) | pend (still in progress)
const OUTCOMES = {
  "1985-12": [
    ["Completed", "warn", "Partly. Bascom–Meridian was built by 1999 and Lonus–San Carlos by 2009. Meridian–Lincoln and Park Ave–Guadalupe are still unbuilt, 41 years later."],
    ["Budget", "unk", "$2.21M in 1985 dollars. No total of what was actually spent has been published."],
  ],
  "2002-10-29": [
    ["Completed", "unk", "The $1.75M trail renovation had no schedule, and no record shows it was carried out as a project."],
  ],
  "2008-06-17": [
    ["Completed", "bad", "Not built. The plan assumed construction in 2012–14. The San Carlos undercrossing reached 90% design in 2019 and is unfunded; Park Ave to Santa Clara St hasn't been designed."],
    ["Budget", "warn", "$5.86M in 2008 dollars for the whole mile. By 2017–18 the City and VTA put the undercrossing alone at $4.68M and Park Ave–Santa Clara St at $9.2M."],
  ],
  "2012-11-07": [
    ["Budget", "warn", "Both priced options came in over the $1.694M budget."],
    ["Completed", "unk", "A 2017 environmental review covered the rebuild, but whether and when it was built, and at what cost, isn't published."],
  ],
  "2014-05-20": [
    ["Completed", "good", "Yes: the bridge opened in January 2021."],
    ["Schedule", "bad", "About four years late. The City planned it for December 2016; the lawsuit over the trestle held it up."],
    ["Budget", "bad", "Over. The contract grew from $1.63M to $2.49M (+53%), and the project from a $2.95M baseline to $3.91M (+32%)."],
  ],
  "2016-10-18": [
    ["Completed", "warn", "Reportedly finished in 2026, about 9½ years after the permit required it. Caltrans approval didn't come until 2023–24."],
  ],
  "2018-06-19": [
    ["Progress", "pend", "Still unfunded in 2026. The regional funding plan lists construction money as \"Later.\""],
  ],
  "2020-06": [
    ["Progress", "unk", "No City or VTA document we found says which gap this money is for, or what it has paid for."],
  ],
  "2021-05-25": [
    ["Progress", "bad", "Stalled. Google paused Downtown West in April 2023, and the trail segments are tied to its building milestones."],
  ],
  "2023-08-01": [
    ["Completed", "good", "Yes: construction finished April 5, 2025; ribbon cutting April 17."],
    ["Schedule", "warn", "About 3–4 months late against the end-of-2024 plan. Winter weather slowed work and the bridge lift slipped from September to November 2024."],
    ["Budget", "warn", "Granite's final bill was $6.90M: 5.6% over the contract but inside its 10% contingency, and about 20% above the February 2022 construction estimate (~$5.8M). The total project came to $9.27M."],
  ],
  "2024-10-01": [
    ["Progress", "pend", "Construction is planned for mid-2027 if the remaining funding (about $17M) is found."],
  ],
  "2026-05-19": [
    ["Progress", "pend", "Grant decisions are expected in 2027. The estimate has grown from a preliminary $17–20M construction contract to a $26.6M project."],
  ],
};

// Pull quotes, verbatim from the cited articles.
const QUOTES = [
  { q: "The Los Gatos Creek is the most urban waterway in Santa Clara County.", who: "Steve Holmes", role: "executive director, South Bay Clean Creeks Coalition", src: "SFGATE, 2017", u: "https://www.sfgate.com/local/article/Beavers-making-a-comeback-in-Los-Gatos-Creek-11725571.php" },
  { q: "This is our chance to right a wrong from half a century ago, when the creek was buried beneath the roadway to create a fast right-hand turn lane.", who: "Larry Ames", role: "trails advocate", src: "Streetsblog San Francisco, 2014", u: "https://sf.streetsblog.org/2014/06/19/san-jose-approves-plans-for-creek-restoration-and-less-traffic" },
  { q: "I mean, there was this little dirt trail, right?, that we used to scamper down. So, I thought maybe they'd make it a little wider and a little less steep. But you know, just look what we have today.", who: "Thomas Cook", role: "Los Gatos resident who pushed for the Highway 9 entrance", src: "Los Gatan, 2025", u: "https://losgatan.com/bike-and-pedestrian-infrastructure-celebrated-in-los-gatos-with-opening-of-hwy-9-bridge/" },
  { q: "I've seen a great blue heron out in the creek.", who: "Mark Fisher", role: "teacher who has used the trail for more than 40 years", src: "Mercury News, 2021", u: "https://www.mercurynews.com/2021/08/08/residents-worry-about-litter-along-los-gatos-creek/" },
];
const CAT_LABELS = { flood: "Creek, dams & floods" };
