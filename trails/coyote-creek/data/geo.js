// Location links: which trail reaches (City GIS REACHIDs) each event, document and plan sheet refers to.
// Ranges are written as R(from, to) along the north→south MAINLINE order defined in data.js.
const R = (a, b) => MAINLINE.slice(MAINLINE.indexOf(a), MAINLINE.indexOf(b) + 1);
const CITY = R("COY03", "COY15");
const NORTH_GAP = R("COY05.1", "COY07.1");
const FLOOD_REACH = R("COY05.1", "COY12");        // Valley Water project: Montague → Tully
const COUNTY = R("COY16", "PARKWAY");
const TRESTLE = [37.3269, -121.8661];

// Year each reach opened. approx: true = year not documented; inferred from the earliest record.
const BUILT = {
  COY00: { y: 2009, approx: true }, COY03: { y: 2009, approx: true }, COY04: { y: 2009, approx: true },
  "COY05.4": { y: 2015, approx: true }, "COY05.6": { y: 2015, approx: true },
  "COY05.8": { y: 2025.24 }, COY06: { y: 2025.24 },
  COY08: { y: 2009, approx: true }, COY08A: { y: 2009, approx: true },
  COY09: { y: 2021.83 }, COY10: { y: 2021.83 }, COY11: { y: 2021.83 }, COY11A: { y: 2021.83 },
  COY12: { y: 2025.33 },
  COY13: { y: 2009.58 }, COY13B: { y: 2009.58, approx: true }, COY14: { y: 2009.58, approx: true }, COY15: { y: 2009.58, approx: true },
  COY15A: { y: 2021.49 }, "COY15-1": { y: 2021.49 },
};
["COY16","COY17","COY18","COY19A","COY19B","COY20A","COY21A","COY21B","COY22A","PARKWAY","Connector"].forEach(id => BUILT[id] = { y: 1990, approx: true });

