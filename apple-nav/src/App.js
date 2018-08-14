import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Link to='/navItems'>Check out some Apple stuff</Link>
      <Route exact path='/navItems' component={NavWrapper} />
    </div>
  )
}

export default App;
