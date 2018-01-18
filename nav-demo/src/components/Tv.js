import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const TvNav = () => {
  return (
    <div className="subNav">
      <Link to="/tv/apple-tv-4k" className="subCategories">Apple TV 4K</Link>
      <Link to="/tv/apple-tv" className="subCategories">Apple TV</Link>
      <Link to="/tv/tv-app" className="subCategories">TV App</Link>
      <Link to="/tv/accessories" className="subCategories">Accessories</Link>
    </div>
  )
}

export default TvNav;