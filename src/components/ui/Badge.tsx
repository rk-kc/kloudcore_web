import type { ReactNode } from 'react'

interface BadgeProps {
	className?: string
	children: ReactNode
}

export function Badge({ className = '', children }: BadgeProps) {
	return (
		<span
			className={`inline-block border-2 border-off-black dark:border-paper-cream/70 px-4 py-1 font-mono text-label-mono uppercase ${className}`}
		>
			{children}
		</span>
	)
}
