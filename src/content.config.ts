import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dennik = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/dennik' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().default('Pluhová, Bratislava'),
    vehicle: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { dennik };
