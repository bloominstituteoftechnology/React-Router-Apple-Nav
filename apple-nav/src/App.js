import React, { Component } from 'react';
import Home from './Components/Home';
import NavWrapper from './Components/NavWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper/>
        <Home />
      </div>
    );
  }
}

export default App;
