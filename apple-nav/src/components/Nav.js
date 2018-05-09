import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { SubNav } from '../components'

const myMac = ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra', 'Compare']
const myMacIcons = [ <i className="fas fa-laptop"></i>, <i className="fas fa-laptop"></i>, <i className="fas fa-laptop"></i>, <i className="fas fa-desktop"></i>, <i className="fas fa-desktop"></i>, <i className="far fa-building"></i>, <i className="fas fa-window-minimize"></i>, <i className="fas fa-headphones"></i>, <i className="far fa-question-circle"></i>, <i className="fas fa-balance-scale"></i>]
const myIPadIcons = [ <i className="fas fa-tablet-alt"></i>, <i className="fas fa-tablet-alt"></i>, <i className="fas fa-tablet-alt"></i>, <i className="far fa-question-circle"></i>, <i className="fas fa-map"></i>, <i className="fas fa-balance-scale"></i>]
const myiPad = ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare']
const myIPhoneIcons = [ <i className="fas fa-mobile-alt"></i>, <i className="fas fa-mobile-alt"></i>, <i className="fas fa-mobile-alt"></i>, <i className="fas fa-mobile-alt"></i>, <i className="fas fa-mobile-alt"></i>, <i className="fab fa-osi"></i>, <i className="fas fa-headphones"></i>, <i className="fas fa-balance-scale"></i> ]
const myiPhone = ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare']
const myWatchIcons = [ <i className="far fa-clock"></i>, <i className="far fa-clock"></i>, <i className="far fa-clock"></i>, <i className="far fa-clock"></i>, <i className="far fa-clock"></i>, <i className="far fa-question-circle"></i>, <i className="fas fa-band-aid"></i>, <i className="fab fa-affiliatetheme"></i>, <i className="fas fa-link"></i>]
const myWatch = ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'watchOS', 'Bands', 'Accessories', 'Compare']
const myTVIcons = [<i className="fas fa-tv"></i>, <i className="fas fa-tv"></i>, <i className="fas fa-tv"></i>, <i className="fas fa-gamepad"></i>,<i className="fab fa-apple-pay"></i>]
const myTV = ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare']
const myMusicIcons = [<i className="fas fa-music"></i>, <i className="fas fa-star"></i>, <i className="fas fa-database"></i>, <i className="fas fa-tablet-alt"></i>, <i className="fas fa-headphones"></i>, <i className="fab fa-apple-pay"></i> ]
const myMusic = ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards']

const linkStyles = {
    padding: '1rem 1.5rem 0rem',
    textDecoration: 'none'
}
const Mac = props => {
    return (
<div className="container-fluid subnav" style={{backgroundColor: 'rgb(32,32,32)', padding: '1rem 15rem 0rem 15rem', color: 'white'}}>
    <div style={linkStyles} className="row">
          {myMacIcons.map((nav, i) => <span className="col-1 mx-auto" key={i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
          {myMac.map(nav => <span key={nav + myMac.indexOf(nav)} className="col-1 mx-auto"> <NavLink to={`/mac/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'white', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/mac/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myMac.indexOf(nav) + nav}/> </span> )}
        </div>
    </div>
    )
}
const IPad = props => {
    return (
<div className="container-fluid subnav" style={{padding: '.5rem 15rem 0rem 15rem', color: 'rgb(32,32,32)'}}>
   <div style={linkStyles} className="row">
          {myIPadIcons.map((nav, i) => <span className="col-1 mx-auto" key={i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
        {myiPad.map(nav => <span key={nav + myiPad.indexOf(nav)} className="col-1 mx-auto"><NavLink to={`/ipad/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'rgb(32,32,32)', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/ipad/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myiPad.indexOf(nav) + nav}/> </span>)}
    </div>
</div>
    )
}
const IPhone = props => {
    return (
<div className="container-fluid subnav" style={{padding: '.5rem 15rem 0rem 15rem', color: 'rgb(32,32,32)'}}>
   <div style={linkStyles} className="row">
          {myIPhoneIcons.map((nav, i) => <span className="col-1 mx-auto" key={i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
        {myiPhone.map(nav => <span key={nav + myiPhone.indexOf(nav)} className="col-1 mx-auto"><NavLink to={`/iphone/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'rgb(32,32,32)', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/iphone/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myiPhone.indexOf(nav) + nav}/></span> )}
    </div>
</div>
    )
}
const Watch = props => {
    return (
<div className="container-fluid subnav" style={{padding: '.5rem 15rem 0rem 15rem', color: 'rgb(32,32,32)'}}>
   <div style={linkStyles} className="row">
          {myWatchIcons.map((nav, i) => <span className="col-1 mx-auto" key={i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
    {myWatch.map(nav => <span key={nav + myWatch.indexOf(nav)} className="col-1 mx-auto"><NavLink to={`/watch/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'rgb(32,32,32)', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/watch/${nav.toLowerCase().split(' ').join('')}`} component={SubNav} key={myWatch.indexOf(nav) + nav}/></span>)}
    </div>
</div>
    )
}
        
const TV = props => {
    return (
<div className="container-fluid subnav" style={{backgroundColor: 'rgb(32,32,32)', padding: '.5rem 15rem 0rem 15rem', color: 'white'}}>
   <div style={linkStyles} className="row">
          {myTVIcons.map((nav, i) => <span className="col-1 mx-auto" key={i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
         {myTV.map(nav => <span key={nav + myTV.indexOf(nav)} className="col-1 mx-auto"><NavLink to={`/tv/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'white', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/tv/${nav.toLowerCase().split(' ').join('')}`} components={SubNav} key={myTV.indexOf(nav) + nav}/></span>)}
    </div>
</div>
    )
}        
        
const Music = props => {
    return (
<div className="container-fluid subnav" style={{backgroundColor: 'rgb(32,32,32)', padding: '.5rem 15rem 0rem 15rem', color: 'white'}}>
   <div style={linkStyles} className="row">
          {myMusicIcons.map((nav, i) => <span className="col-1 mx-auto" key={"musicIcon" + i}>{nav}</span>)}</div>
          <div style={linkStyles} className="row">
        {myMusic.map(nav => <span key={nav + myMusic.indexOf(nav)} className="col-1 mx-auto"><NavLink to={`/music/${nav.toLowerCase().split(' ').join('')}`} key={nav} style={{color: 'white', fontWeight: '100'}}>{nav}</NavLink>
        <Route exact path={`/music/${nav.toLowerCase().split(' ').join('')}`} components={SubNav} key={myMusic.indexOf(nav) + nav}/></span>)}
    </div>
</div>
    )
} 

export { Mac, IPad, IPhone, Watch, TV, Music }