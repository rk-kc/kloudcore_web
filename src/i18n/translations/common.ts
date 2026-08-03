import type { Translations } from '../types'

interface CommonCopy {
	nav: {
		home: string
		communities: string
		features: string
		products: string
		login: string
		joinUs: string
	}
	footer: {
		tagline: string
		copyrightSuffix: string
		legal: {
			privacy: string
			terms: string
			helpCenter: string
		}
		columns: {
			company: string
			platform: string
			contact: string
		}
		contactEmail: string
	}
}

export const commonCopy: Translations<CommonCopy> = {
	en: {
		nav: {
			home: 'Home',
			communities: 'Communities',
			features: 'Features',
			products: 'Products',
			login: 'Login',
			joinUs: 'Join Us'
		},
		footer: {
			tagline: 'Kloudcore. Tech, but make it fun.',
			copyrightSuffix: 'KLOUDCORE. BUILDING APPS. SHARING MEMORIES.',
			legal: {
				privacy: 'Privacy Policy',
				terms: 'Terms of Service',
				helpCenter: 'Help Center'
			},
			columns: {
				company: 'Company',
				platform: 'Platform',
				contact: 'Contact'
			},
			contactEmail: 'hello@kloudcore.com'
		}
	},
	ja: {
		nav: {
			home: 'ホーム',
			communities: 'コミュニティ',
			features: '特徴',
			products: 'プロダクト',
			login: 'ログイン',
			joinUs: '参加する'
		},
		footer: {
			tagline: 'Kloudcore。技術を楽しくする。',
			copyrightSuffix: 'KLOUDCORE。アプリを作り、思い出を共有する。',
			legal: {
				privacy: 'プライバシーポリシー',
				terms: '利用規約',
				helpCenter: 'ヘルプセンター'
			},
			columns: {
				company: '会社',
				platform: 'プラットフォーム',
				contact: 'お問い合わせ'
			},
			contactEmail: 'hello@kloudcore.com'
		}
	}
}
