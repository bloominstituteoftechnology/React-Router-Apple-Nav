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
    textAspangn: 'center',
};

const spannkStyles = {
    padding: '2rem',
    textDecoration: 'none'
}
const Mac = props => {
    return (
    <div className={styles}>
          {myMac.map(nav => <span key={nav + myMac.indexOf(nav)}> <NavLink to={`/mac/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/mac/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myMac.indexOf(nav) + nav}/> </span> )}
    </div>
    )
}
const IPad = props => {
    return (
    <div>
        {myiPad.map(nav => <span key={nav + myiPad.indexOf(nav)}><NavLink to={`/ipad/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/ipad/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myiPad.indexOf(nav) + nav}/> </span>)}
    </div>
    )
}
const IPhone = props => {
    return (
    <div>
        {myiPhone.map(nav => <span key={nav + myiPhone.indexOf(nav)}><NavLink to={`/iphone/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/iphone/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myiPhone.indexOf(nav) + nav}/></span> )}
    </div>
    )
}
const Watch = props => {
    return (
    <div>
    {myWatch.map(nav => <span key={nav + myWatch.indexOf(nav)}><NavLink to={`/watch/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/watch/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myWatch.indexOf(nav) + nav}/></span>)}
    </div>
    )
}
        
const TV = props => {
    return (
    <div>
         {myTV.map(nav => <span key={nav + myTV.indexOf(nav)}><NavLink to={`/tv/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/tv/${nav.toLowerCase().split(' ').join('')}`} key={nav} components={SubNav} key={myTV.indexOf(nav) + nav}/></span>)}
    </div>
    )
}        
        
const Music = props => {
    return (
    <div>
        {myMusic.map(nav => <span key={nav + myMusic.indexOf(nav)}><NavLink to={`/music/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={spannkStyles}>{nav}</NavLink>
        <Route exact path={`/music/${nav.toLowerCase().split(' ').join('')}`} components={SubNav} key={myMusic.indexOf(nav) + nav}/></span>)}
    </div>
    )
} 

export { Mac, IPad, IPhone, Watch, TV, Music }