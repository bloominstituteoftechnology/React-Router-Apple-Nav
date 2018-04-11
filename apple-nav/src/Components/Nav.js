import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import {Mac, Macs, Ipad, Ipads, Iphone, Iphones, Watch, Watches, Tv, Tvs, Music, Musics} from './SubNav';

const Nav = () => {
    return (
        <div className = "nav">
            <Link className = "links" to ="/mac">
            Mac
            </Link>
            <Link className = "links" to ="/ipad">
            Ipad
            </Link>
            <Link className = "links" to ="/iphone">
            Iphone
            </Link>
            <Link className = "links" to ="/watch">
            Watch
            </Link>
            <Link className = "links" to ="/tv">
            TV
            </Link>
            <Link className = "links" to ="/music">
            Music
            </Link>
            <Link className = "links" to ="/support">
            Support
            </Link>
        </div>
    )
}

export default Nav;