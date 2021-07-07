import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavWrapper from './Components/NavWrapper/NavWrapper.js';
import SubNavWrapper from './Components/SubNav/SubNav.js';
import Device from './Components/Device/Device.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper /> 
        <SubNavWrapper />
          <Device />        
        <SubNavWrapper />
        <SubNavWrapper />
        <SubNavWrapper />
        <SubNavWrapper />
        <SubNavWrapper />
        <SubNavWrapper />
        
      </div>
    );
  }
}

export default App;


