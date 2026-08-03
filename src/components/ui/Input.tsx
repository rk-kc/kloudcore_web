import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

const fieldClasses =
	'w-full bg-paper-cream dark:bg-inverse-surface border-2 border-off-black dark:border-paper-cream/70 px-4 py-3 font-body text-off-black dark:text-inverse-on-surface focus:border-[3px] focus:border-electric-orange outline-none'

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return <input className={`${fieldClasses} ${className}`} {...props} />
}

export function Textarea({
	className = '',
	rows = 4,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea rows={rows} className={`${fieldClasses} ${className}`} {...props} />
}
