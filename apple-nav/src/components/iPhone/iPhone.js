import React, { Component } from 'react';
import './iPhone.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const iphoneItems = [
    {item: 'iPhone X', id: 1},
    {item: 'iPhone 8', id: 2},
    {item: 'iPhone 7', id: 3},
    {item: 'iPhone 6s', id: 4},
    {item: 'iPhone SE', id: 5},
    {item: 'iOS 11', id: 6},
    {item: 'Accesories', id: 7},
    {item: 'Compare', id: 8}
]

class Iphone extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="iphone-nav-container">
                <ul>
                    {iphoneItems.map(iphone => (
                        <li key={iphone.id}>
                            <Link to={"/"} className="iphone-link">{iphone.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Iphone;