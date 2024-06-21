// components/YouTubeEmbed.js

import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const YouTubeEmbed = ({ videoId, thumbnailUrl }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      {!isVideoVisible && (
        <Image
        width={500}
        height={500}
          src={thumbnailUrl}
          alt="Video Thumbnail"
          onClick={handleThumbnailClick}
        />
      )}
      {isVideoVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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