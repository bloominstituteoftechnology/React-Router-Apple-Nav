import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav";

const navLinks = ["Home", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

const Nav = props => {
  return (
    <div className="nav-items">
      {navLinks.map(link => {
        return <NavLink to="/">{link}</NavLink>;
      })}
    </div>
  );
};

export default Nav;
