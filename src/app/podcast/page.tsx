'use client';

import { useState, useEffect, useMemo } from 'react';
import { PodcastEpisode } from '../../../lib/podcast';
import PodcastEpisodeCard from '../../../components/PodcastEpisodeCard';
import SearchBar from '../../../components/SearchBar';

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('/api/podcast-episodes');
        if (response.ok) {
          const data = await response.json();
          if (data.episodes && data.episodes.length > 0) {
            setEpisodes(data.episodes);
          }
        }
      } catch (error) {
        console.error('Failed to fetch episodes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  // Filter episodes based on search query
  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return episodes;
    
    const query = searchQuery.toLowerCase();
    return episodes.filter(episode => 
      episode.title.toLowerCase().includes(query) ||
      episode.description.toLowerCase().includes(query)
    );
  }, [episodes, searchQuery]);

  const latestEpisode = episodes[0];

  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Podcast Header with Logo and Description */}
          <div className="mb-12 sm:mb-16">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8 sm:mb-12 text-center text-ink">
              Grow with the Flo
            </h1>
            
            {/* Logo and Description - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src="/podcast-logo.png"
                  alt="Grow with the Flo Podcast"
                  className="w-64 sm:w-72 lg:w-80 h-auto shadow-xl rounded-2xl"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <p className="text-base sm:text-lg lg:text-xl text-ink/80 leading-relaxed">
                  Grow with the Flo is your space for open, honest, and real conversations about life. Hosted by Flo, this podcast explores what it truly means to grow, connect, and learn in a world that often prioritizes filters over authenticity.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-ink/70 leading-relaxed">
                  Through solo reflections, insightful interviews and deep dives into themes like personal growth, anxiety, and building meaningful connections, Grow with the Flo invites you to embrace your own truth unapologetically.
                </p>
                
                {/* Platform Links - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <a
                    href="https://open.spotify.com/show/3vRG8eplIkpnBBAUPpih2N"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white border-2 border-gray-200 text-gray-800 p-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                  >
                    <img src="/spotify-icon.png" alt="Spotify" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="ml-3 font-medium text-sm sm:text-base">Listen on Spotify</span>
                  </a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/grow-with-the-flo/id1795716394"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white border-2 border-gray-200 text-gray-800 p-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                  >
                    <img src="/apple-icon.png" alt="Apple Podcasts" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="ml-3 font-medium text-sm sm:text-base">Listen on Apple</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search episodes by title or description..."
          />
          
          {/* All Episodes */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-8 sm:mb-12 text-center text-ink">
            {searchQuery ? `Search Results (${filteredEpisodes.length})` : 'All Episodes'}
          </h2>
          
          {loading ? (
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredEpisodes.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-ink mb-2">
                {searchQuery ? 'No episodes found' : 'No episodes available'}
              </h3>
              <p className="text-ink/60">
                {searchQuery ? 'Try adjusting your search terms.' : 'Episodes will appear here once they are published.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEpisodes.map((episode, index) => (
                <PodcastEpisodeCard 
                  key={episode.slug} 
                  episode={episode} 
                  isFeatured={index === 0 && !searchQuery}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
