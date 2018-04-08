import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav.js';
import SubNav from './SubNav.js';

class NavWrapper extends Component {
  render () {
    return (
      <div>
	<Nav />
	<Route path = "/:product" component={SubNav} />
      </div>

    );
  }
}

export default NavWrapper;
