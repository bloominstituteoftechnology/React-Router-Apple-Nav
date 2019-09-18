import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavWrapper from "./Components/NavWrapper";
import {
  Mac,
  Home,
  IPad,
  IPhone,
  Watch,
  Television,
  Music,
  Support,
  Cart,
  Search
} from "./Components/NavComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavWrapper />
        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={IPad} />
        <Route path="/iphone" component={IPhone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Television} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
        {/* Search and Cart modals */}
        <Route path="/search" component={Search} />
        <Route path="/cart" component={Cart} />
      </header>
    </div>
  );
}

export default App;
