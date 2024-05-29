import styles from "../../public/styles/Home.module.css";

const footer = () => {
    return (
<section>
<div className={styles.footer}>
    <div className={styles.dflex}>    
        <div className={styles.containerForm}>
        <form className={styles.form}>
        <p>Get in Touch with us</p>
            <input type="text" placeholder="Email Address" className={styles.input}/>
            <textarea className={styles.message} placeholder="Message"></textarea>
            <button className={styles.button}>Send</button>
        </form>
        </div>
    </div>
    <footer className={styles.textFooter}><p>Copyright © 2024 dvn.com</p></footer>
    <div className={styles.fadeOver}></div>
</div>
</section>
  );
};

export default footer;