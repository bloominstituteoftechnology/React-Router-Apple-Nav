import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const Categories = ['Home', 'Mac', 'iPad', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support',]

const NavWrapper = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class = "navbar-nav justify-content-between" >
        {Categories.map(item => <Nav item={item} />)}
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="./assets/search.png" alt="logo"/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="./assets/account.png" alt="logo"/></a>
        </li>
      </ul>
    </div>
  );
}

const Nav = (props) => {
  return (
    <li class="nav-item">
      <a class="nav-link" href="#">{props.item}</a>
    </li>
  );  
}

// const SubNav = (props) => {
//   return (

//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav class = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <a class = "navbar-brand"
            href = "#"> < img src = "./assets/apple.png" /> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <NavWrapper/>
          </nav>

          <nav class = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class = "navbar-nav justify-content-between" >
                <li class="nav-item active">
                  <a class="nav-link" href="#"><img src="./assets/macbook.png" alt="macbook" /><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/macbook-air.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/macbook-pro.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/imac.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/imac-pro.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/mac-pro.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  < a class = "nav-link"
                  href = "#" > < img src = "./assets/mac-mini.png"
                  alt = "macbook-pro" /> </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="./assets/accessories.png" alt="logo"/></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="./assets/sierra.png" alt="logo"/></a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="./assets/compare.png" alt="logo"/></a>
                </li>  
              </ul>
            </div>
          </nav>  
        </header>
      </div>
    );
  }
}

export default App;
