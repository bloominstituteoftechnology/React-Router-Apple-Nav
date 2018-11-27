import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import NavSub from './NavSub';

export default function Nav({data}) {

  return (

    <>

      <NavLink to={`/${data.name}`}>{data.name}</NavLink>

      <Route
        path={`/${data.name}`}
        render={(props) => <NavSub {...props} data={data.subLinks} />}
      />

    </>

  );

}
