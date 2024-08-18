import about from "@/styles/about.module.css";
import Image from "next/image";
import Footer from './components/_footer';
import Burger from "./components/_burger";
import { useTranslation } from 'next-i18next';


export default function About() {
  const { t } = useTranslation('translation');
  return (
    <>
        <section>
          <div className={about.about}>
            <picture>
              <source srcSet="/image/mobile-about.svg" media="(max-width: 768px)"/>
              <Image src="/image/about.svg" width={500} height={500} className={about.image} alt="about"/>
            </picture>
            <div className={about.aboutheader}>
            <div className={about.aboutheadertitle}>
              <p className={about.titleheader} suppressHydrationWarning>{t('about')}</p>
            </div>
            <div className={about.aboutheadertext}>
              <p className={about.titledetail} suppressHydrationWarning>{t('dvn story')}</p>
            </div>
            </div>
          </div>
          <div>
            <Image src="/image/garis.png" width={500} height={500}  className={about.garisimage} alt=""/>
            <Image src="/image/awankirifooter.png" width={500} height={500} className={about.awan1} alt=""/>
            <Image src="/image/awankirifooter.png" width={500} height={500} className={about.awan2} alt=""/>
            <Image src="/image/aboutkanan.svg" width={500} height={500} className={about.awan3} alt=""/>
          </div>
          <div className={about.tombol}>
            <button className={about.brand} suppressHydrationWarning>{t('brand')}</button>
            <button className={about.management} suppressHydrationWarning>{t('management')}</button>
          </div>
        </section>
      <Burger />
        <section className={about.section}>
            <div className={about.col_1}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('core')}</span> {t('brand values')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn core')}</p>
              </div>
            </div>
            <div className={about.col_2}>
              <picture>
                <source srcSet="/image/mobile-dvn.svg" media="(max-width: 768px)"/>
                <Image src="/image/dvn_about.svg" width={300} height={300} layout="responsive" alt="dvn"/>
              </picture>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_3}>
            <picture className={about.duo}>
              <source srcSet="/image/mobile-duo.svg" media="(max-width: 768px)"/>
              <Image src="/image/duo.svg" width={295.7} height={149.27} layout="responsive" alt=""/>
            </picture>
            </div>
            <div className={about.col_4}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('global leading')}</span><br />{t('beauty concept')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn adheres')}</p>
              </div>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_5}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('brand-org')}</span><br /> {t('original intention')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn original')}</p>
              </div>
            </div>
            <div className={about.col_6}>
            <picture>
              <source srcSet="/image/mobile-botol.svg" media="(max-width: 768px)"/>
              <Image src="/image/botol_dvn.png" width={500} height={500} className={about.botol_d} alt=""/>
            </picture>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_one_image}>
            <div className={about.content}>
                <p className={about.core_down} suppressHydrationWarning>{t('brand mission')}</p>
                <p className={about.value_core_down} suppressHydrationWarning>{t('dvn mission')}</p>
              </div>
            </div>
            <div className={about.col_two_image}>
            <div className={about.content}>
                <p className={about.core_down} suppressHydrationWarning>{t('brand vision')}</p>
                <p className={about.value_core_down} suppressHydrationWarning>{t('dvn vision')}</p>
              </div>
            </div>
        </section>
        <section className={about.sectionAdvan}>
            <div className={about.container_text}>

              <div className={about.container_text_1}>
                <h1 suppressHydrationWarning>{t('brand-adv')}<span suppressHydrationWarning> {t('advantages')}</span></h1>
                <div className={about.p_layout}>
                <p suppressHydrationWarning>{t('leading technologi')}</p>
                <p suppressHydrationWarning>{t('inner and outer')}</p>
                </div>
              </div>

              <Image src="/image/dvn-group.png" width={500} height={430} layout="responsive" alt="dvn-group"/>

              <div className={about.container_text_3}>
                <h1 suppressHydrationWarning>{t('customized')} <span suppressHydrationWarning>{t('solution')}</span></h1>
                <p suppressHydrationWarning>{t('product our')}</p>
              </div>

            </div>
            <div className={about.container_text_2}>
              <h1 suppressHydrationWarning>{t('brand-phi')}<span suppressHydrationWarning> {t('philosophy')}</span></h1>
              <p suppressHydrationWarning>{t('we upload')}</p>
            </div>
        </section>
        <Footer />
    </>
  );
}
