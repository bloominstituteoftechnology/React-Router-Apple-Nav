import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

// components
import NavWrapper from './comp/navwrapper/NavWrapper';

class App extends Component {
  render() {
    return (
      <Route path='/' component={ NavWrapper } />
    );
  }
}

export default App;
