import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Away from './components/Away';
import ForGood from './components/ForGood';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Away" component={Away} />
        <Route path="/Away/ForGood" component={ForGood} />
      </div>
    );
  }
}

export default App;
