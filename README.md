# 纸间旅栈

一个基于 Astro 与 Markdown 的个人博客。导航含义：

```text
某 = 关于我
卷 = 归档
目 = 分类
札 = 短笔记
链 = 友链与资源
```

## 开发

```bash
npm install
npm run dev
```

## 新增文章

推荐先复制模板：

```text
docs/templates/post-template.md
```

在 `src/content/posts` 新建 Markdown 文件：

```md
---
title: "AI--智能体 Reflection 架构"
date: 2026-03-15
category: "AI"
tags: ["Agent", "Reflection"]
series: "AI Agent 架构学习"
status: "current"
cover: "/images/covers/ai.svg"
description: "让智能体从一次输出走向持续改进。"
---

## 前言

正文写在这里。
```

## 新增札

推荐先复制模板：

```text
docs/templates/note-template.md
```

在 `src/content/notes` 新建 Markdown 文件：

```md
---
title: "今天读到的一句话"
date: 2026-07-15
tags: ["随想"]
description: "一条短记录。"
---

短笔记正文。
```

归档、分类、系列、首页最新文章、搜索索引都会在构建时自动生成。

更完整的字段说明见 `docs/content-authoring-guide.md`。
