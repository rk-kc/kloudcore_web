import { memo } from 'react'

interface App {
	id: string
	name: string
	logo: string
	description: string
	url: string
}

interface AppTranslations {
	en: App
	ja?: App
}

interface AppsProps {
	onClose: () => void
	isJapanese?: boolean | undefined
}

const apps: AppTranslations[] = [
	{
		en: {
			id: '1',
			name: 'Budget Boss',
			logo: '/budgetboss_logo.png',
			description:
				'Take control of your finances with smart budgeting tools and expense tracking.',
			url: 'https://budgetboss.kloudcore.com'
		},
		ja: {
			id: '1',
			name: 'Budget Boss',
			logo: '/budgetboss_logo.png',
			description:
				'あなたの金融のためのスマートな予算管理と支出の追跡を行うことができます。',
			url: 'https://budgetboss.kloudcore.com'
		}
	}
]

export const OurApps = memo(({ onClose, isJapanese }: AppsProps) => {
	return (
		<div className="w-full max-w-4xl max-h-[calc(100vh-100px)] md:h-[70vh] px-4 sm:px-0 text-gray-800 dark:text-gray-200 animate-slide-up">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
					{isJapanese ? '私たちのアプリ' : 'Our Apps'}
				</h1>
				<button
					className="text-xl sm:text-2xl hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-200 hover:rotate-90"
					onClick={onClose}
				>
					×
				</button>
			</div>

			<div className="flex justify-center pb-16">
				{apps.map((appTranslation) => {
					const app =
						isJapanese && appTranslation.ja
							? appTranslation.ja
							: appTranslation.en
					return (
						<div
							key={app.id}
							className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 max-w-sm"
						>
							<div className="flex flex-col items-center text-center space-y-4">
								<img
									src={app.logo}
									alt={`${app.name} Logo`}
									className="w-16 h-16 rounded-lg object-cover"
								/>
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
									{app.name}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
									{app.description}
								</p>
								<button
									onClick={() => window.open(app.url, '_blank')}
									className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-200"
								>
									{isJapanese ? 'アプリへ移動' : 'Go to App'}
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
})
