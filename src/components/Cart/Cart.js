import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      {cart.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
