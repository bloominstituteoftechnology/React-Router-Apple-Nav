import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import NavWrapper from "./Components/NavWrapper";
import Home from "./Components/Home";
import Mac from "./Components/Mac";
import IPad from "./Components/IPad";
import IPhone from "./Components/IPhone";
import Watch from "./Components/Watch";
import TV from "./Components/TV";
import Music from "./Components/Music";
import Support from "./Components/Support";

function App() {
  return (
    <div className="App">
      <NavWrapper/>


      <Route
          exact
          path="/"
          component={Home}
        />

      <Route path="/mac">
          <Mac />
      </Route>

      <Route path="/ipad">
          <IPad />
      </Route>

      <Route path="/iphone">
          <IPhone />
      </Route>

      <Route path="/watch">
          <Watch />
      </Route>

      <Route path="/tv">
          <TV />
      </Route>

      <Route path="/music">
          <Music />
      </Route>

      <Route path="/support">
          <Support />
      </Route>

    </div>
  );
}

export default App;
