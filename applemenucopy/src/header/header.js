import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import header from './header.css';

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none',
    color: 'white',
};

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

class Header extends React.Component {
    render() {
        return (
            <div class = "header"> 
                <Link style={linkStyles} to="/">Home</Link>
                <Link style={linkStyles} to="/Mac">Mac</Link>
                <Link style={linkStyles} to="/iPhone">iPhone</Link>
            </div>
        )
    }
}

export default Header;