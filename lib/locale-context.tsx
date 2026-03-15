'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, dictionaries } from './i18n'

type LocaleContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  d: typeof dictionaries.de
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'de',
  setLocale: () => {},
  d: dictionaries.de,
})

export function useLocale() {
  return useContext(LocaleContext)
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'de'
  const stored = localStorage.getItem('locale')
  if (stored === 'en' || stored === 'de') return stored
  const host = window.location.hostname
  if (host.endsWith('.com')) return 'en'
  return 'de'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de')

  useEffect(() => {
    setLocaleState(detectLocale())
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('locale', l)
    document.documentElement.lang = l
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, d: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}
