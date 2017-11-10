import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {Navigation, Home, Cass , CPad, CPhone, Cass1, Cass2, Cass3, CPad1, CPad2, CPad3, CPhone1, CPhone2, CPhone3} from './components';

const App= () => (
  <div className="App">
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route exact path='/Cass' component={Cass} />
    <Route exact path='/CPad' component={CPad} />
    <Route exact path='/CPhone' component={CPhone} />
    <Route exact path='/Cass1' component={Cass1} />
    <Route exact path='/Cass2' component={Cass2} />
    <Route exact path='/Cass3' component={Cass3} />
    <Route exact path='/CPad1' component={CPad1} />
    <Route exact path='/CPad2' component={CPad2} />
    <Route exact path='/CPad3' component={CPad3} />
    <Route exact path='/CPhone1' component={CPhone1} />
    <Route exact path='/CPhone2' component={CPhone2} />
    <Route exact path='/CPhone3' component={CPhone3} />
  </div>
)

export default App;
