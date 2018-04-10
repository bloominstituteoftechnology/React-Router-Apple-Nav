import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Ipad from './Ipad';
import Iphone from './Iphone';
import Mac from './Mac';
import Music from './Music';
import Tv from './Tv';
import Watch from './Watch';
import Support from './Support';

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));
registerServiceWorker();
