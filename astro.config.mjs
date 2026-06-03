// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Po napojení vlastnej domény sem daj ju (kvôli kanonickým URL a sitemap):
  site: 'https://pluhova.vercel.app',
  integrations: [react(), markdoc(), keystatic()],
  adapter: vercel(),
});
