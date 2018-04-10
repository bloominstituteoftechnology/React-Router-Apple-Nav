import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Mac.css"

const Mac = () => {
  return(
    <div>
      <Nav className="subNavBar">
        <NavItem>
          <Link to="/">
            <img
              className="subMenuIcons"
              src="https://d30y9cdsu7xlg0.cloudfront.net/png/84266-200.png"
            />
            <p>
              
            </p>
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
}

export default Mac;