import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Support({ match }) {
  const items = [
    { path: 'contact', title: 'Contact Support' },
    { path: 'support', title: 'Support' }
  ]

  return <Submenu match={match} items={items} />
}

export default Support;