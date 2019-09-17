import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import SubNav from "./SubNav";

function NavWrapper(props) {
  return (
    <>
      <nav>
        {!props.navInfo ? (
          <div>Loading...</div>
        ) : (
          Object.keys(props.navInfo).map((value, index) => (
            <Nav key={index} navInfo={value} />
          ))
        )}
      </nav>
      {!props.navInfo ? (
        <div>Loading...</div>
      ) : (
        Object.keys(props.navInfo).map((value, index) => (
          <Route
            key={index}
            path={`/${value}/`}
            render={() => (
              <SubNav
                key={index}
                navInfo={Object.entries(props.navInfo)[index]}
              />
            )}
          />
        ))
      )}
    </>
  );
}

export default NavWrapper;
