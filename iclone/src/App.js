import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SubMenu from './components/SubMenu';
import './App.css';

const menu = {
  menuItems: ['Mac','iPad','iPhone','Watch','TV','Music']
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iClone</h1>
          <div className="nav-buttons">
                {menu.menuItems.map(item=> <Link to={`/${item}`}>
                    {item}
                </Link>
                )}
            </div>
          <Route
            path="/:subMenu"
            render={props => <SubMenu {...props} />}
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
