import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


class NavBMac extends Component {
  render() {
    return (
      <div className="NavBox">
      <span className="Nav"><Link to="/mac/MacBook">MacBook</Link></span>
      <span className="Nav"><Link to="/mac/MacBookPro">MacBook Pro</Link></span>
      <span className="Nav"><Link to="/mac/iMac">iMac</Link></span>
      </div>
    );
  }
}

export default NavBMac;
