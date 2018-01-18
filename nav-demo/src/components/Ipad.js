import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const IpadNav = () => {
  return (
    <div className="subNav">
      <Link to="/ipad/ipad-pro" className="subCategories">iPad Pro</Link>
      <Link to="/ipad/ipad" className="subCategories">iPad</Link>
      <Link to="/ipad/ipad-mini-4" className="subCategories">iPad Mini 4</Link>
      <Link to="/ipad/ios-11" className="subCategories">iOS 11</Link>
      <Link to="/ipad/accessories" className="subCategories">Accessories</Link>
    </div>
  )
}

export default IpadNav;