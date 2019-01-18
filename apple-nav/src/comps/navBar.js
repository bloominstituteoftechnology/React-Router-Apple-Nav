import React from 'react';
import MainTab from './mainTab.js';
import {Route} from 'react-router-dom';
import {SubTab} from './subTab.js';

const NavBar = props => {
  return props.data.map(mainTab => {
    return (
      <div key={mainTab.name}>
        <MainTab tab={mainTab.name} />
        <Route
          path="/:mainTab"
          render={props => <SubTab {...props} name={mainTab.name} />}
        />
      </div>
    );
  });
};

export default NavBar;
