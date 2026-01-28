import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
	schema: ({ image }) =>  z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		image: image(),
	}),
});

export const collections = { project };
