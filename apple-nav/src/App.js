import React, { Component } from "react";
import { Route } from "react-router-dom";
// import './App.css';

import NavWrapper from "./Components/NavWrapper";
import SubNav from "./Components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: [
        {subnav: 'Mac',
           navitems:  [
             {img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg",
             name: 'MacBook'},
             {img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg",
              name:'MacBook Air'},
            {name: "MacBook Pro",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg"},
            {name: "iMac",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg"},
            {name: "iMac Pro",
             img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_dark_large.svg"
            },
            {name: "Mac Pro",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg"
            },
            {name: "Mac mini",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg"
            },
            {name: "Accessories",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg"
            },
            {name: "High Sierra",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg"
            },
            {name: "Compare",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg"
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
            { name: "iP" },
            { name: "iPad" },
            { name: "iPad mini 4" },
            { name: "iOS 11" },
            { name: "Accessories" },
            { name: "Compare" }
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
        <Route
          path="/nav/:subnav"
          render={props => <SubNav {...props} nav={this.state.nav} />}
        />
      </div>
    );
  }
}

export default App;
