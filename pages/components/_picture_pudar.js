import styles from "../../public/styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const picture_pudar = () => {
  const { t } = useTranslation('common');

  return (
      <section>
        <div className={styles.pudar}>
          <Link href="/product">
          <button className={styles.learnMore} suppressHydrationWarning>{t('learn more')}</button>
          </Link>
          <img className={styles.ImageBotolPudar} src="/image/Botol_DVN.svg" alt="botol" />
          <img className={styles.pudarGambar} src="/image/pudar.png" alt="Pudar" />
          <div className={styles.fadeOverlay}></div>
        </div>
      </section>
  );
};

export default picture_pudar;