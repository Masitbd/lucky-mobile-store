import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, seller, price, stock, img } = product;

  return (
    <div className="product-container">
      <img src={img} alt="" />
      <p className="item-text">Name: {name}</p>
      <p className="item-text">Brand: {seller}</p>
      <p className="item-text">Price: ${price}</p>
      <p className="item-text">Stock: {stock}</p>
    </div>
  );
};

export default Product;
