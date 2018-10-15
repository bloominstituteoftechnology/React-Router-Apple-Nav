import React from 'react';
import iphoneData from '../data/iphoneData';
import Product from './Product';

const IPhone = () => {
    return (
        <div className="subnav mac">
            <div className="iphonecontainer">
                {iphoneData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default IPhone;