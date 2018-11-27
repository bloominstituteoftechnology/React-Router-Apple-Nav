import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = props => {
  return (
    <div className="top-nav">
      <NavLink exact to="/">
        Apple logo
      </NavLink>
      <NavLink to="/">Mac</NavLink>
      <NavLink to="/">iPad</NavLink>
      <NavLink to="/">iPhone</NavLink>
      <NavLink to="/">Watch</NavLink>
      <NavLink to="/">TV</NavLink>
      <NavLink to="/">Music</NavLink>
      <NavLink to="/">Support</NavLink>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/">Bag</NavLink>
    </div>
  );
};

export default TopNav;
