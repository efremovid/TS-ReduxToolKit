import type { ShortProductLocal } from "../../types";
import styles from "./Styles.module.scss";
import { FaHeart } from "react-icons/fa";
import { toggleLike } from "../../store/products/products-slice";
import { useDispatch } from "react-redux";

interface CardProps {
  product: ShortProductLocal;
}

const Card = ({ product }: CardProps) => {
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(toggleLike(id));
  };

  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className={styles.likeContainer}>
        <span>${product.price}</span>
        <button onClick={() => handleClick(product.id)}>
          <FaHeart
            style={product.like ? { color: "red" } : { color: "black" }}
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
