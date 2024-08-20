import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from "@/styles/Carousel.module.css";
import { useTranslation } from 'next-i18next';
import Image from "next/image";

const CarouselComponent = () => {
  const { t, i18n } = useTranslation('translation');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://prahwa.net/api/banners', {
          headers: {
            'api_key': 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setImages(data.data.map(item => ({
            id: item.id,
            image: item.image,
            image_en: item.image_en, // Assuming your API provides images for different languages
            image_id: item.image  // Assuming your API provides images for different languages
          })));
        } else {
          console.error('Failed to fetch images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const currentLanguage = i18n.language; // Get current language

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      swipeable
      emulateTouch
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={Slides.arrowPrev}
          >
            {/* Your left arrow SVG */}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={Slides.arrowNext}
          >
            {/* Your right arrow SVG */}
          </button>
        )
      }
    >
      {images.map((item, index) => (
        <div key={item.id} className={Slides.crousel}>
          <picture>
            {/* Adjust image source based on the current language */}
            <source
              srcSet={currentLanguage === 'en' ? `/image/${t('banner_mobile_en')}.svg` : `/image/${t('banner_mobile_en')}.svg`}
              media="(max-width: 768px)"
            />
            <Image
              width={500}
              height={500}
              className={Slides.image}
              src={`https://prahwa.net/storage/${currentLanguage === 'en' ? item.image_en : item.image_id}`}
              priority
              alt={`carousel ${index + 1}`}
            />
          </picture>
          {/* Optional: Add additional content here */}
          <Image width={500} height={500} src="/image/no1.svg" alt="" className={Slides.no1} priority />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
