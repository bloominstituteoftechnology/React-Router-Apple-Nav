import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopMenu from './TopMenu/TopMenu.js';
import SubMenu from './SubMenu/SubMenu.js';
import MacMenuOptions from './MacMenu/MacMenuOptions.js'
import iPadMenuOptions from './iPadMenu/iPadMenuOptions.js'
import iPhoneOptions from './iPhoneMenu/iPhoneOptions.js'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={TopMenu}/>
        <Route path='/macmenu' render={(props) => <SubMenu options={MacMenuOptions} backgroundColor={`#141414`} {...props}/>}/>
        <Route path='/ipadmenu' render={(props) => <SubMenu options={iPadMenuOptions} backgroundColor={`#F6F6F6`} {...props}/>}/>
        <Route path='/iphonemenu' render={(props) => <SubMenu options={iPhoneOptions} backgroundColor={`#141414`} {...props}/>}/>
      </div>
    );
  }
}

export default App;
