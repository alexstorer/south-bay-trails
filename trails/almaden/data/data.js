// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Los Alamitos & Guadalupe Creek Trails page (Almaden Valley).
// Every entry carries at least one source URL.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  gisQuery: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538/query?where=NAME+IN+%28%27Los+Alamitos+Creek%27%2C%27Guadalupe+Creek%27%29&outFields=REACHID%2CREACHNAME%2CDEVELOPMENTSTATUS%2CLENGTHMI%2COWNERLAND%2CDATEOPENED&returnGeometry=false&f=json",
  alip: "https://web.archive.org/web/20260609184216/https://www.valleywater.org/project-updates/almaden-lake-improvement-project",
  deir: "https://assets.valleywater.org/files/Almaden_Lake_Improvement_DEIR.pdf",
  nod: "https://assets.valleywater.org/files/Almaden_Lake_Improvement_Project_NOD.docx.pdf",
  shell: "https://assets.valleywater.org/files/Almaden%20Lake%20Shell_booklet_011420_EC.pdf",
  ppt2020: "https://assets.valleywater.org/files/AlmadenLakeImprovementProjectDEIR_PPJan2020PDF.pdf",
  fish: "https://assets.valleywater.org/files/Alamitos_Mason%20Fishaway%20Report%202003.pdf",
  cip22: "https://assets.valleywater.org/files/2021-03/CIP_Tab-04_021221_BA.pdf",
  cipsum: "https://scvwd.legistar.com/View.ashx?GUID=BCAEB630-22DB-4569-ADB4-14C789F260B9&ID=12563371&M=F",
  vw7801: "https://webapi.legistar.com/v1/scvwd/matters/7801/texts/9164",
  vw7801ppt: "https://scvwd.legistar1.com/scvwd/attachments/5d6987f4-2727-483d-b877-45b0c09a2bd5.pdf",
  vw10187: "https://webapi.legistar.com/v1/scvwd/matters/10187/texts/11834",
  vw10187a: "https://scvwd.legistar1.com/scvwd/attachments/0f8a9165-1867-4f0a-8a31-2ec90f834afa.pdf",
  gctmp: "https://web.archive.org/web/20120131145635/http://www.sjparks.org:80/Trails/GCreek/documents/GcreekMstrPln01051NarrativeReportfinal7-19-0472dpi.pdf",
  gcmeet: "https://web.archive.org/web/20070922213351/http://www.sjparks.org/Trails/GCreek/GCreek_meeting.pdf",
  ar0405: "https://web.archive.org/web/20060920135342/http://www.sjparks.org:80/Trails/doc/200405AnnualTrailReport.pdf",
  ar0708: "https://web.archive.org/web/20081114175344/http://www.sjparks.org/Trails/documents/200708AnnualTrailReportLowRes.pdf",
  st07: "https://web.archive.org/web/20070922211629/http://www.sjparks.org/Trails/doc/TrailsStatus1-5-07.pdf",
  st08: "https://web.archive.org/web/20080408231036/http://www.sjparks.org/trails/doc/TrailStatus1-30-08.pdf",
  mp87: "https://web.archive.org/web/20120504234716/http://www.sjparks.org/Trails/documents/Los%20Alamitos%20Calero%20Creek%20Park%20Chain%20Master%20Plan.pdf",
  mp87city: "https://www.sanjoseca.gov/home/showpublisheddocument/20625/636687663939670000",
  pc67: "https://web.archive.org/web/20120504234417/http://www.sjparks.org/Trails/documents/Los%20Alamitos%20-%20Calero%20Park%20Chain.pdf",
  pc67city: "https://www.sanjoseca.gov/home/showpublisheddocument/20623/636687663936070000",
  alp: "https://web.archive.org/web/20120425040941/http://www.sjparks.org:80/Trails/documents/MasterPlanAlmadenLakePark1981.pdf",
  ceqa88: "https://ceqanet.lci.ca.gov/1988112915",
  ceqa91: "https://ceqanet.lci.ca.gov/1991053044",
  ceqa98: "https://ceqanet.lci.ca.gov/1998051002",
  ceqa00: "https://ceqanet.lci.ca.gov/2000092025",
  ceqa00nod: "https://ceqanet.lci.ca.gov/2000092025/3",
  ceqa03: "https://ceqanet.lci.ca.gov/2003042122",
  ceqa03nod: "https://ceqanet.lci.ca.gov/2003042122/2",
  ceqa04: "https://ceqanet.lci.ca.gov/2004042137",
  ceqa14: "https://ceqanet.lci.ca.gov/2014042041",
  nop14: "https://assets.valleywater.org/files/Almaden%20Lake%20Notice%20of%20Preparation%20April%202014.pdf",
  fd2983: "https://web.archive.org/web/20260514102359/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2983/2058",
  fd2997: "https://web.archive.org/web/20260711231211/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2997/2058",
  fd2082: "https://web.archive.org/web/20260806160316/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2082/2028",
  sjp06: "https://web.archive.org/web/20060715084834/http://www.sjparks.org:80/Trails/LosAlamitos/LosAlamitos.asp",
  sjpcal: "https://web.archive.org/web/20071030162808/http://www.sjparks.org:80/Trails/Calero/Calero.asp",
  wikialam: "https://en.wikipedia.org/wiki/Alamitos_Creek",
  wikigc: "https://en.wikipedia.org/wiki/Guadalupe_Creek_(Santa_Clara_County)",
  swis: "https://www2.calrecycle.ca.gov/SolidWaste/SiteActivity/Details/1376?siteID=3399",
  tmdl: "https://www.waterboards.ca.gov/rwqcb2/water_issues/programs/TMDLs/guadaluperivermercurytmdl.html",
  fl95: "https://assets.valleywater.org/files/1995%20Flood%20Report.pdf",
  fl17: "https://assets.valleywater.org/files/2017%20Flood%20Report.pdf",
  fl82: "https://assets.valleywater.org/files/1982%20Flood%20Report.pdf",
  ridge: "https://ridgetrail.org/wp-content/uploads/2017/07/2022_SantaClara_SantaTeresaandCaleroLosAlamitosCreeks.pdf",
  memo26: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  tar1819: "https://sanjose.legistar.com/View.ashx?M=F&ID=7864882&GUID=4EBD45E4-3ED4-4F6C-9103-F91BE00BA19F",
  lnm: "https://localnewsmatters.org/2025/08/28/valley-water-sees-fewer-homeless-residents-on-its-lands-since-staring-no-camping-policy/",
  mapGuc: "https://web.archive.org/web/20110708134737/http://www.sjparks.org:80/Trails/images/Maps/MapGuadCreek.pdf",
  mapLac: "https://web.archive.org/web/20120117205444/http://www.sjparks.org/Trails/images/Maps/MapLosAlamitos.pdf",
  mapCal: "https://web.archive.org/web/20101008141916/http://www.sjparks.org:80/Trails/images/Maps/MapCalero.pdf",
  mapLac18: "https://web.archive.org/web/20250321070520/https://www.sanjoseca.gov/home/showpublisheddocument/20617/636687655841830000",
  mapLacNorth: "https://www.sanjoseca.gov/home/showpublisheddocument/20627/636687663942000000",
  video2020: "https://youtu.be/V8x91bkfS_E",
  cbs2010: "https://www.cbsnews.com/sanfrancisco/news/almaden-lake-park-closed-for-whats-left-of-summer/",
  sji2013: "https://www.sanjoseinside.com/news/7_26_13_water_district_polluted_almaden_lake/",
  nbc2013: "https://nbcbayarea.com/news/local/Almaden-Lake-Cleanup-Options-Under-Review-216229401.html",
  nbc2020: "https://www.nbcbayarea.com/news/local/state-advises-of-mercury-contaminated-fish-in-santa-clara-county-waterways/2412822/",
  spot2023: "https://sanjosespotlight.com/san-jose-closes-dozens-of-parks-after-storms/",
  spot2025: "https://sanjosespotlight.com/san-jose-cancels-almaden-lake-park-4th-of-july-festival-independence-day-fireworks/",
  vw2026: "https://www.valleywater.org/news-events/news-releases/VideocapturesadultSteelheadreturningtotheGuadalupeRiver",
};

