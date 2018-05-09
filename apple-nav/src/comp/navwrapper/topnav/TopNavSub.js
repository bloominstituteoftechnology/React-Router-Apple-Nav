import React, { Component } from 'react';

import { subNavLinks } from './navigationData';

export default class TopNavSub extends Component {
  constructor(props) {
    super(props);
    //This could be extracted to avoid repetition, I'm copy-pasting it
    const currentProduct = Object.keys(subNavLinks).filter(subNavLinksKey => subNavLinksKey === this.props.match.params.product);

    this.state = {
      navLinks: subNavLinks[currentProduct[0]],
      product: this.props.match.params.product,
      currentProduct
    }
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    const currentProduct = Object.keys(subNavLinks).filter(subNavLinksKey => subNavLinksKey === nextProps.match.params.product);

    return {
      product: nextProps.match.params.product,
      navLinks: subNavLinks[currentProduct[0]],
      currentProduct
    };
  }

  render() {
    return (
      (!this.state.navLinks)
        ?
        null
        :
        <ul>
          {
            this.state.navLinks.map(product => {
              return (
                <li key={product}>{product}</li>
              )
            })
          }
        </ul>
    )
  }
};