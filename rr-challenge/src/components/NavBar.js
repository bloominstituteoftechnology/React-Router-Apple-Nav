import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Away">Away</Link>
      {/* <Link>dd</Link>
      <Link>dd</Link>
      <Link>dd</Link>
      <Link>dd</Link> */}
    </div>
  );
};

export default NavBar;
