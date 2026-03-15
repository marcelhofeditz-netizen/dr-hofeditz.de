import { Eyebrow, SectionTitle, BtnPrimary, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forschung – Dr. Marcel Hofeditz',
  description:
    'Wissenschaftliche Publikationen von Dr. Marcel Hofeditz. Forschungsschwerpunkte: Organizational Trust, Compliance, Strategy. Universitat Munster.',
}

const journalPapers = [
  {
    year: '2017',
    title: '"Want to" Versus "Have to": Intrinsic and Extrinsic Motivators as Predictors of Compliance Behavior Intention',
    authors: 'Hofeditz, M., Nienaber, A., Dysvik, A. & Schewe, G.',
    journal: 'Human Resource Management',
    details: '56(1), 25–49',
    link: 'https://scholar.google.de/citations?user=SsmSw1kAAAAJ&hl=en',
  },
  {
    year: '2015',
    title: 'Vulnerability and Trust in Leader-Follower Relationships',
    authors: 'Nienaber, A., Hofeditz, M. & Romeike, P.',
    journal: 'Personnel Review',
    details: '44(4), 567–591',
    link: 'https://www.emerald.com/insight/content/doi/10.1108/PR-09-2013-0162/full/html',
  },
  {
    year: '2014',
    title: 'Do We Bank on Regulation or Reputation? A Meta-Analysis and Meta-Regression of Organizational Trust in the Financial Services Sector',
    authors: 'Nienaber, A., Hofeditz, M. & Searle, R.',
    journal: 'International Journal of Bank Marketing',
    details: '35(5), 367–407',
    link: 'https://www.emerald.com/insight/content/doi/10.1108/IJBM-12-2013-0146/full/html',
  },
  {
    year: '2014',
    title: 'Risikomanagement im herstellenden Mittelstand — Verschwendungen durch Uber- oder Untersteuerung von Risiken erkennen',
    authors: 'Neyer, B. & Hofeditz, M.',
    journal: 'Zeitschrift Fuhrung + Organisation (zfo)',
    details: '83(4), 227–232',
    link: 'https://scholar.google.de/citations?user=SsmSw1kAAAAJ&hl=en',
  },
  {
    year: '2014',
    title: 'Risk Management of Mid-Sized Companies — Don\'t Over-Steer nor Understeer!',
    authors: 'Neyer, B. & Hofeditz, M.',
    journal: 'Journal of Leadership and Organisation (Zeitschrift fur Fuhrung und Organisation)',
    details: '2014(83), 272–332',
    link: 'https://scholar.google.de/citations?user=SsmSw1kAAAAJ&hl=en',
  },
]

const conferencePapers = [
  {
    year: '2015',
    title: 'The Decline of the Resource-Based-View? A Meta-Analytic Investigation',
    authors: 'Hofeditz, M., Hennemann, P. & Schewe, G.',
    venue: 'Proceedings of the SMS Special Conference, Chile',
  },
  {
    year: '2015',
    title: 'Stuck in the Middle or Star in the Middle? A Meta-Analysis of Porter\'s Generic Strategies',
    authors: 'Hofeditz, M. S. & S./, S. G.',
    venue: 'Proceedings of the SMS Special Conference, Chile',
  },
  {
    year: '2013',
    title: 'Restoring Trust: Is It My Experience or That of My Friend That Matters Most?',
    authors: 'Nienaber, A., Hofeditz, M. & Searle, R.',
    venue: 'Proceedings of the Social Relations and Human Security Conference, Coventry, UK',
  },
  {
    year: '2013',
    title: 'Reputation Counts but the Relationship History Does Not Matter! Asian Characteristics in Business Relationships — A Meta-Analysis',
    authors: 'Nienaber, A., Hofeditz, M., Searle, R. & Schewe, G.',
    venue: 'Proceedings of the First International Network on Trust Symposium, Singapore',
  },
  {
    year: '2013',
    title: 'The Curvilinear Dynamics of INTEROrganizational Trust — A Meta-Analysis of Two Decades Trust Research',
    authors: 'Nienaber, A., Hofeditz, M., Struchholz, K. & Schewe, G.',
    venue: 'Proceedings of the WK ORG Workshop 2013, Jena, Deutschland',
  },
]

const workingPapers = [
  {
    year: '2013',
    title: 'Compliance-Motivation im Einkauf und Vertrieb',
    authors: 'Hofeditz, M., Schewe, G. & Sass, V.',
    venue: 'Forschungsbericht des Risk & Compliance Research Center, Universitat Munster',
  },
  {
    year: '2013',
    title: 'Compliance-Delikte in deutschen Grossunternehmen',
    authors: 'Schewe, G. & Hofeditz, M.',
    venue: 'Forschungsbericht des Risk & Compliance Research Center, Universitat Munster',
  },
  {
    year: '2013',
    title: 'The Empirical Research Landscape of Divestiture — A Review of Antecedent, Process and Outcome Measures',
    authors: 'Schewe, G., Hofeditz, M. & Liesenkotter, B.',
    venue: 'Arbeitspapiere des Lehrstuhls fur BWL, insb. Organisation, Personal und Innovation, Vol. 87, WWU Munster',
  },
]

