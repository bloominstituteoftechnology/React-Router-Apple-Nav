import React from 'react';
import data from '../Data';

const Nav = () => {
    data.map(product => 
        (
            <div key={product.id}>
                {product.name}
            </div>
        )
    )
}

export default Nav;
