import React, { Component } from 'react';
import Nav from './components/Nav';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';
import productData from './data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      macData: productData[0],
      ipadData: productData[1],
      iphoneData: productData[2],
      watchData: productData[3],
      tvData: productData[4],
      musicData: productData[5]
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          path="/mac"
          render={props => <SubNav {...props} data={this.state.macData} />}
        />
        <Route
          path="/ipad"
          render={props => (
            <SubNav {...props} data={this.state.ipadData} light />
          )}
        />
        <Route
          path="/iphone"
          render={props => <SubNav {...props} data={this.state.iphoneData} />}
        />
        <Route
          path="/watch"
          render={props => (
            <SubNav {...props} data={this.state.watchData} light />
          )}
        />
        <Route
          path="/tv"
          render={props => <SubNav {...props} data={this.state.tvData} />}
        />
        <Route
          path="/music"
          render={props => (
            <SubNav {...props} data={this.state.musicData} light />
          )}
        />
      </div>
    );
  }
}

export default App;
