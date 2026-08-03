import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { homeCopy } from '../i18n/translations/home'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Marquee } from '../components/ui/Marquee'
import { IllustrationPlaceholder } from '../components/ui/IllustrationPlaceholder'
import { Input, Textarea } from '../components/ui/Input'
import { buttonClasses } from '../components/ui/buttonClasses'

export function HomePage() {
	const { locale } = useLanguage()
	const t = homeCopy[locale]

	return (
		<>
			<Section halftone borderY className="bg-paper-cream dark:bg-off-black py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
					<div className="space-y-8 order-2 lg:order-1">
						<Badge className="bg-vintage-green text-white -rotate-2 inline-block">
							{t.hero.badge}
						</Badge>
						<h1 className="text-display-lg font-display text-off-black dark:text-paper-cream leading-[0.95]">
							{t.hero.titleLine1}
							<br />
							<span className="text-primary italic">{t.hero.titleLine2}</span>
						</h1>
						<p className="text-body-lg font-body text-off-black/80 dark:text-inverse-on-surface/80 max-w-xl">
							{t.hero.subtitle}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-2">
							<a
								href="https://tayo.kloudcore.com"
								target="_blank"
								rel="noreferrer"
								className={buttonClasses('yellow', 'text-xl')}
							>
								{t.hero.ctaPrimary}
							</a>
							<Link to="/how-it-works" className={buttonClasses('outline')}>
								{t.hero.ctaSecondary}
							</Link>
						</div>
					</div>
					<div className="order-1 lg:order-2 flex justify-center">
						<IllustrationPlaceholder
							variant="accent"
							className="w-full max-w-lg aspect-[4/3] rounded-xl"
						/>
					</div>
				</div>
			</Section>

			<Marquee items={t.marquee} />

			<Section className="py-24">
				<div className="text-center mb-16">
					<h2 className="text-headline-lg font-display uppercase mb-4">
						{t.whatsKloudcore.heading}
					</h2>
					<p className="text-body-lg font-body max-w-2xl mx-auto opacity-70">
						{t.whatsKloudcore.subheading}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
					{t.whatsKloudcore.cards.map((card, index) => (
						<Card
							key={card.title}
							rotate={index === 1 ? '1' : index === 2 ? '-1' : undefined}
							className="p-8 flex flex-col gap-4"
						>
							<div className="h-1 bg-off-black dark:bg-paper-cream w-12" />
							<h3 className="text-headline-md font-display uppercase">{card.title}</h3>
							<p className="text-body-md font-body opacity-80">{card.description}</p>
						</Card>
					))}
				</div>
			</Section>

			<Section borderY className="py-24 bg-surface-container dark:bg-inverse-surface">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
					<Card className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
						<div>
							<span className="text-label-mono font-mono text-primary uppercase mb-4 block">
								{t.spotlight.eyebrow}
							</span>
							<h2 className="text-headline-lg font-display uppercase mb-6">
								{t.spotlight.heading}
							</h2>
							<p className="text-body-lg font-body max-w-lg">{t.spotlight.description}</p>
						</div>
						<div className="mt-12">
							<a
								href="https://tayo.kloudcore.com"
								target="_blank"
								rel="noreferrer"
								className={buttonClasses('dark')}
							>
								{t.spotlight.cta}
							</a>
						</div>
					</Card>
					<div className="md:col-span-5 flex flex-col gap-gutter">
						{t.spotlight.sideCards.map((card) => (
							<Card key={card.title} className="p-8 flex-1 bg-vintage-green text-white">
								<h4 className="text-headline-md font-display uppercase mb-2">{card.title}</h4>
								<p className="text-body-md font-body opacity-90">{card.description}</p>
							</Card>
						))}
					</div>
				</div>
			</Section>

			<Section className="py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
					<div className="space-y-4 animate-fade-in-left">
						<p>
							<strong className="text-2xl font-display">{t.about.welcome}</strong>
						</p>
						<p className="text-body-md font-body">{t.about.intro}</p>
						<p className="text-body-md font-body">{t.about.heroes}</p>
						<ul className="list-none space-y-1 ml-4 text-body-md font-body">
							{t.about.bullets.map((bullet) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
						<p className="text-body-md font-body">{t.about.magic}</p>
						<p>
							<strong className="text-primary font-display">{t.about.tagline}</strong>
						</p>
					</div>
					<Card className="p-6 h-fit animate-fade-in-right">
						<h3 className="text-headline-md font-display uppercase mb-4">
							{t.contactForm.heading}
						</h3>
						<form className="space-y-3">
							<Input type="email" placeholder={t.contactForm.email} />
							<Textarea placeholder={t.contactForm.message} />
							<button type="submit" className={buttonClasses('primary', 'w-full justify-center')}>
								{t.contactForm.send}
							</button>
						</form>
					</Card>
				</div>
			</Section>

			<Section className="py-24 text-center">
				<div className="relative max-w-3xl mx-auto border-2 border-off-black dark:border-paper-cream/70 bg-white dark:bg-inverse-surface p-12 brutalist-shadow-lg overflow-hidden">
					<div className="halftone-bg absolute inset-0" />
					<div className="relative z-10">
						<h2 className="text-headline-lg font-display uppercase mb-6">{t.cta.heading}</h2>
						<p className="text-body-lg font-body mb-10 opacity-70">{t.cta.subtitle}</p>
						<form className="flex flex-col sm:flex-row justify-center gap-4">
							<Input type="email" placeholder={t.cta.emailPlaceholder} className="sm:w-80" />
							<button type="submit" className={buttonClasses('primary')}>
								{t.cta.button}
							</button>
						</form>
					</div>
				</div>
			</Section>
		</>
	)
}
