import React from 'react';

import Nav from './Nav';

export default function NavBar({data}) {

  return (

    <div className='navbar'>

      {data.map(navItem => <Nav data={navItem} />)}

    </div>

  );

}
