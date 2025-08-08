import { memo } from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

interface FooterProps {
	darkMode: boolean
	onToggleDarkMode: () => void
}

export const Footer = memo(({ darkMode, onToggleDarkMode }: FooterProps) => {
	const YEAR = new Date().getFullYear()

	return (
		<footer className="w-full fixed bottom-0 z-10 flex items-center justify-center gap-x-12 border-t-4 border-gray-200 dark:border-gray-700 py-3 px-6 text-center md:justify-between bg-teal-400 dark:bg-teal-800 min-h-[80px]">
			<Typography className="text-base font-medium" color="primary">
				&copy; {YEAR} RUMI
			</Typography>
			<Button
				onClick={onToggleDarkMode}
				variant="ghost"
				className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
				aria-label="Toggle dark mode"
			>
				{darkMode ? (
					<SunIcon className="h-6 w-6 text-yellow-500" />
				) : (
					<MoonIcon className="h-6 w-6 text-blue-600 dark:text-gray-400" />
				)}
			</Button>
		</footer>
	)
})
