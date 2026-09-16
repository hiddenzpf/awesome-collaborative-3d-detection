import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAPERS_PATH = ROOT / "dist" / "assets" / "papers.json"
README_PATH = ROOT / "README.md"

CATEGORIES = [
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
]


def anchor(index: int) -> str:
    return f"category-{index:02d}"


def title_parts(title: str) -> tuple[str, str]:
    if ":" not in title:
        return title, ""
    lead, detail = title.split(":", 1)
    return lead.strip(), detail.strip()


papers = json.loads(PAPERS_PATH.read_text(encoding="utf-8"))
code_count = sum(1 for paper in papers if paper.get("codeUrl"))

lines = [
    "# Collaborative 3D Detection Paper List",
    "",
    "A curated reading list based on *Multi-Agent Collaborative 3D Object Detection: Paradigms, Enabling Techniques, Benchmarks, and Future Directions*. Papers follow the survey taxonomy and retain their original reference numbers.",
    "",
    f"> **{len(papers)}** references, including **{code_count}** papers with verified code or tooling repositories.",
    "",
    "## Categories",
    "",
]

for index, category in enumerate(CATEGORIES, start=1):
    count = sum(1 for paper in papers if paper["category"] == category)
    lines.append(f"- [{category} ({count})](#{anchor(index)})")

lines.extend(["", "---", ""])

for index, category in enumerate(CATEGORIES, start=1):
    category_papers = sorted(
        (paper for paper in papers if paper["category"] == category),
        key=lambda paper: ((paper.get("year") or 0), paper["id"]),
    )
    lines.extend([f'<a id="{anchor(index)}"></a>', "", f"## {category}", ""])

    for paper in category_papers:
        paper_label = "scholar" if paper.get("paperLinkType") == "search" else "paper"
        links = f'[[{paper_label}]({paper["paperUrl"]})]'
        if paper.get("codeUrl"):
            links += f' [[code]({paper["codeUrl"]})]'

        lead, detail = title_parts(paper["title"])
        title = f'**[{paper["id"]}] {lead}**'
        if detail:
            title += f' ({detail})'

        lines.extend(
            [
                f'- **{paper.get("venue") or paper.get("year") or ""}** · {title} {links}',
            ]
        )
        if paper.get("note"):
            lines.append(f'  - Note: {paper["note"]}')

    lines.extend(["", "[↑ Back to categories](#categories)", ""])

README_PATH.write_text("\n".join(lines), encoding="utf-8")
print(f"wrote README with {len(papers)} papers in {len(CATEGORIES)} categories")
