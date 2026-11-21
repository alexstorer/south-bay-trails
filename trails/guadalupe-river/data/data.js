// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Guadalupe River Trail page. Every entry carries at least one source URL.

const SJ_DOC = "https://www.sanjoseca.gov/home/showpublisheddocument/";
const LGS = "https://legistar.granicus.com/sanjose/attachments/";
const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  cityPage: "https://web.archive.org/web/20260517002350/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/2985/2058",
  grpg: "http://www.grpg.org/History.shtml",
  merc2009: "https://web.archive.org/web/20120220042923/http://www.sjparks.org/trails/documents/20090315MercuryNews.pdf",
  vwE8: "https://www.valleywater.org/project-updates/e8-upper-guadalupe-river-flood-protection-0",
  vwLower: "https://www.valleywater.org/project-updates/lower-guadalupe-river-project",
  vwGoodNeighbor: "https://www.valleywater.org/project-updates/good-neighbor-program-valley-water-addressing-encampments-unsheltered-people",
  cip2022: "https://valleywater.org/sites/default/files/2021-03/CIP_Tab-03-021121_BA.pdf",
  ugrSlides: "https://assets.valleywater.org/files/2022-12-08_Upper_Guad_PPT_v12%20public.pdf",
  ugrShell: "https://assets.valleywater.org/files/2022-08-04_Upper%20Guad%20Shell%20v3.pdf",
  lgrPres: "https://assets.valleywater.org/files/2023-10-19_Lower%20Guadalupe%20River%20Project_LS_03.pdf",
  lgrBoards: "https://assets.valleywater.org/files/Guadalupe_36x26%20Display%20Boards_101223_SBS_V8.pdf",
  reach6MND: "https://assets.valleywater.org/files/E8%20FinalMND_UpperGuadReach6Aquatic_060519_stacked.pdf",
  mpUpper: SJ_DOC + "95587/638149014026100000",
  mpLower: SJ_DOC + "20605/636687636784000000",
  mpReach6: SJ_DOC + "20603/636687636779630000",
  mpPark: SJ_DOC + "20593/636687636759970000",
  mapGold101: SJ_DOC + "20583/636687633048230000",
  map101880: SJ_DOC + "20585/636687633052770000",
  mapPark: SJ_DOC + "20581/636687633045270000",
  mapAlmaden: SJ_DOC + "20587/636687633055730000",
  gateway: SJ_DOC + "20569/636687633026970000",
  prc2017: SJ_DOC + "20607/636687636787470000",
  ismnd2017: SJ_DOC + "26319/636691083639800000",
  stJohnStudy: SJ_DOC + "120125/638792900986170000",
  uprrStudy: SJ_DOC + "120724/638918056469800000",
  nsjRamp: SJ_DOC + "127822/639047595749430000",
  mpUpdate2023: LGS + "c8524355-3435-47db-aef3-746b68ee2a6d.pdf",
  bikeConn2026: LGS + "78497774-4318-4e0d-8787-1dbda4926686.pdf",
  gardens2022: LGS + "d5679465-1198-4348-b191-aae7ba88f967.pdf",
  gardensPres2022: LGS + "923cb690-88ae-4267-bffb-daea3dc48117.pdf",
  gardensPlan2022: LGS + "30de37bd-b85b-49f5-8079-7a8371bb6f55.pdf",
  gardensMP2025: LGS + "dccf7ea0-0d3f-4c5e-b78a-0e3ce7761fe3.pdf",
  gardensPres2025: LGS + "4be4a7b9-8b9f-4256-a18a-8d0b67459e80.pdf",
  gardensMP2002: "https://www.flysanjose.com/sites/default/files/jwilson/2002GGMasterPlan%20(1).pdf",
  patrol2023: LGS + "91cf92c2-10ef-4f76-8026-e5fe482cb755.pdf",
  rules2024: LGS + "f23d3833-6aff-4f57-92d7-43c06f88b58f.pdf",
  measureB2024: LGS + "b0188938-0e76-4458-b884-eeada46c56fe.pdf",
  microsoft2025: LGS + "dade77a3-db86-47b1-83fa-15031ef43e54.pdf",
  rtc2024: "https://www.railstotrails.org/wp-content/uploads/2024/07/BATC-Project-Profiles-2024_Guadalupe_7.2.24.pdf",
  spur: "https://www.spur.org/featured-project/re-envisioning-guadalupe-river-park",
  spurRewild: "https://www.spur.org/sites/default/files/2021-09/SPUR_Sherwood_Rewilding_the_Guadalupe_River.pdf",
  doi2009: "https://www.doi.gov/news/pressreleases/2009_05_28_releaseB",
  hosler2013: "https://rayhosler.wordpress.com/2013/06/09/guadalupe-river-path-paves-the-way-to-alviso/",
  spotNoReturn: "https://sanjosespotlight.com/san-jose-creates-no-return-zone-for-homeless-residents-along-guadalupe-river-trail/",
  spotUseUp: "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/",
  ktvu2026: "https://www.ktvu.com/news/federal-funding-boosts-guadalupe-trail-expansion-san-jose",
};

const REACH_NOTES = {
  "GUA01": { text: "Gold St in Alviso to Hwy 237, where the trail meets the Bay Trail and the salt-marsh edge.", src: SRC.mpLower },
  "GUA03": { text: "Tasman Dr to Montague Expwy on Valley Water's levee roads. The Tasman–I-880 stretch turned out to lack flood capacity in 2017; Valley Water plans to raise levees here starting in late 2027.", src: SRC.vwLower },
  "GUA04": { text: "Montague Expwy to Hwy 101. A juvenile Columbian mammoth, \"Lupe,\" was found in the bank near Trimble Rd in 2005. The Montague and Trimble underpasses flood and close in storms.", src: SRC.hosler2013 },
  "GUA05-1 E": { text: "Past the airport on the east bank. The paved trail from Alviso to downtown opened in April 2013.", src: SRC.hosler2013 },
  "GUA07": { text: "Hedding St to Coleman Ave through Guadalupe Gardens, land cleared of 630+ homes for the airport approach. The FAA objected to an encampment of about 250 people here in 2021; it was cleared by the end of 2022.", src: SRC.gardens2022 },
  "GUA12": { text: "Santa Clara St to Park Ave through Guadalupe River Park, past Arena Green and the Los Gatos Creek confluence. Downtown flood control and the park cost about $350M and were finished in 2005.", src: SRC.merc2009 },
  "GUA14": { text: "San Carlos St to Woz Way. After a $2M state grant moved people into housing in 2023, the City made Woz Way–Julian St a \"no return zone\" in 2024; trail use rose 110%.", src: SRC.spotUseUp },
  "GUA16": { text: "I-280 to Virginia St, the end of the continuous trail from Alviso. Valley Water finished flood Reach 6 here in 2012.", src: SRC.vwE8 },
  "GUA17": { gap: true, text: "Virginia St to Willow St. The 2017 master plan estimate is $2.72M; the trail waits on unbuilt flood Reaches 7–8.", src: SRC.mpUpper },
  "GUA18": { gap: true, text: "Willow St to Alma Ave, in the unbuilt flood Reach 7. Plan estimate $2.39M.", src: SRC.mpUpper },
  "GUA19": { gap: true, text: "Alma Ave to the Willow Glen rail spur (Three Creeks Trail junction). Plan estimate $4.71M.", src: SRC.mpUpper },
  "GUA20": { gap: true, text: "Rail spur to Willow Glen Way, where Valley Water and the City built a longer bridge in 2007 for future channel widening.", src: SRC.vwE8 },
  "GUA21": { gap: true, text: "Willow Glen Way to Curtner Ave, about 0.9 mile. Plan estimate about $8.3M in two pieces.", src: SRC.mpUpper },
  "GUA22": { gap: true, text: "Curtner Ave to Almaden Expwy.", src: SRC.mpUpper },
  "GUA23": { gap: true, text: "Almaden Expwy toward Foxworthy Ave, the most expensive stretch in the plan ($12.9M).", src: SRC.mpUpper },
  "GUA24": { gap: true, text: "To Capitol Expwy, which would need a $6M pedestrian overcrossing.", src: SRC.mpUpper },
  "GUA25": { gap: true, text: "Capitol Expwy to Branham Ln.", src: SRC.mpUpper },
  "GUA26": { gap: true, text: "Branham Ln to Chynoweth Ave, in design and slated to go first. Rep. Jimmy Panetta announced $1M in federal money in 2026; the full trail is targeted for 2029.", src: SRC.ktvu2026 },
  "GUA27": { text: "Chynoweth Ave to Blossom Hill Rd, along flood Reach 12 (finished 2015).", src: SRC.vwE8 },
  "GUA28": { text: "Blossom Hill Rd to Almaden Lake, the trail's south end, where the Los Alamitos Creek Trail continues.", src: SRC.mapAlmaden },
  "GUA11-2 W": { gap: true, text: "A planned west-bank link from St. John St to Julian St (feasibility study, October 2024).", src: SRC.stJohnStudy },
};

