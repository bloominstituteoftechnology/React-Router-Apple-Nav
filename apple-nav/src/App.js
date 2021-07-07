import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import SubNav from "./components/SubNav";

const data = [
    {name: 'Mac',
    id: 1,
    products: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini']},
    {name: 'iPad',
    id: 2,
    products: ['iPad Pro', 'iPad', 'iPad mini 4']},
    {name: 'iPhone',
    id: 3,
    products: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE']},
    {name: 'Watch',
    id: 4,
    products: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1']},
    {name: 'TV',
    id: 5,
    products: ['Apple TV 4K', 'Apple TV', 'TV App']},
    {name: 'Music',
    id: 6,
    products: ['Apple Music', 'iTunes', 'HomePod', 'iPod touch']}
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: data
    }
  }

  render() {
    return (
      <div>
        <Route
            path="/"
            render={(props) => <Nav {...props} categories={this.state.categories} />}
          />
          <Route
            path="/:categoryName"
            render={(props) => <SubNav {...props} categories={this.state.categories} />}
          />
      </div>
    )
  }
}

export default App;

