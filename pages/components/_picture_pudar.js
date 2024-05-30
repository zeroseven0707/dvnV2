import styles from "../../public/styles/Home.module.css";

const picture_pudar = () => {
    return (
      <section>
        <div className={styles.pudar}>
          <button className={styles.learnMore}>Learn More</button>
          <img className={styles.ImageBotolPudar} src="/image/Botol_DVN.svg" alt="botol" />
          <img className={styles.pudarGambar} src="/image/pudar.png" alt="Pudar" />
          <div className={styles.fadeOverlay}></div>
        </div>
      </section>
  );
};

export default picture_pudar;