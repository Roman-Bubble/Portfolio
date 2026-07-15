import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ ua: z.string(), en: z.string() });

const cases = defineCollection({
  loader: glob({
    pattern: ['*/case.yaml', '!_template/**'],
    base: './src/content/cases',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      published: z.boolean().default(true),
      // sample: true, це демо-кейс (бейдж "Зразок", відгук не показуємо)
      sample: z.boolean().default(false),
      order: z.number(),
      business: z.object({
        name: z.string(),
        niche: localized,
        city: localized,
      }),
      // порожній рядок = кнопки «наживо» не буде (напр., зразок ще не задеплоєно)
      liveUrl: z.string().url().or(z.literal('')).default(''),
      owner: z.object({
        name: z.string(),
        photo: image(),
      }),
      cover: image(),
      gallery: z.array(image()).default([]),
      problem: localized,
      solution: localized,
      result: localized,
      testimonial: z.object({
        quote: localized,
        originalLang: z.enum(['ua', 'en']).default('ua'),
        video: z.string().default(''),
      }),
    }),
});

export const collections = { cases };
