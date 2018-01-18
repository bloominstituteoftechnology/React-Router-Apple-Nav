import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const MusicNav = () => {
  return (
    <div className="subNav">
      <Link to="/music/apple-music" className="subCategories">Apple Music</Link>
      <Link to="/music/itunes" className="subCategories">iTunes</Link>
      <Link to="/music/homepod" className="subCategories">HomePod</Link>
      <Link to="/music/ipod-touch" className="subCategories">iPod Touch</Link>
      <Link to="/music/music-accessories" className="subCategories">Music Accessories</Link>
      <Link to="/music/gift-cards" className="subCategories">Gift Cards</Link>
    </div>
  )
}

export default MusicNav;