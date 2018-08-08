import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import SubNavBar from "./Components/SubNavBar";

/// STEP ONE: we added the data of the items to the state as an object with array sub categories
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"],
      products: {
        Mac: [
          "MacBook",
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "iMac Pro",
          "Mac Pro",
          "Mac mini"
        ],
        iPad: ["iPad Pro", "iPad", "iPad mini 4"],
        iPhone: ["iPhone X", "iPhone 8", "iPhone 7", "iPhone 6s", "iPhone SE"],
        Watch: [
          "Apple Watch Series 3",
          "Apple Watch Nike+",
          "Apple Watch Nike+",
          "Apple Watch Edition",
          "Apple Watch Series 1"
        ],
        TV: ["Apple TV 4k", "Apple TV"],
        Music: ["Apple Music", "iTunes", "HomePod", "iPod touch"],
        Support: ["Communities", "Contact Support"]
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar items={this.state.navBar} />
        <Route
          path="/:bananaurl"
          render={props => <SubNavBar {...props} items={this.state.products} />}
        />
      </div>
    );
  }
}

export default App;
