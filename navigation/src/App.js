import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';
import {
  Macs,
  Mac,
  Ipads,
  Ipad,
  Iphones,
  Iphone,
  Watches,
  Watch,
  TVs,
  TV,
  MusicList,
  Music,
  Supports,
  Support,
} from './components/navigator.js';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Navigation} />

      <Route exact path="/mac" component={Macs} />
      <Route exact path="/mac/:product" component={Mac} />

      <Route exact path="/ipad" component={Ipads} />
      <Route exact path="/ipads/:product" component={Ipad} />

      <Route exact path="/iphone" component={Iphones} />
      <Route exact path="/iphone/:product" component={Iphone} />

      <Route exact path="/watch" component={Watches} />
      <Route exact path="/watch/:product" component={Watch} />

      <Route exact path="/tv" component={TVs} />
      <Route exact path="/tv/:product" component={TV} />

      <Route exact path="/music" component={MusicList} />
      <Route exact path="/music/:product" component={Music} />

      <Route exact path="/support" component={Supports} />
      <Route exact path="/support/:product" component={Support} />
    </div>
  </Router>
);

const Navigation = () => {
  return (
    <div className="links">
      <Link className="links-style" to="/">
        Home
      </Link>
      <Link className="links-style" to="/mac">
        Mac
      </Link>
      <Link className="links-style" to="/ipad">
        iPad
      </Link>
      <Link className="links-style" to="/iphone">
        iPhone
      </Link>
      <Link className="links-style" to="/watch">
        Watch
      </Link>
      <Link className="links-style" to="/tv">
        TV
      </Link>
      <Link className="links-style" to="/music">
        Music
      </Link>
      <Link className="links-style" to="/support">
        Support
      </Link>
    </div>
  );
};

export default App;