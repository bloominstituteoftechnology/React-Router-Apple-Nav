import React from 'react';
import { NavLink } from 'react-router-dom';

const Sublink = (props) => {
  return (
    <NavLink activeClassName='selected-tab' to='/'>{props.link}</NavLink>
  )
};

export default Sublink;
