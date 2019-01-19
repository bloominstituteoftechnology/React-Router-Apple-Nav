import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './App.scss';

import DummyData from './data.js';
import NavBar from './comps/navBar.js';
import SubNavBar from './comps/subNavBar.js';

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
        <Route
          path="/:products"
          render={props => <SubNavBar {...props} data={navData} />}
        />
      </div>
    );
  }
}

export default App;
