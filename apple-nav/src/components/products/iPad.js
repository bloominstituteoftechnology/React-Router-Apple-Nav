import React from 'react';
import ipadData from '../data/ipadData';
import Product from './Product';

const IPad = () => {
    return (
        <div className="subnav ipad">
            <div className="ipadcontainer">
                {ipadData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default IPad;