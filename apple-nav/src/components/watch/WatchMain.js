import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleEdition from './AppleEdition';
import Hermes from './Hermes';
import NikePlus from './NikePlus';
import Series1 from './Series1';
import Series3 from './Series3';

const WatchMain = ({ match }) => {
  return (
    <div>
      <nav>
        <NavLink activeClassName="selected" to={`${match.url}/apple-edition`}>Apple Edition</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/hermes`}>Hermes</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/nike-plus`}>Nike Plus</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/series1`}>Series 1</NavLink>
        <NavLink activeClassName="selected" to={`${match.url}/series3`}>Series 3</NavLink>
      </nav>
      <Route path={`${match.url}/apple-edition`} component={AppleEdition}/>
      <Route path={`${match.url}/hermes`} component={Hermes}/>
      <Route path={`${match.url}/nike-plus`} component={NikePlus}/>
      <Route path={`${match.url}/series1`} component={Series1}/>
      <Route path={`${match.url}/series3`} component={Series3}/>
      
      {/*~~~~~~*/}

      <Route exact path={match.url} render={() => 
          <div>
            <h1>WATCHHH MAINNNNNNNN</h1>
          </div>
      }/>
   </div>
  );
};

export default WatchMain;