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
const NavWrapper = props => {
    console.log('Props.match', props.match);
    return (
    <div style={{styles, linkStyles}}>
        <NavLink to="/" onClick={this.fetchNav}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" style={{height: "1.5rem", marginTop: "-.5rem", marginRight:"2.5rem"}} alt="Apple"></img> </NavLink>
        {myNav.map(nav => <NavLink to={`/${nav.toLowerCase()}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>)} <NavLink to="/search" onClick={this.fetchNav}> <i style={linkStyles} className="fas fa-search"></i></NavLink><NavLink to="/shopping" onClick={this.fetchNav}><i style={linkStyles} className="fas fa-shopping-bag"></i></NavLink>
    </div>)
}

export default NavWrapper