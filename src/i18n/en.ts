import { SITE } from '../site.config.mjs';
import type uk from './uk';

const en: typeof uk = {
  meta: {
    title: `${SITE.nameEn} ${SITE.surnameEn}. Websites that bring local businesses customers`,
    description:
      'Websites for car services, salons, clinics and other local businesses, built to turn Google and social searches into calls and bookings. Usually ready from 7 days.',
  },

  nav: {
    cases: 'Work',
    price: 'Pricing',
    how: 'How it works',
    cta: 'Discuss your site',
  },

  langSwitch: { label: 'Language', short: 'UA', full: 'Українська', target: 'uk' as 'uk' | 'en' },

  hero: {
    status: 'Taking on new projects',
    h1a: 'Your customers are on Google right now.',
    h1b: "They're finding your competitors.",
    sub: 'I build websites for local businesses that turn visits from Google and social media into calls and bookings.',
    cta: 'Discuss your site',
    secondaryCta: 'See my work',
    trust: 'I reply personally, usually within the hour.',
    chips: ['I reply personally', 'Launch from 7 days', 'Price locked before we start', 'Support after launch'],
    photoAlt: `${SITE.nameEn} ${SITE.surnameEn}, photo`,
    notif: ['New booking: Olena, cleaning, tomorrow 10:00', 'Telegram: "Hi, any slots on Saturday?"'],
  },

  cases: {
    kicker: 'Work',
    title: 'Websites built to solve specific business problems',
    sub: 'Each site is built for its own job: show prices, simplify booking, calculate a quote, or help the customer decide faster.',
    open: 'View project',
    live: 'Open the site',
    problem: 'The situation',
    solution: 'The solution',
    result: 'The result',
    ownerSays: 'In the owner’s words',
    back: 'All work',
  },

  offer: {
    kicker: 'The offer',
    title: 'What you get',
    name: 'A website for local business',
    priceLabel: 'Turnkey website',
    priceMeta: 'one-time',
    scope:
      'Services, prices, photos, reviews and an easy way to book, all in one place. Extra pages and features are quoted separately.',
    includes: "What's included",
    bullets: [
      'A short call about your business',
      'Structure and copy',
      'Design for phone and desktop',
      'Call and messenger buttons',
      'Domain setup and launch',
      'Revisions within the agreed scope',
    ],
    price: SITE.priceEn,
    time: 'A simple site can launch from 7 days. We agree the exact timeline and price before work starts.',
    care: {
      title: 'Care plan',
      text: 'Updates to prices, services, copy and photos, plus small changes on the site.',
      price: SITE.careEn,
    },
    cta: 'Discuss your site',
  },

  process: {
    kicker: 'The process',
    title: 'How it works',
    sub: 'Four simple steps. I handle the bulk of the work; from you I need a short call, materials and sign-off.',
    steps: [
      {
        title: 'A short call',
        text: 'We talk through your business, the goal, the timeline and the price.',
      },
      {
        title: 'Structure and copy',
        text: 'I plan the pages and write clear copy about your services.',
      },
      {
        title: 'Design and build',
        text: 'You see the site as it takes shape and sign off on the key decisions.',
      },
      {
        title: 'Testing and launch',
        text: 'I connect the domain, test the site on phone and desktop, and go live.',
      },
    ],
  },

  testimonials: {
    title: 'What the owners say',
    videoLabel: 'Video testimonial',
    playVideo: 'Play testimonial',
  },

  faq: {
    kicker: 'Questions',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Most sites cost from $500. I give you the exact price after a short call and lock it in before work starts.',
      },
      {
        q: 'How long does it take?',
        a: 'A simple site can launch from 7 days. The timeline depends on scope, how ready your materials are, and how fast we sign off.',
      },
      {
        q: "What if I don't like the result?",
        a: 'We sign off on the site step by step. Revisions within the agreed structure are included in the price.',
      },
      {
        q: 'What do you need from me?',
        a: 'A short call, information about your business, photos, and sign-off on the main stages. I handle the bulk of the work.',
      },
      {
        q: 'Why a website if I have Instagram?',
        a: 'Instagram shows your work and keeps you in touch with followers. A website gathers your services, prices and booking in one place. They work best together.',
      },
      {
        q: 'What if I need extra pages or features?',
        a: "We'll talk through the goal and quote the extra scope separately.",
      },
      {
        q: 'What happens after launch?',
        a: 'Domain setup and launch are included in the price. Further changes can be ordered separately or covered by ongoing support.',
      },
    ],
    more: "Didn't find your question?",
    moreCta: 'Ask me directly',
  },

  about: {
    kicker: 'My approach',
    title: 'A site your customers actually understand',
    text: 'I build and update websites for local businesses. I help you show your services, prices and advantages clearly, and make the path to a call or booking as simple as possible.',
    pullQuote: 'I work directly, no managers or middlemen, from the first call to launch.',
    points: [
      'I plan the site structure around the questions your customers actually have.',
      'I help write clear copy, no leftover ad-speak.',
      'I design something professional that works just as well on a phone as a laptop.',
    ],
    signoffRole: 'Turnkey websites for local business',
  },

  final: {
    // title + cta are also used in the CTA banner at the bottom of a case page
    title: 'Your customers are searching every day. The only question is who they find.',
    cta: 'Discuss your site',
    contactKicker: "Let's talk about your site",
    contactTitle: 'Tell me a bit about your business and what you need',
    contactText: "Message me on whichever messenger suits you, or leave a request. I'll reply personally and point you to where to start.",
    messengersNote: 'I reply personally, no managers or middlemen.',
    form: {
      name: 'Name',
      contact: 'Phone or Telegram',
      biz: 'Type of business',
      bizPlaceholder: 'Salon, clinic, car service...',
      task: 'What you need done',
      taskPlaceholder: 'Briefly describe the site or changes you need',
      submit: 'Discuss your site',
      submitting: 'Sending…',
      success: "Thanks! I've got your request and will be in touch soon.",
      error: 'Could not send. Please try again or message me directly on Telegram.',
    },
    notif: 'New request from your site',
  },

  sticky: { cta: 'Discuss your site' },

  footer: {
    line: 'Websites that bring local businesses customers.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
  },

  thanks: {
    metaTitle: 'Thank you. Request received',
    title: 'Thank you. Got your request.',
    text: "I'll be in touch shortly, usually within the hour on a working day.",
    back: 'Back to the homepage',
  },

  notFound: {
    metaTitle: 'Page not found',
    title: "This page doesn't exist.",
    text: 'But websites that bring customers do.',
    back: 'Go to the homepage',
  },
};

export default en;
