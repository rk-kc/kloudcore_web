import type { ReactNode } from 'react'

interface SectionProps {
	className?: string
	innerClassName?: string
	halftone?: boolean
	borderY?: boolean
	children: ReactNode
}

export function Section({
	className = '',
	innerClassName = '',
	halftone = false,
	borderY = false,
	children
}: SectionProps) {
	const borderClass = borderY ? 'border-y-2 border-off-black dark:border-paper-cream/70' : ''
	return (
		<section className={`relative overflow-hidden ${borderClass} ${className}`}>
			{halftone && <div className="halftone-bg absolute inset-0 pointer-events-none" />}
			<div className={`relative z-10 max-w-[1280px] mx-auto px-margin-sm md:px-margin-lg ${innerClassName}`}>
				{children}
			</div>
		</section>
	)
}
