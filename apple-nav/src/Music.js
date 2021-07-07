import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Music({ match }) {
  const items = [
    { path: 'apple-music', title: 'Apple Music' },
    { path: 'itunes', title: 'iTunes' },
    { path: 'homepod', title: 'HomePod' },
    { path: 'ipod-touch', title: 'iPod Touch' },
    { path: 'accessories', title: 'Music Accessories' },
    { path: 'gift-cards', title: 'Gift Cards' }
  ]
  return <Submenu match={match} items={items} />
}

export default Music;