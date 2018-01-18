import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

class MainNav extends Component {
  render() {
    return (
      <div className="MainNav">
        <div className="MainNav__wrapper">
          <NavLink to="/mac" className="MainNav__link">
            Mac
          </NavLink>
          <NavLink to="/ipad" className="MainNav__link">
            iPad
          </NavLink>
          <NavLink to="/iphone" className="MainNav__link">
            iPhone
          </NavLink>
          <NavLink to="/watch" className="MainNav__link">
            Watch
          </NavLink>
          <NavLink to="/tv" className="MainNav__link">
            TV
          </NavLink>
          <NavLink to="/music" className="MainNav__link">
            Music
          </NavLink>
          <NavLink to="/support" className="MainNav__link">
            Support
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MainNav;
