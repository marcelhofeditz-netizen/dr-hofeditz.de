'use client'

import Image from 'next/image'
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
            <div
              style={{
                transform: 'perspective(900px) rotateY(-8deg) rotateX(2deg)',
                transition: 'transform 0.5s ease',
              }}
            >
              <Image
                src="/book-cover.jpg"
                alt="Die Immobilienlüge – Dr. Marcel Hofeditz"
                width={340}
                height={500}
                className="object-cover"
                style={{
                  width: 'clamp(200px, 25vw, 340px)',
                  height: 'auto',
                  filter: 'drop-shadow(-8px 16px 40px rgba(0,0,0,0.5))',
                }}
                priority
              />
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
