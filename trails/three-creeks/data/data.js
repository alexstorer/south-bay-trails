// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Three Creeks Trail page. Every entry carries at least one source URL.

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  mp2014: "http://web.archive.org/web/20191110151506/http://www.sanjoseca.gov/DocumentCenter/View/87761",
  mapEast: "https://www.sanjoseca.gov/home/showpublisheddocument/20713/636688006142600000",
  mapWest: "https://www.sanjoseca.gov/home/showpublisheddocument/20711/636688006140100000",
  sky: "https://www.sanjoseca.gov/home/showpublisheddocument/20743/636688024891200000",
  cityPage: "https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/3025/2028",
  grant2013: "http://web.archive.org/web/20150629224133/http://sanjoseca.gov/DocumentCenter/View/13317",
  info2013: "https://www.sanjoseca.gov/home/showpublisheddocument/20759/636688024916370000",
  ch2m: "https://www.sanjoseca.gov/home/showpublisheddocument/49697/637139056779370000",
  award2017: "https://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2674&meta_id=621111",
  bridge2020: "https://legistar.granicus.com/sanjose/attachments/a9afb1b9-e32d-45da-881c-8eefa1e1d656.pdf",
  lonusCoe: "https://legistar.granicus.com/sanjose/attachments/b096bc00-9b5c-4566-9408-d85600beef47.pdf",
  bids2021: "https://bxscco.com/wp-content/uploads/2021/07/COPS_BidResultsbyEntryDate8-2.pdf",
  bidAd2021: "https://bxscco.com/wp-content/uploads/2021/07/WB_071221.pdf",
  op2016: "https://www.wgtrestle.org/H041563WillowGlenTrestleSlipOpinion.pdf",
  op2020: "https://www.lw.com/admin/Upload/Documents/Willow-Glen-Trestle-Conservancy-v-City-of-San-Jose.PDF",
  order2014: "http://www.wgtrestle.org/WILLOWGLENOrder07_28_14.pdf",
  order2019: "http://www.wgtrestle.org/Order_6-28-19.pdf",
  ames2020: "https://www.wgtrestle.org/WGT_background_Feb,2020.pdf",
  merc2021: "https://www.mercurynews.com/2021/01/06/bridge-replacing-the-willow-glen-trestle-finally-opens-to-the-public-the-end/",
  merc2018: "https://www.mercurynews.com/2018/08/30/where-will-the-future-lead-for-willow-glens-three-creeks-trail/",
  ceqaBridge: "https://ceqanet.lci.ca.gov/2013112050",
  ceqaMP: "https://ceqanet.lci.ca.gov/2014119008",
  osa: "https://www.openspaceauthority.org/projects-programs/three-creeks-trail",
  oliverio2011: "https://www.sanjoseinside.com/opinion/10_03_11_railroads_trails_grant_three_creeks_trail_san_jose_city_council/",
  tar1819: "https://sanjose.legistar.com/View.ashx?M=F&ID=7864882&GUID=4EBD45E4-3ED4-4F6C-9103-F91BE00BA19F",
  te2018: "https://legistar.granicus.com/sanjose/attachments/dc3b3520-95a4-478e-bab8-6bc12dcb49ab.pdf",
  nse2018: "https://legistar.granicus.com/sanjose/attachments/24c97fb1-31c9-4371-b584-584ad8cc078b.pdf",
  te2021: "https://legistar.granicus.com/sanjose/attachments/5578b5ec-e50b-468b-ad79-b9aff760153b.pdf",
  te2022: "https://legistar.granicus.com/sanjose/attachments/452daa66-eade-47a9-b243-ccbbf5bc4d7d.pdf",
  te2023: "https://legistar.granicus.com/sanjose/attachments/8c1976ed-3e47-4c32-b923-a957d2da70d7.pdf",
  te2024: "https://legistar.granicus.com/sanjose/attachments/ab32d32a-3751-4302-bf2e-a9bbb1eea122.pdf",
  caAwards: "https://www.parks.ca.gov/pages/1324/files/2020%202021%20Awards%20Summary.pdf",
  sjiDemo: "https://www.sanjoseinside.com/news/after-years-long-preservation-battle-san-jose-finally-tears-down-willow-glen-trestle/",
  spot2019: "https://sanjosespotlight.com/the-fight-over-willow-glen-trestle-goes-back-to-court/",
  spot2020: "https://sanjosespotlight.com/how-a-seven-year-fight-to-save-a-san-jose-trestle-ended/",
  spotCounts: "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/",
  spotTrestle2026: "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/",
  wiki: "https://en.wikipedia.org/wiki/Three_Creeks_Trail",
  eirMemo: "https://www.sanjoseca.gov/home/showpublisheddocument/20761/636688024919470000",
  photoDoc: "https://www.sanjoseca.gov/home/showpublisheddocument/20763/636688024923070000",
  isR4: "https://www.sanjoseca.gov/home/showpublisheddocument/20709/636688006137600000",
  mndR4: "https://www.sanjoseca.gov/home/showpublisheddocument/20737/636688006183700000",
  sheet3: "https://www.sanjoseca.gov/home/showpublisheddocument/20751/636688024902300000",
  sheet4: "https://www.sanjoseca.gov/home/showpublisheddocument/20753/636688024905100000",
  sheet5: "https://www.sanjoseca.gov/home/showpublisheddocument/20755/636688024908070000",
  skyR1: "https://www.sanjoseca.gov/home/showpublisheddocument/20745/636688024893870000",
  skyR2: "https://www.sanjoseca.gov/home/showpublisheddocument/20747/636688024896670000",
  skyR3: "https://www.sanjoseca.gov/home/showpublisheddocument/20749/636688024899630000",
  storm: "https://www.sanjoseca.gov/home/showpublisheddocument/20767/636688024929800000",
  palette: "https://www.sanjoseca.gov/home/showpublisheddocument/20781/636688025725930000",
  sketches: "https://www.sanjoseca.gov/home/showpublisheddocument/20765/636688024926830000",
  trees: "https://www.sanjoseca.gov/home/showpublisheddocument/20769/636688024933070000",
  draft1: "https://www.sanjoseca.gov/home/showpublisheddocument/49701/637139061061430000",
  draft2: "https://www.sanjoseca.gov/home/showpublisheddocument/20771/636688024936500000",
  draft3a: "https://www.sanjoseca.gov/home/showpublisheddocument/20773/636688024940870000",
  draft3b: "https://www.sanjoseca.gov/home/showpublisheddocument/20775/636688025717330000",
  draft4: "https://www.sanjoseca.gov/home/showpublisheddocument/20777/636688025720300000",
  draft5: "https://www.sanjoseca.gov/home/showpublisheddocument/20779/636688025722970000",
  focus2009: "https://www.sanjoseca.gov/home/showpublisheddocument/20707/636688006134000000",
  cd2016: "https://www.sanjoseca.gov/home/showpublisheddocument/20757/636688024913370000",
  ames2012: "https://www.wgbackfence.net/3CreeksTrail_JBeall_2012.pdf",
};

