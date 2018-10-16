import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {TopNavigation} from './Components/TopNavigation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topData: [],
      bottomData: []
    }
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <TopNavigation {...props} />}
        />
      </div>
    );
  }
}

export default App;
