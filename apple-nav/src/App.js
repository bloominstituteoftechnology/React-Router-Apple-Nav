import React, { Component } from 'react';
import './App.css';


import NavWrapper from './components/NavWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavWrapper />
        </header>
      </div>
    );
  }
}

export default App;
