import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Music.css';

class Music extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					<NavLink to="/music/applemusic" className="link" activeClassName="link--active">Apple Music</NavLink>
					<NavLink to="/music/itunes" className="link" activeClassName="link--active">Itunes</NavLink>
					<NavLink to ="/music/homepod" className = "link" activeClassName="link--active">HomePod</NavLink>
					<NavLink to="/music/ipodtouch" className="link">iPod Touch</NavLink>
					<NavLink to="/music/accessories" className="link">Music Accessories</NavLink>
					<NavLink to="/music/giftcards" className="link">Gift Cards</NavLink>
				</div>
			</div>
		);
  }
}

export default Music;