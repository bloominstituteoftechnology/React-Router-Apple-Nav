import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Mac from "./components/Mac";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" render={props => <Nav {...props} />} />
        <Route path="/mac" component={Mac} />
      </React.Fragment>
    );
  }
}

export default App;
