import React from "react";
import logo from "../../assets/apple-logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainNav">
        <Navbar expand="md">
          <Nav classNamne="ml-auto" navbar="navbar">
            <Link to="/">
              <NavItem>
                <img src={logo} alt="apple logo" />
              </NavItem>
            </Link>
            <NavItem>
              <Link to="/mac">Mac</Link>
            </NavItem>
            <NavItem>
              <Link to="/ipad">iPad</Link>
            </NavItem>
            <NavItem>
              <Link to="/tv">TV</Link>
            </NavItem>
            <NavItem>
              <Link to="/watch">Watch</Link>
            </NavItem>
            <NavItem>
              <Link to="/music">Music</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
