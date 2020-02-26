import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavItem = props => {
  const { name, id } = props;

  return (
    <Route to='/:id'>
      <Link to={`/${id}`}>{name}</Link>
    </Route>
  );
};

export default NavItem;
