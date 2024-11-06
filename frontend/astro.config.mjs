import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://spaptechnology.com',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		icon(),
		sitemap(),
	],

	output: 'server',
	adapter: netlify(),
});
