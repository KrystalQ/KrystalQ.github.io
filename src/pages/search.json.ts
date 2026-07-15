import type { APIRoute } from "astro";
import { getNotes, getPosts } from "@/lib/content";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const notes = await getNotes();
  const items = [
    ...posts.map((post) => ({
      type: "卷",
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags,
      url: `/posts/${post.slug}/`
    })),
    ...notes.map((note) => ({
      type: "札",
      title: note.data.title,
      description: note.data.description,
      category: "札",
      tags: note.data.tags,
      url: `/notes/${note.slug}/`
    }))
  ];
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
