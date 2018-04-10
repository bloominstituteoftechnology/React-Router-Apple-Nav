import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';

class App extends Component {
  render() {
    return (
      <NavWrapper />
    );
  }
}

export default App;
