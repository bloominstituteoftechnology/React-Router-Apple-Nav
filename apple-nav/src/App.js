import React, { Component } from "react";
import { Route } from "react-router-dom";
// import './App.css';

import NavWrapper from "./Components/NavWrapper";
import Nav from "./Components/Nav";
import SubNav from "./Components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: [
        {
          subnav: "Mac",
          navitems: [
            {
              name: "MacBook"
            },
            {
              name: "MacBook Air"
            },
            {
              name: "MacBook Pro"
            },
            {
              name: "iMac"
            },
            {
              name: "iMac Pro"
            },
            {
              name: "Mac Pro"
            },
            {
              name: "Mac mini"
            },
            {
              name: "Accessories"
            },
            {
              name: "High Sierra"
            },
            {
              name: "Compare"
            }
          ]
        },
        {
          subnav: "iPad",
          navitems: [
            "iPad Pro",
            "iPad",
            "iPad mini 4",
            "iOS 11",
            "Accessories",
            "Compare"
          ]
        },
        {
          subnav: "iPhone",
          navitems: [
            "iPad Pro",
            "iPad",
            "iPad mini 4",
            "iOS 11",
            "Accessories",
            "Compare"
          ]
        },
        {
          subnav: "Watch",
          navitems: ["gotthetime"]
        },
        {
          subnav: "TV",
          navitems: ["watchhere"]
        },
        {
          subnav: "Music",
          navitems: ["itunes"]
        },
        {
          subnav: "Support",
          navitems: ["applesupport"]
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <NavWrapper menu={this.state.nav} />
      </div>
    );
  }
}

export default App;
