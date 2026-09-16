# Collaborative 3D Detection Paper List

基于综述 *Multi-Agent Collaborative 3D Object Detection: Paradigms, Enabling Techniques, Benchmarks, and Future Directions* 整理的静态文献导航页。

## 已包含

- 139 条参考文献，并保留综述原始编号；
- 按综述章节分组展示早期、中间、后期、混合协作，以及对齐、异构、可信性、数据集等类别；
- 每篇列出标题、作者、会议/期刊与年份，并采用 `[Paper] [Code]` 项目主页式链接；
- 支持标题、作者、编号搜索，以及仅显示有代码条目；
- 论文链接与 52 个已核验代码/工具仓库；
- 桌面与移动端自适应布局。

## 本地预览

在本目录执行：

```bash
python -m http.server 4173 --directory dist
```

然后访问 `http://127.0.0.1:4173/`。

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库，并将本目录内容推送到 `main` 分支。
2. 在仓库的 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**。
3. 推送后，`.github/workflows/pages.yml` 会自动发布 `dist/`。

## 更新文献

文献数据位于 `dist/assets/papers.json`。每条记录包含参考文献编号、标题、作者、会议/期刊、年份、分类、主题标签、论文链接和可选代码链接。未核验到公开代码的条目保留 `codeUrl: null`，避免把搜索结果误标为官方仓库。

## 说明

分类以综述的章节组织为主，同时为跨章节工作添加主题标签。部分论文会同时涉及多个技术维度；页面中的主分类用于导航，不应视为唯一归属。
