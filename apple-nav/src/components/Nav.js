import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({data}) {

  return (

    <NavLink to={`/${data.name}`}>{data.name}</NavLink>

  );

}
