import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/navwrapper';
import { BrowserRouter as Router, Route,  NavLink} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavWrapper} />
      </div>
    );
  }
}

export default App;
