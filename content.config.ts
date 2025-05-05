import { defineCollection, z } from "@nuxt/content";

export const collections = {
  blogs: defineCollection({
    type: "page",
    source: "posts/*.md",
    schema: z.object({
      tags: z.array(z.string()),
      date: z.date(),
      category: z.string(),
      time: z.number(),
      image: z.string(),
    }),
  }),
};
