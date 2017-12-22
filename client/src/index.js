import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SubNav from "./components/SubNav/SubNav";
import ItemDisplay from './components/ItemDisplay/ItemDisplay';
import mockData from "./NavData";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      {Object.keys(mockData).map((mockKey, i) => {
        return (
          <div key={`r${i}`}>
            <Route path={`/${mockKey}`} component={SubNav} key={`sn${i}`} />
            <Route path={`/${mockKey}/:item`} component={ItemDisplay} key={`item${i}`} />
          </div>
        );
      })}
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
