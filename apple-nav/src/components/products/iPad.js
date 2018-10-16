import React from 'react';
import Data from '../data';
import Product from './Product';

const IPad = () => {
    return (
        <div className="subnav ipad">
            <div className="ipadcontainer">
                {Data.ipadData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default IPad;