const REACH_NOTES = {
  "3CR_01": { text: "Lonus St to the bridge. Left out of the 2017 contract so the bridge contractor could stage here; paved in 2021–22. A short on-street link on Lonus St reaches the Los Gatos Creek Trail.", src: SRC.lonusCoe },
  "3CR_01A": { text: "The Three Creeks Pedestrian Bridge: a 210-ft prefabricated steel truss, 14 ft wide, that replaced the 1922 Willow Glen Trestle. Built in 2015, stored for five years during the lawsuits, opened January 5, 2021. (GIS gives 2020 as its opening year; the City's own reports say January 2021.)", src: SRC.bridge2020 },
  "3CR_02": { text: "Bridge to Coe Ave. A dirt path from 2011 until it was paved in 2022, with an interpretive seating area about the honey bee's arrival in San José in 1853. DOT added a flashing-beacon crosswalk at Coe Ave in 2018.", src: SRC.te2023 },
  "3CR_03": { text: "Coe Ave to Broadway Ave, paved in 2017–18. Gateways of corten fruit crates and a truss fence recall the canneries the spur served.", src: SRC.mp2014 },
  "3CR_04": { text: "Broadway Ave to Willow St, with an iris garden and the trail's \"3\" water tower at Willow St. The City's 12-hour count here: 258 people in 2018, 414 in 2022, 339 in 2024.", src: SRC.tar1819 },
  "3CR_05": { gap: true, text: "Willow St to Bird Ave. The old rail line here is private; trail users cross at the Willow/Bird signal and walk the Bird Ave sidewalk. The master plan widens the sidewalk \"if land can be successfully acquired.\"", src: SRC.mp2014 },
  "3CR_06": { text: "Bird Ave to Minnesota Ave, paved in 2017–18, with a signal at Minnesota Ave. The master plan put a Heart's Delight playground here; the 2017 contract describes planting, gateways and interpretive stations, not play areas.", src: SRC.award2017 },
  "3CR_07": { text: "Minnesota Ave to the old rail bridge over the Guadalupe River. Paved years before the rest, by a housing development; the City's street department owns it.", src: SRC.grant2013 },
  "3CR_07A": { gap: true, text: "A short unnamed piece on Valley Water land at the river, under study.", src: SRC.gis },
  "3CR_08": { gap: true, text: "Across the Guadalupe River on the old railroad girder bridge to Hwy 87, on private land. Under study.", src: SRC.gis },
  "3CR_08A": { gap: true, text: "Under Hwy 87 to Alma Ave, on Caltrans land. Today riders detour on streets.", src: SRC.gis },
  "3CR_09": { gap: true, text: "Hwy 87 to the rail line on its east side. Private land.", src: SRC.gis },
  "3CR_10": { gap: true, text: "Across the Caltrain/UP tracks to Almaden Rd. Private land; one of several active rail crossings.", src: SRC.sky },
  "3CR_11": { gap: true, text: "Almaden Rd toward Little Orchard St. Most of the old corridor has been taken over by neighboring uses.", src: SRC.sky },
  "3CR_12": { gap: true, text: "To Little Orchard St. Private land.", src: SRC.gis },
  "3CR_13": { gap: true, text: "Little Orchard St to Pomona Ave, near Bellevue Park. Private land.", src: SRC.mapEast },
  "3CR_14": { gap: true, text: "Pomona Ave to Monterey Rd. Private land.", src: SRC.gis },
  "3CR_15": { gap: true, text: "Monterey Rd across the rail line toward 7th St. Private land.", src: SRC.gis },
  "3CR_16": { gap: true, text: "To 7th St. Private land.", src: SRC.gis },
  "3CR_17": { gap: true, text: "7th St to 10th St, past Spartan Stadium and Municipal Stadium. Private land.", src: SRC.mapEast },
  "3CR_18": { gap: true, text: "10th St to Alma Ave and Senter Rd. City parks land, but cut off from the rest of the trail; no project is scheduled.", src: SRC.gis },
  "3CR_19": { gap: true, text: "North along Senter Rd from Alma Ave to Story Rd and Keyes St, toward Kelley Park and the Coyote Creek Trail. Private land; only identified.", src: SRC.mapEast },
};

