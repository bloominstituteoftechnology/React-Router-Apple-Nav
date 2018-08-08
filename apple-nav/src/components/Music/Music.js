import React, { Component } from 'react';
import './Music.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


//IMPORTING IMAGES FROM IMG FOLDER
import applemusic from './img/apple_music.png';
import itunes from './img/itunes.png';
import homepod from './img/homepod.png';
import ipodtouch from './img/ipod_touch.png';
import musicaccesories from './img/music_accesories.png';
import giftcards from './img/gift_cards.png';

const musicItems = [
    {
        item: 'Apple Music',
        id: 1,
        icon: applemusic,
    },
    {
        item: 'iTunes', 
        id: 2,
        icon: itunes,
    },
    {
        item: 'HomePod', 
        id: 3,
        icon: homepod,
    },
    {
        item: 'iPod Touch', 
        id: 4,
        icon: ipodtouch,
    },
    {
        item: 'Music Accesories', 
        id: 5,
        icon: musicaccesories,
    },
    {
        item: 'Gift Cards', 
        id: 6,
        icon: giftcards,
    }
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
                            <Link to={"/"} className="music-link">
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

export default Music;