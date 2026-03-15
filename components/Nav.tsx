'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Start' },
  { href: '/plattform', label: 'Offmarketpool' },
  { href: '/buch', label: 'Das Buch' },
  { href: '/coaching', label: 'Immolab' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[5vw] py-5"
      style={{
        background: 'rgba(7,16,31,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(200,168,75,0.14)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <span
          className="font-serif text-[1.05rem] tracking-[0.14em] uppercase"
          style={{ color: '#c8a84b' }}
        >
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
                className="text-[0.76rem] tracking-[0.1em] uppercase transition-colors duration-200"
                style={{ color: active ? '#c8a84b' : '#8a9ab0' }}
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
            className="text-[0.74rem] tracking-[0.1em] uppercase px-4 py-2 transition-all duration-200 border"
            style={{
              color: '#07101f',
              background: '#c8a84b',
              borderColor: '#c8a84b',
            }}
          >
            → Zur Plattform
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menü"
      >
        <span className="block w-5 h-px" style={{ background: '#c8a84b' }} />
        <span className="block w-5 h-px" style={{ background: '#c8a84b' }} />
        <span className="block w-3 h-px" style={{ background: '#c8a84b' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col"
          style={{ background: '#0d1a2d', borderBottom: '1px solid rgba(200,168,75,0.14)' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-[5vw] py-4 text-[0.8rem] tracking-[0.1em] uppercase border-b"
              style={{
                color: pathname === href ? '#c8a84b' : '#8a9ab0',
                borderColor: 'rgba(200,168,75,0.1)',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://offmarketpool.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[5vw] py-4 text-[0.8rem] tracking-[0.1em] uppercase"
            style={{ color: '#c8a84b' }}
          >
            → Zur Plattform
          </a>
        </div>
      )}
    </nav>
  )
}
