import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { Route } from "react-router-dom";

import Home from "./component/Home";
import Mac from "./component/Mac";



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/Mac" component={Mac} />
        <Route path="/iPad" />
        <Route path="/iPhone" />
        <Route path="/Watch" />
        <Route path="/TV" />
        <Route path="Music" />
        <Route path="Support" />
        <Route path="Search" />
        <Route path="ShoppingBag" />
      </div>
    );
  }
}

export default App;
