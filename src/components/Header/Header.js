import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <span>Think Wink</span>
      <div className="header-right">
        <span>{localStorage.getItem("EMAIL")}</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/login">Logout</NavLink>
      </div>
    </div>
  );
};

export default Header;
