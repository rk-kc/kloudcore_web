import { memo } from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

interface FooterProps {
	darkMode: boolean
	onToggleDarkMode: () => void
	isJapanese: boolean
	onToggleLanguage: () => void
}

export const Footer = memo(
	({
		darkMode,
		onToggleDarkMode,
		isJapanese,
		onToggleLanguage
	}: FooterProps) => {
		const YEAR = new Date().getFullYear()

		return (
			<footer className="w-full fixed bottom-0 z-10 flex items-center justify-between border-t-4 border-gray-200 dark:border-gray-700 py-2 px-4 sm:px-6 bg-teal-400 dark:bg-teal-800 min-h-[50px]">
				<Typography className="text-xs sm:text-sm font-medium" color="primary">
					&copy; {YEAR} RUMI
				</Typography>
				<div className="flex items-center space-x-2">
					<button
						onClick={onToggleLanguage}
						className="px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white text-xs rounded transition-colors duration-200"
					>
						{isJapanese ? 'EN' : '日本語'}
					</button>
					<Button
						onClick={onToggleDarkMode}
						variant="ghost"
						className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<SunIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
						) : (
							<MoonIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-gray-400" />
						)}
					</Button>
				</div>
			</footer>
		)
	}
)
