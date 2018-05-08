import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import SubNav from '../SubNav/SubNav';
import Home from '../Pages/Home';
import './NavWrapper.css';
import headings from '../headings.js';

class NavWrapper extends Component {
  
  generateNavLinks = (headings) => {
    return headings.map(({ id, name }) => {
      return (
        <Link 
          key={id}
          to={`/${name.replace(/\s/g, '').toLowerCase()}`}
          className="link no-underline white"
        >
          {name}
        </Link>
    )});
  }

  render() {
    return(
      <div className="nav-wrapper">
        <div className="nav-upper flex justify-around items-center">
          <Link className="link no-underline white pl6" to="/"><i className="fab fa-apple fa-lg"></i></Link>
          { this.generateNavLinks(headings) }
          <i className="fas fa-search fa-sm"></i>
          <i className="fas fa-shopping-bag fa-sm pr6"></i>
        </div>
        <Route path="/:product" render={(props) => <SubNav headings={headings} {...props} />} />
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default NavWrapper;