// Plan sheets and location maps extracted from primary documents.
const MP_DOC = SJ_DOC + "20455/636687587009930000";   // 2011 Master Plan, Montague Expwy to Watson Park
const MP = "2011 Master Plan (Callander Associates)";
const P72_DOC = SJ_DOC + "20473/636687592679070000";  // 1972 Coyote Creek Park masterplan (Ribera & Sue)
const P72 = "Coyote Creek Park Masterplan (Ribera & Sue), July 1972";
const FS04_DOC = SJ_DOC + "20445/636687586985570000"; // 2004 feasibility study, Story Rd to Watson Park
const SLC_DOC = SJ_DOC + "20453/636687587003200000";  // 2008 master plan, Story Rd to Lower Silver Creek
const SLC = "Story Rd to Lower Silver Creek Master Plan (Callander Associates, 2008)";
const SCHEMATICS = [
  // Northern gap: how the 2011 master plan proposes to thread the trail through
  { k: "mp-network", t: "Trail network map: the Montague–Watson Park gap in context", d: MP + ", Figure 1", r: R("COY05.1", "COY06.1"), src: MP_DOC },
  { k: "mp-costs", t: "Estimate of costs: $25.7M for the northern gap, by reach", d: MP + ". 2010 dollars, construction only", r: R("COY05.1", "COY06.1"), src: MP_DOC, short: "Cost estimate" },
  { k: "mp-montague", t: "Planned bridge near Montague Expressway", d: MP + ", Figure 14", r: ["COY05.1"], src: MP_DOC, short: "Planned bridge" },
  { k: "mp-reach12", t: "Trail alignment plan, Reaches 1–2 (Charcot Ave)", d: MP + ", Figure 36", r: ["COY05.1", "COY05.2"], src: MP_DOC, short: "Alignment plan" },
  { k: "mp-charcot", t: "Planned undercrossing at Charcot Avenue", d: MP + ", Figure 15", r: ["COY05.1", "COY05.2"], src: MP_DOC, short: "Planned undercrossing" },
  { k: "mp-880", t: "Perspective sketch: the trail underneath I-880", d: MP + ", Figure 17", r: ["COY05.2"], src: MP_DOC, short: "Rendering" },
  { k: "mp-brokaw", t: "Planned undercrossing at Brokaw Road", d: MP + ", Figure 18", r: ["COY05.2", "COY05.3"], src: MP_DOC, short: "Planned undercrossing" },
  { k: "ps-brokaw", t: "95% plans: Brokaw Rd to Union Pacific Railroad, project key", d: "City of San José construction plans, Sept 2017 (Project 7356)", r: ["COY05.3"], src: SJ_DOC + "20435/636687586968530000", short: "95% plans" },
  { k: "orchard-site", t: "Orchard Park site: trail alignment inside the 100-ft riparian setback", d: "Orchard Park & Coyote Creek Trail master plan report (Environmental Foresight), Oct 2013", r: ["COY05.4"], src: SJ_DOC + "20451/636687586999770000", short: "Site plan" },
  { k: "mp-oakland", t: "Planned bridge and undercrossing at Oakland Road", d: MP + ", Figure 22", r: ["COY05.4", "COY05.5"], src: MP_DOC, short: "Planned bridge" },
  { k: "mp-nottinghill", t: "Planned bridge near Notting Hill Drive", d: MP + ", Figure 23", r: ["COY05.5"], src: MP_DOC, short: "Planned bridge" },
  { k: "fact-flea", t: "Fact sheet: the isolated Berryessa Rd–Mercado Way stub", d: "City of San José fact sheet", r: ["COY05.6"], src: SJ_DOC + "20497/636687596865630000", short: "Fact sheet" },
  { k: "mp-berryessa", t: "Perspective sketch: undercrossing at Berryessa Road", d: MP + ", Figure 29", r: ["COY05.6", "COY05.7"], src: MP_DOC, short: "Rendering" },
  { k: "bart-alignment", t: "Alignment: Berryessa BART to Santa Clara St (1.5 mi, two 160-ft bridges)", d: "City of San José alignment plan", r: R("COY05.7", "COY07"), src: SJ_DOC + "20467/636687592670300000", short: "Alignment plan" },
  { k: "mp-mabury", t: "As planned in 2011: undercrossing at Mabury Road", d: MP + ", Figure 33", r: ["COY05.8"], src: MP_DOC, short: "2011 plan" },
  { k: "mab2023", t: "Location map: Mabury Rd to Empire St (Project 8087)", d: "City of San José Council memo, 2023", r: ["COY05.8", "COY06"], src: SRC.memoMabury2023, short: "Location map" },
  { k: "mp-101", t: "As planned in 2011: undercrossing at Highway 101 and Watson Park", d: MP + ", Figure 34", r: ["COY06"], src: MP_DOC, short: "2011 plan" },
  { k: "nes-vicinity", t: "Vicinity map: the three reaches from SR 237 to Story Rd (9.6 mi)", d: "Natural Environment Study (H. T. Harvey & Associates), Sept 2011, Figure 1", r: R("COY04", "COY10"), src: SJ_DOC + "37687/636809083118600000", short: "Vicinity map" },
  // Downtown
  { k: "fs04-key", t: "Segment key map: Story Rd to Watson Park in six segments", d: "Feasibility study (Callander Associates), June 2004", r: R("COY06-D", "COY10"), src: FS04_DOC, short: "Key map" },
  { k: "fs04-sheet3", t: "Trail alignment map: Roosevelt Park and San José High to Watson Park", d: "Feasibility study (Callander Associates), sheet 3 of 4, Feb 2004", r: ["COY06-D", "COY06.1", "COY07"], src: FS04_DOC, short: "Alignment map" },
  { k: "slc-costs", t: "Estimate of costs: $8.55M for Story Rd to Lower Silver Creek, by reach", d: SLC + ", Figure 21", r: R("COY06-D", "COY10"), src: SLC_DOC, short: "Cost estimate" },
  { k: "slc-boardwalk", t: "Planned boardwalk beside San José High School", d: SLC + ", Figures 18–19", r: ["COY07"], src: SLC_DOC, short: "Planned boardwalk" },
  { k: "rp-bridge", t: "Proposed pedestrian bridge over Coyote Creek at Roosevelt Park", d: "Roosevelt Park Master Plan Amendment, final draft (Catalyst), Dec 2003", r: ["COY07"], src: SJ_DOC + "20449/636687586996500000", short: "Bridge proposal" },
  { k: "martha-a", t: "Martha St pedestrian bridge, Alternative A", d: "Feasibility study, Callander Associates, 2004–05", r: ["COY08"], src: SJ_DOC + "20447/636687586989470000", short: "Bridge study" },
  { k: "martha-elev", t: "Martha St pedestrian bridge, elevation across the creek", d: "Feasibility study, Callander Associates, 2005", r: ["COY08"], src: SJ_DOC + "20447/636687586989470000", short: "Bridge elevation" },
  { k: "map-wp", t: "Trail map: William St to Phelan Ave (2022)", d: "City of San José trail map", r: R("COY08", "COY11"), src: SJ_DOC + "85452/637872622937800000", short: "Trail map" },
  { k: "william", t: "Vicinity map: 16th St / William St to Story Rd (Project 6324)", d: "City of San José Council memo, Jan 2021", r: ["COY09", "COY10"], src: SRC.memoWilliamStory, short: "Location map" },
  { k: "ps-6324", t: "100% plans: Selma Olinder Park to Story Rd, key map", d: "City of San José bid set, 2018 (Project 6324)", r: ["COY09", "COY10"], src: SJ_DOC + "37689/636809087405070000", short: "100% plans" },
  { k: "story", t: "Location map: Story Rd to Phelan Ave through Kelley Park", d: "City of San José Council memo, 2020", r: ["COY11"], src: SRC.memoStoryPhelan, short: "Location map" },
  { k: "ps-story90", t: "90% plans: Story Rd to Phelan Ave, plan and profile", d: "City of San José construction plans", r: ["COY11"], src: SJ_DOC + "20441/636687586978070000", short: "90% plans" },
  { k: "phelan", t: "Aerial alignment: Phelan Ave to Tully Rd (Project 8675)", d: "City of San José Council memo, Nov 2023. Shows the trail, access points and encampment-abatement zones.", r: ["COY12"], src: SRC.memoPhelanTully, short: "Aerial alignment" },
  // South San José and the county parkway
  { k: "map-tully", t: "Trail map: Tully Rd to Yerba Buena", d: "City of San José trail map", r: R("COY13", "COY15"), src: SJ_DOC + "20469/636687592672800000", short: "Trail map" },
  { k: "sing-plan", t: "Singleton Rd crossing: permanent bridge alignment (Alternative 2)", d: "Preliminary engineering study, CH2M, 2015", r: ["COY15A"], src: SJ_DOC + "20459/636687587018200000", short: "Bridge study" },
  { k: "sing-elev", t: "Singleton Rd pedestrian bridge: plan and elevation", d: "Preliminary engineering study, CH2M, 2015", r: ["COY15A"], src: SJ_DOC + "20459/636687587018200000", short: "Bridge elevation" },
  { k: "map-yb", t: "Trail map: Yerba Buena to County jurisdiction (Hellyer)", d: "City of San José trail map", r: ["COY16"], src: SJ_DOC + "20471/636687592675470000", short: "Trail map" },
  { k: "map-237", t: "Trail map: Hwy 237 Bikeway to Montague Expressway", d: "City of San José trail map", r: ["COY03", "COY04"], src: SJ_DOC + "20495/636687595949370000", short: "Trail map" },
  { k: "county-guide", t: "Coyote Creek Parkway guide map", d: "Santa Clara County Parks, 2024", r: COUNTY, src: "https://files.santaclaracounty.gov/exjcpb1516/2024-11/coyote-creek-parkway-guide-map.pdf" },
  { k: "ridgeN", t: "Coyote Creek Parkway North: William St to Metcalf Park", d: "Bay Area Ridge Trail Council, 2025", r: R("COY08", "COY22A"), src: "https://ridgetrail.org/wp-content/uploads/2017/07/Santa-Clara_Coyote-Creek-Parkway-North_2025.pdf" },
  { k: "ridgeS", t: "Coyote Creek Parkway South: Metcalf Park to Morgan Hill", d: "Bay Area Ridge Trail Council, 2020", r: ["PARKWAY"], src: "https://ridgetrail.org/wp-content/uploads/2017/07/2020_SantaClara_CoyoteCreekParkwaySouth.pdf" },
  // The road not taken
  { k: "park72-areas", t: "1972 Coyote Creek Park masterplan: the 10 study areas, Kelley Park to Burnett–Cochran Rd", d: P72, r: R("COY08", "PARKWAY"), src: P72_DOC, short: "1972 park plan" },
  { k: "park72-costs", t: "1972 summary cost estimate: $32.6M for the whole park, by study area", d: P72 + ". 1971 construction dollars", r: R("COY08", "PARKWAY"), src: P72_DOC, short: "Cost estimate" },
  { k: "hist-1", t: "\"Coyote Creek Park\" long-range master plan: William St to the golf course", d: "Overview map, Section 1, of the Coyote Creek Park masterplan (Ribera & Sue), c. 1972 (inferred; the sheet is undated). Swim and boating lagoons, an equestrian center and a train ride.", r: R("COY08", "COY15"), src: SJ_DOC + "20481/636687592691270000", short: "Historic plan" },
  { k: "hist-2", t: "\"Coyote Creek Park\" long-range master plan: Hellyer to the percolation ponds", d: "Overview map, Section 2, of the Coyote Creek Park masterplan (Ribera & Sue), c. 1972 (inferred; the sheet is undated).", r: R("COY16", "COY22A"), src: SJ_DOC + "20483/636687592694070000", short: "Historic plan" },
  { k: "hist-3", t: "\"Coyote Creek Park\" long-range master plan: Coyote Valley to Anderson Reservoir", d: "Overview map, Section 3, of the Coyote Creek Park masterplan (Ribera & Sue), c. 1972 (inferred; the sheet is undated).", r: ["PARKWAY"], src: SJ_DOC + "20485/636687592697500000", short: "Historic plan" },
];
// Groupings shown as sections in the plan-sheet atlas
const SCH_GROUPS = [
  ["The northern gap, as planned", ["mp-network","mp-costs","mp-montague","mp-reach12","mp-charcot","mp-880","mp-brokaw","ps-brokaw","orchard-site","mp-oakland","mp-nottinghill","fact-flea","mp-berryessa","bart-alignment","mp-mabury","mab2023","mp-101","nes-vicinity"]],
  ["Downtown & Kelley Park", ["fs04-key","fs04-sheet3","slc-costs","slc-boardwalk","rp-bridge","martha-a","martha-elev","map-wp","william","ps-6324","story","ps-story90","phelan"]],
  ["South San José & the county parkway", ["map-tully","sing-plan","sing-elev","map-yb","map-237","county-guide","ridgeN","ridgeS"]],
  ["The road not taken: an earlier \"Coyote Creek Park\"", ["park72-areas","park72-costs","hist-1","hist-2","hist-3"]],
];

