import React from 'react';
import macData from '../../data';
import Product from './Product';

const Mac = () => {
    return (
        <div className="subnav mac">
            <div className="maccontainer">
                {macData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Mac;