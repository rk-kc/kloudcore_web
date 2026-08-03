import type { ReactNode } from 'react'

type CardRotation = '-2' | '-1' | '1' | '2'

const rotateClasses: Record<CardRotation, string> = {
	'-2': '-rotate-2',
	'-1': '-rotate-1',
	'1': 'rotate-1',
	'2': 'rotate-2'
}

interface CardProps {
	className?: string
	rotate?: CardRotation
	children: ReactNode
}

export function Card({ className = '', rotate, children }: CardProps) {
	const rotateClass = rotate ? rotateClasses[rotate] : ''
	return (
		<div
			className={`border-2 border-off-black dark:border-paper-cream/70 bg-white dark:bg-inverse-surface brutalist-shadow-lg transition-transform ${rotateClass} ${className}`}
		>
			{children}
		</div>
	)
}
