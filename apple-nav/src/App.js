import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TopMenu from './TopMenu.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={TopMenu} />
      </div>
    );
  }
}

export default App;
