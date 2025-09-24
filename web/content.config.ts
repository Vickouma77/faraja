import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    author: z.string(),
    tags: z.array(z.string()),
    featuredImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};