// West (Los Gatos Creek) → east (Coyote Creek).
const MAINLINE = ["3CR_01","3CR_01A","3CR_02","3CR_03","3CR_04","3CR_05","3CR_06","3CR_07","3CR_07A","3CR_08","3CR_08A","3CR_09","3CR_10","3CR_11","3CR_12","3CR_13","3CR_14","3CR_15","3CR_16","3CR_17","3CR_18","3CR_19"];
const PARENT = {};
const SIDE_KIND = {};
const NOT_GAP = [];
const OWNERS = { PRIVATE: "Private land", PRNS: "City of San José Parks", DOT: "City street right-of-way", SCVWD: "Valley Water land", CALTRANS: "Caltrans right-of-way" };
const INTRO_CAP = "Los Gatos Creek to Coyote Creek";
const INTRO_FIT = { paddingTopLeft: [120, 60], paddingBottomRight: [110, 24] }; // room for the west-end label
const INTRO_MARKS = [
  ["Los Gatos Creek", [37.3149, -121.9037], "left"], ["Willow St", [37.3109, -121.8963], "left"], ["Guadalupe River", [37.3074, -121.8844], "left"],
  ["Monterey Rd", [37.3131, -121.8706], "right"], ["Coyote Creek", [37.3258, -121.8655], "right"],
];
const LANDMARKS = [
  { key: true, name: "Los Gatos Creek Trail (Lonus St)", ll: [37.3156, -121.9044] },
  { key: true, name: "Three Creeks bridge", ll: [37.3149, -121.9037] },
  { name: "Coe Ave", ll: [37.3134, -121.9022] },
  { name: "Broadway Ave", ll: [37.3120, -121.8997] },
  { key: true, name: "Willow St", ll: [37.3109, -121.8963] },
  { name: "Bird Ave", ll: [37.3103, -121.8946] },
  { name: "Minnesota Ave", ll: [37.3086, -121.8893] },
  { key: true, name: "Guadalupe River", ll: [37.3074, -121.8844] },
  { name: "Hwy 87", ll: [37.3077, -121.8819] },
  { name: "Almaden Rd", ll: [37.3083, -121.8782] },
  { key: true, name: "Monterey Rd", ll: [37.3131, -121.8706] },
  { name: "10th St", ll: [37.3176, -121.8639] },
  { key: true, name: "Coyote Creek / Kelley Park", ll: [37.3258, -121.8655] },
];

