import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

import DummyData from './data.js';
import NavBar from './comps/navBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navData: DummyData,
    };
  }
  render() {
    const {navData} = this.state;
    return (
      <div className="App">
        <Route path="/" render={() => <NavBar data={navData} />} />
      </div>
    );
  }
}

export default App;
