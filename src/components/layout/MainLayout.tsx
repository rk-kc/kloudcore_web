import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { MarketingFooter } from './MarketingFooter'

export function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-background dark:bg-off-black text-on-background dark:text-inverse-on-surface font-body selection:bg-retro-yellow selection:text-off-black">
			<Nav />
			<main className="flex-1">
				<Outlet />
			</main>
			<MarketingFooter />
		</div>
	)
}
