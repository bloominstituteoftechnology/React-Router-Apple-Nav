import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import MacBook from "./MacBook";
import MacBookAir from "./MacBookAir";
import MacBookPro from "./MacBookPro";

class Mac extends Component {

  render() {
    return (
      <div>
        <h1>Select Your Mac</h1>
        <Link to="/mac/macbook">MacBook</Link>
        <Link to="/mac/macbook-air">MacBook Air</Link>
        <Link to="/mac/macbook-pro">MacBook Pro</Link>
        <Route path="/mac/macbook-air" component={MacBookAir}/>
        <Route exact path="/mac/macbook-pro" component={MacBookPro}/>
        <Route path="/mac/macbook" component={MacBook}/>
      </div>
    );
  }
}

export default Mac;
