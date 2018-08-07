import React from 'react';
import SubNav from '../SubNav';

const iphoneLinks = [
    {name: 'iPhone X', url: '/iphone-x'},
    {name: 'iPhone 8', url: '/iphone-8'},
    {name: 'iPhone 7', url: '/iphone-7'},
    {name: 'iPhone 6s', url: '/iphone-6s'},
    {name: 'iPhone SE', url: '/iphone-se'},
    {name: 'iOS 11', url: '/ios-11'},
    {name: 'Accessories', url: '/iphone-accessories'},
    {name: 'Compare', url: '/iphone-compare'}
]

const iPhone = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={iphoneLinks} width={'60vw'} />
            <h1>iPhone</h1>
        </div>
    )
}

export default iPhone;