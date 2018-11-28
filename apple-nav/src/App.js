import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import SubNavigation from './components/SubNavigation';

import MacData from './components/Mac/MacData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      macData: MacData,
    }
  }

  render() {
    return (
      <div className="App">
        <MainNavigation />
        <Route 
          exact path='/'
          render={props => <SubNavigation {...props} data={this.state.macData}/>}
        />
      </div>
    );
  }
}

export default App;
