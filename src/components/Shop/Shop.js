import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    const exist = cart.find((c) => c.id === product.id);
    if (!exist) {
      const newProduct = [...cart, product];
      setCart(newProduct);
    }
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default Shop;