// Per-event extras, keyed by the event's date string in TIMELINE.
//   r: reaches to highlight · pt: point to mark · ph: photo file names · sch: plan sheet key
const EVENT_GEO = {
  "1972-07": { r: R("COY08", "PARKWAY"), sch: ["park72-areas", "park72-costs"] },
  "1990": { r: COUNTY, ph: ["Kluft-photo-2019-06-16-Coyote-Creek-Trail-Lakes.jpg"], sch: "ridgeS" },
  "2004-03-09": { r: CITY },
  "2003-12": { r: ["COY07"], sch: "rp-bridge" },
  "2004-06-07": { r: R("COY06-D", "COY10"), sch: ["fs04-key", "fs04-sheet3"] },
  "2005-03-08": { r: ["COY12", "COY13"] },
  "2007-03-20": { r: COUNTY, ph: ["Ducks at Cottonwood Lake in Hellyer County Park.jpg"], sch: "county-guide" },
  "2008": { r: R("COY03", "COY06") },
  "2008-06-17": { r: R("COY06-D", "COY10"), sch: ["slc-costs", "slc-boardwalk"] },
  "2009-08-15": { r: ["COY13", "COY14"], sch: ["map-tully", "map-237"], ph: ["Kluft-photo-2019-06-16-Coyote-Creek-Trail-Tully-trailhead.jpg", "Coyote_Creek_under_highway_237.jpg"] },
  "2011-09-13": { r: R("COY05.1", "COY06.1"), sch: ["mp-costs", "mp-880", "mp-berryessa"] },
  "2005-12-22": { r: ["COY08"], sch: ["martha-a", "martha-elev"] },
  "2015-09": { r: ["COY15A"], sch: ["sing-elev"] },
  "2011-11": { r: R("COY04", "COY10"), sch: "nes-vicinity" },
  "2013-10": { r: ["COY05.4"], sch: "orchard-site" },
  "2012": { pt: TRESTLE, w: "Senter Rd trestle area" },
  "2015-10": { r: ["COY05.8", "COY06"] },
  "2016-05": { r: CITY },
  "2017-02-21": { pt: [37.3185, -121.8478], r: R("COY11", "COY13") },
  "2017-06-15": { r: FLOOD_REACH, ph: ["Coyote_Creek_aerial.jpg"] },
  "2017-09": { r: ["COY05.3"], sch: "ps-brokaw" },
  "2017-08-29": { r: ["COY11", "COY12"] },
  "2019-12-23": { r: ["COY09", "COY10"] },
  "2020-06": { r: NORTH_GAP, ph: ["Berryessa station from Marbury Road, March 2018.JPG"], sch: ["bart-alignment"] },
  "2020-09-01": { r: ["COY11"], sch: ["ps-story90"] },
  "2021-01-26": { r: ["COY09", "COY10"], sch: ["ps-6324", "william"] },
  "2021-03-21": { r: ["COY10", "COY11"] },
  "2021-07": { r: ["COY15A", "COY15"] },
  "2021-11-07": { r: R("COY08", "COY11"), ph: ["Happy Hollow Park & Zoo -San Jose, California, USA-2Oct2011 (1).jpg"], sch: ["story", "map-wp"] },
  "2022-01-01": { r: R("COY08", "COY12") },
  "2022-11-16": { r: ["COY05.8", "COY06"] },
  "2023-04-06": { r: FLOOD_REACH },
  "2023-04-19": { r: ["COY05.8", "COY06"], sch: "mab2023" },
  "2023-06": { pt: TRESTLE, w: "Senter Rd trestle area", r: ["COY09", "COY10"] },
  "2023-11-07": { r: ["COY12"], sch: "phelan" },
  "2024-05-07": { r: ["COY05.8", "COY06"] },
  "2024-10-22": { r: FLOOD_REACH },
  "2025-01-02": { r: FLOOD_REACH },
  "2025-02-21": { r: R("COY05.4", "COY08") },
  "2025-04": { r: ["COY05.8", "COY06"], ph: ["Miguelita_or_Lower_Silver_Creek_confluence_with_Coyote_Creek.jpg"], sch: ["mp-101"] },
  "2025-05": { r: ["COY12"] },
  "2025-08": { r: ["COY06-D"] },
  "2025-12-12": { pt: [37.3113, -121.8423], r: ["COY12", "COY05.8", "COY06"] },
  "2026-04-15": { r: ["COY10"], pt: [37.3265, -121.8635] },
  "2026-05-21": { r: R("COY08", "PARKWAY"), ph: ["Kluft-photo-2019-06-16-Coyote-Creek-Trail-Bailey-turn.jpg"], sch: "ridgeN" },
  "2026-07-20": { pt: TRESTLE, w: "Senter Rd trestle area" },
  "2026-08-03": { r: FLOOD_REACH },
  "2027-12": { pt: TRESTLE, w: "Senter Rd trestle area" },
  "2028-10": { r: FLOOD_REACH },
  "2035": { r: NORTH_GAP, sch: ["mp-network"] },
};

