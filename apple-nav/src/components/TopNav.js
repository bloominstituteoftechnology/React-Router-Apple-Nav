import React from 'react'
import { Link } from 'react-router-dom'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


let TopNav = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <FontAwesomeIcon icon={faApple} style={{color: 'white', width: '20px', height: '20px'}} />
                </Link>
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/">Support</Link>
                <FontAwesomeIcon icon={faSearch} style={{color: 'white', width: '15px', height: '15px'}} />
                <FontAwesomeIcon icon={faShoppingBag} style={{color: 'white', width: '15px', height: '15px'}} />
            </nav>
        </header>
    )
}

export default TopNav
