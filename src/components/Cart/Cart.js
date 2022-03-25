import React from "react";
import "./Cart.css";
import { FaCartPlus, FaRemoveFormat, FaTrash } from "react-icons/fa";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Added item: {cart.length}</h3>

      {cart.length !== 4 &&
        cart.map((item) => {
          return (
            <div className="cart-item-list">
              <p key={item.id}>{item.name}</p>
              <button className="trash-button">
                <FaTrash />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
