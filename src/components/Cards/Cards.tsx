import styles from "./Styles.module.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products-selectors";

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
