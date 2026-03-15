import Link from 'next/link'
import { ReactNode } from 'react'

// Eyebrow label
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[0.7rem] tracking-[0.22em] uppercase block mb-4"
      style={{ color: '#c8a84b' }}
    >
      {children}
    </span>
  )
}

// Section title
export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`font-serif font-light leading-[1.1] ${className}`}
      style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
    >
      {children}
    </h2>
  )
}

// Gold divider
export function Divider() {
  return <div className="divider-gold my-0 mx-[5vw]" />
}

// Primary button
export function BtnPrimary({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const cls =
    'inline-block text-[0.76rem] tracking-[0.12em] uppercase px-7 py-3 font-medium transition-all duration-200 hover:brightness-110'
  const style = { background: '#c8a84b', color: '#07101f' }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  )
}

// Outline button
export function BtnOutline({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const cls =
    'inline-block text-[0.76rem] tracking-[0.12em] uppercase px-7 py-3 transition-all duration-200 border hover:border-[#c8a84b]'
  const style = {
    color: '#f0eae0',
    borderColor: 'rgba(240,234,224,0.25)',
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  )
}

// Project card
export function ProjectCard({
  eyebrow,
  title,
  description,
  cta,
  href,
  external,
  accent,
}: {
  eyebrow: string
  title: string
  description: string
  cta: string
  href: string
  external?: boolean
  accent?: string
}) {
  const inner = (
    <div
      className="group h-full p-8 flex flex-col justify-between border transition-all duration-300 hover:bg-[rgba(200,168,75,0.04)] relative"
      style={{ borderColor: 'rgba(200,168,75,0.18)' }}
    >
      {/* Top bar accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: accent || '#c8a84b' }}
      />
      <div>
        <span
          className="text-[0.68rem] tracking-[0.2em] uppercase block mb-5"
          style={{ color: accent || '#c8a84b' }}
        >
          {eyebrow}
        </span>
        <h3
          className="font-serif font-light leading-[1.15] mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#f0eae0' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[0.85rem] leading-relaxed" style={{ color: '#8a9ab0' }}>
          {description}
        </p>
      </div>
      <div className="mt-8">
        <span
          className="text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-200 group-hover:text-[#e8c96a]"
          style={{ color: '#c8a84b' }}
        >
          {cta} →
        </span>
      </div>
    </div>
  )

  const wrapCls = 'relative block h-full'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapCls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={wrapCls}>
      {inner}
    </Link>
  )
}

// Stat item
export function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="font-serif font-light leading-none"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#c8a84b' }}
      >
        {number}
      </div>
      <div
        className="text-[0.72rem] tracking-[0.12em] uppercase mt-2"
        style={{ color: '#8a9ab0' }}
      >
        {label}
      </div>
    </div>
  )
}
