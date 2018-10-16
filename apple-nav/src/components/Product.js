import React from 'react';

let Product = props => {
    return( 
        <div className='product'>
            <img src={props.product.icon} alt={props.product.name}></img>
            <p>{props.product.name}</p>
        </div>
    )
}

export default Product;