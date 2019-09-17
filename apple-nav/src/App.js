import React from 'react';
import './App.css';
import { categories } from './Components/Data';
import MainNav from './Components/MainNav';

function App() {
  return (
    <div className="App">
      <div className='NavBox'>
    <MainNav />

      </div>
    </div>
  );
}

export default App;
