import React from 'react';
import Data from '../data/data';
import Product from './Product';

const Mac = () => {
    return (
        <div className="subnav mac">
            <div className="maccontainer">
                {Data.macData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Mac;