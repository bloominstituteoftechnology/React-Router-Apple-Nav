import React from 'react';
import { Link } from 'react-router-dom';

function Music() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/apple-music">Apple Music</Link>
        </li>
        <li>
    <Link to="/itunes">iTunes</Link>
        </li>
        <li>
    <Link to="/homepod">HomePod</Link>
        </li>
        <li>
    <Link to="/ipod-touch">iPod touch</Link>
        </li>
        <li>
    <Link to="/accessroies"> Music Accessories</Link>
        </li>
        <li>
    <Link to="/gift-cards">Gift Cards</Link>
        </li>
    </ul>
    </div>
)
}
export default Music;