'use client';

import { useState } from 'react';
import EpisodeCard from '../../components/EpisodeCard';

const allEpisodes = [
  {
    title: 'Episode 13: Overthinking Is Secretly Protecting You (But From What?)',
    blurb: 'Overthinking often feels safe—like a waiting room where nothing bad happens, but nothing moves forward either. Flo shares how to reframe overthinking as a signal—not an enemy.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-13-Overthinking-Is-Secretly-Protecting-You-But-From-What-e37mrgv',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg',
  },
  {
    title: 'Episode 12: Loneliness - A Curse or a Teacher?',
    blurb: 'Dark Forest Mini-Series, Part IV. Loneliness is one of the hardest feelings to sit with—but what if it\'s pointing us toward something essential? Exploring how loneliness can guide us back to belonging.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-12-Loneliness---A-Curse-or-a-Teacher-e370b5t',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1755524745681-c55487d006d71.jpg',
  },
  {
    title: 'Episode 11: When Life Lines Up - Flow & Synchronicity',
    blurb: 'Dark Forest Mini-Series, Part III. Have you ever felt like everything just… lined up? From chance encounters to uncanny timing, exploring the science and mystery of flow and synchronicity.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-11-When-Life-Lines-Up---Flow--Synchronicity-e370a5f',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1755524027208-26a3ceefb5f39.jpg',
  },
  {
    title: 'Episode 10: Can Growth be Gentle?',
    blurb: 'Dark Forest Mini-Series, Part II. We often think growth has to be hard—discipline, hustle, pushing past limits. But can growth also be soft, kind, and gentle? Exploring what it means to grow without force.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-10-Can-Growth-be-Gentle-e370b3v',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1755524646400-53fc0a42098ec.jpg',
  },
  {
    title: 'Episode 9: The Gift in Discomfort',
    blurb: 'Dark Forest Mini-Series, Part I. This year has tested me more than any before. Exploring how discomfort, as painful as it is, can be one of life\'s greatest teachers.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-9-The-Gift-in-Discomfort-e36ubr9',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1755368881668-5906b1a2f5769.jpg',
  },
  {
    title: 'Episode 8: When You\'re No Longer Who You Used to Be',
    blurb: 'Who remains when you peel off the layers of your personality? Big life events can leave you feeling lost. Diving into identity crisis, reconstructing it, and the impact on mental health.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-8-When-Youre-No-Longer-Who-You-Used-to-Be-e36kdct',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1755179045739-9764064f80cb9.jpg',
  },
  {
    title: 'Episode 7: How to Find Purpose When You Feel Lost',
    blurb: 'I never felt more lost in my life than this year. The most important thing? Kindness. Be kind to yourself—that\'s the only way to start on a journey like this. Tools to build purpose together.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-7-How-to-Find-Purpose-When-You-Feel-Lost-e36iojr',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg',
  },
  {
    title: 'Episode 6: Why My Calendar Made Me Anxious – and What I\'m Doing Instead',
    blurb: 'I thought my calendar could become a tool to help, but instead it became a source of stress, anxiety and doubt. Learn about this struggle and what I\'m doing to correct this.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-6-Why-My-Calendar-Made-Me-Anxious--and-What-Im-Doing-Instead-e36ii1t',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg',
  },
  {
    title: 'Episode 5: Two Steps forward, One Step Back',
    blurb: 'After 3 months travelling through South East Asia, I came back full of ambition—but my body had different plans. Learning to deal with setbacks and being forced to slow down.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-5-Two-Steps-forward--One-Step-Back-e3512sf',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg',
  },
  {
    title: 'Episode 4: The Return to Bali - Where it all started',
    blurb: '2 years after I first landed in Bali to face my anxiety, I find myself on this mystical island again. Coming back to the same place has never felt so special—especially realizing I\'m no longer the same.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-4-The-Return-to-Bali---Where-it-all-started-e34j0nl',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1750611518226-f133f72c6a32e.jpg',
  },
  {
    title: 'Episode 3: The Paradox About Growth',
    blurb: 'Exploring the paradox of growth—how our focus on future achievements can overshadow the joy of the present. Sharing my experience and ongoing doubts about future projects.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-3---The-Paradox-About-Growth-e2v9q7o',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1740386662324-322304a77c75.jpg',
  },
  {
    title: 'Episode 2: Managing Toilet Anxiety. The Tools That Help Me Cope.',
    blurb: 'Toilet anxiety can feel overwhelming, but over time, I\'ve found ways to handle it. Sharing strategies, mindset shifts, and practical tools that have helped me regain control.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-2-Managing-Toilet-Anxiety--The-Tools-That-Help-Me-Cope-e2udago',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/42855288/42855288-1738671917864-037dea87e6f8.jpg',
  },
  {
    title: 'Episode 1: What is Toilet Anxiety?',
    blurb: 'In this very first episode, diving into my experience with toilet anxiety, explaining what it is and how it\'s affected my life. Including the story of my panic attack in New York City.',
    link: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-1-What-is-Toilet-Anxiety--An-Insight-into-my-Experience-with-Anxiety-and-the-Story-about-my-Panic-Attack-in-New-York-City-e2tvf4f',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg',
  },
];

