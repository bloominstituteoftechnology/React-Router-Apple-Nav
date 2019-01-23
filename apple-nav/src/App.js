import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import SubNav from './components/SubNav.js'
import data from './data.js'
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super();
    this.state = {
      data
    }
  }
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => (
            <NavBar {...props} dataarray={this.state.data} />)} />
        <Route path="/:navId" render={props => (
            <SubNav {...props} dataarray={this.state.data} />)} />
      </div>
    );
  }
}

export default App;
