import React from 'react'
import tvData from '../data/tvData'
import Product from './Product'

const TV = () => {
    return (
        <div className="subnav mac">
            <div className="ipadcontainer">{tvData.map((product, i) => <Product key={i} product={product} />)}</div>
        </div>
    )
}

export default TV
