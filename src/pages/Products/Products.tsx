import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";
import styles from "./Products.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ShortProductBase } from "../../types";
import { setProducts } from "../../store/products/products-slice";
import { refactorProductsData } from "../../utils/refactorProductsData";

import { apiProducts } from "../../utils/apiProducts";
import { selectProducts } from "../../store/products/products-selectors";

interface ApiData {
  products: ShortProductBase[];
  total: number;
  skip: number;
  limit: number;
}

const Products = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (products.length === 0) {
      apiProducts().then((data: ApiData) =>
        dispatch(setProducts(refactorProductsData(data.products)))
      );
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const goToProduct = () => {
    navigate("/products/create-product");
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} widthVariant={"big"}>
        Назад
      </Button>
      <div className={styles.filter}>
        <p>Фильтрация:</p>
        <Button onClick={() => setFilter("all")} widthVariant={"big"}>
          All
        </Button>
        <Button onClick={() => setFilter("liked")} widthVariant={"big"}>
          Liked
        </Button>
        <Button onClick={goToProduct} widthVariant={"big"}>
          CREATE NEW PRODUCT!
        </Button>
      </div>
      <Cards filter={filter} />

      {/* <div className={styles.pages}>
          {products.map((el, index) => (
            <button 
            style={index+1 === page ? {color: 'red'} : {color: 'black'}}
              className={styles.btn}
              onClick={() => setPage(index + 1)}
              key={el.id}
            >
              {index + 1}
            </button>
          ))}
        </div> */}
    </div>
  );
};

export default Products;
