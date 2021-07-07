import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu'

function Tv({ match }) {
  const items = [
    { path: 'apple-tv-4k', title: 'Apple TV 4k' },
    { path: 'apple-tv', title: 'Apple TV' },
    { path: 'tv-app', title: 'Ipad-Mini 4' },
    { path: 'accessories', title: 'Accessories' },
    { path: 'compare', title: 'Compare' },
  ]  
  return <Submenu match={match} items={items} />
}

export default Tv;