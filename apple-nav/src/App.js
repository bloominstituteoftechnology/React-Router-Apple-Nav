import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import SubNav from './components/SubNav';
import Content from './components/Content';
import subMenus from '../data/navItems';

class App extends Component {
  render() {
    return (
      <div className='home-page'>
        <div>
          <Route path='/' component={NavWrapper} />
        </div>
        <div>
          <Route 
            path='/navbar/:id/{subMenu.item}'
            component={Content}
          />
        </div>
      </div>
    );
  }
}

function NavWrapper() {
  return (
    <div className='outer-shell'>
      <header className='nav-wrapper'>
        <div className='nav-bar'>
          <div className='icon'>
            <NavLink exact activeClassName='activeNavButton' to='/navbar'>
              icon
            </NavLink>
          </div>
          <div>  
            <Route path='/navbar' component={Nav} />
            <Route path='/search' component={Search} />
          </div>
          <div className='search'>
            <NavLink activeClassName='activeNavButton' to='/search'>
              Search
            </NavLink>
          </div>
        </div>
        <div className='sub-nav-bar'>
          <Route path='/navbar/:id' component={SubNav} />
        </div>
      </header>
    </div>
  );
}

export default App;
