import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const TvNav = ({ path }) => {
  return (
    <div className="subNav">
      <Link to={`${path}/apple-tv-4k`} className="subCategories">Apple TV 4K</Link>
      <Link to={`${path}/apple-tv`} className="subCategories">Apple TV</Link>
      <Link to={`${path}/tv-app`} className="subCategories">TV App</Link>
      <Link to={`${path}/accessories`} className="subCategories">Accessories</Link>
    </div>
  )
}

export default TvNav;