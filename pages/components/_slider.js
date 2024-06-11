import React, { useEffect } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      // Jika ingin menggunakan navigation (tombol next dan prev)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="swiper-slide">
            Card {index}
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slider;
