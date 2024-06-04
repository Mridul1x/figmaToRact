import React from "react";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">SHOP.CO</div>
      <div className="navbar-links">
        <a href="/">Shop</a>
        <a href="/">On Sale</a>
        <a href="/">New Arrivals</a>
        <a href="/">Brands</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="navbar-icons">
        <FiShoppingCart />
        <FaRegUserCircle />
      </div>
    </nav>
  );
};

export default Navbar;
