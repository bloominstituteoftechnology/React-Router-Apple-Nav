import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../styles/nav.css'

class Nav extends Component {
  render() {
    return (
      <div className = "navbar">
        <Link to="/">Home </Link>
        <Link to="Mac">Mac1  </Link>
        <Link to="iPad">iPad  </Link>
        <Link to="Watch">Watch  </Link>
        <Link to="TV">TV  </Link>
        <Link to="Music">Music  </Link>
      </div>
    )
  }
}

export default Nav;
