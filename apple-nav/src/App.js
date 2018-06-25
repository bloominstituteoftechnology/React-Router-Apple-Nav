import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import SubNavigation from './components/Navigation/SubNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />

        <Route path='/:name' render={props => <SubNavigation {...props} />} />

      </div>
    );
  }
}

export default App;
