import { Link } from 'react-router-dom'
import { QrCodeIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/useLanguage'
import { productsCopy } from '../i18n/translations/products'
import { tayoProduct } from '../data/products'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonClasses'

const featureIcons = [QrCodeIcon, CalendarDaysIcon, MapPinIcon]

export function ProductsPage() {
	const { locale } = useLanguage()
	const t = productsCopy[locale]
	const tayo = tayoProduct[locale]

	return (
		<>
			<Section halftone borderY className="bg-paper-cream dark:bg-off-black py-20 text-center">
				<Badge className="bg-retro-yellow inline-block mb-6 text-black">{t.hero.badge}</Badge>
				<h1 className="text-display-lg font-display uppercase text-off-black dark:text-paper-cream mb-4">
					{t.hero.title}
				</h1>
				<p className="text-body-lg font-body max-w-2xl mx-auto opacity-80">{t.hero.subtitle}</p>
			</Section>

			<Section className="py-24">
				<Card className="overflow-hidden flex flex-col md:flex-row mb-gutter">
					<div className="md:w-1/2 flex items-center justify-center bg-vintage-green/10 p-margin-lg relative">
						<span className="absolute top-4 left-4">
							<Badge className="bg-primary text-white">{t.flagship.badge}</Badge>
						</span>
						<img src="/tayo-logo-full.svg" alt="Tayo logo" className="w-2/3 max-w-xs" />
					</div>
					<div className="md:w-1/2 p-margin-md md:p-margin-lg flex flex-col justify-center gap-6">
						<h2 className="text-headline-lg font-display uppercase">{t.flagship.title}</h2>
						<p className="text-body-lg font-body opacity-80">{t.flagship.description}</p>
						<div className="flex flex-wrap items-center gap-4">
							<a
								href={tayo.url}
								target="_blank"
								rel="noreferrer"
								className={buttonClasses('yellow')}
							>
								{t.flagship.cta}
							</a>
							<span className="flex items-center gap-2 border-2 border-off-black dark:border-paper-cream/70 px-4 py-2 font-mono text-label-mono uppercase">
								<span className="w-3 h-3 bg-vintage-green rounded-full animate-pulse" />
								{t.flagship.liveNow}
							</span>
						</div>
					</div>
				</Card>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-gutter">
					{t.flagship.features.map((feature, index) => {
						const Icon = featureIcons[index]
						return (
							<Card key={feature.title} className="p-margin-md flex flex-col gap-4">
								<Icon className="h-9 w-9 text-primary" />
								<h3 className="text-headline-md font-display uppercase">{feature.title}</h3>
								<p className="text-body-md font-body opacity-80">{feature.description}</p>
							</Card>
						)
					})}
				</div>
			</Section>

			<Section borderY className="py-24 bg-surface-container dark:bg-inverse-surface">
				<div className="mb-12 flex justify-between items-end">
					<div>
						<h2 className="text-headline-lg font-display uppercase">{t.labSection.heading}</h2>
						<p className="text-label-mono font-mono opacity-60 mt-2 uppercase tracking-widest">
							{t.labSection.label}
						</p>
					</div>
				</div>
				<Card className="p-margin-md flex flex-col gap-4 max-w-xl">
					<h3 className="text-headline-md font-display uppercase">{t.labSection.cardTitle}</h3>
					<p className="text-body-md font-body opacity-80">{t.labSection.cardDescription}</p>
					<Link to="/join" className={buttonClasses('outline', 'self-start')}>
						{t.labSection.cardCta}
					</Link>
				</Card>
			</Section>

			<Section className="py-24">
				<div className="bg-electric-orange border-2 border-off-black dark:border-paper-cream/70 p-margin-md md:p-margin-lg text-center brutalist-shadow-lg">
					<h2 className="text-headline-lg font-display uppercase text-white mb-6">
						{t.cta.heading}
					</h2>
					<p className="text-body-lg font-body text-white/90 max-w-2xl mx-auto mb-10">
						{t.cta.subtitle}
					</p>
					<Link to="/join" className={buttonClasses('yellow', 'text-xl')}>
						{t.cta.button}
					</Link>
				</div>
			</Section>
		</>
	)
}
