import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const MacNav = () => {
  return (
    <div className="subNav">
      <Link to="/mac/macbook" className="subCategories">MacBook</Link>
      <Link to="/mac/macbook-air" className="subCategories">MacBook Air</Link>
      <Link to="/mac/macbook-pro" className="subCategories">MacBook Pro</Link>
      <Link to="/mac/imac" className="subCategories">iMac</Link>
      <Link to="/mac/imac-pro" className="subCategories">iMac Pro</Link>
      <Link to="/mac/mac-pro" className="subCategories">Mac Pro</Link>
      <Link to="/mac/mac-mini" className="subCategories">Mac Mini</Link>
      <Link to="/mac/accessories" className="subCategories">Accessories</Link>
      <Link to="/mac/high-sierra" className="subCategories">High Sierra</Link>
    </div>
  )
}

export default MacNav;