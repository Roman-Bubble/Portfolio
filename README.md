# Портфоліо-сайт: сторінки, які приводять клієнтів

Двомовний сайт (укр. на корені, англ. під `/en/`) на Astro + Tailwind. Статичний, швидкий,
кейси керуються файлами без коду.

## Що заповнити перед запуском (TODO)

1. **[src/site.config.mjs](src/site.config.mjs)** — прізвище, домен, Telegram, телефон, ціни.
   Це єдине місце: значення підставляються по всьому сайту в обох мовах.
2. **Ваше фото** — покладіть файл `src/assets/roman.jpg` (або `.png`/`.webp`) і видаліть
   `src/assets/roman.svg`. Фото з'явиться в hero та у блоці «Хто я». Без фото сайт теж
   виглядає нормально — текст сам центрується.
3. **Кейси** — замініть три зразки в [src/content/cases/](src/content/cases/) на справжні.
   Як саме — у [src/content/cases/README.md](src/content/cases/README.md).
4. **robots.txt** — впишіть свій домен у [public/robots.txt](public/robots.txt).

## Команди

```bash
npm install       # один раз
npm run dev       # локальна розробка: http://localhost:4321
npm run build     # збірка у dist/
npm run preview   # переглянути збірку
```

## Деплой (Cloudflare Pages, безкоштовно)

1. Запуште репозиторій на GitHub і підключіть його в Cloudflare Pages
   (Framework preset: Astro; build: `npm run build`; output: `dist`).
2. У Settings → Environment variables додайте:
   - `TG_BOT_TOKEN` — токен бота від [@BotFather](https://t.me/BotFather);
   - `TG_CHAT_ID` — ваш chat id (напишіть щось боту, відкрийте
     `https://api.telegram.org/bot<ТОКЕН>/getUpdates`, скопіюйте `message.chat.id`).
3. Прив'яжіть домен. Після цього форма на сайті надсилатиме заявки прямо вам у Telegram
   (код функції — [functions/api/lead.js](functions/api/lead.js)).
4. Аналітика: у Cloudflare увімкніть Web Analytics, скопіюйте token у закоментований
   рядок у [src/layouts/Layout.astro](src/layouts/Layout.astro).

Локально перевірити форму можна так: `npm run build`, потім
`npx wrangler pages dev dist` (звичайний `npm run dev` функції не запускає — форма
відповість 404, це нормально).

## Як влаштовано

- `src/i18n/uk.ts`, `src/i18n/en.ts` — усі тексти інтерфейсу. Англійська — не переклад,
  а та сама думка природною мовою.
- `src/content/cases/` — кейси: одна папка = один кейс, обидві мови в одному файлі.
- `src/components/sections/` — секції головної (hero, кейси, оффер, процес, відгуки, FAQ,
  контакт).
- hreflang, canonical, sitemap і перемикач мов працюють автоматично для кожної сторінки.
