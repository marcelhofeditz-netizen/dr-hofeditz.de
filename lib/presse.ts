// Newsroom der Dr. Hofeditz Real Estate GmbH – Pressemitteilungen aller Marken.
// Neue Meldung: Eintrag in `meldungen` ergänzen. Erst mit `veroeffentlicht: true` ist sie
// auf /presse, im RSS-Feed und in der News-Sitemap sichtbar.

export const BASE = 'https://www.dr-hofeditz.de'
export const PRESSE_MAIL = 'marcel@dr-hofeditz.de'

export type MarkeId = 'holding' | 'offmarketpool' | 'elsterbot' | 'trainingsbot' | 'vibe-league' | 'buch'

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
      'Steuererklärung im KI-Chat: Elsterbot berechnet Einkommensteuer und Anlage EÜR aus den Unterlagen des Nutzers – in der App, im Website-Chat oder als Connector in Claude und ChatGPT. Nutzer senden die Erklärung nach einmaliger Identifizierung selbst ans Finanzamt, ohne eigenes ELSTER-Konto, oder lassen sie von einer Partnerkanzlei prüfen und übermitteln. Derzeit in der Beta; kein Angebot der Finanzverwaltung und keine Steuerberatung.',
    sichtbar: true,
  },
  {
    id: 'trainingsbot',
    name: 'Trainingsbot',
    url: 'https://www.trainingsbot.de',
    kurz: 'Trainingsbot',
    beschreibung:
      'Lernplattform, die Menschen beibringt, mit KI zu arbeiten: Der Trainingsbot wird als Connector in Claude oder ChatGPT verbunden und führt durch Kurse zu KI, Steuern und Immobilien, die sich dem Level der Teilnehmenden anpassen. Trainer und Bildungsträger können eigene Kurse anbieten. Derzeit in der Beta.',
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
    url: 'https://www.immobilienluege.de',
    kurz: 'Buch',
    beschreibung:
      'Projekt und Marke rund um Verhaltensökonomie, Spieltheorie und Marktpsychologie im deutschen Immobilienmarkt. Das Buch dazu, „Psychologie beim Immobilienkauf“ von Dr. Marcel Hofeditz, erscheint im Herbst 2027 bei Econ (Ullstein Buchverlage).',
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
    slug: 'elsterbot-steuererklaerung-direkt-ans-finanzamt',
    marke: 'elsterbot',
    datum: '2026-11-25',
    titel: 'Elsterbot: Steuererklärung aus dem KI-Chat direkt ans Finanzamt – ohne eigenes ELSTER-Konto',
    ort: 'Hamburg',
    lead:
      'Mit Elsterbot können Privatpersonen ihre Einkommensteuererklärung jetzt nicht nur im Chat berechnen, sondern auch selbst rechtsverbindlich an das Finanzamt übermitteln. Ein eigenes ELSTER-Konto oder Zertifikat ist dafür nicht nötig.',
    absaetze: [
      'Elsterbot liest Lohnsteuerbescheinigung und Belege aus, stimmt die Werte mit dem Nutzer ab und berechnet die Erklärung für die Jahre 2023 bis 2025 – auf Wunsch einschließlich Anlage EÜR für Selbständige und Freiberufler. Das funktioniert in der iOS-App, im Chat auf elsterbot.de und als Connector in Claude oder ChatGPT.',
      'Vor dem Versand läuft die amtliche ELSTER-Prüfung, auch ein Testversand ist möglich. Für den rechtsverbindlichen Versand identifiziert sich der Nutzer einmalig mit Ausweis und Selfie; Elsterbot übermittelt die Erklärung danach in seinem Auftrag mit dem eigenen Elsterbot-Zertifikat. Vor dem Senden bestätigt der Nutzer die Zusammenfassung ausdrücklich.',
      'Rechnen, Prüfen und Testversand sind kostenlos. Bezahlt wird erst beim rechtsverbindlichen Versand: 39 Euro je Jahr für Arbeitnehmer und Rentner, 69 Euro mit Vermietung oder privatem Veräußerungsgeschäft, jeweils inklusive Mehrwertsteuer (Einführungspreise). Wer eine Prüfung möchte, wählt im Chat eine Partnerkanzlei, die zu ihrem eigenen Festpreis prüft und übermittelt.',
      'Der Direktversand ist als Beta gestartet. Elsterbot ist kein Angebot der Finanzverwaltung und leistet keine Steuerberatung; die Server stehen in Frankfurt.',
    ],
    zitat: {
      text: 'Die Steuererklärung soll so einfach sein wie eine Nachricht schreiben – vom Beleg bis zum Finanzamt in einem Chat.',
      person: 'Dr. Marcel Hofeditz, Gründer',
    },
    veroeffentlicht: true,
  },
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
