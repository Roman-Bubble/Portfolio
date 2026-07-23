/**
 * Cloudflare Pages Function: приймає форму з сайту і надсилає заявку в Telegram.
 *
 * Налаштування (один раз, у панелі Cloudflare Pages → Settings → Environment variables):
 *   TG_BOT_TOKEN — токен бота від @BotFather
 *   TG_CHAT_ID   — ваш chat id (напишіть боту, потім відкрийте
 *                  https://api.telegram.org/bot<ТОКЕН>/getUpdates і скопіюйте message.chat.id)
 */

const clean = (value, max) => (value || '').toString().trim().slice(0, max);

export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const lang = form.get('lang') === 'en' ? 'en' : 'uk';
  const successUrl = new URL(lang === 'en' ? '/en/thanks/' : '/dyakuyu/', request.url).toString();

  // Приховане поле-пастка: заповнене — отже, бот. Вдаємо успіх і нічого не шлемо.
  if (form.get('company')) {
    return Response.redirect(successUrl, 303);
  }

  const name = clean(form.get('name'), 100);
  // Поле phone тепер вільне «як з вами зв'язатися» (телефон, @нік у месенджері тощо).
  const phone = clean(form.get('phone'), 100);
  const biz = clean(form.get('biz'), 200);
  const task = clean(form.get('task'), 600);

  const text = [
    '🔔 Нова заявка з сайту',
    `Ім'я: ${name}`,
    `Звʼязок: ${phone}`,
    biz ? `Тип бізнесу: ${biz}` : null,
    task ? `Завдання: ${task}` : null,
    `Мова сторінки: ${lang}`,
  ]
    .filter(Boolean)
    .join('\n');

  await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text }),
  });

  return Response.redirect(successUrl, 303);
}
