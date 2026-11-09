'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PodcastSection } from '@/components/PodcastSection'
import { SocialSection } from '@/components/SocialSection'
import { useLocale } from '@/lib/locale-context'
import { fmtDatum, getMarke, veroeffentlichte } from '@/lib/presse'

const OMP = 'https://offmarketpool.de'
const utm = (content: string) => `${OMP}/?utm_source=dr-hofeditz.de&utm_medium=referral&utm_campaign=holding&utm_content=${content}`

const T = {
  de: {
    heroKicker: 'Dr. Marcel Hofeditz · Hamburg',
    heroTitle: ['Der beste', 'Markt ist', 'unsichtbar.'],
    heroLead:
      'Die meisten Investmentimmobilien wechseln den Eigentümer, ohne je inseriert zu werden. Ich erforsche, warum Menschen bei Immobilien so entscheiden, wie sie entscheiden – und baue die Plattform, die diesen verborgenen Markt öffnet.',
    heroCta1: 'Off-Market-Objekte ansehen',
    heroCta2: 'Die Geschichte',
    ticker: ['Off-Market-Immobilien', 'KI-Matching', 'Investmentimmobilien', 'Verhaltensökonomie', 'Die Immobilienlüge', 'Elsterbot', 'Hamburg'],
    c1Kicker: 'Kapitel 01 · Die Lüge',
    c1Title: 'Immobilien sind kein Markt aus Beton.',
    c1Text:
      'Sie sind ein Markt aus Psychologie. Anker, Besitztumseffekt, Herdentrieb: Die größte Vermögensentscheidung der meisten Menschen folgt Erwartungen und Geschichten, nicht Kalkulation. Darüber schreibe ich – in „Die Immobilienlüge“ und im Buch „Psychologie beim Immobilienkauf“, das im Herbst 2027 bei Econ erscheint.',
    c1Cta: 'Zum Buch',
    c1Cta2: 'Essays im Blog',
    c2Kicker: 'Kapitel 02 · Die Tür',
    c2Title: 'Hinter der Tür liegt der eigentliche Markt.',
    c2Text:
      'Eigentümer, die diskret verkaufen wollen, inserieren nicht. Käufer mit Kapital suchen nicht auf Portalen. Offmarketpool bringt beide zusammen: Die KI gleicht jedes Objekt mit hinterlegten Ankaufsprofilen ab, Exposé und Adresse gehen erst nach Zustimmung des Eigentümers raus.',
    c2Stats: [
      { n: '1.100+', l: 'Objekte im Pool' },
      { n: '€10 Mrd.+', l: 'Objektvolumen' },
      { n: '7.000+', l: 'Investorenprofile' },
      { n: '50/50', l: 'für Mitmakler' },
    ],
    c2Cta: 'Zu Offmarketpool',
    c2Cta2: 'Was ist Off-Market?',
    c2Links: [
      { label: 'Off-Market-Investmentimmobilien kaufen', href: utm('investment') },
      { label: 'Immobilie diskret verkaufen', href: utm('verkaufen') },
      { label: 'Kapitalanlagen ohne Käuferprovision', href: utm('kapitalanlagen') },
      { label: 'Gemeinschaftsgeschäfte für Makler', href: utm('makler') },
    ],
    c3Kicker: 'Kapitel 03 · Die Maschine',
    c3Title: 'Agenten statt Formulare.',
    c3Text:
      'Was früher Sachbearbeitung war, erledigt heute eine KI im Chat. Offmarketpool läuft als Connector direkt in Claude und ChatGPT. Mit Elsterbot entsteht dieselbe Idee für die Steuer: Unterlagen hochladen, die KI rechnet, eine Steuerkanzlei prüft auf Wunsch und gibt frei.',
    c3Cards: [
      { t: 'Offmarketpool im Chat', d: 'Objekte suchen, Käufer matchen, Exposés anfordern – direkt aus Claude oder ChatGPT.', href: utm('connector'), ext: true },
      { t: 'Elsterbot', d: 'Steuererklärung im KI-Chat. Kanzleien schließen sich per fester Monatslizenz an. Derzeit in der Beta.', href: 'https://www.elsterbot.de', ext: true },
      { t: 'Newsroom', d: 'Pressemitteilungen, Profile und Pressekontakt aller Marken an einem Ort.', href: '/presse', ext: false },
    ],
    c4Kicker: 'Kapitel 04 · Die Methode',
    c4Title: 'Erst forschen, dann handeln.',
    c4Text:
      'Promotion summa cum laude an der Universität Münster zu Vertrauen, Compliance und Strategie, über 400 Zitationen. Danach sieben Jahre Co-CEO eines Maklerunternehmens mit mehr als 600 Mio. € verantwortetem Transaktionsvolumen. Seit 2023 die Dr. Hofeditz Real Estate GmbH – mit Fokus auf Investment- und Off-Market-Transaktionen.',
    c4Cta: 'Zur Forschung',
    c4Cta2: 'Immolab Coaching',
    pressKicker: 'Presse',
    pressTitle: 'Aus dem Newsroom',
    pressEmpty: 'Die ersten Meldungen erscheinen in Kürze.',
    pressCta: 'Alle Meldungen',
    finalKicker: 'Der nächste Schritt',
    finalTitle: 'Hinter die Tür schauen.',
    finalText: 'Off-Market-Objekte sehen, ein Gesuch hinterlegen oder ein Objekt diskret anbieten – kostenlos registrieren auf Offmarketpool.',
    finalCta: 'Jetzt zu Offmarketpool',
    finalCta2: 'Kontakt',
  },
  en: {
    heroKicker: 'Dr. Marcel Hofeditz · Hamburg',
    heroTitle: ['The best', 'market is', 'invisible.'],
    heroLead:
      'Most investment properties change hands without ever being listed. I research why people decide the way they do about real estate – and build the platform that opens up this hidden market.',
    heroCta1: 'View off-market properties',
    heroCta2: 'The story',
    ticker: ['Off-market real estate', 'AI matching', 'Investment properties', 'Behavioral economics', 'Die Immobilienlüge', 'Elsterbot', 'Hamburg'],
    c1Kicker: 'Chapter 01 · The lie',
    c1Title: 'Real estate is not a market made of concrete.',
    c1Text:
      'It is a market made of psychology. Anchors, the endowment effect, herd behaviour: most people’s biggest financial decision follows expectations and stories, not calculation. That is what I write about – in “Die Immobilienlüge” and in the book “Psychologie beim Immobilienkauf”, coming in autumn 2027 from Econ.',
    c1Cta: 'The book',
    c1Cta2: 'Essays',
    c2Kicker: 'Chapter 02 · The door',
    c2Title: 'Behind the door lies the real market.',
    c2Text:
      'Owners who want to sell discreetly don’t list. Buyers with capital don’t search portals. Offmarketpool brings both together: AI matches every property against stored acquisition profiles, and details are only released with the owner’s consent.',
    c2Stats: [
      { n: '1,100+', l: 'Properties in the pool' },
      { n: '€10bn+', l: 'Asset volume' },
      { n: '7,000+', l: 'Investor profiles' },
      { n: '50/50', l: 'for co-brokers' },
    ],
    c2Cta: 'Go to Offmarketpool',
    c2Cta2: 'What is off-market?',
    c2Links: [
      { label: 'Buy off-market investment properties', href: utm('investment') },
      { label: 'Sell a property discreetly', href: utm('verkaufen') },
      { label: 'Buy-to-let apartments', href: utm('kapitalanlagen') },
      { label: 'Joint deals for brokers', href: utm('makler') },
    ],
    c3Kicker: 'Chapter 03 · The machine',
    c3Title: 'Agents instead of forms.',
    c3Text:
      'What used to be paperwork is now done by AI in a chat. Offmarketpool runs as a connector inside Claude and ChatGPT. Elsterbot applies the same idea to taxes: upload your documents, the AI calculates, and a tax firm reviews and files on request.',
    c3Cards: [
      { t: 'Offmarketpool in chat', d: 'Search properties, match buyers, request exposés – right from Claude or ChatGPT.', href: utm('connector'), ext: true },
      { t: 'Elsterbot', d: 'German tax returns in an AI chat. Tax firms join via a fixed monthly licence. Currently in beta.', href: 'https://www.elsterbot.de', ext: true },
      { t: 'Newsroom', d: 'Press releases, profiles and press contact for all brands in one place.', href: '/presse', ext: false },
    ],
    c4Kicker: 'Chapter 04 · The method',
    c4Title: 'Research first, then act.',
    c4Text:
      'PhD summa cum laude at the University of Münster on trust, compliance and strategy, 400+ citations. Then seven years as co-CEO of a brokerage with more than €600m in transaction volume. Since 2023 Dr. Hofeditz Real Estate GmbH – focused on investment and off-market transactions.',
    c4Cta: 'Research',
    c4Cta2: 'Immolab coaching',
    pressKicker: 'Press',
    pressTitle: 'From the newsroom',
    pressEmpty: 'The first releases will be published shortly.',
    pressCta: 'All releases',
    finalKicker: 'Next step',
    finalTitle: 'Look behind the door.',
    finalText: 'See off-market properties, store a search profile or offer a property discreetly – register for free on Offmarketpool.',
    finalCta: 'Go to Offmarketpool',
    finalCta2: 'Contact',
  },
}

