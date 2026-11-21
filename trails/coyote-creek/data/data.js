// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Coyote Creek Trail explorer.
// Every entry carries at least one source URL. Compiled November 2026.

const SJ_DOC = "https://www.sanjoseca.gov/home/showpublisheddocument/";

const SRC = {
  memoWilliamStory: "https://legistar.granicus.com/sanjose/attachments/6eb2b91e-c8a0-4eb0-aaad-e7cccc1180a7.pdf",
  memoStoryPhelan: "https://legistar.granicus.com/sanjose/attachments/669e6315-e20d-4b70-ab8c-4cbafc03fe38.pdf",
  memoPhelanTully: "https://legistar.granicus.com/sanjose/attachments/07d1e887-6f62-43b8-a438-72eb6c360628.pdf",
  memoMabury2019: "https://legistar.granicus.com/sanjose/attachments/b4c36769-98f9-400d-bed3-658f0c4d1a31.pdf",
  memoMabury2023: "https://legistar.granicus.com/sanjose/attachments/24155b0a-50b5-485f-a05b-0138980d502c.pdf",
  memoMabury2025: "https://sanjose.legistar.com/View.ashx?GUID=CADA97B3-BA39-496D-A81B-ED1DFF736139&ID=13779782&M=F",
  memoSingleton: "https://legistar.granicus.com/sanjose/attachments/7f20275b-b88d-4417-ba22-797b52b97bb6.pdf",
  sccSingleton: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2021/2101/20210121Board04E_Singleton_Crossing.pdf",
  te2024: "https://sanjose.legistar.com/View.ashx?GUID=17F352EB-3082-48D3-BDEF-7231CBF5815D&ID=12828167&M=F",
  te2026: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  nse2025: "https://sanjose.legistar.com/View.ashx?G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF&GUID=1B4EAF19-A7CE-425A-8E47-775A1A7247B6&ID=15008794&M=F",
  measureB2024: "https://legistar.granicus.com/sanjose/attachments/b0188938-0e76-4458-b884-eeada46c56fe.pdf",
  strategic2016: "https://material-civet.files.svdcdn.com/production/images/documents/StrategicPlan.pdf?dm=1627321644",
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  kccbTrestle: "https://www.keepcoyotecreekbeautiful.org/post/cc-trestle",
  vwE1: "https://www.valleywater.org/project-updates/creek-river-projects/E1-coyote-creek-flood-protection",
  vwContract2026: "https://www.valleywater.org/news-events/news-releases/ValleyWaterawardsconstructioncontractfortheCoyoteCreekFloodProtectionProject",
  hosler2026: "https://rayhosler.wordpress.com/2026/05/21/coyote-creek-trail-sees-major-improvements/",
};

// Extra context attached to GIS reaches (keyed by City GIS REACHID).
const REACH_NOTES = {
  "COY00": { text: "The trail follows the creek about 2 miles north through Milpitas to Dixon Landing Rd. From there it continues as the San Francisco Bay Trail, up Fremont Blvd and onto gravel levees along the wildlife refuge toward Alviso and Newark.", src: "https://mtc.ca.gov/operations/regional-trails-parks/san-francisco-bay-trail/map-numbers/map-7-alviso-newark" },
  "COY03": { text: "Part of the northern reach designated a National Recreation Trail in 2009." , src: "https://www.nrtapplication.org/trails/coyote-creek-trail" },
  "COY04": { text: "About 1.4 miles of gravel path from the Hwy 237 Bikeway to Montague Expressway, on Valley Water land." },
  "COY05.1": { gap: true, text: "Master planned in 2011 (Montague to Watson Park plan: 4.1 mi, 5 bridges, 10 undercrossings). Part of a $6.876M VTA Measure B design award (2020).", src: SRC.measureB2024 },
  "COY05.2": { gap: true, text: "Planned. Included in the Measure B design request for Montague to Brokaw (1.35 mi).", src: SRC.measureB2024 },
  "COY05.3": { gap: true, text: "Brokaw Rd to the Union Pacific Railroad (Project 7356): 35% plans in June 2016 and 95% plans in Sept 2017, with undercrossings at Ridder Park Dr and the railroad. Railroad-crossing permitting held it up.", src: "https://sanjose.legistar.com/View.ashx?GUID=4EBD45E4-3ED4-4F6C-9103-F91BE00BA19F&ID=7864882&M=F" },
  "COY05.5": { gap: true, text: "Planned. In the Measure B design request (Old Oakland Rd to Berryessa, 1.20 mi).", src: SRC.measureB2024 },
  "COY05.7": { gap: true, text: "Planned; no construction funding identified." },
  "COY05.8": { text: "Project 8087 (Mabury Rd to Empire St). Opened April 2025; ribbon cutting Dec 12, 2025. Total project cost $13.72M including a steel bridge over the creek and a US-101 undercrossing.", src: SRC.memoMabury2025 },
  "COY06": { text: "Watson Park to Julian St: 35% design began Aug 2025, funded by $765K of VTA Measure B; City budgeted $850K for design (Roosevelt Park to Watson Park).", src: SRC.te2026 },
  "COY06.1": { gap: true, text: "Short bridge connection at Watson Park; planned." },
  "COY07": { gap: true, text: "Julian St to Santa Clara St. Planned; part of the Measure B design request (Empire to Santa Clara, 0.95 mi).", src: SRC.measureB2024 },
  "COY07.1": { gap: true, text: "Planned on-street connection via city streets (DOT) between Santa Clara St and William St." },
  "COY08": { text: "One of the older city segments, through Selma Olinder Park." },
  "COY09": { text: "Built 2021 (William St to Story Rd project, $2.50M). Closed June 2023 when the 1922 Senter Rd rail trestle was found in danger of failure.", src: SRC.kccbTrestle },
  "COY10": { text: "Built 2021 through Coyote Meadows. Encampment clearing here (\"the Jungle\") began April 15, 2026.", src: "https://sanjosespotlight.com/san-jose-starts-clearing-homeless-camp-known-as-the-jungle/" },
  "COY11": { text: "Project 8674 through Kelley Park, past Happy Hollow. Opened Nov 7, 2021. Total project cost $3.45M, funded by a state Affordable Housing & Sustainable Communities grant.", src: SRC.memoStoryPhelan },
  "COY12": { text: "Project 8675 (Phelan Ave to Tully Rd). Total cost $8.445M. A private easement took about 10 years to negotiate. Opened 2025; ribbon cutting at Galveston Ave on Dec 12, 2025.", src: SRC.memoPhelanTully },
  "COY13": { text: "Tully Rd south opened in August 2009 with a Bay Area Ridge Trail dedication.", src: "https://www.rhorii.com/bayareaparks/CoyoteCreekTrail/CoyCrkTrlNew.html" },
  "COY15A": { text: "Singleton Rd interim bridge (2021): 89-ft span built from salvaged rail flatcars, $1.42M. Also removed a steelhead fish-passage barrier.", src: SRC.sccSingleton },
  "COY16": { text: "Enters Hellyer County Park; Santa Clara County Parks' Coyote Creek Parkway begins." },
  "COY20B": { text: "A parallel alternate alignment in design; not a gap in the through-trail." },
  "PARKWAY": { text: "Coyote Creek Parkway (County Parks), roughly 15 paved miles in total from Hellyer to Anderson Dam. The paved trail ends at the base of Anderson Dam in Morgan Hill; parts of Anderson Lake County Park beyond it are closed for the dam retrofit until about 2034. Part of the Bay Area Ridge Trail since 1990.", src: "https://parks.santaclaracounty.gov/locations/coyote-creek-parkway" },
};

