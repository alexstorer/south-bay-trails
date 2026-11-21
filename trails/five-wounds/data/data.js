// When the site's facts were last checked. Bump this (scripts/stamp.py does it) on every content update.
const SITE_UPDATED = "2026-11-21";

// Curated research data for the Five Wounds Trail explorer.
// Every entry carries at least one source URL. Compiled November 2026.

const SJ_DOC = "https://www.sanjoseca.gov/home/showpublisheddocument/";

const SRC = {
  gis: "https://data.sanjoseca.gov/dataset/trail-reach",
  cityPage: "https://web.archive.org/web/20260920012835/https://www.sanjoseca.gov/Home/Components/FacilityDirectory/FacilityDirectory/3038/2058",
  ffwt: "https://fivewoundstrailsj.org/",
  ffwtTimeline: "https://fivewoundstrailsj.org/timeline/",
  hre: SJ_DOC + "104617/638290876701700000",
  bts: SJ_DOC + "104613/638290876665770000",
  structural: SJ_DOC + "104615/638290876696070000",
  soi: SJ_DOC + "104619/638290876718270000",
  trestle2026: SJ_DOC + "126694/638991669715930000",
  feas2022: SJ_DOC + "89409/637985739730530000",
  mp2026: SJ_DOC + "133079/639192213365830000",
  flyer2026: SJ_DOC + "132773/639179147805170000",
  cityMap: SJ_DOC + "20533/637332633107570000",
  nip2006: "https://www.sjsu.edu/urbanplanning/docs/community-planning-reports/FWBTNeighborhood_ImprovementPlanAmendment.pdf",
  concept2010: "https://fivewoundstrailsj.org/ffwt/wp-content/uploads/2010-Five-Wounds-BART-Station-Plan.pdf",
  vta2011: "https://fivewoundstrailsj.org/ffwt/wp-content/uploads/VTA-Letter-August-2011.pdf",
  minutes2003: "https://web.archive.org/web/20081007203446/http://www.sanjoseca.gov/clerk/agenda/11_18_03docs/11_18_03_2.1g.htm",
  atp2018: "https://legistar.granicus.com/sanjose/attachments/4ec98374-a640-47f1-9748-81f58bd03d0c.pdf",
  uv2018: "https://legistar.granicus.com/sanjose/attachments/c99d1f57-6a25-4d8a-adf0-a157f678f747.pdf",
  scc2020: "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2020/2006/20200618Board03G_SJ_PCA_Five_Wounds_Trail_Planning.pdf",
  atp2020: "https://legistar.granicus.com/sanjose/attachments/e07587fe-4d75-45f7-a13d-d7a6bbf65f09.pdf",
  mayor2020: "https://legistar.granicus.com/sanjose/attachments/df16b4c9-ef35-4446-96d8-7408bf980bd9.pdf",
  psa2023: "https://legistar.granicus.com/sanjose/attachments/3f78c199-216a-4372-8a12-88cbcc8aebd0.pdf",
  psaReso: "https://legistar.granicus.com/sanjose/attachments/b4f8024d-00c5-49b9-a4e5-347ff424affd.pdf",
  psaLetters: "https://legistar.granicus.com/sanjose/attachments/b9c39a8e-9ab0-43f6-aaf5-0d5c4d253968.pdf",
  bkf2023: "https://legistar.granicus.com/sanjose/attachments/12ffda55-8827-4ad6-8bb4-1b38af22010a.pdf",
  te2026: "https://legistar.granicus.com/sanjose/attachments/d84f6ba6-1e7b-4d7e-898c-5fb9f3fb990c.pdf",
  measureB: "https://2016measureb.vta.org/projects/five-wounds-trail-from-story-road-to-mabury-road",
  osa2024: "https://news.openspaceauthority.org/blog/gm-update-2024",
  vtaStation: "https://vtabart.org/wp-content/uploads/2026/08/VTABSV_FactSheet_2025_28thSt-LilPort_01062026.pdf",
  pmoc2026: "https://vtabart.org/wp-content/uploads/2026/09/2026-07-CA-BSVII-OP25-ProjectMonitoringReport_08-28-2026-091626-v1.pdf",
  uvNOP: "https://ceqanet.lci.ca.gov/2024030360",
  kccb: "https://www.keepcoyotecreekbeautiful.org/post/cc-trestle",
  spot2023: "https://sanjosespotlight.com/east-san-jose-five-wounds-walking-biking-trail-will-be-expanded/",
  spotRally: "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/",
  spotPause: "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/",
  coyote: "https://alexstorer.github.io/coyote-creek-trail/",
};

// Extra context attached to GIS reaches (keyed by City GIS REACHID).
const REACH_NOTES = {
  "FIV01": { gap: true, text: "Julian St to the Lower Silver Creek Trail. VTA-owned former railroad, kept for BART; it passes to the City at no cost once BART no longer needs it. The exact alignment hasn't been chosen. (City GIS lists the land as private.)", src: SRC.psa2023 },
  "FIV02": { gap: true, text: "Julian St to Santa Clara St, beside the future 28th St/Little Portugal BART station. VTA keeps the land for station construction and gives the City a trail easement; the trail comes after BART, now targeted for 2039. VTA's station plan shows a \"Future Five Wounds Trail\" path.", src: SRC.vtaStation },
  "FIV03": { gap: true, text: "Santa Clara St to Shortridge Ave, on the old railbed. A raised crossing is planned at Shortridge.", src: SRC.mp2026 },
  "FIV04": { gap: true, text: "Shortridge Ave to San Fernando St. A raised crossing is planned at San Fernando.", src: SRC.mp2026 },
  "FIV05": { gap: true, text: "San Fernando St to Whitton Ave. A raised crossing is planned at Whitton.", src: SRC.mp2026 },
  "FIV06": { gap: true, text: "Whitton Ave to San Antonio St. Part of the William–Whitton stretch the City once planned to buy for $1.5M. Soil tests in 2015 found lead and arsenic.", src: SRC.psa2023 },
  "FIV07": { gap: true, text: "San Antonio St to Peach Ct / 24th St. A diagonal two-way bike crossing is planned at 24th St.", src: SRC.mp2026 },
  "FIV08": { gap: true, text: "Peach Ct / 24th St to 23rd St.", src: SRC.mp2026 },
  "FIV09": { gap: true, text: "23rd St to William St, the entrance to the rail-corridor section. A curb bulb-out, a two-way cycle track and a possible railway-themed plaza are planned.", src: SRC.mp2026 },
  "FIV10": { text: "William St to I-280: the only open piece, a widened sidewalk along S. 22nd St built around 2006 by KB Home with its Autumn Terrace housing. The master plan would add a bike boulevard and wayfinding signs.", src: SRC.nip2006 },
  "FIV11b": { gap: true, text: "Under I-280, on Caltrans land. The City planned to seek a recreation easement.", src: SRC.atp2018 },
  "FIV11a": { gap: true, text: "I-280 to Story Rd, across Coyote Creek on the 1922 Western Pacific trestle. City-owned since about December 2011, beside the unremediated Story Road Landfill. On hold since July 2026.", src: SRC.mp2026 },
};

