import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NavWrapper from "./components/NavWrapper";
import LinkNav from "./components/LinkNav";

const Categories = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];
const Products = [
  {
    category: "Mac",
    products: "Mac products"
  },
  {
    category: "iPad",
    products: "iPad products"
  },
  {
    category: "iPhone",
    products: "iPhone products"
  },
  {
    category: "Watch",
    products: "Watch products"
  },
  {
    category: "TV",
    products: "TV products"
  },
  {
    category: "Music",
    products: "Music products"
  },
  {
    category: "Support",
    products: "Support products"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => <NavWrapper {...props} categories={Categories} />}
        />
        <Route
          path="/:category"
          render={props => <LinkNav {...props} products={Products} />}
        />
      </div>
    );
  }
}

export default App;
