import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';

import Body from '../body/body';
import Mac from '../submenuitems/mac';
import iPhone from '../submenuitems/iPhone';

class SubMenu extends React.Component {
  render () {
    return (
      <div className = "Body">
        <Route exact path ='/' component= {Body}/>
        <Route exact path ='/mac' component = {Mac}/>
        <Route exact path ='/iPhone' component = {iPhone}/>
      </div>
    )
  }
}

export default SubMenu;

// this page creates the main Home / Mac / iPhone header menu