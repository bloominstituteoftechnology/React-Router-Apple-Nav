import React, { Component } from 'react';

class SubNav extends Component {
  render() {
    const products = this.props.products
    const currentCategory = this.props.match.params.category
    return (
      <div>
        {products.map(product => {
          if (product.category === currentCategory) {
            return (
              <div key={product.category}>{product.products}</div>
            )
          }
        })}
      </div>
    );
  }
}


export default SubNav;
