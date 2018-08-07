import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavContainer } from './components/NavComponent';
import { SubNav } from './components/SubNavComponent';
import {
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavContainer />
        </div>
        <div className="subNav">
          <Route path="/:product" component={SubNav} />
        </div>
      </div>
      
    );
  }
}

function Home (porps){

}

export default App;
