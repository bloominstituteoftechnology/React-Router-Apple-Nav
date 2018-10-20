import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Mac from './components/Mac';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='navigation'>
            <div className="nav-button">Apple Logo</div>
            <Link to="/mac">Mac</Link>
            <div>iPad</div>
            <div>iPhone</div>
            <div>Watch</div>
            <div>TV</div>
            <div>Music</div>
            <div>Support</div>
            <div>Search Icon</div>
            <div>Bag Icon</div>
        </nav>
        
        <Route exact path="/mac" component={Mac} />
      </div>
    );
  }
}

export default App;
