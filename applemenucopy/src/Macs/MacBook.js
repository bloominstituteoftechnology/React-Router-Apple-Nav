import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';


class MacBook extends React.Component {
    render() {
        return (
            <div>
            <p> this will contain images and information about MackBook in the navbar </p>
            </div>
        )
    }
};

export default MacBook;

// to make the rest of the mac links work, simply follow this convention 
// and make individual exports like this one for each link on the submenuitems/mac.js