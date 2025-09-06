

export default function AboutPage() {
	return (
			<div className="container mx-auto p-8 section bg-sand rounded-lg shadow">
				<div className="flex flex-col items-center gap-8">
				<img src="/about.jpg" alt="About Florian" className="w-full max-w-2xl h-[40rem] object-cover object-top rounded-lg shadow mb-8 mt-8" />
					<h1 className="text-4xl font-heading font-bold mb-4">About</h1>
					<div className="text-lg text-ink space-y-4 max-w-2xl">
						<p>Hi, I’m Flo.</p>
						<p>At my core, I’m someone who loves to grow, connect, and share. Whether it’s through my podcast, retreats, creative projects, or simply the conversations I have with people, my deepest motivation is to support others on their journey—helping them feel seen, inspired, and more connected to themselves and those around them.</p>
						<p>What drives me is the belief that growth doesn’t have to be lonely, and that when we show up with openness and vulnerability, we create spaces where real transformation can happen. Following my heart has led me onto a path that isn’t always the easiest or most secure, but it’s the one that feels true.</p>
						<p>That’s where your support on Buy Me a Coffee can make a real difference. Every contribution is more than just a coffee—it’s a small but powerful investment that helps me keep going, creating, and sharing freely. It allows me to dedicate time and energy to building something I love, something that hopefully brings value, connection, and inspiration into your life too.</p>
						<p>If my work resonates with you and you’d like to be part of this journey, your support means the world to me. Together, we’re not just fueling my projects—we’re fueling a vision of more connection, kindness, and growth.</p>
					</div>
				</div>
			</div>
	);
}
