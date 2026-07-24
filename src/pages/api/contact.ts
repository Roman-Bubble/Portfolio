// Astro API endpoint (Vercel serverless function): приймає заявку з форми
// контактної секції і надсилає її в Telegram.
//
// Налаштування (один раз, у Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота від @BotFather
//   TELEGRAM_CHAT_ID   — ваш chat id (напишіть боту, потім відкрийте
//                        https://api.telegram.org/bot<ТОКЕН>/getUpdates і скопіюйте message.chat.id)
import type { APIRoute } from 'astro';

export const prerender = false;

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value : '').trim().slice(0, max);

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'invalid_json' });
  }

  // Прихована пастка для ботів: людина цього поля не бачить і не заповнює.
  if (clean(data.company, 100)) {
    return json(200, { ok: true });
  }

  const lang = data.lang === 'en' ? 'en' : 'uk';
  const name = clean(data.name, 100);
  const contact = clean(data.phone, 100);
  const biz = clean(data.biz, 200);
  const task = clean(data.task, 600);

  if (!name || !contact) {
    return json(400, { ok: false, error: 'missing_fields' });
  }

  const token = import.meta.env.TELEGRAM_BOT_TOKEN ?? process.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return json(500, { ok: false, error: 'server_not_configured' });
  }

  const text = [
    '🔔 Нова заявка з сайту',
    `Ім'я: ${name}`,
    `Телефон/Telegram: ${contact}`,
    biz ? `Тип бізнесу: ${biz}` : null,
    task ? `Завдання: ${task}` : null,
    `Мова сторінки: ${lang}`,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) {
      return json(502, { ok: false, error: 'telegram_error' });
    }
  } catch {
    return json(502, { ok: false, error: 'telegram_error' });
  }

  return json(200, { ok: true });
};
