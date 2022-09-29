import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isLogin, setIsLogin]=useState(false)
  const loginList=()=>{
    setIsLogin(true)
  }
  return (
    <div className="header">
      <span>Think Wink</span>
      <div className="header-right" onClick={loginList}>       
       {isLogin && <NavLink to="/login">Login</NavLink>}
       {!isLogin && <NavLink to="/login">Logout</NavLink>}
      </div>
    </div>
  );
};

export default Header;
