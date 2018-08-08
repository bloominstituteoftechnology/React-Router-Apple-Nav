import React from 'react';
import { NavLink } from 'react-router-dom';
  const SubTab = (props) => {
  return (
    <NavLink activeClassName='selected-tab' to='/'>{props.link}</NavLink>
  )
};
  export default SubTab; 