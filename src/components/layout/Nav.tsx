import { Link, NavLink } from 'react-router-dom'
import { commonCopy } from '../../i18n/translations/common'
import { useLanguage } from '../../i18n/useLanguage'
import { buttonClasses } from '../ui/buttonClasses'

function navLinkClasses({ isActive }: { isActive: boolean }) {
	const state = isActive
		? 'border-b-4 border-retro-yellow pb-1'
		: 'opacity-80 hover:opacity-100'
	return `text-button font-display uppercase text-off-black dark:text-paper-cream transition-transform hover:-translate-y-0.5 ${state}`
}

export function Nav() {
	const { locale } = useLanguage()
	const t = commonCopy[locale].nav

	return (
		<nav className="bg-background dark:bg-off-black border-b-2 border-off-black dark:border-paper-cream/70 sticky top-0 z-40">
			<div className="flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-20 max-w-[1280px] mx-auto">
				<Link to="/" className="flex items-center gap-3">
					<img src="/kloudcore_new_logo.png" alt="Kloudcore" className="h-9 w-9" />
					<span className="text-headline-md font-display font-extrabold text-off-black dark:text-paper-cream tracking-tight">
						KLOUDCORE
					</span>
				</Link>
				<div className="hidden md:flex gap-6 items-center">
					<NavLink to="/" end className={navLinkClasses}>
						{t.home}
					</NavLink>
					<NavLink to="/communities" className={navLinkClasses}>
						{t.communities}
					</NavLink>
					<NavLink to="/how-it-works" className={navLinkClasses}>
						{t.features}
					</NavLink>
					<NavLink to="/products" className={navLinkClasses}>
						{t.products}
					</NavLink>
				</div>
				<div className="flex items-center gap-4">
					{/* <span className="hidden sm:block text-button font-display uppercase text-off-black dark:text-paper-cream opacity-60">
						{t.login}
					</span> */}
					<Link to="/join" className={buttonClasses('accent', 'px-6 py-2 text-sm')}>
						{t.joinUs}
					</Link>
				</div>
			</div>
		</nav>
	)
}
