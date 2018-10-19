import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './NavComponents/NavBar';
import NavDrawer from './NavComponents/NavDrawer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "none"
    };
  }

  render() {
    return (
      <i>
        <Route path="/" component={NavBar} />
        <Route path="/:id" component={NavDrawer} />
      </i>
    );
  }
}

export default App;
