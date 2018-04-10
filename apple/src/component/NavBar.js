import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Nav className="NavBar">
        <NavItem>
          <Link to="/">
            <img
              className="MenuIcons"
              src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg"
            />
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Mac">
            <h4 className="links">Mac</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/iPad">
            <h4 className="links">iPad</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/iPhone">
            <h4 className="links">iPhone</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link  to="/Watch">
            <h4 className="links">Watch</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/TV">
            <h4 className="links">TV</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Music">
            <h4 className="links">Music</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Support">
            <h4 className="links">Support</h4>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Search">
            <img
              className="MenuIcons"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
            />
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/ShoppingBag">
          <img
              className="MenuIcons"
              src="http://icon-park.com/imagefiles/paperbag_white.png"
            />
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
