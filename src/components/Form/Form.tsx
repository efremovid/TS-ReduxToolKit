import { useState } from "react";
import styles from "./Styles.module.scss";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/products/products-slice";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

const Form = () => {
  const [product, setProduct] = useState({
    id: Date.now(),
    title: "",
    description: "",
    price: 0,
    images: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createProduct(product));
    setProduct({
      id: 0,
      title: "",
      description: "",
      price: 0,
      images: "",
    });
    goToProducts();
  };

  return (
    <div className={styles.container}>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <h2>Создание товара</h2>

        <input
          name="title"
          placeholder="Название товара"
          value={product.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Описание"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Цена"
          value={product.price}
          onChange={handleChange}
        />
        <input
          name="images"
          placeholder="URL изображения"
          value={product.images}
          onChange={handleChange}
        />
        <button type="submit">Создать</button>
      </form>

      <Button onClick={goToProducts} widthVariant="big">
        Назад
      </Button>
    </div>
  );
};

export default Form;
