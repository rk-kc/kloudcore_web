type IllustrationVariant = 'primary' | 'secondary' | 'accent'

const variantClasses: Record<IllustrationVariant, string> = {
	primary: 'bg-electric-orange/20',
	secondary: 'bg-vintage-green/20',
	accent: 'bg-retro-yellow/20'
}

interface IllustrationPlaceholderProps {
	className?: string
	variant?: IllustrationVariant
}

export function IllustrationPlaceholder({
	className = '',
	variant = 'primary'
}: IllustrationPlaceholderProps) {
	return (
		<div
			className={`relative flex items-center justify-center overflow-hidden border-2 border-off-black dark:border-paper-cream/70 ${variantClasses[variant]} ${className}`}
		>
			<div className="halftone-bg absolute inset-0" />
			<svg viewBox="0 0 100 100" className="relative z-10 w-1/3 h-1/3 opacity-60">
				<circle cx="38" cy="50" r="28" className="fill-vintage-green" opacity="0.85" />
				<circle cx="62" cy="50" r="28" className="fill-electric-orange" opacity="0.85" />
			</svg>
		</div>
	)
}
