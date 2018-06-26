import React from 'react';
import Route from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';

const NavBarData = [
  {
    Mac: [
      'MacBook',
      'MacBook Air',
      'MacBook Pro',
      'Compare',
    ],
  },
  {
    iPad: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
  },
  {
    iPhone: [
      'iPhone X',
      'iPhone 8',
      'Accessories',
      'Compare',
    ],
  },
  {
    Watch: [
      'Apple Watch Series 3',
      'Apple Watch Nike+',
      'Compare',
    ],
  },
];

const App = () => {
  const topLinks = NavBarData.map(item => (Object.keys(item))[0]);
  
  return (
  <div className="App">
    <NavBar navlink links={topLinks} />
    <NavBar subBar />
  </div>
);
}

export default App;
