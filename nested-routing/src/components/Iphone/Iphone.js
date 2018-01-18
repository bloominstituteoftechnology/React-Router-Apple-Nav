import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import IphoneX from "./IphoneX";
import Iphone8 from "./Iphone8";
import Iphone7 from "./Iphone7";

class Iphone extends Component {
  render() {
    return (
      <div>
        <h1>Select Your iPhone</h1>
        <Link to="/iphone/iphonex">iPhone X</Link>
        <Link to="/iphone/iphone8">iPhone 8</Link>
        <Link to="/iphone/iphone7">iPhone 7</Link>
        <Route path="/iphone/iphonex" component={IphoneX}/>
        <Route exact path="/iphone/iphone8" component={Iphone8}/>
        <Route path="/iphone/iphone7" component={Iphone7}/>
      </div>
    );
  }
}

export default Iphone;