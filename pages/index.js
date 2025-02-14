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
import Link from 'next/link';

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
            <span className={styles.span} suppressHydrationWarning>{t('do you')}<span className={styles.know} suppressHydrationWarning>{t('know')}</span> <br className={styles.know_br}/> </span> <Link href="https://www.marketeers.com/zap-beauty-index-2023-kulit-kusam-dominasi-persoalan-perempuan-indonesia/"> <span className={styles.descript} suppressHydrationWarning> {t('uneven')}</span></Link>
        </div>
        <div className={styles.video}>
          <YouTubeEmbed videoId={t('video')} thumbnailUrl={`/image/${t('thumb-en')}.svg`} />
        </div>
      </section>
      <section>
        <div className={styles.badfactor}>
          <Image width={500} height={500}  src={`/image/${t('bad-factor-en')}.svg`}  className={styles.images} alt=''/>
        </div>
      </section>
      <PicturePudar />
      <Footer />
    </>
  );
};

export default Home;
