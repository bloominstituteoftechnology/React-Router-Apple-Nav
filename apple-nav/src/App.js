import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainNavigation from './Components/MainNavigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={MainNavigation} />
      </div>
      </Router>
    );
  }
}

export default App;
