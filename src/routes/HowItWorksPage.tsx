import {
	MapPinIcon,
	CalendarDaysIcon,
	FaceSmileIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/useLanguage'
import { howItWorksCopy } from '../i18n/translations/howItWorks'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonClasses'

const capabilityIcons = [MapPinIcon, CalendarDaysIcon, FaceSmileIcon, DevicePhoneMobileIcon]

export function HowItWorksPage() {
	const { locale } = useLanguage()
	const t = howItWorksCopy[locale]

	return (
		<>
			<Section halftone borderY className="bg-paper-cream dark:bg-off-black py-20 text-center">
				<Badge className="bg-vintage-green text-white mb-6 inline-block">{t.hero.badge}</Badge>
				<h1 className="text-display-lg font-display uppercase text-off-black dark:text-paper-cream mb-4">
					{t.hero.title}
				</h1>
				<p className="text-body-lg font-body max-w-2xl mx-auto opacity-80">{t.hero.subtitle}</p>
			</Section>

			<Section className="py-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
					{t.steps.map((step) => (
						<Card key={step.number} className="p-8 flex flex-col gap-4">
							<span className="text-headline-lg font-display text-primary">{step.number}</span>
							<div className="h-1 bg-off-black dark:bg-paper-cream w-12" />
							<h3 className="text-headline-md font-display uppercase">{step.title}</h3>
							<p className="text-body-md font-body opacity-80">{step.description}</p>
						</Card>
					))}
				</div>
			</Section>

			<Section borderY className="py-24 bg-surface-container dark:bg-inverse-surface">
				<h2 className="text-headline-lg font-display uppercase text-center mb-16">
					{t.capabilitiesHeading}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
					{t.capabilities.map((capability, index) => {
						const Icon = capabilityIcons[index]
						return (
							<Card key={capability.title} className="p-8 flex flex-col gap-4">
								<Icon className="h-10 w-10 text-primary" />
								<h4 className="text-headline-md font-display uppercase">{capability.title}</h4>
								<p className="text-body-md font-body opacity-80">{capability.description}</p>
							</Card>
						)
					})}
				</div>
			</Section>

			<Section className="py-24 text-center">
				<h2 className="text-headline-lg font-display uppercase mb-6">{t.cta.heading}</h2>
				<p className="text-body-lg font-body opacity-80 mb-10 max-w-2xl mx-auto">
					{t.cta.subtitle}
				</p>
				<a
					href="https://tayo.kloudcore.com"
					target="_blank"
					rel="noreferrer"
					className={buttonClasses('yellow')}
				>
					{t.cta.button}
				</a>
			</Section>
		</>
	)
}
