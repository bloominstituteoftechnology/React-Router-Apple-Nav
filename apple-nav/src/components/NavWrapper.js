import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Nav from './Nav';




export default class NavWrapper extends Component  {

    render () {
        return (
            <div className={"nav-wrapper"}>
                YO
                <Nav />
            </div>
        )
    }
}
