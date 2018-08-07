import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import MacBook from './MacBook';
import MacBookAir from './MacBookAir';
import MacBookPro from './MacBookPro';
import iMac from './iMac';
import iMacPro from './iMacPro';
import MacPro from './MacPro';
import MacMini from './MacMini';

const Mac = () => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to="/mac/macbook">MacBook</NavLink>
        <NavLink activeClassName="selected" to="/mac/macbook-air">MacBook Air</NavLink>
        <NavLink activeClassName="selected" to="/mac/macbook-pro">MacBook Pro</NavLink>
        <NavLink activeClassName="selected" to="/mac/imac">iMac</NavLink>
        <NavLink activeClassName="selected" to="/mac/imac-pro">iMac Pro</NavLink>
        <NavLink activeClassName="selected" to="/mac/mac-pro">Mac Pro</NavLink>
        <NavLink activeClassName="selected" to="/mac/mac-mini">Mac Mini</NavLink>
      </nav>
      <Route path="/mac/macbook" component={MacBook}/>
      <Route path="/mac/macbook-air" component={MacBookAir}/>
      <Route path="/mac/macbook-pro" component={MacBookPro}/>
      <Route path="/mac/imac" component={iMac}/>
      <Route path="/mac/imac-pro" component={iMacPro}/>
      <Route path="/mac/mac-pro" component={MacPro}/>
      <Route path="/mac/mac-mini" component={MacMini}/>
      
      {/*~~~~~~*/}

      <div>
        <h1>Helloooofg</h1>
      </div>
   </div>
  );
};

export default Mac;