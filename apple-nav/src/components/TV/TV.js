import React, { Component } from 'react';
import './TV.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const tvItems = [
    {item: 'Apple TV 4K', id: 1},
    {item: 'Apple TV', id: 2},
    {item: 'TV App', id: 3},
    {item: 'Accesories', id: 4},
    {item: 'Compare', id: 5}
]

class Tv extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="tv-nav-container">
                <ul>
                    {tvItems.map(tv => (
                        <li key={tv.id}>
                            <Link to={"/"} className="tv-link">{tv.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Tv;