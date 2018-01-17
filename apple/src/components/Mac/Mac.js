import React from 'react';
import {Link} from 'react-router-dom'

function Mac(){
return (
    <div className='Navbar__Submenu'>
    <li>
      <Link to={'/mac-air'} className='Link_Submenu'>
         MacBook air
      </Link>
    </li>
    <li>
      <Link to={'/mac-pro'} className='Link_Submenu'>
      Macbook Pro
      </Link>
    </li>
    <li>
      <Link to={'/imac'} className='Link_Submenu'>
      iMac
      </Link>
    </li>
    </div>
)
}

export default Mac;