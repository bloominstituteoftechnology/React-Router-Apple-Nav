import React, { Component } from 'react';
import './Mac.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const macItems = [
    {item: 'MacBook', id: 1},
    {item: 'MacBook Air', id: 2},
    {item: 'MacBook Pro', id: 3},
    {item: 'iMac', id: 4},
    {item: 'iMac Pro', id: 5},
    {item: 'Mac Pro', id: 6},
    {item: 'Mac mini', id: 7},
    {item: 'Accesories', id: 8},
    {item: 'High Sierra', id: 9},
    {item: 'Compare', id: 10}
]

class Mac extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="mac-container">
                This is Mac
                <ul>
                    {macItems.map(mac => (
                        <li key={mac.id}>
                            <Link to={"/"}>{mac.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Mac;