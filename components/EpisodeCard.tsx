import React from "react";

type EpisodeCardProps = {
	title: string;
	blurb: string;
	href: string;
	date: string;
};

export default function EpisodeCard({ title, blurb, href, date }: EpisodeCardProps) {
	return (
		<a href={href} className="block bg-white rounded-2xl shadow p-6 hover:brightness-95">
			<h2 className="font-semibold text-lg">{title}</h2>
			<p className="mt-2 text-black/80">{blurb}</p>
			<span className="mt-4 block text-xs text-black/50">{date}</span>
		</a>
	);
}
