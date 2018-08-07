import React from 'react';
import SubNav from '../SubNav';

const macLinks = [
    {name: 'MacBook', url: '/macbook'},
    {name: 'MacBook Air', url: '/macbook-air'},
    {name: 'MacBook Pro', url: '/macbook-pro'},
    {name: 'iMac', url: '/imac'},
    {name: 'iMac Pro', url: '/imac-pro'},
    {name: 'Mac Pro', url: '/mac-pro'},
    {name: 'Mac mini', url: '/mac-mini'},
    {name: 'Accessories', url: '/mac-accessories'},
    {name: 'High Sierra', url: '/high-sierra'},
    {name: 'Compare', url: '/mac-compare'}
]

const Mac = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={macLinks} width={'70vw'} />
            <h1>Mac</h1>
        </div>
    )
}

export default Mac;