import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import data from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubNav from './components/SubNav/SubNav';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar data={data}/>
        <Router>
          <Switch>
            <Route path='/mac' component={SubNav} />
            <Route path='/ipad' component={SubNav} />
            <Route path='/music' component={SubNav} />
            <Route path='/tv' component={SubNav} />
            <Route path='/watch' component={SubNav} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
