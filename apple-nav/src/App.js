import React from 'react';
import './App.scss';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Route path='/nav'>
       <NavWrapper />
     </Route>
     <Route path='/nav'>
       <SubNav />
     </Route>
      </header>
    </div>
  );
}

export default App;
