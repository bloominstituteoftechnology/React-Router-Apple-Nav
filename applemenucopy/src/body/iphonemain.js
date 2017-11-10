import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
import body from './body.css';

class IPhoneBody extends React.Component {
    render() {
        return (
            <div class = "body">
            <p> this will contain images and information about ALL IPHONES!!!!! </p>
            </div>
        )
    }
};

export default IPhoneBody;