import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import NavWrapper from './App';

ReactDOM.render(<Router><NavWrapper /></Router>, document.getElementById('root'));
