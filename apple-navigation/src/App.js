import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import SubNav from './components/NavBar/SubNav';
 const subs = [
  {id: 2,
  links: ['Macbook', 'Macbook Air', 'Macbook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac Mini', 'Accessories', 'High Sierra', 'Compare']},
  {id: 3,
  links: ['iPad Pro', 'iPad', 'iPad Mini 4', 'iOS 11', 'Accessories', 'Compare']},
  {id: 4,
  links: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6S', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare']},
  {id: 5,
  links: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'watchOS', 'Brands', 'Accessories', 'Compare']},
  {id: 6,
  links: ['Apple TV 4K', 'AppleTV', 'TV App', 'Accessories', 'Compare']},
  {id: 7,
  links: ['Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Accessories', 'Gift Cards']}
]
console.log(subs.id)
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        <Route exact path="/:productId"
               render={props => <SubNav {...props} subTabs={subs}/>} />
      </div>
    );
  }
}
 export default App;