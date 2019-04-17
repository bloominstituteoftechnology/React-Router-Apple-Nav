import React, { Component } from "react";
import Nav from "./Nav";

class NavWrapper extends Component {
  render() {
    return (
      <div>
        {this.props.navs.map(nav => (
          <Nav nav={nav} handleClick={() => this.props.handleClick(nav)} />
        ))}
      </div>
    );
  }
}

export default NavWrapper;
