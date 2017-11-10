import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import { Home } from './Home'
import { Gaming, GamingGpus } from './Gaming'
import { Laptop } from './Laptop'
import { Mobile } from './Mobile'
import { Shield } from './Shield'
import { Upcoming } from './Upcoming'
import { Workstation } from './Workstation'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={Home} />
          <Route path='/gaming' component={Gaming} />
            <Route path='/gaming/:gpu' component={GamingGpus} />
          <Route path='/laptop' component={Laptop} />
          <Route path='/mobile' component={Mobile} />
          <Route path='/shield' component={Shield} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/workstation' component={Workstation} />
        </div>
      </Router>
    );
  }
}

export default App;
