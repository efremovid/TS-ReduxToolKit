import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiProduct } from "./../../utils/apiProducts";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    apiProduct(Number(id)).then((data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product)

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
