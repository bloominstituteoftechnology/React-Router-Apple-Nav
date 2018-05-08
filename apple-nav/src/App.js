import React, { Component } from 'react';
import {  Route, Link } from "react-router-dom";
import './App.css';
import NavWrapper from "./components/navWrapper/NavWrapper";
import Nav from "./components/nav/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          device: "Mac"
        },
        {
          device: "IPad"
        },
        {
          device: "IPhone"
        },
        {
          device: "Watch"
        },
        {
          device: "TV"
        },
        {
          device: "Music"
        },
        {
          device: "Support"
        }
      ]
    };

  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <NavWrapper {...props} navs={this.state.navs} />} />
        <Route path="/nav/:device" component={Nav} />
      </div>
    );
  }
}

export default App;
