import Link from 'next/link'

const footerLinks = [
  { href: '/plattform', label: 'Offmarketpool' },
  { href: '/buch', label: 'Die Immobilienluge' },
  { href: '/coaching', label: 'Immolab' },
  { href: '/forschung', label: 'Forschung' },
  { href: '/kontakt', label: 'Kontakt' },
]

const ecosystemLinks = [
  { href: 'https://dr-hofeditz.de', label: 'Dr. Hofeditz', external: false },
  { href: 'https://offmarketpool.vercel.app', label: 'OffMarketPool', external: true },
  { href: '/buch', label: 'Die Immobilienluge', external: false },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Footer() {
  return (
    <footer className="relative z-10 mt-0 border-t border-grey-light">
      <div className="px-[5vw] py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-serif text-base tracking-[0.14em] uppercase block mb-4 text-text-primary">
            Dr. Marcel Hofeditz
          </span>
          <p className="text-[0.82rem] leading-relaxed max-w-[28ch] text-grey-secondary">
            Promovierter Managementforscher, Immobilienunternehmer und Autor.
            Hamburg, 2026.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
            Seiten
          </span>
          <ul className="flex flex-col gap-2">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.8rem] text-grey-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
            Ecosystem
          </span>
          <ul className="flex flex-col gap-2">
            {ecosystemLinks.map(({ href, label, external }) => (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] text-grey-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label} &nearr;
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="text-[0.8rem] text-grey-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
            Kontakt
          </span>
          <p className="text-[0.8rem] mb-3 text-grey-secondary">
            Jevenstedter Strasse 176a<br />
            Hamburg
          </p>
          <Link
            href="/kontakt"
            className="text-[0.76rem] tracking-[0.1em] uppercase text-text-primary transition-colors duration-200 hover:text-grey-secondary"
          >
            Nachricht senden &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[5vw] py-4 flex flex-wrap items-center justify-between gap-3 border-t border-grey-light">
        <span className="font-serif text-[0.85rem] text-grey-secondary">
          &copy; {new Date().getFullYear()} Dr. Marcel Hofeditz
        </span>
        <div className="flex gap-5">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[0.7rem] tracking-[0.06em] text-grey-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
