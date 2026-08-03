interface MarqueeProps {
	items: string[]
}

export function Marquee({ items }: MarqueeProps) {
	const looped = [...items, ...items]
	return (
		<div className="bg-off-black dark:bg-paper-cream py-4 border-y-2 border-off-black dark:border-paper-cream/70 overflow-hidden flex whitespace-nowrap">
			<div className="flex animate-infinite-scroll gap-12 items-center" style={{ animationDuration: '30s' }}>
				{looped.map((item, index) => (
					<span
						key={index}
						className="text-paper-cream dark:text-off-black font-mono text-label-mono flex items-center gap-2"
					>
						<span className="text-retro-yellow">★</span> {item}
					</span>
				))}
			</div>
		</div>
	)
}
