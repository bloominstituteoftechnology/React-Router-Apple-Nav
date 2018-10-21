import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopMenu from './TopMenu/TopMenu.js';
import SubMenu from './SubMenu/SubMenu.js';
import MacMenuOptions from './MacMenu/MacMenuOptions.js'


class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={TopMenu}/>
        <Route path='/macmenu' render={(props) => <SubMenu options={MacMenuOptions} {...props}/>}/>
      </div>
    );
  }
}

export default App;
