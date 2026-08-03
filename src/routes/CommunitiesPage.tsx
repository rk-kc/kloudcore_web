import {
	CakeIcon,
	HeartIcon,
	PaperAirplaneIcon,
	UserGroupIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { communitiesCopy } from '../i18n/translations/communities'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { buttonClasses } from '../components/ui/buttonClasses'

const icons = [PaperAirplaneIcon, HeartIcon, UserGroupIcon, CakeIcon]

export function CommunitiesPage() {
	const { locale } = useLanguage()
	const t = communitiesCopy[locale]

	return (
		<>
			<Section halftone borderY className="bg-paper-cream dark:bg-off-black py-20 text-center">
				<Badge className="bg-primary text-white mb-6 inline-block">{t.hero.badge}</Badge>
				<h1 className="text-display-lg font-display uppercase text-off-black dark:text-paper-cream mb-4">
					{t.hero.title}
				</h1>
				<p className="text-body-lg font-body max-w-2xl mx-auto opacity-80 mb-8">
					{t.hero.subtitle}
				</p>
				<div className="max-w-md mx-auto space-y-2">
					<Input placeholder={t.hero.searchPlaceholder} disabled className="opacity-60" />
					<p className="text-label-mono font-mono opacity-60 uppercase">
						{t.hero.searchComingSoon}
					</p>
				</div>
			</Section>

			<Section className="py-24">
				<h2 className="text-headline-lg font-display uppercase text-center mb-16">
					{t.eventTypesHeading}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
					{t.eventTypes.map((event, index) => {
						const Icon = icons[index]
						return (
							<Card
								key={event.title}
								rotate={index % 2 === 0 ? '-1' : '1'}
								className="p-6 flex flex-col gap-4"
							>
								<div className="w-14 h-14 bg-electric-orange border-2 border-off-black flex items-center justify-center">
									<Icon className="h-7 w-7 text-white" />
								</div>
								<h3 className="text-headline-md font-display uppercase">{event.title}</h3>
								<p className="text-body-md font-body opacity-80">{event.description}</p>
							</Card>
						)
					})}
				</div>
			</Section>

			<Section borderY className="py-24 bg-surface-container dark:bg-inverse-surface text-center">
				<h2 className="text-headline-lg font-display uppercase mb-4">{t.closing.heading}</h2>
				<p className="text-body-lg font-body opacity-80 mb-10">{t.closing.subtitle}</p>
				<a
					href="https://tayo.kloudcore.com"
					target="_blank"
					rel="noreferrer"
					className={buttonClasses('yellow')}
				>
					{t.closing.cta}
				</a>
				<div className="mt-12 max-w-md mx-auto border-2 border-off-black dark:border-paper-cream/70 bg-white dark:bg-inverse-surface p-6">
					<p className="text-body-md font-body mb-3">{t.closing.ideaPrompt}</p>
					<Link to="/join" className={buttonClasses('outline', 'w-full justify-center')}>
						{t.closing.ideaCta}
					</Link>
				</div>
			</Section>
		</>
	)
}
