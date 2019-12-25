import React from 'react'
import watchData from '../data/iWatchData'
import Product from './Product'

const Watch = () => {
    return (
        <div className="subnav watch">
            <div className="iphonecontainer">
                {watchData.map((product, i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Watch
