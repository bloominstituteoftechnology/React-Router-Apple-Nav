import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Navbar } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
