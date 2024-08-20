import Image from "next/image";
import SlidesCss from "@/styles/slide.module.css"; 
import { useTranslation } from 'next-i18next';

const Slides = () => {
    const { t } = useTranslation('translation');

  return (
        <div className={SlidesCss.slidesContainer1}>
    <div className={SlidesCss.slidesContainer}>
            <div className={SlidesCss.slide}>
                <Image 
                    width={500} 
                    height={500} 
                    src={`/image/${t('halal_en')}.svg`}
                    className={SlidesCss.halal} 
                    alt="slide1" 
                />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src={`/image/${t('gmp_en')}.svg`} className={SlidesCss.bpom} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src={`/image/${t('collagen_en')}.svg`} className={SlidesCss.tablet} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src={`/image/${t('ingredients_en')}.svg`} className={SlidesCss.ingredients} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src={`/image/${t('best_collagen_en')}.svg`} className={SlidesCss.collagen} alt="slide1" />
            </div>
        </div>
        </div>
  );
};

export default Slides;
