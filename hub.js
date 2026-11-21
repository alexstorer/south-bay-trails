// Landing page: one map of every trail, a card per trail, and a comparison table. Data: data/hub.js.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const MONS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const fmtD = d => { const p = d.split("-"); return p.length === 3 ? `${MONS[+p[1] - 1]} ${+p[2]}, ${p[0]}` : d; };
  const fp = (f, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
  const T = HUB.trails;
  const isOpen = s => s.startsWith("Open");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme ---------- */
  const isDark = () => { const t = document.documentElement.dataset.theme; return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; };
  const themeListeners = [];
  $("#themeToggle").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("sbt-theme", next); } catch (e) {}
    themeListeners.forEach(f => f());
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => themeListeners.forEach(f => f()));

  /* ---------- Totals ---------- */
  const sum = k => T.reduce((s, t) => s + t[k], 0);
  const latest = T.map(t => t.updated).sort().pop();
  $("#hubUpdated").textContent = "Updated " + fmtD(latest);
  $("#hubTotals").innerHTML = [
    [T.length, "trails"],
    [sum("openMi").toFixed(0) + " mi", "open"],
    [sum("gapMi").toFixed(1) + " mi", "still missing"],
    [sum("docs"), "documents"],
  ].map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("");

  /* ---------- Strip: the trail north → south, open vs not ---------- */
  const stripHTML = t => `<span class="mini-strip" aria-hidden="true">${t.strip.map(([s, mi]) =>
    `<i class="${isOpen(s) ? "ms-open" : "ms-gap"}" style="flex:${mi} 0 0"></i>`).join("")}</span>`;

  /* ---------- Map ---------- */
  const map = L.map("hubMap", { zoomSnap: 0.25, scrollWheelZoom: false, zoomControl: true });
  map.attributionControl.setPrefix(false);
  map.on("focus", () => map.scrollWheelZoom.enable()); map.on("blur", () => map.scrollWheelZoom.disable());
  const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/";
  let tiles, labels;
  const setTiles = () => {
    if (tiles) map.removeLayer(tiles); if (labels) map.removeLayer(labels);
    const v = isDark() ? "World_Dark_Gray" : "World_Light_Gray";
    tiles = L.tileLayer(`${ESRI}${v}_Base/MapServer/tile/{z}/{y}/{x}`, { attribution: "© Esri, © OpenStreetMap · Trails: City of San José, OSM", maxZoom: 16 }).addTo(map);
    labels = L.tileLayer(`${ESRI}${v}_Reference/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16, pane: "shadowPane" }).addTo(map);
  };
  setTiles();

  const halo = L.layerGroup().addTo(map);
  const groups = {};                        // slug -> { lines: [{layer, s, m}], label }
  let sel = null, hov = null;
  const lineStyle = (g, state) => {         // state: "base" | "on" | "dim"
    const open = isOpen(g.s), w = g.m ? 1 : 0.6;
    const st = open
      ? { color: css("--open"), weight: (state === "on" ? 5.5 : 3.5) * w, dashArray: null }
      : { color: css("--planned"), weight: (state === "on" ? 5 : 3.5) * w, dashArray: "1 7" };
    return { ...st, opacity: state === "dim" ? 0.28 : 1, lineCap: "round", lineJoin: "round" };
  };
  const restyle = () => {
    const focus = hov || sel;
    Object.entries(groups).forEach(([slug, g]) => {
      const state = !focus ? "base" : slug === focus ? "on" : "dim";
      g.lines.forEach(l => l.layer.setStyle(lineStyle(l, state)));
      g.label.getElement()?.classList.toggle("dim", state === "dim");
      g.label.getElement()?.classList.toggle("on", state === "on");
    });
    halo.clearLayers();
    if (focus) {
      groups[focus].lines.filter(l => l.m).forEach(l => L.polyline(l.layer.getLatLngs(), { color: css("--accent"), weight: 16, opacity: .18, lineCap: "round", interactive: false }).addTo(halo));
      Object.values(groups[focus].lines).forEach(l => l.layer.bringToFront());
    }
    $$(".trail-card").forEach(c => c.classList.toggle("active", c.dataset.slug === focus));
  };
  const all = L.featureGroup().addTo(map);
  T.forEach(t => {
    const g = groups[t.slug] = { lines: [] };
    t.geom.forEach(seg => {
      const layer = L.polyline(seg.c, lineStyle(seg, "base"));
      layer.on("mouseover", () => { hov = t.slug; restyle(); });
      layer.on("mouseout", () => { hov = null; restyle(); });
      layer.on("click", () => select(t.slug, false));
      layer.addTo(all); g.lines.push({ layer, s: seg.s, m: seg.m });
    });
    // Direct label at the middle of the trail's longest mainline piece
    const longest = t.geom.filter(s => s.m).sort((a, b) => b.c.length - a.c.length)[0] || t.geom[0];
    const mid = longest.c[Math.floor(longest.c.length / 2)];
    g.label = L.marker(mid, { icon: L.divIcon({ className: "", html: "", iconSize: [0, 0] }), interactive: false })
      .bindTooltip(esc(t.name.replace(/ Trail$/, "")), { permanent: true, direction: "right", className: "trail-label", offset: [10, 0] }).addTo(map);
  });
  const fitAll = (anim) => map.fitBounds(all.getBounds(), { padding: [30, 30], animate: anim });
  fitAll(false);
  addEventListener("resize", () => { map.invalidateSize(); });

  const card = $("#hubMapCard");
  function select(slug, fly = true) {
    sel = slug; restyle();
    const t = T.find(x => x.slug === slug);
    card.hidden = false;
    card.innerHTML = `<button class="hmc-close" aria-label="Close">×</button>
      ${t.cover ? `<img src="${fp(t.cover.f, 640)}" alt="">` : ""}
      <div class="hmc-body"><h3>${esc(t.name)}</h3><p>${esc(t.tagline || "")}</p>${stripHTML(t)}
      <p class="hmc-nums"><strong>${t.openMi.toFixed(1)} mi</strong> open · <strong class="gap-t">${t.gapMi.toFixed(1)} mi</strong> missing</p>
      <a class="hmc-go" href="trails/${t.slug}/">Explore the ${esc(t.name)} →</a></div>`;
    card.querySelector(".hmc-close").addEventListener("click", () => { sel = null; card.hidden = true; restyle(); fitAll(!REDUCED); });
    if (fly) map.flyToBounds(t.bounds, { padding: [60, 60], maxZoom: 14, duration: REDUCED ? 0 : 0.8 });
  }

  /* ---------- Cards ---------- */
  $("#trailCards").innerHTML = T.map(t => `
    <li class="trail-card" data-slug="${t.slug}">
      <a href="trails/${t.slug}/">
        ${t.cover ? `<span class="tc-img"><img loading="lazy" src="${fp(t.cover.f, 320)}" alt=""></span>` : `<span class="tc-img"></span>`}
        <span class="tc-body">
          <strong>${esc(t.name)}</strong>
          <span class="tc-tag">${esc(t.tagline || "")}</span>
          ${stripHTML(t)}
          <span class="tc-nums">${t.openMi.toFixed(1)} mi open · <span class="gap-t">${t.gapMi.toFixed(1)} mi missing</span> · ${t.events} events · ${t.docs} documents</span>
        </span>
        <span class="tc-go" aria-hidden="true">→</span>
      </a>
    </li>`).join("");
  $$(".trail-card").forEach(c => {
    c.addEventListener("mouseenter", () => { hov = c.dataset.slug; restyle(); });
    c.addEventListener("mouseleave", () => { hov = null; restyle(); });
    c.addEventListener("focusin", () => { hov = c.dataset.slug; restyle(); });
    c.addEventListener("focusout", () => { hov = null; restyle(); });
  });

  /* ---------- Comparison table ---------- */
  const maxMi = Math.max(...T.map(t => t.mainMi));
  $("#compareTable").innerHTML = `<thead><tr><th>Trail</th><th class="num">Mapped</th><th class="num">Open</th><th class="num">Missing</th><th>North → south</th><th class="num">Documents</th><th class="num">Timeline</th><th></th></tr></thead><tbody>` +
    T.slice().sort((a, b) => b.mainMi - a.mainMi).map(t => `<tr>
      <td><strong>${esc(t.name)}</strong></td><td class="num">${t.mainMi.toFixed(1)} mi</td><td class="num">${t.openMi.toFixed(1)} mi</td>
      <td class="num">${t.gapMi.toFixed(1)} mi</td>
      <td class="cmp-strip"><span style="width:${(t.mainMi / maxMi * 100).toFixed(1)}%">${stripHTML(t)}</span></td>
      <td class="num">${t.docs}</td><td class="num">${t.span[0]}–${t.span[1]}</td><td><a href="trails/${t.slug}/">Open →</a></td></tr>`).join("") + `</tbody>`;

  themeListeners.push(() => { setTiles(); restyle(); });
})();
