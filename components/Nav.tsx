'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { locale, setLocale, d } = useLocale()

  const links = [
    { href: '/', label: d.nav.start },
    { href: '/plattform', label: d.nav.platform },
    { href: '/buch', label: d.nav.book },
    { href: '/coaching', label: d.nav.coaching },
    { href: '/forschung', label: d.nav.research },
    { href: '/kontakt', label: d.nav.contact },
  ]

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-white/90 backdrop-blur-md"
      style={{ borderBottom: '1px solid #EAEAEA' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <span className="font-serif text-[1.05rem] tracking-[0.14em] uppercase text-text-primary">
          Dr. Marcel Hofeditz
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-7">
        {links.map(({ href, label }) => {
          const active = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.76rem] tracking-[0.1em] uppercase transition-colors duration-200 ${
                  active ? 'text-text-primary' : 'text-grey-secondary hover:text-text-primary'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
        <li>
          <a
            href="https://offmarketpool.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.74rem] tracking-[0.1em] uppercase px-4 py-2 transition-all duration-200 bg-black text-white hover:opacity-80"
          >
            {d.nav.toPlatform}
          </a>
        </li>
        <li>
          <button
            onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
            className="text-[0.72rem] tracking-[0.14em] uppercase px-3 py-1.5 border border-grey-light text-grey-secondary hover:text-text-primary hover:border-text-primary transition-all duration-200"
          >
            {d.nav.langToggle}
          </button>
        </li>
      </ul>

      {/* Mobile burger */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
          className="text-[0.72rem] tracking-[0.14em] uppercase px-2 py-1 border border-grey-light text-grey-secondary"
        >
          {d.nav.langToggle}
        </button>
        <button
          className="flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-px bg-text-primary" />
          <span className="block w-5 h-px bg-text-primary" />
          <span className="block w-3 h-px bg-text-primary" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col bg-white"
          style={{ borderBottom: '1px solid #EAEAEA' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-[5vw] py-4 text-[0.8rem] tracking-[0.1em] uppercase border-b border-grey-light ${
                pathname === href ? 'text-text-primary' : 'text-grey-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://offmarketpool.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[5vw] py-4 text-[0.8rem] tracking-[0.1em] uppercase text-text-primary"
          >
            {d.nav.toPlatform}
          </a>
        </div>
      )}
    </nav>
  )
}