// Where each document applies (null = not location-specific). Keyed by document title in DOCS.
const DOC_GEO = {
  "Coyote Creek Trail Master Plan (low-res, ~6 MB)": CITY,
  "Coyote Creek Park Masterplan, July 1972 (hi-res, ~32 MB)": R("COY08", "PARKWAY"),
  "Master Plan: Montague Expwy to Watson Park": R("COY05.1", "COY06.1"),
  "Master Plan: Story Rd to Lower Silver Creek (2008)": R("COY06-D", "COY10"),
  "Master Plan: Los Lagos Golf Course to Phelan Ave (2005)": ["COY12", "COY13"],
  "Master Plan: through Orchard Park": ["COY05.4"],
  "Master Plan Amendment: Roosevelt Park": ["COY07", "COY07.1"],
  "Feasibility Study: Hwy 101 to Story Rd": R("COY06-D", "COY10"),
  "Feasibility Study: Martha St Pedestrian Bridge": ["COY08"],
  "Alignment Plan: Berryessa BART to Santa Clara St BRT": R("COY05.7", "COY07"),
  "Preliminary Engineering: Singleton Crossing (CH2M, 2015)": ["COY15A"],
  "San José Trail Program Strategic Plan (2016)": null,
  "90% Plans: Story Rd to Phelan Ave (38 MB)": ["COY11"],
  "35% Plans: Brokaw Rd to UPRR (June 2016, 11 MB)": ["COY05.3"],
  "95% Plans: Brokaw Rd to UPRR (18 MB)": ["COY05.3"],
  "100% Plans: Hwy 280 (Selma Olinder) to Story Rd": ["COY09", "COY10"],
  "Overview Map: Section 1 (Coyote Creek Park masterplan, c. 1972)": R("COY08", "COY15"), "Overview Map: Section 2 (Coyote Creek Park masterplan, c. 1972)": R("COY16", "COY22A"), "Overview Map: Section 3 (Coyote Creek Park masterplan, c. 1972)": ["PARKWAY"],
  "Reach map: William St to Phelan Ave": R("COY08", "COY11"),
  "Reach map: Hwy 237 Bikeway to Montague": ["COY03", "COY04"],
  "Reach map: Tully Rd to Yerba Buena": R("COY13", "COY15"),
  "Reach map: Yerba Buena to County": ["COY16"],
  "Coyote Creek Trail Fact Sheet (Berryessa Rd–Mercado Way)": ["COY05.6"],
  "County Parks: Coyote Creek Parkway guide map (PDF)": COUNTY,
  "Bay Area Ridge Trail map: Parkway North (2025)": R("COY08", "COY22A"),
  "CEQA: Coyote Creek Trail Master Plan (2005)": R("COY12", "COY14"),
  "CEQA: Master Plan Public Project PP09-218 (2011)": R("COY05.1", "COY06.1"),
  "CEQA: Story Rd to Phelan Ave (2014)": ["COY11"],
  "CEQA: Valley Water Flood Protection Project (2023)": FLOOD_REACH,
  "Natural Environment Study: SR 237 to Story Rd (2011)": R("COY04", "COY10"),
  "Biological Assessment / Essential Fish Habitat Assessment (2011)": R("COY04", "COY10"),
  "Mabury–Empire rebid & contingency (Feb 2025)": ["COY05.8", "COY06"],
  "Mabury–Empire contract award (2023)": ["COY05.8", "COY06"],
  "Phelan–Tully contract award (Nov 2023)": ["COY12"],
  "Story–Phelan contract award (2020)": ["COY11"],
  "William–Story contract award (2021)": ["COY09", "COY10"],
  "Singleton crossing (May 2021)": ["COY15A"],
  "Bike Plan & Trail Network Annual Update (2024)": null,
  "Trail Network Annual Report (2026)": null,
  "Neighborhood Services & Education Committee memo (Nov 2025)": null,
  "Coastal Conservancy: Singleton Crossing staff report (2021)": ["COY15A"],
};

