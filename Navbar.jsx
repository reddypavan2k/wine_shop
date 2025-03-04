import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Navbar menu */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("products")}
            className={menu === "products" ? "active" : ""}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#map-section"
            onClick={() => setMenu("location")}
            className={menu === "location" ? "active" : ""}
          >
            Location
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Sign In Button */}
      <button onClick={() => setShowLogin(true)} className="sign-in-btn">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
