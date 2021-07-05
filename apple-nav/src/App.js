import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Navigation from './components/Navigation';
import SubNav from './components/SubNav';
import navData from './Nav-data';

class App extends Component {
  constructor () {
    super();
    this.state = {
    navlinks: []
  }
  }

  componentDidMount() {
    this.setState({navlinks: navData})
  }
  render() {
    return (
      <div>
        <Route path='/' component={NavWrapper} />
        <Route path='/navigation' component={Navigation} />
        <Route path='/subnav' component={SubNav} />
      </div>
    );
  }
}

export default App;
