import React from 'react';

const Product = (props) => {
    const currentProduct = props.match.params.product;
    return ( 
        <div className="product">
            <h1>{currentProduct} Page</h1>
        </div>
    );
}
 
export default Product;