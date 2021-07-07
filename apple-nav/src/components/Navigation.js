import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="nav">
    <NavLink to="/">
      <i className="fab fa-apple" />
    </NavLink>
    <NavLink to="/mac">Mac</NavLink>
    <NavLink to="/ipad">iPad</NavLink>
    <NavLink to="/iphone">iPhone</NavLink>
    <NavLink to="/watch">Watch</NavLink>
    <NavLink to="/tv">TV</NavLink>
    <NavLink to="/music">Music</NavLink>
    <NavLink to="/support">Support</NavLink>
    <i className="fas fa-search" />
    <i className="fas fa-shopping-bag" />
  </div>
);

export default Navigation;
