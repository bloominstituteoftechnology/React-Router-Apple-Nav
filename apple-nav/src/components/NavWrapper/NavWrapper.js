import React from "react";
import { Route } from "react-router-dom";
import "../../App.css";
import { NavLink } from "react-router-dom";

function NavWrapper(props) {
  return (
    <NavLink exact to={`/${props.link.name}`} className="nav-links">
      {props.link.name}
      <Route path={`/${props.link.name}`} render={() => props.link.name} />
    </NavLink>
  );
}

export default NavWrapper;
