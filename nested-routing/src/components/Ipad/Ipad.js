import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import IpadMini from "./IpadMini";
import IpadExact from "./IpadExact";
import IpadPro from "./IpadPro";

class Ipad extends Component {
  render() {
    return (
      <div>
        <h1>Select Your iPad</h1>
        <Link to="/ipad/ipadExact">iPad</Link>
        <Link to="/ipad/ipad-mini">iPad mini</Link>
        <Link to="/ipad/ipad-pro">iPad Pro</Link>
        <Route path="/ipad/ipadExact" component={IpadExact}/>
        <Route exact path="/ipad/ipad-mini" component={IpadMini}/>
        <Route path="/ipad/ipad-pro" component={IpadPro}/>
      </div>
    );
  }
}

export default Ipad;