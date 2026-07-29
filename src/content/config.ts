import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().trim().min(1).optional(),
    date: z.date().optional().default(() => new Date()),
    tags: z.array(z.string()).optional().default(['note']),
  }),
});

export const collections = { posts };
