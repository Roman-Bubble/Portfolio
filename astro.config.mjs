import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  server: { port: Number(process.env.PORT) || 4321 },
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
