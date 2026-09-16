const CATEGORY_ORDER = [
  "Surveys & Background",
  "Single-Agent Foundations",
  "Collaborative Foundations",
  "Early Collaboration",
  "Intermediate · Dense Features",
  "Intermediate · Sparse & Efficient",
  "Intermediate · Object & Query",
  "Late Collaboration",
  "Hybrid Collaboration",
  "Spatiotemporal Alignment",
  "Communication & Fusion",
  "Heterogeneous Collaboration",
  "Trustworthy Collaboration",
  "Cross-Platform Collaboration",
  "Platforms & Tooling",
  "Datasets & Benchmarks",
];

const CATEGORY_LABELS = {
  "Surveys & Background": "综述与研究背景",
  "Single-Agent Foundations": "单智能体 3D 检测基础",
  "Collaborative Foundations": "协同感知基础工作",
  "Early Collaboration": "前融合 · Early Collaboration",
  "Intermediate · Dense Features": "中间融合 · 稠密特征",
  "Intermediate · Sparse & Efficient": "中间融合 · 稀疏与高效通信",
  "Intermediate · Object & Query": "中间融合 · 目标与查询",
  "Late Collaboration": "后融合 · Late Collaboration",
  "Hybrid Collaboration": "混合融合 · Hybrid Collaboration",
  "Spatiotemporal Alignment": "时空对齐",
  "Communication & Fusion": "通信与融合机制",
  "Heterogeneous Collaboration": "异构协同感知",
  "Trustworthy Collaboration": "可信、鲁棒与安全协同",
  "Cross-Platform Collaboration": "跨平台协作",
  "Platforms & Tooling": "仿真平台与工具",
  "Datasets & Benchmarks": "数据集与基准",
};

const state = { papers: [], query: "", codeOnly: false };

const elements = {
  nav: document.querySelector("#category-nav"),
  searchInput: document.querySelector("#search-input"),
  codeOnly: document.querySelector("#code-only"),
  reset: document.querySelector("#reset-filters"),
  list: document.querySelector("#paper-list"),
  count: document.querySelector("#result-count"),
  emptyState: document.querySelector("#empty-state"),
  statTotal: document.querySelector("#stat-total"),
  statCode: document.querySelector("#stat-code"),
  statYears: document.querySelector("#stat-years"),
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const categoryId = (category) =>
  `category-${category.toLowerCase().replaceAll("&", "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

function renderNavigation() {
  const counts = state.papers.reduce((map, paper) => {
    map.set(paper.category, (map.get(paper.category) || 0) + 1);
    return map;
  }, new Map());

  elements.nav.innerHTML = CATEGORY_ORDER.filter((category) => counts.has(category))
    .map(
      (category) => `
        <a href="#${categoryId(category)}">
          <span>${escapeHtml(CATEGORY_LABELS[category] || category)}</span>
          <small>${counts.get(category)}</small>
        </a>`,
    )
    .join("");
}

function getFilteredPapers() {
  const query = state.query.trim().toLocaleLowerCase();
  return state.papers.filter((paper) => {
    const searchable = [paper.id, paper.title, paper.authors, paper.venue, paper.category]
      .join(" ")
      .toLocaleLowerCase();
    return (!query || searchable.includes(query)) && (!state.codeOnly || Boolean(paper.codeUrl));
  });
}

function paperEntry(paper) {
  const paperLabel = paper.paperLinkType === "search" ? "Scholar" : "Paper";
  const codeLink = paper.codeUrl
    ? `<a href="${escapeHtml(paper.codeUrl)}" target="_blank" rel="noreferrer">[Code]</a>`
    : `<span class="link-unavailable">[Code]</span>`;
  const note = paper.note ? `<p class="paper-note">${escapeHtml(paper.note)}</p>` : "";

  return `
    <article class="paper-entry">
      <h3><span class="reference-number">[${paper.id}]</span> ${escapeHtml(paper.title)}</h3>
      <p class="authors">${escapeHtml(paper.authors || "Author information unavailable")}</p>
      <p class="venue">${escapeHtml(paper.venue || paper.year || "")}</p>
      <p class="paper-links">
        <a href="${escapeHtml(paper.paperUrl)}" target="_blank" rel="noreferrer">[${paperLabel}]</a>${codeLink}
      </p>
      ${note}
    </article>`;
}

function renderPapers() {
  const papers = getFilteredPapers();
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    papers: papers.filter((paper) => paper.category === category),
  })).filter((group) => group.papers.length);

  elements.list.innerHTML = grouped
    .map(
      ({ category, papers: categoryPapers }) => `
        <section class="paper-group" id="${categoryId(category)}">
          <div class="group-heading">
            <h2>${escapeHtml(CATEGORY_LABELS[category] || category)}</h2>
            <span>${categoryPapers.length} 篇</span>
          </div>
          <div class="group-list">${categoryPapers.map(paperEntry).join("")}</div>
        </section>`,
    )
    .join("");

  elements.count.textContent = `显示 ${papers.length} / ${state.papers.length} 篇`;
  elements.emptyState.hidden = papers.length !== 0;
  elements.list.hidden = papers.length === 0;
}

function resetFilters() {
  state.query = "";
  state.codeOnly = false;
  elements.searchInput.value = "";
  elements.codeOnly.checked = false;
  renderPapers();
}

async function init() {
  try {
    const response = await fetch("assets/papers.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.papers = await response.json();

    const years = state.papers.map((paper) => paper.year).filter(Boolean);
    elements.statTotal.textContent = state.papers.length;
    elements.statCode.textContent = state.papers.filter((paper) => paper.codeUrl).length;
    elements.statYears.textContent = `${Math.min(...years)}–${Math.max(...years)}`;

    renderNavigation();
    renderPapers();
  } catch (error) {
    elements.count.textContent = "文献数据载入失败，请通过网页服务器访问本站。";
    elements.emptyState.hidden = false;
    elements.emptyState.querySelector("strong").textContent = "无法载入文献数据";
    elements.emptyState.querySelector("p").textContent = error.message;
  }
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPapers();
});

elements.codeOnly.addEventListener("change", (event) => {
  state.codeOnly = event.target.checked;
  renderPapers();
});

elements.reset.addEventListener("click", resetFilters);

init();