// North (Alviso) → south (Almaden Lake). East-bank pieces where the trail runs on both banks.
const MAINLINE = ["GUA01","GUA02","GUA03","GUA04","GUA05-1 E","GUA05-2","GUA06","GUA07","GUA08","GUA10-1 E","GUA11B-1","GUA11B-2","GUA12","GUA13","GUA14","GUA15","GUA16","GUA17","GUA18","GUA19","GUA20","GUA21","GUA22","GUA23","GUA24","GUA25","GUA26","GUA27","GUA28"];
const PARENT = { "GUA05-1 W": "GUA05-1 E", GUA05A: "GUA05-1 E", GUA05: "GUA05-1 E", GUA09A: "GUA08", "GUA10-1 W": "GUA10-1 E", GUA11A: "GUA11B-2", "GUA11-2 W": "GUA11B-1", GUA27A: "GUA27", GUA28A: "GUA28", GUA28B: "GUA28" };
const SIDE_KIND = { "GUA05-1 W": "West bank", GUA05A: "Crossing", GUA05: "Airport link", GUA09A: "Rail crossing", "GUA10-1 W": "West bank", GUA11A: "West bank", "GUA11-2 W": "Planned west bank", GUA27A: "Crossing", GUA28A: "Bridge", GUA28B: "Link" };
const NOT_GAP = [];
const OWNERS = { SCVWD: "Valley Water land", "SCV WATER DISTRICT": "Valley Water land", PRNS: "City of San José Parks", DOT: "City street right-of-way", AIRPORT: "San José airport" };
const INTRO_CAP = "Alviso to Almaden Lake";
const INTRO_MARKS = [
  ["Alviso", [37.4234, -121.976], "left"], ["Hwy 101", [37.3751, -121.9326], "right"], ["SJC airport", [37.3639, -121.9290], "left"],
  ["Downtown", [37.3310, -121.8960], "left"], ["Virginia St", [37.3199, -121.8895], "right"], ["Curtner Ave", [37.2924, -121.8804], "left"],
  ["Chynoweth Ave", [37.2585, -121.8679], "right"], ["Almaden Lake", [37.2428, -121.8747], "left"],
];
const LANDMARKS = [
  { key: true, name: "Alviso · Bay Trail", ll: [37.4234, -121.976] },
  { name: "Hwy 237", ll: [37.4189, -121.9675] },
  { name: "Tasman Dr", ll: [37.4105, -121.9606] },
  { name: "Trimble Rd (Lupe the mammoth)", ll: [37.3880, -121.9330] },
  { key: true, name: "Hwy 101", ll: [37.3751, -121.9326] },
  { key: true, name: "SJC airport", ll: [37.3639, -121.9290] },
  { name: "Guadalupe Gardens", ll: [37.3440, -121.9060] },
  { key: true, name: "Arena Green / SAP Center", ll: [37.3330, -121.8990] },
  { name: "Los Gatos Creek confluence", ll: [37.3322, -121.8993] },
  { key: true, name: "Virginia St · trail breaks", ll: [37.3199, -121.8895] },
  { name: "Willow Glen Way", ll: [37.3039, -121.8823] },
  { name: "Curtner Ave", ll: [37.2924, -121.8804] },
  { name: "Capitol Expwy", ll: [37.2757, -121.8766] },
  { key: true, name: "Chynoweth Ave · trail resumes", ll: [37.2585, -121.8679] },
  { key: true, name: "Almaden Lake", ll: [37.2428, -121.8747] },
];

