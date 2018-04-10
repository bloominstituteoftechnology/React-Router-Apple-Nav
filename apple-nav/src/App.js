import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Macs, Mac, Ipads, Ipad, Iphones, Iphone, Watches, Watch, TVS, TV, Musics, Music} from './components/SubCategories'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" component={Navigation} />

                <Route exact path="/mac" component={Macs} />
                <Route exact path="/mac/:product" component={Mac} />

                <Route exact path="/ipad" component={Ipads} />
                <Route exact path="/ipad/:product" component={Ipad} />


                <Route exact path="/iphone" component={Iphones} />
                <Route exact path="/iphone/:product" component={Iphone} />

                <Route exact path="/watch" component={Watches} />
                <Route exact path="/watch/:product" component={Watch} />

                <Route exact path="/tv" component={TVS} />
                <Route exact path="/tv/:product" component={TV} />


                <Route exact path="/music" component={Musics} />
                <Route exact path="/music/:product" component={Music} />
            </div>
        </BrowserRouter>
    );
  }
}


const Navigation = () => {
    return (
        <div className="mainmenu">
            <Link className="mainmenu"   to="/mac" style={{ textDecoration: 'none' }}>
                Mac
            </Link>
            <Link className="mainmenu" to="/ipad" >
                ipad
            </Link>
            <Link className="mainmenu" to="/iphone">
                iPhone
            </Link>
            <Link className="mainmenu" to="/watch">
                Watch
            </Link>
            <Link className="mainmenu" to="/tv">
                TV
            </Link>
            <Link className="mainmenu" to="/music">
                Music
            </Link>
            <Link className="mainmenu" to="/support">
                Support
            </Link>
        </div>
    );
};
export default App;
