import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './theme-context'

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem('darkMode') === 'true'
	})

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode)
		localStorage.setItem('darkMode', darkMode.toString())
	}, [darkMode])

	const toggleDarkMode = () => setDarkMode((prev) => !prev)

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
