import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Mac({ match }) {
  const items = [
    { path: 'macbook', title: 'MacBook' },
    { path: 'macbook-air', title: 'Macbook Air' },
    { path: 'imac', title: 'iMac' },
    { path: 'imac-pro', title: 'iMac Pro' },
    { path: 'mac-pro', title: 'Mac Pro' },
    { path: 'mac-mini', title: 'Mac Mini' },
    { path: 'accessories', title: 'Accessories' },
    { path: 'high-sierra', title: 'High Sierra' },
    { path: 'compare', title: 'Compare' },
  ];
  
  return <Submenu match={match} items={items} />
}

export default Mac;