import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Website dr-hofeditz.de gemäß DSGVO.',
  alternates: { canonical: 'https://www.dr-hofeditz.de/datenschutz' },
  robots: { index: true, follow: true },
}

export default function DatenschutzPage() {
  return (
    <section className="px-[5vw] py-24 min-h-[70vh]">
      <div className="max-w-[700px] mx-auto">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">
          Rechtliches
        </p>
        <h1
          className="font-sans font-extrabold tracking-[-0.02em] leading-[1.1] mb-10 text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-[0.9rem] leading-[1.8] text-grey-secondary">
          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Dr. Marcel Hofeditz<br />
              Dr. Hofeditz Real Estate GmbH<br />
              Am Klein Flottbeker Bahnhof 55<br />
              22609 Hamburg<br />
              E-Mail: info@dr-hofeditz.de
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische Informationen
              erfasst (IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit). Diese
              Daten werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              4. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website
              werden ggf. Daten an Server in den USA übertragen. Vercel ist unter dem
              EU-US Data Privacy Framework zertifiziert.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
              Wenden Sie sich hierzu an info@dr-hofeditz.de.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              6. Externe Dienste
            </h2>
            <p>
              Diese Website kann eingebettete Inhalte von YouTube und Spotify
              enthalten. Beim Laden dieser Inhalte wird eine Verbindung zu den
              jeweiligen Servern hergestellt. YouTube-Embeds nutzen den erweiterten
              Datenschutzmodus (youtube-nocookie.com).
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-extrabold tracking-[-0.02em] text-[1rem] mb-2">
              7. Warteliste und Newsletter zum Buch (immobilienluege.de / thepropertylie.com)
            </h2>
            <p>
              Wenn Sie sich auf der Warteliste zum Buch „Psychologie beim Immobilienkauf“
              eintragen, speichern wir Ihre E-Mail-Adresse, optional Vorname und Ihre Angabe,
              wer Sie sind, sowie Sprache, Herkunft des Eintrags und Zeitpunkt und Wortlaut Ihrer
              Einwilligung. Zweck: Information zum Erscheinen und Vorbestellen des Buchs sowie
              unser Newsletter mit Beiträgen zur Immobilienpsychologie. Rechtsgrundlage ist Ihre
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit per Abmeldelink in
              jeder Mail oder an info@dr-hofeditz.de widerrufen können. Die Daten liegen bei
              Supabase (Rechenzentrum in Irland, EU) als Auftragsverarbeiter und werden bis
              zum Widerruf gespeichert. Für den Versand von Newsletter-Mails kann ein
              E-Mail-Dienstleister mit Sitz in der EU eingesetzt werden; vor dem ersten
              Newsletter bestätigen Sie Ihre Adresse per Link (Double-Opt-in).
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-extrabold tracking-[-0.02em] text-[1rem] mb-2">
              8. KI-Agent „Doc“
            </h2>
            <p>
              Fragen an den KI-Agenten „Doc“ werden zur Beantwortung an Anthropic PBC
              (USA) übermittelt und von uns nicht gespeichert. Bitte geben Sie dort keine
              personenbezogenen oder vertraulichen Daten ein.
            </p>
          </div>
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
