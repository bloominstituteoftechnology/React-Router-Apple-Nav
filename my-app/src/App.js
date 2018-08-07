import React from "react";
import { Route } from "react-router-dom";
import "./App.css";





const nav = [
  {
    id: 0,
    category: Home
  },
  {
    id: 1,
    category: "Mac",
    subcategory: [
      "Macbook",
      "Macbook Air",
      "Macbook Pro",
      "iMac",
      "iMac Pro",
      "Mac Pro",
      "Mac mini",
      "Accessories",
      "High Sierra OS",
      "Compare"
    ]
  },
  {
    id: 2,
    category: "iPad",
    subcategory: [
      "iPad Pro",
      "iPad",
      "iPad mini 4",
      "iOS 11",
      "Accessories",
      "Compare"
    ]
  },
  {
    id: 3,
    category: "iPhone",
    subcategory: [
      "iPhoneX",
      "iPhone 8",
      "iPhone 7",
      "iPhone 6s",
      "iPhone SE",
      "iOS 11",
      "Accessories",
      "Compare"
    ]
  },
  {
    id: 4,
    category: "Watch",
    subcategory: [
      "Apple Watch Series 3",
      "Apple Watch Nike+",
      "Apple Watch Hermes",
      "Apple Watch Edition",
      "Apple Watch Series 1",
      "watchOS",
      "Bands",
      "Accessories",
      "Compare"
    ]
  },
  {
    id: 5,
    category: "TV",
    subcategory: ["Apple TV 4k", "Apple TV", "TV App", "Accessories", "Compare"]
  },
  {
    id: 6,
    category: "Music",
    subcategory: [
      "Apple Music",
      "iTunes",
      "HomePod",
      "iPod touch",
      "Music Accessories",
      "Gift Cards"
    ]
  },
  { id: 7, category: "Support" },
  { id: 8, category: "Search" },
  { id: 9, cayegory: "Shopping cart" }
];

const subNav = nav.map(item => (<NavList key={nav.id} nav={item}>))

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact activeClassName="activeNavButton" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeNavButton" to="/Mac">
            Mac
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/iPad">
          iPad
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/iPhone">
          iPhone
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/Watch">
          Watch
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/TV">
          TV
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/Music">
          Music
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/Support">
          Support
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/Search">
          Search
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNavButton" to="/ShoppingCart">
          Shopping Cart
          </NavLink>
      </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/Mac" component={Mac} />>
    </div>


        
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
