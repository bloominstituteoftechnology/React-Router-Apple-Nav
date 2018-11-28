import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import SubNavigation from './components/SubNavigation';

import AppleData from './components/Data/AppleData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: AppleData});
  }


  render() {
    return (
      <div className="App">
        <MainNavigation data={this.state.data}/>
        <Route 
          exact path='/:dataName'
          render={props => <SubNavigation {...props} data={this.state.data}/>}
        />
      </div>
    );
  }
}

export default App;