// Mainline order north → south for the strip diagram (parallel alternates & spurs excluded).
const MAINLINE = ["COY00","COY03","COY04","COY05.1","COY05.2","COY05.3","COY05.4","COY05.5","COY05.6","COY05.7","COY05.8","COY06","COY06-D","COY06.1","COY07","COY07.1","COY08","COY09","COY10","COY11","COY12","COY13","COY14","COY15","COY16","COY17","COY18","COY19A","COY20A","COY21A","COY22A","PARKWAY"];

const LANDMARKS = [
  { key: true, name: "Dixon Landing Rd · Bay Trail continues north", ll: [37.4534, -121.9247] },
  { name: "Hwy 237 Bikeway", ll: [37.4221, -121.9290] },
  { key: true, name: "Montague Expwy", ll: [37.3960, -121.9153], note: "North end of the city gap zone" },
  { name: "Berryessa BART (approx.)", ll: [37.3685, -121.8747] },
  { key: true, name: "Watson Park", ll: [37.3565, -121.8742] },
  { name: "William Street Park", ll: [37.3372, -121.8680] },
  { name: "Senter Rd trestle (1922)", ll: [37.3269, -121.8661] },
  { key: true, name: "Kelley Park / Happy Hollow", ll: [37.3251, -121.8585] },
  { name: "Tully Rd / Galveston Ave trailhead", ll: [37.3113, -121.8423] },
  { name: "Singleton crossing", ll: [37.2967, -121.8214] },
  { key: true, name: "Hellyer County Park", ll: [37.2841, -121.8135] },
  { name: "Metcalf Rd", ll: [37.2270, -121.7508] },
  { key: true, name: "Anderson Dam · trail ends", ll: [37.1654, -121.6471] },
];

