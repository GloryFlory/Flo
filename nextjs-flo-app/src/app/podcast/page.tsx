

"use client";
import { useEffect, useState } from 'react';
import EpisodeCard from '../../components/EpisodeCard';
import { fetchPodcastEpisodes } from '../../lib/parseRss';


const ABOUT = `Grow with the Flo is your space for open, honest, and real conversations about life. Hosted by Flo, this podcast explores what it truly means to grow, connect, and learn in a world that often prioritizes filters over authenticity.\n\nThrough solo reflections, insightful interviews and deep dives into themes like personal growth, anxiety, and building meaningful connections, Grow with the Flo invites you to embrace your own truth unapologetically.\n\nWhether you're seeking inspiration, a fresh mindset or a moment of connection, this podcast is here to grow with you.`;

const RSS_URL = 'https://anchor.fm/s/100089160/podcast/rss';

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [showCount, setShowCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [podcastImage, setPodcastImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchPodcastEpisodes(RSS_URL).then(eps => {
      if (typeof window !== 'undefined') {
        console.log('Full episode data:', eps);
      }
      setEpisodes(eps);
      // Find the first non-empty image as podcast-level fallback
      const fallback = eps.find(e => e.image)?.image;
      setPodcastImage(fallback);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Podcast Header */}
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-brand to-accent rounded-3xl shadow-lg py-12 px-4 mb-12 overflow-hidden">
        <img
          src="/podcast-logo.png"
          alt="Podcast Logo"
          className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-2xl border-4 border-white shadow-xl mb-6 bg-white"
        />
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white drop-shadow mb-4 text-center">Grow with the Flo</h1>
        <p className="whitespace-pre-line text-lg md:text-xl text-sand text-center max-w-2xl mx-auto mb-2 drop-shadow">
          {ABOUT}
        </p>
      </div>
      {/* Episode List */}
      <div className="flex flex-col gap-6">
        {loading && <div className="text-center text-ink">Loading episodes...</div>}
        {!loading && episodes.length === 0 && <div className="text-center text-ink">No episodes found.</div>}
        {episodes.slice(0, showCount).map((ep, i) => (
          <EpisodeCard
            key={ep.link}
            title={ep.title}
            blurb={ep.description}
            link={ep.link}
            coverUrl={ep.image || podcastImage}
          />
        ))}
        {episodes.length > showCount && (
          <button className="btn btn-ghost mx-auto mt-4" onClick={() => setShowCount(showCount + 5)}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
