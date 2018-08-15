import React, { Component } from 'react';
import {Link, Route} from '../../node_modules/react-router-dom';


import './App.css';

const NavMain = [
  {link: "Mac", id:1}, 
  {link: "iPad", id:2}, 
  {link: "iPhone", id:3}, 
  {link: "Watch", id:4},
  {link: "Tv", id:5},
  {link: "Music", id:6},
  {link: "Support", id:7}
];



class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <Route path='/links'  />
        <Route path='/links/:id' />
          
      </ul>
        
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <ul>
        {NavMain.map(each => (
        <li key={NavMain.id}>
          <Link to={`/links/${NavMain.id}`}> 
                <h4>{NavMain.link}</h4>
          </Link>

        </li>
    ))}
      </ul>
   
  );
  }
}

// class NavNav extends Component {
//   render(){
//     return (
//       <NavNav
//     )
//   }
// }





export default App;
