import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/ui/Section'
import { buttonClasses } from '../components/ui/buttonClasses'

export function NotFoundPage() {
	const { locale } = useLanguage()

	return (
		<Section halftone className="py-32 text-center">
			<h1 className="text-display-lg font-display uppercase text-off-black dark:text-paper-cream mb-4">
				404
			</h1>
			<p className="text-body-lg font-body opacity-80 mb-10">
				{locale === 'ja' ? 'ページが見つかりません。' : "This page doesn't exist."}
			</p>
			<Link to="/" className={buttonClasses('primary')}>
				{locale === 'ja' ? 'ホームへ戻る' : 'Back to Home'}
			</Link>
		</Section>
	)
}
