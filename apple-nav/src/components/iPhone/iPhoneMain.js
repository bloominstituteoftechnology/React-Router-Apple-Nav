import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import iPhoneX from './iPhoneX';
import iPhone8 from './iPhone8';
import iPhone7 from './iPhone7';
import iPhone6s from './iPhone6s';
import iPhoneSE from './iPhoneSE';

const iPhone = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/iphone-x`}>iPhone X</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/iphone-8`}>iPhone 8</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/iphone-7`}>iPhone 7</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/iphone-6s`}>iPhone 6s</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/iphone-se`}>iPhone SE</NavLink>
      </nav>
      <Route path={`${match.url}/iphone-x`} component={iPhoneX}/>
      <Route path={`${match.url}/iphone-8`} component={iPhone8}/>
      <Route path={`${match.url}/iphone-7`} component={iPhone7}/>
      <Route path={`${match.url}/iphone-6s`} component={iPhone6s}/>
      <Route path={`${match.url}/iphone-se`} component={iPhoneSE}/>
      
      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>IPHONE MAINNNNNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default iPhone;