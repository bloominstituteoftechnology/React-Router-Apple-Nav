import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';

class iPhoneSeven extends React.Component {
    render() {
        return (
            <div>
            <p> this will contain images and information about iPhone 7 in the navbar </p>
            </div>
        )
    }
};

export default iPhoneSeven;

// to make the rest of the iphone links work, simply follow this convention 
// and make individual exports like this one for each link on the submenuitems/iphone.js