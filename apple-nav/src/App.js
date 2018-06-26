import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';

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
