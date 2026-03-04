import { courses } from './courses.js';

const API = "http://localhost:3000";

// ── Mission elements ──────────────────────────────────────
const titleEl          = document.getElementById("title");
const statementEl      = document.getElementById("statement");
const codeEl           = document.getElementById("code");
const resultEl         = document.getElementById("result");
const btnTest          = document.getElementById("btnTest");
const tracksEl         = document.getElementById("tracks");
const missionsListEl   = document.getElementById("missionsList");
const missionsLabelEl  = document.getElementById("missionsLabel");
const missionWelcomeEl = document.getElementById("missionWelcome");
const missionContentEl = document.getElementById("missionContent");
const trackBadgeEl     = document.getElementById("missionTrackBadge");
const diffBadgeEl      = document.getElementById("missionDiffBadge");

// ── View elements ─────────────────────────────────────────
const tabMissions   = document.getElementById("tabMissions");
const tabCours      = document.getElementById("tabCours");
const viewMissions  = document.getElementById("viewMissions");
const viewCours     = document.getElementById("viewCours");

// ── Course elements ───────────────────────────────────────
const courseTracksEl  = document.getElementById("courseTracks");
const chaptersListEl  = document.getElementById("chaptersList");
const courseBodyEl    = document.getElementById("courseBody");

// ── Mobile sidebar ────────────────────────────────────────
const btnMenu        = document.getElementById("btnMenu");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function getSidebars() {
  return document.querySelectorAll(".sidebar");
}

function openSidebar() {
  getSidebars().forEach(s => s.classList.add("open"));
  sidebarOverlay.classList.add("active");
}

function closeSidebar() {
  getSidebars().forEach(s => s.classList.remove("open"));
  sidebarOverlay.classList.remove("active");
}

btnMenu.addEventListener("click", () => {
  const isOpen = document.querySelector(".sidebar")?.classList.contains("open");
  isOpen ? closeSidebar() : openSidebar();
});
sidebarOverlay.addEventListener("click", closeSidebar);

let currentTrack        = "html";
let currentMissionId    = null;
let allMissions         = [];
let currentCourseTrack  = "html";
let currentChapterIndex = 0;

const TRACK_LABELS = {
  html: "🌐 HTML", css: "🎨 CSS", js: "⚡ JS",
  ts: "🔷 TypeScript", angular: "🔺 Angular", node: "🟢 Node"
};

const DIFF_LABELS = {
  easy:   { label: "🟢 Débutant",       cls: "badge-diff-easy" },
  medium: { label: "🟡 Intermédiaire",  cls: "badge-diff-medium" },
  hard:   { label: "🔴 Avancé",         cls: "badge-diff-hard" }
};

// ══════════════════════════════════════════════════════════
// TAB NAVIGATION
// ══════════════════════════════════════════════════════════
tabMissions.addEventListener("click", () => {
  tabMissions.classList.add("active");
  tabCours.classList.remove("active");
  viewMissions.classList.remove("hidden");
  viewCours.classList.add("hidden");
});

tabCours.addEventListener("click", () => {
  tabCours.classList.add("active");
  tabMissions.classList.remove("active");
  viewCours.classList.remove("hidden");
  viewMissions.classList.add("hidden");
  renderCourseChapters(currentCourseTrack);
});

// ══════════════════════════════════════════════════════════
// MISSIONS
// ══════════════════════════════════════════════════════════
async function fetchMissions() {
  const res = await fetch(`${API}/api/missions`);
  allMissions = await res.json();
}

function renderMissions(track) {
  missionsListEl.innerHTML = "";
  const missions = allMissions.filter(m => m.track === track);

  // Update sidebar label
  if (missionsLabelEl) {
    missionsLabelEl.textContent = `Missions — ${TRACK_LABELS[track] ?? track.toUpperCase()}`;
  }

  missions.forEach((m, idx) => {
    const li = document.createElement("li");
    const diffDot = { easy: "🟢", medium: "🟡", hard: "🔴" }[m.difficulty] || "";
    li.innerHTML = `
      <span class="mission-num">${String(idx + 1).padStart(2, "0")}</span>
      <span class="mission-name">${m.title}</span>
      <span class="diff-dot">${diffDot}</span>`;
    li.dataset.id = m.id;

    li.addEventListener("click", async () => {
      document.querySelectorAll("#missionsList li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      currentMissionId = m.id;
      await loadMission(currentMissionId);
      closeSidebar();
    });

    missionsListEl.appendChild(li);
  });

  if (missions.length > 0) {
    missionsListEl.querySelector("li")?.click();
  } else {
    showWelcome();
  }
}

function showWelcome() {
  missionWelcomeEl.classList.remove("hidden");
  missionContentEl.classList.add("hidden");
}

async function loadMission(id) {
  const res = await fetch(`${API}/api/missions/${id}`);
  const mission = await res.json();

  // Show content, hide welcome
  missionWelcomeEl.classList.add("hidden");
  missionContentEl.classList.remove("hidden");

  // Title
  titleEl.textContent = mission.title;

  // Track badge
  trackBadgeEl.textContent = TRACK_LABELS[mission.track] ?? mission.track;
  trackBadgeEl.className = "badge badge-track";

  // Difficulty badge
  const diff = DIFF_LABELS[mission.difficulty];
  if (diff) {
    diffBadgeEl.textContent = diff.label;
    diffBadgeEl.className = `badge ${diff.cls}`;
  }

  // Statement (HTML)
  statementEl.innerHTML = mission.statement;

  // Code
  codeEl.value = mission.starterCode || "";

  // Reset result
  resultEl.innerHTML = "";
  resultEl.classList.add("hidden");
}

function renderResult(data) {
  resultEl.classList.remove("hidden");
  if (data.error) {
    resultEl.innerHTML = `<div class="ko">❌ ${data.error}</div>`;
    return;
  }
  const header = data.ok
    ? `<div class="ok">✅ Toutes les épreuves passées !</div>`
    : `<div class="ko">❌ Certains tests échouent.</div>`;
  const list = (data.results || [])
    .map(r => `<li class="${r.passed ? 'passed' : ''}">${r.passed ? "✅" : "❌"} ${r.name}</li>`)
    .join("");
  resultEl.innerHTML = header + "<ul>" + list + "</ul>";
}

tracksEl.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    tracksEl.querySelectorAll("li").forEach(x => x.classList.remove("active"));
    li.classList.add("active");
    currentTrack = li.dataset.track;
    renderMissions(currentTrack);
  });
});

