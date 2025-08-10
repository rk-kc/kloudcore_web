import { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { OurApps } from './components/OurApps'

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem('darkMode') === 'true'
	})

	const [contentOpen, setContentOpen] = useState(false)
	const [appsOpen, setAppsOpen] = useState(false)
	const [isJapanese, setIsJapanese] = useState(false)

	const handleLogoClick = (e: React.MouseEvent) => {
		e.preventDefault()
		setContentOpen(true)
	}

	const handleCloseClick = (e: React.MouseEvent) => {
		e.preventDefault()
		setContentOpen(false)
	}

	const toggleDarkMode = () => setDarkMode(!darkMode)

	const toggleLanguage = () => setIsJapanese(!isJapanese)

	const content = {
		en: {
			welcome: '🌩 Welcome to Kloudcore',
			intro:
				"At Kloudcore, we take the meh out of managing your digital world. We're your friendly neighborhood techies on a mission to make cloud tools, automation, and AI work for you — not the other way around.",
			heroes: 'Think of us as the IT superheroes of the internet skies:',
			workflows: '🛠️ Building smarter workflows',
			backend: '📦 Wrangling backend chaos',
			ai: '🤖 Whispering secrets to AI',
			speed: '📈 Launching your ideas at lightning speed',
			magic:
				'No jargon. No nonsense. Just smart, scalable, cloud-powered magic with a wink 😏 and a CLI keyboard shortcut.',
			tagline: 'Kloudcore. Tech, but make it fun.',
			contact: 'Get in Touch!',
			email: 'Your email',
			message: 'Your message',
			send: 'Send Message 🚀',
			aboutus: 'About Us',
			ourapps: 'Our Apps'
		},
		ja: {
			welcome: '🌩 Kloudcoreへようこそ',
			intro:
				'Kloudcoreでは、デジタル世界の管理から「つまらなさ」を取り除きます。私たちは、クラウドツール、自動化、AIがあなたのために働くようにする、親しみやすい近所の技術者です。',
			heroes: '私たちをインターネット空のITスーパーヒーローと考えてください：',
			workflows: '🛠️ よりスマートなワークフローの構築',
			backend: '📦 バックエンドの混乱を整理',
			ai: '🤖 AIに秘密をささやく',
			speed: '📈ライトニングスピードでアイデアを立ち上げ',
			magic:
				'専門用語なし。ナンセンスなし。ウィンク😏とCLIキーボードショートカットを使った、スマートでスケーラブルなクラウドパワードマジック。',
			tagline: 'Kloudcore。技術を楽しくする。',
			contact: 'お問い合わせ！',
			email: 'メールアドレス',
			message: 'メッセージ',
			send: 'メッセージを送信 🚀',
			aboutus: '私たちについて',
			ourapps: '私たちのアプリ'
		}
	}

	const t = isJapanese ? content.ja : content.en

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('darkMode', darkMode.toString())
	}, [darkMode])

	return (
		<div className="min-h-screen bg-white dark:bg-[#000000] flex flex-col md:overflow-hidden">
			<div className="flex-1 flex items-center justify-center sm:p-8 md:p-0">
				{!contentOpen && !appsOpen && (
					<div className="relative group">
						<div className="cursor-pointer animate-bounce-slow">
							<img
								src={darkMode ? 'logo-dark.gif' : 'logo.gif'}
								alt="Kloudcore Logo"
								className="max-w-xs transition-all duration-500 hover:scale-110 hover:rotate-12 rounded-lg will-change-transform"
							/>

							{/* Hover Menu - Left and Right */}
							<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
								{/* Invisible hover bridge - Left */}
								<div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-20 -mr-16"></div>

								{/* About Us - Left Side */}
								<div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-16">
									<div className="relative">
										<button
											className="cloud-menu shadow-xl hover:shadow-2xl transition-shadow duration-200"
											onClick={handleLogoClick}
										>
											<div className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 text-lg">
												{t.aboutus}
											</div>
										</button>
									</div>
								</div>

								{/* Invisible hover bridge - Right */}
								<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-20 -ml-16"></div>

								{/* Apps - Right Side */}
								<div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-16">
									<div className="relative">
										<button
											className="cloud-menu shadow-xl hover:shadow-2xl transition-shadow duration-200"
											onClick={() => setAppsOpen(true)}
										>
											<div className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 text-lg">
												{t.ourapps}
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{contentOpen && (
					<div className="w-full max-w-4xl max-h-[calc(100vh-100px)] md:h-[70vh] px-4 sm:px-0 text-gray-800 dark:text-gray-200 animate-slide-up">
						<div className="flex justify-between items-center mb-4">
							<button
								className="text-xl sm:text-2xl hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-200 hover:rotate-90"
								onClick={handleCloseClick}
							>
								×
							</button>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 pb-16 md:pb-4">
							<div className="space-y-4 animate-fade-in-left">
								<p>
									🌩 <strong className="text-2xl">{t.welcome}</strong>
								</p>

								<p>{t.intro}</p>

								<p>{t.heroes}</p>
								<ul className="list-none space-y-1 ml-4">
									<li>{t.workflows}</li>
									<li>{t.backend}</li>
									<li>{t.ai}</li>
									<li>{t.speed}</li>
								</ul>

								<p>{t.magic}</p>

								<p>
									<strong className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
										{t.tagline}
									</strong>
								</p>
							</div>

							<div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg h-fit animate-fade-in-right">
								<h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
									{t.contact}
								</h3>
								<form className="space-y-3">
									<input
										type="email"
										placeholder={t.email}
										className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
									/>
									<textarea
										placeholder={t.message}
										rows={4}
										className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
									/>
									<button
										type="submit"
										className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-200"
									>
										{t.send}
									</button>
								</form>
							</div>
						</div>
					</div>
				)}

				{appsOpen && (
					<OurApps onClose={() => setAppsOpen(false)} isJapanese={isJapanese} />
				)}
			</div>

			<Footer
				darkMode={darkMode}
				onToggleDarkMode={toggleDarkMode}
				isJapanese={isJapanese}
				onToggleLanguage={toggleLanguage}
			/>
		</div>
	)
}

export default App
