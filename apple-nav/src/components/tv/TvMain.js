import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleTv from './AppleTv';
import AppleTv4k from './AppleTv4k';
import TvApp from './TvApp';

const TvMain = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/apple-tv`}>Apple TV</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/apple-tv-4k`}>Apple TV 4k</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/tv-app`}>TV App</NavLink>
      </nav>
      <Route path={`${match.url}/apple-tv`} component={AppleTv}/>
      <Route path={`${match.url}/apple-tv-4k`} component={AppleTv4k}/>
      <Route path={`${match.url}/tv-app`} component={TvApp}/>

      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>TVVV MAINNNNNNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default TvMain;