import React from 'react';

const ProductPage = props => {
    let linkName = props.match.params.product;
    return (
        <div>
            <p>This is the <h4>{linkName}</h4> product page!</p>
        </div>
    );
};

export default ProductPage;