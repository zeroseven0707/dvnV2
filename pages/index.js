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
      <Image width={500} height={500} src="/image/DVN Upgrade.jpg" className={styles.dvnjpeg} alt="" />
    </>
  );
};

export default Home;
