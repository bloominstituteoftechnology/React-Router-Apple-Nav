import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/navwrapper';
import { BrowserRouter as Router, Route,  NavLink} from "react-router-dom";

import appleitems from "./data/appleitems";

class App extends Component {
  render() {
    // console.log(appleitems);
    return (
      <div className="App">
        <Route path="/" render={props => <NavWrapper {...props} appleitems={appleitems} />} />
      </div>
    );
  }
}

export default App;
