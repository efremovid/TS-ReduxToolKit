import type { ShortProductLocal } from "../../types";
import styles from "./Styles.module.scss";
import { FaHeart, FaTrash } from "react-icons/fa";
import { removeProduct, toggleLike } from "../../store/products/products-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface CardProps {
  product: ShortProductLocal;
}

const Card = ({ product }: CardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const image = Array.isArray(product.images) ? product.images[0] : product.images

  const goToProduct = () => {
    navigate(`/products/${product.id}`);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleLike(product.id));
  };

  const removeCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeProduct(product.id));
  }



  return (
    <div className={styles.card} onClick={goToProduct}>
      <img src={image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.footer}>
        <span>${product.price}</span>
        <div className={styles.actions}>
          <button onClick={handleLike}>
            <FaHeart
              className={styles.icon}
              color={product.like ? "red" : "black"}
            />
          </button>
          <button onClick={removeCard}>
            <FaTrash className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
