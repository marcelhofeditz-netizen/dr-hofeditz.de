// Newsroom der Dr. Hofeditz Real Estate GmbH – Pressemitteilungen aller Marken.
// Neue Meldung: Eintrag in `meldungen` ergänzen. Erst mit `veroeffentlicht: true` ist sie
// auf /presse, im RSS-Feed und in der News-Sitemap sichtbar.

export const BASE = 'https://www.dr-hofeditz.de'
export const PRESSE_MAIL = 'info@dr-hofeditz.de'

export type MarkeId = 'holding' | 'offmarketpool' | 'elsterbot' | 'vibe-league' | 'buch'

export type Marke = {
  id: MarkeId
  name: string
  url: string
  kurz: string
  beschreibung: string
  /** Steckbrief öffentlich auf /presse zeigen */
  sichtbar: boolean
}

export const marken: Marke[] = [
  {
    id: 'holding',
    name: 'Dr. Hofeditz Real Estate GmbH',
    url: BASE,
    kurz: 'Holding',
    beschreibung:
      'Immobilienunternehmen aus Hamburg mit Erlaubnis nach § 34c GewO. Gründer und Geschäftsführer ist Dr. Marcel Hofeditz. Unter dem Dach der Gesellschaft entstehen die Plattform Offmarketpool und weitere Produkte rund um Immobilien und Digitalisierung.',
    sichtbar: true,
  },
  {
    id: 'offmarketpool',
    name: 'Offmarketpool',
    url: 'https://offmarketpool.de',
    kurz: 'Offmarketpool',
    beschreibung:
      'KI-gestützte Plattform für diskrete Transaktionen von Investmentimmobilien. Eigentümer, Makler und Käufer werden über hinterlegte Ankaufsprofile gematcht – ohne öffentliches Inserat, Exposés gehen erst nach Zustimmung des Eigentümers raus.',
    sichtbar: true,
  },
  {
    id: 'elsterbot',
    name: 'Elsterbot',
    url: 'https://www.elsterbot.de',
    kurz: 'Elsterbot',
    beschreibung:
      'Steuererklärung im KI-Chat: Elsterbot wird als Connector in Claude oder ChatGPT verbunden und berechnet die Einkommensteuer aus den Unterlagen des Nutzers. Prüfung und Übermittlung übernehmen angeschlossene Steuerkanzleien. Derzeit in der Beta; kein Angebot der Finanzverwaltung.',
    sichtbar: true,
  },
  {
    id: 'vibe-league',
    name: 'Vibe League',
    url: 'https://vibe-league.com',
    kurz: 'Vibe League',
    beschreibung: 'Community and incubator for vibe coders.',
    sichtbar: false, // erst nach Okay von Sebastian Diemer öffentlich
  },
  {
    id: 'buch',
    name: 'Die Immobilienlüge',
    url: `${BASE}/buch`,
    kurz: 'Buch',
    beschreibung:
      'Sachbuch von Dr. Marcel Hofeditz über Verhaltensökonomie, Spieltheorie und Marktpsychologie im deutschen Immobilienmarkt. Erscheint im Herbst 2027 bei Econ (Ullstein Buchverlage).',
    sichtbar: true,
  },
]

export const getMarke = (id: MarkeId) => marken.find((m) => m.id === id)!

export type Meldung = {
  slug: string
  marke: MarkeId
  datum: string // ISO, Veröffentlichungsdatum
  titel: string
  ort: string
  lead: string
  absaetze: string[]
  zitat?: { text: string; person: string }
  sprache?: 'de' | 'en'
  veroeffentlicht: boolean
}

export const meldungen: Meldung[] = [
  {
    slug: 'elsterbot-steuererklaerung-im-ki-chat',
    marke: 'elsterbot',
    datum: '2026-11-09',
    titel: 'Elsterbot: Steuererklärung im KI-Chat – Steuerkanzleien zahlen feste Lizenz statt Provision',
    ort: 'Hamburg',
    lead:
      'Die Dr. Hofeditz Real Estate GmbH startet mit Elsterbot eine Software, mit der Privatpersonen ihre Einkommensteuer im Chat mit Claude oder ChatGPT vorbereiten. Die Berechnung für die Jahre 2023 bis 2025 läuft bereits in der Beta.',
    absaetze: [
      'Elsterbot wird einmal als Connector im KI-Assistenten verbunden. Die KI liest Lohnsteuerbescheinigung und Belege aus, stimmt die Werte mit dem Nutzer ab und berechnet die Erklärung.',
      'Wer eine Prüfung möchte, wählt im Chat eine angeschlossene Steuerkanzlei. Die Kanzlei erhält den fertig berechneten Fall, prüft ihn, gibt ihn frei und übermittelt ihn mit ihrem eigenen Zertifikat an das Finanzamt. Ihr Honorar legt sie selbst fest und rechnet direkt mit dem Mandanten ab. Kanzleien zahlen eine feste Monatsgebühr ab 49 Euro, unabhängig von der Zahl der Fälle; Pilotkanzleien nutzen Elsterbot kostenlos.',
      'Die Übermittlung an das Finanzamt startet, sobald die Software bei ELSTER zugelassen ist. Elsterbot ist kein Angebot der Finanzverwaltung und leistet keine Steuerberatung.',
    ],
    zitat: {
      text: 'Steuerberater sollen prüfen, nicht abtippen. Die Vorarbeit macht die KI, die Verantwortung bleibt bei der Kanzlei.',
      person: 'Dr. Marcel Hofeditz, Gründer',
    },
    veroeffentlicht: false, // wartet auf Freigabe durch Marcel
  },
]

export const veroeffentlichte = () =>
  meldungen
    .filter((m) => m.veroeffentlicht)
    .sort((a, b) => b.datum.localeCompare(a.datum))

export const getMeldung = (slug: string) => veroeffentlichte().find((m) => m.slug === slug)

export const fmtDatum = (iso: string) =>
  new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' })

export const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
