import React from 'react';
import { Link, Route} from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: 'MacBook',
    },
    {
      id: 2,
      name: 'MacBook Air',
    }
    {
      id: 3,
      name: 'MacBook Pro',
    }
    {
      id: 4,
      name: 'iMac',
    }
    {
      id: 5,
      name: 'iMac Pro'
    }
  ];
  var linkList = productsData.map(product => {
    return (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <h3>{linkList}</h3>
      </div>
      <Route path={`${match.url}:productId`} render={props => <Product data={productsData} {...props}/>} />
    </div>

  )
};

export default Products;