import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const IphoneNav = ({ path }) => {
  return (
    <div className="subNav">
      <Link to={`${path}/iphone-x`} className="subCategories">iPhone X</Link>
      <Link to={`${path}/iphone-8`} className="subCategories">iPhone 8</Link>
      <Link to={`${path}/iphone-7`} className="subCategories">iPhone 7</Link>
      <Link to={`${path}/iphone-6s`} className="subCategories">iPhone 6s</Link>
      <Link to={`${path}/iphone-se`} className="subCategories">iPhone SE</Link>
      <Link to={`${path}/ios-11`} className="subCategories">iOS 11</Link>
      <Link to={`${path}/accessories`} className="subCategories">Accessories</Link>
    </div>
  )
}

export default IphoneNav;