import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return <NavLink to={`/${props.navInfo}/`}>{`${props.navInfo}`}</NavLink>;
}

export default Nav;
