import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import ForGood from './ForGood';

const Away = () => {
  return (
    <div>
      <h1>Away</h1>
      <Link to="/Away/ForGood">For Good</Link>
    </div>
  );
};
export default Away;
