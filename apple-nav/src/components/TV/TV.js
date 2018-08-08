import React, { Component } from 'react';
import './TV.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

//IMPORTING IMAGES FROM IMG FOLDER
import tvicon from './img/tv.png';
import tvappicon from './img/tv_app.png';
import accesoriesicon from './img/accesories.png';
import compareicon from './img/compare.png';

const tvItems = [
    {item: 'Apple TV 4K', id: 1, icon: tvicon},
    {item: 'Apple TV', id: 2, icon: tvicon},
    {item: 'TV App', id: 3, icon: tvappicon},
    {item: 'Accesories', id: 4, icon: accesoriesicon},
    {item: 'Compare', id: 5, icon: compareicon}
]

class Tv extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="tv-nav-container">
                <ul>
                    {tvItems.map(item => (
                        <li key={item.id}>
                            <Link to={"/"} className="tv-link">
                                <div className="icon-container">
                                    <img src={item.icon} alt='icon'/><br/>
                                </div>
                                {item.item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Tv;