# 纸间旅栈内容新增指南

这份说明用来保证后续文章、短札、归档、分类和搜索展示保持统一。

## 内容放在哪里

- 正式文章放在 `src/content/posts`
- 短札放在 `src/content/notes`
- 文章模板放在 `docs/templates/post-template.md`
- 短札模板放在 `docs/templates/note-template.md`

新增内容时，复制对应模板到内容目录，并把文件名改成英文短横线格式，例如：

```text
src/content/posts/ai-agent-reflection.md
src/content/notes/today-reading.md
```

## 正式文章字段

```md
---
title: "这里写文章标题"
date: 2026-07-15
updated: 2026-07-15
category: "一级分类"
tags: ["标签一", "标签二"]
series: "系列名，可删除这一行"
status: "current"
cover: "/images/covers/default.svg"
description: "一句话摘要，控制在 20-40 个字左右，会展示在首页、列表和搜索里。"
minutes: 3
---
```

字段说明：

- `title`：文章标题，会出现在首页、卷、目、文章页和搜索里。
- `date`：发布日期，决定归档年份和排序。
- `updated`：最后更新时间，可不填。
- `category`：分类名，会进入“目”页面。多级目录可以写成 `AI/Agent/Reflection`。
- `tags`：标签数组，用于展示和搜索。
- `series`：系列名，可不填；同系列文章会自动聚合。
- `status`：可选 `current`、`evergreen`、`draft`。
- `cover`：首页和列表左侧封面图，可不填。
- `description`：摘要，建议每篇都认真写。
- `minutes`：预计阅读分钟数，可不填。

## 短札字段

```md
---
title: "这里写短札标题"
date: 2026-07-15
tags: ["随想"]
description: "一句话说明这张短札记录了什么。"
---
```

短札适合记录更轻的内容：一个想法、一个问题、一段摘录、一次产品观察或一条实践心得。

## 自动生成规则

只要字段填写正确，构建时会自动更新：

- 首页“新近入栈”
- 卷册归档
- 门目索引
- 札记列表
- 系列页面
- 搜索索引

## 推荐写法

- 标题尽量具体，不要只写“思考”“记录”。
- `description` 写成能独立阅读的一句话。
- `category` 保持稳定，少频繁改名。
- 多级分类统一用 `/`，例如 `AI/Agent`。
- 文件名使用英文、数字和短横线，避免空格。

