import React from 'react';
import { Link } from 'react-router-dom';
import { FlexContainerBlack } from './Styles/Index';

const Nav = props => {
    return (
        <div>
            <FlexContainerBlack>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                <Link to='/mac' style={{ textDecoration: 'none', color: 'white' }}>Mac</Link>
                <Link to='/ipad' style={{ textDecoration: 'none', color: 'white' }}>iPad</Link>
                <Link to='/iphone' style={{ textDecoration: 'none', color: 'white' }}>iPhone</Link>
                <Link to='/watch' style={{ textDecoration: 'none', color: 'white' }}>Watch</Link>
                <Link to='/tv' style={{ textDecoration: 'none', color: 'white' }}>TV</Link>
                <Link to='/music' style={{ textDecoration: 'none', color: 'white' }}>Music</Link>
            </FlexContainerBlack>
        </div>
    );
};

export default Nav;