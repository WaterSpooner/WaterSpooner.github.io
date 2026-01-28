// @ts-check
import { defineConfig } from "astro/config";
import { copyLinkHeader } from "./src/scripts/header-links.ts"
import mdx from '@astrojs/mdx';
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [rehypeSlug, copyLinkHeader],
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},

});

