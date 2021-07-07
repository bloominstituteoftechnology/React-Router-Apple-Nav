import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import NavWrapper from './components/NavWrapper'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path ='/' component={NavWrapper} />
        <Route path = '/:category' component={Nav}  />
      </div>
    );
  }
}
