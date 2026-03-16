'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow, SectionTitle, Stat, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import { useLocale } from '@/lib/locale-context'

export default function Home() {
  const { d } = useLocale()

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-[92vh] flex items-center px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo — shows first on mobile */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 -z-10 border border-grey-light" />
              <Image
                src="/IMG_8225.webp"
                alt="Dr. Marcel Hofeditz"
                width={380}
                height={460}
                className="object-cover object-top"
                style={{
                  maxWidth: 'clamp(240px, 30vw, 380px)',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '5/6',
                }}
                priority
              />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 border border-grey-light text-[0.68rem] tracking-[0.2em] uppercase px-4 py-2 mb-8 text-grey-secondary">
              {d.home.badge}
            </span>

            <h1
              className="font-sans font-medium tracking-[-0.02em] leading-[1.08] mb-8 text-text-primary"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              Dr. Marcel<br />
              Hofeditz
            </h1>

            {/* Three role lines */}
            <div className="space-y-2 mb-8">
              {[d.home.heroRole1, d.home.heroRole2, d.home.heroRole3].map((role) => (
                <p
                  key={role}
                  className="text-[0.88rem] tracking-[0.04em] text-grey-secondary flex items-start gap-3"
                >
                  <span className="text-grey-muted flex-shrink-0 mt-[1px]">&mdash;</span>
                  {role}
                </p>
              ))}
            </div>

            {/* Intersection paragraph */}
            <p className="text-[0.92rem] leading-[1.7] mb-10 max-w-[44ch] text-grey-secondary">
              {d.home.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="/plattform">OffMarketPool</BtnPrimary>
              <BtnOutline href="/buch">{d.home.toBook}</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY STRIP ── */}
      <div className="py-14 px-[5vw] grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-grey-light">
        <Stat number={d.home.stat1n} label={d.home.stat1l} />
        <Stat number={d.home.stat2n} label={d.home.stat2l} />
        <Stat number={d.home.stat3n} label={d.home.stat3l} />
        <Stat number={d.home.stat4n} label={d.home.stat4l} />
      </div>

      {/* ── ECOSYSTEM ── */}
      <section className="px-[5vw] py-28">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.home.ecosystem}</Eyebrow>
          <SectionTitle className="mb-4 max-w-[24ch]">
            {d.home.ecosystemHeadline}
          </SectionTitle>
          <p className="text-[0.9rem] leading-relaxed mb-16 max-w-[52ch] text-grey-secondary">
            {d.home.ecosystemDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-grey-light">
            {[
              {
                eyebrow: d.home.pillar1Eyebrow,
                title: d.home.pillar1Title,
                desc: d.home.pillar1Desc,
                cta: d.home.pillar1Cta,
                href: '/forschung',
                marker: '01',
              },
              {
                eyebrow: d.home.pillar2Eyebrow,
                title: d.home.pillar2Title,
                desc: d.home.pillar2Desc,
                cta: d.home.pillar2Cta,
                href: '/buch',
                marker: '02',
              },
              {
                eyebrow: d.home.pillar3Eyebrow,
                title: d.home.pillar3Title,
                desc: d.home.pillar3Desc,
                cta: d.home.pillar3Cta,
                href: 'https://offmarketpool.vercel.app',
                external: true,
                marker: '03',
              },
            ].map(({ eyebrow, title, desc, cta, href, external, marker }) => {
              const content = (
                <div className="group p-8 md:p-10 flex flex-col justify-between h-full border-b md:border-b-0 md:border-r border-grey-light last:border-0 transition-colors duration-300 hover:bg-bg-elevated">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[0.65rem] tracking-[0.22em] uppercase text-grey-secondary">
                        {eyebrow}
                      </span>
                      <span className="text-[0.85rem] text-grey-muted">
                        {marker}
                      </span>
                    </div>
                    <h3
                      className="font-sans font-medium tracking-[-0.01em] leading-[1.15] mb-4 text-text-primary"
                      style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)' }}
                    >
                      {title}
                    </h3>
                    <p className="text-[0.84rem] leading-relaxed text-grey-secondary">
                      {desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-grey-light">
                    <span className="text-[0.74rem] tracking-[0.12em] uppercase transition-colors duration-200 text-text-primary group-hover:text-grey-secondary">
                      {cta} &rarr;
                    </span>
                  </div>
                </div>
              )

              if (external) {
                return (
                  <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                )
              }
              return (
                <Link key={title} href={href} className="block">
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── ABOUT / BIO ── */}
      <section className="px-[5vw] py-28" id="ueber">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>{d.home.aboutMe}</Eyebrow>
            <SectionTitle className="mb-8">
              Dr. Marcel<br />
              Hofeditz
            </SectionTitle>

            <p className="text-[0.85rem] tracking-[0.08em] uppercase mb-6 text-grey-secondary">
              {d.home.roleDesc}
            </p>

            <div className="space-y-4 text-[0.92rem] leading-[1.7] text-grey-secondary">
              <p>
                {d.home.bio1}{' '}
                <strong className="text-text-primary font-normal">{d.home.bio1bold}</strong>{' '}
                {d.home.bio1end}
              </p>
              <p>
                {d.home.bio2}{' '}
                <strong className="text-text-primary font-normal">{d.home.bio2bold}</strong>{' '}
                {d.home.bio2end}
              </p>
              <p>
                {d.home.bio3}{' '}
                <strong className="text-text-primary font-normal">{d.home.bio3bold}</strong>{' '}
                {d.home.bio3end}
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 gap-5 mt-2">
            {[
              { label: d.home.academic, items: d.home.academicItems },
              { label: d.home.entrepreneurial, items: d.home.entrepreneurialItems },
            ].map(({ label, items }) => (
              <div key={label} className="p-7 border border-grey-light bg-bg-card">
                <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-5 text-grey-secondary">
                  {label}
                </span>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.82rem] text-grey-secondary">
                      <span className="text-grey-muted flex-shrink-0">&mdash;</span>
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

      {/* ── PLATFORM REFERENCE ── */}
      <section className="px-[5vw] py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>{d.home.platformSection}</Eyebrow>
            <SectionTitle className="mb-6">
              {d.home.platformHeadline1}<br />
              {d.home.platformHeadline2}
            </SectionTitle>

            {/* Exact positioning text */}
            <p className="text-[0.95rem] leading-[1.6] mb-2 text-text-primary">
              {d.home.platformPositioning}
            </p>
            <p className="text-[0.95rem] leading-[1.6] mb-8 text-text-primary">
              {d.home.platformScale}
            </p>

            <p className="text-[0.9rem] leading-relaxed mb-10 max-w-[44ch] text-grey-secondary">
              {d.home.platformSectionDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="https://offmarketpool.vercel.app" external>
                {d.home.toPlatform} &rarr;
              </BtnPrimary>
              <BtnOutline href="/plattform">{d.home.learnMore}</BtnOutline>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              { title: d.home.featureMatching, desc: d.home.featureMatchingDesc },
              { title: d.home.featureInvestors, desc: d.home.featureInvestorsDesc },
              { title: d.home.featurePool, desc: d.home.featurePoolDesc },
              { title: d.home.featureDoc, desc: d.home.featureDocDesc },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-6 border border-grey-light bg-bg-card">
                <span className="text-grey-muted flex-shrink-0 mt-[2px]">&bull;</span>
                <div>
                  <p className="text-[0.88rem] mb-1 text-text-primary font-normal">{title}</p>
                  <p className="text-[0.8rem] text-grey-secondary">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── BOOK TEASER ── */}
      <section className="px-[5vw] py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Book cover SVG */}
          <div className="flex justify-center">
            <div
              className="relative"
              style={{
                transform: 'perspective(900px) rotateY(-10deg) rotateX(2deg)',
                transition: 'transform 0.5s ease',
              }}
            >
              <svg viewBox="0 0 300 440" xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(180px, 22vw, 280px)', filter: 'drop-shadow(-8px 16px 40px rgba(0,0,0,0.4))' }}>
                <rect width="300" height="440" fill="#161616" rx="2"/>
                <rect width="300" height="440" fill="none" stroke="#333" strokeWidth="1" rx="2"/>
                <text x="150" y="60" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="32" fontWeight="500" letterSpacing="1" fill="#F6F6F6">DIE</text>
                <text x="150" y="98" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#F6F6F6">IMMOBILIEN</text>
                <text x="150" y="130" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#F6F6F6">LÜGE</text>
                <text x="150" y="156" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#888">WARUM WIR MIT IMMOBILIEN</text>
                <text x="150" y="172" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#888">NICHT REICH WERDEN</text>
                <g transform="translate(110,190)">
                  <rect x="10" y="45" width="70" height="62" fill="#F6F6F6" rx="1"/>
                  <polygon points="0,47 40,8 80,47" fill="#DDD"/>
                  <rect x="27" y="78" width="20" height="29" fill="#888" rx="1"/>
                  <rect x="14" y="60" width="16" height="13" fill="#161616" rx="1" opacity="0.7"/>
                  <rect x="54" y="60" width="16" height="13" fill="#161616" rx="1" opacity="0.7"/>
                </g>
                <g transform="translate(140,285)" opacity="0.5">
                  <rect x="-40" y="26" width="80" height="10" fill="#888" rx="2"/>
                  <path d="M -28 26 Q -18 0 0 -4 Q 18 -8 28 26" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
                <circle cx="70" cy="305" r="30" fill="#F6F6F6"/>
                <text x="70" y="298" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B">Mit KI</text>
                <text x="70" y="309" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B" fontWeight="600">Lügendetektor</text>
                <text x="70" y="320" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7.5" fill="#0B0B0B">zur Hilfe</text>
                <rect x="0" y="375" width="300" height="65" fill="#F6F6F6" opacity="0.95"/>
                <text x="150" y="415" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="500" letterSpacing="2" fill="#0B0B0B">DR. MARCEL HOFEDITZ</text>
              </svg>
            </div>
          </div>

          <div>
            <Eyebrow>{d.home.bookSection}</Eyebrow>
            <SectionTitle className="mb-6">
              {d.home.bookHeadline1} {d.home.bookHeadline2}
            </SectionTitle>
            <p className="text-[0.92rem] leading-[1.7] mb-6 max-w-[44ch] text-grey-secondary">
              {d.home.bookSectionDesc}
            </p>
            <blockquote className="text-[1rem] leading-relaxed mb-8 pl-5 border-l-2 border-grey-light text-grey-secondary italic">
              {d.home.bookQuote}
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="/buch">{d.home.toBookAgent}</BtnPrimary>
              <BtnOutline href="/buch">{d.home.leseprobe}</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── COACHING TEASER ── */}
      <section className="px-[5vw] py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>{d.home.coachingSection}</Eyebrow>
            <SectionTitle className="mb-6">
              {d.home.coachingHeadline1} {d.home.coachingHeadline2}
            </SectionTitle>
            <p className="text-[0.92rem] leading-[1.7] mb-10 text-grey-secondary">
              {d.home.coachingSectionDesc}
            </p>
            <BtnPrimary href="/coaching">{d.home.toCoaching}</BtnPrimary>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: d.home.coachingFeature1, desc: d.home.coachingFeature1Desc },
              { title: d.home.coachingFeature2, desc: d.home.coachingFeature2Desc },
              { title: d.home.coachingFeature3, desc: d.home.coachingFeature3Desc },
              { title: d.home.coachingFeature4, desc: d.home.coachingFeature4Desc },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-grey-light bg-bg-card">
                <p className="text-[0.88rem] mb-1 text-text-primary font-normal">{title}</p>
                <p className="text-[0.8rem] text-grey-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CONTACT CTA ── */}
      <section className="px-[5vw] py-32 text-center">
        <Eyebrow>{d.home.directContact}</Eyebrow>
        <h2
          className="font-sans font-medium tracking-[-0.02em] leading-[1.1] mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', maxWidth: '22ch' }}
        >
          {d.home.ctaHeadline1} {d.home.ctaHeadline2}
        </h2>
        <p className="text-[0.9rem] leading-relaxed mb-10 mx-auto text-grey-secondary" style={{ maxWidth: '44ch' }}>
          {d.home.ctaDesc}
        </p>
        <BtnPrimary href="/kontakt">{d.home.inquireNow}</BtnPrimary>
      </section>
    </>
  )
}
