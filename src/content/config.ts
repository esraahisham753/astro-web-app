import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: image(),
  }),
});

export const collection = {
  posts: postsCollection,
};
