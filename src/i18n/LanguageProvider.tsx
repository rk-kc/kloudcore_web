import { useState, type ReactNode } from 'react'
import { LanguageContext } from './language-context'
import type { Locale } from './types'

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(() => {
		return localStorage.getItem('locale') === 'ja' ? 'ja' : 'en'
	})

	const toggleLanguage = () => {
		setLocale((prev) => {
			const next = prev === 'en' ? 'ja' : 'en'
			localStorage.setItem('locale', next)
			return next
		})
	}

	return (
		<LanguageContext.Provider value={{ locale, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}
