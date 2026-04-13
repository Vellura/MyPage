import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
      }),
    }),
    landscapes: defineCollection({
      type: 'data',
      source: 'landscapes/**/*.yml',
      schema: z.object({
        title: z.string(),
        edition: z.string(),
        date: z.string(),
        period: z.string(),
        description: z.string(),
        columns: z.array(z.object({ id: z.string(), label: z.string() })),
        rows: z.array(z.object({ id: z.string(), label: z.string() })),
        tags: z.record(z.string(), z.object({ label: z.string(), color: z.string() })),
        cards: z.array(z.object({
          title: z.string(),
          row: z.string(),
          column: z.string(),
          tag: z.string(),
          description: z.string().optional(),
          url: z.string().optional(),
        })),
      }),
    }),
  },
})
