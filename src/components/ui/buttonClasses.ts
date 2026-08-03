export type ButtonVariant = 'primary' | 'accent' | 'yellow' | 'dark' | 'outline'

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-primary text-white',
	accent: 'bg-electric-orange text-white',
	yellow: 'bg-retro-yellow text-off-black',
	dark: 'bg-off-black text-paper-cream dark:bg-paper-cream dark:text-off-black',
	outline: 'bg-transparent text-off-black dark:text-paper-cream'
}

const baseButtonClasses =
	'inline-flex items-center justify-center gap-2 border-2 border-off-black dark:border-paper-cream/70 px-6 py-3 font-display text-button uppercase brutalist-shadow hover-lift active-press'

export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
	return `${baseButtonClasses} ${variantClasses[variant]} ${className}`.trim()
}
