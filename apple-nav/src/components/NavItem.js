import React from 'react';
import { Link } from 'react-router-dom';



const NavItems = () => {
    return (
        <div className='mainNavMenu'>
            <nav>
                <ul >
                    <li>
                        <Link to='/'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy62__slf-pGAjWfoHgYP6HQUQb1loukJsx4NZzTW08Dl2pW1nFg' alt='apple logo'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Mac'>Mac</Link>
                    </li>
                    <li>
                        <Link to='/iPad'>iPad</Link>
                    </li>
                    <li>
                        <Link to='/iPhone'>iPhone</Link>
                    </li>
                    <li>
                        <Link to='/Watch'>Watch</Link>
                    </li>
                    <li>
                        <Link to='/TV'>TV</Link>
                    </li>
                    <li>
                        <Link to='/Music'>Music</Link>
                    </li>
                    <li>
                        <Link to='/Support'>Support</Link>
                    </li>
                </ul>
            </nav>
        </div>
            

        
       
    )
}

export default NavItems;