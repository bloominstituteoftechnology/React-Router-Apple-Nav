import React from 'react';
import './Ipad.css';
import {Link} from 'react-router-dom'

function Ipad(){
return (
    <div className='Navbar__Submenu'>
        <li>
          <Link to={'/ipad-air'} className='Link_Submenu'>
             ipad Air
          </Link>
        </li>
        <li>
          <Link to={'/ipad-mini'} className='Link_Submenu'>
            ipad Mini
          </Link>
        </li>
        <li>
          <Link to={'/ipad-pro'} className='Link_Submenu'>
            ipad Pro
          </Link>
        </li>
    </div>
)
}

export default Ipad;