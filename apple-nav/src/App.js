import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

// components
import NavWrapper from './comp/navwrapper/NavWrapper';
import TopNavSub from './comp/navwrapper/topnav/TopNavSub';

class App extends Component {
  render() {
    return (
      <nav>
        <Route path='/' component={ NavWrapper } />
        <Route path='/:product' component={ TopNavSub } />
      </nav>
    );
  }
}

export default App;
