import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
