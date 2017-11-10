import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


class NavA extends Component {
  render() {
    return (
        <div className="NavBox">
            <span className="Nav"><Link to="/mac">Mac</Link></span>
            <span className="Nav"><Link to="/iPad">iPad</Link></span>
            <span className="Nav"><Link to="/iPhone">iPhone</Link></span>
        </div>
    );
  }
}

export default NavA;
