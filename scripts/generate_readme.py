import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAPERS_PATH = ROOT / "dist" / "assets" / "papers.json"
README_PATH = ROOT / "README.md"

CATEGORIES = [
    ("Surveys & Background", "综述与研究背景"),
    ("Single-Agent Foundations", "单智能体 3D 检测基础"),
    ("Collaborative Foundations", "协同感知基础工作"),
    ("Early Collaboration", "前融合 · Early Collaboration"),
    ("Intermediate · Dense Features", "中间融合 · 稠密特征"),
    ("Intermediate · Sparse & Efficient", "中间融合 · 稀疏与高效通信"),
    ("Intermediate · Object & Query", "中间融合 · 目标与查询"),
    ("Late Collaboration", "后融合 · Late Collaboration"),
    ("Hybrid Collaboration", "混合融合 · Hybrid Collaboration"),
    ("Spatiotemporal Alignment", "时空对齐"),
    ("Communication & Fusion", "通信与融合机制"),
    ("Heterogeneous Collaboration", "异构协同感知"),
    ("Trustworthy Collaboration", "可信、鲁棒与安全协同"),
    ("Cross-Platform Collaboration", "跨平台协作"),
    ("Platforms & Tooling", "仿真平台与工具"),
    ("Datasets & Benchmarks", "数据集与基准"),
]


def anchor(index: int) -> str:
    return f"category-{index:02d}"


papers = json.loads(PAPERS_PATH.read_text(encoding="utf-8"))
code_count = sum(1 for paper in papers if paper.get("codeUrl"))

lines = [
    "# Collaborative 3D Detection Paper List",
    "",
    "基于综述 *Multi-Agent Collaborative 3D Object Detection: Paradigms, Enabling Techniques, Benchmarks, and Future Directions* 整理。文献按照综述中的方法体系分类，并保留原始参考文献编号。",
    "",
    f"> 共 **{len(papers)}** 篇参考文献，其中 **{code_count}** 篇提供已核验的代码或工具仓库。",
    "",
    "## 分类导航",
    "",
]

for index, (category, label) in enumerate(CATEGORIES, start=1):
    count = sum(1 for paper in papers if paper["category"] == category)
    lines.append(f"- [{label}（{count}）](#{anchor(index)})")

lines.extend(["", "---", ""])

for index, (category, label) in enumerate(CATEGORIES, start=1):
    category_papers = [paper for paper in papers if paper["category"] == category]
    lines.extend([f'<a id="{anchor(index)}"></a>', "", f"## {label}", ""])

    for paper in category_papers:
        paper_label = "Scholar" if paper.get("paperLinkType") == "search" else "Paper"
        links = f'[[{paper_label}]({paper["paperUrl"]})]'
        if paper.get("codeUrl"):
            links += f' [[Code]({paper["codeUrl"]})]'

        lines.extend(
            [
                f'**[{paper["id"]}] {paper["title"]}**  ',
                f'{paper.get("authors") or "Author information unavailable"}  ',
                f'*{paper.get("venue") or paper.get("year") or ""}*  ',
                links,
            ]
        )
        if paper.get("note"):
            lines.append(f'> {paper["note"]}')
        lines.append("")

    lines.extend(["[↑ 返回分类导航](#分类导航)", "", "---", ""])

lines.extend(
    [
        "## 数据与网页",
        "",
        "- 完整结构化数据：[papers.json](dist/assets/papers.json)",
        "- 网页入口：[dist/index.html](dist/index.html)",
        "- 更新 README：运行 `python scripts/generate_readme.py`",
        "",
        "Paper 链接优先指向 arXiv、OpenReview 或出版页；标记为 Scholar 的条目为检索入口。Code 仅展示已核验仓库。",
        "",
    ]
)

README_PATH.write_text("\n".join(lines), encoding="utf-8")
print(f"wrote README with {len(papers)} papers in {len(CATEGORIES)} categories")
