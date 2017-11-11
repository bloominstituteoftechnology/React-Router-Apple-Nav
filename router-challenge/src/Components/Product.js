import React from 'react';

const Product = ({ match, data }) => {
  var product = data.find(p => p.id === Number(match.params.productID));
  var productData;

  if (product)
    productData = (
      <div>
        <h3>
          {product.name}
        </h3>
      </div>
    );
    else productData = <h2></h2>

    return (
      <div>
        <div>
          {productData}
        </div>
      </div>
    );
};

export default Product;