// Timeline. cat: plan | build | fund | flood | camp
const TIMELINE = [
  { d: "1972-07", cat: "plan", t: "Coyote Creek Park masterplan", x: "Ribera & Sue's preliminary masterplan for the City and County proposes a 2,400-acre creek park from William Street Park to Anderson Dam, with bicycle and hiking trails along its full length. Ultimate development was estimated at $32.6M in 1971 dollars.", s: [["1972 masterplan (PDF)", SJ_DOC + "20473/636687592679070000"]] },
  { d: "1990", cat: "plan", t: "South reach joins the Bay Area Ridge Trail", x: "The county's Coyote Creek Parkway segment is designated part of the regional Ridge Trail.", s: [["Coastal Conservancy staff report", SRC.sccSingleton]] },
  { d: "2003-12", cat: "plan", t: "Roosevelt Park plan proposes a creek bridge", x: "A final-draft amendment to the Roosevelt Park Master Plan, prepared for the Redevelopment Agency, proposes a 200-ft pedestrian bridge over Coyote Creek and a trail extension to San Jose Academy, costed at $3.43M. A bridge in the 1994 park plan had never been built.", s: [["Master plan amendment (PDF)", SJ_DOC + "20449/636687586996500000"]] },
  { d: "2004-03-09", cat: "fund", t: "Council seeks state money to close the gaps", x: "A $140,000 Caltrans environmental-justice grant funds a feasibility study for one continuous paved trail from Alviso to Morgan Hill.", s: [["Metro Silicon Valley", "https://www.metroactive.com/papers/metro/04.21.04/coyote-0417.html"]] },
  { d: "2004-06-07", cat: "plan", t: "Feasibility study: Story Rd to Watson Park", x: "Callander Associates maps a 3.1-mile route in six segments, with on-street links between William St and Santa Clara St and a boardwalk beside San José High School. Estimated cost: $6.66M (2004 dollars).", s: [["Feasibility study (PDF)", SJ_DOC + "20445/636687586985570000"]] },
  { d: "2005-03-08", cat: "plan", t: "Council approves Los Lagos–Phelan Ave master plan", x: "The plan covers about 2.5 miles from Los Lagos Golf Course north across Tully Rd to Phelan Ave, estimated at $1.87M to build. Its Mitigated Negative Declaration drew no public comments.", s: [["Master plan (PDF)", SJ_DOC + "20457/636687587012730000"], ["CEQAnet SCH 2005012065", "https://ceqanet.lci.ca.gov/2005012065"]] },
  { d: "2007-03-20", cat: "plan", t: "County approves Coyote Creek Parkway master plan", x: "The Board of Supervisors adopts the Parkway Integrated Natural Resources Management Plan and Master Plan.", s: [["Santa Clara County Parks", "https://www.sccgov.org/sites/parks/PlansProjects/Pages/coyote-creek-plan.aspx"]] },
  { d: "2005-12-22", cat: "plan", t: "Martha St bridge feasibility study", x: "A study for a pedestrian and bicycle bridge linking the Spartan-Keyes neighborhood to the newly built Selma Olinder Park. It compared alternatives estimated at $1.36M–$3.40M (2004–05 dollars).", s: [["Feasibility study (PDF)", SJ_DOC + "20447/636687586989470000"]] },
  { d: "2008", cat: "fund", t: "Federal earmark obligated", x: "A SAFETEA-LU earmark is obligated \"for various Coyote Creek Trails from Highway 237 to Highway 101.\" Its last dollars went to the 2021 William–Story segment.", s: [["Council memo (William–Story)", SRC.memoWilliamStory]] },
  { d: "2008-06-17", cat: "plan", t: "Council approves Story Rd–Lower Silver Creek plan", x: "The 3-mile plan runs from Story Rd through Selma Olinder and Roosevelt parks to a new bridge at the Lower Silver Creek confluence, with a Mitigated Negative Declaration. Estimated cost: $8.55M.", s: [["Master plan (PDF)", SJ_DOC + "20453/636687587003200000"]] },
  { d: "2009-08-15", cat: "build", t: "Tully Rd segment opens", x: "About 1.2 miles south from Tully Rd opens with a Ridge Trail dedication. The northern reach (Hwy 237–Montague) is designated a National Recreation Trail the same year.", s: [["Bay Area Parks", "https://www.rhorii.com/bayareaparks/CoyoteCreekTrail/CoyCrkTrlNew.html"], ["NRT listing", "https://www.nrtapplication.org/trails/coyote-creek-trail"]] },
  { d: "2011-09-13", cat: "plan", t: "Council approves Montague-to-Watson Park master plan", x: "A 4.1-mile plan for the northern gap calling for 5 bridges and 10 undercrossings. The plan estimated construction at $25.7M in 2010 dollars, before design, contingency or inflation. This reach is still mostly unbuilt in 2026.", s: [["CEQAnet SCH 2011052011", "https://ceqanet.lci.ca.gov/2011052011"]] },
  { d: "2011-11", cat: "plan", t: "Federal environmental studies for SR 237–Story Rd", x: "For the 9.6-mile federal-aid extension, a Natural Environment Study (Sept 2011) and a Biological Assessment (Nov 2011) find the trail may affect, but is not likely to adversely affect, steelhead and Chinook salmon. Mitigation calls for at least 2.07 acres of riparian restoration.", s: [["Natural Environment Study (PDF)", SJ_DOC + "37687/636809083118600000"], ["Biological Assessment (PDF)", SJ_DOC + "20433/636687586965230000"]] },
  { d: "2012", cat: "plan", t: "City buys the Senter Rd rail trestle", x: "The 250-foot, 1922 trestle over Coyote Creek is acquired for the future Five Wounds Trail connection.", s: [["San José Spotlight", "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/"]] },
  { d: "2013-10", cat: "plan", t: "Orchard Park plan includes a trail segment", x: "The Parks & Recreation Commission approves plans for a one-acre park on a 16-acre housing site at Old Oakland Rd. The developer is to build a 10-ft trail along the creek.", s: [["Master plan report (PDF)", SJ_DOC + "20451/636687586999770000"]] },
  { d: "2015-09", cat: "plan", t: "Engineering study for a permanent Singleton bridge", x: "CH2M priced a permanent bridge plus stream restoration at Singleton Rd at $5.4M–$7.9M, depending on the design (2013 cost data, 35% contingency). The City built an interim flatcar bridge in 2021 instead.", s: [["Preliminary Engineering Study (PDF)", SJ_DOC + "20459/636687587018200000"]] },
  { d: "2015-10", cat: "fund", t: "$5.256M state ATP grant for Mabury–Empire", x: "MTC's 2015 Regional Active Transportation Program recommends funding for the bridge and US-101 undercrossing segment, with a $927,600 local match.", s: [["Council memo 2019", SRC.memoMabury2019]] },
  { d: "2016-05", cat: "plan", t: "Trail Strategic Plan: 100 miles by 2022", x: "The plan lists \"Complete Coyote Creek Trail\" as an action item, and admits that at the current pace the network goal \"will not be met until 2035.\"", s: [["Strategic Plan (PDF)", SRC.strategic2016]] },
  { d: "2017-02-21", cat: "flood", t: "Coyote Creek floods", x: "With Anderson Reservoir above capacity, the creek floods Rock Springs and surrounding neighborhoods: about 14,000 evacuated and roughly $73M in damage.", s: [["KQED", "https://www.kqed.org/news/11612712/the-san-jose-flood-what-went-wrong-and-how-the-city-plans-to-fix-it"], ["SPUR", "https://www.spur.org/news/2018-05-31/after-coyote-creek-san-jose-ready-future-floods"]] },
  { d: "2017-06-15", cat: "flood", t: "Valley Water expands its flood project", x: "The board extends the Coyote Creek Flood Protection Project 2.9 miles upstream to Tully Rd. The full project was then estimated at $500M–$1B.", s: [["Valley Water release", "https://valleywater.org/news-events/news-releases/water-district-approves-expediting-and-extending-flood-protection-project"]] },
  { d: "2017-09", cat: "plan", t: "Brokaw–UPRR plans reach 95%", x: "Plans for the short Brokaw Rd–Union Pacific Railroad segment (Project 7356), with undercrossings at Ridder Park Dr and the railroad, go from 35% in June 2016 to 95% in September 2017. The segment is still unbuilt in 2026.", s: [["95% plans (PDF)", SJ_DOC + "20435/636687586968530000"], ["35% plans (PDF)", SJ_DOC + "20439/636687586974130000"]] },
  { d: "2017-08-29", cat: "fund", t: "State housing grant pays for trail", x: "A $14.98M Affordable Housing & Sustainable Communities grant (shared with an affordable-housing project on Senter Rd) includes $5.31M for the trail from Story Rd to Tully Rd.", s: [["Council memo (Story–Phelan)", SRC.memoStoryPhelan]] },
  { d: "2019-12-23", cat: "build", t: "Bids rejected for William–Story", x: "All bids are rejected; the segment is re-bid in September 2020.", s: [["Council memo", SRC.memoWilliamStory]] },
  { d: "2020-06", cat: "fund", t: "VTA Measure B: $6.876M for northern design", x: "Design-only funding for Montague–Brokaw, Old Oakland–Berryessa, Empire–Santa Clara and the Singleton crossing. Construction money is not included.", s: [["Council memo Dec 2024", SRC.measureB2024]] },
  { d: "2020-09-01", cat: "build", t: "Story–Phelan contract: $2.09M", x: "Teichert wins the Kelley Park segment ($3.45M total project). Additional outreach and COVID-19 shelter-in-place orders had already shifted the schedule.", s: [["Council memo", SRC.memoStoryPhelan]] },
  { d: "2021-01-26", cat: "build", t: "William–Story contract awarded", x: "Granite Rock wins at $1.30M (total project $2.50M), including solar lighting under I-280.", s: [["Council memo", SRC.memoWilliamStory]] },
  { d: "2021-03-21", cat: "camp", t: "Encampment removed ahead of construction", x: "An estimated 125–300 people are moved from a nearly mile-long stretch, the largest removal since the 2014 \"Jungle\" sweep.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/city-of-san-jose-removing-homeless-camp-to-make-way-for-coyote-creek-trail-renovations/2498656/"]] },
  { d: "2021-07", cat: "build", t: "Singleton interim bridge built", x: "An 89-ft span from salvaged rail flatcars replaces a low-water crossing ($1.42M), reopening 17.7 creek miles to steelhead.", s: [["Coastal Conservancy", SRC.sccSingleton], ["Council memo", SRC.memoSingleton]] },
  { d: "2021-11-07", cat: "build", t: "Selma Olinder → Kelley Park → Phelan opens", x: "About 1.8 new miles open with a grand-opening celebration alongside Viva CalleSJ.", s: [["City of San José", "https://www.sanjoseca.gov/Home/Components/News/News/3479"], ["Keep Coyote Creek Beautiful", SRC.kccbTrestle]] },
  { d: "2022-01-01", cat: "camp", t: "Trail patrol launches", x: "An $800,000-a-year SJPD bike patrol, split between the City and Valley Water, covers 3 miles from William St to Tully. Trail use rose 16% after the pilot.", s: [["San José Spotlight", "https://sanjosespotlight.com/san-jose-extends-coyote-creek-trail-adds-patrol-program/"], ["San José Spotlight 2023", "https://sanjosespotlight.com/san-jose-expands-police-patrol-on-walking-trails/"]] },
  { d: "2022-11-16", cat: "build", t: "Mabury–Empire bids rejected", x: "The first bids for the bridge segment are rejected; it is re-bid in early 2023 with a $12.98M budget.", s: [["Council memo 2023", SRC.memoMabury2023]] },
  { d: "2023-04-19", cat: "build", t: "Mabury–Empire contract: $7.48M", x: "A&B Construction is awarded the contract. Work begins July 18, 2023.", s: [["Council memo Feb 2025", SRC.memoMabury2025]] },
  { d: "2023-06", cat: "build", t: "Trestle closure", x: "Engineers find the 1922 Senter Rd trestle in \"danger of imminent failure.\" The trail from Olinder Dog Park to Story Rd closes; $500K is budgeted for studies.", s: [["Keep Coyote Creek Beautiful", SRC.kccbTrestle]] },
  { d: "2023-04-06", cat: "camp", t: "$4.8M from Valley Water to clear creek camps", x: "Funding to relocate 120–200 people along the 9-mile flood-project reach ahead of floodwall construction.", s: [["San José Spotlight", "https://sanjosespotlight.com/a-new-push-to-move-san-jose-homeless-from-coyote-creek/"]] },
  { d: "2023-11-07", cat: "build", t: "Phelan–Tully contract awarded", x: "Joseph J. Albanese bids $4.49M, 37% under the engineer's estimate. Total project: $8.445M. Construction starts December 2023.", s: [["Council memo", SRC.memoPhelanTully]] },
  { d: "2024-05-07", cat: "fund", t: "Mabury–Empire costs climb", x: "A Watson Park mitigation conflict forces a suspension; Council raises contingency to 23% (+$1M) and the budget by $1.1M. A further increase to 26% follows in March 2025.", s: [["Council memo Feb 2025", SRC.memoMabury2025]] },
  { d: "2024-10-22", cat: "flood", t: "$50M FEMA grant for flood Phase 2", x: "Federal Flood Mitigation Assistance money for the Montague-to-Tully floodwalls.", s: [["Rep. Khanna release", "https://khanna.house.gov/media/press-releases/santa-clara-county-reps-announce-50m-federal-funding-coyote-creek-flood"]] },
  { d: "2025-01-02", cat: "camp", t: "Valley Water camping ban; 12-mile sweep", x: "A no-camping ordinance takes effect on 333 creek miles; 462 encampments were removed by August 2025.", s: [["San José Spotlight", "https://sanjosespotlight.com/san-jose-counts-homeless-people-along-creek-ahead-of-sweep/"], ["Local News Matters", "https://localnewsmatters.org/2025/08/28/valley-water-sees-fewer-homeless-residents-on-its-lands-since-staring-no-camping-policy/"]] },
  { d: "2025-02-21", cat: "flood", t: "Floodwall Phase 1 nearly complete", x: "About 9,000 ft of wall from Old Oakland Rd to I-280, costing $117M.", s: [["ABC7", "https://abc7news.com/post/san-jose-floods-phase-1-crucial-coyote-creek-flood-protection-wall-completion-south-bay-officials-say/15942471/"], ["KTVU", "https://www.ktvu.com/news/8500-feet-floodwalls-nearly-complete-san-jose"]] },
  { d: "2025-04", cat: "build", t: "Mabury Rd → Watson Park opens", x: "Including the new steel creek bridge and US-101 undercrossing. Final project cost: $13.72M.", s: [["City GIS", SRC.gis], ["NSE memo Nov 2025", SRC.nse2025]] },
  { d: "2025-05", cat: "build", t: "Phelan Ave → Tully Rd opens", x: "Closes the last gap between downtown and the county parkway.", s: [["City GIS", SRC.gis]] },
  { d: "2025-08", cat: "plan", t: "Watson Park–Julian St design begins", x: "35% design funded by $765K of VTA Measure B.", s: [["T&E annual report 2026", SRC.te2026]] },
  { d: "2025-12-12", cat: "build", t: "Ribbon cutting at Galveston Ave", x: "The City celebrates both 2025 segments.", s: [["T&E annual report 2026", SRC.te2026]] },
  { d: "2026-04-15", cat: "camp", t: "Clearing of \"the Jungle\" begins", x: "More than 100 residents across from Happy Hollow are offered placements, many at the new Cerone interim-housing site. A permanent no-encampment zone follows.", s: [["San José Spotlight", "https://sanjosespotlight.com/san-jose-starts-clearing-homeless-camp-known-as-the-jungle/"], ["KTVU", "https://www.ktvu.com/news/san-jose-begins-clearing-out-former-jungle-homeless-encampment"]] },
  { d: "2026-05-21", cat: "build", t: "21 continuous miles", x: "The trail now runs without a break from William Street Park to near Anderson Reservoir. Extending it north to Montague is still years away.", s: [["Silicon Valley Cyclist", SRC.hosler2026]] },
  { d: "2026-07-20", cat: "plan", t: "Historic trestle stalls Five Wounds link", x: "The southern Five Wounds Trail segment through the trestle is paused; planning for the I-280–Santa Clara St section is due by December 2027.", s: [["San José Spotlight", "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/"]] },
  { d: "2026-08-03", cat: "flood", t: "Flood Phase 2 awarded: ~$124M", x: "Shimmick Construction wins the contract (18% under estimate). Work runs Aug 2026–Oct 2028, with temporary closures of the Mabury–Watson Park trail and of Selma Olinder and William St parks.", s: [["Valley Water release", SRC.vwContract2026]] },
  { d: "2027-12", cat: "plan", future: true, t: "Five Wounds planning due", x: "Target date for the I-280–Santa Clara St section plan. No construction date has been set.", s: [["San José Spotlight", "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/"]] },
  { d: "2028-10", cat: "flood", future: true, t: "Floodwall Phase 2 complete", x: "Expected completion of floodwalls, berms and self-raising barriers from Montague to Tully.", s: [["Valley Water", SRC.vwE1]] },
  { d: "2035", cat: "plan", future: true, t: "Network goal, at the historic pace", x: "The 2016 Strategic Plan's own projection for reaching the trail-network goal. The City has set no completion date for the Coyote Creek Trail itself.", s: [["Strategic Plan (PDF)", SRC.strategic2016]] },
];

