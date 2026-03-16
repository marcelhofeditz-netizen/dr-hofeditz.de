'use client'

import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider, Stat } from '@/components/ui'
import { DocAgent } from '@/components/DocAgent'
import { useLocale } from '@/lib/locale-context'

export default function BuchPage() {
  const { d } = useLocale()

  return (
    <>
      {/* DOC AGENT SECTION */}
      <DocAgent />

      {/* BOOK HERO */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Cover */}
          <div className="flex justify-center">
            <div style={{ transform: 'perspective(900px) rotateY(-10deg) rotateX(2deg)' }}>
              <svg viewBox="0 0 300 440" xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(200px, 25vw, 300px)', filter: 'drop-shadow(-8px 16px 40px rgba(0,0,0,0.15))' }}>
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
            <Eyebrow>{d.book.heroEyebrow}</Eyebrow>
            <SectionTitle className="mb-6">
              Die<br />
              <em className="italic">Immobilien&shy;luge</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed mb-3 max-w-[44ch] text-grey-secondary">
              {d.book.heroDesc1}
            </p>
            <p className="text-[0.88rem] leading-relaxed mb-8 max-w-[44ch] text-grey-secondary">
              {d.book.heroDesc2}
            </p>
            <blockquote className="font-sans italic text-[1.1rem] leading-relaxed mb-8 pl-5 border-l-2 border-grey-light text-grey-secondary">
              &bdquo;{d.book.quote}&ldquo;
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="#doc-agent">{d.book.askDocAgent}</BtnPrimary>
              <BtnOutline href="/kontakt">{d.book.releaseDate}</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* KAPITEL */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.book.contentEyebrow}</Eyebrow>
          <SectionTitle className="mb-14">{d.book.fiveActs}</SectionTitle>
          <div className="space-y-3">
            {d.book.chapters.map(({ nr, titel, sub }: { nr: string; titel: string; sub: string }) => (
              <div
                key={nr}
                className="flex gap-6 p-6 border border-grey-light group hover:border-text-primary transition-colors duration-300"
              >
                <span className="font-sans font-medium tracking-[-0.01em] text-[1.8rem] leading-none flex-shrink-0 w-16 text-grey-light">
                  {nr}
                </span>
                <div>
                  <p className="text-[0.95rem] mb-1 text-text-primary font-normal">
                    {titel}
                  </p>
                  <p className="text-[0.78rem] text-grey-secondary">
                    {sub}
                  </p>
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
            { n: d.book.stat1n, l: d.book.stat1l },
            { n: d.book.stat2n, l: d.book.stat2l },
            { n: d.book.stat3n, l: d.book.stat3l },
            { n: d.book.stat4n, l: d.book.stat4l },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="font-sans font-medium tracking-[-0.01em] leading-none mb-2 text-text-primary"
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

      <Divider />

      {/* BRIDGE – Book → OffMarketPool */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.book.bridgeEyebrow}</Eyebrow>
          <SectionTitle className="mb-6">
            {d.book.bridgeHeadline.split('*')[0]}
            <em className="italic">{d.book.bridgeHeadline.split('*')[1]}</em>
            {d.book.bridgeHeadline.split('*')[2] || ''}
          </SectionTitle>
          <p className="text-[0.92rem] leading-relaxed mb-10 max-w-[52ch] text-grey-secondary">
            {d.book.bridgeDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Stat number={d.platform.stat1n} label={d.platform.stat1l} />
            <Stat number={d.platform.stat2n} label={d.platform.stat2l} />
            <Stat number={d.platform.stat3n} label={d.platform.stat3l} />
          </div>
          <BtnPrimary href="/plattform">{d.book.bridgeCta}</BtnPrimary>
        </div>
      </section>

      {/* CTA / Notify */}
      <section className="px-[5vw] py-24 text-center border-t border-grey-light">
        <Eyebrow>{d.book.notifyEyebrow}</Eyebrow>
        <h2
          className="font-sans font-medium tracking-[-0.01em] mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          {d.book.notifyHeadline}
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch] text-grey-secondary">
          {d.book.notifyDesc}
        </p>
        <NotifyForm />
      </section>
    </>
  )
}

function NotifyForm() {
  const { d } = useLocale()

  return (
    <div className="flex max-w-[420px] mx-auto border border-grey-light">
      <input
        type="email"
        placeholder={d.book.emailPlaceholder}
        className="flex-1 px-5 py-3 bg-transparent outline-none text-[0.84rem] text-text-primary"
      />
      <button className="px-6 py-3 text-[0.74rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:opacity-80 bg-text-primary text-black">
        {d.book.preorder}
      </button>
    </div>
  )
}
