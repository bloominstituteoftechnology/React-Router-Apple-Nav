import React from 'react'
import musicData from '../data/musicData'
import Product from './Product'

const Music = () => {
    return (
        <div className="subnav ipad">
            <div className="iphonecontainer">
                {musicData.map((product, i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Music
