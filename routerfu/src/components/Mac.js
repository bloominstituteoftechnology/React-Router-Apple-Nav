import React from 'react';
import { NavLink } from 'react-router-dom';

// import { MacBook, MacBookAir, MacBookPro, Imac, ImacPro, MacPro, MacMini, Accessories, HighSierra, Compare } from './Mac';

const Mac = () => {
  return (
    <div>
      <div className="Nav-item">
        <NavLink className="Nav-link" to="/macbook" >MacBook</NavLink>
        <NavLink className="Nav-link" to="/macbook_air">MacBook Air</NavLink>
        <NavLink className="Nav-link" to="/macbook_pro">MacBook Pro</NavLink>
        <NavLink className="Nav-link" to="/imac" >iMac</NavLink>
        <NavLink className="Nav-link" to="/imac_pro" >iMac Pro</NavLink>
        <NavLink className="Nav-link" to="/mac_pro" >Mac Pro</NavLink>
        <NavLink className="Nav-link" to="/mac_mini" >Mac Mini</NavLink>
        <NavLink className="Nav-link" to="/accessories" >Accessories</NavLink>
        <NavLink className="Nav-link" to="/high_sierra" >High Sierra</NavLink>
        <NavLink className="Nav-link" to="/Compare" >Compare</NavLink>
      </div>
      <div>
        <h6>[ Available December ]</h6>
        <h1>iMac Pro</h1>
        <h3>Power to the pro.</h3>
      </div>
    </div>
  );
};

export default Mac;