import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    status: z.enum(["current", "evergreen", "draft"]).optional(),
    cover: z.string().optional(),
    description: z.string(),
    minutes: z.number().optional()
  })
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string()
  })
});

export const collections = { posts, notes };