// Timeline. cat: plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1777", cat: "plan", t: "San José is founded on the Guadalupe", x: "The pueblo is founded beside the river. The modern city later grew up, as the park conservancy puts it, \"with its back turned to the river.\"", s: [["Guadalupe River Park Conservancy", SRC.grpg]] },
  { d: "1852", cat: "flood", t: "First recorded flood", x: "Valley Water dates the earliest recorded Guadalupe flood to the winter of 1852–53. The river has flooded 15 times since World War II.", s: [["Valley Water", SRC.vwLower], ["Mercury News (2009)", SRC.merc2009]] },
  { d: "1941", cat: "flood", t: "Army Corps begins studying the river", x: "The Corps is authorized to study flood protection; the effort stops and starts for four decades.", s: [["Conservancy history", SRC.grpg]] },
  { d: "1955-12", cat: "flood", t: "The Christmas Week flood", x: "The largest Guadalupe flood on record covers about 8,300 acres (secondary source).", s: [["Wikipedia", "https://en.wikipedia.org/wiki/Guadalupe_River_(California)"]] },
  { d: "1963", cat: "fund", t: "Voters pass a downtown flood bond", x: "A $12.75 million water-district bond for flood protection downtown.", s: [["Conservancy history", SRC.grpg]] },
  { d: "1969", cat: "plan", t: "First Guadalupe River Park plan", x: "The first of five park master plans (1969, 1985, 1988, 1995, 2002) tying a park to the flood project.", s: [["City trail page (archived)", SRC.cityPage]] },
  { d: "1975", cat: "plan", t: "The airport buyout begins", x: "With FAA money, more than 630 homes are removed from the Coleman Loop south of the airport. The land becomes Guadalupe Gardens.", s: [["Conservancy history", SRC.grpg], ["Council memo (2025)", SRC.gardensMP2025]] },
  { d: "1986", cat: "fund", t: "Congress authorizes the downtown project", x: "The Water Resources Development Act authorizes a Guadalupe River project for flood protection, habitat and recreation.", s: [["CEQA 1999102056", "https://ceqanet.lci.ca.gov/1999102056"], ["Conservancy history", SRC.grpg]] },
  { d: "1989-03", cat: "plan", t: "\"Guadalupe Gardens\" named", x: "The Council designates the airport-approach land as Guadalupe Gardens.", s: [["Conservancy history", SRC.grpg]] },
  { d: "1992", cat: "build", t: "Downtown park and flood work begin", x: "Construction starts after the Corps, the water district and the City sign a 1991 design agreement.", s: [["Conservancy history", SRC.grpg]] },
  { d: "1995-03", cat: "flood", t: "March 1995 flood", x: "Floodwater near downtown swamps about 150 homes, closes Hwy 87 and light rail, and postpones a Sharks game, the only NHL game ever called for rain.", s: [["Mercury News (2009)", SRC.merc2009], ["Valley Water", SRC.vwE8]] },
  { d: "1996", cat: "build", t: "Downtown work halted", x: "Construction stops over threatened and endangered species; a collaborative forms in 1997 to resolve it.", s: [["Conservancy history", SRC.grpg]] },
  { d: "1999", cat: "fund", t: "Upper Guadalupe project authorized; downtown resumes", x: "The Corps authorizes flood protection from I-280 to Blossom Hill Rd, and downtown construction restarts.", s: [["Valley Water", SRC.vwE8], ["Conservancy history", SRC.grpg]] },
  { d: "2002-12", cat: "plan", t: "Final park plan", x: "The Council approves the Guadalupe River Park Master Plan; the Guadalupe Gardens plan was adopted in April.", s: [["Park master plan (2002)", SRC.mpPark], ["Council memo (2025)", SRC.gardensMP2025]] },
  { d: "2004-12", cat: "flood", t: "Downtown and Alviso protected", x: "The downtown Corps project reaches flood protection, and Valley Water finishes the Lower Guadalupe project from I-880 to Alviso ($32M, plus $16M to raise the Hwy 237 bridge).", s: [["Conservancy history", SRC.grpg], ["Mercury News (2009)", SRC.merc2009]] },
  { d: "2005", cat: "build", t: "Guadalupe River Park opens", x: "After 13 years, about $350 million and a halt over endangered species, the 2.6-mile park and its trails open downtown. The same year, a juvenile mammoth is found in the riverbank near Trimble Rd.", s: [["Mercury News (2009)", SRC.merc2009], ["SPUR", SRC.spur]] },
  { d: "2005-06-21", cat: "plan", t: "Plan to pave the trail to Alviso", x: "The Council approves the Lower Guadalupe River Trail Master Plan: about 6.2 miles on flood maintenance roads from Gold St to I-880.", s: [["Lower trail master plan", SRC.mpLower], ["CEQA 2005022117", "https://ceqanet.lci.ca.gov/2005022117"]] },
  { d: "2007-10", cat: "flood", t: "A longer bridge at Willow Glen Way", x: "Valley Water and the City replace the bridge with a span sized for future channel widening.", s: [["Valley Water", SRC.vwE8]] },
  { d: "2008-07", cat: "flood", t: "Upper Guadalupe breaks ground", x: "Valley Water starts a $256 million project to protect six miles from I-280 to Blossom Hill Rd, expected to finish by 2016.", s: [["Mercury News (2009)", SRC.merc2009]] },
  { d: "2009-05-28", cat: "plan", t: "National Recreation Trail", x: "Interior designates the \"San José Trail Network\" (Guadalupe River Trail, Hwy 237 Bikeway and northern Coyote Creek Trail) a National Recreation Trail.", s: [["Interior Department", SRC.doi2009]] },
  { d: "2012-08", cat: "flood", t: "Flood Reach 6 done; trail paving under way", x: "Valley Water finishes I-280 to Willow St. Downstream, contractors pave the trail between I-880 and Hwy 101.", s: [["Valley Water", SRC.vwE8], ["Cyclelicious", "http://www.cyclelicio.us/2012/grt-respect-trail-closure/"]] },
  { d: "2013-04-20", cat: "build", t: "Paved from downtown to Alviso", x: "The newly paved 6½-mile stretch opens, completing a continuous paved trail from Alviso to downtown. It goes on to win state and regional trail awards.", s: [["Silicon Valley Cyclist", SRC.hosler2013], ["City trail page (archived)", SRC.cityPage]] },
  { d: "2015", cat: "fund", t: "Federal money for the upper river stalls", x: "With no federal funding since FY15, design and construction of flood Reaches 7–11 stop.", s: [["Valley Water", SRC.vwE8]] },
  { d: "2015-11", cat: "flood", t: "Branham Ln to Blossom Hill Rd done", x: "The Corps and Valley Water finish flood Reach 12; the trail beside it runs from Chynoweth Ave to Almaden Lake.", s: [["Valley Water", SRC.vwE8]] },
  { d: "2017-02", cat: "flood", t: "Biggest flow since 2004", x: "The February storm sends 6,340 cfs down the lower river. High-water marks show the Tasman–I-880 stretch lacks its design capacity.", s: [["Valley Water", SRC.vwLower]] },
  { d: "2017-06-20", cat: "plan", t: "Plan to close the 4.9-mile gap", x: "The Council adopts a master plan from Virginia St to Chynoweth Ave. Valley Water objects, and years of negotiation follow.", s: [["Council memo (2023)", SRC.mpUpdate2023], ["Master plan", SRC.mpUpper]] },
  { d: "2020-06", cat: "fund", t: "$5.2M from Measure B for design", x: "VTA awards $5,175,000 in 2016 Measure B money to design the gap closure.", s: [["Council memo (2024)", SRC.measureB2024]] },
  { d: "2021-02", cat: "camp", t: "FAA objects to the Gardens encampment", x: "The FAA says the camp on FAA-funded Guadalupe Gardens land violates the City's grant terms. It peaks at about 250 people that summer.", s: [["Council memo (2022)", SRC.gardens2022]] },
  { d: "2021-10", cat: "camp", t: "A million pounds of trash", x: "Clearing the first two stages of Guadalupe Gardens removes over a million pounds of trash and 34 vehicles.", s: [["Council memo (2022)", SRC.gardens2022]] },
  { d: "2022-12", cat: "camp", t: "Gardens encampment cleared", x: "The major camp north of Columbus Park is cleared, six months after the City's June 2022 target. Trail use had fallen 48% since 2019.", s: [["Council memo (2023)", SRC.patrol2023], ["Work plan (2022)", SRC.gardensPlan2022]] },
  { d: "2022-12-08", cat: "flood", t: "$152.8M plan for Willow Glen's flood reaches", x: "The Corps and Valley Water present a tentatively selected plan for Reaches 7–8, from Willow St to Willow Glen Way.", s: [["Community meeting slides", SRC.ugrSlides]] },
  { d: "2023-02-14", cat: "camp", t: "Police patrols extend to the river trail", x: "The Council adds the Guadalupe River Trail to the SJPD trail patrol: $400,000 for six months, split with Valley Water.", s: [["Council memo", SRC.patrol2023]] },
  { d: "2023-03-21", cat: "plan", t: "Gap plan amended to satisfy Valley Water", x: "The trail must sit 1.6 ft above the 100-year flood level and fit future channel work.", s: [["Council memo", SRC.mpUpdate2023]] },
  { d: "2023", cat: "camp", t: "$2M state grant clears downtown camps", x: "In fall 2023, a state Encampment Resolution Fund grant moves people living between Woz Way and Julian St into housing before a three-week trail closure.", s: [["Rules memo (2024)", SRC.rules2024]] },
  { d: "2024-02", cat: "camp", t: "A \"no return zone\"", x: "The Council unanimously approves $200,000 to keep Woz Way to Julian St free of encampments.", s: [["San José Spotlight", SRC.spotNoReturn]] },
  { d: "2024-11-26", cat: "camp", t: "Valley Water bans camping on its land", x: "Before the ban, the Guadalupe was one of the waterways with the most encampments.", s: [["Valley Water", SRC.vwGoodNeighbor]] },
  { d: "2024-12-10", cat: "fund", t: "Designers hired for Branham–Chynoweth", x: "The City hires GHD and RRM to design Measure B trail projects, including the Branham Ln to Chynoweth Ave link.", s: [["Council memo", SRC.measureB2024]] },
  { d: "2025-04-22", cat: "fund", t: "Microsoft pays for a trail ramp", x: "Microsoft agrees to fund up to $1M for a ramp from Component Dr to the trail in North San José.", s: [["Council memo", SRC.microsoft2025]] },
  { d: "2025-06-16", cat: "camp", t: "Summer sweeps near Taylor St", x: "The City begins weeks of phased sweeps along the trail near Taylor St and Columbus Park.", s: [["CBS SF", "https://www.cbsnews.com/sanfrancisco/news/san-jose-encampment-sweep-guadalupe-river/"], ["ABC7", "https://abc7news.com/post/sweeps-san-joses-largest-homeless-encampment-begins-will-run-summer/16767543/"]] },
  { d: "2025-09-18", cat: "camp", t: "Trail use doubles where camps were cleared", x: "City counts show use up 110% between Woz Way and Julian St, and 36% between Julian St and Coleman Ave.", s: [["San José Spotlight", SRC.spotUseUp]] },
  { d: "2026-04-02", cat: "fund", t: "$1M federal money for the southern gap", x: "Rep. Jimmy Panetta announces funding for Branham Ln to Chynoweth Ave. The full Bay-to-South-San-José trail is targeted for 2029.", s: [["KTVU", SRC.ktvu2026]] },
  { d: "2026-04-14", cat: "plan", t: "Plan for the flood-prone underpasses", x: "With 433,000 users in 2025, the City lays out detours around undercrossings that flood: Trimble, Tasman and Hwy 237. Montague and Trimble closed for silt that April.", s: [["Council memo", SRC.bikeConn2026], ["City trail page (archived)", SRC.cityPage]] },
  { d: "2026-08", cat: "fund", t: "The Corps stops paying for the upper river study", x: "The Corps tells Valley Water no more federal money will go to re-evaluating the Willow Glen flood reaches; Valley Water is looking at going it alone.", s: [["Valley Water", SRC.vwE8]] },
  { d: "2027", cat: "flood", future: true, t: "Levee raising near Tasman begins (planned)", x: "Valley Water expects to start raising levees and rebuilding bridge walls between Tasman Dr and Hwy 101 in late 2027, keeping the trail open.", s: [["Valley Water", SRC.vwLower], ["Recommended alternative", SRC.lgrPres]] },
  { d: "2029", cat: "build", future: true, t: "Target for a continuous trail", x: "The date given in 2026 for a trail from the Bay to South San José, which depends on funding about $40M of gap work.", s: [["KTVU", SRC.ktvu2026], ["Rails to Trails profile", SRC.rtc2024]] },
  { d: "2033", cat: "flood", future: true, t: "Flood projects' scheduled finish", x: "Valley Water lists both the Upper and Lower Guadalupe projects as finishing in FY2033.", s: [["Valley Water", SRC.vwE8]] },
];

