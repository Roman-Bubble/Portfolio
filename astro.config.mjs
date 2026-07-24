import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  // 'server' лише для /api/contact — усі сторінки лишаються статичними
  // через `export const prerender = true` у кожному src/pages/*.astro.
  output: 'server',
  adapter: vercel(),
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
