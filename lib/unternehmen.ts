// Unternehmen & Assets der Dr. Hofeditz Real Estate GmbH.
// Jede Marke mit eigener Website wird hier einzeln gelistet (Startseite + /unternehmen).
// `sichtbar: false` = noch nicht öffentlich (z. B. Vibe League bis zum Okay von Sebastian Diemer).

export type Kategorie = 'immobilien' | 'ki' | 'medien' | 'commerce'

export const kategorien: { id: Kategorie; de: string; en: string }[] = [
  { id: 'immobilien', de: 'Immobilien', en: 'Real estate' },
  { id: 'ki', de: 'KI-Bots', en: 'AI bots' },
  { id: 'medien', de: 'Bücher & Medien', en: 'Books & media' },
  { id: 'commerce', de: 'Commerce', en: 'Commerce' },
]

export type Asset = {
  id: string
  name: string
  domain: string
  url: string
  img?: string
  sichtbar: boolean
  /** Neu dazugekommen – bekommt das NEU-Label und steht oben in „Neu dabei“ */
  neu?: boolean
  kategorie: Kategorie
  de: { rolle: string; status: string; text: string; cta: string }
  en: { rolle: string; status: string; text: string; cta: string }
}

const utm = (url: string, campaign: string) =>
  `${url}${url.includes('?') ? '&' : '?'}utm_source=dr-hofeditz.de&utm_medium=referral&utm_campaign=${campaign}`

export const assets: Asset[] = [
  {
    id: 'offmarketpool',
    kategorie: 'immobilien',
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
    kategorie: 'ki',
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
    id: 'trainingsbot',
    kategorie: 'ki',
    name: 'Trainingsbot',
    domain: 'trainingsbot.de',
    url: utm('https://www.trainingsbot.de', 'assets'),
    img: '/story/trainingsbot-professor.webp',
    sichtbar: true,
    de: {
      rolle: 'KI · Lernen mit Connector',
      status: 'Beta',
      text: 'Der Trainingsbot bringt Menschen bei, mit KI zu arbeiten – direkt als Connector in Claude oder ChatGPT. Kurse zu KI, Steuern und Immobilien, die sich dem eigenen Level anpassen, dazu Trainer, Rangliste und ein wöchentliches Weekly in der Community.',
      cta: 'Zum Trainingsbot',
    },
    en: {
      rolle: 'AI · Learning via connector',
      status: 'Beta',
      text: 'Trainingsbot teaches people how to work with AI – as a connector right inside Claude or ChatGPT. Courses on AI, taxes and real estate that adapt to your level, plus trainers, leaderboards and a weekly community call.',
      cta: 'Visit Trainingsbot',
    },
  },
  {
    id: 'immobilienluege',
    kategorie: 'medien',
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
    id: 'finanzenbot',
    kategorie: 'ki',
    neu: true,
    name: 'Finanzenbot',
    domain: 'finanzenbot.de',
    url: utm('https://www.finanzenbot.de', 'assets'),
    sichtbar: true,
    de: {
      rolle: 'KI · Finanzen im Chat',
      status: 'In Entwicklung',
      text: 'Der Finanzenbot liest die eigenen Kontoumsätze über eine Bankschnittstelle, erkennt Abos und Fixkosten und zeigt, wo sich sparen lässt – als App und als Connector in Claude oder ChatGPT, kombinierbar mit Elsterbot. Keine Anlageberatung.',
      cta: 'Zum Finanzenbot',
    },
    en: {
      rolle: 'AI · Personal finance in chat',
      status: 'In development',
      text: 'Finanzenbot reads your account transactions via a bank interface, spots subscriptions and fixed costs and shows where to save – as an app and as a connector for Claude or ChatGPT, combinable with Elsterbot. No investment advice.',
      cta: 'Visit Finanzenbot',
    },
  },
  {
    id: 'selfpublishbot',
    kategorie: 'medien',
    neu: true,
    name: 'Selfpublishbot',
    domain: 'selfpublishbot.de',
    url: utm('https://www.selfpublishbot.de', 'assets'),
    sichtbar: true,
    de: {
      rolle: 'KI · Eigenes Buch veröffentlichen',
      status: 'Alpha',
      text: 'Veröffentliche dein eigenes Buch mit KI: Geschichte im Chat erzählen, der Selfpublishbot macht daraus Roman oder Sachbuch, Cover und Hörbuch – und stellt es ins öffentliche Bücherregal zum Lesen, Hören und Bewerten.',
      cta: 'Zum Selfpublishbot',
    },
    en: {
      rolle: 'AI · Publish your own book',
      status: 'Alpha',
      text: 'Publish your own book with AI: tell your story in the chat, Selfpublishbot turns it into a novel or non-fiction book, cover and audiobook – and puts it on a public shelf to read, listen to and rate.',
      cta: 'Visit Selfpublishbot',
    },
  },
  {
    id: 'latienda',
    kategorie: 'commerce',
    neu: true,
    name: 'La Tienda',
    domain: 'latienda.ec',
    url: utm('https://www.latienda.ec', 'assets'),
    sichtbar: true,
    de: {
      rolle: 'KI · Online-Shop in 2 Minuten',
      status: 'Pilot',
      text: 'Händler verbinden Instagram, Facebook oder WhatsApp – die KI baut daraus automatisch einen eigenen Online-Shop mit Bezahlung und Lieferung, gesteuert per Chat. Dazu ein Marktplatz als App. Pilotmarkt Lateinamerika.',
      cta: 'Zu La Tienda',
    },
    en: {
      rolle: 'AI · Online shop in 2 minutes',
      status: 'Pilot',
      text: 'Merchants connect Instagram, Facebook or WhatsApp – the AI automatically builds their own online shop with payment and delivery, managed via chat. Plus a marketplace app. Pilot market: Latin America.',
      cta: 'Visit La Tienda',
    },
  },
  {
    id: 'vibe-league',
    kategorie: 'ki',
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
export const neueAssets = () => sichtbareAssets().filter((a) => a.neu)
