'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
  const { d } = useLocale()

  const footerLinks = [
    { href: '/plattform', label: d.nav.platform },
    { href: '/buch', label: d.nav.book },
    { href: '/coaching', label: d.nav.coaching },
    { href: '/forschung', label: d.nav.research },
    { href: '/kontakt', label: d.nav.contact },
  ]

  const ecosystemLinks = [
    { label: d.footer.drHofeditz, sub: d.footer.founderResearch, href: '/', external: false },
    { label: d.footer.offmarketpool, sub: d.footer.platformExecution, href: 'https://offmarketpool.vercel.app', external: true },
    { label: d.footer.dieImmobilienluge, sub: d.footer.thesisFramework, href: '/buch', external: false },
  ]

  return (
    <footer className="relative z-10 mt-0 border-t border-grey-light">
      <div className="px-[5vw] py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-serif text-base tracking-[0.14em] uppercase block mb-4 text-text-primary">
            Dr. Marcel Hofeditz
          </span>
          <p className="text-[0.82rem] leading-relaxed max-w-[28ch] text-grey-secondary">
            {d.footer.desc}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
            {d.footer.pages}
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
            {d.footer.ecosystem}
          </span>
          <ul className="flex flex-col gap-3">
            {ecosystemLinks.map(({ label, sub, href, external }) => (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <span className="text-[0.8rem] text-grey-secondary transition-colors duration-200 group-hover:text-text-primary">
                      {label} &nearr;
                    </span>
                    <span className="block text-[0.65rem] text-grey-secondary mt-0.5">{sub}</span>
                  </a>
                ) : (
                  <Link href={href} className="block group">
                    <span className="text-[0.8rem] text-grey-secondary transition-colors duration-200 group-hover:text-text-primary">
                      {label}
                    </span>
                    <span className="block text-[0.65rem] text-grey-secondary mt-0.5">{sub}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-4 text-grey-secondary">
            {d.footer.contact}
          </span>
          <p className="text-[0.8rem] mb-3 text-grey-secondary">
            {d.footer.address}<br />
            Hamburg
          </p>
          <Link
            href="/kontakt"
            className="text-[0.76rem] tracking-[0.1em] uppercase text-text-primary transition-colors duration-200 hover:text-grey-secondary"
          >
            {d.footer.sendMessage} &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[5vw] py-4 flex flex-wrap items-center justify-between gap-3 border-t border-grey-light">
        <span className="font-serif text-[0.85rem] text-grey-secondary">
          &copy; {new Date().getFullYear()} Dr. Marcel Hofeditz
        </span>
        <div className="flex gap-5">
          <Link href="/impressum" className="text-[0.7rem] tracking-[0.06em] text-grey-secondary transition-colors duration-200 hover:text-text-primary">
            {d.footer.impressum}
          </Link>
          <Link href="/datenschutz" className="text-[0.7rem] tracking-[0.06em] text-grey-secondary transition-colors duration-200 hover:text-text-primary">
            {d.footer.datenschutz}
          </Link>
        </div>
      </div>
    </footer>
  )
}
