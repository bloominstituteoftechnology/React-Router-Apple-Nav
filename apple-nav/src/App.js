import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import MyComps from './components/myComps/MyComps';
import MyPhones from './components/myPhones/MyPhones';
import MyPads from './components/myPads/MyPads';
import MainContent from './components/mainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header-wrapper'>
          <div className="top-header">
            <NavLink to='/myComps' >myComps</NavLink>
            <NavLink to='/myPhones' >myPhones</NavLink>
            <NavLink to='/myPads' >myPads</NavLink>
          </div>
          <div className='sub-header'>
          
            <Route path='/myComps' component={MyComps} />
            <Route path='/myPhones' component={MyPhones} />
            <Route path='/myPads' component={MyPads} />
          </div>
          </header>
          <MainContent />

      </div>
    );
  }
}

export default App;
