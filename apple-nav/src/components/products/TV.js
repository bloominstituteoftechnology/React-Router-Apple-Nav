import React from 'react';
import Data from '../data/data';
import Product from './Product';

const TV = () => {
    return (
        <div className="subnav mac">
            <div className="ipadcontainer">
                {Data.tvData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default TV;