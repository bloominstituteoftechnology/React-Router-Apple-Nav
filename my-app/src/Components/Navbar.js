import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = props => {
  return (
    <div className="wrapper">
      {props.items.map(item => (
        <NavLink to={`/${item}`} activeClassName="active">
          {item}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
