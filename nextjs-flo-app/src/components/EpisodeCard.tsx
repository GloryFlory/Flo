import React from 'react';


interface EpisodeCardProps {
  title: string;
  blurb: string;
  link: string;
  coverUrl?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ title, blurb, link, coverUrl }) => {
  if (typeof window !== 'undefined') {
    console.log('Episode image URL:', coverUrl, title);
  }
  return (
    <div className="card flex flex-col md:flex-row gap-4 items-center">
      {coverUrl && (
        <img src={coverUrl} alt={title} className="w-32 h-32 object-cover rounded-lg" />
      )}
      <div className="flex-1">
        <h2 className="text-xl font-heading mb-2">{title}</h2>
        <p className="mb-4 text-ink">{blurb}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener">Listen</a>
      </div>
    </div>
  );
};

export default EpisodeCard;
