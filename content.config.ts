import { defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export const collections = {
  blogs: defineCollection(
    asSitemapCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        tags: z.array(z.string()),
        date: z.date(),
        category: z.string(),
        time: z.number(),
        image: z.string(),
      }),
    })
  ),
};
