import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const WatchNav = () => {
  return (
    <div className="subNav">
      <Link to="/watch/apple-watch-series-3" className="subCategories">Apple Watch Series 3</Link>
      <Link to="/watch/apple-watch-nike-plus" className="subCategories">Apple Watch Nike+</Link>
      <Link to="/watch/apple-watch-hermes" className="subCategories">Apple Watch Hermes</Link>
      <Link to="/watch/apple-watch-edition" className="subCategories">Apple Watch Edition</Link>
      <Link to="/watch/apple-watch-series-1" className="subCategories">Apple Watch Series 1</Link>
      <Link to="/watch/watchos" className="subCategories">watchOS</Link>
      <Link to="/watch/bands" className="subCategories">Bands</Link>
      <Link to="/watch/accessories" className="subCategories">Accessories</Link>
    </div>
  )
}

export default WatchNav;