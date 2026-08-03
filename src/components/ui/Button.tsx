import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonClasses, type ButtonVariant } from './buttonClasses'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
	return (
		<button className={buttonClasses(variant, className)} {...props}>
			{children}
		</button>
	)
}
