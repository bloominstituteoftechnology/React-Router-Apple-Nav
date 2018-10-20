import React, { Component } from 'react';
import '../../App.css';
import Nav from '../Nav/Nav';

class NavWrapper extends Component {
  render() {
    return (
      <div className="nav-wrapper">
      
     <Nav></Nav>
      
      </div>
    );
  }
}

export default NavWrapper;
