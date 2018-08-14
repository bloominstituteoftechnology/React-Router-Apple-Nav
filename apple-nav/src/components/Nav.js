import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment className="navigation">
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          <img src="./images/Apple-Logo.png/" alt="Apple Logo" />
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          Mac
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          iPad
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          iPhone
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          Watch
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          TV
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          Music
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink exact activeClassName="activeButton" to="/">
          Support
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Nav;