const schwerpunkte = [
  {
    title: 'Organizational Trust',
    desc: 'Wie entsteht Vertrauen in Organisationen? Welche Mechanismen starken oder zerstoren es?',
  },
  {
    title: 'Compliance & Motivation',
    desc: 'Warum befolgen Menschen Regeln – und wann werden Compliance-Systeme kontraproduktiv?',
  },
  {
    title: 'Strategy & Risk',
    desc: 'Strategisches Risikomanagement und Entscheidungsfindung unter Unsicherheit.',
  },
]

export default function ForschungPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[50vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>Wissenschaft &middot; Universitat Munster</Eyebrow>
          <h1
            className="font-serif font-light leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            For<em className="italic">schung</em>
          </h1>
          <p className="text-[1rem] leading-relaxed mb-4 max-w-[52ch] text-grey-secondary">
            Promoviert mit summa cum laude an der Universitat Munster.
            Forschungsschwerpunkte: Organizational Trust, Compliance und
            strategisches Management. Uber 400 Zitationen auf Google Scholar.
          </p>
          <p className="text-[0.88rem] leading-relaxed mb-10 max-w-[52ch] text-grey-secondary">
            Seit 2015 als Postdoc und Gastdozent am Center for Management (CfM)
            der Westfalischen Wilhelms-Universitat Munster tatig.
          </p>
          <BtnPrimary href="https://scholar.google.de/citations?user=SsmSw1kAAAAJ&hl=en" external>
            Google Scholar Profil &rarr;
          </BtnPrimary>
        </div>
      </section>

      {/* Schwerpunkte */}
      <div className="px-[5vw] py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-grey-light">
        {schwerpunkte.map(({ title, desc }) => (
          <div key={title} className="text-center px-4">
            <p className="font-serif font-light text-[1.1rem] mb-2 text-text-primary">
              {title}
            </p>
            <p className="text-[0.8rem] text-grey-secondary">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Journal Papers */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Forschungsartikel (Zeitschrift)</Eyebrow>
          <SectionTitle className="mb-14">Peer-Reviewed Publications</SectionTitle>

          <div className="space-y-5">
            {journalPapers.map(({ year, title, authors, journal, details, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="p-7 border border-grey-light group-hover:border-text-primary transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="flex gap-6 items-start">
                    <span className="font-serif font-light text-[2rem] leading-none flex-shrink-0 w-16 text-grey-light">
                      {year}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif font-light text-[1.1rem] leading-[1.3] mb-2 text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                        {title}
                      </h3>
                      <p className="text-[0.78rem] mb-3 text-grey-secondary">
                        {authors}
                      </p>
                      <p className="text-[0.78rem] text-text-primary">
                        <em>{journal}</em>, {details}
                      </p>
                      <span className="inline-block mt-4 text-[0.7rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                        Paper lesen &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Conference Papers */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Forschungsartikel in Sammelband (Konferenz)</Eyebrow>
          <SectionTitle className="mb-14">Konferenzbeitrage</SectionTitle>

          <div className="space-y-4">
            {conferencePapers.map(({ year, title, authors, venue }) => (
              <div
                key={title}
                className="p-6 border border-grey-light"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-serif font-light text-[1.6rem] leading-none flex-shrink-0 w-14 text-grey-light">
                    {year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif font-light text-[1rem] leading-[1.3] mb-2 text-text-primary">
                      {title}
                    </h3>
                    <p className="text-[0.78rem] mb-2 text-grey-secondary">
                      {authors}
                    </p>
                    <p className="text-[0.75rem] italic text-grey-secondary">
                      {venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Working Papers */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Arbeitspapier / Working Paper</Eyebrow>
          <SectionTitle className="mb-14">Working Papers</SectionTitle>

          <div className="space-y-4">
            {workingPapers.map(({ year, title, authors, venue }) => (
              <div
                key={title}
                className="p-6 border border-grey-light"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-serif font-light text-[1.6rem] leading-none flex-shrink-0 w-14 text-grey-light">
                    {year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif font-light text-[1rem] leading-[1.3] mb-2 text-text-primary">
                      {title}
                    </h3>
                    <p className="text-[0.78rem] mb-2 text-grey-secondary">
                      {authors}
                    </p>
                    <p className="text-[0.75rem] italic text-grey-secondary">
                      {venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Stats */}
      <section className="px-[5vw] py-16 border-y border-grey-light">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '400+', l: 'Zitationen' },
            { n: '13', l: 'Publikationen' },
            { n: '10+', l: 'Jahre Forschung' },
            { n: 'summa', l: 'cum laude' },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="font-serif font-light leading-none mb-2 text-text-primary"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {n}
              </div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase text-grey-secondary">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5vw] py-24 text-center border-t border-grey-light">
        <Eyebrow>Verbindung</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '24ch', lineHeight: 1.1 }}
        >
          Forschung trifft <em className="italic">Praxis</em>
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch] text-grey-secondary">
          Die wissenschaftlichen Erkenntnisse fliessen direkt in das Buch
          &bdquo;Die Immobilienluge&ldquo;, die Offmarketpool-Plattform und das Immolab Coaching ein.
        </p>
        <BtnPrimary href="/buch">Zum Buch</BtnPrimary>
      </section>
    </>
  )
}
