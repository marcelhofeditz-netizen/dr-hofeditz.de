// Unternehmen & Assets der Dr. Hofeditz Real Estate GmbH.
// Jede Marke mit eigener Website wird hier einzeln gelistet (Startseite + /unternehmen).
// `sichtbar: false` = noch nicht öffentlich (z. B. Vibe League bis zum Okay von Sebastian Diemer).

export type Asset = {
  id: string
  name: string
  domain: string
  url: string
  img: string
  sichtbar: boolean
  de: { rolle: string; status: string; text: string; cta: string }
  en: { rolle: string; status: string; text: string; cta: string }
}

const utm = (url: string, campaign: string) =>
  `${url}${url.includes('?') ? '&' : '?'}utm_source=dr-hofeditz.de&utm_medium=referral&utm_campaign=${campaign}`

export const assets: Asset[] = [
  {
    id: 'offmarketpool',
    name: 'Offmarketpool',
    domain: 'offmarketpool.de',
    url: utm('https://offmarketpool.de', 'assets'),
    img: '/story/schluesselloch-stadt.webp',
    sichtbar: true,
    de: {
      rolle: 'Plattform · Investmentimmobilien',
      status: 'Live',
      text: 'Die Off-Market-Plattform für Investmentimmobilien: Eigentümer, Makler und Käufer finden sich über Ankaufsprofile – diskret, ohne öffentliches Inserat. Mit eigener Verwaltung für Miet-, WEG- und Sondereigentum.',
      cta: 'Zur Plattform',
    },
    en: {
      rolle: 'Platform · Investment real estate',
      status: 'Live',
      text: 'The off-market platform for investment real estate: owners, brokers and buyers are matched via acquisition profiles – discreetly, without public listings. Including in-house property management.',
      cta: 'Visit platform',
    },
  },
  {
    id: 'elsterbot',
    name: 'Elsterbot',
    domain: 'elsterbot.de',
    url: utm('https://www.elsterbot.de', 'assets'),
    img: '/story/elsterbot-kopf.webp',
    sichtbar: true,
    de: {
      rolle: 'KI · Steuererklärung im Chat',
      status: 'Beta',
      text: 'Die Steuererklärung im KI-Chat: als Connector in Claude oder ChatGPT, Berechnung aus den eigenen Unterlagen, Prüfung und Übermittlung durch angeschlossene Steuerkanzleien. Kein Angebot der Finanzverwaltung.',
      cta: 'Zu Elsterbot',
    },
    en: {
      rolle: 'AI · Tax returns in chat',
      status: 'Beta',
      text: 'German tax returns inside an AI chat: a connector for Claude or ChatGPT, calculated from your own documents, reviewed and filed by partner tax firms. Not a service of the tax authorities.',
      cta: 'Visit Elsterbot',
    },
  },
  {
    id: 'immobilienluege',
    name: 'Die Immobilienlüge',
    domain: 'immobilienluege.de',
    url: utm('https://www.immobilienluege.de', 'assets'),
    img: '/story/buch-fassade.webp',
    sichtbar: true,
    de: {
      rolle: 'Buch · Psychologie beim Immobilienkauf',
      status: 'Herbst 2027',
      text: 'Das Buch zur Immobilienlüge: „Psychologie beim Immobilienkauf“ erscheint im Herbst 2027 bei Econ (Ullstein Buchverlage). Forschung, Fälle und die Mechanismen hinter teuren Fehlentscheidungen.',
      cta: 'Zum Buch',
    },
    en: {
      rolle: 'Book · The psychology of buying property',
      status: 'Autumn 2027',
      text: 'The book behind “Die Immobilienlüge”: “Psychologie beim Immobilienkauf” will be published by Econ (Ullstein) in autumn 2027 – research, cases and the mechanics of costly decisions.',
      cta: 'About the book',
    },
  },
  {
    id: 'vibe-league',
    name: 'Vibe League',
    domain: 'vibe-league.com',
    url: 'https://vibe-league.com',
    img: '/story/elsterbot-flug.webp',
    sichtbar: false,
    de: { rolle: 'Community · Vibe Coding', status: 'Beta', text: 'Community und Inkubator für Vibe Coder.', cta: 'Zur Vibe League' },
    en: { rolle: 'Community · Vibe coding', status: 'Beta', text: 'Community and incubator for vibe coders.', cta: 'Visit Vibe League' },
  },
]

export const sichtbareAssets = () => assets.filter((a) => a.sichtbar)