// Completed City projects with documented total costs.
const PROJECTS = [
  { name: "William St → Story Rd", id: "#6324", year: 2021, mi: 0.75, cost: 2.499, contract: 1.298, funding: "Federal SAFETEA-LU earmark, Park Trust Fund, Construction & Conveyance tax", src: SRC.memoWilliamStory },
  { name: "Story Rd → Phelan Ave", id: "#8674", year: 2021, mi: 0.90, cost: 3.449, contract: 2.090, funding: "State AHSC grant (Affordable Housing & Sustainable Communities)", src: SRC.memoStoryPhelan },
  { name: "Phelan Ave → Tully Rd", id: "#8675", year: 2025, mi: 1.25, cost: 8.445, contract: 4.487, funding: "AHSC grant, Park Trust Fund, Parks Bond, C&C tax; $221K easement", src: SRC.memoPhelanTully },
  { name: "Mabury Rd → Empire St", id: "#8087", year: 2025, mi: 0.58, cost: 13.72, contract: 7.484, funding: "$5.256M state ATP grant, $1.32M federal earmark, City funds", src: SRC.memoMabury2025, note: "Bridge + US-101 undercrossing; reported as 0.3–0.58 mi" },
  { name: "Singleton interim bridge", id: "", year: 2021, mi: null, cost: 1.42, contract: null, funding: "Valley Water Safe Clean Water $1M, Coastal Conservancy $140K, City ~$270K", src: SRC.sccSingleton },
];

// Remaining mainline gaps (City GIS, Nov 2026).
const GAPS = [
  { name: "Montague Expwy → Brokaw Rd", ids: ["COY05.1","COY05.2"], mi: 1.44, status: "Planned", hard: "Valley Water land; under-crossings at Charcot & Brokaw" },
  { name: "Brokaw Rd → UPRR", ids: ["COY05.3"], mi: 0.22, status: "Design", hard: "95% design (Sept 2017); railroad permitting" },
  { name: "Old Oakland Rd → Chessington Dr", ids: ["COY05.5"], mi: 1.03, status: "Planned", hard: "Orchard Park; Measure B design request" },
  { name: "Berryessa Rd → Mabury Rd", ids: ["COY05.7"], mi: 0.58, status: "Planned", hard: "No funding identified" },
  { name: "Watson Park → Julian St", ids: ["COY06-D","COY06.1"], mi: 0.45, status: "Design", hard: "35% design underway (Measure B $765K)" },
  { name: "Julian St → Santa Clara St", ids: ["COY07"], mi: 0.50, status: "Planned", hard: "Measure B design request" },
  { name: "Santa Clara St → William St", ids: ["COY07.1"], mi: 0.65, status: "Planned", hard: "Likely on-street connection" },
];

