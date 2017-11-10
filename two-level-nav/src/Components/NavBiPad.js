import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class NavBiPad extends Component {
  render() {
    return (
      <div className="NavBox">
      <span className="Nav"><Link to="/iPad/iPad">iPad</Link></span>
      <span className="Nav"><Link to="/iPad/iPadPro">iPad Pro</Link></span>
      <span className="Nav"><Link to="/iPad/iPadAccessories">iPad Accessories</Link></span>
      </div>
    );
  }
}

export default NavBiPad;
