import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import {
  Route,
  Link,
} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link className="linkStyle" exact to="/">Home</Link>
      <Link className="linkStyle" to="/mac">Mac</Link>
      <Link className="linkStyle" to="/ipad">iPad</Link>
      <Link className="linkStyle" to="/iphone">iPhone</Link>
      <Link className="linkStyle" to="/iwatch">iWatch</Link>
    </div>
  )
};

export default Navigation;