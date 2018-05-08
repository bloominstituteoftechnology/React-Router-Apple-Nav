import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  MainNav,
  SubNav,
  SubNavItem
} from './components';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']
    }
  }
  
  
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MainNav sections={this.state.sections} />
        <Route path="/:section" component={SubNav} />
      </div>
    );
  }
}

export default App;
 