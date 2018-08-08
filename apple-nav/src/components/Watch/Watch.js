import React, { Component } from 'react';
import './Watch.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const watchItems = [
    {item: 'Apple Watch', style:'Series 3', id: 1},
    {item: 'Apple Watch', style:'Nike+', id: 2},
    {item: 'Apple Watch', style:'Hermès', id: 3},
    {item: 'Apple Watch', style:'Edition', id: 4},
    {item: 'Apple Watch', style:'Series 1', id: 5},
    {item: 'watchOS', style:'Series 3', id: 6},
    {item: 'Bands', style:'', id: 7},
    {item: 'Accesories', style:'', id: 8},
    {item: 'Compare', style:'', id: 9}
]

class Watch extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="watch-nav-container">
                <ul>
                    {watchItems.map(watch => (
                        <li key={watch.id}>
                            <Link to={"/"} className="watch-link">
                                {watch.item}<br/>
                                {watch.style}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Watch;