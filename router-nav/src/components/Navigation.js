import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="nav--mainNav">
          <ul>
            <li><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg"/></li>
            <li><Link to="/">Mac</Link></li>
            <li><Link to="/iPad">iPad</Link></li>
            <li><Link to="/iPhone">iPhone</Link></li>
            <li><Link to="/Watch">Watch</Link></li>
            <li><Link to="/TV">TV</Link></li>
            <li><Link to="/Music">Music</Link></li>
          </ul>
        </div>
        <div className="nav--subNav">
          <Route exact path="/" component={Mac}/>
          <Route path="/Mac" component={Mac}/>
          <Route path="/iPad" component={iPad}/>
          <Route path="/iphone" component={iPhone}/>
          <Route path="/Watch" component={Watch}/>
          <Route path="/TV" component={TV}/>
          <Route path="/Music" component={Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

const Mac = ({match}) => {
  return (
  <div className="nav--subNav--Content">
    <ul>
      <li><Link to={`${match.url}/MacBook`}><img src="https://images.apple.com/v/mac/home/x/images/familybrowser/macbook_dark_large.svg"/><br /> MacBook</Link></li>
      <li><Link to={`${match.url}/MacBookAir`}><img src="https://images.apple.com/v/mac/home/x/images/familybrowser/macbookair_dark_large.svg"/><br /> MackBook Air</Link></li>
      <li><Link to={`${match.url}/MacBookPro`}><img src="https://images.apple.com/v/mac/home/x/images/familybrowser/macbookpro_dark_large.svg"/><br /> MacBook Pro</Link></li>
    </ul>
    <hr />
    <Route path={`${match.url}/:macNavId`} component={content}/>
  </div>
  )
};

const iPad = ({match}) => {
  return (
  <div className="nav--subNav--Content__light">
    <ul>
      <li><Link to={`${match.url}/iPadPro`}><img src="https://images.apple.com/v/ipad/home/ae/images/home/familybrowser/ipadpro_light_large.svg"/><br /> iPad Pro</Link></li>
      <li><Link to={`${match.url}/iPad2`}><img src="https://images.apple.com/v/ipad/home/ae/images/home/familybrowser/ipad_large.svg"/><br /> iPad</Link></li>
      <li><Link to={`${match.url}/iPadmini4`}><img src="https://images.apple.com/v/ipad/home/ae/images/home/familybrowser/ipadmini_large.svg"/><br /> iPad mini 4</Link></li>
    </ul>
    <hr />
    <Route exact path={`${match.url}/iPadPro`} component={iPadPro}/>
    <Route path={`${match.url}/iPad2`} component={iPad2}/>
    <Route path={`${match.url}/iPadmini4`} component={iPadmini4}/>
  </div>
  )
};

const iPhone = ({match}) => {
  return (
  <div className="nav--subNav--Content__light">
    <ul>
      <li><Link to={`${match.url}/iPhoneX`}><img src="https://images.apple.com/v/iphone/home/w/images/chapternav/iphonex_large.svg"/><br /> iPhone X</Link></li>
      <li><Link to={`${match.url}/iPhone8`}><img src="https://images.apple.com/v/iphone/home/w/images/chapternav/iphone8_large.svg"/><br /> iPhone 8</Link></li>
      <li><Link to={`${match.url}/iPhone7`}><img src="https://images.apple.com/v/iphone/home/w/images/chapternav/iphone7_large.svg"/><br /> iPhone 7</Link></li>
    </ul>
    <hr />
    <Route path={`${match.url}/:macNavId`} component={content}/>
  </div>
  )
};

const Watch = ({match}) => {
  return (
  <div className="nav--subNav--Content__light">
    <ul>
      <li><Link to={`${match.url}/AppleWatchSeries3`}><img src="https://images.apple.com/v/watch/home/g/images/watch_nav_series_2_large.svg" height="54px" width="25px"/><br /> Apple Watch Series 3</Link></li>
      <li><Link to={`${match.url}/AppleWatchNike`}><img src="https://images.apple.com/v/watch/home/g/images/watch_nav_nike_large.svg"/><br /> Apple Watch Nike+</Link></li>
      <li><Link to={`${match.url}/AppleWatchHermes`}><img src="https://images.apple.com/v/watch/home/g/images/watch_nav_hermes_large.svg"/><br /> Apple Watch Hermes</Link></li>
    </ul>
    <hr />
    <Route path={`${match.url}/:macNavId`} component={content}/>
  </div>
  )
};

const TV = ({match}) => {
  return (
  <div className="nav--subNav--Content">
    <ul>
      <li><Link to={`${match.url}/AppleTV4K`}><img src="https://images.apple.com/v/tv/home/c/images/home/apple_tv_dark_large.svg"/><br /> Apple TV 4K</Link></li>
      <li><Link to={`${match.url}/AppleTV`}><img src="https://images.apple.com/v/tv/home/c/images/home/apple_tv_dark_large.svg"/><br /> Apple TV</Link></li>
      <li><Link to={`${match.url}/TVApp`}><img src="https://images.apple.com/v/tv/home/c/images/home/tvapp_dark_large.svg"/><br /> TV App</Link></li>
    </ul>
    <hr />
    <Route path={`${match.url}/:macNavId`} component={content}/>
  </div>
  )
};

const Music = ({match}) => {
  return (
  <div className="nav--subNav--Content">
    <ul>
      <li><Link to={`${match.url}/AppleMusic`}><img src="https://images.apple.com/v/music/f/images/overview/icons/apple_music_dark_large.svg"/><br /> Apple Music</Link></li>
      <li><Link to={`${match.url}/iTunes`}><img src="https://images.apple.com/v/music/f/images/overview/icons/itunes_dark_large.svg"/><br />iTunes</Link></li>
      <li><Link to={`${match.url}/HomePod`}><img src="https://images.apple.com/v/music/f/images/overview/icons/homepod_icon_dark_large.svg"/><br /> HomePod</Link></li>
    </ul>
    <hr />
    <Route path={`${match.url}/:macNavId`} component={content}/>
  </div>
  )
};


// TRIED a single component to catch display dynamically, but no server
const content = ({match}) => {
  return (
    <div className="content--body">
      <h3>{match.params.macNavId}</h3>
      <p>Showing {match.params.macNavId} content</p>
    </div>
  )
};


// TRIED individual componenets also
const iPadPro = ({match}) => {
  return (
  <div className="content--body">
    <h3>Manual iPadPro</h3>
    <p>Showing Manual iPadPro content</p>
    </div>
  )
};

const iPad2 = ({match}) => {
  return (
  <div className="content--body">
    <h3>Manual iPad</h3>
    <p>Showing Manual iPad content</p>
    </div>
  )
};


const iPadmini4 = ({match}) => {
  return (
  <div className="content--body">
    <h3>Manual iPadmini4</h3>
    <p>Showing Manual iPadmini4 content</p>
    </div>
  )
};


export default Navigation;