// Mainline order north → south for the strip diagram.
const MAINLINE = ["FIV01","FIV02","FIV03","FIV04","FIV05","FIV06","FIV07","FIV08","FIV09","FIV10","FIV11b","FIV11a"];
const PARENT = {};
const SIDE_KIND = {};
const NOT_GAP = [];
const OWNERS = { PRIVATE: "Listed as private (VTA-owned, per City memos)", PRNS: "City of San José Parks", DOT: "I-280 right-of-way (Caltrans)" };

const INTRO_CAP = "Lower Silver Creek to Coyote Creek";
const INTRO_MARKS = [
  ["Lower Silver Creek Trail", [37.3553, -121.8713], "left"], ["28th St BART site", [37.3505, -121.8660], "right"],
  ["Five Wounds Church", [37.3489, -121.8641], "left"], ["William St", [37.3403, -121.8639], "right"],
  ["I-280", [37.3315, -121.8655], "left"], ["Coyote Creek trestle", [37.3269, -121.8661], "right"],
];

const LANDMARKS = [
  { key: true, name: "Lower Silver Creek Trail", ll: [37.3553, -121.8713] },
  { key: true, name: "28th St/Little Portugal BART site", ll: [37.3505, -121.8660] },
  { key: true, name: "Five Wounds Church", ll: [37.3489, -121.8641] },
  { name: "Alum Rock Ave / Little Portugal", ll: [37.3512, -121.8587] },
  { key: true, name: "William St", ll: [37.3403, -121.8639] },
  { name: "William Street Park", ll: [37.3372, -121.8680] },
  { key: true, name: "I-280", ll: [37.3315, -121.8655] },
  { key: true, name: "Coyote Creek trestle (1922)", ll: [37.3269, -121.8661] },
  { name: "Kelley Park / Happy Hollow", ll: [37.3251, -121.8585] },
];