// Human labels for reach endpoints where the GIS name doesn't split cleanly into "A To B".
const REACH_ENDS = {
  COY00: ["Dixon Landing Rd", "Hwy 237"], PARKWAY: ["Metcalf Rd", "Anderson Dam"], COY19B: ["Broderick Dr", "Silver Creek Valley Rd"],
  "COY15A": ["Singleton crossing", "Singleton crossing"], "COY06": ["Hwy 101", "Watson Park"], "COY06-D": ["Watson Park", "Julian St"],
  "COY06.1": ["Watson Park", "Watson Park bridge"], "COY07.2": ["Selma Olinder", "bridge"],
};

// Document dates. src: "printed" = on the title page / memo header; "filed" = CEQA filing
// (from the State Clearinghouse number); "file" = PDF creation date (no date printed);
// "inferred" = no date printed; dated from a companion document.
// "unverified" = not yet checked against the document itself.
const DOC_DATES = {
  "Coyote Creek Park Masterplan, July 1972 (hi-res, ~32 MB)": ["1972-07", "printed"],
  "Master Plan: Story Rd to Lower Silver Creek (2008)": ["2008-06-20", "printed"],
  "Master Plan: Los Lagos Golf Course to Phelan Ave (2005)": ["2005-03-21", "printed"],
  "Master Plan: through Orchard Park": ["2013-10", "printed"],
  "Master Plan Amendment: Roosevelt Park": ["2003-12", "printed"],
  "Feasibility Study: Hwy 101 to Story Rd": ["2004-06-07", "printed"],
  "35% Plans: Brokaw Rd to UPRR (June 2016, 11 MB)": ["2016-06-14", "printed"],
  "Natural Environment Study: SR 237 to Story Rd (2011)": ["2011-09-16", "printed"],
  "Biological Assessment / Essential Fish Habitat Assessment (2011)": ["2011-11", "printed"],
  "Master Plan: Montague Expwy to Watson Park": ["2011-09", "printed"],
  "Feasibility Study: Martha St Pedestrian Bridge": ["2005-12-22", "printed"],
  "Alignment Plan: Berryessa BART to Santa Clara St BRT": ["2015-05", "file"],
  "Preliminary Engineering: Singleton Crossing (CH2M, 2015)": ["2015-09", "printed"],
  "San José Trail Program Strategic Plan (2016)": ["2016-05", "printed"],
  "90% Plans: Story Rd to Phelan Ave (38 MB)": ["2014-12", "printed"],
  "95% Plans: Brokaw Rd to UPRR (18 MB)": ["2017-09", "printed"],
  "100% Plans: Hwy 280 (Selma Olinder) to Story Rd": ["2018-05-02", "printed"],
  "Overview Map: Section 1 (Coyote Creek Park masterplan, c. 1972)": ["1972", "inferred"],
  "Overview Map: Section 2 (Coyote Creek Park masterplan, c. 1972)": ["1972", "inferred"],
  "Overview Map: Section 3 (Coyote Creek Park masterplan, c. 1972)": ["1972", "inferred"],
  "Reach map: William St to Phelan Ave": ["2022-04-29", "file"],
  "Reach map: Hwy 237 Bikeway to Montague": ["2017-01", "file"],
  "Reach map: Tully Rd to Yerba Buena": ["2009-07", "file"],
  "Reach map: Yerba Buena to County": ["2010-10", "printed"],
  "Coyote Creek Trail Fact Sheet (Berryessa Rd–Mercado Way)": ["2015-07", "file"],
  "County Parks: Coyote Creek Parkway guide map (PDF)": ["2026-06-16", "printed"],
  "Bay Area Ridge Trail map: Parkway North (2025)": ["2025", "printed"],
  "CEQA: Coyote Creek Trail Master Plan (2005)": ["2005-01", "filed"],
  "CEQA: Master Plan Public Project PP09-218 (2011)": ["2011-05", "filed"],
  "CEQA: Story Rd to Phelan Ave (2014)": ["2014-10", "filed"],
  "CEQA: Valley Water Flood Protection Project (2023)": ["2023-11", "filed"],
  "Mabury–Empire rebid & contingency (Feb 2025)": ["2025-02-10", "printed"],
  "Mabury–Empire contract award (2023)": ["2023-02-13", "printed"],
  "Phelan–Tully contract award (Nov 2023)": ["2023-10-16", "printed"],
  "Story–Phelan contract award (2020)": ["2020-08-20", "printed"],
  "William–Story contract award (2021)": ["2021-01-11", "printed"],
  "Singleton crossing (May 2021)": ["2021-05-14", "printed"],
  "Bike Plan & Trail Network Annual Update (2024)": ["2024-03-18", "printed"],
  "Trail Network Annual Report (2026)": ["2026-03-23", "printed"],
  "Neighborhood Services & Education Committee memo (Nov 2025)": ["2025-11-24", "printed"],
  "Coastal Conservancy: Singleton Crossing staff report (2021)": ["2021-01-21", "printed"],
};

