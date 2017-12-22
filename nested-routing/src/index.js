import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Mac from "./components/Mac/Mac";
import Ipad from './components/Ipad/Ipad';
import Iphone from './components/Iphone/Iphone';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={App} />
      <Route path="/mac" component={Mac} />
      <Route path="/ipad" component={Ipad} />
      <Route path="/iphone" component={Iphone} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
