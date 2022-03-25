import React from "react";
import "./Product.css";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, handleClick }) => {
  const { name, seller, price, stock, img } = product;

  return (
    <div className="product-container">
      <img src={img} alt="" />
      <p className="item-text">Name: {name}</p>
      <p className="item-text">Brand: {seller}</p>
      <p className="item-text">Price: ${price}</p>
      <p className="item-text">Stock: {stock}</p>
      <button onClick={() => handleClick(product)} className="cart-btn">
        <span className="btn-text">Add to cart</span> <FaCartPlus />
      </button>
    </div>
  );
};

export default Product;
