import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
           <Router>
            <App />
           </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// Use create-react-app to make an application, name it apple-nav.
//     You'll need to build out a few components here. Some variation of a NavWrapper
//     component which will be your navigation header.
// You'll need a reusable Nav component that you can turn into a navigation link
// for each parent category.
// Lastly you're going to need some sort of SubNav component, that will be
// reusable and display your sub-navigation links for each category.
