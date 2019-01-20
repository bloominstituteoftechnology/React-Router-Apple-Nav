import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './App.scss';

import DummyData from './data.js';
import NavBar from './comps/navBar.js';
import SubNavBar from './comps/subNavBar.js';
import {TweenLite} from 'gsap/all';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navData: DummyData,
      clicked: false,
    };
  }

  changeClicked = e => {
    this.setState({clicked: true});
  };

  render() {
    const {navData} = this.state;
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <div onClick={this.changeClicked} className="nav">
              <NavBar
                {...props}
                data={navData}
                changeClicked={this.changeClicked}
              />
            </div>
          )}
        />
        <Route
          path="/:products"
          render={props => (
            <SubNavBar {...props} data={navData} clicked={this.state.clicked} />
          )}
        />
      </div>
    );
  }
}

export default App;
