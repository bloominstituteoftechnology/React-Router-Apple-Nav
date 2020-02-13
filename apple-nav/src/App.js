import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubNav from "./components/SubNav/SubNav";
import Ipad from "./components/Ipad/Ipad";
import Tv from "./components/Tv/Tv";
import Watch from "./components/Watch/Watch";
import Music from "./components/Music/Music";
import Mac from "./components/Mac/Mac";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <Switch>
          <Route path="/mac" component={Mac} />
          <Route path="/ipad" component={Ipad} />
          <Route path="/music" component={Music} />
          <Route path="/tv" component={Tv} />
          <Route path="/watch" component={Watch} />
        </Switch>
      </div>
    );
  }
}

export default App;
