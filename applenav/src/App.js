import React, { Component } from "react";
import "./App.css";

import NavWrapper from "./components/Nav/NavWrapper";
import ProductsWrapper from "./components/Products/ProductsWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        <ProductsWrapper />
      </div>
    );
  }
}

export default App;
