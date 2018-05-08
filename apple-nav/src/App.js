import React, { Component } from 'react';
import {  Route, Link } from "react-router-dom";
import './App.css';
import NavWrapper from "./components/navWrapper/NavWrapper";
import Nav from "./components/nav/Nav";
import SubNav from "./components/subNav/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          device: {
          name: "Mac",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "IPad",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "Iphone",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "Watch",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "TV",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "Music",
          items: ["Mac Book", "Mac Book Air"]
          }
        },
         {
          device: {
          name: "Support",
          items: ["Mac Book", "Mac Book Air"]
          }
        }
      ]
    };

  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <NavWrapper
          {...props}
          navs={this.state.navs}
          items={this.state.navs}
          />} />
        <Route path="/nav/:device" component={Nav} />
        <Route path="/nav/:device/:items" component={SubNav} />
      </div>
    );
  }
}

export default App;
