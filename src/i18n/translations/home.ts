import type { Translations } from '../types'

interface HomeCopy {
	hero: {
		badge: string
		titleLine1: string
		titleLine2: string
		subtitle: string
		ctaPrimary: string
		ctaSecondary: string
	}
	marquee: string[]
	whatsKloudcore: {
		heading: string
		subheading: string
		cards: { title: string; description: string }[]
	}
	spotlight: {
		eyebrow: string
		heading: string
		description: string
		cta: string
		sideCards: { title: string; description: string }[]
	}
	about: {
		welcome: string
		intro: string
		heroes: string
		bullets: string[]
		magic: string
		tagline: string
	}
	contactForm: {
		heading: string
		email: string
		message: string
		send: string
	}
	cta: {
		heading: string
		subtitle: string
		emailPlaceholder: string
		button: string
	}
}

export const homeCopy: Translations<HomeCopy> = {
	en: {
		hero: {
			badge: 'APPS WITH A PERSONALITY',
			titleLine1: 'BUILD APPS.',
			titleLine2: 'SHARE MEMORIES.',
			subtitle:
				"We design and build focused apps for the communities that need them — starting with Tayo, a shared photo album for your next event.",
			ctaPrimary: 'Explore Tayo',
			ctaSecondary: 'See How It Works'
		},
		marquee: [
			'SCAN & JOIN VIA QR',
			'DAY-BY-DAY MEMORIES',
			'PHOTOS MAPPED BY MOMENT',
			'NO APP STORE NEEDED'
		],
		whatsKloudcore: {
			heading: "WHAT'S KLOUDCORE?",
			subheading:
				'We build focused apps for the people and communities who need them — not another feed to scroll.',
			cards: [
				{
					title: 'Purpose-Built Apps',
					description:
						"Every Kloudcore app is designed around one real community's actual needs — not a one-size-fits-all platform."
				},
				{
					title: 'Smart Automation',
					description:
						'We wire up the boring parts — workflows, backend plumbing, integrations — so the product just works.'
				},
				{
					title: 'AI, Demystified',
					description:
						'We use AI where it quietly helps — organizing, sorting, suggesting — never as a gimmick.'
				}
			]
		},
		spotlight: {
			eyebrow: 'FLAGSHIP APP',
			heading: 'MEET TAYO',
			description:
				"Tayo turns any trip, wedding, or get-together into a shared photo album. Scan a QR code, sign in with Google, and everyone's photos land in one place — organized by day, mapped by location.",
			cta: 'Visit Tayo',
			sideCards: [
				{
					title: 'Day-by-Day Timeline',
					description: 'Photos organize themselves by day automatically — no albums to manage.'
				},
				{
					title: 'Simple Google Sign-In',
					description: "No new password. Scan the QR, sign in with Google, you're in."
				}
			]
		},
		about: {
			welcome: '🌩 Welcome to Kloudcore',
			intro:
				"At Kloudcore, we take the meh out of managing your digital world. We're your friendly neighborhood techies on a mission to make cloud tools, automation, and AI work for you — not the other way around.",
			heroes: 'Think of us as the IT superheroes of the internet skies:',
			bullets: [
				'🛠️ Building smarter workflows',
				'📦 Wrangling backend chaos',
				'🤖 Whispering secrets to AI',
				'📈 Launching your ideas at lightning speed'
			],
			magic:
				'No jargon. No nonsense. Just smart, scalable, cloud-powered magic with a wink 😏 and a CLI keyboard shortcut.',
			tagline: 'Kloudcore. Tech, but make it fun.'
		},
		contactForm: {
			heading: 'Get in Touch!',
			email: 'Your email',
			message: 'Your message',
			send: 'Send Message 🚀'
		},
		cta: {
			heading: 'Ready to start sharing memories?',
			subtitle: "Get updates when we launch new Kloudcore apps.",
			emailPlaceholder: 'YOUR@EMAIL.COM',
			button: 'Get Updates'
		}
	},
	ja: {
		hero: {
			badge: '個性のあるアプリ',
			titleLine1: 'アプリを作り、',
			titleLine2: '思い出を共有する。',
			subtitle:
				'私たちは、必要としているコミュニティのために特化したアプリを設計・開発しています。第一弾は、イベントの思い出を共有できるフォトアルバム「Tayo」です。',
			ctaPrimary: 'Tayoを見る',
			ctaSecondary: '仕組みを見る'
		},
		marquee: [
			'QRコードでスキャン&参加',
			'日ごとの思い出',
			'場所で見る写真',
			'アプリストア不要'
		],
		whatsKloudcore: {
			heading: 'Kloudcoreとは？',
			subheading:
				'私たちは、それを必要とする人やコミュニティのために特化したアプリを作ります。ただのフィードではありません。',
			cards: [
				{
					title: '目的特化型アプリ',
					description:
						'Kloudcoreのアプリはそれぞれ、ひとつの実在するコミュニティの本当のニーズのために設計されています。万能プラットフォームではありません。'
				},
				{
					title: 'スマートな自動化',
					description:
						'ワークフローやバックエンドの配線、連携といった面倒な部分を私たちが整え、プロダクトがちゃんと動くようにします。'
				},
				{
					title: 'AIを、わかりやすく',
					description:
						'整理・分類・提案など、AIが静かに役立つ場面でだけ使います。ギミックとしては使いません。'
				}
			]
		},
		spotlight: {
			eyebrow: '主力アプリ',
			heading: 'Tayoを紹介します',
			description:
				'Tayoは旅行、結婚式、集まりを共有フォトアルバムに変えます。QRコードをスキャンしてGoogleでサインインするだけで、みんなの写真が一箇所に集まります。日ごとに整理され、場所ごとにマッピングされます。',
			cta: 'Tayoへ行く',
			sideCards: [
				{
					title: '日ごとのタイムライン',
					description: '写真は自動的に日ごとに整理されます。アルバムを管理する必要はありません。'
				},
				{
					title: 'かんたんGoogleサインイン',
					description: '新しいパスワードは不要。QRをスキャンしてGoogleでサインインするだけ。'
				}
			]
		},
		about: {
			welcome: '🌩 Kloudcoreへようこそ',
			intro:
				'Kloudcoreでは、デジタル世界の管理から「つまらなさ」を取り除きます。私たちは、クラウドツール、自動化、AIがあなたのために働くようにする、親しみやすい近所の技術者です。',
			heroes: '私たちをインターネット空のITスーパーヒーローと考えてください：',
			bullets: [
				'🛠️ よりスマートなワークフローの構築',
				'📦 バックエンドの混乱を整理',
				'🤖 AIに秘密をささやく',
				'📈 ライトニングスピードでアイデアを立ち上げ'
			],
			magic:
				'専門用語なし。ナンセンスなし。ウィンク😏とCLIキーボードショートカットを使った、スマートでスケーラブルなクラウドパワードマジック。',
			tagline: 'Kloudcore。技術を楽しくする。'
		},
		contactForm: {
			heading: 'お問い合わせ！',
			email: 'メールアドレス',
			message: 'メッセージ',
			send: 'メッセージを送信 🚀'
		},
		cta: {
			heading: '思い出の共有を始めませんか？',
			subtitle: '新しいKloudcoreアプリが公開されたらお知らせします。',
			emailPlaceholder: 'メールアドレス',
			button: '更新を受け取る'
		}
	}
}
