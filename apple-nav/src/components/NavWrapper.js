import React from 'react'
import { NavLink } from 'react-router-dom';

function NavWrapper() {
    const navItems = [
        { name: 'Mac', id: 1, subNavItems = [
            { name: 'Mac Book', id: 1 }, { name: 'Mac Book Air', id: 2 }, { name: 'Mac Book Pro', id: 3 },
            { name: 'iMac', id: 4 }, { name: 'iMac Pro', id: 5 }, { name: 'Mac Pro', id: 6 }, 
            { name: 'Mac mini', id: 7 }, { name: 'Accessories', id: 8 }, { name: 'High Sierra', id: 9 }, 
            { name: 'Compare', id: 10 }
        ]},
        { name: 'iPad', id: 2, subNavItems = [
            { name: 'iPad Pro', id: 11 }, { name: 'iPad', id: 12 }, { name: 'iPad mini 4', id: 13 }, 
            { name: 'iOS 11', id: 14 }, { name: 'Accessories', id: 15 }, { name: 'Compare', id: 16}
        ]},
        {name: 'iPhone', id: 3, subNavItems = [
            'iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare'
        ]},
        {name: 'Watch', id: 4, subNavItems = [
            'Apple Watch Series 3', 'Apple Watch Nike +','Apple Watch Hermes', 'Apple Watch Edition', 'watchOS', 'Bands', 'Accessories', 'Compare'
        ]},
        {name: 'TV', id: 5, subNavItems = [
            'Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'
        ]},
        {name: 'Music', id: 6, subNavItems = [
            'Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Accessories', 'Gift Cards'
        ]},
        {name: Support, id: 7, subNavItems = []},
        {name: search, id: 8, subNavItems = []},
        {name: bag, id: 9, subNavItems = []}
    ];
    return (
        <div className='nav-outer-shell'>
            <div className='nav-top-row'>
                <ul className='nav-items'>
                    <li className='icon'>
                        <NavLink exact activeClassName='activeNavButton' to='/navItems'>
                            icon
                        </NavLink>
                    </li>
                    {navItems.map(navItem => (
                        <li className='nav-item' key={navItem.id}>
                            <NavLink activeClassName='activeNavButton' to={`/navItems/${navItem.id}`}>
                                {navItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <Route 
                path='/navItem/:id'
                render={props => (
                <Nav {...props} navItem={navIitem}/>)}
            />        
            <div className='nav-sub-row'></div>
        </div>
    );
}

export default NavWrapper;