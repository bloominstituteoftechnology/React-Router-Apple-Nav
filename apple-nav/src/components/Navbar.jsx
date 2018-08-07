import React, { Component } from "react";
import "./Navbar.css";
import NavLink from "react-router-dom/NavLink";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  navbarConstructor = () => {
    return this.props.items.map((element, index) => {
      return (
        <NavLink onClick={()=>{this.props.changePage(element)}} key={index} activeClassName='active' to={`/${element}`}>
        <div className="navItem">
          {element}
        </div>
        </NavLink>
      );
    });
  };

  render() {
    return <div className="navbarContainer">{this.navbarConstructor()}</div>;
  }
}

export default Navbar;
