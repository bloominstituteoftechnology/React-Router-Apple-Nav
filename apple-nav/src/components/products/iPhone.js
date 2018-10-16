import React from 'react';
import Data from '../data';
import Product from './Product';

const IPhone = () => {
    return (
        <div className="subnav mac">
            <div className="iphonecontainer">
                {Data.iphoneData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default IPhone;