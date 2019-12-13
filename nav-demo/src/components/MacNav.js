import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const MacNav = ({ path }) => {
  return (
    <div className="subNav">
      <Link to={`${path}/macbook`} className="subCategories">MacBook</Link>
      <Link to={`${path}/macbook-air`} className="subCategories">MacBook Air</Link>
      <Link to={`${path}/macbook-pro`} className="subCategories">MacBook Pro</Link>
      <Link to={`${path}/imac`} className="subCategories">iMac</Link>
      <Link to={`${path}/imac-pro`} className="subCategories">iMac Pro</Link>
      <Link to={`${path}/mac-pro`} className="subCategories">Mac Pro</Link>
      <Link to={`${path}/mac-mini`} className="subCategories">Mac Mini</Link>
      <Link to={`${path}/accessories`} className="subCategories">Accessories</Link>
      <Link to={`${path}/high-sierra`} className="subCategories">High Sierra</Link>
    </div>
  )
}

export default MacNav;