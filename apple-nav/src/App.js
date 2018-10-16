import React, { Component } from 'react';
import { Route } from 'react-rotuer-dom';

import NavWrapper from './Components/NavWrapper/NavWrapper';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
