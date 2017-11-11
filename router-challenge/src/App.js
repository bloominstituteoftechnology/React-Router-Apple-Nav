import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import Category from './Components/Category';
import Products from './Components/Product';

  /* Home Component */
  const Home = () => (
    <div>
    <h2>Home</h2>
    </div>
  )
  /* Macs component */
  const Macs = () => (
    <div>
    <h2>Mac</h2>
    </div>
  )
  /* Products components */
  const MacBook = () => (
    <div>
    <h2>MacBook</h2>
    </div>
  )
  const MacBookAir = () => (
    <div>
    <h2>MacBook Air</h2>
    </div>
  )
  const MacBookPro = () => (
    <div>
    <h2>MacBook Pro</h2>
    </div>
  )
  const iMac = () => (
    <div>
    <h2>iMac</h2>
    </div>
  )
  const iMacPro = () => (
    <div>
    <h2>iMac Pro</h2>
    </div>
  )



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Macs">Macs</Link></li>
          </ul>
        </nav>

        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Macs" component={Category}/>
        </Switch>
      </div>
    );
  }
}

export default App;
