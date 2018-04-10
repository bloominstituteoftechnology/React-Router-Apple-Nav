import React from 'react';
import { NavLink } from 'react-router-dom';

function Music() {
  return (
    <div className="Submenu">
      <NavLink to="/apple-music">Apple Music</NavLink>
      <NavLink to="/itunes">iTunes</NavLink>
      <NavLink to="/homepod">HomePod</NavLink>
      <NavLink to="/ipod-touch">iPod touch</NavLink>
      <NavLink to="/accessroies"> Music Accessories</NavLink>
      <NavLink to="/gift-cards">Gift Cards</NavLink>
    </div>
  )
}

export default Music;