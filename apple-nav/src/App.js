import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";
import SubMenu from "./components/SubMenu";
import navData from "./components/navData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          subnav: "Mac",
          navItems: [
            { name: "MacBook" },
            { name: "MacBook Air" },
            { name: "MacBook Pro" },
            { name: "iMac" },
            { name: "iMac Pro" },
            { name: "Mac Pro" },
            { name: "Mac mini" },
            { name: "Accessories" },
            { name: "High Sierra" },
            { name: "Compare" }
          ],
          id: 1
        },

        {
          subnav: "iPad",
          navItems: [
            { name: "iPad Pro" },
            { name: "iPad" },
            { name: "iPad mini 4" },
            { name: "iOS 11" },
            { name: "Accessories" },
            { name: "Compare" }
          ],
          id: 2
        },

        {
          subnav: "iPhone",
          navItems: [
            { name: "iPhone X" },
            { name: "iPhone 8" },
            { name: "iPhone 7" },
            { name: "iPhone 6s" },
            { name: "iPhone SE" },
            { name: "iOS 11" },
            { name: "Accessories" },
            { name: "Compare" }
          ],
          id: 3
        },

        {
          subnav: "Watch",
          navItems: [
            { name: "Apple Watch Series 3" },
            { name: "Apple Watch Nike+" },
            { name: "Apple Watch Hermes" },
            { name: "Apple Watch Edition" },
            { name: "Apple Watch Series 1" },
            { name: "watchOS" },
            { name: "Bands" },
            { name: "Accessories" },
            { name: "Compare" }
          ],
          id: 4
        },

        {
          subnav: "TV",
          navItems: [
            { name: "Apple TV 4K" },
            { name: "Apple TV" },
            { name: "TV App" },
            { name: "Accessories" },
            { name: "Compare" }
          ],
          id: 5
        },

        {
          subnav: "Music",
          navItems: [
            { name: "Apple Music" },
            { name: "iTunes" },
            { name: "HomePod" },
            { name: "iPod touch" },
            { name: "Music Accessories" },
            { name: "Gift Cards" }
          ],
          id: 6
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <NavWrapper nav={this.state.nav} />
        <Route
          path="/nav/:subnav"
          render={props => <SubNav {...props} nav={this.state.nav} />}
        />
      </div>
    );
  }
}

export default App;
