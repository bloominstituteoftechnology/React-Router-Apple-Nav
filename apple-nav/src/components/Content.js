import React from 'react';

function Content(props) {
    const product = props.products.find(product =>
        product.prodID === props.match.params.products.prodID);
    return (
        <div className='content'>
            <h1>{props.product.name} sucks.</h1>
        </div>
    );
}

export default Content;