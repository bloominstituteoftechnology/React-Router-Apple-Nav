import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import Tv from "./components/Tv";
import Music from "./components/Music";
import Support from "./components/Support";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/mac" render={props => <Mac {...props} />} />
        <Route path="/ipad" render={props => <Ipad {...props} />} />
        <Route path="/iphone" render={props => <Iphone {...props} />} />
        <Route path="/watch" render={props => <Watch {...props} />} />
        <Route path="/tv" render={props => <Tv {...props} />} />
        <Route path="/music" render={props => <Music {...props} />} />
        <Route path="/support" render={props => <Support {...props} />} />
      </div>
    );
  }
}

export default App;
