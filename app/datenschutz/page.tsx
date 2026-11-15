import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Website dr-hofeditz.de gemäß DSGVO.',
  alternates: { canonical: 'https://www.dr-hofeditz.de/datenschutz' },
  robots: { index: true, follow: true },
}

const SECTIONS: { title: string; paragraphs: string[] }[] = [
  {
    title: '1. Verantwortlicher',
    paragraphs: [
      'Dr. Hofeditz Real Estate GmbH, Am Klein Flottbeker Bahnhof 55, 22609 Hamburg, vertreten durch den Geschäftsführer Dr. Marcel Hofeditz. Telefon: +49 1515 046 7537, E-Mail: marcel@dr-hofeditz.de. Für alle Datenschutzfragen erreichen Sie uns unter dieser E-Mail-Adresse.',
      'Diese Erklärung gilt für die Website dr-hofeditz.de. Für die Plattform Offmarketpool gilt die Datenschutzerklärung unter offmarketpool.de/datenschutz.',
    ],
  },
  {
    title: '2. Hosting und Server-Logfiles',
    paragraphs: [
      'Die Website wird bei Vercel Inc., 650 California St, San Francisco, CA 94108, USA, gehostet. Beim Aufruf verarbeitet Vercel in unserem Auftrag technisch notwendige Daten (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem, verweisende Seite) in Server-Logfiles, um die Website auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse am sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework und ergänzend auf EU-Standardvertragsklauseln. Die Logfiles löscht Vercel nach kurzer Zeit automatisch.',
    ],
  },
  {
    title: '3. Keine Cookies, kein Tracking, Schriften lokal',
    paragraphs: [
      'Wir setzen keine Cookies und keine Analyse- oder Werbedienste ein. In Ihrem Browser speichern wir nur Ihre Sprachauswahl (localStorage „locale“), damit die Seite in Ihrer Sprache erscheint; das ist für den von Ihnen gewünschten Dienst unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Die Schriftart wird von unserem eigenen Server ausgeliefert; es besteht keine Verbindung zu Google Fonts.',
    ],
  },
  {
    title: '4. Kontakt',
    paragraphs: [
      'Schreiben Sie uns per E-Mail oder rufen Sie an, verarbeiten wir Ihre Angaben, um Ihr Anliegen zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Unsere E-Mails laufen über Google Workspace (Google Ireland Limited, Irland) auf Grundlage eines Auftragsverarbeitungsvertrags. Wir löschen die Daten, wenn Ihr Anliegen erledigt ist und keine Aufbewahrungspflichten bestehen.',
      'Auf der Website verlinken wir auf WhatsApp und auf einen Calendly-Buchungslink für Gespräche. Erst wenn Sie einen dieser Links öffnen, werden Daten an WhatsApp (Meta Platforms Ireland Limited; Meta Platforms, Inc., USA) bzw. Calendly LLC (USA) übermittelt; dort gelten deren Datenschutzbestimmungen. Ihre Angaben bei einer Terminbuchung verarbeiten wir zur Vorbereitung des Gesprächs (Art. 6 Abs. 1 lit. b DSGVO).',
    ],
  },
  {
    title: '5. KI-Agent „Doc“',
    paragraphs: [
      '„Doc“ ist ein KI-Assistent und als solcher gekennzeichnet (Art. 50 KI-Verordnung). Ihre Fragen und höchstens die letzten Nachrichten des Gesprächs werden zur Beantwortung an Anthropic PBC, 500 Howard St, San Francisco, CA 94105, USA, übermittelt (Modell Claude). Wir speichern den Gesprächsverlauf nicht. Die Übermittlung in die USA stützt sich auf EU-Standardvertragsklauseln bzw. das EU-US Data Privacy Framework. Rechtsgrundlage ist unser berechtigtes Interesse, Besuchern Fragen zu Buch und Themen direkt zu beantworten (Art. 6 Abs. 1 lit. f DSGVO). Bitte geben Sie im Chat keine personenbezogenen oder vertraulichen Daten ein. Die Antworten der KI können unvollständig oder fehlerhaft sein und sind keine Anlage-, Rechts- oder Steuerberatung.',
    ],
  },
  {
    title: '6. Eingebettete Videos und Podcasts',
    paragraphs: [
      'Videos von YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; im erweiterten Datenschutzmodus über youtube-nocookie.com) und den Podcast-Player von Spotify (Spotify AB, Schweden) laden wir erst, wenn Sie auf „YouTube laden“ bzw. „Spotify laden“ klicken. Erst dann werden Daten (u. a. Ihre IP-Adresse) an den Anbieter übermittelt, ggf. auch in die USA, und der Anbieter kann Cookies setzen. Rechtsgrundlage ist Ihre Einwilligung durch den Klick (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie für künftige Besuche jederzeit verweigern können, indem Sie nicht klicken.',
    ],
  },
  {
    title: '7. BitDoc (Trading-Experiment)',
    paragraphs: [
      'Die Seite /bitdoc zeigt Kennzahlen eines privaten Trading-Experiments. Die Daten ruft unser Server aus unserer eigenen Datenbank (Supabase, Region Irland) ab; dabei werden keine Daten über Sie übermittelt.',
    ],
  },
  {
    title: '8. Warteliste und Newsletter zum Buch (immobilienluege.de / thepropertylie.com)',
    paragraphs: [
      'Wenn Sie sich auf der Warteliste zum Buch „Psychologie beim Immobilienkauf“ eintragen, speichern wir Ihre E-Mail-Adresse, optional Vorname und Ihre Angabe, wer Sie sind, sowie Sprache, Herkunft des Eintrags und Zeitpunkt und Wortlaut Ihrer Einwilligung. Zweck: Information zum Erscheinen und Vorbestellen des Buchs sowie unser Newsletter mit Beiträgen zur Immobilienpsychologie. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit per Abmeldelink in jeder Mail oder an marcel@dr-hofeditz.de widerrufen können. Vor dem ersten Newsletter bestätigen Sie Ihre Adresse per Link (Double-Opt-in). Die Daten liegen bei Supabase (Rechenzentrum in Irland, EU) als Auftragsverarbeiter und werden bis zum Widerruf gespeichert.',
    ],
  },
  {
    title: '9. Soziale Netzwerke',
    paragraphs: [
      'Unsere Profile bei LinkedIn, Instagram, TikTok, YouTube und Spotify sind auf der Website nur verlinkt; Daten fließen erst, wenn Sie einen Link anklicken. Für ihre Verarbeitung sind die Netzwerke selbst verantwortlich; bei Seitenstatistiken kann eine gemeinsame Verantwortlichkeit mit uns bestehen (Art. 26 DSGVO).',
    ],
  },
  {
    title: '10. Ihre Rechte',
    paragraphs: [
      'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3).',
      'Widerspruchsrecht (Art. 21 DSGVO): Verarbeiten wir Daten auf Grundlage berechtigter Interessen, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen; der Verarbeitung für Direktwerbung können Sie jederzeit ohne Angabe von Gründen widersprechen.',
      'Wenden Sie sich dazu an marcel@dr-hofeditz.de. Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO); zuständig für uns ist Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit, Ludwig-Erhard-Str. 22, 20459 Hamburg (datenschutz-hamburg.de).',
    ],
  },
  {
    title: '11. Datensicherheit',
    paragraphs: [
      'Die Website wird ausschließlich verschlüsselt (TLS) ausgeliefert. Eine Pflicht, uns Daten bereitzustellen, besteht nicht; ohne Angaben können wir eine Anfrage aber nicht beantworten. Automatisierte Entscheidungen nach Art. 22 DSGVO treffen wir nicht.',
    ],
  },
]

export default function DatenschutzPage() {
  return (
    <section className="px-[5vw] py-24 min-h-[70vh]">
      <div className="max-w-[700px] mx-auto">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">
          Rechtliches
        </p>
        <h1
          className="font-sans font-extrabold tracking-[-0.02em] leading-[1.1] mb-4 text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Datenschutzerklärung
        </h1>
        <p className="text-[0.75rem] text-grey-secondary mb-10">Stand: 15. November 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-[1.8] text-grey-secondary">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-text-primary font-medium text-[1rem] mb-2">{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : undefined}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-grey-light">
          <Link
            href="/"
            className="text-[0.76rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
          >
            &larr; Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  )
}