// Timeline. cat: plan | build | fund | rail | camp
const TIMELINE = [
  { d: "1922", cat: "rail", t: "Western Pacific builds the San Jose Branch", x: "The railroad's line from Niles reaches San José, crossing Coyote Creek on a 250-ft timber trestle. It's now one of only two pile-bent trestles left in Santa Clara County.", s: [["Historic Resources Evaluation (2023)", SRC.hre], ["Bridge Type Selection Report", SRC.bts]] },
  { d: "1982", cat: "rail", t: "Union Pacific takes over", x: "The Western Pacific merges into Union Pacific, and the San Jose branch becomes UP property.", s: [["Historic Resources Evaluation", SRC.hre]] },
  { d: "1995", cat: "rail", t: "The last trains run (about 1995)", x: "Freight service on the branch ends around 1995. The City has no record of anyone maintaining the trestle after that.", s: [["City trestle summary (2026)", SRC.trestle2026], ["Historic Resources Evaluation", SRC.hre]] },
  { d: "2002-08", cat: "plan", t: "Neighbors put the rail-trail on the map", x: "The Council adopts the Five Wounds/Brookwood Terrace Neighborhood Improvement Plan, in which residents had named a rail-to-trail conversion a top-10 priority. The alignment goes into the City's trail database.", s: [["City memo (2018), p.2", SRC.atp2018], ["Friends of Five Wounds Trail", SRC.ffwtTimeline]] },
  { d: "2002-12", cat: "rail", t: "VTA buys the Union Pacific line for BART", x: "Union Pacific sells VTA about 15 miles of right-of-way for $80 million. Most of the trail corridor north of William St is VTA land today.", s: [["SF Chronicle", "https://www.sfchronicle.com/bayarea/article/san-jose-80-million-buys-land-from-union-2746374.php"]] },
  { d: "2003-08-19", cat: "plan", t: "A \"floating park\" on the corridor", x: "In the General Plan update, the Council designates a floating park on 1.2 miles of the rail line between I-280 and Santa Clara St. The Julian–Santa Clara piece becomes a transit mall instead.", s: [["Council minutes (archived)", SRC.minutes2003]] },
  { d: "2006-12", cat: "build", t: "22nd St sidewalk segment built", x: "As part of KB Home's 105-unit development at 22nd and William, a widened sidewalk goes in from William St to I-280. It's still the only open part of the trail.", s: [["Neighborhood plan amendment (2006)", SRC.nip2006], ["Concept plan (2010)", SRC.concept2010]] },
  { d: "2010", cat: "plan", t: "Friends of Five Wounds Trail forms", x: "Residents start the group with a cleanup of the old rail line, as a CommUniverCity project with SJSU. The name \"Five Wounds Trail\" comes into use the next year.", s: [["Friends of Five Wounds Trail", SRC.ffwtTimeline]] },
  { d: "2010-09", cat: "plan", t: "Community concept plan draws the trail", x: "After four years of workshops, residents, SJSU and the City publish a BART station-area plan with a rail-to-trail corridor from William St to Hwy 101.", s: [["Concept plan (PDF)", SRC.concept2010]] },
  { d: "2011-09-02", cat: "rail", t: "VTA agrees to keep room for a trail", x: "VTA's general manager writes that the agency supports the trail and the need to preserve the corridor from William St to Silver Creek, while BART stays its top priority.", s: [["VTA letter", SRC.vta2011]] },
  { d: "2011-12", cat: "rail", t: "City buys the trestle from Union Pacific", x: "San José buys the 9-acre corridor from Story Rd to I-280, trestle included, as is. City documents give dates from late 2011 to 2012; the price isn't published.", s: [["Historic Resources Evaluation", SRC.hre], ["City memo (2020), p.2", SRC.atp2020]] },
  { d: "2013-08-06", cat: "camp", t: "55 bags of trash", x: "34 volunteers clean the southern stretch of the corridor from Olinder Dog Park to Story Rd.", s: [["CommUniverCity", "https://cucsj.org/2013/08/06/removing-55-bags-of-trash-from-the-five-wounds-trai/"]] },
  { d: "2013-11-19", cat: "plan", t: "Council adopts four urban village plans", x: "The first plans adopted under Envision 2040, for Five Wounds, Little Portugal, Roosevelt Park and 24th & William, all include the trail.", s: [["CommUniverCity", "https://cucsj.org/2013/11/21/terry-christensen-thanks-supporters-five-wounds-urban-village-plans-approved/"]] },
  { d: "2014-10-30", cat: "rail", t: "The BART station is cut from the funding plan", x: "VTA proposes dropping the Alum Rock (now 28th St) station to strengthen its federal grant bid. Trail advocates call it \"gut wrenching\"; the station is later restored.", s: [["NBC Bay Area", "https://www.nbcbayarea.com/news/local/alum-rock-bart-station-in-limbo/1982294/"], ["Streetsblog SF", "https://sf.streetsblog.org/2014/11/18/vta-cuts-alum-rock-and-santa-clara-bart-stations-from-funding-plans"]] },
  { d: "2014-12-04", cat: "camp", t: "\"The Jungle\" is cleared", x: "San José shuts down the large encampment along Coyote Creek around the trestle, occupied since about 1998. It has been cleared repeatedly since.", s: [["Mercury News (cited in HRE)", "https://www.mercurynews.com/2014/12/04/the-jungle-san-jose-shuts-notorious-homeless-encampment/"], ["Historic Resources Evaluation", SRC.hre]] },
  { d: "2015", cat: "plan", t: "Lead and arsenic in the railbed", x: "City soil tests from William St to Whitton Ave find elevated lead and arsenic in the soil and ballast. Testing in 2022 finds the same along the whole VTA corridor.", s: [["City memo (2023), p.3", SRC.psa2023]] },
  { d: "2018-07-31", cat: "fund", t: "$33.6M state grant bid falls short", x: "The City applies for $33.6M from the state Active Transportation Program to build 1.4 miles from Story Rd to Whitton Ave. It ranks below the funding line.", s: [["City memo (2018)", SRC.atp2018], ["City memo (2020), p.4", SRC.atp2020]] },
  { d: "2018-08", cat: "plan", t: "Part of the Bay Area Ridge Trail", x: "The alignment is designated part of the Bay Area Ridge Trail, opening up regional conservation funding.", s: [["Coastal Conservancy staff report", SRC.scc2020]] },
  { d: "2019", cat: "build", t: "Deal to close the \"McKinley Gap\"", x: "After five years of advocacy, the City and the school district agree to sign over a sliver of land to close a 200-ft sidewalk gap on 22nd St.", s: [["Friends of Five Wounds Trail", SRC.ffwtTimeline]] },
  { d: "2020-06", cat: "fund", t: "Measure B awards $4.14M", x: "VTA awards $4.14M in 2016 Measure B money for environmental clearance and design. By October 2026, $890,000 had been allocated and $119,182 spent.", s: [["City memo (2023)", SRC.bkf2023], ["VTA Measure B tracker", SRC.measureB]] },
  { d: "2020-06-18", cat: "fund", t: "$83,000 for a feasibility study", x: "The State Coastal Conservancy grants $83,000, matched by about $166,000 from the City, to plan 1.4 miles from Story Rd to Whitton Ave.", s: [["Coastal Conservancy", SRC.scc2020], ["CEQA 2020060577", "https://ceqanet.lci.ca.gov/2020060577/2"]] },
  { d: "2020-09-01", cat: "fund", t: "A second, $34M grant bid", x: "The Council backs an application of up to $34.0M for 1.9 miles from Story Rd to Julian St, with an itemized estimate. No award was ever announced.", s: [["City memo (2020)", SRC.atp2020], ["Mayor's memo", SRC.mayor2020]] },
  { d: "2021-03", cat: "rail", t: "Fire burns the trestle", x: "A fire near the old Jungle site destroys three of the trestle's support bents.", s: [["City trestle summary", SRC.trestle2026], ["Mercury News", "https://www.mercurynews.com/2021/03/23/fire-near-former-site-of-the-jungle-homeless-encampment-damages-train-trestle/"]] },
  { d: "2022-06", cat: "rail", t: "VTA offers the corridor for free", x: "Because cleanup will be costly, VTA's board agrees to give the City the old railway parcels at no cost, plus a trail easement. The City had planned to pay $1.5M for part of it.", s: [["City memo (2023), p.2", SRC.psa2023]] },
  { d: "2022-08-30", cat: "plan", t: "Feasibility study finished", x: "RRM Design Group picks a preferred alignment from Story Rd to Whitton Ave and flags the trestle crossing for more study.", s: [["Feasibility study", SRC.feas2022]] },
  { d: "2023-06", cat: "rail", t: "Trestle \"in danger of imminent failure\"", x: "A draft structural report prompts the City to close the Coyote Creek Trail beneath the trestle, from Olinder Dog Park to Story Rd. Staff warn it could take one to three years; the path under the trestle has since reopened.", s: [["Keep Coyote Creek Beautiful", SRC.kccb]] },
  { d: "2023-08-02", cat: "plan", t: "Three ways to cross the creek, priced", x: "Four studies find the trestle eligible for the national and state historic registers. Construction estimates: retrofit it for $7.42M, replace it with a steel truss for $7.69M, or stabilize it and build a new bridge alongside for $6.91M.", s: [["Bridge Type Selection Report", SRC.bts], ["Historic Resources Evaluation", SRC.hre], ["Structural Evaluation", SRC.structural]] },
  { d: "2023-09-12", cat: "rail", t: "Council accepts the VTA corridor for $0", x: "The Council unanimously approves taking 11 parcels from VTA at no cost, plus a trail easement beside the BART station. Soil cleanup is estimated at more than $5M; the target opening is 2031.", s: [["City memo", SRC.psa2023], ["San José Spotlight", SRC.spot2023]] },
  { d: "2023-10-31", cat: "fund", t: "Designers hired (up to $2.5M)", x: "The Council approves a master agreement with BKF Engineers through 2028 for planning, environmental review and design.", s: [["City memo", SRC.bkf2023]] },
  { d: "2024-02-08", cat: "fund", t: "Open Space Authority pledges $500,000", x: "The City, the County and the Open Space Authority have each pledged $500,000 toward the corridor, subject to their boards.", s: [["Open Space Authority", SRC.osa2024]] },
  { d: "2024-03-11", cat: "plan", t: "A bigger urban village plan", x: "The City begins environmental review for one combined Five Wounds Urban Village Plan with room for 8,022 homes. The draft EIR, released in August 2026, includes the trail.", s: [["CEQA 2024030360", SRC.uvNOP], ["SF YIMBY", "https://sfyimby.com/2026/09/draft-eir-published-for-five-wounds-urban-village-plan-san-jose.html"]] },
  { d: "2024-06-14", cat: "rail", t: "BART Phase II breaks ground", x: "VTA starts the $12.7 billion, 6-mile extension downtown. Its first new station is 28th St/Little Portugal, beside the trail's north end.", s: [["KQED", "https://www.kqed.org/news/11990508/vta-breaks-ground-on-12-7-billion-bart-extension-through-south-bay"]] },
  { d: "2025-07", cat: "plan", t: "Master plan work begins", x: "BKF starts the master plan and environmental review for 1.69 miles from Santa Clara St to Story Rd, paid for with $890,000 of the Measure B award.", s: [["T&E annual report (2026)", SRC.te2026], ["City project page (archived)", SRC.cityPage]] },
  { d: "2026-01-17", cat: "plan", t: "A committee to save the trestle", x: "Save Our Trails forms a subcommittee to stop demolition, backing the option that keeps the trestle and builds a new bridge beside it.", s: [["Friends of Five Wounds Trail", SRC.ffwt]] },
  { d: "2026-03-04", cat: "plan", t: "Staff favor tearing the trestle down", x: "A City fact sheet says staff chose demolition and a steel truss bridge, citing upkeep and fire risk: 133 fire calls near the trestle from 2018 to 2023.", s: [["City trestle summary", SRC.trestle2026], ["City project page (archived)", SRC.cityPage]] },
  { d: "2026-04-14", cat: "plan", t: "Residents rally for the trestle", x: "Neighborhood groups and Councilmember Bien Doan push to keep the 1922 trestle. The City says no decision has been made.", s: [["San José Spotlight", SRC.spotRally]] },
  { d: "2026-06", cat: "rail", t: "Demolition starts on the BART station block", x: "Buildings behind Five Wounds Church come down for the 28th St/Little Portugal station. VTA's site plan shows a path labeled \"Future Five Wounds Trail.\"", s: [["FTA monitoring report", SRC.pmoc2026], ["VTA station fact sheet", SRC.vtaStation]] },
  { d: "2026-07-09", cat: "plan", t: "Trail split in four; the trestle waits", x: "The City divides the trail into four segments and puts the Story Rd–22nd St segment, with the trestle, on hold indefinitely. The master plan now covers only 22nd St to Santa Clara St. The City says the change preserves the trestle for now and cuts costs by more than half.", s: [["Community meeting presentation", SRC.mp2026], ["San José Spotlight", SRC.spotPause]] },
  { d: "2027-03", cat: "plan", future: true, t: "Master plan due", x: "The City expected the master plan and environmental review in spring 2027; the July 2026 schedule shows summer 2027.", s: [["T&E annual report", SRC.te2026], ["Presentation, p.3", SRC.mp2026]] },
  { d: "2027-12", cat: "plan", future: true, t: "Planning for I-280 to Santa Clara St done", x: "Parks officials project planning for the middle segment will be complete by December 2027. No construction date has been set.", s: [["San José Spotlight", SRC.spotPause]] },
  { d: "2031", cat: "plan", future: true, t: "The 2023 target for opening (superseded)", x: "In 2023 the trail was expected to open by 2031, alongside the BART station. Both dates have slipped.", s: [["San José Spotlight (2023)", SRC.spot2023]] },
  { d: "2039-02-28", cat: "rail", future: true, t: "BART station opens (current target)", x: "The federal baseline date for BART Phase II service, including 28th St/Little Portugal. The trail north of Santa Clara St waits for it.", s: [["FTA monitoring report", SRC.pmoc2026]] },
];

