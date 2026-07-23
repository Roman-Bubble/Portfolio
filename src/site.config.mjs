/**
 * ЄДИНЕ місце з контактами, цінами та іменем.
 * Заповніть значення з позначкою TODO — вони підставляться по всьому сайту.
 */

// TODO: справжній домен (потрібен для SEO, sitemap та hreflang)
export const SITE_URL = 'https://example.com';

export const SITE = {
  name: 'Роман',
  surname: 'Лозинський',
  nameEn: 'Roman',
  surnameEn: 'Lozynskyi',

  // Посилання на месенджери. Порожній рядок ('') — кнопку не показуємо.
  telegram: 'https://t.me/lroman15',
  whatsapp: 'https://wa.me/380979689422',
  viber: 'viber://chat?number=%2B380979689422',

  // TODO: телефон (як показувати і як дзвонити). Поки порожньо — кнопки дзвінка на сайті сховані,
  // щоб не показувати відвідувачам заглушку замість номера.
  phone: '',
  phoneHref: '',

  // Ціни (укр. сторінка: грн, англ.: $)
  priceUa: 'від 18 000 грн',
  priceEn: 'from $500',
  careUa: 'від 500 грн/міс залежно від обсягу',
  careEn: 'from $15/mo depending on scope',
};
