import React, { Component } from 'react';
import './App.css';
import NavWrapper from './NavWrapper';
import {Route} from 'react-router-dom';
import Home from './Home';
import Mac from './Mac';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
      </div>
    );
  }
}

export default App;
