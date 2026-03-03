import { courses } from './courses.js';

const API = "http://localhost:3000";

// ── Mission elements ──────────────────────────────────────
const titleEl        = document.getElementById("title");
const statementEl    = document.getElementById("statement");
const codeEl         = document.getElementById("code");
const resultEl       = document.getElementById("result");
const btnTest        = document.getElementById("btnTest");
const tracksEl       = document.getElementById("tracks");
const missionsListEl = document.getElementById("missionsList");

// ── View elements ─────────────────────────────────────────
const tabMissions   = document.getElementById("tabMissions");
const tabCours      = document.getElementById("tabCours");
const viewMissions  = document.getElementById("viewMissions");
const viewCours     = document.getElementById("viewCours");

// ── Course elements ───────────────────────────────────────
const courseTracksEl  = document.getElementById("courseTracks");
const chaptersListEl  = document.getElementById("chaptersList");
const courseBodyEl    = document.getElementById("courseBody");

let currentTrack        = "html";
let currentMissionId    = null;
let allMissions         = [];
let currentCourseTrack  = "html";
let currentChapterIndex = 0;

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

  missions.forEach(m => {
    const li = document.createElement("li");
    const diffIcon = { easy: "🟢", medium: "🟡", hard: "🔴" }[m.difficulty] || "";
    li.innerHTML = `<span class="mission-diff">${diffIcon}</span> ${m.title}`;
    li.dataset.id = m.id;

    li.addEventListener("click", async () => {
      document.querySelectorAll("#missionsList li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      currentMissionId = m.id;
      await loadMission(currentMissionId);
    });

    missionsListEl.appendChild(li);
  });

  if (missions.length > 0) {
    missionsListEl.querySelector("li")?.click();
  } else {
    titleEl.textContent = "Aucune mission";
    statementEl.textContent = "";
    codeEl.value = "";
    resultEl.innerHTML = "";
  }
}

async function loadMission(id) {
  const res = await fetch(`${API}/api/missions/${id}`);
  const mission = await res.json();
  titleEl.textContent = mission.title;
  statementEl.textContent = mission.statement;
  codeEl.value = mission.starterCode || "";
  resultEl.innerHTML = "";
}

function renderResult(data) {
  if (data.error) {
    resultEl.innerHTML = `<div class="ko">❌ ${data.error}</div>`;
    return;
  }
  const header = data.ok
    ? `<div class="ok">✅ Tout est bon !</div>`
    : `<div class="ko">❌ Certains tests échouent.</div>`;
  const list = (data.results || [])
    .map(r => `<li>${r.passed ? "✅" : "❌"} ${r.name}</li>`)
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
