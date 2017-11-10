import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import iPhoneSeven from '../iPhones/iPhone7';
import MacBook from '../Macs/MacBook';

class SubMenuPage extends React.Component {
  render () {
    return (
      <div>
        <Route exact path ='/iPhone7' component = {iPhoneSeven}/>
        <Route exact path ='/Macbook' component = {MacBook}/>
      </div>
    )
  }
}

export default SubMenuPage;


//this page creates the interactive submenu of the mac interface, depending if you click on mac or iphone, they both render here.  
//to make the rest of the links work, simply follow this convention with the names of the specific mac, macbook, or iphone listed 
//on /submenuitems/iphone.js or /submenuitems/mac.js
