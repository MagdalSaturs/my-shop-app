import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductListItem from "./ProductListItem";
import "./ProductList.scss";

const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))
      ) : (
        <p>Brak produktów spełniających kryteria.</p>
      )}
    </div>
  );
};
export default ProductList;
