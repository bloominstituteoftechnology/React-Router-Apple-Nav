import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import IPhoneBody from '../body/iphonemain';

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none',
    color: 'black',
};

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

class iPhone extends React.Component {
    render() {
        return (
            <div class = "iPhone"> 
                <ul>
                <Link style={linkStyles} to="/iPhone7">iPhone7 image</Link> 
                <Link style={linkStyles} to="/iPhone7P">iPhone 7P image</Link>
                <Link style={linkStyles} to="/iPhone8">iPhone 8 image</Link>
                <Link style={linkStyles} to="/iPhone8P">iPhone 8P image</Link>
                <Link style={linkStyles} to="/iPhoneX">iPhone X image</Link>
                </ul>
                <IPhoneBody/>
            </div>
        )
    }
    
}

export default iPhone;

//to change the link to an image, simply import and reference that instead of the "iPhone 7 image" text