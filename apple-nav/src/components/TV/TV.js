import React from 'react';
import SubNav from '../SubNav';

const tvLinks = [
    {name: 'Apple TV 4K', url: '/apple-tv-4k', img: 'https://www.apple.com/v/tv/home/d/images/home/apple_tv_light_large.svg'},
    {name: 'Apple TV', url: '/apple-tv', img: 'https://www.apple.com/v/tv/home/d/images/home/apple_tv_light_large.svg'},
    {name: 'TV App', url: '/tv-app', img: 'https://www.apple.com/v/tv/home/d/images/home/tvapp_light_large.svg'},
    {name: 'Accessories', url: '/tv-accessories', img: 'https://www.apple.com/v/tv/home/d/images/home/accessories_light_large.svg'},
    {name: 'Compare', url: '/tv-compare', img: 'https://www.apple.com/v/tv/home/d/images/home/compare_light_large.svg'}
]

const TV = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={tvLinks} width={'50vw'}/>
            <h1>{`\uf8ff`} TV</h1>
            <img src="img/tv.png" alt="" />
        </div>
    )
}

export default TV;