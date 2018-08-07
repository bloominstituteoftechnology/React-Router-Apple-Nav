import React from 'react';

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
    const currentElement = subNavElements[props.match.params.product];
    return (
        <div className="subnav">
            {currentElement.map(el => <p key={el}>{el}</p>)}
        </div>
    )
}

export default SubNav;