import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Ridiculous price
      </a>
    </header>
  );
};

export default Header;
