import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Nav, Home, Mac, IPad, IPhone, Watch, TV, Music } from '../components'
const myNav = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']

const styles = {
    textAlign: 'center',
};

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none'
}
const NavWrapper = props => {
    return (
    <div style={{styles, linkStyles}}>
        <NavLink to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" style={{height: "1.5rem", marginTop: "-.5rem", marginRight:"2.5rem"}} alt="Apple"></img> </NavLink>
        {myNav.map(nav => <NavLink to={`/${nav.toLowerCase()}`} key={nav} style={linkStyles}>{nav}</NavLink>)} <NavLink to="/search"> <i style={linkStyles} className="fas fa-search"></i></NavLink><NavLink to="/shopping"><i style={linkStyles} className="fas fa-shopping-bag"></i></NavLink>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mac" component={Mac}/>
        <Route exact path="/ipad" component={IPad}/>
        <Route exact path="/iphone" component={IPhone}/>
        <Route exact path="/watch" component={Watch}/>
        <Route exact path="/tv" component={TV}/>
        <Route exact path="/music" component={Music}/>
        <Route exact path="/support" component={Nav}/>
        <Route exact path="/search" component={Nav}/>
        <Route exact path="/shopping" component={Nav}/>
        </Switch>   
    </div>)
}

export default NavWrapper