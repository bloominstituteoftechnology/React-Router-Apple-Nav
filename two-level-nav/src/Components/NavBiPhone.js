import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


class NavBiPhone extends Component {
  render() {
    return (
      <div className="NavBox">
      <span className="Nav"><Link to="/iPhone/iPhone7">iPhone 7</Link></span>
      <span className="Nav"><Link to="/iPhone/iPhone8">iPhone 8</Link></span>
      <span className="Nav"><Link to="/iPhone/iPhoneX">iPhone X</Link></span>
      </div>
    );
  }
}

export default NavBiPhone;
