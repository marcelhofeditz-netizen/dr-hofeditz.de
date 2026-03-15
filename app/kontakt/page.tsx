import { Eyebrow, SectionTitle } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt – Dr. Marcel Hofeditz',
}

export default function KontaktPage() {
  return (
    <section className="px-[5vw] py-24 min-h-[80vh]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>Direktkontakt</Eyebrow>
          <SectionTitle className="mb-6">
            Lassen Sie uns<br />
            <em className="italic">sprechen.</em>
          </SectionTitle>
          <p className="text-[0.92rem] leading-relaxed mb-10 max-w-[42ch] text-grey-secondary">
            Ob Offmarket-Transaktion, Buchvorbestellung, Immolab-Erstgesprach
            oder Presseanfrage – schreiben Sie mir direkt.
          </p>

          <div className="space-y-6">
            {[
              { label: 'Adresse', value: 'Jevenstedter Strasse 176a\nHamburg' },
              { label: 'Burozeiten', value: 'Montag – Freitag' },
              { label: 'Plattform', value: 'offmarketpool.vercel.app', link: 'https://offmarketpool.vercel.app' },
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
        <div className="p-8 border border-grey-light">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-6 text-grey-secondary">
            Nachricht senden
          </p>

          <div className="space-y-4">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Ihr vollstandiger Name' },
              { id: 'email', label: 'E-Mail', type: 'email', placeholder: 'ihre@email.de' },
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
                Anliegen
              </label>
              <select
                id="anliegen"
                className="w-full border border-grey-light px-4 py-3 outline-none text-[0.85rem] text-grey-secondary transition-colors duration-200 focus:border-text-primary"
                style={{ background: '#F6F6F6' }}
              >
                <option value="">Bitte wahlen ...</option>
                <option value="offmarket">Offmarket-Transaktion</option>
                <option value="buch">Buch / Buchkauf</option>
                <option value="immolab">Immolab Coaching</option>
                <option value="presse">Presse / Interview</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="nachricht"
                className="text-[0.72rem] tracking-[0.1em] uppercase block mb-2 text-grey-secondary"
              >
                Nachricht
              </label>
              <textarea
                id="nachricht"
                rows={5}
                placeholder="Ihre Nachricht ..."
                className="w-full bg-transparent border border-grey-light px-4 py-3 outline-none text-[0.85rem] text-text-primary resize-none transition-colors duration-200 focus:border-text-primary"
              />
            </div>

            <button className="w-full py-3 text-[0.76rem] tracking-[0.12em] uppercase font-medium transition-all duration-200 hover:opacity-80 bg-black text-white">
              Nachricht senden
            </button>

            <p className="text-[0.7rem] text-center text-grey-secondary">
              Ich antworte personlich innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