// Recent trail spending with published amounts (none of it new trail mileage).
const PROJECTS = [
  { name: "Encampment Resolution grant, Woz Way–Julian St", id: "State ERF", year: 2023, mi: null, kind: "housing & clearing", cost: 2.0, contract: null, funding: "State of California", src: SRC.rules2024 },
  { name: "Branham Ln → Chynoweth Ave design", id: "Measure B", year: 2026, mi: null, kind: "design budget", cost: 1.35, contract: null, funding: "VTA 2016 Measure B, Park Trust Fund", src: SRC.measureB2024, note: "Budget for 95% design" },
  { name: "Gardens vehicle barriers (estimate)", id: "SJ #9821", year: 2023, mi: null, kind: "bollards", cost: 0.828, contract: null, funding: "Airport, Parks, ARPA", src: SRC.gardens2022, note: "Preliminary estimate" },
  { name: "Component Dr ramp (estimate)", id: "Microsoft-funded", year: 2025, mi: null, kind: "access ramp", cost: 0.6, contract: null, funding: "Microsoft (up to $1M)", src: SRC.microsoft2025, note: "2023 estimate" },
  { name: "Trail police patrol, Jan–Jun 2023", id: "SJPD", year: 2023, mi: null, kind: "patrol", cost: 0.4, contract: null, funding: "City and Valley Water, 50/50", src: SRC.patrol2023 },
];
const PM_EST = [
  { name: "Gap plan, table total (2021)", sub: "City master plan", mi: 4.9, cost: 54.94, note: "$54.9M including bridges, for 4.9 mi", src: SRC.mpUpper },
  { name: "Gap plan, narrative (2021)", sub: "City master plan", mi: 4.9, cost: 46.3, note: "The plan's text says $46.3M", src: SRC.mpUpper },
  { name: "Rails to Trails profile (2024)", sub: "advocates' figure", mi: 6.0, cost: 47, note: "$47M for 6 mi; $7.35M secured", src: SRC.rtc2024 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "Rails to Trails (2024)", pm: 47 / 6 },
  { label: "City plan, text", pm: 46.3 / 4.9 },
  { label: "City plan, table", pm: 54.94 / 4.9 },
];
const DEFAULT_PM = 54.94 / 4.9;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Virginia St → Curtner Ave (Willow Glen)", ids: ["GUA17","GUA18","GUA19","GUA20","GUA21"], mi: 2.29, status: "Planned", hard: "Waits on unbuilt flood Reaches 7–8; federal study money ended 2026" },
  { name: "Curtner Ave → Branham Ln", ids: ["GUA22","GUA23","GUA24","GUA25"], mi: 2.24, status: "Planned", hard: "Almaden Expwy; $6M bridge over Capitol Expwy" },
  { name: "Branham Ln → Chynoweth Ave", ids: ["GUA26"], mi: 0.82, status: "Design", hard: "In design; $1M federal (2026); first to be built" },
];

