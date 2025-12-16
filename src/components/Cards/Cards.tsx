import { useSelector } from "react-redux";
import styles from "./Styles.module.scss";
import { selectProducts } from "../../store/products/products-selectors";
import Card from "../Card/Card";

const Cards = () => {
  const products = useSelector(selectProducts);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
