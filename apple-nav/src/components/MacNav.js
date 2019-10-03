import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const MacNav = () => {
    return (
        <div className='MacNav'>
            <nav>
                <ul >
                    <li>
                        <img src='' alt= 'MacBook Air'/>
                        <Link to='/MacBookAir'>MacBook Air</Link>
                    </li>
                    <li>
                        <img src='' alt= 'MacBook Pro'/>    
                        <Link to='/MacBookPro'>MacBook Pro</Link>
                    </li>
                    <li>
                        <img src='' alt= 'iMac'/>
                        <Link to='/iPad'>iMac</Link>
                    </li>
                    <li>
                        <img src='' alt= 'iMac Pro'/>
                        <Link to='/iPhone'>iMac Pro</Link>
                    </li>
                    <li>
                        <img src='' alt= 'Mac Pro'/>
                        <Link to='/Watch'>Mac Pro</Link>
                    </li>
                    <li>
                        <img src='' alt= 'Mac mini'/>
                        <Link to='/TV'>Mac mini</Link>
                    </li>
                    <li>
                        <img src='' alt= 'Compare'/>
                        <Link to='/Music'>Compare</Link>
                    </li>
                    <li>
                        <img src='' alt= 'Pro Display XDR'/>
                        <Link to='/Support'>Pro Display XDR</Link>
                    </li>
                    <li>
                        <img src='' alt= 'Accessories'/>
                        <Link to='/Music'>Accessories</Link>
                    </li>
                    <li>
                        <img src='' alt= 'mac OS Catalina'/>
                        <Link to='/Support'>Catalina</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default MacNav;