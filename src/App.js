import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Mac from './components/Mac';
import Ipad from './components/Ipad';
import Iphone from './components/Iphone';
import Watch from './components/Watch';
import Tv from './components/Tv';
import Music from './components/Music';
import Support from './components/Support';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='navigation'>
            <div className="nav-button">Apple Logo</div>
            <Link to="/mac" style={{ textDecoration: 'none', color: 'white'}}>Mac</Link>
            <Link to="/ipad" style={{ textDecoration: 'none', color: 'white'}}>iPad</Link>
            <Link to="/iphone" style={{ textDecoration: 'none', color: 'white'}}>iPhone</Link>
            <Link to="/watch" style={{ textDecoration: 'none', color: 'white'}}>Watch</Link>
            <Link to="/tv" style={{ textDecoration: 'none', color: 'white'}}>TV</Link>
            <Link to="/music" style={{ textDecoration: 'none', color: 'white'}}>Music</Link>
            <Link to="/support" style={{ textDecoration: 'none', color: 'white'}}>Support</Link>
            <div>Search Icon</div>
            <div>Bag Icon</div>
        </nav>
        
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={Ipad} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
      </div>
    );
  }
}

export default App;