// Money spent so far: studies and planning. Nothing has been built with public money.
const PROJECTS = [
  { name: "Feasibility study (RRM)", id: "2020–22", year: 2022, mi: null, kind: "study", cost: 0.249, contract: null, funding: "State Coastal Conservancy $83K, City $166K", src: SRC.scc2020 },
  { name: "Trestle studies (GHD, TreanorHL)", id: "2022–23", year: 2023, mi: null, kind: "study", cost: 0.5, contract: null, funding: "City; includes staff time", src: SRC.kccb, note: "As reported by Keep Coyote Creek Beautiful from a City meeting" },
  { name: "Master plan & CEQA (BKF)", id: "2025–27", year: 2027, mi: null, kind: "in progress", cost: 0.89, contract: 0.89, funding: "VTA 2016 Measure B", src: SRC.te2026, note: "Contract amount; work under way" },
];
const PM_EST = [
  { name: "2018 grant bid: Story Rd → Whitton Ave", sub: "City estimate", mi: 1.4, cost: 33.61, note: "$33.61M for 1.4 mi", src: SRC.atp2018 },
  { name: "2020 grant bid: Story Rd → Julian St", sub: "City estimate, itemized", mi: 1.9, cost: 34.03, note: "$34.03M for 1.9 mi, incl. trestle bridge and soil cleanup", src: SRC.atp2020 },
  { name: "Coyote Creek Trail, 2021–25", sub: "benchmark (built)", mi: 3.48, cost: 28.11, note: "Four San José creek-trail projects, $28.1M for 3.48 mi", src: SRC.coyote },
];
const PRESETS = [
  { label: "Coyote Creek average", pm: 28.11 / 3.48 },
  { label: "2020 City estimate", pm: 34.03 / 1.9 },
  { label: "2018 City estimate", pm: 33.61 / 1.4 },
];
const DEFAULT_PM = 34.03 / 1.9;
const EST_EXTRAS = [];