// Timeline. cat: rail | plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1922-05-01", cat: "rail", t: "The Willow Glen spur opens", x: "The Western Pacific opens a branch through Willow Glen to the Del Monte cannery, crossing Los Gatos Creek on a timber trestle. For decades it carries fruit to market.", s: [["Master plan (2014), §2.3", SRC.mp2014]] },
  { d: "2000", cat: "rail", t: "The trains stop", x: "Union Pacific ends service on the spur, freeing the corridor for a possible trail.", s: [["Master plan (2014)", SRC.mp2014]] },
  { d: "2000-09", cat: "plan", t: "The Greenprint calls for a trail", x: "San José's parks plan lists a trail on the Willow Glen spur.", s: [["Council memo (2020)", SRC.bridge2020]] },
  { d: "2003", cat: "fund", t: "Open Space Authority commits $3.2M", x: "The Santa Clara Valley Open Space Authority's grant toward buying the corridor; its contribution eventually totals $3,235,000.", s: [["Open Space Authority", SRC.osa]] },
  { d: "2004", cat: "rail", t: "Rails pulled up; the trestle is abandoned", x: "The rails come out, and Union Pacific stops maintaining the trestle.", s: [["Master plan (2014)", SRC.mp2014], ["Info memo (2013)", SRC.info2013]] },
  { d: "2004-01-07", cat: "fund", t: "$800,000 state grant for the \"Willow Glen Spur Trail\"", x: "A Roberti-Z'Berg-Harris grant that can't be spent on land; it later goes to the bridge.", s: [["Council memo (2013)", SRC.grant2013]] },
  { d: "2007-11-06", cat: "plan", t: "Council: start talks with Union Pacific", x: "On a memo from Councilmember Pierluigi Oliverio, the Council tells staff to negotiate for the spur from Los Gatos Creek to Hwy 87. The memo already lists the hard parts east of 87: a bridge over the active railroad and mid-block crossings at Monterey Rd, 7th and 10th streets.", s: [["Focus group report (2009)", SRC.focus2009]] },
  { d: "2009-06-24", cat: "plan", t: "Focus groups report on the whole route", x: "Four meetings in 2008 on the 2.8-mile route recommend a pedestrian bridge over the rail lines near Hwy 87 and call a continuous trail from Almaden Rd to Senter Rd \"unlikely,\" because of mid-block crossings and industrial land the City wants to keep. Staff add that buying the whole spur is beyond the City's means.", s: [["Focus group report", SRC.focus2009]] },
  { d: "2010", cat: "plan", t: "Save Our Trails forms", x: "The advocacy group urges the Council to buy the right-of-way.", s: [["Master plan (2014)", SRC.mp2014]] },
  { d: "2011-06-14", cat: "fund", t: "Valley Water grants $450,000", x: "For work on the trestle and interim fencing and signs.", s: [["Council memo (2013)", SRC.grant2013]] },
  { d: "2011-09-27", cat: "fund", t: "Council votes to buy the spur", x: "San José agrees to buy the western corridor, Lonus St to Minnesota Ave, from Union Pacific, reported at $6M and paid for with grants: $3.2M from the Open Space Authority and $2M from the County, among others. The deal closes in December; an advocate's 2012 tally puts the price at $6.03M, including $0.9M from the City.", s: [["Councilmember Oliverio's column", SRC.oliverio2011], ["L. Ames update (2012)", SRC.ames2012], ["City trail page (archived 2019)", "http://web.archive.org/web/20191109145926/http://www.sanjoseca.gov/index.aspx?NID=2883"], ["Council memo (2020)", SRC.lonusCoe]] },
  { d: "2012-03-15", cat: "plan", t: "Advocates price the east half's land", x: "A trail advocate's briefing for State Senator Jim Beall estimates the eastern right-of-way at about $5.7M, with $1M committed by the County. The hardest piece is a bridge over the Caltrain and high-speed rail tracks west of Almaden Rd.", s: [["L. Ames update", SRC.ames2012]] },
  { d: "2012-10-08", cat: "plan", t: "Engineers compare fixing and replacing the trestle", x: "CH2M HILL prices a new truss bridge at $1.64M and rehabilitating the trestle at $0.96–1.09M, and recommends replacement.", s: [["CH2M HILL study", SRC.ch2m]] },
  { d: "2013-03-26", cat: "fund", t: "$1.23M state grant for a new bridge", x: "The Council applies for Prop 40 money toward removing the trestle and building a $2.47M replacement. The grant must be spent by June 2015.", s: [["Council memo", SRC.grant2013]] },
  { d: "2013-05-17", cat: "plan", t: "\"Ten verified fires\"", x: "A City memo makes the case for replacement: the abandoned trestle has burned ten times in five years. Neighbors start organizing to save it.", s: [["Info memo", SRC.info2013], ["NBC Bay Area", "https://nbcbayarea.com/news/local/San-Jose-Abandones-Century-Old-Trestle-208233041.html"]] },
  { d: "2014-01", cat: "plan", t: "Council: the trestle isn't historic", x: "Adopting the bridge's environmental review, the Council finds the trestle isn't a historic resource. Friends of the Willow Glen Trestle sue the next month.", s: [["Appeals court opinion (2016)", SRC.op2016], ["CEQA 2013112050", SRC.ceqaBridge]] },
  { d: "2014-05-20", cat: "build", t: "Bridge contract signed: $1.63M", x: "Gordon N. Ball gets the bridge job and is told to proceed on May 22. A court injunction stops the work.", s: [["Council memo (2020)", SRC.bridge2020]] },
  { d: "2014-07-28", cat: "plan", t: "Judge orders a full environmental report", x: "Superior Court Judge Joseph Huber sides with the trestle's defenders and requires an EIR.", s: [["Court order", SRC.order2014], ["Info memo on the EIR (Sept 2014)", SRC.eirMemo]] },
  { d: "2014-11-04", cat: "plan", t: "Master plan approved: $5.9M", x: "The Council approves the western master plan: a 12-ft paved trail with fruit-crate gateways, water towers and a playground, estimated at $5.92M in 2013 dollars.", s: [["Master plan", SRC.mp2014], ["CEQA 2014119008", SRC.ceqaMP]] },
  { d: "2015", cat: "build", t: "A finished bridge goes into storage", x: "The steel truss is fabricated and stored while the lawsuits continue. Storage costs reach about $80,000 by 2020.", s: [["Council memo (2020)", SRC.bridge2020], ["San José Spotlight", SRC.spot2020]] },
  { d: "2015-10", cat: "plan", t: "\"SKY Lane\": an elevated east half", x: "A vision study proposes carrying the eastern alignment on a raised structure over the streets and rail lines between the Guadalupe River and Coyote Creek. It has no budget.", s: [["SKY Lane Trail Vision Study", SRC.sky]] },
  { d: "2016-08-12", cat: "plan", t: "Appeals court sides with the City", x: "The Sixth District reverses: the City's judgment that the trestle isn't historic gets deference.", s: [["Opinion H041563", SRC.op2016]] },
  { d: "2017-02-28", cat: "fund", t: "$2.7M to pave Coe to Minnesota", x: "GradeTech wins the paving contract at $2,714,500, 17% over the engineer's estimate; with design and staff the project totals $4.04M, including a $1M state Urban Greening grant.", s: [["Council memo", SRC.award2017]] },
  { d: "2017", cat: "flood", t: "Flood debris erodes the bridge site", x: "The 2017 floods and later rains scour the creek bank at the new bridge's north abutment, adding about $95,000 in erosion protection.", s: [["Council memo (2020)", SRC.bridge2020]] },
  { d: "2017-05", cat: "plan", t: "The State lists the trestle as historic", x: "The State Historical Resources Commission puts the trestle on the California Register, and refuses the City's request to reconsider in October.", s: [["Appeals court opinion (2020)", SRC.op2020]] },
  { d: "2018-08", cat: "build", t: "Coe Ave to Minnesota Ave opens", x: "A ribbon-cutting in late August opens the paved trail through Willow Glen, nine years after neighbors formed Save Our Trails. Rush-hour use at Willow St more than doubles from 2016 to 2018.", s: [["Mercury News", SRC.merc2018], ["Trail annual report 2018–19", SRC.tar1819]] },
  { d: "2018", cat: "plan", t: "Awards for the trail's design", x: "The trail wins the International Trails Symposium's Advancing Trails Award for interpreting its railroad history.", s: [["Trail annual report 2018–19", SRC.tar1819], ["City presentation (2018)", SRC.nse2018]] },
  { d: "2018-10-10", cat: "plan", t: "A new permit, a new lawsuit", x: "State Fish and Wildlife issues a fresh streambed permit for the demolition; trestle advocates win a temporary restraining order.", s: [["CEQA 2013112050", "https://ceqanet.lci.ca.gov/2013112050/6"], ["Advocate's summary", SRC.ames2020]] },
  { d: "2019-07", cat: "plan", t: "Back in court", x: "The Superior Court sides with the City again but grants a short injunction, and the advocates appeal.", s: [["San José Spotlight", SRC.spot2019], ["Court order", SRC.order2019]] },
  { d: "2020-05-18", cat: "plan", t: "Final appeal fails", x: "The Sixth District rules the 2018 permit didn't require new environmental review.", s: [["Opinion H047068", SRC.op2020]] },
  { d: "2020-06-22", cat: "build", t: "The trestle comes down", x: "After six years of litigation, crews begin demolishing the 98-year-old trestle.", s: [["San José Inside", SRC.sjiDemo]] },
  { d: "2020-10-20", cat: "fund", t: "Bridge contract up 53%", x: "A $700,000 change order brings the 2014 contract to $2,486,247. Four mobilizations, storage, flood erosion and buried boulders push the project to $3.91M.", s: [["Council memo", SRC.bridge2020]] },
  { d: "2021-01-05", cat: "build", t: "The new bridge opens", x: "The steel bridge over Los Gatos Creek connects Willow Glen to the Los Gatos Creek Trail. It later wins a California Trails and Greenways merit award.", s: [["Mercury News", SRC.merc2021], ["T&E annual update (2021)", SRC.te2021], ["CA Trails awards", SRC.caAwards]] },
  { d: "2021-01-12", cat: "fund", t: "$1.1M to pave the last western link", x: "Money for Lonus St to Coe Ave, the stretch left out of the 2017 contract while the bridge was in court.", s: [["Council memo", SRC.lonusCoe]] },
  { d: "2021-07-15", cat: "build", t: "Ten bids for Lonus to Coe", x: "Redgwick Construction is low at $738,500.", s: [["Builders Exchange bid results", SRC.bids2021]] },
  { d: "2022", cat: "build", t: "Lonus St to Coe Ave opens", x: "Summer 2022: the trail is continuous from the Los Gatos Creek Trail to Willow St.", s: [["T&E annual update (2023)", SRC.te2023]] },
  { d: "2023", cat: "camp", t: "A fence against encampments", x: "A wood fence goes up along the trail, paid from a $200,000 federal relief set-aside for encampment deterrents.", s: [["T&E presentation (2024)", SRC.te2024]] },
  { d: "2026-04-14", cat: "plan", t: "Another trestle fight", x: "Residents, including Willow Glen trestle defender Larry Ames, rally to save the 1922 Coyote Creek Trestle, San José's last railroad trestle, in the way of the Five Wounds Trail.", s: [["San José Spotlight", SRC.spotTrestle2026]] },
];

