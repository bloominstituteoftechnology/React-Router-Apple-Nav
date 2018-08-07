import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SubMenu from './components/SubMenu';
import './App.css';

const menu = {
  menuItems: ['Mac','iPad','iPhone','Watch','TV','Music'],
  macItems: ['MacBook','MacBook Air','MacBook Pro', 'iMac', 'Mac Pro', 'Mac Mini', 'Accessories'],
  ipadItems: ['iPad', 'iPad Pro', 'iPad mini 4', 'Accessories'],
  iphoneItems: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'Accessories'],
  watchItems: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'Bands', 'Accessories'],
  tvItems: ['AppleTV 4K', 'AppleTV', 'TVApp', 'Accessories'],
  musicItems: ['Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Accessories']
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iClone</h1>
          <div className="nav-buttons">
                {menu.menuItems.map((item,i)=> <Link key={i} to={`/${item}`}>
                    <button>{item}</button>
                </Link>
                )}
            </div>
          <Route
            path="/:subMenu"
            render={props => <SubMenu macItems={menu.macItems}
                                      ipadItems={menu.ipadItems}
                                      iphoneItems={menu.iphoneItems}
                                      watchItems={menu.watchItems}
                                      tvItems={menu.tvItems}
                                      musicItems={menu.musicItems}
                                                {...props} 
                                                />}
          />
        </header>
        <p className="App-intro">
          Consume, Buy, Obey
        </p>
      </div>
    );
  }
}

export default App;
