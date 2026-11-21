# South Bay Trails

Interactive maps, timelines and cost trackers for the creek and rail trails of San José: what's built, what's missing, what it has cost, and every document and news story behind it.

**Live site:** https://alexstorer.github.io/south-bay-trails/

| Trail | Page | Mapped | Open | Missing |
|---|---|---|---|---|
| Guadalupe River Trail | `trails/guadalupe-river/` | 19.4 mi | 14.0 mi | 5.4 mi |
| Coyote Creek Trail | `trails/coyote-creek/` | 32.9 mi | 28.0 mi | 4.9 mi |
| Los Gatos Creek Trail | `trails/los-gatos-creek/` | 12.4 mi | 10.9 mi | 1.5 mi |
| Silver Creek Trail (Lower & Upper) | `trails/silver-creek/` | 7.0 mi | 2.6 mi | 4.3 mi |
| Penitencia Creek Trail | `trails/penitencia-creek/` | 4.9 mi | 4.2 mi | 0.7 mi |
| Five Wounds Trail | `trails/five-wounds/` | 2.3 mi | 0.7 mi | 1.7 mi |

The landing page (`index.html`, `hub.js`, `hub.css`) maps every trail and links to each page. Each trail page has the same sections: an intro story map in three chapters, a map of every reach, a scrolling timeline whose map redraws the trail as it stood on each date, costs and on-time/on-budget scorecards, a gap-cost calculator, documents and plan sheets pinned to the stretch they cover, news, quotes and photos.

## How it fits together

```
index.html, hub.js, hub.css     landing page (reads data/hub.js)
app.js, styles.css              shared by every trail page
data/hub.js                     generated summary of all trails: run scripts/build_hub.js
trails.json                     trail order, names, taglines and cover photos for the landing page
trails/<slug>/index.html        the trail page (its own text)
trails/<slug>/data/reaches.js   geometry (generated; don't edit)
trails/<slug>/data/data.js      timeline, costs, gaps, documents, news, photos, quotes, page settings
trails/<slug>/data/geo.js       where each event, document and plan sheet sits; opening years; chapters
trails/<slug>/img/schematics/   plan-sheet images cut from source PDFs
```

## Data sources

- **Trail geometry:** the City of San José [Trail Reach dataset](https://data.sanjoseca.gov/dataset/trail-reach) (ArcGIS layer `OPN_OpenDataService/MapServer/538`). The Los Gatos section of the Los Gatos Creek Trail, which the City layer doesn't cover, comes from OpenStreetMap relation 5335571 (ODbL).
- **Everything else:** council memos (Legistar), Valley Water board memos and capital plans, County Parks, VTA, Army Corps and State Coastal Conservancy documents, environmental filings (CEQAnet), and local news. Every entry in `data.js` carries its source URL. Gap-cost figures are our extrapolations unless marked as official estimates.

## Updating

1. **Geometry.** `python3 scripts/reaches_gis.py <slug>` for Guadalupe, Silver Creek, Penitencia and Five Wounds; `scripts/reaches_coyote-creek.py` and `scripts/reaches_los-gatos-creek.py` for the other two (each has `--offline`). They print what changed since the last run.
2. **Content.** Edit `trails/<slug>/data/data.js` and `geo.js`. `TIMELINE` dates double as keys for `EVENT_GEO` and `OUTCOMES`; document titles are keys for `DOC_GEO` and `DOC_DATES`.
3. **Plan sheets.** `FIG_OUT=trails/<slug>/img/schematics python3 scripts/make_figure.py file.pdf PAGE key [--crop x0 y0 x1 y1]`, then add to `SCHEMATICS` and `SCH_GROUPS`.
4. **Validate.** `node scripts/check_data.js trails/<slug>` must print `OK`.
5. **Look at it.** `python3 -m http.server`, then check the landing page and the trail page on desktop and phone widths.
6. **Stamp and publish.** `python3 scripts/stamp.py [slug]` sets `SITE_UPDATED`, bumps the `?v=` asset stamps and rebuilds `data/hub.js`. Then commit and push; GitHub Pages redeploys in about a minute.

San José's annual *Bike Plan and Trail Network Annual Report* (each March, T&E Committee) is the best single check for every trail. Each trail page's caveats and the research notes list what we couldn't verify.

## Running locally

```
python3 -m http.server
```

Then open http://localhost:8000.

Not affiliated with the City of San José, Santa Clara County, Valley Water, VTA, or any of the other agencies involved.
