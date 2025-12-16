import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Product from "../../pages/Product/Product";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default Main;
