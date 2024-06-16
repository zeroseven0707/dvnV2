import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';


const Footer = () => {
    const { t } = useTranslation('translation');

    return (
<section>
<div className={styles.footer}>
    <div className={styles.contentFooter}>
    <div className={styles.containerText2}>
            <img src="/image/dvn-logo.svg" className={styles.dvnLogo}/>
            <hr className={styles.garisFooter} />
            <ul className={styles.footer_ul}>
                <li className={styles.footer_li}><Link href="/product" suppressHydrationWarning>{t('learn more')}</Link> </li>
                <li className={styles.footer_li}><Link href="/" suppressHydrationWarning>{t('contact us')}</Link></li>
                <li className={styles.footer_li}><Link href="/faqs" suppressHydrationWarning>{t('faqs')}</Link></li>
            </ul>
            <div className={styles.social_media}>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/tiktok.svg"/></Link>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/facebook.svg"/></Link>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/insta.svg"/></Link>
            </div>
        </div>
            <div className={styles.containerForm}>
            <form className={styles.form}>
            <p suppressHydrationWarning>{t('get in')}</p>
                <input type="text" placeholder={t('email')} className={styles.input} suppressHydrationWarning/>
                <textarea className={styles.message} placeholder={t('message')} suppressHydrationWarning></textarea>
                <button className={styles.button} suppressHydrationWarning>{t('send')}</button>
            </form>
            </div>
    </div>
        <picture >
            <source srcSet="/image/awan-mobile-kiri.png" media="(max-width: 768px)"/>
            <img className={styles.awankiri} src="/image/KIRI.svg" alt="kiri" />
        </picture>
        <img className={styles.awankanan} src="/image/awankananfooter.png" alt="kanan" />
    <footer className={styles.textFooter}>Copyright © 2024 dvn.com</footer>
    </div>
</section>
  );
};

export default Footer;