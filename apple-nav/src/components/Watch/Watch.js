import React from 'react';
import SubNav from '../SubNav';

const watchLinks = [
    {name: 'Apple Watch Series 3', url: '/watch-series-3', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_series_2_large.svg', width: '25px'},
    {name: 'Apple Watch Nike+', url: '/watch-nike-plus', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_nike_large.svg'},
    {name: 'Apple Watch Hermes', url: '/watch-hermes', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_hermes_large.svg'},
    {name: 'Apple Watch Edition', url: '/watch-edition', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_edition_large.svg'},
    {name: 'Apple Watch Series 1', url: '/watch-series-1', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_series_1_large.svg', width:'25px'},
    {name: 'watchOS', url: '/watchos', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_watch_os_large.svg'},
    {name: 'Bands', url: '/watch-bands', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_bands_large.svg'},
    {name: 'Accessories', url: '/watch-accessories', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_accessories_large.svg'},
    {name: 'Compare', url: '/watch-compare', img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_compare_large.svg'}
]

const Watch = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={watchLinks} />
            <h1>{`\uf8ff`} Watch</h1>
            <img src="img/watch.png" alt="" />
        </div>
    )
}

export default Watch;