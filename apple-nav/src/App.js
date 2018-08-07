import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import logo from './logo.svg';
import NavBar from './components/Nav';

import './App.css';
import products from './data';

function Products() {
  return (
    <ul>
      {products.map(product => (
        <li key = {product.id}>
          <Link to ={`/products/${product.id}`} >
          <h4>{product.name}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Product (props) {
  console.log(props.match.params.productParam);
  const param = props.match.params.id;
  const product = products.find(product => product.id===param);
  return <h1>product</h1>;
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Link to = '/products'>Products</Link>
        <Route path = '/people' component={Products} />
        <Route path = '/people/:productParam' component={Product} />
      </div>   

    );
  }
}

export default App;
