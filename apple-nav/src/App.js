import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import MainNav from './Components/MainNav';

function App() {
  const [navData] = useState(data);
  console.log(navData);

  return (
    <div className="App">
      <MainNav data={navData} />
    </div>
  );
}

export default App;
