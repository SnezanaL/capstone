import { Route, Routes, Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import React from 'react';

const Nav = () => {
  return (
    <>
      <nav className="navigation-bar">
        <img className="logo" src={logo} />
        <div className="menu-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/booking" className="nav-item">
            Booking
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