const STATS = ({ gapMi }) => [
  ["12.4 mi", "continuous from Alviso to Virginia St, just south of downtown"],
  [gapMi.toFixed(1) + " mi", "missing through Willow Glen and South San José, waiting on an unfinished flood project"],
  ["433,000", "trips on the trail in 2025; about 30% are commuters"],
  ["$350M", "for downtown flood control and Guadalupe River Park, finished in 2005"],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget then", "Now"];
const DELIVERY = [
  ["Upper Guadalupe flood project (I-280 → Blossom Hill)", "Done by 2016", "Reaches 7–11 unbuilt; finish now FY2033", "bad", "$256M (2008)", "$177M local + $188M federal (2021)", "bad", SRC.vwE8],
  ["Downtown flood project and park", "Construction from 1992", "Halted 1996; opened 2005", "warn", "–", "~$350M", "unk", SRC.merc2009],
  ["Lower Guadalupe capacity restoration (Tasman–I-880)", "Done by June 2025", "Construction to start late 2027", "bad", "$95.9M (2021)", "Not yet known", "unk", SRC.cip2022],
  ["Guadalupe Gardens encampment cleared", "June 30, 2022", "End of 2022", "warn", "$1.5M fence (deferred)", "–", "unk", SRC.patrol2023],
  ["Virginia St → Chynoweth Ave trail", "Plan adopted 2017", "Still in design in 2026; $7.35M of $47M secured (2024)", "bad", "$46.3–54.9M (plan)", "$47M (2024)", "unk", SRC.rtc2024],
];
// The 2021 master plan's estimate, segment by segment (Fig. 42).
const OFFICIAL_EST = {
  head: ["Segment", "", "Plan estimate", "Note"],
  rows: [
    ["1", "McLellan → Willow St", null, 2.72, ""],
    ["2", "Willow St → Alma Ave", null, 2.39, ""],
    ["3", "Alma Ave → Three Creeks", null, 4.71, ""],
    ["4", "Three Creeks → Willow Glen Way", null, 1.55, ""],
    ["–", "Willow–Calle bridge", null, 3.5, "Bridge"],
    ["5", "Willow Glen Way → Almaden Rd", null, 5.0, ""],
    ["6", "Almaden Rd → Curtner Ave", null, 3.28, ""],
    ["7", "Curtner Ave → Almaden Expwy", null, 0.72, ""],
    ["8", "Almaden Expwy → Foxworthy Ave", null, 12.94, "Most expensive stretch"],
    ["9", "Foxworthy Ave → Steval", null, 2.59, ""],
    ["–", "Capitol Expwy overcrossing", null, 6.0, "Bridge"],
    ["10", "Steval → Thousand Oaks", null, 0.86, ""],
    ["11", "Branham Ln → Thousand Oaks", null, 1.23, ""],
    ["12", "Chynoweth Ave → Branham Ln", null, 2.69, "In design"],
    ["–", "Chynoweth bridge and trail spur", null, 4.76, "Bridge"],
  ],
  total: ["4.9 mi", "$54.9M (text says $46.3M)"],
};

const DOCS = [
  { g: "Master plans", items: [
    ["Guadalupe River Park Master Plan (2002)", SRC.mpPark],
    ["Guadalupe Gardens Master Plan (2002)", SRC.gardensMP2002],
    ["Reach 6 trail master plan: Woz Way to Willow St (2004)", SRC.mpReach6],
    ["Lower Guadalupe River Trail Master Plan, Gold St to I-880 (2005)", SRC.mpLower],
    ["Trail master plan: Virginia St to Chynoweth Ave (2021 edition)", SRC.mpUpper],
    ["Gap-plan gateway renderings (2015)", SRC.gateway],
    ["Gap-plan presentation to Parks Commission (2017)", SRC.prc2017],
  ]},
  { g: "Trail maps & studies", items: [
    ["City map: Gold St to Hwy 101", SRC.mapGold101],
    ["City map: Hwy 101 to I-880", SRC.map101880],
    ["City map: Guadalupe River Park and Gardens", SRC.mapPark],
    ["City map: Chynoweth Ave to Almaden Lake", SRC.mapAlmaden],
    ["St. John St to Julian St west-bank feasibility study (2024)", SRC.stJohnStudy],
    ["UPRR undercrossing feasibility study", SRC.uprrStudy],
    ["North San José access and ramp study", SRC.nsjRamp],
    ["Rails to Trails: gap-closure project profile (2024)", SRC.rtc2024],
    ["SPUR: Rewilding the Guadalupe River (2021)", SRC.spurRewild],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: downtown flood project, I-880 to I-280 (1999)", "https://ceqanet.lci.ca.gov/1999102056"],
    ["CEQA: Lower Guadalupe flood project (2000)", "https://ceqanet.lci.ca.gov/2000042051"],
    ["CEQA: Upper Guadalupe flood project (2001)", "https://ceqanet.lci.ca.gov/1997022059/3"],
    ["CEQA: trail Reach 12 Phase I (2003)", "https://ceqanet.lci.ca.gov/2003032136"],
    ["CEQA: trail bridge at Almaden Lake Park (2003)", "https://ceqanet.lci.ca.gov/2003042122/2"],
    ["CEQA: Lower Guadalupe River Trail Master Plan (2005)", "https://ceqanet.lci.ca.gov/2005022117"],
    ["CEQA: Coleman Rd undercrossing (2015)", "https://ceqanet.lci.ca.gov/2004042137/2"],
    ["Gap-plan Draft IS/MND (2017)", SRC.ismnd2017],
    ["Reach 6 aquatic habitat project, Final MND (2019)", SRC.reach6MND],
  ]},
  { g: "Valley Water & Army Corps", items: [
    ["Capital plan 2022–26, flood chapter", SRC.cip2022],
    ["Upper Guadalupe project fact sheet (2022)", SRC.ugrShell],
    ["Upper Guadalupe community meeting slides (2022)", SRC.ugrSlides],
    ["Lower Guadalupe recommended alternative (2023)", SRC.lgrPres],
    ["Lower Guadalupe display boards (2023)", SRC.lgrBoards],
  ]},
  { g: "San José memos", items: [
    ["Guadalupe Gardens fencing & activation (2022)", SRC.gardens2022],
    ["Guadalupe Gardens fencing presentation (2022)", SRC.gardensPres2022],
    ["Guadalupe Gardens encampment work plan (2022)", SRC.gardensPlan2022],
    ["Trail patrol program amendment (2023)", SRC.patrol2023],
    ["Gap master plan update (2023)", SRC.mpUpdate2023],
    ["Rules memo: Preserving Our Progress (2024)", SRC.rules2024],
    ["Measure B trail design agreements (2024)", SRC.measureB2024],
    ["Guadalupe Gardens master plan amendment (2025)", SRC.gardensMP2025],
    ["Microsoft trail access agreement (2025)", SRC.microsoft2025],
    ["Bike Connections Plan (2026)", SRC.bikeConn2026],
  ]},
];

const MAPS = [
  { t: "City trail page (archived)", d: "9 miles Gold St to Virginia St and 2.4 miles Chynoweth to Coleman; about 20 when finished.", u: SRC.cityPage, tag: "Official" },
  { t: "Guadalupe River Park Conservancy", d: "The park's nonprofit: history, events and volunteer work.", u: "https://grpg.org/", tag: "Community" },
  { t: "Valley Water: Upper Guadalupe project", d: "Status of the flood reaches the trail gap depends on.", u: SRC.vwE8, tag: "Official" },
  { t: "Valley Water: Lower Guadalupe project", d: "Levee work planned between Tasman Dr and Hwy 101.", u: SRC.vwLower, tag: "Official" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
];

const NEWS = [
  ["2005-09-10", "Wikinews", "Guadalupe River Park and Gardens opens in San Jose, CA, USA", "https://en.wikinews.org/wiki/Guadalupe_River_Park_and_Gardens_opens_in_San_Jose,_CA,_USA", "San José celebrated the opening of Guadalupe River Park and Gardens, a 12-year, roughly $340 million project with 2.6 miles of riverside trails tied to downtown flood control."],
  ["2013-06-09", "Silicon Valley Cyclist", "Guadalupe River path paves the way to Alviso", "https://rayhosler.wordpress.com/2013/06/09/guadalupe-river-path-paves-the-way-to-alviso/", "Ray Hosler rides the newly finished pavement from downtown San José to Alviso, about 13 miles, noting low sections still flood in heavy rain."],
  ["2017-03-01", "San José Inside", "San Jose Is Lucky No One Died in Inexcusable Response to Floods", "https://www.sanjoseinside.com/opinion/san-jose-is-lucky-no-one-died-in-inexcusable-response-to-floods/", "Opinion piece on the February 2017 Coyote Creek flood that recalls the March 10, 1995 Guadalupe River flood, which put Henry's Hi-Life under four feet of water."],
  ["2017-04-04", "ABC7", "Search for suspect after 2 stabbed on Guadalupe River Trail in San Jose", "https://abc7news.com/post/search-for-suspect-after-2-stabbed-on-trail-in-san-jose/1835041/", "Two people were stabbed just after midnight on the trail near Woz Way, near the Children's Discovery Museum; both were expected to recover."],
  ["2019-08-12", "Streetsblog San Francisco", "Touring the Guadalupe River Trail", "https://sf.streetsblog.org/2019/08/12/touring-the-guadalupe-river-trail", "SPUR San José and the Guadalupe River Park Conservancy led a tour pitching the river park as a 'Central Park' for San José, and pointed to barriers such as wide roads and slow crossings near SAP Center."],
  ["2020-06-24", "Bay Nature", "Did Salmon Always Live in San José?", "https://baynature.org/2020/06/24/did-salmon-always-live-in-san-jose/", "Three salmon bones from a Mission Santa Clara dig suggest Chinook once used the Guadalupe River, at least in good years."],
  ["2021-03-26", "San José Inside", "What's Next for Guadalupe River Park and SJ's Homeless Crisis?", "https://www.sanjoseinside.com/news/whats-next-for-guadalupe-river-park-and-sjs-homeless-crisis/", "Hundreds of unhoused residents were camped along the three-mile downtown park, and many housed residents had stopped using it."],
  ["2021-05-04", "San José Spotlight", "UPDATE: San Jose City Council approves new downtown landmark", "https://sanjosespotlight.com/new-downtown-landmark-faces-san-jose-city-council/", "The council voted unanimously to advance 'The Breeze of Innovation' landmark for Arena Green, at the southern tip of Guadalupe River Park."],
  ["2021-06-28", "CBS San Francisco", "FAA Raises Concerns Over Sprawling Homeless Encampment Near San Jose Airport", "https://www.cbsnews.com/sanfrancisco/news/faa-homeless-encampment-mineta-san-jose-airport/", "The FAA asked San José for a removal plan by June 30 for an encampment of an estimated 200 to 500 people on airport-approach land beside the river park."],
  ["2021-07-01", "San José Inside", "Life in the Crash Zone: What's Next for San Jose's Largest Homeless Encampment?", "https://www.sanjoseinside.com/news/life-in-the-crash-zone-whats-next-for-san-joses-largest-homeless-encampment/", "An estimated 250 to 600 people lived on 40 acres under the SJC flight path, and the FAA wanted the camp gone by April 2022."],
  ["2021-07-15", "San José Spotlight", "A tale of two San Jose rose gardens", "https://sanjosespotlight.com/a-tale-of-two-san-jose-rose-gardens/", "The Heritage Rose Garden in Guadalupe Gardens, planted in 1995, received about $99,000 a year against $340,000 for the Municipal Rose Garden, and had suffered vandalism and arson."],
  ["2022-02-08", "San José Spotlight", "San Jose approves park plan to keep homeless out of flight path", "https://sanjosespotlight.com/san-jose-plans-prototype-park-to-keep-homeless-out-of-airport-flight-path-planes/", "The council unanimously approved a 40-acre 'prototype park' at Guadalupe Gardens to meet an FAA June 30 deadline, which meant moving about 150 people living there."],
  ["2022-02-10", "ABC7", "'We don't need that': SJ pursues dog park, disc golf course at site of airport homeless encampment", "https://abc7news.com/san-jose-homeless-encampment-airport-park-proposal-disc-golf/11550955", "The plan for the airport-area encampment site included a 15.8-acre disc golf course and a dog park, and required relocating more than 100 unhoused residents."],
  ["2023-02-15", "San José Spotlight", "San Jose expands police patrol on walking trails", "https://sanjosespotlight.com/san-jose-expands-police-patrol-on-walking-trails/", "The council approved $400,000 to extend a two-officer bike patrol, working 10 hours a day, seven days a week, to the Guadalupe River Trail."],
  ["2024-01-17", "KQED", "State Program to Clear Encampments Shows Mixed Results With Many Still Unhoused", "https://www.kqed.org/news/11972829/state-program-to-clear-homeless-encampments-show-signs-of-success-but-housing-remains-elusive", "Of nearly 200 people moved off San José's river trail with state Encampment Resolution Fund money, only about 11% reached permanent housing (CalMatters story republished by KQED)."],
  ["2024-01-21", "KTVU", "San Jose moves to ban encampments on Guadalupe River Trail", "https://www.ktvu.com/news/san-jose-banning-encampments-on-guadalupe-trail", "After a $2 million grant paid for shelter offers, the city proposed a first-of-its-kind 'no-return zone' on a half-mile section of the trail."],
  ["2024-02-03", "NBC Bay Area", "San Jose declares local emergency, orders unhoused community to evacuate due to storm", "https://www.nbcbayarea.com/news/local/san-jose-local-emergency-orders-weather/3442753/", "With up to two inches of rain forecast, the city ordered unhoused people along the Guadalupe River to evacuate."],
  ["2024-02-05", "San José Spotlight", "San Jose helps evacuate homeless residents amid storm", "https://sanjosespotlight.com/san-jose-helps-evacuate-homeless-unhoused-residents-amid-rain-storm-atmospheric-river/", "Flooded encampments along the Guadalupe River forced evacuations, and firefighters made two water rescues using inflatable boats."],
  ["2024-02-07", "San José Spotlight", "San Jose creates 'no return zone' for homeless residents along river trail", "https://sanjosespotlight.com/san-jose-creates-no-return-zone-for-homeless-residents-along-guadalupe-river-trail/", "The council approved $200,000 to clear about 20 people from the trail between Woz Way and Julian Street by April and keep camps from returning."],
  ["2024-02-16", "NBC Bay Area", "San Jose homeless encampment cleared out for dog park", "https://www.nbcbayarea.com/news/local/south-bay/san-jose-dog-park/3456753/", "An encampment of vehicles and RVs was cleared to build a 5-acre dog park near the airport, which stayed closed for the time being because of nearby camps and a recent stabbing death."],
  ["2024-05-24", "San José Spotlight", "'Where do I go?': San Jose homeless residents living along creeks dread future", "https://sanjosespotlight.com/where-do-i-go-san-jose-homeless-residents-living-along-creeks-dread-future/", "Mayor Matt Mahan's plan to clear camps from the Guadalupe River by June 2025, citing water quality, left residents with no clear place to go; Spotlight found he had overstated the possible fines."],
  ["2025-02-06", "San José Spotlight", "Silicon Valley water agency flops on outreach ahead of sweeps", "https://sanjosespotlight.com/silicon-valley-water-agency-flops-on-outreach-ahead-of-sweeps/", "Valley Water began clearing camps on its 333 miles of waterway land, including near the Guadalupe River, before the promised nonprofit outreach was in place."],
  ["2025-05-07", "San José Inside", "Two SJ Police Officers Stabbed during Arrest, One Hurt Seriously", "https://www.sanjoseinside.com/news/two-sj-police-officers-stabbed-during-arrest-one-hurt-seriously/", "Two officers were stabbed, one seriously, during an arrest in the 500 block of Coleman Avenue next to Guadalupe River Park."],
  ["2025-05-12", "San José Spotlight", "San Jose cuts parkland to add more businesses near airport", "https://sanjosespotlight.com/san-jose-cuts-parkland-to-add-more-businesses-near-airport/", "The council unanimously rezoned about 10% of the 120-acre Guadalupe Gardens for commercial use along Coleman Avenue."],
  ["2025-06-14", "San José Spotlight", "San Jose to clear Columbus Park — again", "https://sanjosespotlight.com/san-jose-to-clear-columbus-park-again/", "Sweeps were set for June 16 to 30 along the Guadalupe River, with Columbus Park, where more than 80 vehicles and RVs were parked, to be cleared by October."],
  ["2025-06-17", "CBS San Francisco", "San Jose begins large-scale encampment sweep near Guadalupe River", "https://www.cbsnews.com/sanfrancisco/news/san-jose-encampment-sweep-guadalupe-river/", "A multi-week cleanup of the river trail began, to be followed by a No Encampment Zone, and Columbus Park construction was planned for early 2026."],
  ["2025-06-17", "ABC7", "Sweeps near San Jose's largest homeless encampment along Guadalupe River Trail begins, will run through summer", "https://abc7news.com/post/sweeps-san-joses-largest-homeless-encampment-begins-will-run-summer/16767543/", "Phased sweeps near Columbus Park began just after the council passed a code under which refusing shelter can lead to a treatment mandate or arrest."],
  ["2025-06-23", "KTVU", "Guadalupe River encampment sweep continues amid rising unhoused population in Santa Clara County", "https://www.ktvu.com/news/san-jose-guadalupe-river-encampment-sweep-continues-rising-unhoused-population", "The river sweep entered its second week as the county reported its unhoused population up more than 8%, to over 10,700."],
  ["2025-08-25", "San José Spotlight", "Valley Water land sees reduction in San Jose homeless camps", "https://sanjosespotlight.com/valley-water-land-sees-reduction-in-san-jose-homeless-camps/", "Valley Water reported 462 camps cleared from its land, the number of people living there down from more than 450 to 224, and 1.2 million pounds of trash removed, including along the Guadalupe River at Cherry Avenue."],
  ["2025-09-18", "San José Spotlight", "San Jose river trail use up after homeless sweeps", "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/", "City data showed Guadalupe River Trail use up 110% between Woz Way and Julian Street after the sweeps, and the conservancy reported more wildlife sightings."],
  ["2025-11-17", "KQED", "New San José Tiny Homes for Unhoused Open Next to Former Encampment", "https://www.kqed.org/news/12064380/new-san-jose-tiny-homes-for-unhoused-open-next-to-former-encampment", "A 136-bed tiny-home community opened on Cherry Avenue along the Guadalupe River, next to a just-cleared camp under Highway 85."],
  ["2026-04-01", "San José Spotlight", "San Jose rolls out the welcome mat at Arena Green", "https://sanjosespotlight.com/san-jose-rolls-out-the-welcome-mat-at-arena-green/", "After about $2.3 million in trail and lighting work, Arena Green reopened with a new pickleball court and a pavilion converted from the old carousel with a $200,000 Sharks Foundation gift."],
  ["2026-04-02", "KTVU", "Federal funding boosts Guadalupe Trail expansion in San Jose", "https://www.ktvu.com/news/federal-funding-boosts-guadalupe-trail-expansion-san-jose", "A $1 million federal grant will pay for a half-mile extension between Branham Lane and Chynoweth Avenue, part of a Bay-to-South-San-José trail due by 2029."],
  ["2026-09-20", "NBC Bay Area", "Body found in Guadalupe River Trail area in San Jose", "https://www.nbcbayarea.com/news/local/body-found-guadalupe-river-trail/4145909/", "Police found a body near the trail at Coleman Avenue and Autumn Parkway around 1:15 a.m. on a Sunday and opened an investigation."],
  ["2026-10-19", "NBC Bay Area", "Growing beaver population could impact salmon along San Jose's Guadalupe River", "https://www.nbcbayarea.com/news/local/guadalupe-river-san-jose-beavers-salmon/4161307/", "Beavers are building dams on the Guadalupe River in San José; the dams can shelter young salmon, but the silt they trap may smother spawning beds."],
  ["2026-11-13", "San José Spotlight", "San Jose's winter flood risks come into focus", "https://sanjosespotlight.com/san-joses-winter-flood-risks-come-into-focus/", "A UC Davis report rated Alviso, which lies below sea level and is bounded on the west by the Guadalupe River, at high risk of coastal flooding this El Niño winter."],
];

const PHOTOS = [
  {"f": "Salt ponds, Alviso Marina County Park CA Aug 2019.jpg", "c": "Salt ponds at Alviso Marina, where the trail meets the Bay", "a": "Thomson200", "l": "CC0", "ll": [37.429, -121.98], "approx": true, "y": 2019},
  {"f": "Alviso Marina County Park View At Sunset.jpg", "c": "Boardwalk and marsh at Alviso Marina County Park at dusk", "a": "Wanderenvy", "l": "CC BY-SA 3.0", "ll": [37.425, -121.966667], "y": 2013},
  {"f": "Amtrak train at Guadalupe River, Alviso.jpg", "c": "An Amtrak train crosses the Guadalupe River marshes at Alviso", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.4232, -121.9765], "approx": true, "y": 2021},
  {"f": "Guadalupe River of San Jose - panoramio.jpg", "c": "The Guadalupe River near Alviso, with the Diablo Range beyond", "a": "Bohao Zhao", "l": "CC BY 3.0", "ll": [37.42305, -121.977353], "y": null},
  {"f": "Red-tailed hawk, Buteo jamaicensis, Guadeloupe River, Santa Clara, California, USA (30920038136).jpg", "c": "A red-tailed hawk soars over the lower Guadalupe River", "a": "Derek Keats", "l": "CC BY 2.0", "ll": [37.403313, -121.950531], "y": 2016},
  {"f": "Guadalupe River Trail.jpg", "c": "The river and trail looking north from near Trimble Road", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.389, -121.933], "approx": true, "y": 2019},
  {"f": "Guadalupe River trail (23835759271).jpg", "c": "Paved Guadalupe River Trail in North San José under winter clouds", "a": "Sandip Bhattacharya", "l": "CC BY 2.0", "ll": null, "y": 2015},
  {"f": "VTA Movers & Shakers Ride at SJC Airport (26700384770).jpg", "c": "Bike to Work Day riders on the trail beside SJC airport", "a": "Richard Masoner / Cyclelicious", "l": "CC BY-SA 2.0", "ll": [37.357, -121.913], "approx": true, "y": 2016},
  {"f": "VTA Movers & Shakers pass under I-880 on GRT (26369651673).jpg", "c": "Commuters pass under I-880 on the Guadalupe River Trail", "a": "Richard Masoner / Cyclelicious", "l": "CC BY-SA 2.0", "ll": [37.35, -121.908], "approx": true, "y": 2016},
  {"f": "Kluft-photo-2019-10-13-Bike-to-the-Bay-SJBP.jpg", "c": "Riders on the levee trail during the 2019 Bike to the Bay", "a": "Ikluft", "l": "CC BY-SA 4.0", "ll": null, "y": 2019},
  {"f": "Heritage Rose Garden, San Jose - panoramio (2).jpg", "c": "Heritage Rose Garden in Guadalupe Gardens, near the airport", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.34372, -121.90759], "y": null},
  {"f": "San Jose Heritage Rose Garden view 2.jpg", "c": "Old roses lining a path in the San José Heritage Rose Garden", "a": "Stan Shebs", "l": "CC BY-SA 3.0", "ll": [37.3438, -121.907], "approx": true, "y": 2005},
  {"f": "Guadalupe River Trail - panoramio.jpg", "c": "Wildflowers beside the trail in the Guadalupe Gardens stretch", "a": "Alexey Komarov", "l": "CC BY 3.0", "ll": [37.34443, -121.90433], "y": null},
  {"f": "Gaudalupe1.jpg", "c": "Tree-lined Guadalupe River Trail just north of downtown", "a": "Grey3k", "l": "CC BY 3.0", "ll": [37.344555, -121.90535667], "y": null},
  {"f": "Restored path opens November, 2011 (6379950733).jpg", "c": "New trail undercrossing at the railroad bridge, opened in 2011", "a": "U.S. Army Corps of Engineers Sacramento District", "l": "Public domain", "ll": [37.338559, -121.902376], "y": 2011},
  {"f": "Guadalupe river park opens.JPG", "c": "Grand-opening festivities at Guadalupe River Park, September 2005", "a": "Dvortygirl", "l": "Public domain", "ll": [37.333, -121.899], "approx": true, "y": 2005},
  {"f": "Gudalupe2.jpg", "c": "Trail and river channel passing under Highway 87 downtown", "a": "Grey3k", "l": "CC BY 3.0", "ll": [37.33313667, -121.89789389], "y": null},
  {"f": "Guadalupe River Trail at West St. John Street, San Jose, California.jpg", "c": "The trail crossing at West St. John Street (Sharks Way) by Arena Green", "a": "Mxn", "l": "CC BY-SA 4.0", "ll": [37.3355, -121.8985], "approx": true, "y": 2025},
  {"f": "BTWD 2016 commuters on Guadalupe River Trail San Jose CA (26700380970).jpg", "c": "Bike commuters on the Guadalupe River Trail", "a": "Richard Masoner / Cyclelicious", "l": "CC BY-SA 2.0", "ll": null, "y": 2016},
  {"f": "Audubon's warbler (26409360366).jpg", "c": "An Audubon's warbler in Guadalupe River Park", "a": "Melissa McMasters", "l": "CC BY 2.0", "ll": null, "y": 2016},
  {"f": "Chinook salmon leaping Los Gatos Creek 2018-12 Mike Tamaro.jpg", "c": "Chinook salmon leaps in Los Gatos Creek, a Guadalupe tributary", "a": "Schmiebel (Mike Tamaro)", "l": "CC BY-SA 4.0", "ll": null, "y": 2018},
  {"f": "Willow Glen Bridge Over the Guadalupe River 1927.jpg", "c": "The 1927 Willow Street bridge over the river in Willow Glen", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.304011, -121.881639], "y": 2021},
  {"f": "AlmadenLakeLoopTrail.jpg", "c": "Cyclist on the Almaden Lake trail at the south end of the route", "a": "Bunty4", "l": "CC0", "ll": [37.243111, -121.870383], "y": 2024},
  {"f": "Almaden Lake Park 1.3.jpg", "c": "Clouds reflected in Almaden Lake, with the Santa Cruz Mountains", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.242, -121.872], "approx": true, "y": 2008},
  {"f": "Almaden Lake Park 1.1.jpg", "c": "A couple on a lakeside bench at Almaden Lake Park", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.239326, -121.872383], "y": 2008},
];

