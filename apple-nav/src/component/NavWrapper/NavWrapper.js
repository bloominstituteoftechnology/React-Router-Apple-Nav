import React, { Component } from 'react';
import '../../App.css';
import Nav from '../Nav/Nav';
import SubNav from '../SubNav/SubNav';
class NavWrapper extends Component {
  render() {
    return (
      <div className="nav-wrapper">
      
     <Nav></Nav>
      <SubNav></SubNav>
      </div>
    );
  }
}

export default NavWrapper;
