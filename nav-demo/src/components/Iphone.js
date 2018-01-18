import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const IphoneNav = () => {
  return (
    <div className="subNav">
      <Link to="/iphone/iphone-x" className="subCategories">iPhone X</Link>
      <Link to="/iphone/iphone-8" className="subCategories">iPhone 8</Link>
      <Link to="/iphone/iphone-7" className="subCategories">iPhone 7</Link>
      <Link to="/iphone/iphone-6s" className="subCategories">iPhone 6s</Link>
      <Link to="/iphone/iphone-se" className="subCategories">iPhone SE</Link>
      <Link to="/iphone/ios-11" className="subCategories">iOS 11</Link>
      <Link to="/iphone/accessories" className="subCategories">Accessories</Link>
    </div>
  )
}

export default IphoneNav;