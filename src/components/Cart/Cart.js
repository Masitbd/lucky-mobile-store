import React from "react";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, handleRemove }) => {
  const handleSelect = () => {
    let item = cart[Math.floor(Math.random() * cart.length)];
    if (item) {
      alert(`You are selecting ${item.name}`);
    }
  };

  return (
    <div className="cart">
      {cart.length < 5 ? (
        <h3>Added item: {cart.length}</h3>
      ) : (
        <h3>Added item: {4}</h3>
      )}
      {cart.slice(0, 4).map((item) => {
        return (
          <div className="cart-item-list" key={item.id}>
            <p>{item.name}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className="trash-button"
            >
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
