import React from 'react'
import { NavLink } from 'react-router-dom'
const myNav = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']

const styles = {
    textAlign: 'center',
};

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none'
}
const NavWrapper = () => {
    return (
    <div style={styles} style={linkStyles}>
        <NavLink to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" style={{height: "1.5rem", marginTop: "-.5rem", marginRight:"2.5rem"}}></img> </NavLink>
        {myNav.map(nav => <NavLink to={`/${nav.toLowerCase()}`} key={nav} style={linkStyles}>{nav}</NavLink>)} <NavLink to="/search"> <i style={linkStyles} className="fas fa-search"></i></NavLink><NavLink to="/shopping"><i style={linkStyles} className="fas fa-shopping-bag"></i></NavLink>
    </div>)
}

export default NavWrapper