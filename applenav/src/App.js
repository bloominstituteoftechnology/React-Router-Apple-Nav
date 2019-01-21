import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper/>
        <Route exact path="/" />
        <Route path="/mac"/>
        <Route path="/ipad"/>
        <Route path="/iphone"/>
        <Route path="/watch"/>
        <Route path="/tv"/>
        <Route path="/music"/>
        <Route path="/support"/>
      </div>
    );
  }
}

export default App;
