import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { commonCopy } from '../../i18n/translations/common'
import { useLanguage } from '../../i18n/useLanguage'
import { buttonClasses } from '../ui/buttonClasses'

function navLinkClasses({ isActive }: { isActive: boolean }) {
	const state = isActive
		? 'border-b-4 border-retro-yellow pb-1'
		: 'opacity-80 hover:opacity-100'
	return `text-button font-display uppercase text-off-black dark:text-paper-cream transition-transform hover:-translate-y-0.5 ${state}`
}

function mobileNavLinkClasses({ isActive }: { isActive: boolean }) {
	const state = isActive ? 'text-primary' : 'text-off-black dark:text-paper-cream opacity-80'
	return `text-headline-md font-display uppercase ${state}`
}

export function Nav() {
	const { locale } = useLanguage()
	const t = commonCopy[locale].nav
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className="bg-background dark:bg-off-black border-b-2 border-off-black dark:border-paper-cream/70 sticky top-0 z-40">
			<div className="flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-20 max-w-[1280px] mx-auto">
				<Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
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
					<div className="hidden sm:block">
						<Link to="/join" className={buttonClasses('accent', 'px-6 py-2 text-sm')}>
							{t.joinUs}
						</Link>
					</div>
					<button
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						className="md:hidden border-2 border-off-black dark:border-paper-cream/70 p-2 text-off-black dark:text-paper-cream"
					>
						{menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
					</button>
				</div>
			</div>
			{menuOpen && (
				<div className="md:hidden border-t-2 border-off-black dark:border-paper-cream/70 bg-background dark:bg-off-black px-margin-sm py-6 flex flex-col gap-5">
					<NavLink to="/" end className={mobileNavLinkClasses} onClick={() => setMenuOpen(false)}>
						{t.home}
					</NavLink>
					<NavLink
						to="/communities"
						className={mobileNavLinkClasses}
						onClick={() => setMenuOpen(false)}
					>
						{t.communities}
					</NavLink>
					<NavLink
						to="/how-it-works"
						className={mobileNavLinkClasses}
						onClick={() => setMenuOpen(false)}
					>
						{t.features}
					</NavLink>
					<NavLink
						to="/products"
						className={mobileNavLinkClasses}
						onClick={() => setMenuOpen(false)}
					>
						{t.products}
					</NavLink>
					<div className="sm:hidden">
						<Link
							to="/join"
							className={buttonClasses('accent', 'w-full justify-center mt-2')}
							onClick={() => setMenuOpen(false)}
						>
							{t.joinUs}
						</Link>
					</div>
				</div>
			)}
		</nav>
	)
}
