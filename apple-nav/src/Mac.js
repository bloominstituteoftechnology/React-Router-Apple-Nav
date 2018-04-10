import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Mac({ match }) {
  const items = [
    { path: 'macbook', title: 'MacBook', glyph: '' },
    { path: 'macbook-air', title: 'Macbook Air', glyph: '' },
    { path: 'imac', title: 'iMac', glyph: '' },
    { path: 'imac-pro', title: 'iMac Pro', glyph: '' },
    { path: 'mac-pro', title: 'Mac Pro', glyph: '' },
    { path: 'mac-mini', title: 'Mac Mini', glyph: '' },
    { path: 'accessories', title: 'Accessories', glyph: '' },
    { path: 'high-sierra', title: 'High Sierra', glyph: '' },
    { path: 'compare', title: 'Compare', glyph: '' },
  ];
  
  return <Submenu match={match} items={items} />
}

export default Mac;