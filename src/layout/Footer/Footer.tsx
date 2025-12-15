import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <header className={styles.footer}>
      <a className={styles.logo} href="/">
        Ridiculous price
      </a>
    </header>
  );
};

export default Footer;
