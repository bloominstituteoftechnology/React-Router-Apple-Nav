import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Ipad from './components/Ipad/Ipad'
import Iphone from './components/Iphone/Iphone'
import TV from './components/TV/TV'
import Watch from './components/Watch/Watch'
import Mac from './components/Mac/Mac'
import Music from './components/Music/Music'

ReactDOM.render(
    <Router>
        <div>
        <Route path='/' component={App}/>
        <Route path='/iphone' component={Iphone}/>
        <Route path='/ipad' component={Ipad}/>
        <Route path='/tv' component={TV}/>
        <Route path='/watch' component={Watch}/>
        <Route path='/mac' component={Mac}/>
        <Route path='/music' component={Music}/>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
