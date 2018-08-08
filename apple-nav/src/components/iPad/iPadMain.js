import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import iPad from './iPad';
import iPadMini4 from './iPadMini4';
import iPadPro from './iPadPro';

const iPadMain = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/ipad`}>iPad</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/ipad-mini-4`}>iPad Mini 4</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/ipad-pro`}>iPad Pro</NavLink>
      </nav>
      <Route path={`${match.url}/ipad`} component={iPad}/>
      <Route path={`${match.url}/ipad-mini-4`} component={iPadMini4}/>
      <Route path={`${match.url}/ipad-pro`} component={iPadPro}/>
      
      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>IPAD MAIIINNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default iPadMain;