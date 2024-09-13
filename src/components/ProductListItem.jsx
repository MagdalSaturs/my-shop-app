import React from "react";
import "./ProductListItem.scss";

const ProductListItem = ({ product }) => {
  return (
    <div className="product-list-item">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Cena: ${product.price}</p>
        <p>
          Data dodania: {new Date(product.createdDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
