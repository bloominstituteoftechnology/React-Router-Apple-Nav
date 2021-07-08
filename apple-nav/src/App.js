import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "none"
    };
  }

  render() {
    return (
      <>
        <Route path="/" component={NavBar} />
        <Route path="/:id" component={NavMenu} />
      </>
    );
  }
}

export default App;