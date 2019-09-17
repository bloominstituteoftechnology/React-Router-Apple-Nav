import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavWrapper from "./components/NavWrapper";
import Home from "./components/Home";
import { NavInfo } from "./data/data";

function App() {
  const [navInfo] = useState(NavInfo);
  // console.log(Object.values(navInfo));
  return (
    <div>
      {navInfo ? <NavWrapper navInfo={navInfo} /> : <div>"Loading..."</div>}

      <Route exact path="/" component={Home} />

      {navInfo
        ? Object.keys(navInfo).map((key, index) => {
            return Object.values(navInfo)[index].map((value, index2) => {
              console.log(`/${key}/${value.split(" ").join("")}`);
              return (
                <Route
                  key={`${index} + ${index2}`}
                  exact
                  path={`/${key}/${value.split(" ").join("")}`}
                  render={() => <div>{value}</div>}
                />
              );
            });
          })
        : null}
    </div>
  );
}

export default App;
