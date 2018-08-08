import React, { Component } from 'react';
import './Music.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const musicItems = [
    {item: 'Apple Music', id: 1},
    {item: 'iTunes', id: 2},
    {item: 'HomePod', id: 3},
    {item: 'iPod Touch', id: 4},
    {item: 'Music Accesories', id: 5},
    {item: 'Gift Cards', id: 6}
]

class Music extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="music-nav-container">
                <ul>
                    {musicItems.map(item => (
                        <li key={item.id}>
                            <Link to={"/"} className="music-link">{item.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Music;