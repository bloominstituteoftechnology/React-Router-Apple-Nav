import React from 'react';
import Data from '../data';
import Product from './Product';

const Music = () => {
    return (
        <div className="subnav ipad">
            <div className="iphonecontainer">
                {Data.musicData.map((product,i) => <Product key={i} product={product} />)}
            </div>
        </div>
    )
}

export default Music;