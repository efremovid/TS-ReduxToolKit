import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";
import styles from "./Products.module.scss";

const Products = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} widthVariant={"big"}>
        Назад
      </Button>
      <div className={styles.filter}>
        <p>Фильтрация:</p>
        <Button widthVariant={"big"}>All</Button>
        <Button widthVariant={"big"}>Liked</Button>
      </div>
      <Cards />
    </div>
  );
};

export default Products;
