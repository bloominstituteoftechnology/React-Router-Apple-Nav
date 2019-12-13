import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const MusicNav = ({ path }) => {
  return (
    <div className="subNav">
      <Link to={`${path}/apple-music`} className="subCategories">Apple Music</Link>
      <Link to={`${path}/itunes`} className="subCategories">iTunes</Link>
      <Link to={`${path}/homepod`} className="subCategories">HomePod</Link>
      <Link to={`${path}/ipod-touch`} className="subCategories">iPod Touch</Link>
      <Link to={`${path}/music-accessories`} className="subCategories">Music Accessories</Link>
      <Link to={`${path}/gift-cards`} className="subCategories">Gift Cards</Link>
    </div>
  )
}

export default MusicNav;