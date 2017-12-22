import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Header from '../Header/Header';

class Home extends React.Component {
    render() {
        return (
            <Header />
        );
    }
}

export default Home;