const PROJECTS = [
  { name: "Buy the Willow Glen spur", id: "Land", year: 2011, mi: null, kind: "land", cost: 6.0, contract: null, funding: "Open Space Authority $3.24M; County $2M; others not itemized", src: SRC.oliverio2011, note: "Reported price; an advocate's tally gives $6.03M incl. $0.9M City" },
  { name: "Three Creeks bridge (trestle replacement)", id: "SJ #7232", year: 2021, mi: null, kind: "bridge", cost: 3.906, contract: 2.486, funding: "State Prop 40 $1.23M; Valley Water $450K; Park Trust Fund", src: SRC.bridge2020, note: "2020 project budget" },
  { name: "Coe Ave → Minnesota Ave", id: "SJ #7715", year: 2018, mi: 0.73, cost: 4.035, contract: 2.715, funding: "State Urban Greening $1M; Park Trust Fund; C&C tax", src: SRC.award2017, note: "Project budget at award; final cost not published" },
  { name: "Lonus St → Coe Ave", id: "SJ #9848", year: 2022, mi: 0.15, cost: 1.1, contract: null, funding: "Park Trust Fund", src: SRC.lonusCoe, note: "Appropriation; low bid $738,500" },
];
const PM_EST = [
  { name: "Master plan, 2013 $", sub: "City estimate", mi: 1.1, cost: 5.919, note: "$5.92M for the whole western trail, including a $0.76M playground", src: SRC.mp2014 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects", src: "../coyote-creek/" },
];
const PRESETS = [
  { label: "Coe–Minnesota (actual)", pm: 4.035 / 0.73 },
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "Elevated structure (guess)", pm: 25 },
];
const DEFAULT_PM = 4.035 / 0.73;
const EST_EXTRAS = [];

const GAPS = [
  { name: "Willow St → Bird Ave", ids: ["3CR_05"], mi: 0.13, status: "Planned", hard: "Private land; users cross at the signal and use the sidewalk" },
  { name: "Guadalupe River → Alma Ave", ids: ["3CR_07A", "3CR_08", "3CR_08A", "3CR_09"], mi: 0.20, status: "Study", hard: "Old rail bridge over the river; Hwy 87 undercrossing on Caltrans land" },
  { name: "Hwy 87 → 10th St", ids: ["3CR_10", "3CR_11", "3CR_12", "3CR_13", "3CR_14", "3CR_15", "3CR_16", "3CR_17"], mi: 1.16, status: "Study", hard: "Mostly private; active rail lines, Almaden Rd and Monterey Rd; 2009 focus groups called a continuous trail unlikely" },
  { name: "10th St → Senter Rd", ids: ["3CR_18"], mi: 0.35, status: "Planned", hard: "City-owned but cut off from the rest of the trail" },
  { name: "Senter Rd → Story Rd (Coyote Creek)", ids: ["3CR_19"], mi: 0.37, status: "Identify", hard: "Private land; only identified" },
];

const STATS = ({ gapMi }) => [
  ["1.2 mi", "open from the Los Gatos Creek Trail to the Guadalupe River, with one street crossing at Willow and Bird"],
  [gapMi.toFixed(1) + " mi", "missing, almost all of it east of the Guadalupe, where no route has been chosen and no money set aside"],
  ["$3.9M", "for the bridge that replaced the Willow Glen Trestle, after six years in court"],
  ["0", "miles built toward Coyote Creek, the third of the three creeks"],
];

