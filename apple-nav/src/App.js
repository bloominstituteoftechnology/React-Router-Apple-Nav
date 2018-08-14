import React, { Component } from 'react';
import './App.css';
import './components/nav-data';
import NavWrapper from "./components/NavWrapper";
import { Browswer as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/Nav" component={NavWrapper} />
      </div>
    );
  }
}

export default App;
