import React, { Component } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

class NavWrapper extends Component {
    render() {
        return (
            <div className='navWrapper-container'>
                <NavLink to='/'>
                    <i className="fab fa-apple"></i>
                </NavLink>
                <div>
                    Mac
                </div>
                <div>
                    iPad
                </div>
                <div>
                    iPhone
                </div>
                <div>
                    Watch
                </div>
                <div>
                    TV
                </div>
                <div>
                    Music
                </div>
                <div>
                    <i className="fas fa-search"></i>
                </div>
                <div>
                    <i className="fas fa-shopping-bag"></i>
                </div>
            </div>
        );
    }
}

export default NavWrapper;


