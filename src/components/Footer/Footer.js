import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Copyright: LUCKY MOBILE SERVICES
      </p>
    </footer>
  );
};

export default Footer;