const DELIVERY_HEAD = ["Project", "Planned", "What happened", "Budget at the time", "Final"];
const DELIVERY = [
  ["Three Creeks bridge (#7232)", "Built by April 2015, before the grant deadline", "Six years of lawsuits; opened January 2021", "bad", "$1.63M contract (2014); $2.47M project (2013)", "$2.49M contract (+53%); $3.91M project", "bad", SRC.bridge2020],
  ["Coe Ave → Minnesota Ave (#7715)", "Apr 2017 – Feb 2018", "2017 – Aug 2018", "warn", "$2.32M engineer's estimate", "$2.71M contract (+17%); final not published", "warn", SRC.award2017],
  ["Lonus St → Coe Ave (#9848)", "Built early–late 2021", "Opened summer 2022", "warn", "$1.1M appropriation", "Low bid $0.74M; final not published", "unk", SRC.lonusCoe],
  ["Western master plan", "Whole trail in one phase", "Built in three pieces, 2018–22; Willow–Bird is still a sidewalk", "warn", "$5.92M (2013 $)", "No combined total", "unk", SRC.mp2014],
  ["Eastern alignment", "Focus groups (2008–09), vision study (2015)", "No route chosen, no money, no project", "bad", "No estimate", "Not built", "unk", SRC.sky],
];
const OFFICIAL_EST = {
  head: ["Item", "", "Estimate (2013 $)", "What it covers"],
  rows: [
    ["A–D", "Trail, grading & demolition", null, 1.143, "Mobilization, clearing, grading and 12-ft paving, Lonus St to Falcon Ct"],
    ["E", "Street crossings", null, 0.209, "Decorative crosswalks and signals, including a HAWK beacon"],
    ["F–G", "Gateways & furnishings", null, 0.317, "Water towers, corten crates, truss fences, signs, benches"],
    ["H", "Heart's Delight playground", null, 0.763, "Play areas and fitness stations near Bird Ave"],
    ["I–J", "Planting", null, 0.139, "Orchard and shade trees, irrigation, a year of establishment"],
    ["L", "Contingencies", null, 1.105, "10% design changes, 30% estimating"],
    ["N–Q", "City costs, design & art", null, 2.242, "Construction allowance, City management, design fees, 1% public art"],
  ],
  total: ["1.1 mi", "$5.92M"],
};

const DOCS = [
  { g: "Plans & studies", items: [
    ["Three Creeks Trail Master Plan, Western Alignment (RHAA, 2014; archived copy of the final)", SRC.mp2014],
    ["Draft master plan, part 1", SRC.draft1],
    ["Draft master plan, part 2", SRC.draft2],
    ["Draft master plan, part 3, section 6a", SRC.draft3a],
    ["Draft master plan, part 3, section 6b", SRC.draft3b],
    ["Draft master plan, part 4", SRC.draft4],
    ["Draft master plan, part 5", SRC.draft5],
    ["Conceptual plan, sheet 3", SRC.sheet3],
    ["Conceptual plan, sheet 4", SRC.sheet4],
    ["Conceptual plan, sheet 5", SRC.sheet5],
    ["SKY Lane Trail Vision Study, eastern alignment (Callander, 2015)", SRC.sky],
    ["SKY Lane rendering 1", SRC.skyR1],
    ["SKY Lane rendering 2", SRC.skyR2],
    ["SKY Lane rendering 3", SRC.skyR3],
    ["CH2M HILL trestle engineering study (2012)", SRC.ch2m],
    ["Focus group report: Willow Glen Spur Trail (2009)", SRC.focus2009],
    ["Construction plans: Lonus St to Minnesota Ave, 80 sheets (2016, 70 MB)", SRC.cd2016],
    ["Sketches of trail elements (2015)", SRC.sketches],
    ["Landscape palette (2015)", SRC.palette],
    ["Strategic tree removal plan (2015)", SRC.trees],
    ["Storm water management fact sheet (2016)", SRC.storm],
    ["Trestle photo-documentation report", SRC.photoDoc],
  ]},
  { g: "Trail maps", items: [
    ["City map: Western Alignment", SRC.mapWest],
    ["City map: Eastern Alignment", SRC.mapEast],
  ]},
  { g: "Environmental review & courts", items: [
    ["Initial Study: Los Gatos Creek Trail Reach 4", SRC.isR4],
    ["Mitigated Negative Declaration: Los Gatos Creek Trail Reach 4", SRC.mndR4],
    ["CEQA: pedestrian bridge (2013–15)", SRC.ceqaBridge],
    ["CEQA: master plan MND (2014)", SRC.ceqaMP],
    ["Superior Court order (July 2014)", SRC.order2014],
    ["Court of Appeal opinion H041563 (2016)", SRC.op2016],
    ["Superior Court order (June 2019)", SRC.order2019],
    ["Court of Appeal opinion H047068 (2020)", SRC.op2020],
  ]},
  { g: "Council & agency records", items: [
    ["Council memo: Prop 40 bridge grants (2013)", SRC.grant2013],
    ["Info memo: Three Creeks bridge issues (2013)", SRC.info2013],
    ["Info memo: Three Creeks trestle EIR (2014)", SRC.eirMemo],
    ["Council memo: Coe–Minnesota award (2017)", SRC.award2017],
    ["T&E annual update (2018)", SRC.te2018],
    ["Trail annual report 2018–19", SRC.tar1819],
    ["Council memo: bridge change order (2020)", SRC.bridge2020],
    ["Council memo: Lonus–Coe paving (2020)", SRC.lonusCoe],
    ["Lonus–Coe bid notice (2021)", SRC.bidAd2021],
    ["Lonus–Coe bid results (2021)", SRC.bids2021],
    ["T&E annual update (2021)", SRC.te2021],
    ["T&E annual report (2022)", SRC.te2022],
    ["T&E annual update (2023)", SRC.te2023],
    ["T&E presentation: deterrent projects (2024)", SRC.te2024],
  ]},
  { g: "Community", items: [
    ["L. Ames: The Three-Creeks Trail, an update for Jim Beall (2012)", SRC.ames2012],
    ["Friends of the Willow Glen Trestle: background (2020)", SRC.ames2020],
  ]},
];

