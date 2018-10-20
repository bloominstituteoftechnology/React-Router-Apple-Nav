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
            <Link to="/mac">Mac</Link>
            <Link to="/ipad">iPad</Link>
            <Link to="/iphone">iPhone</Link>
            <Link to="/watch">Watch</Link>
            <Link to="/tv">TV</Link>
            <Link to="/music">Music</Link>
            <Link to="/support">Support</Link>
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
