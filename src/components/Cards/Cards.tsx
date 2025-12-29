import styles from "./Styles.module.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { selectFilterProducts } from "../../store/products/products-selectors";
import type { RootState } from "../../store";

interface CardsProps {
  filter: string;
}

const Cards = ({ filter }: CardsProps) => {
  const products = useSelector((state: RootState) =>
    selectFilterProducts(state, filter)
  );

  console.log(products)

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
