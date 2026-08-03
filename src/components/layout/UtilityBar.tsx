import { memo } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme/useTheme'
import { useLanguage } from '../../i18n/useLanguage'

export const UtilityBar = memo(function UtilityBar() {
	const { darkMode, toggleDarkMode } = useTheme()
	const { locale, toggleLanguage } = useLanguage()

	return (
		<div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
			<button
				onClick={toggleLanguage}
				className="border-2 border-off-black dark:border-paper-cream/70 bg-retro-yellow px-3 py-1.5 font-mono text-xs uppercase text-off-black brutalist-shadow active-press"
			>
				{locale === 'ja' ? 'EN' : '日本語'}
			</button>
			<button
				onClick={toggleDarkMode}
				aria-label="Toggle dark mode"
				className="border-2 border-off-black dark:border-paper-cream/70 bg-white dark:bg-inverse-surface p-2 brutalist-shadow active-press"
			>
				{darkMode ? (
					<SunIcon className="h-4 w-4 text-retro-yellow" />
				) : (
					<MoonIcon className="h-4 w-4 text-vintage-green" />
				)}
			</button>
		</div>
	)
})
