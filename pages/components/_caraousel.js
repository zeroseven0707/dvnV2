import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from "@/styles/Carousel.module.css";
import { useTranslation } from 'next-i18next';
import Image from "next/image";

const CarouselComponent = () => {
  const { t } = useTranslation('translation');
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
            image: item.image
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
            <source srcSet={`https://prahwa.net/storage/${item.image}`} media="(max-width: 768px)" />
            <Image width={500} height={500} className={Slides.carausel} src={`https://prahwa.net/storage/${item.image}`} priority alt={`carousel ${index + 1}`} />
          </picture>
         {/* <p className={Slides.text_atas}><Image width={500} height={500} src="/image/D.V.N.svg" alt='' priority /></p>*/}
         {/* <p className={Slides.textLuminos} suppressHydrationWarning>{t('luminos')}</p>*/}
          <Image width={500} height={500} src="/image/no1.svg" alt="" className={Slides.no1} priority />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
