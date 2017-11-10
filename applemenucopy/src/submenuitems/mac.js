import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import MacBookBody from '../body/macbookmain';

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none',
    color: 'black',
};

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

class Mac extends React.Component {
    render() {
        return (
            <div class = "Mac"> 
                <ul> 
                    <Link style={linkStyles} to="/Macbook">Macbook Image</Link>
                    <Link style={linkStyles} to="/MacbookAir">Macbook Air Image</Link>
                    <Link style={linkStyles} to="/MacbookPro">Macbook Pro Image</Link>
                    <Link style={linkStyles} to="/iMac">iMac Image</Link>
                    <Link style={linkStyles} to="/iMacPro">iMac Pro Image</Link>
                </ul>   
                <MacBookBody/>             
            </div>
        )
    }
    
}

export default Mac;

