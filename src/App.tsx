import { useEffect } from "react";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import { apiProducts } from "./utils/apiProducts";
import { getProducts } from "./store/products/products-slice";
import type { ShortProduct } from "./types";
import { useDispatch } from "react-redux";

interface ApiResponse {
  products: ShortProduct[];
  total: number;
  skip: number;
  limit: number;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiProducts().then((data: ApiResponse) =>
      dispatch(getProducts(data.products))
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
