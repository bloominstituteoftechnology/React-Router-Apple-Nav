import React from 'react';
import './NavContainer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const subNavElements = {
    mac: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra', 'Compare'],
    ipad: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
    iphone: ['iPhoneX', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare'],
    watch: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'watchOS', 'Bands', 'Accessories', 'Compare'],
    tv: ['Apple TV 4k', 'Apple TV', 'TV App', 'Accessories', 'Compare'],
    music: ['Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Accessories', 'Gift Cards'],
    support: ['Support']
};

const SubNav = (props) => {
    const currentProductClass = props.match.params.productClass
    const currentElement = subNavElements[currentProductClass];
    return (
        <div className="subnav">       
            {currentElement.map(el => <div className="subnavElement" key={el}><Link to={`/${currentProductClass}/${el}`}>{el}</Link></div>)}   
        </div>
    )
}

export default SubNav;