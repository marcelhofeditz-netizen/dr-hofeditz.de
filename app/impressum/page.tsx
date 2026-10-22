import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Website dr-hofeditz.de – Angaben gemäß § 5 DDG.',
  alternates: { canonical: 'https://www.dr-hofeditz.de/impressum' },
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
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
          Impressum
        </h1>

        <div className="space-y-8 text-[0.9rem] leading-[1.8] text-grey-secondary">
          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Dr. Hofeditz Real Estate GmbH<br />
              Am Klein Flottbeker Bahnhof 55<br />
              22609 Hamburg
            </p>
            <p className="mt-3">
              Vertreten durch den Geschäftsführer: Dr. Marcel Hofeditz
            </p>
            <p className="mt-3">
              Registergericht: Amtsgericht Hamburg<br />
              Handelsregister: HRB 180163
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Kontakt
            </h2>
            <p>
              Telefon: +49 (0) 1515 0467537<br />
              E-Mail: info@dr-hofeditz.de
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Aufsichtsbehörde und Berufsrecht
            </h2>
            <p>
              Erlaubnis als Immobilienmakler nach § 34c Abs. 1 GewO, erteilt durch die
              zuständige Erlaubnisbehörde der Freien und Hansestadt Hamburg
              (Bezirksamt Altona, Verbraucherschutzamt).
            </p>
            <p className="mt-3">
              Es gelten die berufsrechtlichen Regelungen der Gewerbeordnung (GewO) und
              der Makler- und Bauträgerverordnung (MaBV), einsehbar unter{' '}
              <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-text-primary">
                www.gesetze-im-internet.de
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Dr. Marcel Hofeditz<br />
              Am Klein Flottbeker Bahnhof 55<br />
              22609 Hamburg
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
              ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Urheberrecht
            </h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
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
