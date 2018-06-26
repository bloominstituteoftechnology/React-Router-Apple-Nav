import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import SubNav from '../SubNav/SubNav';

export default class NavWrapper extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <Route path="/" component={Nav} />
        <Route path="/product/:productId" component={SubNav} />
      </div>
    );
  }
}
