import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './components/Navwrapper';


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