btnTest.addEventListener("click", async () => {
  if (!currentMissionId) return;
  resultEl.innerHTML = "⏳ Test en cours...";
  const res = await fetch(`${API}/api/missions/${currentMissionId}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code: codeEl.value })
  });
  const data = await res.json();
  renderResult(data);
});

// ══════════════════════════════════════════════════════════
// COURS
// ══════════════════════════════════════════════════════════
function renderCourseChapters(trackKey) {
  const course = courses[trackKey];
  if (!course) return;
  chaptersListEl.innerHTML = "";
  course.chapters.forEach((ch, idx) => {
    const li = document.createElement("li");
    li.textContent = ch.title;
    li.dataset.idx = idx;
    li.addEventListener("click", () => {
      chaptersListEl.querySelectorAll("li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      currentChapterIndex = idx;
      renderChapter(trackKey, idx);
      closeSidebar();
    });
    chaptersListEl.appendChild(li);
  });
  if (trackKey !== currentCourseTrack) currentChapterIndex = 0;
  currentCourseTrack = trackKey;
  chaptersListEl.querySelectorAll("li")[currentChapterIndex]?.classList.add("active");
  renderChapter(trackKey, currentChapterIndex);
}

function renderChapter(trackKey, idx) {
  const course  = courses[trackKey];
  const chapter = course.chapters[idx];
  if (!chapter) return;
  const total   = course.chapters.length;
  const isFirst = idx === 0;
  const isLast  = idx === total - 1;
  const dots    = course.chapters
    .map((_, i) => `<span class="chapter-dot ${i === idx ? "active" : ""}"></span>`)
    .join("");

  courseBodyEl.innerHTML =
    `<div class="chapter-header">
      <span class="chapter-track-badge" style="background:${course.color}22;color:${course.color};border-color:${course.color}44">
        ${course.icon} ${course.title}
      </span>
      <span class="chapter-counter">${idx + 1} / ${total}</span>
    </div>
    <h2 class="chapter-title">${chapter.title}</h2>
    <div class="chapter-body">${chapter.body}</div>` +
    (chapter.code
      ? `<div class="chapter-code-wrapper">
          <div class="chapter-code-header">
            <span>Exemple de code</span>
            <button class="copy-btn">📋 Copier</button>
          </div>
          <pre class="chapter-code"><code>${escapeHtml(chapter.code)}</code></pre>
        </div>`
      : "") +
    `<div class="chapter-nav">
      <button class="btn btn-ghost" ${isFirst ? "disabled" : ""} id="prevChapter">← Précédent</button>
      <div class="chapter-dots">${dots}</div>
      <button class="btn" ${isLast ? "disabled" : ""} id="nextChapter">Suivant →</button>
    </div>`;

  document.getElementById("prevChapter")?.addEventListener("click", () => {
    if (idx > 0) goToChapter(trackKey, idx - 1);
  });
  document.getElementById("nextChapter")?.addEventListener("click", () => {
    if (idx < total - 1) goToChapter(trackKey, idx + 1);
  });
  courseBodyEl.querySelector(".copy-btn")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(chapter.code);
    const btn = courseBodyEl.querySelector(".copy-btn");
    btn.textContent = "✅ Copié !";
    setTimeout(() => { btn.textContent = "📋 Copier"; }, 2000);
  });
}

function goToChapter(trackKey, idx) {
  currentChapterIndex = idx;
  chaptersListEl.querySelectorAll("li").forEach((li, i) => {
    li.classList.toggle("active", i === idx);
  });
  renderChapter(trackKey, idx);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

courseTracksEl.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    courseTracksEl.querySelectorAll("li").forEach(x => x.classList.remove("active"));
    li.classList.add("active");
    currentChapterIndex = 0;
    renderCourseChapters(li.dataset.course);
  });
});

// ══════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════
(async function init() {
  await fetchMissions();
  renderMissions(currentTrack);
})();
