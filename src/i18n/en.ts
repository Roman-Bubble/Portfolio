import { SITE } from '../site.config.mjs';
import type uk from './uk';

const en: typeof uk = {
  meta: {
    title: `${SITE.nameEn} ${SITE.surnameEn}. Websites that bring local businesses customers`,
    description:
      'A website that makes people call and book, not just scroll past. For car services, salons, clinics and other local businesses. Usually ready in about two weeks.',
  },

  nav: {
    cases: 'Work',
    price: 'Pricing',
    how: 'How it works',
    cta: 'Message me on Telegram',
  },

  langSwitch: { label: 'Language', short: 'UA', full: 'Українська', target: 'uk' as 'uk' | 'en' },

  hero: {
    status: 'Taking on new projects',
    h1a: 'Your customers are on Google right now.',
    h1b: "They're finding your competitors.",
    sub: 'I build websites for salons, clinics, car shops and other local businesses that want more calls and bookings from Google and social media.',
    cta: 'Message me on Telegram',
    secondaryCta: 'See my work',
    trust: 'I reply personally, usually within the hour.',
    chips: ['I reply personally', 'Live in ~2 weeks', 'Price locked before we start', '9+ years in web development'],
    photoAlt: `${SITE.nameEn} ${SITE.surnameEn}, photo`,
    notif: ['New booking: Olena, cleaning, tomorrow 10:00', 'Telegram: "Hi, any slots on Saturday?"'],
  },

  cases: {
    kicker: 'Work',
    title: 'What a website that sells looks like',
    sub: 'Five websites across different niches: beauty, auto, dental, renovation, dining. Each one solves the core job of its business. Yours will be about you, but the approach is the same.',
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
    name: 'A website that brings customers',
    priceLabel: 'Turnkey website',
    priceMeta: 'one-time',
    scope:
      'One page with everything that convinces a customer to choose you: services, prices, photos, reviews and an easy booking button. Need more pages or specific features? We scope that together.',
    includes: "What's included",
    bullets: [
      'A half-hour talk about your business. Then I take it from there.',
      'Copy that sells: in your own words, no template filler.',
      'A design people trust. Opens fast even on an old phone.',
      'Call, Telegram and booking buttons. Reaching you takes one tap.',
      'Full launch: domain, setup, testing on every screen.',
      'Two weeks of free tweaks after launch.',
    ],
    price: SITE.priceEn,
    priceNote:
      'Most sites land between $500 and $900 depending on scope. I give you the exact number after a short call and lock it in before we start. No extra charges along the way.',
    time: 'Usually ready in about two weeks.',
    timeCaveat:
      'Bigger or unusual projects are scoped separately: a short call first, then a clear timeline and price.',
    guarantee: 'Revisions to the agreed result are included in the price.',
    care: {
      title: 'Care plan',
      text: 'Your website keeps working: hosting, updated prices and services, small changes. Cancel anytime.',
      price: SITE.careEn,
    },
    cta: 'Talk about my business',
  },

  process: {
    kicker: 'The process',
    title: 'How it works',
    sub: 'Four steps. Under two hours of your time in total.',
    steps: [
      {
        title: 'A call, 30 minutes',
        text: 'Free. You tell me about your business. I tell you honestly whether a website will help, what it will cost and when it will be ready.',
      },
      {
        title: 'The words',
        text: 'I dig into why customers choose you and write copy that gets it across. All I need from you is answers to a few questions.',
      },
      {
        title: 'Design and build',
        text: "You see the website as it takes shape and tell me what works and what doesn't.",
      },
      {
        title: 'Launch',
        text: 'I connect the domain, test everything on a phone and go live. Then two weeks of free tweaks.',
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
    title: 'The questions you’re asking yourself',
    items: [
      {
        q: 'How much does it cost?',
        a: 'It depends on scope. Most sites land between $500 and $900. I give you the exact number after a short call, once I understand the job, and lock it in before we start. No charges added along the way.',
      },
      {
        q: 'How long does it take?',
        a: 'Usually two weeks from the first call to launch. If the project is bigger than standard, I tell you the timeline upfront.',
      },
      {
        q: "What if I don't like it?",
        a: 'Revisions to the agreed result are included in the price while we build the site together. You never have to accept it "as is".',
      },
      {
        q: 'What do you need from me?',
        a: 'A half-hour call, answers to a few questions, and photos of your business. I handle the rest.',
      },
      {
        q: 'I already have Instagram. Why a website?',
        a: 'Instagram is great for showing your work to people who already follow you. A website brings everything together in one place, strengthens how you show up on Google, and lets someone book right away instead of waiting for a DM reply. They work best together.',
      },
      {
        q: 'What if I need something bigger?',
        a: "Message me anyway. I'll look at what you actually need and tell you honestly. One page is often enough, and when it isn't, I quote the bigger project separately.",
      },
    ],
    more: "Didn't find your question?",
    moreCta: 'Ask me directly',
  },

  about: {
    kicker: 'About me',
    title: 'Who I am',
    text: 'I build websites for local businesses: car services, salons, clinics, workshops. Nine years in web development, working solo — no agency, no managers.',
    pullQuote: "You talk to me, I do the work, and I'm the one who answers for the result.",
    points: [
      'I know local business: clinics, car services, salons, workshops.',
      'Copy that sells first, design second. Not the other way round.',
      'The site opens fast even on an old phone.',
    ],
    signoffRole: 'Web design and copy in one pair of hands',
  },

  final: {
    kicker: 'Next step',
    title: 'Your customers are searching every day. The only question is who they find.',
    sub: "Message me on Telegram, or leave your number and I'll call you back.",
    cta: 'Message me on Telegram',
    or: 'or',
    form: {
      name: 'Name',
      phone: 'Phone',
      biz: 'What does your business do',
      submit: 'Send request',
    },
    call: 'Prefer to call?',
    trust: "No commitment. It's just a conversation.",
    notif: 'New request from your site',
  },

  sticky: { cta: 'Message me on Telegram' },

  footer: {
    line: 'Websites that bring local businesses customers.',
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
