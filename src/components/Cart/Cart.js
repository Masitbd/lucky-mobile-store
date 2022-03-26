import React from "react";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart }) => {
  const handleSelect = () => {
    // console.log(list);
    let item = cart[Math.floor(Math.random() * cart.length)];
    if (item) {
      alert(item.name);
    }
  };
  return (
    <div className="cart">
      <h3>Added item: {cart.length}</h3>

      {cart.map((item) => {
        return (
          <div className="cart-item-list">
            <p key={item.id}>{item.name}</p>
            <button className="trash-button">
              <FaTrash />
            </button>
          </div>
        );
      })}
      <button onClick={handleSelect}>Choose one</button>
    </div>
  );
};

export default Cart;