const REACH_NOTES = {
  "LAC01": { text: "Winfield Blvd to Mazzone Dr on the east bank, the 1987 plan's \"Mazzone\" reach. It runs on the old Southern Pacific Almaden branch grade (1886), later a water-district maintenance road.", src: SRC.mp87 },
  "LAC02": { text: "Mazzone Dr to the Camden Ave bridge at Pfeiffer Park, the 1987 plan's Redmond and Pfeiffer Park reaches; past the rock outcrop the plan calls Elephant Rock.", src: SRC.mp87 },
  "LAC03": { text: "Camden Ave bridge to Greystone Ln, on the west bank along Camden Ave. Greystone Ln still crosses a 1912 railroad culvert.", src: SRC.mp87 },
  "LAC04": { text: "Greystone Ln to Via Valiente, the 1987 \"Graystone\" reach. Abutments of an old railroad bridge (c. 1918) remain nearby.", src: SRC.mp87 },
  "LAC04A": { text: "A footbridge between the east and west banks.", src: SRC.st07 },
  "LAC05": { text: "Via Valiente to Camden Ave, the 1987 plan's Singer Park reach.", src: SRC.mp87 },
  "LAC06": { text: "Camden Ave to the Calero Creek confluence. The 2007 City table lists the City, not Valley Water, as owner here; today's GIS says Valley Water.", src: SRC.st07 },
  "LAC06A": { gap: true, text: "A short link from the north bank east of Camden Ave to the south bank and the Calero Creek Trail. Undeveloped in 2007; still only identified.", src: SRC.st07 },
  "LAC06B": { gap: true, text: "A proposed bridge between the banks at Valley Water's pumps. Only identified; no project or estimate found.", src: SRC.st07 },
  "LAC07A": { text: "Calero Creek confluence to Harry Rd. Paths run on both banks here; the Bay Area Ridge Trail uses this stretch between Santa Teresa and Almaden Quicksilver county parks.", src: SRC.ridge },
  "LAC07B": { text: "The parallel path on the other bank, Calero Creek confluence to Harry Rd.", src: SRC.st07 },
  "GUC01": { gap: true, text: "Across Almaden Expwy at Coleman Rd. The 2004 plan proposed a $3.7M overcrossing; the City's trail page now lists its feasibility study as \"no longer feasible,\" though GIS still says Design. Today trail users cross at the signal.", src: SRC.fd2983 },
  "GUC02": { text: "Almaden Expwy to Meridian Ave on Valley Water's levee road beside the Los Capitancillos percolation ponds. Gravel; opened as an interim trail by mid-2008, through plantings from the 2001 creek restoration.", src: SRC.ar0708 },
  "GUC03": { gap: true, text: "Under the Meridian Ave bridge. The 2004 plan wants a lit undercrossing, closed in floods, with the sidewalk as a detour; today users cross at the signal.", src: SRC.gctmp },
  "GUC04": { text: "Meridian Ave to Masson Dam, gravel levee road past more percolation ponds.", src: SRC.gctmp },
  "GUC05": { text: "Masson Dam to Singletree Way, with a view of the fish ladder built in 2000. Open to Singletree on the City's July 2009 map.", src: SRC.mapGuc },
  "GUC06": { gap: true, text: "Singletree Way to Camden Ave and Coleman Rd. The 2004 plan puts the trail on two new creek bridges ($1.38M) to keep it away from Capitancillos Dr backyards, past PG&E towers and a Valley Water yard.", src: SRC.gctmp },
  "GUC07A": { gap: true, text: "Camden Ave to the landfill: bike lanes and sidewalk on Guadalupe Mines Rd in the 2004 plan. GIS ends this reach at \"Shannon Road\"; older City tables end it at the landfill haul road.", src: SRC.gctmp },
  "GUC07B": { text: "A short paved path on private land, Aspen Creek cul-de-sac to Via Cortina, probably built with a housing development. It isn't one of the 2004 plan's segments, and we found no record of when it opened.", src: SRC.gisQuery },
  "GUC08": { gap: true, text: "Up the landfill haul road to Almaden Quicksilver County Park. The City holds an easement, but the road is in use until the Guadalupe landfill fills; the 2004 plan expected that around 2030, and CalRecycle now estimates the end of 2044. The route also crosses a landslide and two fault traces.", src: SRC.swis },
};

// Guadalupe Creek downstream (Almaden Quicksilver → Almaden Expwy), then Los Alamitos Creek upstream
// (Winfield Blvd → Harry Rd). The two creeks meet at Almaden Lake, linked by the Guadalupe River Trail.
const MAINLINE = ["GUC08","GUC07A","GUC06","GUC05","GUC04","GUC03","GUC02","GUC01","LAC01","LAC02","LAC03","LAC04","LAC05","LAC06","LAC07A"];
const PARENT = { LAC04A: "LAC04", LAC06A: "LAC06", LAC06B: "LAC04", LAC07B: "LAC07A", GUC07B: "GUC07A" };
const SIDE_KIND = { LAC04A: "Bridge", LAC06A: "Proposed link", LAC06B: "Proposed bridge", LAC07B: "Other bank", GUC07B: "Neighborhood path" };
const NOT_GAP = ["LAC06A", "LAC06B"];
const OWNERS = { SCVWD: "Valley Water land", PRIVATE: "Private land", DOT: "Street right-of-way" };
const INTRO_CAP = "Almaden Quicksilver to Harry Rd, by way of Almaden Lake";
const INTRO_FIT = { paddingTopLeft: [125, 70], paddingBottomRight: [70, 24] }; // room for the west-side labels
const INTRO_MARKS = [
  ["Almaden Quicksilver", [37.2064, -121.8989], "left"], ["Masson Dam", [37.2332, -121.8987], "left"],
  ["Almaden Lake", [37.2405, -121.8715], "right"], ["Camden Ave", [37.2231, -121.8535], "right"], ["Harry Rd", [37.2025, -121.8295], "right"],
];
const LANDMARKS = [
  { key: true, name: "Almaden Quicksilver County Park", ll: [37.2064, -121.8989] },
  { name: "Guadalupe landfill", ll: [37.2125, -121.9050] },
  { key: true, name: "Camden Ave / Coleman Rd", ll: [37.2261, -121.9034] },
  { name: "Singletree Way", ll: [37.2343, -121.8999] },
  { key: true, name: "Masson Dam", ll: [37.2332, -121.8987] },
  { name: "Meridian Ave", ll: [37.2385, -121.8869] },
  { key: true, name: "Almaden Expwy", ll: [37.2438, -121.8748] },
  { key: true, name: "Almaden Lake", ll: [37.2405, -121.8715] },
  { name: "Winfield Blvd", ll: [37.2373, -121.8700] },
  { name: "Mazzone Dr", ll: [37.2340, -121.8702] },
  { key: true, name: "Camden Ave bridge (Pfeiffer Park)", ll: [37.2231, -121.8535] },
  { name: "Greystone Ln", ll: [37.2222, -121.8515] },
  { name: "Via Valiente", ll: [37.2166, -121.8419] },
  { name: "Calero Creek", ll: [37.2120, -121.8338] },
  { key: true, name: "Harry Rd", ll: [37.2025, -121.8295] },
];

