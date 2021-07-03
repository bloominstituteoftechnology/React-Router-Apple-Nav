import React, { Component } from 'react';
import NavWrapper from './Components/NavWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavWrapper/>
        </header>
      </div>
    );
  }
}

export default App;
