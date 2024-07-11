import { useTranslation } from 'next-i18next';
import styles from '@/styles/Home.module.css';
import CarouselComponent from './components/_caraousel';
import Slides from './components/_slide';
import Footer from './components/_footer';
import PicturePudar from './components/_picture_pudar';
import PerfectPage from './components/_perfect';
import YouTubeEmbed from './components/_youtubeEmbed';
import Burger from './components/_burger';
import Image from "next/image";

const Home = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <CarouselComponent />
      <Burger />
      <Image width={500} height={500} src="/image/awan-home-kiri.png" alt="" className={styles.awannya_caraousel} />
      <Image width={500} height={500} className={styles.cloud} src="/image/Cloud1.png" alt="caraousel" />
      <Image width={500} height={100} src="/image/garis.png" className={styles.garis} alt="caraousel"/>
      <Slides />
      <PerfectPage />
      <section className={styles.youtube}>
      <div className={styles.containerText}>
            <span className={styles.span} suppressHydrationWarning>{t('do you')} <span className={styles.know} suppressHydrationWarning>{t('know')}</span> <br className={styles.know_br}/> </span> <span className={styles.descript} suppressHydrationWarning>{t('uneven')}</span>
        </div>
        <div className={styles.video}>
          <YouTubeEmbed videoId="IKCSNNeRTDA" thumbnailUrl="/image/youtube.png" />
        </div>
      </section>
      <section>
        <div className={styles.badfactor}>
          <Image width={500} height={500}  src="/image/image.png"  className={styles.images} alt=''/>
        </div>
      </section>
      <PicturePudar />
      <Footer />
    </>
  );
};

export default Home;
