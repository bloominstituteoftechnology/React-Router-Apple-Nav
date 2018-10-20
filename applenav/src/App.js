import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     data: Data
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) =>  <TopBar {...props} navs={this.state.data.nav}/>} />
        <Route exact path="/:product" render={(props) => <Nav {...props} navs={this.state.data.nav}/>} />
      </div>
    );
  }
}

export default App;
