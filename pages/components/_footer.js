import styles from "../../public/styles/Home.module.css";
import Link from "next/link";

const footer = () => {
    return (
<section>
<div className={styles.footer}>
    <div className={styles.contentFooter}>
    <div className={styles.containerText2}>
            <img src="/image/dvn-logo.svg" className={styles.dvnLogo}/>
            <hr className={styles.garisFooter} />
            <ul className={styles.footer_ul}>
                <li className={styles.footer_li}><Link href="/product">Product</Link> </li>
                <li className={styles.footer_li}><Link href="/">Contact Us</Link></li>
                <li className={styles.footer_li}><Link href="/faqs">FaQ</Link></li>
            </ul>
            <div className={styles.social_media}>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/tiktok.svg"/></Link>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/facebook.svg"/></Link>
            <Link href="/product"><img className={styles.sosmedImage} src="/image/insta.svg"/></Link>
            </div>
        </div>
        <div className={styles.dflex}>    
            <div className={styles.containerForm}>
            <form className={styles.form}>
            <p>Get in Touch with us</p>
                <input type="text" placeholder="Email" className={styles.input}/>
                <textarea className={styles.message} placeholder="Message"></textarea>
                <button className={styles.button}>Send</button>
            </form>
            </div>
        </div>
    </div>
    <div className={styles.awan}>
        <img className={styles.awankiri} src="/image/KIRI.svg" alt="kiri" />
        <img className={styles.awankanan} src="/image/awankananfooter.png" alt="kanan" />
    </div>
    <footer className={styles.textFooter}><p>Copyright © 2024 dvn.com</p></footer>
    <div className={styles.fadeOver}></div>
</div>
</section>
  );
};

export default footer;