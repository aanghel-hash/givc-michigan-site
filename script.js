/* =====================================================================
   GIRLS INTO VC — MICHIGAN · SCRIPT
   Builds the page from content.js and adds the interactions.
   You shouldn't need to edit this file.
   ===================================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, S); }
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icon(name, cls) { return '<svg class="' + (cls || "") + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  function mount(name, html) { var el = $('[data-mount="' + name + '"]'); if (el) el.innerHTML = html; return el; }
  function parseDate(str) { var p = str.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function isPast(str) {
    var end = parseDate(str); end.setHours(23, 59, 59, 999);
    return end < new Date();
  }
  function fmtDate(str) {
    var d = parseDate(str);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }
  function initials(name) { return name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join(""); }
  function swash(numHtml, attrs) {
    return '<span class="stat-num"' + (attrs || "") + '>' + icon("swash") + '<span>' + numHtml + '</span></span>';
  }
  function extLink(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; }

  /* ---------- simple text bindings ---------- */
  $$("[data-text]").forEach(function (el) { el.textContent = get(el.getAttribute("data-text")) || ""; });
  $$("[data-href]").forEach(function (el) { el.setAttribute("href", get(el.getAttribute("data-href")) || "#"); });

  var C = S.chapter;
  mount("est", "est. " + esc(C.founded));
  mount("meeting", icon("sparkle") + esc(C.meetingInfo));

  /* ---------- hero: floating icons + collage ---------- */
  var floaters = [
    { i: "sparkle", x: 4,  y: 14, s: 34, d: 7,   rot: -8, c: "var(--pink)" },
    { i: "chart",   x: 46, y: 8,  s: 36, d: 8.5, rot: 6,  c: "#1F4030", desk: true },
    { i: "rocket",  x: 92, y: 12, s: 38, d: 9,   rot: 12, c: "var(--pink-ink)" },
    { i: "bulb",    x: 88, y: 70, s: 34, d: 7.5, rot: -6, c: "var(--pink)" },
    { i: "coin",    x: 42, y: 84, s: 32, d: 8,   rot: 10, c: "#1F4030", desk: true },
    { i: "heart",   x: 6,  y: 78, s: 30, d: 6.5, rot: -12, c: "var(--pink-ink)" },
    { i: "sparkle", x: 58, y: 46, s: 22, d: 6,   rot: 20, c: "var(--pink)", desk: true },
    { i: "star",    x: 30, y: 4,  s: 24, d: 7,   rot: -10, c: "var(--pink)", desk: true }
  ];
  mount("floaters", floaters.map(function (f, n) {
    return '<svg class="floater' + (f.desk ? " desk" : "") + '" style="left:' + f.x + "%;top:" + f.y + "%;--s:" + f.s + "px;--d:" + f.d + "s;--delay:-" + (n * 0.9) + "s;--rot:" + f.rot + "deg;--c:" + f.c + '"><use href="#i-' + f.i + '"/></svg>';
  }).join(""));

  mount("collage", (S.heroPhotos || []).slice(0, 3).map(function (p) {
    return '<figure class="polaroid"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" width="400" height="500" fetchpriority="high"><figcaption>' + esc(p.note) + "</figcaption></figure>";
  }).join("") + icon("sprig", "sprig sprig-1") + icon("squiggle", "squiggle-1"));

  /* ---------- stats ---------- */
  mount("stats", S.stats.map(function (s) {
    return '<article class="stat reveal">' +
      swash("0" + esc(s.suffix), ' data-count="' + s.value + '" data-decimals="' + (s.decimals || 0) + '" data-suffix="' + esc(s.suffix) + '"') +
      '<p class="stat-label">' + esc(s.label) + "</p>" +
      (s.note ? '<p class="stat-note">' + esc(s.note) + "</p>" : "") +
      '<p class="stat-src">Source: <a href="' + esc(s.sourceUrl) + '" target="_blank" rel="noopener">' + esc(s.source) + "</a></p>" +
      "</article>";
  }).join(""));

  /* ---------- programs ---------- */
  var P = S.programs;
  if (P.tracks) mount("tracks", P.tracks.map(function (t) {
    return '<article class="track reveal"><h3>' + esc(t.name) + '</h3><p class="track-sum">' + esc(t.summary) + "</p><ol>" +
      t.steps.map(function (st) { return "<li><span>" + esc(st) + "</span></li>"; }).join("") + "</ol></article>";
  }).join(""));
  if (P.project) mount("project", '<div class="big-icon">' + icon("chart") + '</div><div><h3>' + esc(P.project.title) + "</h3><p>" + esc(P.project.text) + "</p></div>");

  var nextFound = false;
  mount("timeline", S.sessions.map(function (s) {
    var done = isPast(s.date);
    var next = !done && !nextFound;
    if (next) nextFound = true;
    return '<li class="tl-item reveal' + (done ? " done" : "") + (next ? " next" : "") + '">' +
      "<details" + (next ? " open" : "") + "><summary>" +
      '<span class="tl-date">' + esc(fmtDate(s.date)) + "</span>" +
      '<span class="tl-title">' + esc(s.title) + (done ? '<span class="visually-hidden"> (completed)</span>' : "") + "</span>" +
      (next ? '<span class="tl-tag">up next!</span>' : '<span class="tl-chev" aria-hidden="true">+</span>') +
      "</summary>" +
      '<div class="tl-body"><p>' + esc(s.topic) + "</p><p><strong>Deliverable:</strong> " + esc(s.deliverable) + "</p></div>" +
      "</details></li>";
  }).join(""));

  mount("others", P.other.map(function (o) {
    return '<article class="other reveal"><span class="ic">' + icon(o.icon) + "</span><h4>" + esc(o.title) + "</h4><p>" + esc(o.text) + "</p>" +
      (o.link ? '<a href="' + esc(o.link) + '"' + extLink(o.link) + ">" + esc(o.linkText || "Learn more") + "</a>" : "") + "</article>";
  }).join(""));

  /* ---------- events ---------- */
  var events = (S.events || []).slice().sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
  var upcoming = events.filter(function (e) { return !isPast(e.date); });
  var past = events.filter(function (e) { return isPast(e.date); }).reverse();
  var panelCount = events.filter(function (e) { return e.type === "panel"; }).length;

  mount("counters", [
    { n: panelCount, label: panelCount === 1 ? "panel" : "panels" },
    { n: (S.speakers || []).length, label: (S.speakers || []).length === 1 ? "speaker" : "speakers" },
    { n: S.sessions.length, label: "education sessions" }
  ].map(function (c) {
    return '<div class="counter reveal">' + swash("0", ' data-count="' + c.n + '" data-decimals="0" data-suffix=""') + "<p>" + esc(c.label) + "</p></div>";
  }).join(""));

  function meta(e) {
    var bits = [];
    if (e.time) bits.push(esc(e.time));
    if (e.location) bits.push(esc(e.location));
    return bits.length ? '<div class="event-meta">' + bits.map(function (b) { return "<span>" + b + "</span>"; }).join("") + "</div>" : "";
  }

  mount("upcoming", upcoming.length ? upcoming.map(function (e) {
    var d = parseDate(e.date);
    var chip = e.dateLabel
      ? '<div class="date-chip wide" aria-hidden="true"><span class="d">' + esc(e.dateLabel) + "</span></div>"
      : '<div class="date-chip" aria-hidden="true"><span class="m">' + MONTHS[d.getMonth()] + '</span><span class="d">' + d.getDate() + "</span></div>";
    var when = '<span class="visually-hidden">' + esc(e.dateLabel || fmtDate(e.date)) + ". </span>";
    var action = e.link
      ? '<a class="btn btn-primary" href="' + esc(e.link) + '" target="_blank" rel="noopener">Register</a>'
      : '<span class="soon">stay tuned!</span>';
    return '<article class="event reveal">' + chip + "<div><h4>" + when + esc(e.title) + "</h4>" + meta(e) + '<p class="event-desc">' + esc(e.description) + "</p></div>" + action + "</article>";
  }).join("") : '<p class="empty">New events are on the way. Follow us on Instagram to hear first.</p>');

  mount("past", past.length ? past.map(function (e) {
    return '<article class="past reveal"><span class="stamp">done!</span><h4>' + esc(e.title) + '</h4><div class="event-meta"><span>' +
      esc(e.dateLabel || fmtDate(e.date)) + "</span>" + (e.location ? "<span>" + esc(e.location) + "</span>" : "") + "</div><p>" + esc(e.description) + "</p></article>";
  }).join("") : '<p class="empty">Our first events are coming up.</p>');

  mount("speakers", (S.speakers || []).map(function (s) {
    var av = s.photo ? '<img src="' + esc(s.photo) + '" alt="">' : esc(initials(s.name));
    var isLinkedIn = /linkedin\.com/.test(s.link || "");
    var link = s.link
      ? '<a class="icon-link" href="' + esc(s.link) + '" target="_blank" rel="noopener" aria-label="' + esc(s.name) + (isLinkedIn ? " on LinkedIn" : " website") + '">' + icon(isLinkedIn ? "linkedin" : "link") + "</a>"
      : "<span></span>";
    return '<article class="speaker reveal"><div class="avatar" aria-hidden="true">' + av + "</div><div><h4>" + esc(s.name) + "</h4><p>" + esc(s.title) + "<br>" + esc(s.org) + "</p></div>" + link + "</article>";
  }).join(""));

  /* ---------- e-board flip cards ---------- */
  mount("board", S.eboard.map(function (m, i) {
    var first = m.name.split(" ")[0];
    var metaLine = [m.year, m.major].filter(Boolean).join(" · ");
    return '<article class="flip member reveal">' +
      '<div class="flip-inner">' +
        '<div class="face face-front">' +
          '<div class="photo"><img src="' + esc(m.photo) + '" alt="Headshot of ' + esc(m.name) + '" width="600" height="600"></div>' +
          '<div class="cap"><h3>' + esc(m.name) + "</h3><p>" + esc(m.role) + "</p></div>" +
          '<span class="flip-cue" aria-hidden="true">' + icon("flip") + "</span>" +
          '<button class="flip-btn" type="button" aria-label="More about ' + esc(m.name) + '"></button>' +
        "</div>" +
        '<div class="face face-back" inert>' +
          '<div class="back-card"><h3>' + esc(m.name) + '</h3><p class="role">' + esc(m.role) + "</p>" +
          (metaLine ? '<p class="meta">' + esc(metaLine) + "</p>" : "") +
          (m.bio ? '<p class="bio">' + esc(m.bio) + "</p>" : "") +
          (m.linkedin ? '<a class="btn" href="' + esc(m.linkedin) + '" target="_blank" rel="noopener">' + icon("linkedin") + "LinkedIn<span class=\"visually-hidden\"> for " + esc(m.name) + "</span></a>" : "") +
          "</div>" +
          '<button class="flip-btn" type="button" aria-label="Flip back to ' + esc(first) + "’s photo" + '" style="z-index:1"></button>' +
        "</div>" +
      "</div></article>";
  }).join(""));

  /* ---------- resources ---------- */
  mount("resources", S.resources.map(function (r) {
    return '<a class="resource reveal" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="ic">' + icon(r.icon) + "</span><h3>" + esc(r.title) + "</h3><p>" + esc(r.text) + '</p><span class="go">' + esc(r.cta) + '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a>';
  }).join(""));

  /* ---------- join ---------- */
  var J = S.join;
  var checklist = mount("checklist", J.checklist.map(function (c, i) {
    return '<li style="--i:' + i + '"><span class="tick">' + icon("check") + "</span>" + esc(c) + "</li>";
  }).join(""));
  mount("steps", J.steps.map(function (s) {
    return '<li class="step reveal"><h4>' + esc(s.title) + "</h4><p>" + esc(s.text) + "</p></li>";
  }).join(""));
  mount("perks", J.perks.map(function (p) {
    return '<article class="flip perk reveal"><div class="flip-inner">' +
      '<div class="face face-front"><span class="ic">' + icon(p.icon) + "</span><h4>" + esc(p.title) + '</h4><span class="flip-cue" aria-hidden="true">' + icon("flip") + "</span>" +
      '<button class="flip-btn" type="button" aria-label="' + esc(p.title) + ': show details"></button></div>' +
      '<div class="face face-back" inert><p>' + esc(p.text) + "</p>" +
      '<button class="flip-btn" type="button" aria-label="' + esc(p.title) + ': flip back"></button></div>' +
      "</div></article>";
  }).join(""));
  mount("faq", S.faq.map(function (f) {
    return '<details class="reveal"><summary><span>' + esc(f.q) + '</span><span class="tl-chev" aria-hidden="true">+</span></summary><p>' + esc(f.a) + "</p></details>";
  }).join(""));

  /* ---------- instagram + footer ---------- */
  mount("insta-btn", icon("instagram") + esc(C.instagramHandle));
  mount("insta", (S.instagramPhotos || []).slice(0, 3).map(function (p) {
    return '<figure class="polaroid"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" loading="lazy" width="400" height="500"></figure>';
  }).join(""));
  mount("footer", [
    '<li><a href="' + esc(C.instagramUrl) + '" target="_blank" rel="noopener">' + icon("instagram") + esc(C.instagramHandle) + "</a></li>",
    '<li><a href="' + esc(C.nationalUrl) + '" target="_blank" rel="noopener">' + icon("globe") + "Girls Into VC national</a></li>",
    '<li><a href="mailto:' + esc(C.email) + '">' + icon("mail") + esc(C.email) + "</a></li>"
  ].join(""));
  mount("copyright", "© " + new Date().getFullYear() + " " + esc(C.name) + ". A chapter of Girls Into VC.");

  /* ---------- interactions ---------- */

  // Flip cards: tap anywhere on the card (except links) to flip
  $$(".flip").forEach(function (card) {
    var front = $(".face-front", card), back = $(".face-back", card);
    function setFlipped(on) {
      card.classList.toggle("flipped", on);
      if (on) { front.setAttribute("inert", ""); back.removeAttribute("inert"); }
      else { back.setAttribute("inert", ""); front.removeAttribute("inert"); }
    }
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      var on = !card.classList.contains("flipped");
      setFlipped(on);
      var target = on ? $(".flip-btn", back) : $(".flip-btn", front);
      if (e.detail === 0 && target) setTimeout(function () { target.focus(); }, 50); // keyboard users keep focus
    });
  });

  // Count-up numbers
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-decimals"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var out = $("span", el);
    if (reduceMotion) { out.textContent = target.toFixed(dec) + suffix; return; }
    var start = null, dur = 1400;
    function step(t) {
      if (!start) start = t;
      var k = Math.min(1, (t - start) / dur);
      var eased = 1 - Math.pow(1 - k, 3);
      out.textContent = (target * eased).toFixed(dec) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Reveal on scroll
  var reveals = $$(".reveal").concat(checklist ? [checklist] : []);
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count]", en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
    $$("[data-count]").forEach(countUp);
  }

  // Mobile menu
  var toggle = $(".nav-toggle"), links = $("#nav-links");
  function closeMenu() { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("open"); }
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("open", open);
  });
  $$("a", links).forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  // Active nav link + sticky Join button
  var navLinks = $$(".nav-links a");
  var sections = navLinks.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
  var sticky = $(".sticky-join"), hero = $("#home"), join = $("#join");
  function onScroll() {
    var y = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s; });
    navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + current.id && current.id !== "join"); });
    var pastHero = window.scrollY > hero.offsetHeight * 0.7;
    var jr = join.getBoundingClientRect();
    var joinVisible = jr.top < window.innerHeight && jr.bottom > 0;
    sticky.classList.toggle("show", pastHero && !joinVisible);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Kick off the hero entrance
  requestAnimationFrame(function () { document.documentElement.classList.add("loaded"); });
})();
