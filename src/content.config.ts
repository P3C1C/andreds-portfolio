import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      type: z.string(),
      year: z.number().int(),
      summary: z.string(),
      excerpt: z.string().optional(),
      categories: z.array(z.string()).min(1),
      role: z.string(),
      cover: image(),
      coverAlt: z.string(),
      thumbnail: image().optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            size: z.enum(['full', 'large', 'small']).default('full'),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().int(),
    }),
});

export const collections = { projects };
