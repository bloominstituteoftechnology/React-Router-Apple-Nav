import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Nav className="NavBar">
        <NavItem>
          <NavLink className="NavStyle" href="/">
            <img
              className="AppleIcon"
              src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg"
            />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <h4 className="links">Mac</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/iPad">
            <h4 className="links">iPad</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/iPhone">
            <h4 className="links">iPhone</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Watch">
            <h4 className="links">Watch</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/TV">
            <h4 className="links">TV</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Music">
            <h4 className="links">Music</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Support">
            <h4 className="links">Support</h4>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Search">
            <img
              className="MenuIcons"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
            />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/ShoppingBag">
          <img
              className="MenuIcons"
              src="http://icon-park.com/imagefiles/paperbag_white.png"
            />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