const DOCS = [
  { g: "Master plans & studies", items: [
    ["Coyote Creek Trail Master Plan (low-res, ~6 MB)", SJ_DOC + "20475/636687592682200000"],
    ["Coyote Creek Park Masterplan, July 1972 (hi-res, ~32 MB)", SJ_DOC + "20473/636687592679070000"],
    ["Master Plan: Montague Expwy to Watson Park", SJ_DOC + "20455/636687587009930000"],
    ["Master Plan: Story Rd to Lower Silver Creek (2008)", SJ_DOC + "20453/636687587003200000"],
    ["Master Plan: Los Lagos Golf Course to Phelan Ave (2005)", SJ_DOC + "20457/636687587012730000"],
    ["Master Plan: through Orchard Park", SJ_DOC + "20451/636687586999770000"],
    ["Master Plan Amendment: Roosevelt Park", SJ_DOC + "20449/636687586996500000"],
    ["Feasibility Study: Hwy 101 to Story Rd", SJ_DOC + "20445/636687586985570000"],
    ["Feasibility Study: Martha St Pedestrian Bridge", SJ_DOC + "20447/636687586989470000"],
    ["Alignment Plan: Berryessa BART to Santa Clara St BRT", SJ_DOC + "20467/636687592670300000"],
    ["Preliminary Engineering: Singleton Crossing (CH2M, 2015)", SJ_DOC + "20459/636687587018200000"],
    ["San José Trail Program Strategic Plan (2016)", SRC.strategic2016],
  ]},
  { g: "Design plans (schematics)", items: [
    ["90% Plans: Story Rd to Phelan Ave (38 MB)", SJ_DOC + "20441/636687586978070000"],
    ["35% Plans: Brokaw Rd to UPRR (June 2016, 11 MB)", SJ_DOC + "20439/636687586974130000"],
    ["95% Plans: Brokaw Rd to UPRR (18 MB)", SJ_DOC + "20435/636687586968530000"],
    ["100% Plans: Hwy 280 (Selma Olinder) to Story Rd", SJ_DOC + "37689/636809087405070000"],
  ]},
  { g: "Reach maps & fact sheet", items: [
    ["Overview Map: Section 1 (Coyote Creek Park masterplan, c. 1972)", SJ_DOC + "20481/636687592691270000"],
    ["Overview Map: Section 2 (Coyote Creek Park masterplan, c. 1972)", SJ_DOC + "20483/636687592694070000"],
    ["Overview Map: Section 3 (Coyote Creek Park masterplan, c. 1972)", SJ_DOC + "20485/636687592697500000"],
    ["Reach map: William St to Phelan Ave", SJ_DOC + "85452/637872622937800000"],
    ["Reach map: Hwy 237 Bikeway to Montague", SJ_DOC + "20495/636687595949370000"],
    ["Reach map: Tully Rd to Yerba Buena", SJ_DOC + "20469/636687592672800000"],
    ["Reach map: Yerba Buena to County", SJ_DOC + "20471/636687592675470000"],
    ["Coyote Creek Trail Fact Sheet (Berryessa Rd–Mercado Way)", SJ_DOC + "20497/636687596865630000"],
    ["County Parks: Coyote Creek Parkway guide map (PDF)", "https://files.santaclaracounty.gov/exjcpb1516/2024-11/coyote-creek-parkway-guide-map.pdf"],
    ["Bay Area Ridge Trail map: Parkway North (2025)", "https://ridgetrail.org/wp-content/uploads/2017/07/Santa-Clara_Coyote-Creek-Parkway-North_2025.pdf"],
  ]},
  { g: "Environmental review", items: [
    ["CEQA: Coyote Creek Trail Master Plan (2005)", "https://ceqanet.lci.ca.gov/2005012065"],
    ["CEQA: Master Plan Public Project PP09-218 (2011)", "https://ceqanet.lci.ca.gov/2011052011"],
    ["CEQA: Story Rd to Phelan Ave (2014)", "https://ceqanet.lci.ca.gov/2014102029"],
    ["CEQA: Valley Water Flood Protection Project (2023)", "https://ceqanet.lci.ca.gov/2023110513/2"],
    ["Natural Environment Study: SR 237 to Story Rd (2011)", SJ_DOC + "37687/636809083118600000"],
    ["Biological Assessment / Essential Fish Habitat Assessment (2011)", SJ_DOC + "20433/636687586965230000"],
  ]},
  { g: "Council & committee memos", items: [
    ["Mabury–Empire rebid & contingency (Feb 2025)", SRC.memoMabury2025],
    ["Mabury–Empire contract award (2023)", SRC.memoMabury2023],
    ["Phelan–Tully contract award (Nov 2023)", SRC.memoPhelanTully],
    ["Story–Phelan contract award (2020)", SRC.memoStoryPhelan],
    ["William–Story contract award (2021)", SRC.memoWilliamStory],
    ["Singleton crossing (May 2021)", SRC.memoSingleton],
    ["Bike Plan & Trail Network Annual Update (2024)", SRC.te2024],
    ["Trail Network Annual Report (2026)", SRC.te2026],
    ["Neighborhood Services & Education Committee memo (Nov 2025)", SRC.nse2025],
    ["Coastal Conservancy: Singleton Crossing staff report (2021)", SRC.sccSingleton],
  ]},
];

