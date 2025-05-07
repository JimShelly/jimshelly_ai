import { z, defineCollection } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Jim Shelly'),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['AI']),
    featured: z.boolean().default(false),
    // Removed the slug field as it's reserved in Astro
  }),
  type: 'content', // Explicitly set the collection type to content
});

// Export the collections
export const collections = {
  'blog': blogCollection,
};