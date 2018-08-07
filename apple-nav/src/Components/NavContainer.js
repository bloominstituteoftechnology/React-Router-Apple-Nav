import React from 'react';
import Nav from './Nav';
import './NavContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavElements = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

const NavContainer = (props) => {
    return (
        <div className="nav-container">
            <div className="main-nav">
                <Link to="/"><FontAwesomeIcon icon={['fab', 'apple']} className="icon" /></Link>
                {NavElements.map(element => <Nav key={element} name={element} />)}
                <FontAwesomeIcon icon="search" />
                <FontAwesomeIcon icon="shopping-bag" />
            </div>
        </div>
    )
}

export default NavContainer;