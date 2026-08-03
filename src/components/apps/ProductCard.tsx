import { useLanguage } from '../../i18n/useLanguage'
import type { Product } from '../../data/products'
import type { Translations } from '../../i18n/types'
import { Card } from '../ui/Card'
import { buttonClasses } from '../ui/buttonClasses'

interface ProductCardProps {
	product: Translations<Product>
}

export function ProductCard({ product }: ProductCardProps) {
	const { locale } = useLanguage()
	const app = product[locale]

	return (
		<Card className="p-6 flex flex-col items-center text-center gap-4 max-w-sm">
			<img src={app.logo} alt={`${app.name} logo`} className="h-16 w-16" />
			<h3 className="text-headline-md font-display uppercase">{app.name}</h3>
			<p className="text-body-md font-body text-off-black/70 dark:text-inverse-on-surface/70">
				{app.description}
			</p>
			<a
				href={app.url}
				target="_blank"
				rel="noreferrer"
				className={buttonClasses('accent', 'w-full justify-center')}
			>
				{locale === 'ja' ? 'アプリへ移動' : 'Go to App'}
			</a>
		</Card>
	)
}