// Timeline. cat: rail | plan | build | fund | flood | camp
const CAT_LABELS = { rail: "Railroad", flood: "Creeks, lake & Valley Water", camp: "Safety & encampments" };
const TIMELINE = [
  { d: "1886", cat: "rail", t: "The railroads arrive", x: "Two lines reach the Almaden Valley: a narrow-gauge spur from near Campbell and a Southern Pacific branch to Los Alamitos, near today's Almaden Lake. The SP grade along the Santa Teresa foothills later became the creek's maintenance road, and then the trail.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1907", cat: "rail", t: "Sunset Park", x: "Southern Pacific opens a picnic resort at Seales Station, in today's Mazzone neighborhood. After rowdy weekend crowds it is closed and dismantled by 1909.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1934", cat: "rail", t: "The branch is abandoned", x: "SP abandons its Almaden branches south of Los Alamitos and pulls the tracks in 1936. The stub to Los Alamitos serves quarries and a lumber yard until 1979.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1955", cat: "flood", t: "The worst of many floods", x: "The 1987 plan lists a dozen damaging floods on Los Alamitos Creek and its tributaries between 1931 and 1968, \"with the worst flood in 1955.\"", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1964", cat: "flood", t: "Masson Dam", x: "A small diversion dam is built on Guadalupe Creek, about 1.3 miles above Almaden Expwy, to feed the Los Capitancillos percolation ponds. It blocks steelhead. (Secondary source.)", s: [["Wikipedia: Guadalupe Creek", SRC.wikigc]] },
  { d: "1965", cat: "flood", t: "First flood work on Los Alamitos Creek", x: "A developer realigns 1,200 feet of the creek below Graystone Creek and partly fills an old gravel pit for houses.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1967-02", cat: "plan", t: "A park chain, not a concrete channel", x: "A joint County–City planning report proposes a 200-acre streamside park chain from Calero Reservoir to the Los Alamitos percolation ponds, keeping a wide natural flood plain.", s: [["Park chain report (1967)", SRC.pc67], ["City copy", SRC.pc67city]] },
  { d: "1968", cat: "flood", t: "The water district takes up the idea", x: "The Santa Clara Valley Water District (now Valley Water) begins planning 100-year flood protection designed to fit the park chain: natural-bottom channels with maintenance roads that can double as trails.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1976-03-17", cat: "plan", t: "An EIR for Almaden Lake Park", x: "The Planning Department certifies an environmental report for a preliminary park design around the lake, a set of old gravel pits breached by storms.", s: [["Almaden Lake Park master plan report", SRC.alp], ["Valley Water draft EIR (2019)", SRC.deir]] },
  { d: "1982", cat: "fund", t: "First money for Almaden Lake Park", x: "$196,000 in the 1982–83 City budget for trees, irrigation and a swimming beach on the lake's east side.", s: [["Almaden Lake Park master plan report", SRC.alp]] },
  { d: "1983", cat: "flood", t: "The flood project is finished", x: "The water district enlarges the creek from the Mazzone bridge to Almaden Lake and builds a levee from Graystone Creek to the Camden Ave bridge. (Valley Water's 2019 EIR dates the widening to the 1970s.)", s: [["Park chain master plan (1987)", SRC.mp87], ["Valley Water draft EIR (2019)", SRC.deir]] },
  { d: "1984", cat: "plan", t: "Creek trails in the General Plan", x: "San José's Horizon 2000 General Plan calls for a trail network along creek rights-of-way.", s: [["Park chain master plan (1987)", SRC.mp87]] },
  { d: "1987-12", cat: "plan", t: "The park chain master plan: $3M", x: "Theodore Osmundson & Associates and a 22-member citizens' committee plan bike, pedestrian and horse trails on the levees and maintenance roads in seven reaches, Almaden Lake to Harry Rd. The text says $3.0M; the phasing table adds up to $3.21M, parks included.", s: [["Master plan", SRC.mp87], ["City copy", SRC.mp87city], ["CEQA 1988112915", SRC.ceqa88]] },
  { d: "1989-03", cat: "plan", t: "A creek trail to Quicksilver studied", x: "City Parks studies a creekside trail from Almaden Quicksilver County Park along Alamitos Creek. No copy has been found online. (Secondary source.)", s: [["Wikipedia: Alamitos Creek", SRC.wikialam]] },
  { d: "1991-05-16", cat: "plan", t: "Phase A cleared", x: "A negative declaration covers Phase A of the Los Alamitos/Calero Creek Trail, Lake Almaden to the Graystone bridge. We haven't found when it was paved.", s: [["CEQA 1991053044", SRC.ceqa91]] },
  { d: "1995-01", cat: "flood", t: "The 1995 storms", x: "January and March storms bring state and federal disaster declarations. Calero Creek overflows at McKean Rd.", s: [["Valley Water flood report", SRC.fl95]] },
  { d: "1998-05-04", cat: "plan", t: "Quicksilver's trail plan", x: "County Parks clears its trail master plan for Almaden Quicksilver County Park, where the Guadalupe Creek Trail would end.", s: [["CEQA 1998051002", SRC.ceqa98]] },
  { d: "1999-11", cat: "flood", t: "Fish ladders at Alamitos and Masson", x: "The Alamitos Fishway on the Guadalupe River is finished. Masson Dam is rebuilt the same year with a fish ladder.", s: [["Valley Water fishway report", SRC.fish], ["Wikipedia: Guadalupe Creek", SRC.wikigc]] },
  { d: "2000-09-11", cat: "flood", t: "Restoring lower Guadalupe Creek", x: "The water district starts environmental review of replanting about 6 acres between Almaden Expwy and Masson Dam, partly to make up for the downtown Guadalupe River flood project.", s: [["CEQA 2000092025", SRC.ceqa00], ["Notice of determination (2001)", SRC.ceqa00nod]] },
  { d: "2000-10", cat: "flood", t: "Masson Fishway opens", x: "With the Alamitos Fishway it opens about 17 miles of upstream habitat. Counts in 2003–08 record steelhead, Chinook salmon and Pacific lamprey.", s: [["Valley Water fishway report", SRC.fish]] },
  { d: "2001", cat: "flood", t: "Restoration finished", x: "Replanting from Almaden Expwy to Masson Dam is completed. The work also removed mercury-laden sediment and rebuilt a meandering channel.", s: [["Guadalupe Creek Trail master plan (2004)", SRC.gctmp], ["Wikipedia: Guadalupe Creek", SRC.wikigc]] },
  { d: "2001-11-20", cat: "plan", t: "Planning the Guadalupe Creek Trail", x: "The City, the water district and the County start a master plan. The landfill operator says its haul road can carry a trail only after quarry-filling ends.", s: [["Master plan (2004)", SRC.gctmp]] },
  { d: "2003-04-18", cat: "plan", t: "A bridge at the lake's outlet", x: "The City clears a 210-ft bike and pedestrian bridge over Los Alamitos Creek at Almaden Lake's outfall, with 565 ft of trail, for the Guadalupe River Trail. We haven't found when it was built.", s: [["CEQA 2003042122", SRC.ceqa03], ["Fish and Game notice", SRC.ceqa03nod]] },
  { d: "2004-04-28", cat: "plan", t: "Almaden Lake Park renovation", x: "A negative declaration for park improvements, including a trail link to the bridge on the north side of Coleman Rd.", s: [["CEQA 2004042137", SRC.ceqa04]] },
  { d: "2004-06-15", cat: "plan", t: "Guadalupe Creek plan approved: $9.9M", x: "The Council approves a 3.9-mile trail from Almaden Quicksilver to the Alamitos confluence in three phases. The last, on the landfill haul road, has to wait for the landfill to fill up, \"anticipated to be 2030 or later.\"", s: [["Master plan", SRC.gctmp]] },
  { d: "2005", cat: "build", t: "Signs for an interim trail", x: "Valley Water approves signs and fencing for an interim trail on its maintenance roads, the plan's first phase. A joint trail agreement is being negotiated.", s: [["Annual trail report 2004–05", SRC.ar0405]] },
  { d: "2007-01-05", cat: "build", t: "Paved to Harry Rd", x: "The City's trail table lists every Los Alamitos Creek reach, Winfield Blvd to Harry Rd, as asphalt. It's the earliest record we found of the whole trail paved; a City page called it continuous in July 2006.", s: [["Trail status table (2007)", SRC.st07], ["City trail page (2006)", SRC.sjp06]] },
  { d: "2007-06-27", cat: "plan", t: "Neighbors briefed", x: "The City and Valley Water hold a community meeting on opening the interim trail beside the Los Capitancillos recharge ponds.", s: [["Meeting flyer", SRC.gcmeet]] },
  { d: "2008", cat: "build", t: "Guadalupe Creek's gravel trail opens", x: "The levee road opens as an interim trail from Almaden Expwy to Meridian Ave. A PG&E easement holds up the rest of the way to Singletree Way, expected late 2008; a City map shows it open there by July 2009.", s: [["Annual trail report 2007–08", SRC.ar0708], ["City trail map (2009)", SRC.mapGuc]] },
  { d: "2010-08", cat: "flood", t: "No more swimming", x: "An algae bloom closes Almaden Lake's swimming area for the rest of the summer. Valley Water's EIR says the City closed the lake to swimming that month over water quality.", s: [["CBS San Francisco", SRC.cbs2010], ["Valley Water draft EIR (2019)", SRC.deir]] },
  { d: "2012-11", cat: "fund", t: "Measure B pays for planning", x: "Voters approve Valley Water's Safe, Clean Water program. One of its projects is separating Alamitos Creek from Almaden Lake; planning starts that year.", s: [["Valley Water board memo (2021)", SRC.vw7801], ["Valley Water project page", SRC.alip]] },
  { d: "2013-06", cat: "plan", t: "Cleanup order at the Guadalupe Mine", x: "The Regional Water Board orders mercury mine-waste cleanup at the Guadalupe Mine, owned by the landfill company whose haul road the trail would use.", s: [["Regional Water Board", SRC.tmdl]] },
  { d: "2013-07", cat: "plan", t: "Fill the lake?", x: "Valley Water weighs routing the creek around the lake, splitting it, or partly filling it. Neighbors gather about 1,500 signatures against filling.", s: [["San Jose Inside", SRC.sji2013], ["NBC Bay Area", SRC.nbc2013]] },
  { d: "2014-04-14", cat: "plan", t: "Lake project review begins", x: "Valley Water starts an environmental impact report on the Almaden Lake Project.", s: [["CEQA 2014042041", SRC.ceqa14], ["Notice of preparation", SRC.nop14]] },
  { d: "2017-01", cat: "flood", t: "Masson diversion pulled in a storm", x: "Valley Water removes the steel diversion dam at Masson in an emergency to pass flood flows.", s: [["Valley Water 2017 flood report", SRC.fl17]] },
  { d: "2018", cat: "plan", t: "860 people at Camden Ave", x: "The City's annual trail count on Los Alamitos Creek at Camden Ave records 860 users, up from 832 in 2017. We found no later count for this trail.", s: [["Trail annual report 2018–19", SRC.tar1819]] },
  { d: "2020-01-08", cat: "plan", t: "A levee path across the lake", x: "Valley Water's draft EIR would wall Alamitos Creek off from the lake with a levee and walking path linking the Guadalupe River and Los Alamitos Creek trails. Budget: about $5M to plan and design, $36M to build.", s: [["Public meeting slides", SRC.ppt2020], ["Project booklet", SRC.shell], ["Draft EIR", SRC.deir]] },
  { d: "2020-12-02", cat: "flood", t: "Don't eat the fish", x: "The State advises against eating fish from Alamitos Creek, Almaden Lake, Calero Creek and Guadalupe Creek because of mercury from the New Almaden mines.", s: [["NBC Bay Area", SRC.nbc2020]] },
  { d: "2021-05-11", cat: "plan", t: "Lake project approved: ~$45M", x: "Valley Water's board approves the project, with construction estimated at about $45M and set to start in summer 2022. The capital plan had already raised the total to $58M after switching the lake to piped water.", s: [["Board memo", SRC.vw7801], ["Notice of determination", SRC.nod], ["Capital plan FY2022–26", SRC.cip22]] },
  { d: "2023-01-18", cat: "flood", t: "Storms close the lake park", x: "Atmospheric rivers flood Almaden Lake Park and partly close the Guadalupe Creek trail. About 16 inches of rain had fallen near the lake since December 1.", s: [["San José Spotlight", SRC.spot2023]] },
  { d: "2023-01-24", cat: "fund", t: "Costs nearly triple; lake project shelved", x: "With construction estimates nearly tripled, the board moves its construction money to the Ogier Ponds project on Coyote Creek, and about $50M goes back to reserves.", s: [["Board memo", SRC.vw10187], ["Project D4 changes", SRC.vw10187a]] },
  { d: "2024-01-09", cat: "fund", t: "Off the capital plan", x: "Staff report that the Almaden Lake project will leave the capital plan in mid-2024 and go on the unfunded list.", s: [["Capital plan updates", SRC.cipsum]] },
  { d: "2025-06-18", cat: "camp", t: "No more fireworks at the lake", x: "The City cancels the Almaden Lake Park July 4 festival after the 2024 show coincided with a 5–10 acre hillside fire and crowds slowed emergency crews.", s: [["San José Spotlight", SRC.spot2025]] },
  { d: "2025-08", cat: "plan", t: "River trail link in design", x: "Design starts on the Guadalupe River Trail's Branham Ln–Chynoweth Ave gap, which connects the river trail's southern end at Lake Almaden to Branham Ln. The City estimates completion in spring 2027.", s: [["T&E annual report (2026)", SRC.memo26]] },
  { d: "2025-08-28", cat: "camp", t: "Valley Water clears its creek lands", x: "Valley Water reports removing 462 encampments from its land countywide since its no-camping policy began at the end of 2024. It gave no Almaden figures.", s: [["Local News Matters", SRC.lnm]] },
  { d: "2026-03-17", cat: "flood", t: "Steelhead on camera", x: "Valley Water's fish counters and cameras record adult steelhead migrating up the Guadalupe River in January and February.", s: [["Valley Water", SRC.vw2026]] },
];

// Only spending we could document. No construction cost for either creek trail has been found.
const PROJECTS = [
  { name: "Almaden Lake separation: planning & design", id: "VW #26044001", year: 2020, mi: null, kind: "planning & design", cost: 5.332, contract: null, funding: "Valley Water Safe, Clean Water program", src: SRC.cip22, note: "Actual spending and commitments through June 2020; later spending not published" },
  { name: "Almaden Lake Park, first phase", id: "SJ FY1982–83", year: 1983, mi: null, kind: "park budget", cost: 0.196, contract: null, funding: "City of San José", src: SRC.alp, note: "Budgeted; not confirmed as spent" },
];
const PM_EST = [
  { name: "2004 plan, whole trail", sub: "City plan, 2004 $", mi: 3.9, cost: 9.9, note: "$9.9M for 3.9 mi, Almaden Expwy to Almaden Quicksilver", src: SRC.gctmp },
  { name: "2004 plan, the unbuilt segments", sub: "City plan, 2004 $", mi: 3.08, cost: 8.62, note: "Segments 1, 3, 6, 7 and 8 ($8.62M) over today's 3.08 GIS miles; $3.93M of it is the expressway bridge", src: SRC.gctmp },
  { name: "1987 park chain plan", sub: "City plan, 1987 $", mi: 4.16, cost: 3.212, note: "$3.21M phasing total, parks included, over today's 4.16 GIS miles of Los Alamitos Creek mainline", src: SRC.mp87 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "1987 plan (1987 $)", pm: 3.212 / 4.16 },
  { label: "2004 plan, unbuilt segments (2004 $)", pm: 8.62 / 3.08 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
];
const DEFAULT_PM = 8.62 / 3.08;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Almaden Quicksilver → landfill haul road", ids: ["GUC08"], mi: 1.46, status: "Planned", hard: "City easement on an active landfill haul road; CalRecycle expects the landfill to close at the end of 2044. Landslide and fault traces." },
  { name: "Guadalupe Mines Rd to Camden Ave", ids: ["GUC07A"], mi: 0.83, status: "Planned", hard: "2004 plan: bike lanes and sidewalk on Guadalupe Mines Rd; private land in GIS" },
  { name: "Camden Ave → Singletree Way", ids: ["GUC06"], mi: 0.67, status: "Planned", hard: "Two new creek bridges, PG&E towers and a Valley Water yard; a route chosen to avoid backyards" },
  { name: "Meridian Ave crossing", ids: ["GUC03"], mi: 0.08, status: "Planned", hard: "Planned undercrossing floods in big storms; users cross at the signal" },
  { name: "Almaden Expwy crossing", ids: ["GUC01"], mi: 0.03, status: "Design", hard: "County expressway; the 2004 overcrossing is now called \"no longer feasible\"; users cross at the signal" },
];

const STATS = ({ gapMi }) => [
  ["5.9 mi", "open: Los Alamitos Creek paved from Almaden Lake to Harry Rd, Guadalupe Creek on gravel levee roads to Singletree Way"],
  [gapMi.toFixed(1) + " mi", "missing, all on Guadalupe Creek: Singletree Way to Almaden Quicksilver, plus the Meridian and expressway crossings"],
  ["$9.9M", "the 2004 Guadalupe Creek plan's price. Only its first phase, the gravel interim trail, has been built"],
  ["2044", "the year the State now expects the Guadalupe landfill to close, freeing the haul road the trail's last mile needs"],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget at the time", "Final"];
const DELIVERY = [
  ["Los Alamitos Creek park chain (1987 plan)", "Built in phases as money allowed", "Paved Winfield Blvd–Harry Rd by Jan 2007; dates unknown", "good", "$3.0M (1987)", "Not published", "unk", SRC.mp87],
  ["Guadalupe Creek Phase 1: interim trail", "First phase of the 2004 plan", "Expwy–Meridian by mid-2008; to Singletree by July 2009", "warn", "No separate figure", "Not published", "unk", SRC.ar0708],
  ["Guadalupe Creek Phases 2–3", "Phase 3 after the landfill closes, \"2030 or later\"", "Nothing built; landfill now expected to close in 2044", "bad", "$9.9M whole plan (2004 $)", "Not built", "unk", SRC.gctmp],
  ["Almaden Expwy overcrossing", "Phase 2 of the 2004 plan", "City: \"no longer feasible\"; GIS still says Design", "bad", "$3.93M (2004 $)", "Not built", "unk", SRC.fd2983],
  ["Almaden Lake Improvement Project", "Construction summer 2022 – 2023", "Shelved Jan 2023; off the capital plan in 2024", "bad", "~$45M construction (2021)", "Estimates nearly tripled; not built", "bad", SRC.vw10187],
];
// The 2004 Guadalupe Creek Trail Master Plan's estimate by segment (p. 48). Segment n = GIS reach GUC0n.
const OFFICIAL_EST = {
  head: ["Segment", "GIS mi", "Estimate (2004 $)", "What it covers"],
  rows: [
    ["1", "Almaden Expwy crossing", 0.03, 3.93, "Overcrossing ($3.74M bridge); still unbuilt"],
    ["2", "Expwy → Meridian Ave", 0.87, 0.44, "Paving the levee road, benches, signs; open on gravel"],
    ["3", "Meridian Ave crossing", 0.08, 0.08, "Lit undercrossing and a longer median; unbuilt"],
    ["4", "Meridian Ave → Masson Dam", 0.79, 0.48, "Paving and planting; open on gravel"],
    ["5", "Masson Dam → Singletree Way", 0.10, 0.35, "Paving, parking lot and lighting; open on gravel"],
    ["6", "Singletree Way → Camden Ave", 0.67, 2.79, "Two creek bridges ($1.38M), trail and parking; unbuilt"],
    ["7", "Guadalupe Mines Rd", 0.83, 0.07, "Bike lanes and sidewalk to the landfill gate; unbuilt"],
    ["8", "Landfill haul road", 1.46, 1.75, "Paved trail with shoulders to Almaden Quicksilver; unbuilt"],
  ],
  total: ["4.84", "$9.9M"],
};

const DOCS = [
  { g: "Plans & studies", items: [
    ["Los Alamitos–Calero Park Chain (County & City planning departments, 1967)", SRC.pc67],
    ["Almaden Lake Park Master Plan Report (City of San José, c. 1982)", SRC.alp],
    ["Master Plan for the Los Alamitos/Calero Creek Park Chain (Osmundson, 1987)", SRC.mp87],
    ["Guadalupe Creek Trail Master Plan (Callander Associates, 2004)", SRC.gctmp],
  ]},
  { g: "Trail maps & status tables", items: [
    ["City trail status table (Jan 2007)", SRC.st07],
    ["City trail status chart (Jan 2008)", SRC.st08],
    ["City map: Calero Creek Trail (2008)", SRC.mapCal],
    ["City map: Guadalupe Creek Trail (2009)", SRC.mapGuc],
    ["City map: Lake Almaden and Los Alamitos Creek Trail (2009)", SRC.mapLac],
    ["City map: Los Alamitos Creek Trail south of Lake Almaden (2018)", SRC.mapLac18],
    ["Bay Area Ridge Trail map: Santa Teresa and Calero/Los Alamitos Creek Trails (2022)", SRC.ridge],
  ]},
  { g: "City records", items: [
    ["Annual trail report 2004–05", SRC.ar0405],
    ["Guadalupe Creek interim trail meeting flyer (2007)", SRC.gcmeet],
    ["Annual trail report 2007–08", SRC.ar0708],
    ["Trail annual report 2018–19", SRC.tar1819],
    ["T&E: Bike Plan and Trail Network annual report (2026)", SRC.memo26],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: park chain master plan (1988)", SRC.ceqa88],
    ["CEQA: Los Alamitos/Calero Creek Trail Phase A (1991)", SRC.ceqa91],
    ["CEQA: Almaden Quicksilver trail master plan (1998)", SRC.ceqa98],
    ["CEQA: Guadalupe Creek Restoration Project (2000)", SRC.ceqa00],
    ["CEQA: river trail bridge at Almaden Lake Park (2003)", SRC.ceqa03],
    ["CEQA: Almaden Lake Park Improvement Project (2004)", SRC.ceqa04],
    ["CEQA: Almaden Lake Project (2014)", SRC.ceqa14],
  ]},
  { g: "Valley Water", items: [
    ["Valley Water 1982 flood report", SRC.fl82],
    ["Valley Water 1995 flood report", SRC.fl95],
    ["Masson and Alamitos fishway monitoring report (2009)", SRC.fish],
    ["Almaden Lake notice of preparation (2014)", SRC.nop14],
    ["Valley Water 2017 flood report", SRC.fl17],
    ["Almaden Lake Improvement Project draft EIR (2019)", SRC.deir],
    ["Almaden Lake project booklet (2020)", SRC.shell],
    ["Draft EIR public meeting slides (2020)", SRC.ppt2020],
    ["Capital plan FY2022–26: water resources stewardship", SRC.cip22],
    ["Board memo: certify the final EIR and approve the project (2021)", SRC.vw7801],
    ["Board presentation: Almaden Lake Improvement Project (2021)", SRC.vw7801ppt],
    ["Almaden Lake notice of determination (2021)", SRC.nod],
    ["Board memo: changes to Safe, Clean Water Priorities D and E (2023)", SRC.vw10187],
    ["Project D4 proposed modifications (2023)", SRC.vw10187a],
    ["Summary of capital project plan updates (2024)", SRC.cipsum],
  ]},
];

const MAPS = [
  { t: "City: Los Alamitos Creek Trail", d: "Facility page with the trail's length, access points and maps.", u: SRC.fd2997, tag: "Official" },
  { t: "City: Guadalupe Creek Trail", d: "Facility page for the interim trail, Almaden Expwy to Singletree Way.", u: SRC.fd2983, tag: "Official" },
  { t: "City map: Los Alamitos Creek north of Lake Almaden", d: "The link along the Guadalupe River Trail.", u: SRC.mapLacNorth, tag: "Map" },
  { t: "Bay Area Ridge Trail: Calero and Los Alamitos Creek", d: "The regional route from Santa Teresa to Almaden Quicksilver.", u: SRC.ridge, tag: "Map" },
  { t: "Valley Water: Almaden Lake Improvement Project", d: "The shelved creek/lake separation project (archived page).", u: SRC.alip, tag: "Official" },
  { t: "Draft EIR public meeting video (2020)", d: "Valley Water's presentation of the lake project.", u: SRC.video2020, tag: "Video" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
];

const NEWS = [
  ["2010-08-27", "CBS San Francisco (KPIX)", "Almaden Lake Park Closed for What's Left of Summer", "https://www.cbsnews.com/sanfrancisco/news/almaden-lake-park-closed-for-whats-left-of-summer/", "A persistent blue-green algae bloom keeps the swimming area closed for the rest of the summer; a Valley Water manager cites cool weather, low lake levels and an uninstalled diversion dam."],
  ["2012-03-15", "KQED (QUEST)", "Geological Outings Around the Bay: New Almaden", "https://www.kqed.org/quest/33174/geological-outings-around-the-bay-new-almaden", "A geology column on the New Almaden mining district, now Almaden Quicksilver County Park, and the rocks that held its mercury ore."],
  ["2013-07-19", "NBC Bay Area", "Almaden Lake Cleanup Options Under Review", "https://nbcbayarea.com/news/local/Almaden-Lake-Cleanup-Options-Under-Review-216229401.html", "Valley Water studies routing Alamitos Creek around the mercury-laden lake, splitting it, or partly filling it; neighbors oppose filling."],
  ["2013-07-26", "San Jose Inside", "Fight Breaks Out over the Future of Filthy, Polluted Waters of Almaden Lake", "https://www.sanjoseinside.com/news/7_26_13_water_district_polluted_almaden_lake/", "Two HOAs gather about 1,500 signatures against filling the lake, while a councilmember's survey favors filling it and restoring the creek."],
  ["2014-10-08", "ABC7 San Francisco", "Surveillance video captures mountain lion on SJ homeowner's car", "https://abc7news.com/post/surveillance-video-captures-mountain-lion-on-sj-homeowners-car/341347/", "A young mountain lion stands on a car in Almaden Valley; neighbors think it came from Almaden Quicksilver County Park."],
  ["2014-10-08", "CBS San Francisco (KPIX)", "Caught On Camera: Mountain Lion Hangs Out On Top Of Car In San Jose Home's Driveway", "https://www.cbsnews.com/sanfrancisco/news/caught-on-camera-mountain-lion-hangs-out-on-top-of-car-in-san-jose-homes-driveway/", "The same incident; the homeowner shares the video to warn neighbors who live near hiking trails."],
  ["2014-11-18", "NBC Bay Area", "Mountain Lion Spotted in San Jose's Almaden Valley in Front Yard", "https://www.nbcbayarea.com/news/local/mountain-lion-spotted-in-san-joses-almaden-valley-in-front-yard/77863/", "Another mountain lion is reported near Quicksilver Park less than a month later."],
  ["2015-11-05", "KQED (QUEST)", "Mercury in San Francisco Bay", "https://www.kqed.org/quest/17506/mercury-in-san-francisco-bay", "Gold Rush-era mercury, including from the New Almaden mines, still leaches into creeks and the Bay despite a 2008 cleanup plan."],
  ["2016-09-10", "CBS San Francisco (KPIX)", "Toxic Algae Shuts Down 2 San Jose Lakes", "https://www.cbsnews.com/sanfrancisco/news/toxic-algae-shuts-down-2-san-jose-lakes/", "Almaden Lake and Lake Cunningham close to water activities because of cyanobacteria; the parks stay open."],
  ["2019-11-15", "Patch (via Bay City News)", "Man Accused Of Molesting Girl, 13, On Los Alamitos Creek Trail", "https://patch.com/california/losgatos/man-accused-molesting-girl-13-los-alamitos-creek-trail", "A 76-year-old man is accused of repeatedly approaching and molesting a girl walking her dog on the trail between Harry Rd and Camden Ave."],
  ["2020-01-30", "Valley Water (director's column)", "How the Almaden Lake Project will help the environment", "https://www.valleywater.org/news-events/news-releases/how-almaden-lake-project-will-help-environment", "Director Linda J. LeZotte describes the levee that would separate Alamitos Creek from the lake to cut mercury and help steelhead."],
  ["2020-12-02", "NBC Bay Area", "State Advises of Mercury Contaminated Fish in Santa Clara County Waterways", "https://www.nbcbayarea.com/news/local/state-advises-of-mercury-contaminated-fish-in-santa-clara-county-waterways/2412822/", "The State warns against eating fish from nine watershed waters, including Alamitos Creek, Almaden Lake, Calero Creek and Guadalupe Creek."],
  ["2022-07-02", "NBC Bay Area", "Health Officials Warn Public of Algae Bloom at Some Bay Area Lakes", "https://www.nbcbayarea.com/news/local/algae-bloom-warning-in-bay-area/2935462/", "Almaden Lake is visibly green, with warning signs posted, before the July 4 weekend."],
  ["2023-01-18", "San José Spotlight", "San Jose closes dozens of parks after storms", "https://sanjosespotlight.com/san-jose-closes-dozens-of-parks-after-storms/", "Flooding closes Almaden Lake Park and part of the Guadalupe Creek trail among 27 closed parks and trails."],
  ["2023-08-09", "Valley Water (news release)", "Valley Water reaches milestone to improve fish habitat in Santa Clara County", "https://www.valleywater.org/news/valley-water-reaches-milestone-improve-fish-habitat-santa-clara-county", "The board certifies the FAHCE environmental report setting reservoir releases and habitat work for steelhead and salmon in the Guadalupe watershed."],
  ["2023-11-28", "KTVU FOX 2", "San Jose creeks see explosion in spawning salmon population", "https://www.ktvu.com/news/san-jose-creeks-seeing-explosion-in-spawning-salmon-population", "Nearly 200 Chinook salmon are counted early in the season in the Guadalupe watershed, credited partly to a decade of creek cleanups."],
  ["2024-07-04", "NBC Bay Area", "San Jose professional fireworks shows, illegal fireworks potentially caused small fires", "https://www.nbcbayarea.com/news/local/south-bay/san-jose-firework-show-causes-small-fires/3584687/", "July 4 fireworks spark several small brush fires, including one near Almaden Lake."],
  ["2024-08-16", "San José Spotlight (op-ed)", "Porcella and Leal: Valley Water is working to improve fish habitat", "https://sanjosespotlight.com/porcella-and-leal-valley-water-is-working-to-improve-fish-habitat/", "Two Valley Water biologists summarize two decades of fish-habitat projects. (Written by agency staff.)"],
  ["2025-06-18", "San José Spotlight", "San Jose cancels Almaden Lake Park 4th of July festival", "https://sanjosespotlight.com/san-jose-cancels-almaden-lake-park-4th-of-july-festival-independence-day-fireworks/", "The City cancels the festival after the 2024 show coincided with a hillside fire and crowds hampered emergency response."],
  ["2025-06-19", "KTVU FOX 2", "This Bay Area city cancels its 4th of July fireworks festival", "https://www.ktvu.com/news/san-jose-almaden-lake-park-cancels-its-4th-july-fireworks-festival", "More on the cancellation; other City shows go ahead."],
  ["2026-03-17", "Valley Water (news release)", "Video captures adult Steelhead returning to the Guadalupe River", "https://www.valleywater.org/news-events/news-releases/VideocapturesadultSteelheadreturningtotheGuadalupeRiver", "Fish counters and cameras record adult steelhead migrating up the river in January and February."],
  ["2026-03-26", "KQED (Bay Curious)", "New Almaden: The Mercury Mine That Built a Boomtown South of San José", "https://www.kqed.org/news/12077572/new-almaden-the-mercury-mine-that-built-a-boomtown-south-of-san-jose", "The history of the New Almaden mine, the largest historical source of mercury in the Bay, and decades of cleanup at Almaden Quicksilver."],
  ["2026-10-27", "San José Spotlight (op-ed)", "Beall: Preparing our creeks for an El Niño winter", "https://sanjosespotlight.com/beall-preparing-our-creeks-for-an-el-nino-winter/", "Valley Water Director Jim Beall describes vegetation work on Alamitos Creek upstream of Mazzone Dr to keep storm flows moving."],
  ["2026-11-18", "SFGATE (via Yahoo News)", "Several Bay Area parks, attractions close due to flooding and 'unsafe conditions'", "https://www.yahoo.com/news/weather-news/articles/several-bay-area-parks-attractions-203426397.html", "All trails at Almaden Quicksilver County Park close to hikers and cyclists because of poor trail conditions."],
];

const PHOTOS = [
  {"f": "LosAlamitosCreekTrail AlmadenValley.jpg", "c": "The Los Alamitos Creek Trail beside the creek", "a": "Bunty4", "l": "CC0", "ll": [37.230553, -121.866394], "y": 2024},
  {"f": "AlmadenLakeLoopTrail.jpg", "c": "A cyclist on the Almaden Lake loop trail, with the foothills beyond", "a": "Bunty4", "l": "CC0", "ll": [37.243111, -121.870383], "y": 2024},
  {"f": "Almaden Lake Park 1.1.jpg", "c": "A bench above Almaden Lake", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.239326, -121.872383], "y": 2008},
  {"f": "Almaden Lake Park 1.3.jpg", "c": "Clouds reflected in Almaden Lake, with the Santa Cruz Mountains behind", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.2405, -121.8715], "approx": true, "y": 2008},
  {"f": "Almaden Lake Park 3569.jpg", "c": "Almaden Lake from the trail", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.241694, -121.870353], "y": 2021},
  {"f": "Almaden Lake Regional Park Loop Trail, Almaden Valley.jpg", "c": "The paved loop trail along Almaden Lake", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": [37.2405, -121.8705], "approx": true, "y": 2021},
  {"f": "Almaden LosAlamitosCreek.jpg", "c": "Los Alamitos Creek from one of the trail's footbridges", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": null, "y": 2021},
  {"f": "One of the footbridges on the Los Alamitos Creek Trail.jpg", "c": "A cyclist on a wooden footbridge on the Los Alamitos Creek Trail", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": null, "y": 2021},
  {"f": "Los Alamitos Creek 1 2018-01-23.jpg", "c": "Winter flow over cobbles in Los Alamitos Creek", "a": "FASTILY", "l": "CC BY-SA 4.0", "ll": null, "y": 2018},
  {"f": "Los Alamitos Creek Trail 1 2018-03-26.jpg", "c": "The paved Los Alamitos Creek Trail in spring", "a": "FASTILY", "l": "CC BY-SA 4.0", "ll": null, "y": 2018},
  {"f": "A bench with painted tiles by the Los Alamitos Creek.jpg", "c": "A tile bench celebrating the creek's steelhead and footbridges", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": [37.223, -121.853919], "y": 2021},
  {"f": "Los Alamitos Creek Trail 1 2021-05-27.jpeg", "c": "A gravel stretch of the upper Los Alamitos Creek Trail", "a": "FASTILY", "l": "CC BY-SA 4.0", "ll": null, "y": 2021},
  {"f": "Calero Creek Trail Bobcat.jpg", "c": "A bobcat on the Calero Creek Trail near Harry Rd", "a": "Don DeBold", "l": "CC BY-SA 2.0", "ll": [37.206008, -121.820869], "y": 2007},
  {"f": "Calero Reservoir aerial.jpg", "c": "Calero Reservoir, the source of Calero Creek", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.18, -121.78], "approx": true, "y": 2018},
  {"f": "Guadalupe Oak Grove Park, Almaden Valley.jpg", "c": "Valley oaks in Guadalupe Oak Grove Park, beside Guadalupe Creek", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": [37.235, -121.888], "approx": true, "y": 2021},
  {"f": "Guadalupe Oak Grove Park - Hill Top View.jpg", "c": "Almaden Valley from a hilltop in Guadalupe Oak Grove Park", "a": "Bunty4", "l": "CC BY-SA 4.0", "ll": [37.2352, -121.8885], "approx": true, "y": 2021},
  {"f": "Almaden Vineyards.jpg", "c": "The Almaden Vineyards landmark wall near Guadalupe Creek", "a": "Intranila", "l": "CC BY-SA 3.0", "ll": [37.2391, -121.8947], "y": 2009},
  {"f": "AlmadenQuicksilverParkMockingBirdEntrance.jpg", "c": "Almaden Quicksilver County Park's Mockingbird entrance", "a": "Bunty4", "l": "CC0", "ll": [37.214639, -121.881547], "y": 2023},
  {"f": "USA-San Jose-Almaden Quicksilver Park-El Senador Mine-1.jpg", "c": "Ruins of the El Senador mine in Almaden Quicksilver County Park", "a": "Eugene Zelenko", "l": "CC BY-SA 4.0", "ll": [37.210811, -121.890076], "y": 2007},
  {"f": "Guadalupe Reservoir - South from Dam Including Dam.jpg", "c": "Guadalupe Reservoir, at the head of Guadalupe Creek", "a": "Unixxx", "l": "CC BY-SA 4.0", "ll": [37.199994, -121.878989], "y": 2019},
];

const OUTCOMES = {
  "1987-12": [
    ["Completed", "good", "The trail, yes: City records show it paved from Winfield Blvd to Harry Rd by January 2007."],
    ["Schedule", "unk", "The plan set no dates, and we found no opening dates."],
    ["Budget", "unk", "No construction cost has turned up to compare with the $3.0–3.2M estimate."],
  ],
  "2004-06-15": [
    ["Completed", "warn", "Phase 1 only: the gravel interim trail from Almaden Expwy to Singletree Way. None of Phase 2's paving, bridges or parking has been built."],
    ["Schedule", "bad", "Phase 3 was waiting for the landfill to close around 2030; the State now expects 2044."],
    ["Budget", "unk", "No spending on the trail has been published."],
  ],
  "2008": [
    ["Completed", "good", "Yes, to Singletree Way, on gravel."],
    ["Schedule", "warn", "The Singletree section, expected late 2008, first appears on the City's July 2009 map; the exact date isn't known."],
  ],
  "2021-05-11": [
    ["Completed", "bad", "No. Shelved in January 2023 and dropped from the capital plan in 2024."],
    ["Budget", "bad", "Construction estimates nearly tripled. At least $5.3M had been spent on planning and design by mid-2020."],
  ],
};

const QUOTES = [
  {"q": "It's an important part of our neighborhood. This is part of why I moved here.", "who": "Lisa Burt", "role": "Lakeview Terrace resident, beside Almaden Lake", "src": "San Jose Inside, 2013", "u": "https://www.sanjoseinside.com/news/7_26_13_water_district_polluted_almaden_lake/"},
  {"q": "When we acquired the land in the mid-70s, 1970s, there was quite a bit of mercury contamination of the land. Under the furnace yards was, you know, pools of mercury. They had paved roads with cinnabar waste rock, which we call calcines. They had just dumped it over the sides of the hills. They had dumped it into the creeks. And so we have been remediating it ever since.", "who": "Lynda Will", "role": "Parks program coordinator, Santa Clara County Parks", "src": "KQED, 2026", "u": "https://www.kqed.org/news/12077572/new-almaden-the-mercury-mine-that-built-a-boomtown-south-of-san-jose"},
  {"q": "The goal was to get it to where you'd have clean gravel and then these fish would be able to return and successfully spawn. And I think that's what we've accomplished", "who": "Steve Holmes", "role": "Executive director, South Bay Clean Creeks Coalition", "src": "KTVU, 2023", "u": "https://www.ktvu.com/news/san-jose-creeks-seeing-explosion-in-spawning-salmon-population"},
  {"q": "There's some mudslides that have been happening. Some trails have been blocked.", "who": "Daniel Lazo", "role": "Spokesperson, San José Parks, Recreation and Neighborhood Services", "src": "San José Spotlight, 2023", "u": "https://sanjosespotlight.com/san-jose-closes-dozens-of-parks-after-storms/"},
  {"q": "The fact that it's not going to be held is disappointing, as I'm sure it is to many people. Everybody likes fireworks, especially good ones, big ones — not wildfire-starting fireworks.", "who": "Michael Ross", "role": "Almaden Valley Community Association", "src": "San José Spotlight, 2025", "u": "https://sanjosespotlight.com/san-jose-cancels-almaden-lake-park-4th-of-july-festival-independence-day-fireworks/"},
  {"q": "The major concern I have is the safety for the kids, and lots of single people doing a morning walk.", "who": "David Tang", "role": "Almaden Valley homeowner whose camera recorded a mountain lion", "src": "CBS San Francisco, 2014", "u": "https://www.cbsnews.com/sanfrancisco/news/caught-on-camera-mountain-lion-hangs-out-on-top-of-car-in-san-jose-homes-driveway/"},
];
