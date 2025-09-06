'use client';

import React, { useState } from 'react';

interface EpisodeCardProps {
  title: string;
  blurb: string;
  link: string;
  imageUrl?: string;
  fullWidth?: boolean;
}

export default function EpisodeCard({ title, blurb, link, imageUrl, fullWidth = false }: EpisodeCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Use fallback image if no imageUrl is provided or if there was an error
  const displayImageUrl = !imageUrl || imageError ? '/podcast-logo.png' : imageUrl;

  if (fullWidth) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Episode Image */}
          <div className="md:w-48 md:flex-shrink-0 bg-gray-100">
            <img
              src={displayImageUrl}
              alt={title}
              className="h-48 w-full md:h-48 md:w-48 object-contain bg-white"
              onError={handleImageError}
            />
          </div>
          
          {/* Episode Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold mb-3 text-ink line-clamp-2">
                {title}
              </h3>
              <p className="text-ink/80 mb-4 leading-relaxed line-clamp-3">
                {blurb}
              </p>
            </div>
            <div className="flex justify-start">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200"
              >
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original compact card layout
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Episode Image */}
      <div className="h-48 bg-gray-100">
        <img
          src={displayImageUrl}
          alt={title}
          className="h-48 w-full object-contain bg-white"
          onError={handleImageError}
        />
      </div>
      
      {/* Episode Content */}
      <div className="p-6">
        <h3 className="text-lg font-heading font-bold mb-2 text-ink line-clamp-2">
          {title}
        </h3>
        <p className="text-ink/80 mb-4 text-sm leading-relaxed line-clamp-3">
          {blurb}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm"
        >
          Listen Now
        </a>
      </div>
    </div>
  );
}
