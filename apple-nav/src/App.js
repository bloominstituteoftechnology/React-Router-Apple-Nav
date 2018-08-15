import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import './components/Nav.css';
import './components/SubNav.css';
import './components/Search.css';
import Nav from './components/Nav';
import Search from './components/Search';
import SubNav from './components/SubNav';
import { categories } from './data/navItems';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <header className='nav-wrapper'>
          <div className='navbar'>
            <div className='icon apple'>
              <Link to='/'>Apple</Link>
            </div>
            <div className='inner-div'>
              <Route 
                path='/navbar' 
                render={props => (
                  <Nav {...props}
                    categories = {categories} 
                  />
                )}
              />
              <Route path='/search' component={Search} />
            </div>
            <div className='icon search'>
              <Link to='/search'>Search</Link>
            </div>
          </div>
          <Route 
            path={'/navbar/:id'} 
            render={props => (
              <SubNav {...props}
                categories = {categories}
              />
            )}
          />
        </header>
        <div className='body-container'>
          <Route exact path='/' component={Home} />
        </div>
      </div>
    );
  }
}

function Home() {
  return (
    <div className='home-page'>
      <h1>Apple Store</h1>
      <button>
        <Link to='/navbar'>Products</Link>
      </button>
    </div>
  );
}

export default App;
