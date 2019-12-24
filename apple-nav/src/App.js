import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: data[0]
    };
  }

 

  render() {
    return (
      <div className="App">
      <NavWrapper />

      <Route path="/Mac" render={props => <SubNav {...props} data={data[0]} /> } />
      <Route path="/iPad" render={props => <SubNav {...props} data={data[1]} /> } />
      <Route path="/iPhone" render={props => <SubNav {...props} data={data[2]} /> } />
      <Route path="/Watch" render={props => <SubNav {...props} data={data[3]} /> } />
      <Route path="/TV" render={props => <SubNav {...props} data={data[4]} /> } />
      <Route path="/Music" render={props => <SubNav {...props} data={data[5]} /> } />
      </div>
    );
  }
}

export default App;