// Remaining gaps by the City's July 2026 segments, north → south.
const GAPS = [
  { name: "Segment 4: Lower Silver Creek → Julian St", ids: ["FIV01"], mi: 0.26, status: "Identify", hard: "VTA land until BART is done; alignment not chosen" },
  { name: "Segment 3: Julian St → Santa Clara St", ids: ["FIV02"], mi: 0.35, status: "Identify", hard: "BART station construction; trail after 2039" },
  { name: "Segment 2B: Santa Clara St → William St", ids: ["FIV03","FIV04","FIV05","FIV06","FIV07","FIV08","FIV09"], mi: 0.60, status: "Study", hard: "Master plan under way; soil cleanup >$5M; six street crossings" },
  { name: "Segment 1: I-280 → Story Rd (trestle)", ids: ["FIV11b","FIV11a"], mi: 0.46, status: "Study", hard: "On hold. Creek crossing alone $6.9–7.7M (2023, construction only)" },
];

const STATS = ({ gapMi }) => [
  ["0.67 mi", "open: a widened sidewalk along 22nd St, built by a housing developer around 2006"],
  [gapMi.toFixed(1) + " mi", "still unbuilt, from Lower Silver Creek to Coyote Creek"],
  ["$6.9–7.7M", "to fix, replace or bypass the 1922 trestle over Coyote Creek (2023 estimates, construction only)"],
  ["2039", "current target for the BART station the northern half is waiting on"],
];

// Planned vs. actual. Columns follow DELIVERY_HEAD.
const DELIVERY_HEAD = ["Promise", "Planned", "What happened", "Money at the time", "Result"];
const DELIVERY = [
  ["2018 grant plan: build Story Rd → Whitton Ave", "Construction 2023–25", "Not funded; nothing built", "bad", "$33.6M requested", "Below the funding line", "bad", SRC.atp2018],
  ["2020 grant plan: build Story Rd → Julian St", "Built by 2026", "Master plan still under way in 2026", "bad", "$34.0M requested", "No award found", "unk", SRC.atp2020],
  ["Take over William St → Whitton Ave from VTA", "Council action by Jan 2019", "No-cost deal approved Sept 2023; transfer still pending", "bad", "$1.5M purchase planned", "$0, but the City inherits >$5M of cleanup", "warn", SRC.psa2023],
  ["Spend the Measure B award", "Available \"in about two years\" (2020)", "$890K allocated, $119K spent by Oct 2026", "warn", "$4.14M awarded", "Mostly unspent", "warn", SRC.measureB],
  ["Open the trail", "2031 (said in 2023)", "Trestle segment on hold; north end waits for BART (2039)", "bad", "–", "–", "unk", SRC.spotPause],
];

// The three trestle options (GHD, 2023). [option, description, miles, $M construction, notes]
const OFFICIAL_EST = {
  head: ["Option", "", "Construction estimate (2023 $)", "Notes"],
  rows: [
    ["1", "Retrofit the trestle with new steel supports", null, 7.419, "47 months; keeps the historic structure"],
    ["2", "Demolish it; build a steel truss bridge", null, 7.69, "57 months; needs an EIR. City staff's pick in March 2026"],
    ["3", "Stabilize it; build a new bridge alongside", null, 6.91, "47 months; backed by Save Our Trails. Highest staff cost"],
  ],
};

const DOCS = [
  { g: "Plans & studies", items: [
    ["Neighborhood Improvement Plan Amendment, 2nd draft (2006)", SRC.nip2006],
    ["BART Station Area Community Concept Plan (2010)", SRC.concept2010],
    ["Feasibility Study: Story Rd to Whitton Ave (2022)", SRC.feas2022],
    ["Master plan community meeting presentation (July 2026)", SRC.mp2026],
    ["Community meeting flyer (July 2026)", SRC.flyer2026],
    ["City Five Wounds Trail map", SRC.cityMap],
  ]},
  { g: "The Coyote Creek trestle", items: [
    ["Historic Resources Evaluation (TreanorHL, 2023)", SRC.hre],
    ["Secretary of the Interior's Standards report (2023)", SRC.soi],
    ["Structural Evaluation (GHD, 2023)", SRC.structural],
    ["Bridge Type Selection Report (GHD, 2023)", SRC.bts],
    ["City summary of information on the trestle (2026)", SRC.trestle2026],
    ["Story Road Landfill drawings (posted by Save Our Trails)", "https://saveourtrails-scc.org/docs/CoyoteCreekTrestle/StoryRoadLandfill/JustFirstMap-StoryRoadLandfillDrawings-ValleyWater-20260409.pdf"],
  ]},
  { g: "Council & agency records", items: [
    ["Council minutes: floating park designation (2003)", SRC.minutes2003],
    ["VTA letter supporting the trail (2011)", SRC.vta2011],
    ["ATP grant application memo (2018)", SRC.atp2018],
    ["Urban village plans amendment memo (2018)", SRC.uv2018],
    ["Coastal Conservancy planning grant staff report (2020)", SRC.scc2020],
    ["2020 ATP grant memo, with cost estimate", SRC.atp2020],
    ["Mayor and councilmembers' memo on the ATP grant (2020)", SRC.mayor2020],
    ["VTA purchase and sale agreement memo (2023)", SRC.psa2023],
    ["VTA purchase and sale agreement resolution (2023)", SRC.psaReso],
    ["Public letters on the VTA agreement (2023)", SRC.psaLetters],
    ["BKF Engineers master agreement memo (2023)", SRC.bkf2023],
    ["Trail Network annual report (2026)", SRC.te2026],
  ]},
  { g: "Environmental review & BART", items: [
    ["CEQA: Five Wounds Trail planning, exemption (2020)", "https://ceqanet.lci.ca.gov/2020060577/2"],
    ["CEQA: Five Wounds Urban Village Plan Update, NOP (2024)", SRC.uvNOP],
    ["VTA fact sheet: 28th St/Little Portugal station (2026)", SRC.vtaStation],
    ["FTA monitoring report, BART Phase II (Aug 2026)", SRC.pmoc2026],
  ]},
];

