// components/YouTubeEmbed.js

import React, { useState } from 'react';
import product from "@/styles/product.module.css";
const YouTubeEmbed = ({ videoId }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      {!isVideoVisible && (
               <picture>
                <source srcset="/image/mobile-production.png" media="(max-width: 768px)" onClick={handleThumbnailClick}/>
                  <img
                      src="/image/youtube.png"
                      alt="Video Thumbnail"
                      className={product.productionThumb}
                      onClick={handleThumbnailClick}
                    />
            </picture>
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
    </>
  );
};

export default YouTubeEmbed;
