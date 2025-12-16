import { Link } from "react-router-dom";
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={"/products"}>Перейти к выбору товаров</Link>
    </div>
  );
};

export default Home;
