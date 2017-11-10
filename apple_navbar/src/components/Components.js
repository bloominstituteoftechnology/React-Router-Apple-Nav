import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const iphoneProducts = ['4', '4s', '6sPlus', '7s', '8Plus', 'X'];
const macProducts = ['MacBookPro', 'MacBookAir', 'iMac', 'iMacPro'];
const ipadProducts = ['2nd Gen', '3rd Gen', 'iPad Air', 'iPad Pro'];
const iwatchProducts = ['iWatch Sports', 'iWatch Classic', 'iWatch Fancy'];


export const iPhones = () => (
  <ul>
  	{iphoneProducts.map((iphone) => {
   		return <Link className="Link" to={`/iphone/${iphone.toLowerCase()}`} key={iphone}> {iphone} </Link>;
  	})}
  </ul>
);
export const iPhone = ({ match }) => {
  return (
    <div>The page we are at is for the iPhone {match.params.name}</div>
  );
};


export const Macs = () => (
  <ul>
  	{macProducts.map((mac) => {
   		return <Link className="Link" to={`/mac/${mac.toLowerCase()}`} key={mac}> {mac} </Link>;
  	})}
  </ul>
);
export const Mac = ({ match }) => {
  return (
    <div>The page we are at is for the {match.params.name}</div>
  );
};


export const iPads = () => (
  <ul>
  	{ipadProducts.map((ipad) => {
   		return <Link className="Link" to={`/ipad/${ipad.toLowerCase()}`} key={ipad}> {ipad} </Link>;
  	})}
  </ul>
);
export const iPad = ({ match }) => {
  return (
    <div>The page we are at is for the {match.params.name}</div>
  );
};


export const iWatches = () => (
  <ul>
  	{iwatchProducts.map((iwatch) => {
   		return <Link className="Link" to={`/iwatch/${iwatch.toLowerCase()}`} key={iwatch}> {iwatch} </Link>;
  	})}
  </ul>
);
export const iWatch = ({ match }) => {
  return (
    <div>The page we are at is for the {match.params.name}</div>
  );
};

export const Home = () => <h1>Home</h1>;

//export default { Home, iPad, iWatch, iPhone, Mac, iPads, iWatches, iPhones, Macs };