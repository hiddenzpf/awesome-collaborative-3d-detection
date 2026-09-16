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
          <span>${escapeHtml(category)}</span>
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
      <p class="venue">${escapeHtml(paper.venue || paper.year || "")}</p>
      <h3><span class="reference-number">[${paper.id}]</span> ${escapeHtml(paper.title)}</h3>
      <p class="authors">${escapeHtml(paper.authors || "Author information unavailable")}</p>
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
    papers: papers
      .filter((paper) => paper.category === category)
      .sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0) || Number(a.id) - Number(b.id)),
  })).filter((group) => group.papers.length);

  elements.list.innerHTML = grouped
    .map(
      ({ category, papers: categoryPapers }) => `
        <section class="paper-group" id="${categoryId(category)}">
          <div class="group-heading">
            <h2>${escapeHtml(category)}</h2>
            <span>${categoryPapers.length} papers</span>
          </div>
          <div class="group-list">${categoryPapers.map(paperEntry).join("")}</div>
        </section>`,
    )
    .join("");

  elements.count.textContent = `Showing ${papers.length} of ${state.papers.length} papers`;
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
    elements.count.textContent = "Paper data could not be loaded. Please access this site through a web server.";
    elements.emptyState.hidden = false;
    elements.emptyState.querySelector("strong").textContent = "Unable to load paper data";
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
