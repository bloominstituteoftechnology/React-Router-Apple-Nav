import React, { Component } from 'react';
import './App.css';
import MainNavigation from './components/MainNavigation';
import SubNavigation from './components/SubNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigation />
        <SubNavigation />
      
      </div>
    );
  }
}

export default App;
