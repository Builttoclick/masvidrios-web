import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://masvidrios.com.py',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      // hreflang alternates for the ES home and the EN overview page.
      serialize(item) {
        const es = 'https://masvidrios.com.py/';
        const en = 'https://masvidrios.com.py/en/';
        if (item.url === es || item.url === en) {
          item.links = [
            { lang: 'es', url: es },
            { lang: 'en', url: en },
            { lang: 'x-default', url: es },
          ];
        }
        return item;
      },
    }),
  ],
});
