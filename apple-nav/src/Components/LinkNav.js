import React, { Component } from "react";

class LinkNav extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          if (product.category === this.props.match.params.category) {
            return <div key={product}>{product.products}</div>;
          }
        })}
      </div>
    );
  }
}

export default LinkNav;
