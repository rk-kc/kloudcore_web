import { useLanguage } from '../i18n/useLanguage'
import { joinCopy } from '../i18n/translations/join'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'
import { IllustrationPlaceholder } from '../components/ui/IllustrationPlaceholder'
import { buttonClasses } from '../components/ui/buttonClasses'

export function JoinPage() {
	const { locale } = useLanguage()
	const t = joinCopy[locale]

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
			<div className="flex items-center justify-center px-margin-sm md:px-margin-lg py-16">
				<div className="w-full max-w-md space-y-6">
					<Badge className="bg-retro-yellow inline-block text-black">{t.badge}</Badge>
					<h1 className="text-headline-lg font-display uppercase text-off-black dark:text-paper-cream">
						{t.title}
					</h1>
					<p className="text-body-lg font-body opacity-80">{t.subtitle}</p>
					<form className="space-y-4">
						<Input placeholder={t.form.name} name="name" />
						<Input type="email" placeholder={t.form.email} name="email" />
						<button type="submit" className={buttonClasses('accent', 'w-full justify-center text-xl')}>
							{t.form.submit}
						</button>
					</form>
					<p className="text-label-mono font-mono opacity-60">{t.tayoNote}</p>
				</div>
			</div>
			<div className="relative hidden lg:block bg-vintage-green/10 border-l-2 border-off-black dark:border-paper-cream/70 p-margin-lg">
				<div className="grid grid-cols-2 gap-gutter h-full">
					<IllustrationPlaceholder variant="secondary" className="rounded-xl" />
					<IllustrationPlaceholder variant="primary" className="rounded-xl mt-12" />
				</div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-inverse-surface border-2 border-off-black dark:border-paper-cream/70 brutalist-shadow-lg px-6 py-4 -rotate-3">
					<span className="text-button font-display uppercase text-off-black dark:text-paper-cream">
						{t.collageBadge}
					</span>
				</div>
				<div className="absolute bottom-margin-lg right-margin-lg bg-retro-yellow border-2 border-off-black brutalist-shadow px-4 py-2 rotate-2">
					<span className="text-label-mono font-mono uppercase text-off-black">{t.sticker}</span>
				</div>
			</div>
		</div>
	)
}
