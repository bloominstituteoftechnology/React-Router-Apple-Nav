import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import MacSub from './Components/MacSub';
import IPadSub from './Components/IPadSub';
import MacPro from './Components/MacPro';
import IpadPro from './Components/IpadPro';
import Main from './Main';
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route path="/" component={Main}/>
    <Route exact path="/mac" component={MacSub}/>
    <Route exact path="/ipad" component={IPadSub}/>
    <Route exact path="/mac/imacpro" component={MacPro}/>
    <Route exact path="/ipadsd/ipadpro" component={IpadPro}/>
  </div>
  </BrowserRouter>,
   
  document.getElementById('root')
);

