import { createContext } from 'react'
import type { Locale } from './types'

export interface LanguageContextValue {
	locale: Locale
	toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
