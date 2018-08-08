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

function Product(props) {

  const param = props.match.params.id;
  const product = products.find(product => product.id=== parseInt(param, 10));

  return (
    <h1>{product.name}</h1>
  );
}


function Home() {
  return (
    <div>
      <h1> Apple Products</h1>
      <Link to="/products"> See All </Link>
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/products' component={Products} />
        <Route path = '/products/:id' component={Product} />
      </div>   

    );
  }
}

export default App;
