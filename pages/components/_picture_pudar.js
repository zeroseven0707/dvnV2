import styles from "../../public/styles/Home.module.css";
import Link from "next/link";

const picture_pudar = () => {
    return (
      <section>
        <div className={styles.pudar}>
          <Link href="/product">
          <button className={styles.learnMore}>Learn more</button>
          </Link>
          <img className={styles.ImageBotolPudar} src="/image/Botol_DVN.svg" alt="botol" />
          <img className={styles.pudarGambar} src="/image/pudar.png" alt="Pudar" />
          <div className={styles.fadeOverlay}></div>
        </div>
      </section>
  );
};

export default picture_pudar;