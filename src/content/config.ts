import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:  z.string(),
    desc:   z.string(),
    tags:   z.array(z.string()),
    url:    z.string().optional().default(''),
    public: z.boolean().optional().default(true),
    order:  z.number().optional().default(99),
  }),
});

export const collections = { projects };
