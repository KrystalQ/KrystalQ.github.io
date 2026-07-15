import { getCollection } from "astro:content";

export type PostEntry = Awaited<ReturnType<typeof getPosts>>[number];
export type NoteEntry = Awaited<ReturnType<typeof getNotes>>[number];

export async function getPosts() {
  const posts = await getCollection("posts", ({ data }) => data.status !== "draft");
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getNotes() {
  const notes = await getCollection("notes");
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

export function slugify(value: string) {
  return encodeURIComponent(value.trim().toLowerCase().replace(/\s+/g, "-"));
}

export function groupByYear<T extends { data: { date: Date } }>(items: T[]) {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const year = String(item.data.date.getFullYear());
    groups[year] = groups[year] || [];
    groups[year].push(item);
    return groups;
  }, {});
}

export function groupByCategory(posts: PostEntry[]) {
  return posts.reduce<Record<string, PostEntry[]>>((groups, post) => {
    groups[post.data.category] = groups[post.data.category] || [];
    groups[post.data.category].push(post);
    return groups;
  }, {});
}

export function groupBySeries(posts: PostEntry[]) {
  return posts.reduce<Record<string, PostEntry[]>>((groups, post) => {
    if (!post.data.series) return groups;
    groups[post.data.series] = groups[post.data.series] || [];
    groups[post.data.series].push(post);
    return groups;
  }, {});
}

export function estimateMinutes(body: string) {
  const cn = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = (body.replace(/[\u4e00-\u9fff]/g, " ").match(/\b\w+\b/g) || []).length;
  return Math.max(1, Math.ceil((cn + words) / 420));
}
