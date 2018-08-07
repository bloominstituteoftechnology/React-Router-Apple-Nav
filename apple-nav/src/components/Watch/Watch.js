import React from 'react';
import SubNav from '../SubNav';

const watchLinks = [
    {name: 'Apple Watch Series 3', url: '/watch-series-3'},
    {name: 'Apple Watch Nike+', url: '/watch-nike-plus'},
    {name: 'Apple Watch Hermes', url: '/watch-hermes'},
    {name: 'Apple Watch Edition', url: '/watch-edition'},
    {name: 'Apple Watch Series 1', url: '/watch-series-1'},
    {name: 'watchOS', url: '/watchos'},
    {name: 'Bands', url: '/watch-bands'},
    {name: 'Accessories', url: '/watch-accessories'},
    {name: 'Compare', url: '/watch-compare'}
]

const Watch = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={watchLinks} />
            <h1>{`\uf8ff`} Watch</h1>
        </div>
    )
}

export default Watch;