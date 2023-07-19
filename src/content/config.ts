import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    heroImage: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
  }),
})

const products = defineCollection({
  schema: z.object({
    srNo: z.number(),
    productName: z.string(),
    category: z.array(z.string()),
    productDetails: z.object({
      price: z.object({
        Price500: z.number().optional(),
        Price1: z.number(),
      }),
      productImage: z.object({
        Image500: z.string().optional(),
        Image1: z.string(),
      }),
    }),
  }),
})

export const collections = { blog, products }
