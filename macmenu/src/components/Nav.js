import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../styles/nav.css'

class Nav extends Component {
  render() {
    return (
      <div className = "navbar">
        <Link to="/">Home </Link>
        <Link to="subNav1">subNav1  </Link>
        <Link to="subNav2">subNav2  </Link>
        <Link to="subNav3">subNav3  </Link>
        <Link to="subNav4">subNav4  </Link>
        <Link to="subNav5">subNav5  </Link>
        <Link to="subNav6">subNav6  </Link>
      </div>
    )
  }
}

export default Nav;