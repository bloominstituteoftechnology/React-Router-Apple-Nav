import React from 'react';
import Data from '../data/data';
import Product from './Product';

const Watch = () => {
    return (
        <div className="subnav watch">
            <div className="iphonecontainer">
                {Data.watchData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Watch;