// The three "chapters" in the intro, north to south.
const CHAPTERS = [
  { n: "1", t: "The missing link", sub: "North San José · Dixon Landing Rd to William St",
    r: R("COY00", "COY07.1"), ph: "Berryessa station from Marbury Road, March 2018.JPG",
    x: "From the Bay Trail at Dixon Landing Rd, the path follows the creek to Montague Expressway. South of there it breaks into fragments. A new bridge and freeway undercrossing at Mabury Rd opened in 2025, but most of the route to downtown still exists only in plans." },
  { n: "2", t: "Finished, finally", sub: "Downtown · William St Park to Yerba Buena",
    r: R("COY08", "COY15"), ph: "Happy Hollow Park & Zoo -San Jose, California, USA-2Oct2011 (1).jpg",
    x: "Through Selma Olinder Park, Kelley Park and past Happy Hollow to Tully Rd, the last pieces opened in 2021 and 2025. They followed years of flood repairs, encampment clearings and a private easement that took a decade to negotiate." },
  { n: "3", t: "The long parkway", sub: "South · Hellyer County Park to Anderson Dam",
    r: R("COY16", "PARKWAY"), ph: "Kluft-photo-2019-06-16-Coyote-Creek-Trail-bridge.jpg",
    x: "From Hellyer County Park, Santa Clara County's Coyote Creek Parkway carries the trail about 15 paved miles through Coyote Valley's ponds and oak woodland to the foot of Anderson Dam." },
];