const MAPS = [
  { t: "Friends of Five Wounds Trail", d: "The volunteer group behind the trail since 2010: news, history and timeline.", u: SRC.ffwt, tag: "Community" },
  { t: "City project page (archived)", d: "Meeting materials and reports. The live page blocks some browsers; this is the Internet Archive copy.", u: SRC.cityPage, tag: "Official" },
  { t: "City GIS: Trail Reach dataset", d: "The source of this site's map: every reach with status and ownership.", u: SRC.gis, tag: "Download" },
  { t: "City GIS: Trail REST service", d: "ArcGIS REST endpoint (layer 538) for live queries.", u: "https://geo.sanjoseca.gov/server/rest/services/OPN/OPN_OpenDataService/MapServer/538", tag: "API" },
  { t: "San José Parks & Trails map", d: "The City's ArcGIS web map of every park and trail.", u: "https://experience.arcgis.com/experience/773085d3c43a4296bda57df31c89aab9", tag: "Official" },
  { t: "VTA Measure B project tracker", d: "Allocations and spending on the trail's $4.14M award.", u: SRC.measureB, tag: "Funding" },
  { t: "BART Silicon Valley Phase II", d: "VTA's project site, including the 28th St/Little Portugal station.", u: "https://vtabart.org/the-project/", tag: "BART" },
  { t: "Five Wounds Urban Village Plan Update", d: "The City's planning page for the combined plan around the station.", u: "https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/planning-division/citywide-planning/urban-villages/five-wounds-urban-village-plan-update", tag: "Planning" },
];

const NEWS = [
  ["2013-08-06", "CommUniverCity San José (blog)", "Volunteers Removed 55 Bags of Trash from the Five Wounds Trail", "https://cucsj.org/2013/08/06/removing-55-bags-of-trash-from-the-five-wounds-trai/", "34 volunteers collected 55 bags of trash along the southern stretch of the future trail from Olinder Dog Park to Story Road, with Save Our Trails and Downtown Streets Team."],
  ["2013-10-01", "CommUniverCity San José (blog)", "Approval of Five Wounds Village Plans & Trail and Next Steps", "https://cucsj.org/2013/10/01/san-jose-planning-commission-approves-five-wound-village-plans-friends-of-five-wounds-trail/", "The Planning Commission unanimously approved the Five Wounds village plans, trail included, on Sept. 25, 2013, as part of Envision 2040, ahead of an Oct. 22 Council vote; a September count found 82 trail users at 24th Street."],
  ["2014-10-30", "NBC Bay Area", "Planned Alum Rock BART Station in Limbo", "https://www.nbcbayarea.com/news/local/alum-rock-bart-station-in-limbo/1982294/", "VTA staff proposed dropping the Alum Rock (now 28th St/Little Portugal) station to compete for federal funds, upending a decade of neighborhood planning for 30 acres behind Five Wounds Church; Friends of Five Wounds Trail's Terry Christensen called it 'gut wrenching.'"],
  ["2014-11-18", "Streetsblog San Francisco", "VTA Cuts Alum Rock and Santa Clara BART Stations From Funding Plans", "https://sf.streetsblog.org/2014/11/18/vta-cuts-alum-rock-and-santa-clara-bart-stations-from-funding-plans", "VTA left the $1.3 billion Alum Rock and Santa Clara stations out of its federal New Starts application; the article notes the Alum Rock station anchored the Five Wounds Urban Village (875 homes) and the planned Five Wounds Trail."],
  ["2016-04-25", "CommUniverCity San José (blog)", "Volunteers for Five Wounds Trail Never Fail!", "https://cucsj.org/2016/04/25/hail-to-the-friends-of-five-wounds-trail/", "85 volunteers (residents, Cristo Rey students and 54 SJSU students) pulled 91 bags of trash plus mattresses and a printer from the abandoned rail corridor on Earth Day weekend."],
  ["2023-02-24", "San José Spotlight", "Coalition calls on San Jose to build park along Coyote Creek", "https://sanjosespotlight.com/coalition-calls-on-san-jose-to-build-park-along-coyote-creek/", "The Coyote Meadows Coalition wants 50 acres of city land between Story Road and I-280 turned into a park; the article notes an old railroad trestle crosses the land and the city plans to run the Five Wounds Trail through it."],
  ["2023-06-01", "San José Spotlight", "San Jose OKs six-story apartment complex in Five Wounds", "https://sanjosespotlight.com/san-jose-oks-six-story-apartment-complex-in-little-portugal/", "Council approved a six-story, 198-apartment building at 70-80 N. 27th St. near the future 28th St BART station 'near a future planned expansion of a walking trail.'"],
  ["2023-07-11", "Keep Coyote Creek Beautiful", "Coyote Creek Trail and Trestle", "https://www.keepcoyotecreekbeautiful.org/post/cc-trestle", "In mid-June 2023 the city closed the Coyote Creek Trail from Olinder Dog Park to Story Road after a draft structural report said the 1922 Senter Rd trestle was in 'danger of imminent failure'; by the Sept. 19, 2023 update the trail had reopened under the trestle to Remillard Court."],
  ["2023-09-11", "The San José Blog", "New Five Wounds Trail would link San Jose's cycling and walking network to the 28th Street/Little Portugal BART station by 2031", "https://www.thesanjoseblog.com/2023/09/new-five-wounds-trail-would-link-san.html", "Blog recap of a Mercury News story: the 2.17-mile trail would start at Story and Senter roads and reach the future BART station by 2031, after more than 20 years in the works."],
  ["2023-09-14", "San José Spotlight", "East San Jose walking trail will be expanded", "https://sanjosespotlight.com/east-san-jose-five-wounds-walking-biking-trail-will-be-expanded/", "Council unanimously agreed to take the last right-of-way parcel from VTA at no cost, making a 2.17-mile trail targeted for 2031; lead and arsenic soil cleanup could cost about $5 million, with the Open Space Authority and County Parks pledging $500,000 each."],
  ["2026-04-14", "San José Spotlight", "San Jose residents rally to save railroad trestle", "https://sanjosespotlight.com/san-jose-residents-rally-to-save-railroad-trestle/", "Residents, neighborhood groups and Councilmember Bien Doan rallied to keep the 250-foot, 1922 Western Pacific trestle (city-owned since a 2012 purchase of a 9-acre corridor, badly damaged by a 2021 fire) after parks officials floated replacing it with a steel bridge."],
  ["2026-04-22", "The Synergy Report (commentary)", "San Jose's Last Railroad Trestle Sparks Preservation Fight Amid Trail Expansion Plans", "https://thesynergyreport.com/2026/04/22/san-joses-last-railroad-trestle-sparks-preservation-fight-amid-trail-expansion-plans/", "Consultant Bob Staedler's commentary on the Spotlight story: advocates and Councilmember Doan want the trestle reinforced and a separate trail bridge built nearby, while the city says every option remains open."],
  ["2026-07-20", "San José Spotlight", "Historic trestle halts San Jose trail plans", "https://sanjosespotlight.com/historic-trestle-halts-san-jose-trail-plans/", "Parks officials split the 2.2-mile trail into four segments, prioritizing I-280 to Santa Clara St (planning done by December 2027) and pausing the southern Coyote Creek/trestle segment, which drew complaints that District 7 was again left out."],
  ["2026-07-21", "KAZU / KQED", "North Coast tribes receive land, trestle presents trail hurdle", "https://www.kazu.org/kazu-news/2026-07-21/north-coast-tribes-receive-land-trestle-presents-trail-hurdle", "KQED partner news roundup: the city put the trestle segment ('segment one') on hold, and Save Our Trails president Keith Ball warned the city could neglect the trestle in the meantime."],
  ["2026-09-03", "San Francisco YIMBY", "Draft EIR Published For Five Wounds Urban Village Plan, San Jose", "https://sfyimby.com/2026/09/draft-eir-published-for-five-wounds-urban-village-plan-san-jose.html", "The draft EIR for merging four urban villages (427.4 acres) around the 28th St BART station plans about 8,022 homes and heights up to 270 feet, and includes a Five Wounds Trail linking the Coyote Creek and Lower Silver Creek trails; comments were due Oct. 3, 2026."],
  ["2014-05-07", "San José Inside (opinion)", "Volunteers Pick up the Slack at Our Parks, Trails", "https://www.sanjoseinside.com/opinion/volunteers-pick-up-the-slack-at-our-parks-trails/", "Credits Friends of Five Wounds Trail and Save Our Trails with regular cleanups, trail monitoring and 'visionary leadership for future expansion.'"],
  ["2019-12-10", "San José Spotlight", "San Jose lawmakers to discuss transforming BART stations into transit communities", "https://sanjosespotlight.com/san-jose-lawmakers-to-discuss-transforming-bart-stations-into-transit-communities/", "VTA's playbook for the 28th Street/Little Portugal station area envisioned 7,800 new homes, nearly 2,000 of them affordable."],
  ["2023-11-30", "San José Spotlight", "San Jose approves hundreds of homes east of downtown", "https://sanjosespotlight.com/san-jose-approves-hundreds-of-homes-east-of-downtown/", "The city approved 913 apartments, 407 below market rate, in six buildings at 1325 E. Julian St. and Tripp Ave. next to the planned 28th Street/Little Portugal station."],
  ["2024-06-14", "KQED", "VTA Breaks Ground on $12.7 Billion BART Extension Through South Bay", "https://www.kqed.org/news/11990508/vta-breaks-ground-on-12-7-billion-bart-extension-through-south-bay", "The groundbreaking for the 6-mile, $12.7 billion extension, whose four stations include 28th Street/Little Portugal, came after costs rose from $4.7 billion and the planned 2026 opening slipped."],
  ["2025-12-09", "KQED", "'Where the Journey Begins': South Bay BART Extension Work Pushes Ahead", "https://www.kqed.org/news/12066245/where-the-journey-begins-south-bay-bart-extension-work-pushes-ahead", "28th Street/Little Portugal is the first of four new stations; completion is now projected for 2037, and tunneling is not expected to start until 2028-29."],
  ["2026-11-12", "KQED", "VTA Warns of Major Cost, Time Increases on South Bay BART Extension", "https://www.kqed.org/news/12109333/vta-warns-of-major-cost-time-increases-on-south-bay-bart-extension", "VTA says the cost will be 'significantly more' than $12.7 billion and tunneling has slipped to early 2028; Mayor Mahan said the project can't be delivered 'in one fell swoop,' raising the prospect of phased stations, which could affect 28th Street/Little Portugal."],
];

