import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import data from './data';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';

function App() {
  const [navData] = useState(data);
  console.log(navData);

  return (
    <div className="App">
      <MainNav data={navData} />

      {/* <Route exact path="/">
        <MainNav data={navData}/>
      </Route> */}
      
      <Route path="/:id">
        <SubNav data={navData} />
      </Route>
    </div>
  );
}

export default App;
