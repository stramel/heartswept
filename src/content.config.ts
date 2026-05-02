import { defineCollection, reference } from "astro:content";

import { z } from "astro/zod";
import { glob } from "astro/loaders";

const anthology = defineCollection({
  loader: glob({ base: "./src/content/anthology", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    titleJp: z.string().optional(),
    type: z.enum(["Haiku", "Poem", "Story"]),
    author: reference("authors"),
    featured: z.boolean().default(false),
    image: z.string().nullable().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
  }),
});

const authors = defineCollection({
  loader: glob({ base: "./src/content/authors", pattern: "**/*.json" }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
  }),
});

export const collections = { anthology, authors };