export default function PodcastPage() {
  const [showMore, setShowMore] = useState(false);
  const initialEpisodes = 5;
  const displayedEpisodes = showMore ? allEpisodes : allEpisodes.slice(0, initialEpisodes);

  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Podcast Header with Logo and Description */}
          <div className="mb-16">
            {/* Title */}
            <h1 className="text-6xl font-heading font-bold mb-12 text-center text-ink">
              Grow with the Flo
            </h1>
            
            {/* Logo and Description Side by Side */}
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="flex justify-center">
                <img
                  src="/podcast-logo.png"
                  alt="Grow with the Flo Podcast"
                  className="w-64 h-auto shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-ink/80 leading-relaxed">
                  Grow with the Flo is your space for open, honest, and real conversations about life. Hosted by Flo, this podcast explores what it truly means to grow, connect, and learn in a world that often prioritizes filters over authenticity.
                </p>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Through solo reflections, insightful interviews and deep dives into themes like personal growth, anxiety, and building meaningful connections, Grow with the Flo invites you to embrace your own truth unapologetically.
                </p>
              </div>
            </div>
          </div>
          
          {/* Featured Episode */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center text-ink">
              Latest Episode
            </h2>
            <div className="bg-gradient-to-br from-brand/10 to-accent/10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4 text-ink">
                Episode 13: Overthinking Is Secretly Protecting You (But From What?)
              </h3>
              <p className="text-ink/80 mb-6">
                Overthinking often feels safe—like a waiting room where nothing bad happens, but nothing moves forward either. In this episode, Flo shares how overthinking has shown up in his own life, why our brains get stuck in loops, and how comparison and guilt keep us paralyzed.
              </p>
              <div className="bg-white/80 rounded-lg p-6 mb-4">
                <p className="text-ink/60 italic">
                  🎧 Duration: 17:44 | Published: Sept 4, 2025
                </p>
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Episode-13-Overthinking-Is-Secretly-Protecting-You-But-From-What-e37mrgv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand/90 transition-colors"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
          
          {/* All Episodes */}
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-ink">
            All Episodes
          </h2>
          <div className="space-y-6 mb-8">
            {displayedEpisodes.map((episode, index) => (
              <EpisodeCard 
                key={index} 
                {...episode} 
                fullWidth={true}
              />
            ))}
          </div>

          {/* Load More Button */}
          {!showMore && allEpisodes.length > initialEpisodes && (
            <div className="text-center">
              <button
                onClick={() => setShowMore(true)}
                className="bg-brand text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-brand/90 transition-colors"
              >
                Load More Episodes ({allEpisodes.length - initialEpisodes} more)
              </button>
            </div>
          )}

          {/* Show Less Button */}
          {showMore && (
            <div className="text-center">
              <button
                onClick={() => setShowMore(false)}
                className="bg-ink/20 text-ink px-8 py-4 rounded-xl text-lg font-bold hover:bg-ink/30 transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
