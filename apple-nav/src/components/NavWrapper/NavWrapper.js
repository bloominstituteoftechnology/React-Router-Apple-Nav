import React from "react";

import "../../App.css";
import { NavLink } from "react-router-dom";

function NavWrapper(props) {
  return (
    <NavLink exact to={`/${props.link.name}`} className="nav-links">
      {props.link.name}
    </NavLink>
  );
}

export default NavWrapper;
