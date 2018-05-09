import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Nav, Home, Mac, IPad, IPhone, Watch, TV, Music } from '../components'
const myNav = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']

const styles = {
    textAlign: 'center',
};

const linkStyles = {
    padding: '3rem',
    textDecoration: 'none',
    color: 'white',
}
const NavWrapper = props => {
    return (
    <div style={{styles, linkStyles}}>
    <div style={{padding: '0 15rem', backgroundColor: 'black', color: 'white'}} className="row">
        <NavLink to="/"> <i className="fab fa-apple" style={{marginTop: '2.5rem', marginRight:"2.5rem", color: 'white'}}/> </NavLink>
        {myNav.map(nav => <NavLink to={`/${nav.toLowerCase()}`} key={nav} style={{color: 'white', padding: '3rem', textDecoration: 'none'}} className="col-1 mx-auto">{nav}</NavLink>)} <NavLink to="/search" className="col-1 mx-auto"> <i style={{padding: '3rem', color: 'white'}} className="fas fa-search"></i></NavLink><NavLink to="/shopping" style={{color: 'white'}} className="col-1 mx-auto"><i style={linkStyles} className="fas fa-shopping-bag"></i></NavLink>
        </div>
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