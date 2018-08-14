import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from './components/Nav';

class NavWrapper extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  
  
  render() {
    return (
      <Route>
        <Nav />
      </Route>
    );
  }
}

export default NavWrapper;
