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


const products = [
  { name: 'mac', id: 1},
  { name: 'ipad', id: 2},
  { name: 'phone', id: 3},
  { name: 'watch', id: 4},
  { name: 'TV', id: 5},
  { name: 'music', id: 6},
]

function Products() {
  return (
    <ul>
      {products.map(product => (
        <li key = {product.id} >
        <h4> {product.name}</h4>
        </li>
      ))}
    </ul>
  );
}

function Product() {
  return <h1>product</h1>
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
      <div>
        <Link to = '/products'>Products</Link>
        <Route path = '/people' component={Products} />
        <Route path = '/people/:id' component={Product} />
      </div>   

    );
  }
}

export default App;
