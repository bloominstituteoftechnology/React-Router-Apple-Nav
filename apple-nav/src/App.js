import React, { Component } from 'react';
import './App.css';

import NavWrapper from "./components/NavWrapper";
import Filler from "./components/Filler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        <Filler />
      </div>
    );
  }
}

export default App;
