import styles from "../../public/styles/Home.module.css";

const picture_pudar = () => {
    return (
      <section>
        <div className={styles.pudar}>
          <img className={styles.pudarGambar} src="/image/pudar.png" alt="Pudar" />
          <div className={styles.fadeOverlay}></div>
        </div>
      </section>
  );
};

export default picture_pudar;