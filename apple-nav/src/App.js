import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Macs, Mac, Ipads, Ipad, Iphones, Iphone} from './components/SubCategories'
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
            </div>
        </BrowserRouter>
    );
  }
}


const Navigation = () => {
    return (
        <div className="">
            <Link className="" to="/mac">
                Mac
            </Link>
            <Link className="" to="/ipad">
                ipad
            </Link>
            <Link className="" to="/iphone">
                iPhone
            </Link>
            <Link className="" to="/watch">
                Watch
            </Link>
            <Link className="" to="/tv">
                TV
            </Link>
            <Link className="" to="/music">
                Music
            </Link>
            <Link className="" to="/support">
                Support
            </Link>
        </div>
    );
};
export default App;
