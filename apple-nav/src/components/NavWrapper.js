import React, {
  Component
} from 'react';
import Nav from './Nav';
import SubNav from './SubNav';
// import {
//   Link,
//   NavLink,
// } from 'react-router-dom';


class NavWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: ['mac', 'ipad', 'iphone', 'watch', 'tv', 'music', 'support'],
      macProducts: ['Macbook', 'Macbook Air', 'Macbook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac Mini', 'Accessories', 'High Sierra', 'Compare'],
      iPadProducts: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
      iPhoneProducts: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Acessories', 'Compare'],
      watchProducts: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Edition', 'Apple Watch Series 1', 'WatchOS', 'Bands', 'Accessories', 'Compare'],
      tvProducts: ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'],
      musicProducts: ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards'],
      supportProducts: ['Support products'],
    }
  }

  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fix-top" >
          <a className="navbar-brand" href="#">
            <img src="./assets/apple.png" />
          </a>
          {this.state.navLinks.map(navLink => <Nav key={navLink} navLink={navLink} />)}
        </nav>

        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-between" >
              <li className="nav-item">
                <a className= "nav-link"
                href = "#"> < img src="./assets/macbook-air.png"
                alt = "" /> </a>
              </li>
            </ul>
          </div>
        </nav>   */}
      </header>
    );
  }
}

export default NavWrapper;