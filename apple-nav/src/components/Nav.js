import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Nav = props => {
  return (
    <NavLink to={`/${props.link.name}`}>
      <p>{props.link.name}</p>
    </NavLink>
  );
};

export default Nav;
