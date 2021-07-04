import React, { Component } from 'react';
import './iPad.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const ipadItems = [
    {item: 'iPad Pro', id: 1},
    {item: 'iPad', id: 2},
    {item: 'iPad mini 4', id: 3},
    {item: 'iOS 11', id: 4},
    {item: 'Accesories', id: 5},
    {item: 'Compare', id: 6}
]

class Ipad extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="ipad-nav-container">
                <ul>
                    {ipadItems.map(ipad => (
                        <li key={ipad.id}>
                            <Link to={"/"} className="ipad-link">{ipad.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Ipad;