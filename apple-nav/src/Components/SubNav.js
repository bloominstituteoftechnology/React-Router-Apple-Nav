import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const macs = [
    'MacBook', 
    'MacBook Air', 
    'MacBook Pro', 
    'iMac', 
    'iMac Pro', 
    'Mac Mini', 
    'Accessories', 
    'High Sierra', 
    'Compare'    
];

const ipads = [
    'iPad Pro', 
    'Ipad New', 
    'iPad mini 4', 
    'iOS 11', 
    'Accessories', 
    'Compare' 
];

const iphone = [
    'iPhone X New', 
    'iPhone 8 New', 
    'iPhone 7', 
    'iPhone 6', 
    'iPhone SE', 
    'iOS 11', 
    'Accessories', 
    'Compare'
];

const watches = [
    'Apple Watch Series 3',
    'Apple Watch Nike+',
    'Apple Watch Hermès',
    'Apple Watch Edition',
    'Apple Watch Series 1',
    'watchOS',
    'Bands',
    'Accessories',
    'Compare'
];

const tvs = [
    'Apple TV 4K New',
    'Apple TV',
    'TV App',
    'Accessories',
    'Compare'
];

const musics =  [
    'Apple Music',
    'iTunes',
    'HomePod New',
    "iPod touch",
    "Music Accessories",
    "Gift Cards"
];

const Mac = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Macs = () => {
    return (
        <div>{macs.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};

const Ipad = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Ipads = () => {
    return (
        <div>{ipads.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};
const Iphone = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Iphones = () => {
    return (
        <div>{iphone.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};
const Watch = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Watches = () => {
    return (
        <div>{watches.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};
const Tv = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Tvs = () => {
    return (
        <div>{tvs.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};

const Music = ({ match }) => {
    return <div>{match.params.name}</div>;
}

const Musics = () => {
    return (
        <div>{musics.map(product =>{
            return(
                <Link className="subLinks" to={`/${product}`} key={product}>{product}</Link>
            );
        })}
        </div>
    );
};

export {Mac, Macs, Ipad, Ipads, Iphone, Iphones, Watch, Watches, Tv, Tvs, Music, Musics};