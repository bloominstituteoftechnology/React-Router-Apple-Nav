import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mac">Mac</NavLink>
        <NavLink to="/ipad">iPad</NavLink>
        <NavLink to="/iphone">iPhone</NavLink>
      </div>
    );
  }
}

export default Nav;