const MAPS = [
  { t: "San José Parks & Trails GIS map", d: "The City's official ArcGIS web map of every park and trail.", u: "https://experience.arcgis.com/experience/773085d3c43a4296bda57df31c89aab9", tag: "Official" },
  { t: "OpenStreetMap route relation", d: "Community-mapped route \"CCT\" (relation 3504713).", u: "https://www.openstreetmap.org/relation/3504713", tag: "Open data" },
  { t: "Waymarked Trails (cycling)", d: "Elevation profile and route view built from OSM.", u: "https://cycling.waymarkedtrails.org/#route?id=3504713", tag: "Open data" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this site's map: every reach with status, length and opening date.", u: SRC.gis, tag: "Download" },
  { t: "City GIS: Trail REST service", d: "ArcGIS REST endpoint (layer 538) for live queries.", u: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538", tag: "API" },
  { t: "TrailLink", d: "Rails-to-Trails Conservancy guide, reviews and photos.", u: "https://www.traillink.com/trail/coyote-creek-trail/", tag: "Guide" },
  { t: "AllTrails", d: "User reviews and recorded routes.", u: "https://www.alltrails.com/trail/us/california/coyote-creek-trail", tag: "Guide" },
  { t: "County Parks: Coyote Creek Parkway", d: "Hours, access points and the parkway guide map.", u: "https://parks.santaclaracounty.gov/locations/coyote-creek-parkway", tag: "Official" },
  { t: "Valley Water flood protection project", d: "Floodwall phases, closures and construction updates.", u: SRC.vwE1, tag: "Official" },
  { t: "Wikipedia: Coyote Creek Trail", d: "Encyclopedia overview of the trail.", u: "https://en.wikipedia.org/wiki/Coyote_Creek_Trail", tag: "Reference" },
];

const NEWS = [
  ["2004-04-21", "Metro Silicon Valley", "Back on the Trail", "https://www.metroactive.com/papers/metro/04.21.04/coyote-0417.html", "Early push for a continuous paved trail from Alviso to Morgan Hill."],
  ["2013-07-25", "San José Inside", "Trails of the City: Great and Growing", "https://www.sanjoseinside.com/opinion/7_25_13_san_jose_trails_guadalupe_los_gatos/", "Op-ed praising the trail system; Coyote Creek a ~30-mile round trip ending at Tully."],
  ["2017-06-15", "Valley Water", "Water district approves expediting and extending a flood protection project for Coyote Creek", "https://valleywater.org/news-events/news-releases/water-district-approves-expediting-and-extending-flood-protection-project", "Project extended to Tully Rd; full cost estimated at $500M–$1B."],
  ["2017-08-22", "KQED", "The San Jose Flood: What Went Wrong and How the City Plans to Fix It", "https://www.kqed.org/news/11612712/the-san-jose-flood-what-went-wrong-and-how-the-city-plans-to-fix-it", "14,000+ residents got no warning before the Feb. 2017 flood."],
  ["2018-02-20", "KTVU", "1 year since San Jose Coyote Creek flood; is city better prepared?", "https://www.ktvu.com/news/1-year-since-san-jose-coyote-creek-flood-is-city-better-prepared", "Fire department adds vehicles and boats after 2017 rescues."],
  ["2018-05-31", "SPUR", "After Coyote Creek, Is San Jose Ready for Future Floods?", "https://www.spur.org/news/2018-05-31/after-coyote-creek-san-jose-ready-future-floods", "$73M in damage; Valley Water owns only ~10% of mid-Coyote right-of-way."],
  ["2019-11-27", "KQED", "Nearly Three Years After Coyote Creek Floods, Lawsuit Drags On", "https://www.kqed.org/news/11788730/nearly-two-years-after-coyote-creek-floods-lawsuit-drags-on", "Flood victims' litigation against Valley Water and the City."],
  ["2021-03-21", "NBC Bay Area", "City of San Jose Removing Homeless Camp to Make Way for Coyote Creek Trail Renovations", "https://www.nbcbayarea.com/news/local/city-of-san-jose-removing-homeless-camp-to-make-way-for-coyote-creek-trail-renovations/2498656/", "Largest removal since 2014; trail work then due by fall 2022."],
  ["2021-03-23", "Local News Matters", "San Jose clears homeless encampments ahead of Coyote Creek Trail renovation", "https://localnewsmatters.org/2021/03/23/san-jose-clears-homeless-encampments-ahead-of-coyote-creek-trail-renovation/", "Bay City News coverage of the March 2021 clearance."],
  ["2021-12-07", "Valley Water News", "New Singleton Bridge crossing Coyote Creek open to the public", "https://valleywaternews.org/2021/12/07/new-singleton-bridge-crossing-coyote-creek-open-to-the-public/", "Flatcar bridge replaces a low-water crossing. (Original link may now be broken.)"],
  ["2022-01-10", "San José Spotlight", "San Jose extends Coyote Creek Trail, adds patrol program", "https://sanjosespotlight.com/san-jose-extends-coyote-creek-trail-adds-patrol-program/", "New sections open; $800K/yr patrol; 59% of users want gaps closed first."],
  ["2023-02-15", "San José Spotlight", "San Jose expands police patrol on walking trails", "https://sanjosespotlight.com/san-jose-expands-police-patrol-on-walking-trails/", "Trail use up 16% after the patrol pilot."],
  ["2023-02-24", "San José Spotlight", "Coalition calls on San Jose to build park along Coyote Creek", "https://sanjosespotlight.com/coalition-calls-on-san-jose-to-build-park-along-coyote-creek/", "Push for a park at 50-acre \"Coyote Meadows\"; no funding identified."],
  ["2023-04-06", "San José Spotlight", "A new push to move San Jose homeless from Coyote Creek", "https://sanjosespotlight.com/a-new-push-to-move-san-jose-homeless-from-coyote-creek/", "Valley Water gives the City $4.8M to clear camps on the flood-project reach."],
  ["2023-07-11", "Keep Coyote Creek Beautiful", "Coyote Creek Trail and Trestle", "https://www.keepcoyotecreekbeautiful.org/post/cc-trestle", "Trestle found in danger of failure; trail closed with a 1–3 year estimate."],
  ["2023-09-14", "San José Spotlight", "East San Jose walking trail will be expanded", "https://sanjosespotlight.com/east-san-jose-five-wounds-walking-biking-trail-will-be-expanded/", "Five Wounds Trail to link Coyote Creek with Silver Creek; ~$5M soil cleanup."],
  ["2024-02-20", "San José Spotlight", "Op-ed: Valley Water makes progress on reducing flood risk along Coyote Creek", "https://sanjosespotlight.com/op-ed-valley-water-makes-progress-on-reducing-flood-risk-along-coyote-creek/", "3,500 ft of floodwall built by January 2024."],
  ["2024-07-16", "Valley Water", "Valley Water releases draft EIR on the Coyote Creek Flood Protection Project", "https://www.valleywater.org/news/valley-water-releases-draft-environmental-impact-report-on-the-coyote-creek-flood-protection-project", "Draft EIR covers 9 miles from Montague to Tully."],
  ["2024-12-03", "KTVU", "8,500 feet of floodwalls nearly complete in San Jose", "https://www.ktvu.com/news/8500-feet-floodwalls-nearly-complete-san-jose", "Phase 1 cost $117M; Phase 2 estimated at $221M."],
  ["2024-12-26", "San José Spotlight", "San Jose counts homeless people along creek ahead of sweep", "https://sanjosespotlight.com/san-jose-counts-homeless-people-along-creek-ahead-of-sweep/", "12-mile sweep begins January 2025."],
  ["2025-02-21", "ABC7", "Phase 1 of crucial Coyote Creek floodwall almost complete", "https://abc7news.com/post/san-jose-floods-phase-1-crucial-coyote-creek-flood-protection-wall-completion-south-bay-officials-say/15942471/", "Four miles of wall from Old Oakland Rd to I-280."],
  ["2025-02-25", "KQED", "These San José Floodwalls Should Shield Neighborhoods Against a 20-Year Flood", "https://www.kqed.org/news/12027875/san-jose-floodwalls-should-shield-neighborhoods-against-20-year-flood", "Self-raising barriers designed to keep park access."],
  ["2025-04-14", "San José Spotlight", "San Jose starts work on safe sleeping site", "https://sanjosespotlight.com/san-jose-starts-work-on-safe-sleeping-site-sanctioned-homeless-camp/", "Mabury to Empire becomes a no-encampment zone."],
  ["2025-09-18", "San José Spotlight", "San Jose river trail use up after homeless sweeps", "https://sanjosespotlight.com/san-jose-river-trail-use-up-after-homeless-sweeps/", "Coyote Creek among 21 no-encampment zones."],
  ["2026-02-25", "CBS News Bay Area", "San Jose launches plan to clear out Coyote Meadows homeless encampment", "https://www.cbsnews.com/sanfrancisco/news/san-jose-coyote-meadows-homeless-encampment-sweep-50-day-plan/", "50 days of outreach to ~100 people near Story and Senter roads."],
  ["2026-02-25", "San José Inside", "San José to Clear One of the Last Large Homeless Encampments within City Limits", "https://www.sanjoseinside.com/news/san-jose-to-clear-one-of-the-last-large-homeless-encampments-within-city-limits-in-april/", "Permanent no-encampment zone planned."],
  ["2026-04-14", "San José Spotlight", "San Jose residents rally to save railroad trestle", "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/", "City weighs demolishing the 1922 trestle for a steel bridge."],
  ["2026-04-15", "San José Spotlight", "San Jose starts clearing homeless camp known as 'the Jungle'", "https://sanjosespotlight.com/san-jose-starts-clearing-homeless-camp-known-as-the-jungle/", "About 500,000 lbs of trash expected to be hauled out."],
  ["2026-04-15", "KTVU", "San Jose clears out former 'Jungle' homeless encampment", "https://www.ktvu.com/news/san-jose-begins-clearing-out-former-jungle-homeless-encampment", "All 109 people on the City's list accepted placements."],
  ["2026-04-16", "Local News Matters", "'It's an eviction': San Jose begins dismantling largest homeless encampment", "https://localnewsmatters.org/2026/04/16/its-an-eviction-san-jose-begins-dismantling-largest-homeless-encampment-the-jungle/", "Residents' perspective on the clearing."],
  ["2026-04-22", "Spartan Media Group", "Encampment Sweeps Start at Coyote Creek", "https://spartanmediagroup.net/9772/news/encampment-sweeps-start-at-coyote-creek/", "SJSU student coverage; Cerone site has 162 rooms."],
  ["2026-05-21", "Silicon Valley Cyclist", "Coyote Creek Trail sees major improvements", "https://rayhosler.wordpress.com/2026/05/21/coyote-creek-trail-sees-major-improvements/", "21 uninterrupted miles from William Street Park to Anderson."],
  ["2026-07-20", "San José Spotlight", "Historic trestle halts San Jose trail plans", "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/", "\"If we had all the funding… to do all 40 miles of the trail network, we would.\""],
  ["2026-08-03", "Valley Water", "Valley Water awards construction contract for the Coyote Creek Flood Protection Project", "https://www.valleywater.org/news-events/news-releases/ValleyWaterawardsconstructioncontractfortheCoyoteCreekFloodProtectionProject", "~$124M Phase 2 contract; temporary trail and park closures."],
];

// Photos from Wikimedia Commons. ll = camera location from the file's geotag ("approx" = placed by subject).
const PHOTOS = [
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-Tully-trailhead.jpg", c: "Tully Rd trailhead", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.311204, -121.842255], y: 2019 },
  { f: "Coyote_Creek_under_highway_237.jpg", c: "The creek under Highway 237, on the northern reach", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.424133, -121.925392], y: 2021 },
  { f: "Berryessa station from Marbury Road, March 2018.JPG", c: "Berryessa BART under construction, seen from Mabury Rd, next to the northern trail gap", a: "Pi.1415926535", l: "CC BY-SA 3.0", ll: [37.364636, -121.873035], y: 2018 },
  { f: "Miguelita_or_Lower_Silver_Creek_confluence_with_Coyote_Creek.jpg", c: "Lower Silver Creek meets Coyote Creek near Watson Park", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.356322, -121.873914], y: 2020 },
  { f: "Happy Hollow Park & Zoo -San Jose, California, USA-2Oct2011 (1).jpg", c: "Happy Hollow Park & Zoo entrance, Kelley Park", a: "Don DeBold", l: "CC BY 2.0", ll: [37.325833, -121.861167], y: 2011 },
  { f: "Kelley_Park_Amphitheater_(4526430241).jpg", c: "Kelley Park amphitheater", a: "HarshLight", l: "CC BY 2.0", ll: [37.323336, -121.86166], y: 2010 },
  { f: "Japanese Friendship Garden (4526430785).jpg", c: "Japanese Friendship Garden, Kelley Park", a: "HarshLight", l: "CC BY 2.0", ll: [37.322393, -121.861478], y: 2010 },
  { f: "Early_morning_in_the_park_(19929723120).jpg", c: "Early morning in Kelley Park", a: "bluesbby", l: "CC BY 2.0", ll: [37.3238, -121.8592], approx: true, y: 2015 },
  { f: "Coyote_Creek_aerial.jpg", c: "Coyote Creek from the air, July 2017 (camera over Capitol Expwy)", a: "Dicklyon", l: "CC BY-SA 4.0", ll: [37.306242, -121.823253], y: 2017 },
  { f: "Ducks at Cottonwood Lake in Hellyer County Park.jpg", c: "Cottonwood Lake, Hellyer County Park", a: "Itscyp", l: "CC0", ll: [37.279353, -121.811867], y: 2020 },
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-Lakes.jpg", c: "Percolation ponds along the parkway near Metcalf Rd", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.228994, -121.755056], y: 2019 },
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-bridge.jpg", c: "Trail bridge over Coyote Creek", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.226969, -121.751631], y: 2019 },
  { f: "Coyote cut 1410.JPG", c: "Old Southern Pacific rail cut beside the parkway", a: "Pedro Xing", l: "CC0", ll: [37.226523, -121.751396], y: 2014 },
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-Bailey-crossing.jpg", c: "Bailey Ave crossing, Coyote Valley", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.215358, -121.730767], y: 2019 },
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-Bailey-turn.jpg", c: "A bend in the trail near Bailey Ave", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.213219, -121.727769], y: 2019 },
  { f: "Kluft-photo-2019-06-16-Coyote-Creek-sunset1.jpg", c: "Sunset over Coyote Creek", a: "Ikluft", l: "CC BY-SA 4.0", ll: [37.205489, -121.717825], y: 2019 },
  { f: "Beaver_dam_on_Coyote_Creek_South_Bay_Clean_Creeks_Coalition_2018-11-02.jpg", c: "Beaver dam on Coyote Creek (location not recorded)", a: "Schmiebel", l: "CC BY-SA 4.0", ll: null, y: 2018 },
];

