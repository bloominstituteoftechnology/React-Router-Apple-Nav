import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import footer from './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div class = "footer">
            <p> This is the Footer </p>
            </div>
        )
    }
};

export default Footer;