import React from 'react';
import {Link} from 'react-router-dom'

function Iphone(){
return (
    <div className='Navbar__Submenu'>
    <li>
      <Link to={'/iphone5'} className='Link_Submenu'>
         iphone 5
      </Link>
    </li>
    <li>
      <Link to={'/iphone6'} className='Link_Submenu'>
      iphone 6
      </Link>
    </li>
    <li>
      <Link to={'/iphone7'} className='Link_Submenu'>
      iphone 7
      </Link>
    </li>
    </div>
)
}

export default Iphone;