// Photos from Wikimedia Commons. ll = camera location from the file's geotag ("approx" = placed by subject).
// Commons has no photos of the trestle or the corridor itself; the two Willow Glen photos are stand-ins and are not pinned.
const PHOTOS = [
  {"f": "Five Wounds Portuguese National Church, Little Portugal, Santa Clara Street, San Jose 06.jpg", "c": "Five Wounds Portuguese National Church facade on E. Santa Clara St, Little Portugal", "a": "GualdimG", "l": "CC BY-SA 4.0", "ll": [37.3487, -121.8637], "approx": true, "y": 2025},
  {"f": "Five Wounds National Portuguese Church.jpg", "c": "Five Wounds Church towers over E. Santa Clara St, a block from the old rail line", "a": "Tri Nguyen", "l": "CC BY 2.0", "ll": [37.3484, -121.8628], "approx": true, "y": 2012},
  {"f": "USA-San Jose-Church of the Five Wounds-1.jpg", "c": "Five Wounds Church and its palms seen from Santa Clara St at dusk", "a": "EugeneZelenko", "l": "CC BY-SA 4.0", "ll": [37.348886, -121.864101], "y": 2009},
  {"f": "Interior of Five Wounds Portuguese National Church 01.jpg", "c": "Nave and altar inside Five Wounds Portuguese National Church", "a": "GualdimG", "l": "CC BY-SA 4.0", "ll": [37.3492, -121.8637], "approx": true, "y": 2025},
  {"f": "Little Portugal, San Jose CA 01.jpg", "c": "\"Welcome to Little Portugal\" mural featuring Five Wounds Church", "a": "GualdimG", "l": "CC BY-SA 4.0", "ll": null, "y": 2025},
  {"f": "Alum Rock Ave.jpg", "c": "Portuguese bakery and Adega restaurant on Alum Rock Ave in Little Portugal", "a": "Yngvadottir", "l": "CC BY-SA 4.0", "ll": [37.3512, -121.8587], "approx": true, "y": 2017},
  {"f": "Portuguese Community Center - Little Portugal, San Jose.jpg", "c": "Portuguese Community Center on E. Santa Clara St, Little Portugal", "a": "Cristiano Tomás", "l": "CC BY-SA 4.0", "ll": [37.346669, -121.868469], "y": 2021},
  {"f": "East San Jose Carnegie Library.jpg", "c": "1908 East San Jose Carnegie Library on E. Santa Clara St", "a": "LPS.1", "l": "CC BY-SA 3.0", "ll": [37.346944, -121.8675], "y": 2012},
  {"f": "Tail tracks south of Berryessa station, June 2020.JPG", "c": "BART tail tracks south of Berryessa, where the line will extend to 28th St/Little Portugal", "a": "Pi.1415926535", "l": "CC BY-SA 3.0", "ll": [37.366146, -121.87357], "y": 2020},
  {"f": "Miguelita or Lower Silver Creek confluence with Coyote Creek.jpg", "c": "Lower Silver Creek meets Coyote Creek near the trail's northern end", "a": "Dicklyon", "l": "CC BY-SA 4.0", "ll": [37.356322, -121.873914], "y": 2020},
  {"f": "Flyball race at \"Bark in the Park\".jpg", "c": "Dog event at William Street Park, near Coyote Creek west of the corridor", "a": "Don DeBold", "l": "CC BY 2.0", "ll": [37.335333, -121.868], "y": 2010},
  {"f": "Senter Street - panoramio.jpg", "c": "Tree-lined Senter Rd beside Kelley Park, just south of the rail trestle", "a": "Thomson M", "l": "CC BY 3.0", "ll": [37.323652, -121.863547], "y": 2015},
  {"f": "Early morning in the park (19929723120).jpg", "c": "Morning sun through oaks in Kelley Park along Coyote Creek", "a": "bluesbby", "l": "CC BY 2.0", "ll": [37.3245, -121.8625], "approx": true, "y": 2015},
  {"f": "Ex-San Jose Railroad car 124 on Kelley Park streetcar line next to Senter Rd (2012).jpg", "c": "Historic streetcar 124 runs beside Senter Rd at History Park, Kelley Park", "a": "Victor Solanoy", "l": "CC BY 2.0", "ll": [37.319486, -121.859556], "y": 2012},
  {"f": "Dia de Portugal Festival in San Jose (June 11, 2022) - 66.jpg", "c": "Dia de Portugal procession at History Park in Kelley Park", "a": "Suiren2022", "l": "CC BY-SA 4.0", "ll": [37.320658, -121.858581], "y": 2022},
  {"f": "Some of Roger Puta's Western Pacific Photos (27217538290).jpg", "c": "Western Pacific's 'San Jose Turn' freight near Niles, 1981; it served this branch", "a": "Roger Puta (via railfan 44)", "l": "Public domain", "ll": null, "y": 1981},
  {"f": "ThreeCreeksTrail TrestleBridge.JPG", "c": "Western Pacific's 1922 Willow Glen trestle, a sister of the Senter Rd trestle", "a": "Peterpj77", "l": "CC BY-SA 3.0", "ll": null, "y": 2014},
  {"f": "Three Creeks Trail at Coe Avenue in Willow Glen, San Jose, California.JPG", "c": "Three Creeks Trail, a rail-trail on another stretch of the WP San Jose branch", "a": "Peterpj77", "l": "CC BY-SA 3.0", "ll": null, "y": 2013},
];

