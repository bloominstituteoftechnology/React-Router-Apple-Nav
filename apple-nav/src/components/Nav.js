import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { SubNav } from '../components'

const myMac = ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra', 'Compare']
const myiPad = ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare']
const myiPhone = ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare']
const myWatch = ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'Bands', 'Accessories', 'Compare']
const myTV = ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare']
const myMusic = ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards']

const styles = {
    textAlign: 'center',
};

const linkStyles = {
    padding: '2rem',
    textDecoration: 'none'
}
const Nav = props => {
    return (
        <div>
        {myMac.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/mac/{`{${nav}`}" component={SubNav}/></div>)}
        {myiPad.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/ipad/{`{${nav}`}" component={SubNav}/></div>)}
        {myiPhone.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/iphone/{`{${nav}`}" component={SubNav}/></div>)}
        {myWatch.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/watch/{`{${nav}`}" component={SubNav}/></div>)}
        {myTV.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/tv/{`{${nav}`}" component={SubNav}/></div>)}
        {myMusic.map(nav => <div><NavLink to={`/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={linkStyles} onClick={this.fetchNav}>{nav}</NavLink>
        <Route path="/music/{`{${nav}`}" component={SubNav}/></div>)}
        </div>
    )
}

export default Nav