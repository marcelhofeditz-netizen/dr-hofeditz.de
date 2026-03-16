import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Website dr-hofeditz.de – Angaben gemäß § 5 TMG.',
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
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Dr. Marcel Hofeditz<br />
              Dr. Hofeditz Real Estate GmbH<br />
              Jevenstedter Straße 176a<br />
              22547 Hamburg
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Kontakt
            </h2>
            <p>
              E-Mail: info@dr-hofeditz.de
            </p>
          </div>

          <div>
            <h2 className="text-text-primary font-medium text-[1rem] mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Dr. Marcel Hofeditz<br />
              Jevenstedter Straße 176a<br />
              22547 Hamburg
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