// Scorecards keyed by TIMELINE date. s: good | warn | bad | unk | pend
const OUTCOMES = {
  "2003-08-19": [["Completed", "bad", "No park or trail has been built on the corridor north of William St, 23 years later."]],
  "2010-09": [["Completed", "bad", "Not built. Only the 22nd St sidewalk south of William St, which predates the plan, is open."]],
  "2018-07-31": [["Funded", "bad", "No. It ranked below the funding line; construction planned for 2023–25 never started."]],
  "2020-06": [["Progress", "warn", "Six years later, $890K of the $4.14M has been allocated and about $119K spent."]],
  "2020-09-01": [["Funded", "unk", "No award has been found. Construction was to finish by 2026; the master plan is still under way."]],
  "2023-06": [["Estimate", "warn", "Staff warned of a one-to-three-year closure. The path under the trestle has reopened, but the trestle itself hasn't been repaired."]],
  "2023-09-12": [
    ["Completed", "pend", "The transfer was still pending in 2026."],
    ["Schedule", "bad", "The City first expected Council action on William–Whitton by January 2019."],
  ],
  "2025-07": [["Progress", "pend", "Due spring 2027, now summer 2027, and narrowed to 22nd St–Santa Clara St."]],
  "2026-07-09": [["Progress", "pend", "Segment 1 has no restart date. The trestle stays in place, unrepaired."]],
  "2031": [["Target", "bad", "Missed in advance: the trestle segment is on hold and the BART station has slipped to 2039."]],
};

// Pull quotes, verbatim from the cited articles.
const QUOTES = [
  { q: "San Jose was an agricultural wonderland. They called it the Valley of Heart's Delight, and most of it has been paved over and turned into high tech now. But this is a connection to our past.", who: "Larry Ames", role: "preservation advocate, on the trestle", src: "San José Spotlight, 2026", u: SRC.spotRally },
  { q: "In our city's history we have underinvested in East San Jose. This is an opportunity in a very significant way to add beautiful trails with foliage. It's a happy thing.", who: "Nanci Klein", role: "San José director of economic development", src: "San José Spotlight, 2023", u: SRC.spot2023 },
  { q: "Once again, District 7 has to take it on the chin. Once again, District 7 doesn't get anything.", who: "Alie Victorine", role: "president, District 7 Leadership Group", src: "San José Spotlight, 2026", u: SRC.spotPause },
  { q: "Coyote Creek Trestle is a piece of San Jose's history that cannot be replaced. We have a responsibility to preserve it for future generations.", who: "Bien Doan", role: "District 7 councilmember", src: "San José Spotlight, 2026", u: SRC.spotRally },
];
