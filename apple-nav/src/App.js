import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className = "navbar">
          <li>
            <NavLink exact activeClassName="activeNavButton" to = "/">
              Home
            </NavLink>
          </li>  
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
