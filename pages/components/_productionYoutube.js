// components/YouTubeEmbed.js

import React, { useState } from 'react';
import product from "../../public/styles/product.module.css";
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
          className={product.productionThumb}
          onClick={handleThumbnailClick}
        />
      )}
      {isVideoVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className={product.productionVideo}
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
