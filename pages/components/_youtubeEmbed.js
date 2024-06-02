// components/YouTubeEmbed.js
import styles from "../../public/styles/Home.module.css";
import React, { useState } from 'react';

const YouTubeEmbed = ({ videoId, thumbnailUrl }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div style={{ position: 'relative', paddingBottom: '46.25%', height: 0 }}>
      {!isVideoVisible && (
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          className={styles.YoutubeThumb}
          onClick={handleThumbnailClick}
        />
      )}
      {isVideoVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className={styles.YoutubeVideo}
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
