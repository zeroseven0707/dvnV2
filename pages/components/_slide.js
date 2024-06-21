import Image from "next/image";
import SlidesCss from "@/styles/slide.module.css"; 

const Slides = () => {
  return (
        <div className={SlidesCss.slidesContainer1}>
    <div className={SlidesCss.slidesContainer}>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src="/image/halal.png" className={SlidesCss.halal} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src="/image/bpom.png" className={SlidesCss.bpom} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src="/image/tablet.png" className={SlidesCss.tablet} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src="/image/ingredients.png" className={SlidesCss.ingredients} alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <Image width={500} height={500} src="/image/collagen.png" className={SlidesCss.collagen} alt="slide1" />
            </div>
        </div>
        </div>
  );
};

export default Slides;
