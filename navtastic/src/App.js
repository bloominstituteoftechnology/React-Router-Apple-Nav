import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello World</h1>
          <ul>
            <li><Link className="link" to="/About">About</Link></li>
            <li><Link className="link" to="/Christmas">Christmas</Link></li>
            <li><Link className="link" to="/happy">Happy</Link></li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