// Scorecards: did it get done, on time, on budget? Keyed by TIMELINE date.
// s: good | warn | bad | unk (not reported) | pend (still in progress)
const OUTCOMES = {
  "1972-07": [
    ["Trail", "good", "The full-length trail it proposed now runs without a break from William Street Park to near Anderson Reservoir (2026)."],
  ],
  "2005-03-08": [
    ["Completed", "good", "Yes, in two pieces: Tully Rd south opened in Aug 2009, and Phelan Ave–Tully Rd in May 2025, 20 years after approval."],
  ],
  "2008-06-17": [
    ["Completed", "warn", "Partly. Story Rd to William St opened in 2021; William St to the Lower Silver Creek confluence is still unbuilt in 2026."],
  ],
  "2013-10": [
    ["Completed", "good", "The City's trail GIS shows the segment between the railroad and Old Oakland Rd as open. Its opening year isn't documented."],
  ],
  "2017-09": [
    ["Completed", "bad", "Not built. Nine years after 95% design the segment is still a gap; railroad permitting held it up."],
  ],
  "2004-03-09": [
    ["Promise", "warn", "Improvements were promised \"by spring 2005\". The Kelley Park section opened in Nov 2021, 16 years later."],
  ],
  "2011-09-13": [
    ["Completed", "bad", "Mostly not built. 15 years later, about 4.9 miles of gaps remain between Montague and William St."],
    ["Budget", "unk", "Estimated at $25.7M (2010 dollars, construction only). No updated estimate has been published."],
  ],
  "2016-05": [
    ["Goal", "bad", "Missed. The network had 67 of the 100 targeted miles in 2026, four years after the 2022 deadline."],
  ],
  "2005-12-22": [
    ["Completed", "unk", "No Martha St bridge appears in the City's trail GIS."],
  ],
  "2015-09": [
    ["Completed", "bad", "The permanent bridge was not built. A $1.42M interim bridge went in instead in 2021, and the permanent crossing waits \"as resources allow.\""],
  ],
  "2020-06": [
    ["Progress", "warn", "As of Nov 2025, design had started on only one piece (Watson Park–Julian St), and the City's matching funds were \"still pending.\""],
  ],
  "2020-09-01": [
    ["Completed", "good", "Yes: completed Oct 2021, with the grand opening on Nov 7, 2021."],
    ["Schedule", "warn", "About 2 months late. The award memo planned construction for Oct 2020 to Aug 2021."],
    ["Budget", "unk", "\"Within budget\" at award ($2.09M contract, $3.45M total). The final cost has not been published."],
  ],
  "2021-01-26": [
    ["Completed", "good", "Yes: opened Nov 7, 2021."],
    ["Schedule", "warn", "About 1 month late against the Apr–Oct 2021 plan, and about 15 months behind the original 2019 bid, whose bids were all rejected."],
    ["Budget", "unk", "$1.30M contract plus 10% contingency ($2.50M total). The final cost has not been published."],
  ],
  "2021-03-21": [
    ["Promise", "warn", "Work was to be \"fully done by fall 2022\". The last piece (Phelan–Tully) opened in May 2025, about 2½ years later."],
  ],
  "2021-07": [
    ["Completed", "good", "Yes: built summer 2021."],
    ["Budget", "unk", "The City added $1.4M to match the construction estimate (May 2021). The final cost has not been published."],
  ],
  "2023-04-19": [
    ["Completed", "good", "Yes: opened Apr 2025, with the ribbon cutting on Dec 12, 2025."],
    ["Schedule", "warn", "About 4 months late. The 2023 award planned completion by the end of 2024, and the project was suspended over a Watson Park mitigation conflict. Construction had originally been funded in 2015."],
    ["Budget", "bad", "Over budget. The budget rose from $12.98M to $13.72M (+5.7%), and the contingency rose from 10% to 26% (+$1.16M)."],
  ],
  "2023-06": [
    ["Estimate", "unk", "The City warned of a 1–3 year closure. The stretch under the trestle reopened in Sept 2023."],
  ],
  "2023-11-07": [
    ["Completed", "good", "Yes: opened May 2025, with the ribbon cutting on Dec 12, 2025."],
    ["Schedule", "warn", "About 4 months late against the Jan 2025 plan. The private easement alone took about 10 years to negotiate."],
    ["Budget", "good", "The winning bid was $4.49M, 37% under the $7.1M engineer's estimate. The final cost has not been published."],
  ],
  "2025-08": [
    ["Progress", "pend", "35% design was due in summer 2026. No completion has been reported yet."],
  ],
  "2026-08-03": [
    ["Progress", "pend", "Under construction. Due to finish in Oct 2028."],
    ["Budget", "good", "The contract came in about 18% under the engineer's estimate."],
  ],
};