function Chapter({
  img,
  alt,
  kicker,
  title,
  text,
  reverse,
  children,
}: {
  img: string
  alt: string
  kicker: string
  title: string
  text: string
  reverse?: boolean
  children?: React.ReactNode
}) {
  return (
    <section className="px-[5vw] py-24 md:py-32 border-t border-grey-light">
      <div className={`max-w-[1200px] mx-auto grid gap-12 md:gap-20 items-center md:grid-cols-2`}>
        <div className={`relative overflow-hidden aspect-[16/10] ${reverse ? 'md:order-last' : ''}`}>
          <Image src={img} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="kicker mb-5">{kicker}</p>
          <h2 className="h-section text-text-primary mb-6" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}>
            {title}
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#cfcfcf] max-w-[38rem]">{text}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { locale } = useLocale()
  const t = T[locale] ?? T.de
  const meldungen = veroeffentlichte().filter((m) => getMarke(m.marke).sichtbar).slice(0, 3)

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden isolate -mt-[1px]">
        <div className="absolute inset-y-0 right-0 left-0 md:left-[28%] -z-20">
          <Image
            src="/story/hero-tuer.webp"
            alt="Schwere Tür in der Hamburger Speicherstadt, durch das Schlüsselloch fällt Licht"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
            style={{ objectPosition: '60% 45%' }}
          />
        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'linear-gradient(90deg,#0B0B0B 0%,#0B0B0B 28%,#0B0B0B99 40%,#0B0B0B00 60%),linear-gradient(0deg,#0B0B0B 0%,#0B0B0B00 40%)' }}
        />
        <div className="w-full px-[5vw] pt-36 pb-24">
          <div className="max-w-[1200px] mx-auto">
            <p className="kicker mb-6">{t.heroKicker}</p>
            <h1 className="display text-text-primary mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
              {t.heroTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-[#dddddd] max-w-[36rem] mb-10">{t.heroLead}</p>
            <div className="flex flex-wrap gap-3">
              <a href={utm('hero')} className="btn-solid-x">
                {t.heroCta1}
              </a>
              <a href="#geschichte" className="btn-ghost-x">
                {t.heroCta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-grey-light overflow-hidden whitespace-nowrap" aria-hidden="true">
        <div className="ticker-track">
          {[...t.ticker, ...t.ticker].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* ── KAPITEL 01 ── */}
      <div id="geschichte" className="scroll-mt-20">
        <Chapter
          img="/story/buch-fassade.webp"
          alt="Ein Mensch steht vor einer riesigen, hell erleuchteten Hausfassade"
          kicker={t.c1Kicker}
          title={t.c1Title}
          text={t.c1Text}
        >
          <div className="flex flex-wrap gap-3 mt-9">
            <Link href="/buch" className="btn-solid-x">
              {t.c1Cta}
            </Link>
            <Link href="/blog" className="btn-ghost-x">
              {t.c1Cta2}
            </Link>
          </div>
        </Chapter>
      </div>

      {/* ── KAPITEL 02 · OFFMARKETPOOL ── */}
      <Chapter
        img="/story/schluesselloch-stadt.webp"
        alt="Blick durch ein Schlüsselloch auf eine Stadt bei Nacht – Off-Market-Immobilien"
        kicker={t.c2Kicker}
        title={t.c2Title}
        text={t.c2Text}
        reverse
      >
        <div className="grid grid-cols-2 gap-px bg-grey-light border border-grey-light mt-9 max-w-[38rem]">
          {t.c2Stats.map((s) => (
            <div key={s.l} className="bg-black p-5">
              <p className="text-[1.6rem] font-extrabold tracking-[-0.02em] text-text-primary">{s.n}</p>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-grey-secondary mt-1">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href={utm('kapitel-tuer')} className="btn-solid-x">
            {t.c2Cta}
          </a>
          <Link href="/offmarket-immobilien" className="btn-ghost-x">
            {t.c2Cta2}
          </Link>
        </div>
        <ul className="mt-8 space-y-2">
          {t.c2Links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[0.92rem] text-text-primary underline decoration-grey-muted underline-offset-4 hover:decoration-text-primary">
                {l.label} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </Chapter>

      {/* ── KAPITEL 03 · KI ── */}
      <section className="relative px-[5vw] py-24 md:py-32 border-t border-grey-light overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image src="/story/elsterbot-flug.webp" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(0deg,#0B0B0B 10%,#0B0B0Bcc 60%,#0B0B0B99 100%)' }} />
        <div className="max-w-[1200px] mx-auto">
          <p className="kicker mb-5">{t.c3Kicker}</p>
          <h2 className="h-section text-text-primary mb-6 max-w-[16ch]" style={{ fontSize: 'clamp(2rem, 4.8vw, 4rem)' }}>
            {t.c3Title}
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#cfcfcf] max-w-[42rem]">{t.c3Text}</p>
          <div className="grid gap-px bg-grey-light border border-grey-light mt-14 md:grid-cols-3">
            {t.c3Cards.map((c, i) => {
              const inner = (
                <>
                  <span className="text-[0.7rem] tracking-[0.2em] text-grey-muted">0{i + 1}</span>
                  <h3 className="text-[0.85rem] tracking-[0.22em] uppercase text-text-primary font-semibold mt-3 mb-3">{c.t}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-[#bdbdbd]">{c.d}</p>
                  <span className="inline-block mt-5 text-[0.72rem] tracking-[0.14em] uppercase text-text-primary">&rarr;</span>
                </>
              )
              const cls = 'block bg-black/90 p-8 hover:bg-bg-elevated transition-colors duration-300'
              return c.ext ? (
                <a key={c.t} href={c.href} target={c.href.startsWith(OMP) ? undefined : '_blank'} rel="noopener" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={c.t} href={c.href} className={cls}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── KAPITEL 04 · FORSCHUNG ── */}
      <Chapter
        img="/story/forschung-bibliothek.webp"
        alt="Universitätsbibliothek bei Nacht mit Forschungsunterlagen"
        kicker={t.c4Kicker}
        title={t.c4Title}
        text={t.c4Text}
      >
        <div className="flex items-center gap-5 mt-9">
          <Image src="/IMG_8225.webp" alt="Dr. Marcel Hofeditz" width={72} height={72} className="grayscale object-cover w-[72px] h-[72px]" />
          <div className="flex flex-wrap gap-3">
            <Link href="/forschung" className="btn-solid-x">
              {t.c4Cta}
            </Link>
            <Link href="/coaching" className="btn-ghost-x">
              {t.c4Cta2}
            </Link>
          </div>
        </div>
      </Chapter>

      <PodcastSection />
      <SocialSection />

      {/* ── PRESSE ── */}
      <section className="px-[5vw] py-24 border-t border-grey-light">
        <div className="max-w-[1200px] mx-auto">
          <p className="kicker mb-5">{t.pressKicker}</p>
          <h2 className="h-section text-text-primary mb-10" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)' }}>
            {t.pressTitle}
          </h2>
          <div className="border-t border-grey-light">
            {meldungen.length === 0 && <p className="py-8 text-grey-secondary border-b border-grey-light">{t.pressEmpty}</p>}
            {meldungen.map((m) => (
              <Link key={m.slug} href={`/presse/${m.slug}`} className="block py-8 border-b border-grey-light hover:bg-bg-elevated px-2 -mx-2 transition-colors">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-grey-muted mb-2">
                  {fmtDatum(m.datum)} · {getMarke(m.marke).name}
                </p>
                <p className="text-[1.2rem] text-text-primary font-medium">{m.titel}</p>
              </Link>
            ))}
          </div>
          <Link href="/presse" className="inline-block mt-8 text-[0.76rem] tracking-[0.14em] uppercase text-text-primary hover:text-grey-secondary">
            {t.pressCta} &rarr;
          </Link>
        </div>
      </section>

      {/* ── FINALE ── */}
      <section className="px-[5vw] py-32 border-t border-grey-light text-center">
        <p className="kicker mb-5">{t.finalKicker}</p>
        <h2 className="display text-text-primary mb-8 mx-auto" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
          {t.finalTitle}
        </h2>
        <p className="text-[1.05rem] text-[#cfcfcf] max-w-[36rem] mx-auto mb-10">{t.finalText}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={utm('finale')} className="btn-solid-x">
            {t.finalCta}
          </a>
          <Link href="/kontakt" className="btn-ghost-x">
            {t.finalCta2}
          </Link>
        </div>
      </section>
    </>
  )
}
