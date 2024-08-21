import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

// https://astro.build/config
export default defineConfig({
  site: 'https://devolio.devaradise.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[autoNewTabExternalLinks, { domain: 'localhost:4321' }]
		]
	}
});