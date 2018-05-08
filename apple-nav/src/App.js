import React, { Component } from 'react';
import NavWrapper from './component/NavWrapper';
import SubNav from './component/SubNav';

import { Route } from 'react-router-dom';

const Categories = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];
const Products = [
  {
    category: 'mac',
    products: 'Mac products'
  }, 
  {
    category: 'ipad',
    products: 'iPad products'
  },
  {
    category: 'iphone', 
    products: 'iPhone products'
  },
  {
    category: 'watch',
    products: 'Watch products'
  },
  {
    category: 'tv',
    products: 'TV products'
  },
  {
    category: 'music', 
    products: 'Music products'
  },
  {
    category: 'support',
    products: 'Support products'
  }
]

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path='/' 
          render={props => 
            <NavWrapper {...props} categories={Categories}
            />
          }
        />
        {/* <Route path='/' render={props => <NavWrapper {...props} myName={this.state.something}/> } /> */}
        <Route path='/:category'
          render={props =>
            <SubNav {...props} products={Products} />
          }
        />
      </div>
    );
  }
}

export default App;
