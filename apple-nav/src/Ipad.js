import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Ipad({ match }) {
  const items = [
    { path: 'ipad-pro', title: 'iPad-Pro' },
    { path: 'ipad', title: 'iPad' },
    { path: 'ipad-mini', title: 'iPad-Mini 4' },
    { path: 'ios', title: 'iOS 11' },
    { path: 'accessories', title: 'Accessories' },
    { path: 'compare', title: 'Compare' }
  ]

  return <Submenu match={match} items={items} />
}

export default Ipad;