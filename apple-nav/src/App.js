import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import SubNav from './components/SubNav';
import Content from './components/Content';
import categories from './data/navItems';

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
              <Route 
                path='/search' 
                render={props => (
                  <Search {...props}
                    categories = {categories}
                  />
                )}
              />
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
          <Route 
            path={'/navbar/:id/:prodID'}
            render={props => (
              <Content {...props}
                categories = {categories}
              />
            )}
          />
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