const MAPS = [
  { t: "Open Space Authority: Three Creeks Trail", d: "The land purchase and the trail's three-creek goal.", u: SRC.osa, tag: "Official" },
  { t: "City trail page", d: "Maps, the master plan in parts, studies, construction plans and the SKY Lane renderings.", u: SRC.cityPage, tag: "Official" },
  { t: "Friends of the Willow Glen Trestle", d: "The preservationists' archive: court filings, history and photos of the trestle.", u: "https://www.wgtrestle.org/", tag: "Community" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this page's map.", u: SRC.gis, tag: "Download" },
  { t: "Wikipedia: Three Creeks Trail", d: "Overview with history and route.", u: SRC.wiki, tag: "Guide" },
];

const NEWS = [
  ["2011-10-03", "San Jose Inside", "Turning Rails into Trails", "https://www.sanjoseinside.com/opinion/10_03_11_railroads_trails_grant_three_creeks_trail_san_jose_city_council/", "Councilmember Pierluigi Oliverio: the council authorized buying the $6M Union Pacific parcel, funded by grants rather than the general fund; Save Our Trails will adopt the corridor."],
  ["2013-05-20", "NBC Bay Area", "San Jose Abandons Century-Old Trestle", "https://nbcbayarea.com/news/local/San-Jose-Abandones-Century-Old-Trestle-208233041.html", "The City plans to replace the wooden trestle off Lonus Street with a steel bridge; the Willow Glen Neighborhood Association's president pushes to keep it."],
  ["2013-07-17", "NBC Bay Area", "Preservationists: Willow Glen Trestle Bridge Restoration Would Cost Less Than Replacement", "https://www.nbcbayarea.com/news/local/preservationists-want-to-save-willow-glen-trestle-bridge/1949539/", "Replacement designs are shown at a neighborhood meeting; preservationists argue restoration is cheaper, while the City aims to demolish by October 2014 to meet a grant deadline."],
  ["2015-06-03", "KTVU", "Dog owners warned of possible poisoned pet food left along San Jose trail", "https://www.ktvu.com/news/dog-owners-warned-of-possible-poisoned-pet-food-left-along-san-jose-trail", "A Labrador ate cat food topped with white powder on the Three Creeks Trail; Animal Care and Services investigated."],
  ["2015-06-04", "ABC7 News", "Willow Glen residents concerned about dog poisoning warning on popular trail", "https://abc7news.com/post/willow-glen-residents-concerned-about-dog-poisoning-warning/765238/", "Residents avoid the trail after the warning; a neighbor calls the Willow-to-Minnesota section very popular."],
  ["2015-08-03", "San Jose Inside", "City Council Returns to Action; Trestle Dispute Tops Agenda", "https://www.sanjoseinside.com/news/city-council-returns-to-action-trestle-dispute-tops-agenda/", "After a ruling requiring environmental review, the council weighs the trestle fight; the City cites grant deadlines and creek work windows."],
  ["2017-03-28", "Neighborhoods.com (blog)", "San Jose Approves Three Creeks Trail Construction in Willow Glen", "https://www.neighborhoods.com/blog/san-jose-approves-three-creeks-trail-construction-in-willow-glen", "A $2.7M contract to pave the segment toward Minnesota Ave, with plantings and interpretive stations; the bridge is still in court. (A real-estate blog.)"],
  ["2018-08-30", "Mercury News", "Where will the future lead for Willow Glen's Three Creeks Trail?", "https://www.mercurynews.com/2018/08/30/where-will-the-future-lead-for-willow-glens-three-creeks-trail/", "The western mile opens with a ribbon-cutting; Save Our Trails founder Taisia McMahon looks ahead to an eastern alignment to Kelley Park whose timing is unknown."],
  ["2019-07-05", "San José Spotlight", "The fight over Willow Glen Trestle goes back to court", "https://sanjosespotlight.com/the-fight-over-willow-glen-trestle-goes-back-to-court/", "Five years in, the City and preservationists return to court over demolishing the 1922 trestle."],
  ["2020-06-22", "San Jose Inside", "After Years-Long Preservation Battle, San Jose Finally Tears Down Willow Glen Trestle", "https://www.sanjoseinside.com/news/after-years-long-preservation-battle-san-jose-finally-tears-down-willow-glen-trestle/", "Crews begin demolishing the 98-year-old trestle after the Sixth District Court of Appeal rejected the final bid to save it."],
  ["2020-06-27", "San José Spotlight", "How a seven year fight to save a San Jose trestle ended", "https://sanjosespotlight.com/how-a-seven-year-fight-to-save-a-san-jose-trestle-ended/", "Recap of the legal battle; the trestle gives way to a steel bridge that had been sitting in storage."],
  ["2024-06-13", "San José Spotlight", "Willow Glen residents oppose homeless safe sleeping site", "https://sanjosespotlight.com/willow-glen-residents-oppose-homeless-safe-sleeping-site/", "About 50 residents rally against a sanctioned encampment at Willow and Lelong streets, near the trail's east end and the Guadalupe River."],
  ["2025-09-18", "San José Spotlight", "San Jose river trail use up after homeless sweeps", "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/", "Guadalupe River Trail counts rise after encampment clearances; the Three Creeks Trail near Willow Street fell from 414 users in 12 hours (2022) to 339 (2024)."],
  ["2026-04-14", "San José Spotlight", "San Jose residents rally to save railroad trestle", "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/", "Residents, including Larry Ames, campaign to save the Coyote Creek Trestle, the city's last railroad trestle, from a trail project."],
];

const PHOTOS = [
  {"f": "ThreeCreeksTrail TrestleBridge.JPG", "c": "The 1922 Willow Glen Trestle over Los Gatos Creek near Lonus St, 2014", "a": "Peterpj77", "l": "CC BY-SA 3.0", "ll": [37.31468, -121.90367], "y": 2014},
  {"f": "Three Creeks Trail at Coe Avenue in Willow Glen, San Jose, California.JPG", "c": "The unpaved trail from the Coe Ave gate, 2013", "a": "Peterpj77", "l": "CC BY-SA 3.0", "ll": [37.31333, -121.90217], "y": 2013},
  {"f": "Iris garden three creeks trail San Jose.jpg", "c": "Irises beside the paved trail between Broadway and Willow St", "a": "Dvortygirl", "l": "CC BY 4.0", "ll": [37.3117, -121.898], "approx": true, "y": 2019},
  {"f": "Three Creeks Trail decorative water tower.jpg", "c": "The trail's \"3\" water tower, a nod to steam railroads, at Willow St", "a": "Ikluft", "l": "CC BY-SA 3.0", "ll": [37.31105, -121.8966], "y": 2019},
  {"f": "Patisserie Florist Cafe (4888357868).jpg", "c": "Willow St storefront beside the old spur crossing, 2010", "a": "David Sawyer", "l": "CC BY-SA 2.0", "ll": [37.3105, -121.89707], "y": 2010},
  {"f": "Lincoln Ave, Willow Glen, SJ.jpg", "c": "Lincoln Ave, Willow Glen's downtown, south of the trail", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.30785, -121.90059], "y": 2021},
  {"f": "Willow Glen sign at night 0602.jpg", "c": "Willow Glen's neon sign on Lincoln Ave, a few blocks from the trail", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.3083, -121.90107], "y": 2021},
  {"f": "Willow Glen Bridge Over the Guadalupe River 1927.jpg", "c": "Willow St bridge over the Guadalupe River, south of the trail's east end", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.30401, -121.88164], "y": 2021},
  {"f": "Willow Glen Bridge Over the Guadalupe River 1928.jpg", "c": "Stone pylon and Willow Glen sign at the Willow St bridge", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.30401, -121.88173], "y": 2021},
  {"f": "Almaden Road underpass 1310.JPG", "c": "Almaden Rd under the Caltrain tracks, on the unbuilt eastern route", "a": "Pedro Xing", "l": "CC0", "ll": [37.30587, -121.87853], "y": 2012},
  {"f": "North end of the Los Gatos Creek Trail.jpg", "c": "Los Gatos Creek Trail near San Carlos St, north of the Lonus St bridge", "a": "mliu92", "l": "CC BY-SA 2.0", "ll": [37.32364, -121.90288], "y": 2022},
  {"f": "Del Monte Park, Midtown San Jose.jpg", "c": "Del Monte Park, across Los Gatos Creek from the trail's west end", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.32099, -121.90424], "y": 2021},
  {"f": "Sign of Bygone Fruit Orchard - panoramio.jpg", "c": "Del Monte cannery water tower, a relic of the fruit trade the spur served", "a": "Annette Teng", "l": "CC BY 3.0", "ll": [37.32275, -121.90341], "y": 2013},
];

