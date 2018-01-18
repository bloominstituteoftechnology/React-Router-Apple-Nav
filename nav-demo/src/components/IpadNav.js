import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const IpadNav = ({ path }) => {
  return (
    <div className="subNav">
      <Link to={`${path}/ipad-pro`} className="subCategories">iPad Pro</Link>
      <Link to={`${path}/ipad`} className="subCategories">iPad</Link>
      <Link to={`${path}/ipad-mini-4`} className="subCategories">iPad Mini 4</Link>
      <Link to={`${path}/ios-11`} className="subCategories">iOS 11</Link>
      <Link to={`${path}/accessories`} className="subCategories">Accessories</Link>
    </div>
  )
}

export default IpadNav;