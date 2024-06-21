import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import Image from "next/image";
const PicturePudar = () => {
  const { t } = useTranslation('translation');

  return (
    <section>
      <div className={styles.pudar}>
        <Link href="/product">
          <button className={styles.learnMore} suppressHydrationWarning>{t('learn more')}</button>
        </Link>
        <Image width={500} height={500} className={styles.pudarGambar} src="/image/learnmore.png" alt="Pudar" />
      </div>
    </section>
  );
};

export default PicturePudar;
