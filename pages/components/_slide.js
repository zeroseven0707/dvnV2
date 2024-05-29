
import SlidesCss from "../../public/styles/slide.module.css"; 

const Slides = () => {
  return (
        <div className={SlidesCss.slidesContainer}>
            <div className={SlidesCss.slide}>
                <img src="/image/halal.png" alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <img src="/image/bpom.png" alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <img src="/image/tablet.png" alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <img src="/image/ingredients.png" alt="slide1" />
            </div>
            <div className={SlidesCss.slide}>
                <img src="/image/collagen.png" alt="slide1" />
            </div>
        </div>
  );
};

export default Slides;
