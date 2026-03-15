import Image from 'next/image'
import { Eyebrow, SectionTitle, ProjectCard, Stat, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Marcel Hofeditz – Forscher. Unternehmer. Autor.',
}

const partners = [
  'GIG', 'onOffice', 'Behrend', 'Futunova', 'THB',
  'Asset', 'Huttig', 'Wenzel', 'onX', 'Invesio', 'Immo', 'Mietenhaus',
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[92vh] flex items-center px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 border border-grey-light text-[0.68rem] tracking-[0.2em] uppercase px-4 py-2 mb-8 text-grey-secondary">
              Hamburg &middot; 2026
            </span>

            <h1
              className="font-serif font-light leading-[1.05] mb-6 text-text-primary"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.2rem)' }}
            >
              Forscher.<br />
              <em className="italic">Unternehmer.</em><br />
              Autor.
            </h1>

            <p className="text-[0.95rem] leading-relaxed mb-10 max-w-[40ch] text-grey-secondary">
              Dr. Marcel Hofeditz verbindet Managementforschung mit
              operativer Immobilienpraxis. Drei Projekte. Eine Mission:
              Entscheidungen besser machen.
            </p>

            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="/plattform">Offmarketpool</BtnPrimary>
              <BtnOutline href="/buch">Das Buch</BtnOutline>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 -z-10 border border-grey-light" />
              <Image
                src="/IMG_8225.webp"
                alt="Dr. Marcel Hofeditz"
                width={380}
                height={460}
                className="object-cover object-top"
                style={{
                  filter: 'grayscale(100%) contrast(1.05)',
                  maxWidth: 'clamp(240px, 30vw, 380px)',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '5/6',
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div
        className="py-12 px-[5vw] grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-grey-light"
      >
        <Stat number="600+" label="Mio. EUR Transaktionsvolumen" />
        <Stat number="400+" label="Wissenschaftliche Zitationen" />
        <Stat number="Top 5" label="Familiegefuhrte Makler DE" />
        <Stat number="2026" label="Buchveroffentlichung" />
      </div>

      {/* THREE PROJECTS */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Drei Projekte</Eyebrow>
          <SectionTitle className="mb-4 max-w-[24ch]">
            Plattform. Buch. Coaching.
          </SectionTitle>
          <p className="text-[0.9rem] mb-14 max-w-[52ch] text-grey-secondary">
            Jedes Projekt fur sich stark – zusammen ein System, das
            Immobilienentscheidungen auf ein neues Level hebt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProjectCard
              eyebrow="Plattform &middot; Offmarket"
              title="Offmarketpool"
              description="Deutschlands Plattform fur diskrete Immobilientransaktionen. KI-basiertes Matching, 7.000+ Investorenprofile."
              cta="Zur Plattform"
              href="https://offmarketpool.vercel.app"
              external
            />
            <ProjectCard
              eyebrow="Buch &middot; 2026"
              title="Die Immobilien&shy;luge"
              description="Warum wir mit Immobilien nicht reich werden – und welche psychologischen Fallen uns daran hindern, es zu erkennen."
              cta="Zum Buch"
              href="/buch"
            />
            <ProjectCard
              eyebrow="Coaching &middot; Immolab"
              title="Immolab"
              description="Einzelberatung und Coaching fur Immobilieninvestoren – von der personlichen Risikobewertung bis zum konkreten Deal."
              cta="Zum Immolab"
              href="/coaching"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ABOUT / BIO */}
      <section className="px-[5vw] py-24" id="ueber">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Uber mich</Eyebrow>
            <SectionTitle className="mb-8">
              Dr. Marcel<br />
              <em className="italic">Hofeditz</em>
            </SectionTitle>

            <p className="text-[0.85rem] tracking-[0.08em] uppercase mb-6 text-grey-secondary">
              Managementforscher &middot; Immobilienunternehmer &middot; Autor
            </p>

            <div className="space-y-4 text-[0.92rem] text-grey-secondary">
              <p>
                Nach meiner Promotion in Betriebswirtschaftslehre mit dem
                Schwerpunkt <strong className="text-text-primary font-normal">Organizational Trust,
                Compliance und Strategy</strong> an der Universitat Munster
                (summa cum laude) bin ich direkt in das Immobiliengeschaft
                eingestiegen.
              </p>
              <p>
                Als Co-CEO von Mollerherm Immobilien habe ich das Unternehmen
                in sieben Jahren in die{' '}
                <strong className="text-text-primary font-normal">Top 5 der familiengefuhrten
                Makler Deutschlands</strong>{' '}
                gefuhrt – mit 4,2 Mio. EUR Nettoprovisionsumsatz und uber
                600 Mio. EUR verantworteten Transaktionsvolumen.
              </p>
              <p>
                Seit 2023 fuhre ich die{' '}
                <strong className="text-text-primary font-normal">Dr. Hofeditz Real Estate GmbH</strong>{' '}
                mit Fokus auf Investment- und Offmarket-Transaktionen.
                Parallel bin ich als Postdoc und Gastdozent an der
                Universitat Munster tatig.
              </p>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-1 gap-4 mt-2">
            {[
              {
                label: 'Akademisch',
                items: [
                  'Dr. rer. pol., summa cum laude (Uni Munster)',
                  'Postdoc & Gastdozent Universitat Munster seit 2015',
                  'Publikationen in Personnel Review, IJBM, HRM',
                  'Uber 400 Zitationen (Google Scholar)',
                ],
              },
              {
                label: 'Unternehmerisch',
                items: [
                  'Co-CEO Mollerherm Immobilien 2015–2023',
                  '600+ Mio. EUR Transaktionsvolumen',
                  'Capital Makler-Kompass Nr. 1 Hamburg / Kiel / Lubeck',
                  'Buros in HH, Kiel, LU, Bremen, Hannover, Berlin',
                ],
              },
            ].map(({ label, items }) => (
              <div
                key={label}
                className="p-6 border border-grey-light"
              >
                <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
                  {label}
                </span>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.82rem] text-grey-secondary"
                    >
                      <span className="text-text-primary flex-shrink-0">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* OFFMARKETPOOL TEASER */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Plattform</Eyebrow>
            <SectionTitle className="mb-6">
              Offmarketpool –<br />
              <em className="italic">diskret. prazise. digital.</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed mb-8 max-w-[44ch] text-grey-secondary">
              Nach uber 7 Jahren Datenbankarbeit und 7.000+ Investorenprofile:
              Deutschlands fuhrende Plattform fur Off-Market-Immobilientransaktionen
              mit KI-basiertem Matching-Algorithmus.
            </p>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="https://offmarketpool.vercel.app" external>
                Zur Plattform &rarr;
              </BtnPrimary>
              <BtnOutline href="/plattform">Mehr erfahren</BtnOutline>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              {
                title: 'KI-basiertes Matching',
                desc: 'Einzigartig entwickelter Algorithmus – 100+ gewichtete Kriterien fur diskrete Platzierung.',
              },
              {
                title: 'VIP Investorendatenbank',
                desc: 'Zugriff auf 7.000+ Investoren mit hinterlegtem Suchprofil und Sofortkauf-Interesse.',
              },
              {
                title: '100+ Objekte im Pool',
                desc: 'Deutschlandweites Angebot von Wohn- bis Heavy-Industrial – nicht offentlich inseriert.',
              },
              {
                title: 'KI-Agent Doc',
                desc: 'Intelligenter Assistent beantwortet Investorenfragen rund um die Uhr.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 border border-grey-light"
              >
                <span className="text-text-primary flex-shrink-0 mt-[2px]">&bull;</span>
                <div>
                  <p className="text-[0.88rem] mb-1 text-text-primary font-normal">
                    {title}
                  </p>
                  <p className="text-[0.8rem] text-grey-secondary">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* BOOK TEASER */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Book cover SVG – monochrome */}
          <div className="flex justify-center">
            <div
              className="relative"
              style={{
                transform: 'perspective(900px) rotateY(-10deg) rotateX(2deg)',
                transition: 'transform 0.5s ease',
              }}
            >
              <svg viewBox="0 0 300 440" xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(180px, 22vw, 280px)', filter: 'drop-shadow(-8px 16px 40px rgba(0,0,0,0.15))' }}>
                <rect width="300" height="440" fill="#0B0B0B" rx="2"/>
                <text x="150" y="60" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="32" fontWeight="500" letterSpacing="1" fill="#F6F6F6">DIE</text>
                <text x="150" y="98" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#F6F6F6">IMMOBILIEN</text>
                <text x="150" y="130" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#F6F6F6">LUGE</text>
                <text x="150" y="156" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#6B6B6B">WARUM WIR MIT IMMOBILIEN</text>
                <text x="150" y="172" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#6B6B6B">NICHT REICH WERDEN</text>
                <g transform="translate(110,190)">
                  <rect x="10" y="45" width="70" height="62" fill="#F6F6F6" rx="1"/>
                  <polygon points="0,47 40,8 80,47" fill="#EAEAEA"/>
                  <rect x="27" y="78" width="20" height="29" fill="#6B6B6B" rx="1"/>
                  <rect x="14" y="60" width="16" height="13" fill="#0B0B0B" rx="1" opacity="0.7"/>
                  <rect x="54" y="60" width="16" height="13" fill="#0B0B0B" rx="1" opacity="0.7"/>
                </g>
                <g transform="translate(140,285)" opacity="0.5">
                  <rect x="-40" y="26" width="80" height="10" fill="#6B6B6B" rx="2"/>
                  <path d="M -28 26 Q -18 0 0 -4 Q 18 -8 28 26" fill="none" stroke="#6B6B6B" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
                <circle cx="70" cy="305" r="30" fill="#F6F6F6"/>
                <text x="70" y="298" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B">Mit KI</text>
                <text x="70" y="309" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B" fontWeight="600">Lugendetektor</text>
                <text x="70" y="320" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B">zur Hilfe</text>
                <rect x="0" y="375" width="300" height="65" fill="#F6F6F6" opacity="0.95"/>
                <text x="150" y="415" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="500" letterSpacing="2" fill="#0B0B0B">DR. MARCEL HOFEDITZ</text>
                <rect x="2" y="2" width="296" height="436" fill="none" stroke="#F6F6F6" strokeWidth="1" opacity="0.15"/>
              </svg>
            </div>
          </div>

          <div>
            <Eyebrow>Sachbuch &middot; Erscheint 2026</Eyebrow>
            <SectionTitle className="mb-6">
              Die<br />
              <em className="italic">Immobilienluge</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed mb-6 max-w-[44ch] text-grey-secondary">
              Warum Millionen Deutsche ihre grosste Vermogensentscheidung nicht
              auf Basis nuchterner Kalkulation treffen – sondern auf Grundlage
              von Erwartungsnarrativen, Verhaltensfehlern und falschen Akteuren.
            </p>
            <blockquote
              className="font-serif font-light italic text-[1.1rem] leading-relaxed mb-8 pl-5 border-l-2 border-text-primary text-text-primary"
            >
              &bdquo;Der Immobilienmarkt ist kein Markt aus Beton –
              er ist ein Markt aus Psychologie.&ldquo;
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="/buch">Zum Buch + KI-Agent</BtnPrimary>
              <BtnOutline href="/buch">Leseprobe</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* IMMOLAB TEASER */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow>Coaching</Eyebrow>
              <SectionTitle className="mb-6">
                Immolab –<br />
                <em className="italic">Einzelberatung fur Investoren</em>
              </SectionTitle>
              <p className="text-[0.92rem] leading-relaxed mb-8 text-grey-secondary">
                Ob erfahrener Investor oder Einsteiger: Das Immolab bietet
                individuelle Begleitung – von der ersten Risikobewertung bis
                zum professionellen Bestandsaufbau. Basierend auf akademischer
                Methodik und 600+ Mio. EUR Praxiserfahrung.
              </p>
              <BtnPrimary href="/coaching">Zum Immolab</BtnPrimary>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Personliche Risikobewertung', desc: 'Individuelle Analyse Ihrer finanziellen Ausgangslage und Risikobereitschaft.' },
                { title: 'Investmentstrategie', desc: 'Entwicklung einer klaren Strategie fur nachhaltigen Bestandsaufbau.' },
                { title: 'Deal-Analyse & Due Diligence', desc: 'Fundierte Bewertung konkreter Objekte nach akademischem Standard.' },
                { title: 'Laufendes Investor-Mentoring', desc: 'Begleitung uber mehrere Monate – von der Suche bis zum Abschluss.' },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-5 border border-grey-light"
                >
                  <p className="text-[0.88rem] mb-1 text-text-primary font-normal">
                    {title}
                  </p>
                  <p className="text-[0.8rem] text-grey-secondary">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* PARTNER LOGOS */}
      <section className="px-[5vw] py-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-center text-[0.68rem] tracking-[0.22em] uppercase mb-10 text-grey-secondary">
            Vertrauen uns
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {partners.map((p) => (
              <span
                key={p}
                className="text-[0.75rem] tracking-[0.14em] uppercase text-grey-light"
                style={{ color: 'rgba(107,107,107,0.4)' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-[5vw] py-28 text-center border-t border-grey-light">
        <Eyebrow>Direktkontakt</Eyebrow>
        <h2
          className="font-serif font-light leading-[1.1] mb-6 mx-auto text-text-primary"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            maxWidth: '22ch',
          }}
        >
          Lassen Sie uns gemeinsam
          <em className="italic"> entscheiden.</em>
        </h2>
        <p className="text-[0.9rem] mb-10 mx-auto text-grey-secondary" style={{ maxWidth: '44ch' }}>
          Ob Offmarket-Transaktion, Buchkauf oder Immolab-Coaching –
          nehmen Sie Kontakt auf.
        </p>
        <BtnPrimary href="/kontakt">Jetzt anfragen</BtnPrimary>
      </section>
    </>
  )
}
