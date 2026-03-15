import Link from 'next/link'

const footerLinks = [
  { href: '/plattform', label: 'Offmarketpool' },
  { href: '/buch', label: 'Die Immobilienlüge' },
  { href: '/coaching', label: 'Immolab' },
  { href: '/forschung', label: 'Forschung' },
  { href: '/kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-0"
      style={{ borderTop: '1px solid rgba(200,168,75,0.14)' }}
    >
      <div className="px-[5vw] py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <span
            className="font-serif text-base tracking-[0.14em] uppercase block mb-4"
            style={{ color: '#c8a84b' }}
          >
            Dr. Marcel Hofeditz
          </span>
          <p className="text-[0.82rem] leading-relaxed max-w-[28ch]" style={{ color: '#8a9ab0' }}>
            Promovierter Managementforscher, Immobilienunternehmer und Autor.
            Hamburg, 2026.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span
            className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4"
            style={{ color: '#c8a84b' }}
          >
            Projekte
          </span>
          <ul className="flex flex-col gap-2">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.8rem] transition-colors duration-200 hover:text-[#c8a84b]"
                  style={{ color: '#8a9ab0' }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://offmarketpool.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] transition-colors duration-200 hover:text-[#c8a84b]"
                style={{ color: '#8a9ab0' }}
              >
                → Plattform öffnen
              </a>
            </li>
          </ul>
        </div>

        {/* Contact teaser */}
        <div>
          <span
            className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4"
            style={{ color: '#c8a84b' }}
          >
            Kontakt
          </span>
          <p className="text-[0.8rem] mb-3" style={{ color: '#8a9ab0' }}>
            Jevenstedter Straße 176a<br />
            Hamburg
          </p>
          <Link
            href="/kontakt"
            className="text-[0.76rem] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-[#e8c96a]"
            style={{ color: '#c8a84b' }}
          >
            Nachricht senden →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-[5vw] py-4 flex flex-wrap items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(200,168,75,0.1)' }}
      >
        <span className="font-serif text-[0.85rem]" style={{ color: '#8a9ab0' }}>
          © {new Date().getFullYear()} Dr. Marcel Hofeditz
        </span>
        <div className="flex gap-5">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[0.7rem] tracking-[0.06em] transition-colors duration-200 hover:text-[#c8a84b]"
              style={{ color: '#8a9ab0' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
