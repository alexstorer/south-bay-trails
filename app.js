(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const h = (tag, attrs = {}, html = "") => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (html) el.innerHTML = html;
    return el;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const fmtM = v => "$" + (v >= 100 ? Math.round(v) : v.toFixed(1)) + "M";
  const ext = `target="_blank" rel="noopener"`;
  const MONS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const fmtD = d => {
    const p = d.split("-");
    if (p.length === 1) return p[0];
    if (p.length === 2) return `${MONS[+p[1] - 1]} ${p[0]}`;
    return `${MONS[+p[1] - 1]} ${+p[2]}, ${p[0]}`;
  };
  const decYear = d => { const [y, m = 6, day = 15] = d.split("-").map(Number); return y + (m - 1) / 12 + (day - 1) / 365; };

  const STATUS = {
    "Open Paved":   { key: "open",    label: "Open (paved)",          cls: "st-open" },
    "Open Interim": { key: "interim", label: "Open (gravel)",         cls: "st-interim" },
    "Design":       { key: "design",  label: "In design",             cls: "st-design" },
    "Planned":      { key: "planned", label: "Planned gap",           cls: "st-planned" },
    "Study":        { key: "study",   label: "Under study",           cls: "st-study" },
    "Identify":     { key: "identify", label: "Proposed only",        cls: "st-identify" },
  };
  // Show only the statuses this trail actually has.
  Object.keys(STATUS).forEach(k => { if (!REACHES.features.some(f => f.properties.status === k)) delete STATUS[k]; });
  const UNBUILT = ["Design", "Planned", "Study", "Identify"];
  const statusColor = s => css("--" + STATUS[s].key);

  /* ---------- Theme ---------- */
  const isDark = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const themeListeners = [];
  $("#themeToggle").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("sbt-theme", next); } catch (e) {}
    themeListeners.forEach(f => f());
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => themeListeners.forEach(f => f()));

  /* ---------- Tooltip & lightbox ---------- */
  const tip = $("#tooltip");
  const showTip = (e, html) => { tip.innerHTML = html; tip.hidden = false; moveTip(e); };
  const moveTip = e => {
    const x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8);
    const y = e.clientY + 16 + tip.offsetHeight > innerHeight ? e.clientY - tip.offsetHeight - 12 : e.clientY + 16;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  };
  const hideTip = () => { tip.hidden = true; };
  const lb = $("#lightbox");
  const openLightbox = (src, alt, capHTML) => { $("#lbImg").src = src; $("#lbImg").alt = alt; $("#lbCap").innerHTML = capHTML; lb.hidden = false; };
  lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("lb-close")) lb.hidden = true; });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- Data prep ---------- */
  const feats = REACHES.features;
  const byId = {};
  feats.forEach(f => { (byId[f.properties.id] ||= []).push(f); });
  const reachMi = id => Math.max(...(byId[id] || []).map(f => f.properties.mi), 0);
  const gapMi = GAPS.reduce((a, g) => a + g.mi, 0);
  const builtProjects = PROJECTS.filter(p => p.mi);
  const spent = PROJECTS.reduce((a, p) => a + p.cost, 0);
  const perMileOf = p => p.cost / p.mi;
  const avgPM = builtProjects.length ? builtProjects.reduce((a, p) => a + p.cost, 0) / builtProjects.reduce((a, p) => a + p.mi, 0) : (typeof DEFAULT_PM !== "undefined" ? DEFAULT_PM : 8);
  const extrasCost = EST_EXTRAS.reduce((a, x) => a + x.cost, 0);
  const estimate = pm => gapMi * pm + extrasCost;
  const lowPM = Math.min(...PRESETS.map(p => p.pm ?? avgPM)), highPM = Math.max(...PRESETS.map(p => p.pm ?? avgPM));

  // Linear positions along the mainline (miles from the north end)
  const pos = {}; let acc = 0;
  MAINLINE.forEach(id => { const m = reachMi(id); pos[id] = [acc, acc + m]; acc += m; });
  const mainTotal = acc;
  const posOf = id => pos[id] || pos[PARENT[id]];
  const ends = id => {
    if (REACH_ENDS[id]) return REACH_ENDS[id];
    const f = (byId[id] || [])[0]; if (!f) return [id, id];
    const parts = f.properties.name.split(/ To /i);
    return parts.length === 2 ? parts.map(s => s.replace(/^E\/B\s+|^W\/B\s+/g, "").trim()) : [f.properties.name, f.properties.name];
  };
  const extentLabel = ids => {
    const sorted = ids.filter(posOf).sort((a, b) => posOf(a)[0] - posOf(b)[0]);
    if (!sorted.length) return "";
    const a = ends(sorted[0])[0], b = ends(sorted[sorted.length - 1])[1];
    return a === b ? a : `${a} → ${b}`;
  };
  const extentMi = ids => ids.reduce((s, id) => s + reachMi(id), 0);
  const gapSpans = () => GAPS.map(g => { const ps = g.ids.map(posOf).filter(Boolean); const lo = Math.min(...ps.map(p => p[0])), hi = Math.max(...ps.map(p => p[1])); return `<span class="loc-gap" style="left:${lo / mainTotal * 100}%;width:${Math.max(.8, (hi - lo) / mainTotal * 100)}%"></span>`; }).join("");
  const locatorHTML = ids => {
    if (!ids) return `<span class="loc"><span class="loc-track"></span><span class="loc-label muted">Whole corridor / not location-specific</span></span>`;
    const ps = ids.map(posOf).filter(Boolean);
    const lo = Math.min(...ps.map(p => p[0])), hi = Math.max(...ps.map(p => p[1]));
    const l = lo / mainTotal * 100, w = Math.max(1.2, (hi - lo) / mainTotal * 100);
    return `<span class="loc"><span class="loc-track">${gapSpans()}<span class="loc-hl" style="left:${l}%;width:${w}%"></span></span><span class="loc-label">${esc(extentLabel(ids))}</span></span>`;
  };

  const PHOTO_BY_F = Object.fromEntries(PHOTOS.map(p => [p.f, p]));
  const SCH_BY_K = Object.fromEntries(SCHEMATICS.map(s => [s.k, s]));
  const fp = (f, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
  const photoCap = p => `${esc(p.c)} · Photo: ${esc(p.a)}, ${esc(p.l)} · <a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p.f.replace(/ /g, "_"))}" ${ext}>Wikimedia Commons ↗</a>`;
  const openPhoto = p => openLightbox(fp(p.f, 1600), p.c, photoCap(p));
  const schImg = (s, thumb) => `img/schematics/${s.k}${thumb ? "_thumb" : ""}.jpg`;
  const openSch = s => openLightbox(schImg(s), s.t, `${esc(s.t)} · ${esc(s.d)} · <a href="${s.src}" ${ext}>Source document ↗</a>`);
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-sch]"); if (b) { e.preventDefault(); openSch(SCH_BY_K[b.dataset.sch]); }
    const ph = e.target.closest("[data-photo]"); if (ph) { e.preventDefault(); openPhoto(PHOTO_BY_F[ph.dataset.photo]); }
  });

  const pinSvg = `<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>`;
  /* ---------- Trail switcher (all trails live in data/hub.js at the site root) ---------- */
  const sw = $("#trailSwitch");
  if (sw && typeof HUB !== "undefined") {
    const here = location.pathname.split("/").filter(Boolean).slice(-1)[0];
    const btn = $(".ts-btn", sw), menu = $(".ts-menu", sw);
    const strip = t => `<span class="ts-strip" aria-hidden="true">${t.strip.map(([st, mi]) => `<i class="${st.startsWith("Open") ? "ms-open" : "ms-gap"}" style="flex:${mi} 0 0"></i>`).join("")}</span>`;
    menu.innerHTML = HUB.trails.map(t => `<a class="ts-item${t.slug === here ? " current" : ""}" href="../${t.slug}/"${t.slug === here ? ' aria-current="page"' : ""}>
        <span class="ts-row"><strong>${esc(t.name)}</strong><span class="ts-mi">${t.openMi.toFixed(1)} mi open · <span class="gap-t">${t.gapMi.toFixed(1)} missing</span></span></span>${strip(t)}</a>`).join("") +
      `<a class="ts-all" href="../../">${pinSvg} All trails on one map</a>`;
    const open = on => { menu.hidden = !on; btn.setAttribute("aria-expanded", String(on)); if (on) (menu.querySelector(".current") || menu.querySelector("a")).focus(); };
    btn.addEventListener("click", e => { e.stopPropagation(); open(menu.hidden); });
    document.addEventListener("click", e => { if (!sw.contains(e.target)) open(false); });
    sw.addEventListener("keydown", e => {
      if (e.key === "Escape") { open(false); btn.focus(); }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); const items = [...menu.querySelectorAll("a")];
        if (menu.hidden) return open(true);
        const i = items.indexOf(document.activeElement);
        items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length].focus();
      }
    });
  }

  /* ---------- Last-updated stamp ---------- */
  const updTxt = "Updated " + fmtD(SITE_UPDATED);
  $$(".js-updated").forEach(el => { el.textContent = updTxt; });
  $$("time.js-updated-time").forEach(el => el.setAttribute("datetime", SITE_UPDATED));

  /* ---------- Hero ---------- */
  const stats = STATS({ gapMi, spent, fmtM, estLow: estimate(lowPM), estHigh: estimate(highPM), mainTotal });
  $("#stats").innerHTML = stats.map(([n, l]) => `<div class="stat"><span class="stat-num">${n}</span><span class="stat-label">${l}</span></div>`).join("");

  const strip = $("#strip");
  MAINLINE.forEach(id => {
    const f = (byId[id] || [])[0]; if (!f) return;
    const p = f.properties, mi = reachMi(id);
    const d = h("div", { class: STATUS[p.status].cls, tabindex: "0", "aria-label": `${p.name}, ${STATUS[p.status].label}, ${mi} miles` });
    d.style.flex = `${mi} 0 0`;
    d.addEventListener("mousemove", e => showTip(e, `<b>${esc(p.name)}</b>${STATUS[p.status].label} · ${mi.toFixed(2)} mi`));
    d.addEventListener("mouseleave", hideTip);
    d.addEventListener("click", () => { window.__beginProgScroll && window.__beginProgScroll(); document.getElementById("map").scrollIntoView({ behavior: "smooth" }); focusReach(id); });
    strip.appendChild(d);
  });
  $("#stripLegend").innerHTML = Object.values(STATUS).map(s => `<span><i class="sw ${s.cls}"></i>${s.label}</span>`).join("") +
    `<span style="opacity:.7">${mainTotal.toFixed(1)} mainline miles mapped</span>`;

  /* ---------- Shared map helpers ---------- */
  const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/";
  const ATTR = 'Basemap &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors · Trails: City of San José Open Data';
  const maps = [];
  const ATTR_SHORT = '&copy; Esri, &copy; OpenStreetMap · Trails: City of San José';
  function makeMap(elId, opts = {}, short = false) {
    const m = L.map(elId, { scrollWheelZoom: false, zoomSnap: 0.25, ...opts });
    if (short) m.attributionControl.setPrefix(false);
    const st = { m, tiles: null, labels: null };
    st.setTiles = () => {
      if (st.tiles) m.removeLayer(st.tiles);
      if (st.labels) m.removeLayer(st.labels);
      const v = isDark() ? "World_Dark_Gray" : "World_Light_Gray";
      st.tiles = L.tileLayer(`${ESRI}${v}_Base/MapServer/tile/{z}/{y}/{x}`, { attribution: short ? ATTR_SHORT : ATTR, maxZoom: 16 }).addTo(m);
      st.labels = L.tileLayer(`${ESRI}${v}_Reference/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16, pane: "shadowPane" }).addTo(m);
    };
    st.setTiles();
    m.on("focus", () => m.scrollWheelZoom.enable());
    m.on("blur", () => m.scrollWheelZoom.disable());
    maps.push(st);
    return m;
  }
  themeListeners.push(() => maps.forEach(s => s.setTiles()));
  const styleFor = (status, hl) => {
    const base = { color: statusColor(status), weight: hl ? 8 : 4.5, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null };
    if (status === "Open Interim") base.dashArray = "10 7";
    if (status === "Design") base.dashArray = "8 8";
    if (status === "Planned") { base.dashArray = "1 9"; base.weight = hl ? 9 : 6; }
    if (status === "Study") { base.dashArray = "6 7"; base.weight = hl ? 8 : 5; }
    if (status === "Identify") { base.dashArray = "1 7"; base.weight = hl ? 7 : 4; }
    return base;
  };
  const featsFor = ids => feats.filter(f => ids.includes(f.properties.id));
  const boundsFor = ids => L.geoJSON({ type: "FeatureCollection", features: featsFor(ids) }).getBounds();
  const allBounds = L.geoJSON(REACHES).getBounds();

  /* ---------- Intro: two-tone map + chapters ---------- */
  const isGap = p => UNBUILT.includes(p.status) && !NOT_GAP.includes(p.id);
  const isOpen = p => p.status.startsWith("Open");
  const introMap = makeMap("introMap", { zoomControl: false, dragging: !L.Browser.mobile, tap: false }, true);
  const introStyle = (p, dim) => isGap(p)
    ? { color: css("--planned"), weight: 6, opacity: dim ? .35 : 1, dashArray: "1 9", lineCap: "round" }
    : isOpen(p) ? { color: css("--open"), weight: 5, opacity: dim ? .3 : 1, dashArray: null, lineCap: "round" }
    : { opacity: 0 };
  let introSel = null;
  const introTrail = L.geoJSON(REACHES, { style: f => introStyle(f.properties, false), interactive: false }).addTo(introMap);
  const introHalo = L.layerGroup().addTo(introMap);
  INTRO_MARKS
    .forEach(([n, ll, dir]) => L.marker(ll, { icon: L.divIcon({ className: "", html: '<div class="lm-icon"></div>', iconSize: [12, 12], iconAnchor: [6, 6] }), interactive: false })
      .bindTooltip(n, { permanent: true, direction: dir, className: "lm-label", offset: [dir === "left" ? -6 : 6, 0] }).addTo(introMap));
  const INTRO_PAD = typeof INTRO_FIT !== "undefined" ? INTRO_FIT : { paddingTopLeft: [24, 40], paddingBottomRight: [120, 24] };
  const introFit = () => introMap.fitBounds(allBounds, INTRO_PAD);
  introFit();
  const introShow = ch => {
    if (introSel === ch) return; introSel = ch;
    introHalo.clearLayers();
    introTrail.eachLayer(l => l.setStyle(introStyle(l.feature.properties, !!ch && !ch.r.includes(l.feature.properties.id))));
    $$("#chapters .chapter").forEach(c => c.classList.toggle("active", !!ch && c.dataset.n === ch.n));
    const cap = $("#introMapCap");
    if (!ch) {
      cap.innerHTML = `<strong>The whole trail</strong><span>${esc(INTRO_CAP)}</span>`;
      introMap.flyToBounds(allBounds, { ...INTRO_PAD, duration: REDUCED_I ? 0 : .8 }); return;
    }
    L.geoJSON({ type: "FeatureCollection", features: featsFor(ch.r) }, { style: { color: css("--accent"), weight: 16, opacity: .22, lineCap: "round" }, interactive: false }).addTo(introHalo);
    cap.innerHTML = `<strong>Chapter ${ch.n} of 3 · ${esc(ch.t)}</strong><span>${esc(ch.sub)}</span>`;
    introMap.flyToBounds(boundsFor(ch.r), { padding: [40, 40], duration: REDUCED_I ? 0 : .8 });
  };
  const REDUCED_I = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const chMiles = ch => {
    const fs = featsFor(ch.r).filter(f => MAINLINE.includes(f.properties.id));
    const sum = pred => [...new Set(fs.filter(f => pred(f.properties)).map(f => f.properties.id))].reduce((s, id) => s + reachMi(id), 0);
    return { open: sum(isOpen), gap: sum(isGap) };
  };
  CHAPTERS.forEach(ch => {
    const { open, gap } = chMiles(ch);
    const p = PHOTO_BY_F[ch.ph];
    const el = h("article", { class: "chapter", "data-n": ch.n, tabindex: "0" }, `
      <button class="chapter-img" data-photo="${esc(p.f)}" aria-label="Enlarge photo: ${esc(p.c)}"><img loading="lazy" src="${fp(p.f, 900)}" alt="${esc(p.c)}"><span class="chapter-n">${ch.n}</span></button>
      <div class="chapter-body">
        <h3>${esc(ch.t)}</h3><p class="chapter-sub">${esc(ch.sub)}</p>
        <p>${esc(ch.x)}</p>
        <div class="chapter-miles"><span class="cm-bar"><span class="cm-open" style="flex:${open}"></span><span class="cm-gap" style="flex:${gap || 0.0001}"></span></span>
          <span><strong>${open.toFixed(1)} mi</strong> open${gap > 0.05 ? ` · <strong class="gap-t">${gap.toFixed(1)} mi</strong> not built` : " · no gaps"}</span></div>
        <small class="muted">Photo: ${esc(p.c)} · ${esc(p.a)}, ${esc(p.l)}</small>
      </div>`);
    el.addEventListener("click", e => { if (!e.target.closest("button")) introShow(ch); });
    el.addEventListener("focusin", () => introShow(ch));
    $("#chapters").appendChild(el);
  });
  // Scroll-driven: the chapter crossing the middle of the screen takes over the map.
  // Above the first chapter the map shows the whole trail.
  let introTimer;
  const introPick = () => {
    const line = innerHeight * 0.5;
    const cards = $$("#chapters .chapter");
    let pick = null;
    for (const c of cards) { const r = c.getBoundingClientRect(); if (r.top < line) pick = c; }
    const first = cards[0].getBoundingClientRect();
    if (first.top > line) pick = null;
    const ch = pick ? CHAPTERS.find(x => x.n === pick.dataset.n) : null;
    clearTimeout(introTimer);
    introTimer = setTimeout(() => introShow(ch), 120);
  };
  addEventListener("scroll", () => {
    const r = $("#intro").getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) introPick();
  }, { passive: true });
  themeListeners.push(() => { introTrail.eachLayer(l => l.setStyle(introStyle(l.feature.properties, !!introSel && !introSel.r.includes(l.feature.properties.id)))); });

  /* ---------- Pull quotes ---------- */
  $("#quotes").innerHTML = (typeof QUOTES === "undefined" ? [] : QUOTES).map(q =>
    `<figure class="pq"><blockquote>${esc(q.q)}</blockquote><figcaption><span><strong>${esc(q.who)}</strong>${esc(q.role ? ", " + q.role : "")}</span><a href="${q.u}" ${ext}>${esc(q.src)} ↗</a></figcaption></figure>`).join("");

  /* ---------- Main map ---------- */
  const map = makeMap("leaflet");
  const activeStatus = new Set(Object.keys(STATUS));
  const layerById = {};
  let highlighted = null;

  const schFor = id => SCHEMATICS.filter(s => s.r.length <= 4 && (s.r.includes(id) || s.r.includes(PARENT[id]))).slice(0, 3);
  const popupHTML = p => {
    const s = STATUS[p.status], note = REACH_NOTES[p.id] || REACH_NOTES[p.id.replace("-D", "")];
    const owner = OWNERS[p.owner] || "";
    return `<div class="pop"><span class="tag" style="background:${statusColor(p.status)}">${s.label}</span>
      <h4>${esc(p.name)}</h4>
      <div class="meta">${p.id && p.id !== "Connector" ? esc(p.id) + " · " : ""}${p.mi.toFixed(2)} mi${owner ? " · " + esc(owner) : ""}${p.opened ? " · opened " + p.opened : ""}</div>
      ${note ? `<p>${esc(note.text)}</p>${note.src ? `<p><a href="${note.src}" ${ext}>Source ↗</a></p>` : ""}` : ""}
      ${schFor(p.id).map(x => `<button class="pop-sch" data-sch="${x.k}"><img src="${schImg(x, true)}" alt=""><span>Plan sheet<small>${esc(x.t)}</small></span></button>`).join("")}</div>`;
  };

  const trailLayer = L.geoJSON(REACHES, {
    style: f => styleFor(f.properties.status),
    onEachFeature: (f, layer) => {
      (layerById[f.properties.id] ||= []).push(layer);
      layer.bindPopup(() => popupHTML(f.properties), { maxWidth: 300 });
      layer.on("mouseover", () => layer.setStyle({ weight: styleFor(f.properties.status).weight + 3 }));
      layer.on("mouseout", () => { if (highlighted !== f.properties.id) layer.setStyle(styleFor(f.properties.status)); });
    },
  }).addTo(map);
  map.fitBounds(allBounds, { padding: [20, 20] });

  const lmLayer = L.layerGroup().addTo(map);
  const lmMarkers = LANDMARKS.map(l => ({
    key: !!l.key,
    m: L.marker(l.ll, { icon: L.divIcon({ className: "", html: '<div class="lm-icon"></div>', iconSize: [12, 12], iconAnchor: [6, 6] }), keyboard: false, interactive: false })
      .bindTooltip(l.name, { permanent: true, direction: "right", className: "lm-label", offset: [6, 0] }),
  }));
  const lmToggle = () => { const z = map.getZoom(); lmMarkers.forEach(({ m, key }) => (key || z >= 13) ? lmLayer.addLayer(m) : lmLayer.removeLayer(m)); };
  map.on("zoomend", lmToggle); lmToggle();

  const photoLayer = L.layerGroup().addTo(map);
  const photoMarker = {};
  PHOTOS.filter(p => p.ll).forEach(p => {
    const m = L.marker(p.ll, {
      icon: L.divIcon({ className: "", html: `<div class="ph-pin"><img src="${fp(p.f, 120)}" alt="" loading="lazy"></div>`, iconSize: [38, 38], iconAnchor: [19, 19] }),
      riseOnHover: true, title: p.c,
    }).bindPopup(`<div class="pop pop-photo"><button class="pop-img" data-photo="${esc(p.f)}"><img src="${fp(p.f, 640)}" alt="${esc(p.c)}"></button>
      <h4>${esc(p.c)}</h4><div class="meta">${esc(p.a)} · ${esc(p.l)} · ${p.y}${p.approx ? " · location approximate" : ""}</div></div>`, { maxWidth: 300, minWidth: 260 });
    m.addTo(photoLayer); photoMarker[p.f] = m;
  });
  const schLayer = L.layerGroup().addTo(map);
  const pinGroups = {};
  SCHEMATICS.filter(x => x.r.length <= 4).forEach(x => {
    const c = boundsFor(x.r).getCenter(), key = x.r.join("|");
    (pinGroups[key] ||= { c, items: [] }).items.push(x);
  });
  Object.values(pinGroups).forEach(({ c, items }) => {
    const first = items[0];
    const html = `<div class="sch-pin"><img src="${schImg(first, true)}" alt="">${items.length > 1 ? `<b>${items.length}</b>` : ""}</div>`;
    L.marker(c, { icon: L.divIcon({ className: "", html, iconSize: [32, 40], iconAnchor: [-6, 20] }), riseOnHover: true, title: items.map(x => x.t).join(" · ") })
      .bindPopup(`<div class="pop"><h4>${items.length > 1 ? items.length + " plan sheets here" : esc(first.t)}</h4>
        ${items.map(x => `<button class="pop-sch" data-sch="${x.k}"><img src="${schImg(x, true)}" alt=""><span>${esc(x.t)}<small>${esc(x.d)}</small></span></button>`).join("")}</div>`, { maxWidth: 300, minWidth: 260 })
      .addTo(schLayer);
  });

  const restyleAll = () => {
    trailLayer.eachLayer(l => {
      const p = l.feature.properties;
      if (!activeStatus.has(p.status)) { l.setStyle({ opacity: 0 }); return; }
      l.setStyle(styleFor(p.status, highlighted === p.id));
    });
  };
  function focusReach(id) {
    highlighted = id; restyleAll();
    const layers = layerById[id]; if (!layers) return;
    map.fitBounds(L.featureGroup(layers).getBounds(), { padding: [60, 60], maxZoom: 16 });
    layers[0].bringToFront(); layers[0].openPopup();
    $$(".reach-list li").forEach(li => li.classList.toggle("active", li.dataset.id === id));
    const li = $(`.reach-list li[data-id="${CSS.escape(id)}"]`);
    if (li) li.scrollIntoView({ block: "nearest" });
  }
  const showPhotoOnMap = f => {
    window.__beginProgScroll && window.__beginProgScroll();
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    const m = photoMarker[f]; if (!m) return;
    if (!map.hasLayer(photoLayer)) photoLayer.addTo(map);
    setTimeout(() => { map.setView(m.getLatLng(), 15); m.openPopup(); }, 500);
  };

  Object.entries(STATUS).forEach(([st, s]) => {
    const b = h("button", { class: "chip", "aria-pressed": "true" }, `<span class="dot ${s.cls}"></span>${s.label}`);
    b.addEventListener("click", () => {
      const on = b.getAttribute("aria-pressed") === "true";
      b.setAttribute("aria-pressed", String(!on));
      on ? activeStatus.delete(st) : activeStatus.add(st);
      restyleAll(); renderReachList();
    });
    $("#mapFilters").appendChild(b);
  });
  [["Photos", photoLayer, "ph-dot"], ["Plan sheets", schLayer, "sch-dot"]].forEach(([n, layer, cls]) => {
    const b = h("button", { class: "chip", "aria-pressed": "true" }, `<span class="dot ${cls}"></span>${n}`);
    b.addEventListener("click", () => {
      const on = b.getAttribute("aria-pressed") === "true";
      b.setAttribute("aria-pressed", String(!on));
      on ? map.removeLayer(layer) : layer.addTo(map);
    });
    $("#layerFilters").appendChild(b);
  });

  function renderReachList() {
    const list = $("#reachList"); list.innerHTML = "";
    // North → south: each side route sits right after the mainline reach it branches from.
    const extras = Object.keys(byId).filter(id => !MAINLINE.includes(id) && PARENT[id] && byId[id][0].properties.mi > 0.1);
    const ids = MAINLINE.flatMap(id => [id, ...extras.filter(x => PARENT[x] === id)]);
    ids.forEach(id => {
      const f = (byId[id] || [])[0]; if (!f) return;
      const p = f.properties; if (!activeStatus.has(p.status)) return;
      const side = !MAINLINE.includes(id);
      const kind = side ? (SIDE_KIND[id] || "Side route") + " · " : "";
      const li = h("li", { "data-id": id, tabindex: "0", class: side ? "side" : "" },
        `<span class="bar ${STATUS[p.status].cls}"></span><span><span class="nm">${esc(p.name)}</span><span class="st">${kind}${STATUS[p.status].label}${p.opened ? " · " + p.opened : ""}</span></span><span class="mi">${reachMi(id).toFixed(2)} mi</span>`);
      if (id === highlighted) li.classList.add("active");
      li.addEventListener("click", () => focusReach(id));
      li.addEventListener("keydown", e => { if (e.key === "Enter") focusReach(id); });
      list.appendChild(li);
    });
  }
  renderReachList();

  /* ---------- Timeline: sticky overview + time-machine map ---------- */
  const CATS = {
    build: { label: "Construction & openings", color: "--open" },
    fund:  { label: "Funding & costs",         color: "--planned" },
    plan:  { label: "Plans & policy",          color: "--design" },
    flood: { label: "Floods & Valley Water",   color: "--flood" },
    rail:  { label: "Railroad, BART & trestle", color: "--flood" },
    camp:  { label: "Encampments & safety",    color: "--muted" },
  };
  // Trail-specific category names, and only the categories this trail's timeline uses.
  if (typeof CAT_LABELS !== "undefined") Object.entries(CAT_LABELS).forEach(([k, v]) => { if (CATS[k]) CATS[k].label = v; });
  Object.keys(CATS).forEach(k => { if (!TIMELINE.some(e => e.cat === k)) delete CATS[k]; });
  const events = TIMELINE.map(e => ({ ...e, g: EVENT_GEO[e.d] || {}, yr: decYear(e.d) })).sort((a, b) => a.yr - b.yr);
  const activeCats = new Set(Object.keys(CATS));
  const T0 = Math.floor(events[0].yr / 5) * 5 - 1, T1 = Math.ceil(events[events.length - 1].yr / 5) * 5 + 1;
  const pctOf = y => (y - T0) / (T1 - T0) * 100;

  // Filter: "All" or a single category. Filtering hides cards in place and keeps the
  // event you were reading anchored on screen, so the page doesn't jump.
  let catFilter = "all";
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const chipDefs = [["all", { label: "All events" }], ...Object.entries(CATS)];
  chipDefs.forEach(([k, c]) => {
    const b = h("button", { class: "chip", "aria-pressed": String(k === "all"), "data-cat": k },
      (c.color ? `<span class="dot" style="background:var(${c.color})"></span>` : "") + c.label);
    b.addEventListener("click", () => setFilter(catFilter === k ? "all" : k));
    $("#tlFilters").appendChild(b);
  });

  const tlMap = makeMap("tlMap", { zoomControl: false }, true);
  const builtBy = (id, y) => BUILT[id] && BUILT[id].y <= y;
  const tlStyle = (p, y) => {
    if (UNBUILT.includes(p.status)) return { color: css("--planned"), weight: 3.5, opacity: .6, dashArray: "1 7", lineCap: "round" };
    if (builtBy(p.id, y)) return { ...styleFor(p.status), weight: 4.5 };
    return { color: css("--muted"), weight: 2.5, opacity: .5, dashArray: "3 6", lineCap: "round" };
  };
  const tlHalo = L.layerGroup().addTo(tlMap);
  const tlTrail = L.geoJSON(REACHES, { style: f => tlStyle(f.properties, T0), interactive: false }).addTo(tlMap);
  const tlPoint = L.layerGroup().addTo(tlMap);
  tlMap.fitBounds(allBounds, { padding: [20, 20] });
  let curEvent = null;
  const openMiles = y => feats.filter(f => f.properties.status.startsWith("Open") && builtBy(f.properties.id, y)).reduce((s, f) => s + f.properties.mi, 0);

  function showEventOnMap(e) {
    const y = Math.min(e.yr, 2026.9);
    tlTrail.eachLayer(l => l.setStyle(tlStyle(l.feature.properties, y)));
    tlHalo.clearLayers(); tlPoint.clearLayers();
    const ids = e.g.r || [];
    if (ids.length) L.geoJSON({ type: "FeatureCollection", features: featsFor(ids) }, { style: { color: css("--accent"), weight: 14, opacity: .3, lineCap: "round" }, interactive: false }).addTo(tlHalo);
    if (e.g.pt) L.marker(e.g.pt, { icon: L.divIcon({ className: "", html: '<div class="pulse"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false }).addTo(tlPoint);
    let b = ids.length ? boundsFor(ids) : null;
    if (e.g.pt) b = b ? b.extend(e.g.pt) : L.latLng(e.g.pt).toBounds(900);
    if (!b) b = allBounds;
    const r = $("#tlMapWrap").getBoundingClientRect();
    const onScreen = r.bottom > 0 && r.top < innerHeight;
    if (onScreen && !REDUCED) tlMap.flyToBounds(b, { padding: [36, 36], maxZoom: 15, duration: 0.8 });
    else tlMap.fitBounds(b, { padding: [36, 36], maxZoom: 15, animate: false });
    $("#tlMapTitle").textContent = e.future ? `Expected: ${fmtD(e.d)}` : `Trail as of ${fmtD(e.d)}`;
    const where = ids.length ? extentLabel(ids) : (e.g.w || "");
    $("#tlMapSub").textContent = `${openMiles(y).toFixed(1)} mi open${where ? " · " + where : ""}${feats.some(f => BUILT[f.properties.id]?.approx && BUILT[f.properties.id].y <= y) ? " · some opening years approximate" : ""}`;
  }

  // Programmatic scrolls (nav links, year-strip dots, "show on map") must not play the
  // timeline as they pass through it: ignore cards until the scroll settles, then sync.
  let progScroll = false, idleT = null;
  const syncFromViewport = () => {
    const line = innerHeight * 0.47;
    const lis = $$("#tlList li").filter(li => !li.hidden);
    let best = null, bestD = Infinity;
    for (const li of lis) {
      const r = li.getBoundingClientRect();
      const d = r.top <= line && r.bottom >= line ? 0 : Math.min(Math.abs(r.top - line), Math.abs(r.bottom - line));
      if (d < bestD) { bestD = d; best = li; }
    }
    if (best) setActive(+best.dataset.i, true);
  };
  const endProgScroll = () => { progScroll = false; syncFromViewport(); };
  const beginProgScroll = () => { progScroll = true; clearTimeout(idleT); idleT = setTimeout(endProgScroll, 900); };
  addEventListener("scroll", () => { if (!progScroll) return; clearTimeout(idleT); idleT = setTimeout(endProgScroll, 180); }, { passive: true });
  window.__beginProgScroll = beginProgScroll;
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute("href"), t = id.length > 1 && document.querySelector(id);
    if (!t) return;
    e.preventDefault(); beginProgScroll();
    t.scrollIntoView({ behavior: REDUCED ? "instant" : "smooth", block: "start" });
    history.replaceState(null, "", id);
  });
  let mapTimer = null;
  const liOf = i => $(`#tlList li[data-i="${i}"]`);
  function setActive(i, immediate = false) {
    if (progScroll || curEvent === i) return;
    curEvent = i;
    const e = events[i];
    $$("#tlList li.active").forEach(x => x.classList.remove("active"));
    const li = liOf(i); if (li) li.classList.add("active");
    $$("#tlOverview .ev.active").forEach(x => x.classList.remove("active"));
    const dot = $(`#tlOverview .ev[data-i="${i}"]`); if (dot) dot.classList.add("active");
    $("#tlCursor").style.left = pctOf(e.yr) + "%";
    $("#tlNowDate").textContent = fmtD(e.d);
    // The map only moves once the reader settles on an event, so scrolling past
    // the timeline doesn't replay every event.
    clearTimeout(mapTimer);
    mapTimer = setTimeout(() => showEventOnMap(e), immediate ? 0 : 280);
  }
  const visible = e => catFilter === "all" || e.cat === catFilter;

  function setFilter(k) {
    if (k === catFilter) return;
    const anchor = curEvent != null ? liOf(curEvent) : null;
    const anchorTop = anchor ? anchor.getBoundingClientRect().top : null;
    const sec = $("#timeline").getBoundingClientRect();
    const reading = sec.top < innerHeight * 0.4 && sec.bottom > innerHeight * 0.6;
    catFilter = k;
    $$("#tlFilters .chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === k)));
    events.forEach((e, i) => {
      liOf(i).hidden = !visible(e);
      $(`#tlOverview .ev[data-i="${i}"]`).classList.toggle("dim", !visible(e));
    });
    // keep the current event if it survives the filter, else the nearest one in time
    let target = curEvent;
    if (target == null || !visible(events[target])) {
      const ref = target == null ? events[0].yr : events[target].yr;
      target = events.map((e, i) => [Math.abs(e.yr - ref), i]).filter(([, i]) => visible(events[i])).sort((x, y) => x[0] - y[0])[0]?.[1];
    }
    if (target == null) return;
    if (reading && anchorTop != null) {
      const dy = liOf(target).getBoundingClientRect().top - anchorTop;
      window.scrollTo({ top: scrollY + dy, behavior: "instant" });
    }
    curEvent = null;
    setActive(target, true);
  }

  const SC_ICON = { good: "✓", warn: "!", bad: "✕", unk: "?", pend: "◷" };
  const SC_LABEL = { good: "Yes", warn: "Partly", bad: "No", unk: "Not reported", pend: "In progress" };
  const scorecardHTML = rows => `<dl class="scorecard">${rows.map(([k, s, v]) =>
    `<div class="sc-row sc-${s}"><dt><span class="sc-ic" aria-hidden="true">${SC_ICON[s]}</span>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
  function buildTimeline() {
    const list = $("#tlList"), ov = $("#tlOverview");
    const tickStep = T1 - T0 > 60 ? 10 : 5;
    for (let y = Math.ceil((T0 + 1) / tickStep) * tickStep; y <= T1 - 1; y += tickStep) {
      const t = h("span", { class: "tick" }, String(y)); t.style.left = pctOf(y) + "%"; ov.appendChild(t);
    }
    const io = new IntersectionObserver(entries => {
      const vis = entries.filter(en => en.isIntersecting);
      if (vis.length) setActive(+vis[vis.length - 1].target.dataset.i);
    }, { rootMargin: "-45% 0px -50% 0px" });
    const rows = {};
    events.forEach((e, i) => {
      const c = CATS[e.cat];
      const li = h("li", { id: "ev" + i, "data-i": i, class: e.future ? "future" : "" });
      li.style.setProperty("--c", `var(${c.color})`);
      const ph = (e.g.ph || []).map(f => PHOTO_BY_F[f]).filter(Boolean);
      const schs = [].concat(e.g.sch || []).map(k => SCH_BY_K[k]).filter(Boolean);
      const where = e.g.r ? extentLabel(e.g.r) : (e.g.w || "");
      const media = ph.map(p => `<button class="tl-ph" data-photo="${esc(p.f)}" title="${esc(p.c)}"><img loading="lazy" src="${fp(p.f, 400)}" alt="${esc(p.c)}"><span>${esc(p.c)}<small>${esc(p.a)} · ${esc(p.l)}</small></span></button>`).join("") +
        schs.map(sch => `<button class="tl-ph tl-sch" data-sch="${sch.k}" title="${esc(sch.t)}"><img loading="lazy" src="${schImg(sch, true)}" alt="${esc(sch.t)}"><span>${esc(sch.short || "Plan sheet")}<small>${esc(sch.d)}</small></span></button>`).join("");
      li.innerHTML = `<div class="card tl-card"><div class="tl-date">${fmtD(e.d)}${e.future ? " · expected" : ""}<span class="tl-cat">${c.label}</span></div>
        <h3>${esc(e.t)}</h3><p>${esc(e.x)}</p>
        ${where ? `<div class="tl-where">${pinSvg}${esc(where)}</div>` : ""}
        ${OUTCOMES[e.d] ? scorecardHTML(OUTCOMES[e.d]) : ""}
        ${media ? `<div class="tl-media">${media}</div>` : ""}
        <div class="srcs">${e.s.map(([n, u]) => `<a href="${u}" ${ext}>${esc(n)}</a>`).join("")}</div></div>`;
      li.addEventListener("click", ev => { if (!ev.target.closest("a,button")) { curEvent = null; setActive(i, true); } });
      list.appendChild(li); io.observe(li);
      const pct = pctOf(e.yr), bucket = Math.round(pct * 1.4);
      const row = rows[bucket] = (rows[bucket] || 0) + 1;
      const dot = h("button", { class: "ev" + (e.future ? " future" : ""), "data-i": i, "aria-label": `${fmtD(e.d)}: ${e.t}` });
      dot.style.left = pct + "%"; dot.style.bottom = (8 + (row - 1) * 11) + "px";
      dot.style.setProperty("--c", `var(${c.color})`);
      dot.addEventListener("mousemove", ev => showTip(ev, `<b>${esc(e.t)}</b>${fmtD(e.d)}`));
      dot.addEventListener("mouseleave", hideTip);
      dot.addEventListener("click", () => {
        if (!visible(e)) setFilter("all");
        beginProgScroll();
        const top = li.getBoundingClientRect().top + scrollY - innerHeight * 0.45 + 20;
        window.scrollTo({ top, behavior: REDUCED ? "instant" : "smooth" });
      });
      ov.appendChild(dot);
    });
    setActive(0, true);
  }
  buildTimeline();

  const syncSticky = () => {
    document.documentElement.style.setProperty("--top-h", $(".topbar").offsetHeight + "px");
    document.documentElement.style.setProperty("--tl-h", $("#tlSticky").offsetHeight + "px");
    maps.forEach(s => s.m.invalidateSize());
  };
  addEventListener("resize", syncSticky); syncSticky();

  /* ---------- Cost charts ---------- */
  function barChart(el, rows, max, fmt) {
    el.innerHTML = "";
    rows.forEach(r => {
      const row = h("div", { class: "brow" + (r.est ? " est" : "") }, `<div class="lab">${esc(r.label)}<small>${esc(r.sub || "")}</small></div><div class="btrack"><div class="bfill" style="width:0"></div><span class="bval">${fmt(r.v)}</span></div>`);
      row.addEventListener("mousemove", e => showTip(e, r.tip));
      row.addEventListener("mouseleave", hideTip);
      el.appendChild(row);
      requestAnimationFrame(() => requestAnimationFrame(() => { row.querySelector(".bfill").style.width = `max(3px, calc((100% - 72px) * ${(r.v / max).toFixed(4)}))`; }));
    });
  }
  function renderCharts() {
    const byCost = PROJECTS.slice().sort((a, b) => b.cost - a.cost);
    barChart($("#costBars"), byCost.map(p => ({
      label: p.name, sub: `${p.year}${p.mi ? " · " + p.mi + " mi" : " · " + (p.kind || "bridge")}`, v: p.cost,
      tip: `<b>${esc(p.name)}</b>Total $${p.cost.toFixed(2)}M${p.contract ? ` · contract $${p.contract.toFixed(2)}M` : ""}<br>${esc(p.funding)}`,
    })), Math.max(...byCost.map(p => p.cost)), v => "$" + v.toFixed(1) + "M");
    const byPM = builtProjects.map(p => ({ ...p, sub: `built ${p.year} · ${p.mi} mi` })).concat(PM_EST.map(p => ({ ...p, est: true })))
      .sort((a, b) => perMileOf(b) - perMileOf(a));
    barChart($("#perMileBars"), byPM.map(p => ({
      label: p.name, sub: p.sub, v: perMileOf(p), est: p.est,
      tip: `<b>${esc(p.name)}</b>$${p.cost.toFixed(2)}M ÷ ${p.mi} mi${p.note ? "<br>" + esc(p.note) : ""}${p.est ? "<br><i>Estimate or benchmark, not money spent</i>" : ""}`,
    })), Math.max(...byPM.map(perMileOf)), v => "$" + v.toFixed(1) + "M");
  }
  renderCharts();

  $("#projTable").innerHTML = `<thead><tr><th>Project</th><th class="num">Opened</th><th class="num">Miles</th><th class="num">Contract</th><th class="num">Total cost</th><th class="num">$/mile</th><th>Funding</th><th>Source</th></tr></thead><tbody>` +
    PROJECTS.map(p => `<tr><td>${esc(p.name)} <span class="muted">${p.id}</span></td><td class="num">${p.year}</td><td class="num">${p.mi ?? "–"}</td><td class="num">${p.contract ? "$" + p.contract.toFixed(2) + "M" : "–"}</td><td class="num">$${p.cost.toFixed(2)}M</td><td class="num">${p.mi ? "$" + perMileOf(p).toFixed(1) + "M" : "–"}</td><td>${esc(p.funding)}</td><td><a href="${p.src}" ${ext}>Source ↗</a></td></tr>`).join("") +
    `<tr><td><strong>Total</strong></td><td></td><td class="num">${builtProjects.length ? builtProjects.reduce((a, p) => a + p.mi, 0).toFixed(2) : "–"}</td><td></td><td class="num"><strong>$${spent.toFixed(2)}M</strong></td><td class="num">${builtProjects.length ? "$" + avgPM.toFixed(1) + "M" : "–"}</td><td colspan="2"></td></tr></tbody>`;

  /* ---------- Delivery scorecard ---------- */
  const pill = (s, txt) => `<span class="sc-pill sc-${s}"><span aria-hidden="true">${{ good: "✓", warn: "!", bad: "✕", unk: "?" }[s]}</span>${esc(txt)}</span>`;
  const DH = typeof DELIVERY_HEAD !== "undefined" ? DELIVERY_HEAD : ["Project", "Planned finish (at award)", "Actually opened", "Budget at award", "Final"];
  $("#deliveryTable").innerHTML = `<thead><tr>${DH.map(t => `<th>${esc(t)}</th>`).join("")}<th></th></tr></thead><tbody>` +
    DELIVERY.map(([n, pl, ac, ss, b, f, bs, src]) => `<tr><td><strong>${esc(n)}</strong></td><td>${esc(pl)}</td><td>${pill(ss, ac)}</td><td>${esc(b)}</td><td>${pill(bs, f)}</td><td><a href="${src}" ${ext}>Memo ↗</a></td></tr>`).join("") + `</tbody>`;

  /* ---------- Official estimate table ---------- */
  if (OFFICIAL_EST) {
    const mpMax = Math.max(...OFFICIAL_EST.rows.map(r => r[3]));
    $("#mpTable").innerHTML = `<thead><tr>${OFFICIAL_EST.head.map((t, i) => `<th${i === 1 ? ' class="num"' : ""}>${t}</th>`).join("")}</tr></thead><tbody>` +
      OFFICIAL_EST.rows.map(([n, nm, mi, c, x]) => `<tr><td><strong>${esc(n)}</strong> · ${esc(nm)}</td><td class="num">${mi == null ? "–" : mi.toFixed(2)}</td><td><span class="mp-bar"><span style="width:${c / mpMax * 100}%"></span></span>${c < 1 ? "$" + Math.round(c * 1000) + "K" : "$" + c.toFixed(2) + "M"}</td><td>${esc(x)}</td></tr>`).join("") +
      (OFFICIAL_EST.total ? `<tr><td><strong>Total</strong></td><td class="num"><strong>${OFFICIAL_EST.total[0]}</strong></td><td><strong>${OFFICIAL_EST.total[1]}</strong></td><td></td></tr>` : "") + `</tbody>`;
  }

  /* ---------- Estimator ---------- */
  const slider = $("#perMile");
  const presets = PRESETS.map(p => [p.label, p.pm ?? avgPM]);
  presets.forEach(([n, v]) => {
    const b = h("button", { class: "chip", "aria-pressed": "false" }, `${n} · $${v.toFixed(1)}M/mi`);
    b.addEventListener("click", () => { slider.value = v.toFixed(1); updateEst(); });
    $("#presets").appendChild(b);
  });
  function renderGapTable() {
    const pm = +slider.value;
    $("#gapTable").innerHTML = `<thead><tr><th>Gap</th><th class="num">Miles</th><th>Status &amp; notes</th><th class="num">Est. cost</th></tr></thead><tbody>` +
      GAPS.map(g => `<tr><td><span class="gname"><span class="pill" style="background:${statusColor(g.status)}">${g.status}</span>${esc(g.name)}</span></td><td class="num">${g.mi.toFixed(2)}</td><td>${esc(g.hard)}</td><td class="num">$${(g.mi * pm).toFixed(1)}M</td></tr>`).join("") +
      EST_EXTRAS.map(x => `<tr><td>${esc(x.name)}</td><td class="num">–</td><td>${esc(x.note)}</td><td class="num">$${x.cost.toFixed(1)}M</td></tr>`).join("") +
      `<tr><td><strong>Total</strong></td><td class="num"><strong>${gapMi.toFixed(2)}</strong></td><td></td><td class="num"><strong>$${estimate(pm).toFixed(1)}M</strong></td></tr></tbody>`;
  }
  function updateEst() {
    const pm = +slider.value;
    $("#perMileVal").textContent = `$${pm.toFixed(1)}M`;
    $("#estNum").textContent = fmtM(estimate(pm));
    $("#estSub").textContent = `${gapMi.toFixed(1)} mi × $${pm.toFixed(1)}M${EST_EXTRAS.length ? " + " + EST_EXTRAS.map(x => x.short || x.name).join(" + ") : ""}`;
    $$("#presets .chip").forEach((b, i) => b.setAttribute("aria-pressed", String(Math.abs(presets[i][1] - pm) < 0.06)));
    renderGapTable();
  }
  slider.addEventListener("input", updateEst);
  slider.value = (typeof DEFAULT_PM !== "undefined" ? DEFAULT_PM : avgPM).toFixed(1);
  updateEst();

  /* ---------- Documents: locator map ---------- */
  const docMap = makeMap("docMap", { zoomControl: false }, true);
  const docStyle = p => ({ ...styleFor(p.status), weight: 3, opacity: .45 });
  const docBase = L.geoJSON(REACHES, { style: f => docStyle(f.properties), interactive: false }).addTo(docMap);
  const docHl = L.layerGroup().addTo(docMap);
  docMap.fitBounds(allBounds, { padding: [16, 16] });
  let docTimer, docSel = null, docCur = undefined;
  const docShow = (ids, title) => {
    clearTimeout(docTimer);
    docTimer = setTimeout(() => {
      if (docCur === title) return;
      docCur = title;
      docHl.clearLayers();
      const cap = $("#docMapCap");
      if (!ids) {
        cap.innerHTML = title ? `<strong>${esc(title)}</strong><span>Whole corridor / not location-specific</span>` : `<strong>Hover over a document</strong><span>to see the stretch of trail it covers</span>`;
        docMap.flyToBounds(allBounds, { padding: [16, 16], duration: 0.6 });
        return;
      }
      const fc = { type: "FeatureCollection", features: featsFor(ids) };
      L.geoJSON(fc, { style: { color: css("--accent"), weight: 13, opacity: .3, lineCap: "round" }, interactive: false }).addTo(docHl);
      L.geoJSON(fc, { style: f => ({ ...styleFor(f.properties.status), weight: 5 }), interactive: false }).addTo(docHl);
      cap.innerHTML = `<strong>${esc(title)}</strong><span>${esc(extentLabel(ids))} · ${extentMi(ids).toFixed(1)} mi</span>`;
      docMap.flyToBounds(boundsFor(ids), { padding: [30, 30], maxZoom: 15, duration: 0.6 });
    }, 140);
  };
  const bindDoc = (el, ids, title) => {
    el.addEventListener("mouseenter", () => docShow(ids, title));
    el.addEventListener("focusin", () => docShow(ids, title));
    el.addEventListener("mouseleave", () => { if (docSel) docShow(docSel.ids, docSel.title); });
  };

  const SCH_BY = Object.fromEntries(SCHEMATICS.map(x => [x.k, x]));
  SCH_GROUPS.forEach(([title, keys]) => {
    $("#schGrid").appendChild(h("h4", { class: "sch-group" }, `${esc(title)} <span class="count">${keys.length}</span>`));
    const grid = h("div", { class: "sch-row" });
    keys.map(k => SCH_BY[k]).forEach(s => {
      const card = h("div", { class: "card sch-card", tabindex: "0" },
        `<button class="sch-img" data-sch="${s.k}" aria-label="Enlarge ${esc(s.t)}"><img loading="lazy" src="${schImg(s, true)}" alt="${esc(s.t)}"></button>
         <div class="sch-body"><strong>${esc(s.t)}</strong><span class="muted small">${esc(s.d)}</span>${locatorHTML(s.r)}
         <span class="sch-actions"><button class="link-btn" data-show>${pinSvg} Show on map</button><a href="${s.src}" ${ext}>Source PDF ↗</a></span></div>`);
      bindDoc(card, s.r, s.t);
      card.querySelector("[data-show]").addEventListener("click", () => { docSel = { ids: s.r, title: s.t }; docCur = undefined; docShow(s.r, s.t); });
      grid.appendChild(card);
    });
    $("#schGrid").appendChild(grid);
  });

  const pdfIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>`;
  const DATE_NOTE = { printed: "Date printed on the document", filed: "Date the environmental document was filed with the State Clearinghouse", file: "No date is printed; this is the PDF's creation date", undated: "The document carries no date", unverified: "Not yet checked against the document", inferred: "No date is printed; inferred from related documents", cited: "Date as cited in a later document" };
  const docDate = t => DOC_DATES[t] || ["", "unverified"];
  const dateChip = t => {
    const [dt, src] = docDate(t);
    const label = src === "undated" ? "Undated" : src === "unverified" ? "Date not verified" : fmtD(dt) + (src === "file" ? "*" : "");
    return `<span class="doc-date doc-date-${src}" title="${esc(DATE_NOTE[src])}">${esc(label)}</span>`;
  };
  const sortKey = t => { const [dt, src] = docDate(t); return src === "undated" ? "0000" : src === "unverified" ? "9999" : dt; };
  DOCS.forEach(g => {
    const grp = h("div", { class: "card doc-group" }, `<h3>${esc(g.g)} <span class="count">${g.items.length}</span></h3><ul></ul>`);
    g.items.slice().sort((x, y) => sortKey(x[0]).localeCompare(sortKey(y[0]))).forEach(([t, u]) => {
      const ids = DOC_GEO[t] === undefined ? null : DOC_GEO[t];
      const li = h("li", {}, `<a href="${u}" ${ext}>${pdfIcon}<span class="doc-t"><span class="doc-title"><span>${esc(t)}</span>${dateChip(t)}</span>${locatorHTML(ids)}</span></a>`);
      const [dt, src] = docDate(t);
      bindDoc(li, ids, t + (src === "printed" || src === "filed" || src === "file" ? " · " + fmtD(dt) : ""));
      grp.querySelector("ul").appendChild(li);
    });
    $("#docGrid").appendChild(grp);
  });
  $("#docGrid").insertAdjacentHTML("beforeend", `<p class="footnote">Each group is sorted by date. * marks documents with no printed date, which show the PDF's creation date instead. Hover over a date to see where it comes from. "Date not verified" means the PDF couldn't be retrieved to check.</p>`);
  $("#mapLinks").innerHTML = MAPS.map(m => `<a class="card link-card" href="${m.u}" ${ext}><span class="tag">${esc(m.tag)}</span><strong>${esc(m.t)}</strong><span class="d">${esc(m.d)}</span></a>`).join("");

  themeListeners.push(() => {
    restyleAll(); renderReachList(); renderCharts(); renderGapTable();
    docBase.eachLayer(l => l.setStyle(docStyle(l.feature.properties)));
    if (curEvent != null) { const i = curEvent; curEvent = null; setActive(i, true); }
  });

  /* ---------- News ---------- */
  const news = NEWS.slice().sort((a, b) => b[0].localeCompare(a[0]));
  function renderNews(q = "") {
    q = q.trim().toLowerCase();
    const hits = news.filter(n => !q || n.join(" ").toLowerCase().includes(q));
    $("#newsList").innerHTML = hits.map(([d, o, t, u, s]) => `<li><a class="card" href="${u}" ${ext}><span class="meta"><span class="outlet">${esc(o)}</span><span>${fmtD(d)}</span></span><strong>${esc(t)}</strong><span class="sum">${esc(s)}</span></a></li>`).join("");
    $("#newsCount").textContent = `${hits.length} of ${news.length} articles`;
  }
  $("#newsSearch").addEventListener("input", e => renderNews(e.target.value));
  renderNews();

  /* ---------- Photos (north → south) ---------- */
  const gal = $("#gallery");
  PHOTOS.slice().sort((a, b) => (b.ll ? b.ll[0] : -90) - (a.ll ? a.ll[0] : -90)).forEach(p => {
    const fig = h("figure", { tabindex: "0" }, `<img loading="lazy" src="${fp(p.f, 640)}" alt="${esc(p.c)}"><figcaption>${esc(p.c)}<small>${esc(p.a)} · ${esc(p.l)}</small></figcaption>${p.ll ? `<button class="gal-pin" title="Show on map" aria-label="Show ${esc(p.c)} on map">${pinSvg}Map</button>` : ""}`);
    fig.addEventListener("click", e => { if (e.target.closest(".gal-pin")) showPhotoOnMap(p.f); else openPhoto(p); });
    fig.addEventListener("keydown", e => { if (e.key === "Enter") openPhoto(p); });
    gal.appendChild(fig);
  });
})();
