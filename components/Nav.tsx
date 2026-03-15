'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Start' },
  { href: '/plattform', label: 'Offmarketpool' },
  { href: '/buch', label: 'Das Buch' },
  { href: '/coaching', label: 'Immolab' },
  { href: '/forschung', label: 'Forschung' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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
      <ul className="hidden md:flex items-center gap-8">
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
            Zur Plattform
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className="block w-5 h-px bg-text-primary" />
        <span className="block w-5 h-px bg-text-primary" />
        <span className="block w-3 h-px bg-text-primary" />
      </button>

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
            Zur Plattform
          </a>
        </div>
      )}
    </nav>
  )
}
