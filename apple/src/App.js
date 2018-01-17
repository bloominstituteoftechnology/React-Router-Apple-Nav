import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
  Support
} from "./SubCategories";

const App = () => (
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

      <Route exact path="/tv" component={TVs} />
      <Route exact path="/tv/:product" component={TV} />

      <Route exact path="/music" component={MusicList} />
      <Route exact path="/music/:product" component={Music} />

      <Route exact path="/support" component={Supports} />
      <Route exact path="/support/:product" component={Support} />
    </div>
  </BrowserRouter>
);

const Navigation = () => {
  return (
    <div className="linkstyles">
      <Link className="linkstyle" to="/mac">
        Mac
      </Link>
      <Link className="linkstyle" to="/ipad">
        ipad
      </Link>
      <Link className="linkstyle" to="/iphone">
        iPhone
      </Link>
      <Link className="linkstyle" to="/watch">
        Watch
      </Link>
      <Link className="linkstyle" to="/tv">
        TV
      </Link>
      <Link className="linkstyle" to="/music">
        Music
      </Link>
      <Link className="linkstyle" to="/support">
        Support
      </Link>
    </div>
  );
};

export default App;
