import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavItem = props => {
  const { name, id } = props;

  return (
    <Route to='/:id'>
      <div>{name}</div>
    </Route>
  );
};

export default NavItem;
