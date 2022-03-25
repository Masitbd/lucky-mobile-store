import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { id, name, seller, price, stock, img } = product;

  return (
    <div className="product-container">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
