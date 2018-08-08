import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import MacBook from './MacBook';
import MacBookAir from './MacBookAir';
import MacBookPro from './MacBookPro';
import iMac from './iMac';
import iMacPro from './iMacPro';
import MacPro from './MacPro';
import MacMini from './MacMini';

const MacMain = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/macbook`}>MacBook</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/macbook-air`}>MacBook Air</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/macbook-pro`}>MacBook Pro</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/imac`}>iMac</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/imac-pro`}>iMac Pro</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/mac-pro`}>Mac Pro</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/mac-mini`}>Mac Mini</NavLink>
      </nav>
      <Route path={`${match.url}/macbook`} component={MacBook}/>
      <Route path={`${match.url}/macbook-air`} component={MacBookAir}/>
      <Route path={`${match.url}/macbook-pro`} component={MacBookPro}/>
      <Route path={`${match.url}/imac`} component={iMac}/>
      <Route path={`${match.url}/imac-pro`} component={iMacPro}/>
      <Route path={`${match.url}/mac-pro`} component={MacPro}/>
      <Route path={`${match.url}/mac-mini`} component={MacMini}/>
      
      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>MAC MAINNNNNNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default MacMain;