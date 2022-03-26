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
      {cart.length < 5 ? (
        <h3>Added item: {cart.length}</h3>
      ) : (
        <h3>Added item: {4}</h3>
      )}
      {cart.slice(0, 3).map((item) => {
        return (
          <div className="cart-item-list">
            <p key={item.id}>{item.name}</p>
            <button className="trash-button">
              <FaTrash />
            </button>
          </div>
        );
      })}
      <button className="ramdom-select" onClick={handleSelect}>
        Choose one
      </button>
    </div>
  );
};

export default Cart;
