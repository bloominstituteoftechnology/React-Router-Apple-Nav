import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleMusic from './AppleMusic';
import HomePod from './HomePod';
import iPodTouch from './iPodTouch';
import iTunes from './iTunes';

const MusicMain = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/apple-music`}>Apple Music</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/home-pod`}>Home Pod</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/ipod-touch`}>iPod Touch</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/itunes`}>iTunes</NavLink>
      </nav>
      <Route path={`${match.url}/apple-music`} component={AppleMusic}/>
      <Route path={`${match.url}/home-pod`} component={HomePod}/>
      <Route path={`${match.url}/ipod-touch`} component={iPodTouch}/>
      <Route path={`${match.url}/itunes`} component={iTunes}/>
      
      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>MUSIC MAINNNNNNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default MusicMain;