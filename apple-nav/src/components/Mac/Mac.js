import React, { Component } from 'react';
import './Mac.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

//IMPORTING IMAGES FROM IMG FOLDER
import macbookicon from './img/macbook.png';
import macbookairicon from './img/macbook_air.png';
import macbookproicon from './img/macbook_pro.png';
import imacicon from './img/imac.png';
import mac_pro_2 from './img/mac_pro_2.png';
import mac_mini_icon from './img/mac_mini.png';
import accesoriesicon from './img/accesories.png';
import high_sierra_icon from './img/high_sierra.png';
import compare_icon from './img/compare.png';


const macItems = [
    {item: 'MacBook', id: 1, icon: macbookicon},
    {item: 'MacBook Air', id: 2, icon: macbookairicon},
    {item: 'MacBook Pro', id: 3, icon: macbookproicon},
    {item: 'iMac', id: 4, icon: imacicon},
    {item: 'iMac Pro', id: 5, icon: imacicon},
    {item: 'Mac Pro', id: 6, icon: mac_pro_2},
    {item: 'Mac mini', id: 7, icon: mac_mini_icon},
    {item: 'Accesories', id: 8, icon: accesoriesicon},
    {item: 'High Sierra', id: 9, icon: high_sierra_icon},
    {item: 'Compare', id: 10, icon: compare_icon}
]

class Mac extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="mac-nav-container">
                <ul>
                    {macItems.map(item => (
                        <li key={item.id}>
                            <Link to={"/"} className="mac-link">
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

export default Mac;