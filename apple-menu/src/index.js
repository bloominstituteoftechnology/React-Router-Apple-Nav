import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Mac from './components/Mac/Mac';
import Ipad from './components/Ipad/Ipad';
import Iphone from './components/Iphone/Iphone';
import Watch from './components/Watch/Watch';
import TV from './components/TV/TV';
import Music from './components/Music/Music';
import Support from './components/Support/Support';


const Root = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
								<Route exact path="/mac" component={Mac} />
								<Route exact path="/ipad" component={Ipad} />
								<Route exact path="/iphone" component={Iphone} />
								<Route exact path="/watch" component={Watch} />
								<Route exact path="/tv" component={TV} />
								<Route exact path="/music" component={Music} />
								<Route exact path="/support" component={Support} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
