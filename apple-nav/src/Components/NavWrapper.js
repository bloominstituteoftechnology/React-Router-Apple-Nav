import React, { Component } from "react";
import Nav from "./Nav";
import SubNav from "./SubNav";

class NavWrapper extends Component {
  render() {
    return (
      <>
        <Nav />
        <SubNav />
      </>
    );
  }
}

export default NavWrapper;
