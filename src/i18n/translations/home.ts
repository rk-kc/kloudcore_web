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
                "We design and build focused apps for the communities that need them — starting with Tayo, a shared digital media album for your next event.",
            ctaPrimary: 'Explore Tayo',
            ctaSecondary: 'See How It Works'
        },
        marquee: [
            'SCAN & JOIN VIA QR',
            'DAY-BY-DAY MEMORIES',
            'PHOTOS MAPPED BY MOMENT',
            'OPTIONAL APP DOWNLOAD',
			'WORKS IN WEB'
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
                    description: 'Photos organize themeselves by day automatically — no albums to manage.'
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
                'Kloudcore is an app studio dedicated to rebuilding human connection. We design and launch custom apps that empower communities to gather, organize, and support one another in meaningful ways.',
            heroes: 'Built to empower communities and meaningful connection:',
            bullets: [
                '👥 Connected Communities: Dedicated spaces for real-world groups to organize events and stay in touch.',
                '🤝 Human-Centered Tech: Intuitive, privacy-respecting apps that serve the community — not advertisers.',
                '✨ Made to Gather: Purpose-built features designed around togetherness, collaboration, and shared interests.'
            ],
            magic:
                'No bloated features. No platform noise. Just custom-built apps that help your community thrive.',
            tagline: 'Kloudcore. We’re on a mission to build a more connected world, one community app at a time.'
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
                '私たちは、必要としているコミュニティのために特化したアプリを設計・開発しています。第一弾は、イベントの思い出を共有できるアルバム「Tayo」です。',
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
                'Kloudcoreは、人々のつながりを再構築することを目指すアプリスタジオです。コミュニティが集まり、繋がり、支え合えるようなアプリをデザイン・開発しています。',
            heroes: '人と人とのつながりを深めるためのこだわり：',
            bullets: [
                '👥 つながるコミュニティ: リアルなグループがイベントを企画し、繋がり続けるための専用スペース。',
                '🤝 人を中心に考えたテクノロジー: 広告主のためではなく、コミュニティのために作られた直感的でプライバシーを尊重するアプリ。',
                '✨ 集まるためのデザイン: 共有体験、コラボレーション、共通の関心事を中心に設計された機能。'
            ],
            magic:
                '無駄な機能も、プラットフォームの騒音もありません。コミュニティが活気づくための専用アプリをお届けします。',
            tagline: 'Kloudcore。コミュニティアプリを通じて、よりつながりのある世界を目指します。'
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
