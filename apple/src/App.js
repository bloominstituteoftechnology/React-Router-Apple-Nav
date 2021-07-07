import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { Route } from "react-router-dom";

import Home from "./component/Home";
import Mac from "./component/Mac";
import Construction from "./component/Construction"



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/Mac" component={Mac} />
        <Route path="/iPad" component={Construction} />
        <Route path="/iPhone" component={Construction} />
        <Route path="/Watch" component={Construction} />
        <Route path="/TV" component={Construction} />
        <Route path="/Music" component={Construction} />
        <Route path="/Support" component={Construction} />
        <Route path="/Search" component={Construction} />
        <Route path="/ShoppingBag" component={Construction} />
      </div>
    );
  }
}

export default App;