const OUTCOMES = {
  "2008-07": [
    ["Completed", "bad", "No. Reaches 7, 8, 10A, 10C and 11 are unbuilt; federal money stopped in 2015 and the re-study lost its funding in 2026."],
    ["Schedule", "bad", "Expected by 2016; now scheduled for FY2033."],
  ],
  "2017-06-20": [
    ["Completed", "bad", "Not yet. Nine years later, only Branham–Chynoweth is in design."],
    ["Budget", "unk", "The plan's own estimate is $46.3M in its text but $54.9M in its cost table."],
  ],
  "2022-12": [["Schedule", "warn", "Six months later than the City's June 2022 target."]],
  "2024-02": [["Result", "good", "City counts show trail use up 110% on the cleared stretch (2025)."]],
  "1992": [["Schedule", "warn", "Thirteen years from groundbreaking to opening, including a three-year halt."]],
  "2026-04-02": [["Progress", "pend", "Target: a continuous trail by 2029."]],
};

const QUOTES = [
  {"q": "It’s just all a reminder that this is a wild river with the ecosystem through it, and just by allowing it to thrive, it will show its own evidence of recovery.", "who": "Jason Su", "role": "Executive director, Guadalupe River Park Conservancy", "src": "San José Spotlight, 2025", "u": "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/"},
  {"q": "There will be an impact on the neighborhoods around (here) because we require the people that are there to leave, but we don’t have anywhere for them to go in terms of housing.", "who": "Jon Cicirelli", "role": "Director, San José Parks, Recreation and Neighborhood Services", "src": "San José Spotlight, 2024", "u": "https://sanjosespotlight.com/san-jose-creates-no-return-zone-for-homeless-residents-along-guadalupe-river-trail/"},
  {"q": "The before and after photos are stark. You have an area that was just full of trash and tents and RVs and belongings and graffiti. There were literally chickens running around.", "who": "Matt Mahan", "role": "Mayor of San José", "src": "KQED (CalMatters), 2024", "u": "https://www.kqed.org/news/11972829/state-program-to-clear-homeless-encampments-show-signs-of-success-but-housing-remains-elusive"},
  {"q": "This is about connecting this South San Jose community to the San Francisco Bay. It is about ensuring access to downtown San Jose and it is about connecting our San Jose city.", "who": "Jimmy Panetta", "role": "U.S. Representative (CA-19)", "src": "KTVU, 2026", "u": "https://www.ktvu.com/news/federal-funding-boosts-guadalupe-trail-expansion-san-jose"},
];
