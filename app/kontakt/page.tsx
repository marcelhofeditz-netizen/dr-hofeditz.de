'use client'

import { Eyebrow } from '@/components/ui'
import { useLocale } from '@/lib/locale-context'

export default function KontaktPage() {
  const { d } = useLocale()

  return (
    <section className="px-[5vw] py-24 min-h-[80vh]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>{d.contact.eyebrow}</Eyebrow>
          <h1
            className="font-sans font-medium tracking-[-0.02em] leading-[1.1] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            {d.contact.headline1}<br />
            <em className="italic">{d.contact.headline2}</em>
          </h1>
          <p className="text-[0.92rem] leading-relaxed mb-10 max-w-[42ch] text-grey-secondary">
            {d.contact.desc}
          </p>

          <div className="space-y-6">
            {[
              { label: d.contact.address, value: `${d.footer.address}\nHamburg` },
              { label: d.contact.hours, value: d.contact.hoursValue },
              { label: d.contact.platformLabel, value: 'offmarketpool.vercel.app', link: 'https://offmarketpool.vercel.app' },
            ].map(({ label, value, link }) => (
              <div key={label}>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase block mb-1 text-grey-secondary">
                  {label}
                </span>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] text-grey-secondary hover:text-text-primary transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[0.88rem] whitespace-pre-line text-grey-secondary">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="p-8 border border-grey-light bg-bg-card">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-6 text-grey-secondary">
            {d.contact.sendMessage}
          </p>

          <div className="space-y-4">
            {[
              { id: 'name', label: d.contact.name, type: 'text', placeholder: d.contact.namePlaceholder },
              { id: 'email', label: d.contact.email, type: 'email', placeholder: d.contact.emailPlaceholder },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-[0.72rem] tracking-[0.1em] uppercase block mb-2 text-grey-secondary"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-transparent border border-grey-light px-4 py-3 outline-none text-[0.85rem] text-text-primary transition-colors duration-200 focus:border-text-primary"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="anliegen"
                className="text-[0.72rem] tracking-[0.1em] uppercase block mb-2 text-grey-secondary"
              >
                {d.contact.subject}
              </label>
              <select
                id="anliegen"
                className="w-full border border-grey-light px-4 py-3 outline-none text-[0.85rem] text-grey-secondary transition-colors duration-200 focus:border-text-primary"
                style={{ background: '#111111' }}
              >
                <option value="">{d.contact.subjectDefault}</option>
                <option value="offmarket">{d.contact.subjectOffmarket}</option>
                <option value="buch">{d.contact.subjectBook}</option>
                <option value="immolab">{d.contact.subjectCoaching}</option>
                <option value="presse">{d.contact.subjectPress}</option>
                <option value="sonstiges">{d.contact.subjectOther}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="nachricht"
                className="text-[0.72rem] tracking-[0.1em] uppercase block mb-2 text-grey-secondary"
              >
                {d.contact.message}
              </label>
              <textarea
                id="nachricht"
                rows={5}
                placeholder={d.contact.messagePlaceholder}
                className="w-full bg-transparent border border-grey-light px-4 py-3 outline-none text-[0.85rem] text-text-primary resize-none transition-colors duration-200 focus:border-text-primary"
              />
            </div>

            <button className="w-full py-3 text-[0.76rem] tracking-[0.12em] uppercase font-medium transition-all duration-200 hover:opacity-80 bg-text-primary text-black">
              {d.contact.send}
            </button>

            <p className="text-[0.7rem] text-center text-grey-secondary">
              {d.contact.responseTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
