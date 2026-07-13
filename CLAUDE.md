# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (Ukrainian/English) static portfolio site for a landing-page freelancer, built with Astro 5 + Tailwind CSS 4. No tests or linter are configured.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # static build to dist/
npm run preview   # preview the build
```

The contact form is a Cloudflare Pages Function ([functions/api/lead.js](functions/api/lead.js)) that sends leads to Telegram via `TG_BOT_TOKEN` / `TG_CHAT_ID` env vars. `npm run dev` does NOT run it (form POST returns 404 locally — expected). To test the form locally: `npm run build`, then `npx wrangler pages dev dist`.

## Architecture

### i18n — the core convention

- Ukrainian is the default locale at the site root; English lives under `/en/`. Configured in [astro.config.mjs](astro.config.mjs) (`prefixDefaultLocale: false`).
- Every page exists twice: a thin `.astro` file in `src/pages/` (uk) and one in `src/pages/en/` (en), both rendering the same shared component with a `lang` prop (e.g. both index pages just render `<HomePage lang="...">`). All real markup lives in `src/components/`.
- UI strings live in `src/i18n/uk.ts` and `src/i18n/en.ts` (same shape, `Dict` type is derived from `uk`). Access via `t(lang)`. Content-file fields use `{ ua, en }` objects, picked with `pick(lang, field)`.
- `altPath()` in [src/i18n/index.ts](src/i18n/index.ts) maps a URL to its other-language counterpart (used by the language switcher and hreflang links). Pages whose paths don't map by prefix alone (e.g. `/dyakuyu/` ↔ `/en/thanks/`) must be added to `routeMap` there.
- Layout.astro emits canonical + hreflang for every page automatically.

Note the locale-code asymmetry: Astro locales are `'uk' | 'en'`, but localized YAML/content fields use the key `ua` (not `uk`).

### Cases (portfolio) content collection

- `src/content/cases/` — one folder per case, containing `case.yaml` + images. Folder name = URL slug (`/cases/<folder>/`). The site discovers cases automatically; adding/removing a folder adds/removes the case. Schema is in [src/content.config.ts](src/content.config.ts); `_template/` is excluded by the loader and serves as the copyable starting point.
- `published: false` hides a case; `order` controls homepage ordering (1 = first).
- [src/content/cases/README.md](src/content/cases/README.md) is the user-facing manual (in Ukrainian) — keep it in sync with schema changes.

### Site-wide config

[src/site.config.mjs](src/site.config.mjs) is the single source for name, domain, Telegram, phone, and prices — values marked TODO are placeholders the owner fills in. Never hardcode contacts/prices elsewhere; also update `public/robots.txt` if the domain changes.

### Styling & behavior conventions

- Theme colors and font are Tailwind 4 `@theme` tokens in [src/styles/global.css](src/styles/global.css) (`--color-accent`, `--color-bg`, etc.) — use those tokens, not raw hex.
- Progressive enhancement: an inline script adds `.js` to `<html>`; scroll-reveal (`.reveal` class + IntersectionObserver in Layout.astro) only hides elements when JS is present, and respects `prefers-reduced-motion`. No-JS users see everything.
- The lead form includes a hidden `company` honeypot field checked by the Pages Function.

## Copy rules (from the case README — apply to any content you write)

- Results in the owner's words, not percentages: «почали дзвонити з сайту», not "conversion +40%".
- English fields are not literal translations — same idea, natural English.
- Comments and user-facing docs in this repo are written in Ukrainian for the site owner; follow that style.
