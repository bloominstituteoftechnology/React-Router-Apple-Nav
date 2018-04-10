import React from 'react';
import { Link } from 'react-router-dom';

function Support() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/contact">Contact Support</Link>
        </li>
        <li>
    <Link to="/support">Support</Link>
        </li>
        </ul>
    </div>
)
}
export default Support;