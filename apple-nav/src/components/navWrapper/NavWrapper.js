import React from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";

class NavWrapper extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div>
        <h1> From NavWrapper</h1>
        {this.props.navs.map((nav, index) => {
          return <div key={index}> <Nav nav={nav.device} /> </div>
        })}
      </div>

    )
  }
}

export default NavWrapper;

