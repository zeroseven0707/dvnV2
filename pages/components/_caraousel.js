// components/CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from "@/styles/Carousel.module.css"; // membutuhkan file CSS
 // membutuhkan file CSS
import { useTranslation } from 'next-i18next';
import Image from "next/image";


const CarouselComponent = () => {
  const { t } = useTranslation('translation');

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
            <svg className={Slides.kiri} viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.939339 10.9393C0.35355 11.5251 0.35355 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM50 10.5L2 10.5V13.5L50 13.5V10.5Z" fill="white"/>
            </svg>
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
            <svg className={Slides.kanan} viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.0607 10.9393C49.6465 11.5251 49.6465 12.4749 49.0607 13.0607L39.5147 22.6066C38.9289 23.1924 37.9792 23.1924 37.3934 22.6066C36.8076 22.0208 36.8076 21.0711 37.3934 20.4853L45.8787 12L37.3934 3.51472C36.8076 2.92893 36.8076 1.97919 37.3934 1.3934C37.9792 0.807611 38.9289 0.807611 39.5147 1.3934L49.0607 10.9393ZM0 10.5L48 10.5V13.5L0 13.5L0 10.5Z" fill="white"/>
            </svg>
          </button>
        )
      }
    >
      <div className={Slides.crousel}>
        <picture>
            <source srcSet="/image/mobile-index.svg" media="(max-width: 768px)"/>
            <Image width={500} height={500} className={Slides.carausel} src="/image/caraousel.png" priority alt="caraousel 1" />
        </picture>
          <p className={Slides.text_atas}><Image width={500} height={500} src="/image/D.V.N.svg" alt='' priority /></p> 
          <p className={Slides.textLuminos} suppressHydrationWarning>{t('luminos')}</p> 
          <Image width={500} height={500} src="/image/no1.svg" alt="" className={Slides.no1} priority/>
      </div>
      <div className={Slides.crousel}>
        <picture>
            <source srcSet="/image/mobile-index.svg" media="(max-width: 768px)"/>
            <Image width={500} height={500} className={Slides.carausel} src="/image/caraousel.png" alt="caraousel 2" priority />
        </picture>
        <p className={Slides.text_atas}><Image width={500} height={500} src="/image/D.V.N.svg" alt='' priority /></p> 
        <p className={Slides.textLuminos} suppressHydrationWarning>{t('luminos')}</p> 
        <Image width={500} height={500} src="/image/no1.svg" alt="" className={Slides.no1} priority />
      </div>
    </Carousel>
    
  );
};

export default CarouselComponent;
