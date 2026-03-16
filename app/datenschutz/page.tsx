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
          className="font-sans font-medium tracking-[-0.02em] leading-[1.1] mb-10 text-text-primary"
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
              Jevenstedter Straße 176a<br />
              22547 Hamburg<br />
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
