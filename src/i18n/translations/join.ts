import type { Translations } from '../types'

interface JoinCopy {
	badge: string
	title: string
	subtitle: string
	form: {
		name: string
		email: string
		submit: string
	}
	tayoNote: string
	sticker: string
	collageBadge: string
}

export const joinCopy: Translations<JoinCopy> = {
	en: {
		badge: 'MEMBER REGISTRATION',
		title: 'JOIN THE MOVEMENT',
		subtitle: 'Get updates from Kloudcore and be first to hear about new apps.',
		form: {
			name: 'Your name',
			email: 'Your email',
			submit: 'START SHARING'
		},
		tayoNote: 'Already using Tayo? Go to tayo.kloudcore.com',
		sticker: 'REAL PHOTOS. REAL MOMENTS.',
		collageBadge: 'SHARING MEMORIES'
	},
	ja: {
		badge: '会員登録',
		title: 'ムーブメントに参加しよう',
		subtitle: 'Kloudcoreからの最新情報を受け取り、新しいアプリをいち早くチェックしましょう。',
		form: {
			name: 'お名前',
			email: 'メールアドレス',
			submit: '共有をはじめる'
		},
		tayoNote: 'すでにTayoをお使いですか？ tayo.kloudcore.com へ',
		sticker: 'リアルな写真。リアルな瞬間。',
		collageBadge: '思い出を共有する'
	}
}
