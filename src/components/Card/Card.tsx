import type { ShortProduct } from "../../types";
import styles from "./Styles.module.scss";

interface CardProps {
  product: ShortProduct;
}

const Card = ({ product }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default Card;