// Pull quotes, verbatim from the cited articles.
const QUOTES = [
  { q: "The Coyote Creek Trail is one of the hidden secrets in this part of the county.", who: "Cesar Fernando Elias", role: "park ranger at Hellyer County Park", src: "Metro Silicon Valley, 2004", u: "https://www.metroactive.com/papers/metro/04.21.04/coyote-0417.html" },
  { q: "I don't have a car and it's good for exercise.", who: "Angel Alcaraz", role: "longtime East San Jose resident near Little Saigon", src: "San José Spotlight, 2022", u: "https://sanjosespotlight.com/san-jose-extends-coyote-creek-trail-adds-patrol-program/" },
  { q: "Our coalition sees this as an opportunity to create a continuous chain of parks.", who: "Deb Kramer", role: "executive director, Keep Coyote Creek Beautiful", src: "San José Spotlight, 2023", u: "https://sanjosespotlight.com/coalition-calls-on-san-jose-to-build-park-along-coyote-creek/" },
  { q: "There's no question that of all the trails in the area, the Coyote Creek Trail is one of the most neglected.", who: "Russell Westbrook", role: "founder of Walk San Jose", src: "Metro Silicon Valley, 2004", u: "https://www.metroactive.com/papers/metro/04.21.04/coyote-0417.html" },
];

// ---- Page configuration (used by the shared app.js) ----
const PARENT = { COY15A: "COY15", "COY15-1": "COY15", COY11A: "COY11", COY08A: "COY08", COY19B: "COY19A", COY21B: "COY21A", COY20B: "COY20A", COY13B: "COY13", "COY07.2": "COY08" };
const SIDE_KIND = { COY19B: "Parallel route", COY21B: "Parallel route", COY20B: "Alternate alignment", COY13B: "Spur", COY11A: "Spur", COY08A: "Bridge link", "COY15-1": "Ramp", COY15A: "Crossing" };
const NOT_GAP = ["COY20B"];
const OWNERS = { PRNS: "City Parks (PRNS)", SCVWD: "Valley Water", SCC: "Santa Clara County Parks", DOT: "City DOT", PRIVATE: "Private land", NEIGHCITY: "City of Milpitas" };
const CAT_LABELS = { flood: "Flood & Valley Water" };
const INTRO_CAP = "Bay Trail to Anderson Dam";
const INTRO_MARKS = [["Bay Trail", [37.4534, -121.9247], "right"], ["Montague Expwy", [37.396, -121.9153], "right"], ["William St Park", [37.3372, -121.868], "left"],
  ["Kelley Park", [37.3245, -121.8588], "right"], ["Hellyer County Park", [37.2841, -121.8135], "right"], ["Coyote Valley", [37.218, -121.738], "right"], ["Anderson Dam", [37.1654, -121.6471], "right"]];
const PM_EST = [];
const PRESETS = [
  { label: "2011 plan, 2010 $, construction only", pm: 25.7 / 4.27 },
  { label: "Creek-bank (Phelan–Tully)", pm: 8.445 / 1.25 },
  { label: "Average of recent projects", pm: null },
  { label: "Bridge-heavy (Mabury–Empire)", pm: 13.72 / 0.58 },
];
const EST_EXTRAS = [{ name: "Permanent Singleton bridge", short: "Singleton bridge", note: "210-ft span above 100-yr flood (2019 est.)", cost: 7.7 }];
const STATS = ({ gapMi, spent, fmtM }) => {
  const est = pm => gapMi * pm + 7.7;
  return [
    ["~21 mi", "continuous trail from William Street Park south to Anderson Dam"],
    [gapMi.toFixed(1) + " mi", "of mainline gaps left in north San José (Montague to William St)"],
    [fmtM(spent), "spent on five City trail projects completed 2021–2025"],
    [`${fmtM(est(8.445 / 1.25)).replace(".0", "")}–${fmtM(est(13.72 / 0.58))}`, "our rough estimate to close the gaps in today's dollars (the City's 2011 plan said $25.7M in 2010 dollars)"],
  ];
};
const DELIVERY = [
  ["William St → Story Rd", "Oct 2021", "Nov 2021", "warn", "$2.50M", "Not published", "unk", SRC.memoWilliamStory],
  ["Story Rd → Phelan Ave", "Aug 2021", "Oct 2021", "warn", "$3.45M", "Not published", "unk", SRC.memoStoryPhelan],
  ["Singleton interim bridge", "2021", "Summer 2021", "good", "$1.42M", "Not published", "unk", SRC.memoSingleton],
  ["Mabury Rd → Empire St", "End of 2024", "Apr 2025", "warn", "$12.98M", "$13.72M (+5.7%)", "bad", SRC.memoMabury2025],
  ["Phelan Ave → Tully Rd", "Jan 2025", "May 2025", "warn", "$7.1M est. → $4.49M bid", "Bid 37% under est.; final not published", "good", SRC.memoPhelanTully],
];
const OFFICIAL_EST = {
  head: ["Reach", "Miles", "Construction estimate (2010 $)", "Major structures"],
  rows: [
    ["1", "Montague Expwy → O'Toole Ave", 1.13, 5.1, "Bridge at Montague, undercrossing at Charcot"],
    ["2", "O'Toole Ave → Union Pacific RR", 0.67, 2.8, "Five undercrossings: O'Toole, I-880, Brokaw, Ridder Park, UPRR"],
    ["3", "Union Pacific RR → Flea Market", 1.03, 8.5, "Bridges at Notting Hill Dr and Oakland Rd"],
    ["4", "Flea Market → Watson Park", 1.44, 9.3, "Bridges at Penitencia Creek and Hwy 101; undercrossings at Berryessa, Mabury, Hwy 101"],
  ],
  total: ["4.27", "$25.7M ≈ $6.0M / mi"],
};
