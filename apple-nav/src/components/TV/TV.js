import React from 'react';
import SubNav from '../SubNav';

const tvLinks = [
    {name: 'Apple TV 4K', url: '/apple-tv-4k'},
    {name: 'Apple TV', url: '/apple-tv'},
    {name: 'TV App', url: '/tv-app'},
    {name: 'Accessories', url: '/tv-accessories'},
    {name: 'Compare', url: '/tv-compare'}
]

const TV = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={tvLinks} width={'50vw'}/>
            <h1>{`\uf8ff`} TV</h1>
        </div>
    )
}

export default TV;