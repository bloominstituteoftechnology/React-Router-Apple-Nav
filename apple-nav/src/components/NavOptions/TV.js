import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

class TV extends Component {
  render() {
    return (
      <div className="tv-options">
        <NavLink to="/mac">mac</NavLink>
      </div>
    );
  }
}
export default TV;
