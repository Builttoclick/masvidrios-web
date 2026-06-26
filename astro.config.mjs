import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://masvidrios.com.py',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
});
