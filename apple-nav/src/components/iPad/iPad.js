import React from 'react';
import SubNav from '../SubNav';

const ipadLinks = [
    {name: 'iPad Pro', url: '/ipad-pro'},
    {name: 'iPad', url: '/ipad-9.7'},
    {name: 'iPad mini 4', url: '/ipad-mini-4'},
    {name: 'iOS 11', url: '/ios11'},
    {name: 'Accessories', url: '/ipad-accessories'},
    {name: 'Compare', url: '/ipad-compare'}
]

const iPad = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={ipadLinks} width={'50vw'} />
            <h1>iPad</h1>
        </div>
    )
}

export default iPad;