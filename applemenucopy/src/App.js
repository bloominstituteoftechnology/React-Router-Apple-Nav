import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Header from './header/header';
import SubMenuPage from './submenu/submenupage';
import Footer from './footer/footer';
import SubMenu from './submenu/submenu';
import Body from './body/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class = "main_menu"> 
          <Header/>
          <SubMenu/>
          <div>
            <div class = "SubMenuPage" ><SubMenuPage/></div> 
          </div>
        </div>
        <div class = "Footer"><Footer/></div>
      </div>
    );
  }
}

export default App;

// the ONLY function I could not get to work, was to keep the submenu rendered when it displays the individual macbooks or iphones.  It always goes away. 
//However, the main header always stays - so you can navigate thru that.  
