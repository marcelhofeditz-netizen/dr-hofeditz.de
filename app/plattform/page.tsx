'use client'

import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import { PodcastSection } from '@/components/PodcastSection'
import { useLocale } from '@/lib/locale-context'

export default function PlattformPage() {
  const { d } = useLocale()

  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>{d.platform.eyebrow}</Eyebrow>
          <h1
            className="font-sans font-medium tracking-[-0.02em] leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            {d.platform.headline}
          </h1>
          <p className="text-[1rem] leading-relaxed mb-10 max-w-[48ch] text-grey-secondary">
            {d.platform.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <BtnPrimary href="https://offmarketpool.vercel.app" external>
              {d.home.toPlatform} &rarr;
            </BtnPrimary>
            <BtnOutline href="https://offmarketpool.vercel.app/login" external>
              {d.platform.login}
            </BtnOutline>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="px-[5vw] py-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-grey-light">
        {[
          { n: d.platform.stat1n, l: d.platform.stat1l },
          { n: d.platform.stat2n, l: d.platform.stat2l },
          { n: d.platform.stat3n, l: d.platform.stat3l },
          { n: d.platform.stat4n, l: d.platform.stat4l },
        ].map(({ n, l }) => (
          <div key={l} className="text-center">
            <div className="font-sans font-medium tracking-[-0.01em] leading-none text-text-primary"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              {n}
            </div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase mt-2 text-grey-secondary">
              {l}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* How it works */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.platform.howItWorks}</Eyebrow>
          <SectionTitle className="mb-14 max-w-[26ch]">
            {d.platform.howHeadline}
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: d.platform.step1,
                desc: d.platform.step1Desc,
              },
              {
                step: '02',
                title: d.platform.step2,
                desc: d.platform.step2Desc,
              },
              {
                step: '03',
                title: d.platform.step3,
                desc: d.platform.step3Desc,
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 border border-grey-light"
              >
                <div className="font-sans font-medium tracking-[-0.01em] text-[3rem] leading-none mb-5 text-grey-light">
                  {step}
                </div>
                <h3 className="font-sans font-medium tracking-[-0.01em] text-[1.2rem] mb-3 text-text-primary">
                  {title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed text-grey-secondary">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Assetklassen */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.platform.assetClasses}</Eyebrow>
          <SectionTitle className="mb-12">{d.platform.allAssets}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {d.platform.assets.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 p-4 border border-grey-light text-[0.85rem] text-grey-secondary"
              >
                <span className="text-text-primary">&bull;</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.platform.faqEyebrow}</Eyebrow>
          <SectionTitle className="mb-12">{d.platform.faqHeadline}</SectionTitle>
          <div className="space-y-4 max-w-[700px]">
            {d.platform.faqs.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 border border-grey-light"
              >
                <p className="text-[0.9rem] mb-2 text-text-primary font-normal">
                  {q}
                </p>
                <p className="text-[0.83rem] leading-relaxed text-grey-secondary">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <PodcastSection />

      {/* CTA */}
      <section className="px-[5vw] py-24 text-center border-t border-grey-light">
        <Eyebrow>{d.platform.ctaEyebrow}</Eyebrow>
        <h2
          className="font-sans font-medium tracking-[-0.01em] mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '20ch', lineHeight: 1.1 }}
        >
          {d.platform.ctaHeadline}
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[40ch] text-grey-secondary">
          {d.platform.ctaDesc}
        </p>
        <BtnPrimary href="https://offmarketpool.vercel.app" external>
          {d.home.toPlatform} &rarr;
        </BtnPrimary>
      </section>
    </>
  )
}
