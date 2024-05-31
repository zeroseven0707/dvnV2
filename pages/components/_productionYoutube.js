// components/YouTubeEmbed.js

import React, { useState } from 'react';

const YouTubeEmbed = ({ videoId, thumbnailUrl }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div style={{ position: 'relative', paddingBottom: '32.25%', height: 0 }}>
      {!isVideoVisible && (
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '70vh',
            borderRadius:'30px',
            cursor: 'pointer'
          }}
          onClick={handleThumbnailClick}
        />
      )}
      {isVideoVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            borderRadius:'30px',
            height: '70vh'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
