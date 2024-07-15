import product from "@/styles/product.module.css";
import Image from "next/image";
import Footer from './components/_footer';
import Production from './components/_productionYoutube';
import Testimoni from './components/_testimoniYoutube';
import Reviews from './components/_reviews';
// import Slider from './components/_slider';
import Burger from "./components/_burger";
import { useTranslation } from 'next-i18next';

export default function Product() {
  const { t } = useTranslation('translation');
  return (
    <>
      <section>
        <div>
          <div className={product.text_header} suppressHydrationWarning>{t('product')}</div>
          <Image width={500} height={500} src="/image/Botol DVN.svg" className={product.image_product} alt="" />
          <picture >
              <source srcSet="/image/mobile-product.svg" media="(max-width: 768px)"/>
              <Image width={500} height={500} src="/image/product.png" className={product.image} alt="" />
          </picture>
          <Image width={500} height={500} alt="" src="/image/awankirifooter.png" className={product.awan1} />
          <Image width={500} height={500} alt="" src="/image/awankirifooter.png" className={product.awan2} />
        </div>
      </section>
        <Burger />
      <section>
      <div className={product.youtube}>
        <p suppressHydrationWarning><span suppressHydrationWarning>{t('our')}</span> {t('production process')}</p>
        <Production videoId={t('video')} />
      </div>
      </section>
      <section className={product.benefit}>
        <div className={product.benefit_content_product_mobile}>
          <h1 suppressHydrationWarning>{t('main')} <span suppressHydrationWarning>{t('ingredients')}</span></h1>
          <h3 suppressHydrationWarning>{t('collagen peptide')} <Image width={500} height={500} alt="" src="/image/peptide-blue.svg"/></h3>
        </div>
        <Image width={500} height={500} alt="" src="/image/awan3.png" className={product.awan_desktop_3}/>
        <Image width={500} height={500} alt="" src="/image/awan4.png" className={product.awan_desktop_4}/>
        <Image width={500} height={500} alt="" src="/image/awan-dekstop-1.png" className={product.awan_desktop_1}/>
        <Image width={500} height={500} alt="" src="/image/awan-dekstop-2.png" className={product.awan_desktop_2}/>
        <div className={product.benefit_image_product}>
          <Image width={500} height={500} alt="" src="/image/Botol DVN.svg" className={product.image_benefit}/>
        </div>
        <div className={product.benefit_content_product}>
          <h1 suppressHydrationWarning>{t('main')} <span suppressHydrationWarning>{t('ingredients')}</span></h1>
          <h3 suppressHydrationWarning>{t('collagen peptide')}</h3>
          
          <div className={product.benefit_box_product}>
            <h5 suppressHydrationWarning>{t('benefits')}</h5>
            <ul>
              <li suppressHydrationWarning>{t('easily')}</li>
              <li suppressHydrationWarning>{t('maintains')}</li>
              <li suppressHydrationWarning>{t('Nourishes')}</li>
              <li suppressHydrationWarning>{t('maintain')}</li>
            </ul>
            <Image width={500} height={500} alt="" src="/image/CollagenPeptide.svg" className={product.peptide_image}/>
            <Image width={500} height={500} alt="" src="/image/ingredients.svg" className={product.bahan_image}/>
          </div>
        </div>
      </section>
      <section>
        <div className={product.containerWorks}>
          <div>
            <Image width={500} height={500} alt="" src="/image/extract-image.png" className={product.image_works} />
          </div>
          <div className={product.text}>
              <p className={product.text_works} suppressHydrationWarning>{t('viqua')}</p>
          </div>
        </div>
      </section>
      <section>
        <div className={product.container_featured}>
          <div className={product.featured}>
          <div>
            < p className={product.title_featured} suppressHydrationWarning><span suppressHydrationWarning>{t('featured')}</span> {t('product')}</p>
            <div className={product.imageFeatured}>
              <Image width={500} height={500} alt="" src="/image/Botol DVN.svg" className={product.imageFeatureds}/>
            </div>
          </div>
            <div className={product.detailFeaturedMobile}>
              <p className={product.title_featuredMobile} suppressHydrationWarning><span suppressHydrationWarning>{t('Featured')}</span> {t('product')}</p>
              <p className={product.title} suppressHydrationWarning>D.V.N {t('chewable tablet')}</p>
              <div className={product.tombolMobile}>
                <button className={product.buynowMobile} suppressHydrationWarning>{t('buy now')}</button>
                <button className={product.consultMobile} suppressHydrationWarning>{t('consult with us')}</button>
              </div>
            </div>
            <div className={product.detailFeatured}>
              <p className={product.title} suppressHydrationWarning>D.V.N {t('chewable tablet')}</p>
              <p className={product.text} suppressHydrationWarning>{t('discover our')}</p>
              <div className={product.tombol}>
                <button className={product.buynow} suppressHydrationWarning>{t('buy now')}</button>
                <button className={product.consult} suppressHydrationWarning>{t('consult with us')}</button>
              </div>
            </div>
          </div>
          <div className={product.MobileDetailFeatured}>
              <p className={product.text} suppressHydrationWarning>{t('discover our')}</p>
            </div>
        </div>
      </section>
      <section className={product.ContainerReviews}>
        <div className={product.reviews}>
          <p className={product.textnya} suppressHydrationWarning><span suppressHydrationWarning>{t('review')}</span> {t('what people say')}</p>
        </div>
      <Reviews />
      {/* <Slider /> */}
      </section>
      <section>
        <div className={product.youtube2}>
        <div className={product.detail_youtube2_mobile}>
            <p className={product.testimonial} suppressHydrationWarning>{t('testimonials')}</p>
            <p className={product.testimonial_detail} suppressHydrationWarning>{t('hear what they have to say')}</p>
        </div>
        <div className={product.video_youtube2}>
          <Testimoni videoId={t('video')} thumbnailUrl="/image/youtube.png" />
        </div>
        <div className={product.detail_youtube2}>
            <p className={product.testimonial} suppressHydrationWarning>{t('testimonials')}</p>
            <p className={product.testimonial_detail} suppressHydrationWarning>{t('hear what they have to say')}</p>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
