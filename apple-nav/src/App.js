import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TopMenu from './TopMenu.js';
import dummyData from './dummy-data';
import SubMenu from './SubMenu.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuData: dummyData
    };
  }


  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (
          <TopMenu menuData={this.state.menuData} />
        )} />

        <Route path="/categories/:id" render={(props) => (
          <SubMenu {...props} menuData={this.state.menuData} />
        )} />



      </div>
    );
  }
}

export default App;
