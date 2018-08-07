import React from 'react';
import './NavContainer.css';
import { Link } from 'react-router-dom';

const subNavElements = {
    mac: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra', 'Compare'],
    ipad: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
    iphone: ['iPhoneX', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare'],
    watch: ['Apple Watches'],
    tv: ['Apple Tvs'],
    music: ['Apple Music'],
    support: ['Support']
};

const SubNav = (props) => {
    const currentProductClass = props.match.params.productClass
    const currentElement = subNavElements[currentProductClass];
    return (
        <div className="subnav">
            {currentElement.map(el => <Link to={`/${currentProductClass}/${el}`} key={el}>{el}</Link>)}
        </div>
    )
}

export default SubNav;