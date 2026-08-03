import type { Translations } from '../types'

interface ProductsCopy {
	hero: {
		badge: string
		title: string
		subtitle: string
	}
	flagship: {
		badge: string
		title: string
		description: string
		liveNow: string
		cta: string
		features: { title: string; description: string }[]
	}
	labSection: {
		heading: string
		label: string
		cardTitle: string
		cardDescription: string
		cardCta: string
	}
	cta: {
		heading: string
		subtitle: string
		button: string
	}
}

export const productsCopy: Translations<ProductsCopy> = {
	en: {
		hero: {
			badge: 'OUR ECOSYSTEM',
			title: 'OUR LINEUP',
			subtitle: 'We build focused apps for real communities — starting with Tayo.'
		},
		flagship: {
			badge: 'Flagship App',
			title: 'Tayo: Shared Memories, Simplified',
			description:
				"Tayo turns any trip, wedding, or gathering into one shared photo album. Scan a QR code, sign in with Google, and everyone's photos land together — organized by day, pinned on a map, and easy to relive.",
			liveNow: 'Live Now',
			cta: 'Explore Tayo',
			features: [
				{
					title: 'Instant QR Invites',
					description:
						"No app to install. Scan the ticket, sign in with Google, and you're sharing photos in seconds."
				},
				{
					title: 'Day-by-Day Memory Timeline',
					description: 'Every photo sorts itself into the day it was taken — no albums to manage.'
				},
				{
					title: 'Photos Mapped by Moment',
					description: 'Switch to map view and see exactly where every memory happened.'
				}
			]
		},
		labSection: {
			heading: 'IN THE LAB',
			label: "WHAT'S NEXT",
			cardTitle: 'Got an idea for the next Kloudcore app?',
			cardDescription:
				"We build apps around real communities — if you've got one in mind, we want to hear about it.",
			cardCta: 'Share Your Idea'
		},
		cta: {
			heading: 'HAVE AN IDEA WORTH BUILDING?',
			subtitle:
				"We prioritize new apps based on real community needs. Tell us what you're missing.",
			button: 'Pitch Your Idea'
		}
	},
	ja: {
		hero: {
			badge: '私たちのエコシステム',
			title: 'ラインナップ',
			subtitle: '私たちは実在するコミュニティのために特化したアプリを作ります。第一弾はTayoです。'
		},
		flagship: {
			badge: '主力アプリ',
			title: 'Tayo：思い出の共有を、シンプルに',
			description:
				'Tayoは旅行、結婚式、集まりをひとつの共有フォトアルバムに変えます。QRコードをスキャンしてGoogleでサインインするだけで、みんなの写真が一箇所に集まります。日ごとに整理され、地図にピンされ、簡単に振り返れます。',
			liveNow: '提供中',
			cta: 'Tayoを見る',
			features: [
				{
					title: '瞬時のQR招待',
					description: 'アプリのインストールは不要。チケットをスキャンしてGoogleでサインインすれば、数秒で写真を共有できます。'
				},
				{
					title: '日ごとの思い出タイムライン',
					description: 'すべての写真が撮影された日に自動で整理されます。アルバム管理は不要です。'
				},
				{
					title: '場所で見る写真',
					description: 'マップビューに切り替えれば、思い出が起きた場所が正確にわかります。'
				}
			]
		},
		labSection: {
			heading: '開発中',
			label: '次に来るもの',
			cardTitle: '次のKloudcoreアプリのアイデアはありますか？',
			cardDescription:
				'私たちは実在するコミュニティを中心にアプリを作ります。アイデアがあればぜひ教えてください。',
			cardCta: 'アイデアを共有する'
		},
		cta: {
			heading: '作る価値のあるアイデアはありますか？',
			subtitle: '実際のコミュニティのニーズに基づいて、新しいアプリの優先順位を決めています。足りないものを教えてください。',
			button: 'アイデアを提案する'
		}
	}
}