const OUTCOMES = {
  "2014-05-20": [
    ["Completed", "good", "Yes, in January 2021."],
    ["Schedule", "bad", "Almost six years late: the trestle was in court from 2014 to 2020, and the finished bridge sat in storage."],
    ["Budget", "bad", "The contract grew 53% to $2.49M; the project reached $3.91M against a $2.47M estimate in 2013."],
  ],
  "2014-11-04": [
    ["Completed", "warn", "Mostly. The trail runs from Lonus St to the Guadalupe, but Willow–Bird is still a sidewalk and the 2017 contract left out the master plan's playground."],
    ["Budget", "unk", "The pieces built cost at least $5.1M (Coe–Minnesota $4.04M at award, Lonus–Coe $1.1M), without the bridge, against $5.92M in 2013 dollars for everything."],
  ],
  "2017-02-28": [
    ["Completed", "good", "Yes, in August 2018."],
    ["Schedule", "warn", "About six months late against an April 2017 – February 2018 plan."],
    ["Budget", "warn", "The winning bid was 17% over the engineer's estimate. The final cost isn't published."],
  ],
  "2021-01-12": [
    ["Completed", "good", "Yes, summer 2022."],
    ["Schedule", "warn", "About six months later than the December 2021 target."],
    ["Budget", "good", "The low bid, $738,500, was well under the $1.1M set aside. The award amount isn't published."],
  ],
  "2015-10": [["Progress", "bad", "No route chosen and no money set aside for the eastern alignment, 11 years on."]],
};

const QUOTES = [
  {"q": "The full length of this trail includes the eastern alignment that winds to Happy Hollow and connects the Coyote Creek Trail to our East Side and South County neighbors", "who": "Taisia McMahon", "role": "Founder, Save Our Trails", "src": "Mercury News, 2018", "u": "https://www.mercurynews.com/2018/08/30/where-will-the-future-lead-for-willow-glens-three-creeks-trail/"},
  {"q": "This bridge carried the fruit to market.", "who": "Larry Ames", "role": "Friends of the Willow Glen Trestle", "src": "San José Spotlight, 2019", "u": "https://sanjosespotlight.com/the-fight-over-willow-glen-trestle-goes-back-to-court/"},
  {"q": "If rehabilitation is feasible, demolition is unlawful", "who": "Susan Brandt-Hawley", "role": "Attorney, Friends of the Willow Glen Trestle", "src": "San Jose Inside, 2015", "u": "https://www.sanjoseinside.com/news/city-council-returns-to-action-trestle-dispute-tops-agenda/"},
  {"q": "We're trying to create a safe place that people can use for recreation and we have grant money that won't take away from any other city funds to do it right now", "who": "Pierluigi Oliverio", "role": "District 6 Councilmember, San José", "src": "NBC Bay Area, 2013", "u": "https://nbcbayarea.com/news/local/San-Jose-Abandones-Century-Old-Trestle-208233041.html"},
  {"q": "The removal of the trestle is a big win for the community after waiting years in the court system to complete a hiking/biking/walking trail for everyone to enjoy", "who": "Dev Davis", "role": "District 6 Councilmember, San José", "src": "San Jose Inside, 2020", "u": "https://www.sanjoseinside.com/news/after-years-long-preservation-battle-san-jose-finally-tears-down-willow-glen-trestle/"},
  {"q": "All of the canneries in this area were leading canneries producing hundreds of millions of cases of tomatoes a year", "who": "Richard Zappelli", "role": "President, Willow Glen Neighborhood Association", "src": "NBC Bay Area, 2013", "u": "https://nbcbayarea.com/news/local/San-Jose-Abandones-Century-Old-Trestle-208233041.html"},
  {"q": "I fear that whatever is planned to commemorate the Willow Glen Trestle will be similarly inadequate", "who": "Larry Ames", "role": "Friends of the Willow Glen Trestle", "src": "San José Spotlight, 2020", "u": "https://sanjosespotlight.com/how-a-seven-year-fight-to-save-a-san-jose-trestle-ended/"},
];
