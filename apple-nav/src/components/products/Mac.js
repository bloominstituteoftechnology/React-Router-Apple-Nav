import React from 'react';
import macData from '../../data';
import Product from './Product';

const Mac = () => {
    return (
        <div className="subnav mac">
            {macData.map((product,i) => <Product key={i} product={product} />)}
        </div>
    )
}

export default Mac;