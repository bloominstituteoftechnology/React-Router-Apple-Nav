import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MainMenu />
      </div>
    );
  }
}

export default App;
