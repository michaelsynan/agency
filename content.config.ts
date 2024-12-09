import { defineCollection, z } from "@nuxt/content";

export const collections = {
  blogs: defineCollection({
    type: "page",
    source: "blog/*.md",
    schema: z.object({
      tags: z.array(z.string()),
      date: z.date(),
    }),
  }),
};