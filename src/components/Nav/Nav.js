import React from "react";
import companyImg from "../../images/smartphone.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="display-nav">
      <div className="logo-resize">
        <img src={companyImg} alt="" />
      </div>
      <div className="nav-items">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/user">User</a>
      </div>
    </div>
  );
};

export default Nav;
