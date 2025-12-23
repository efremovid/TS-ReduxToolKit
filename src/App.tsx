import { useEffect } from "react";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import { apiProducts } from "./utils/apiProducts";
import { setProducts } from "./store/products/products-slice";
import type { ShortProductBase } from "./types";
import { useDispatch } from "react-redux";
import { refactorProductsData } from "./utils/refactorProductsData";

interface ApiData {
  products: ShortProductBase[];
  total: number;
  skip: number;
  limit: number;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiProducts().then((data: ApiData) =>
      dispatch(setProducts(refactorProductsData(data.products)))
    );
  }, []);

  return (
    <div className="content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
