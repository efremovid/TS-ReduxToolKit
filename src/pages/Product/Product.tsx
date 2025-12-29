import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiProduct } from "../../utils/apiProducts";
import styles from "./Product.module.scss";
import { Button } from "../../components/Button/Button";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/products");
  };

  useEffect(() => {
    apiProduct(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div className={styles.loader}>Loading...</div>;

  return (
    <div className={styles.container}>
      <Button
        widthVariant="big"
        style={{ marginBottom: "20px" }}
        onClick={handleClickBack}
      >
        ← Back
      </Button>

      <div className={styles.main}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
        />

        <div className={styles.info}>
          <p className={styles.category}>
            {product.category} • {product.brand}
          </p>

          <h1>{product.title}</h1>

          <div className={styles.priceBlock}>
            <span className={styles.price}>${product.price}</span>
            <span className={styles.discount}>
              −{product.discountPercentage}%
            </span>
          </div>

          <p className={styles.description}>{product.description}</p>

          <p>
            <b>Rating:</b> ⭐ {product.rating}
          </p>
          <p>
            <b>Stock:</b> {product.stock}
          </p>
          <p>
            <b>SKU:</b> {product.sku}
          </p>
          <p>
            <b>Weight:</b> {product.weight} g
          </p>

          <p>
            <b>Warranty:</b> {product.warrantyInformation}
          </p>
          <p>
            <b>Shipping:</b> {product.shippingInformation}
          </p>
          <p>
            <b>Status:</b> {product.availabilityStatus}
          </p>
          <p>
            <b>Return policy:</b> {product.returnPolicy}
          </p>
        </div>
      </div>

      <div className={styles.extra}>
        <h2>Dimensions</h2>
        <p>
          {product.dimensions.width} × {product.dimensions.height} ×{" "}
          {product.dimensions.depth} cm
        </p>

        <h2>Tags</h2>
        <p>{product.tags.join(", ")}</p>

        <h2>Reviews</h2>

        {product.reviews.length === 0 && <p>No reviews yet</p>}

        {product.reviews.map((review: any, index: number) => (
          <div className={styles.review} key={index}>
            <p className={styles.reviewName}>
              {review.reviewerName} — ⭐ {review.rating}
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
