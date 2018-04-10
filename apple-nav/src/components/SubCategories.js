import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
    'iPad',
    'iPad Mini',
    'iPad Mini 4',
    'iOS 12',
    'Accessories',
    'Compare'
];

const iphones = [
    'iPhone X',
    'iPhone 8',
    'iPhone 7',
    'iPhone 6',
    'iPhone 5',
    'iOS 12',
    'Accessories',
    'Compare'
];

const tvs = [
    'Apple TV 4K',
    'Apple TV',
    'TV App',
    'Accessories',
    'Compare'
];

const watches = [
    'Apple Watch Series 3',
    'Apple Watch Nike+',
    'Apple Watch Hermes',
    'Apple Watch Edition',
    'Apple Watch Series 1',
    'watchOS',
    'Bands',
    'Accessories',
    'Compare'
];

const musics =  [
    'Apple Music',
    'iTunes',
    'HomePad',
    "iPod touch",
    "Music Accessories",
    "Gift Cards"
];

// mac
const Mac = ({ match }) => {
    return <div className="">Mac{match.params.name}</div>;
};
const Macs = () => {
    return (
        <div className="substyles">
            {macs.map(product => {
                return (
                    <Link className="substyle" to={`/mac/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};

// Ipad
const Ipad = ({ match }) => {
    return <div className="">Ipad{match.params.name}</div>;
};
const Ipads = () => {
    return (
        <div className="">
            {ipads.map(product => {
                return (
                    <Link className="" to={`/ipads/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};


const Iphone = ({ match }) => {
    return <div className="">iPhone{match.params.name}</div>;
};
const Iphones = () => {
    return (
        <div className="">
            {iphones.map(product => {
                return (
                    <Link className="" to={`/iphones/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};

// Watch
const Watch = ({ match }) => {
    return <div className="">Watch{match.params.name}</div>;
};
const Watches = () => {
    return (
        <div className="">
            {watches.map(product => {
                return (
                    <Link className="" to={`/watches/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};

//TV
const TV = ({ match }) => {
    return <div className="">TVs{match.params.name}</div>;
};
const TVS = () => {
    return (
        <div className="">
            {tvs.map(product => {
                return (
                    <Link className="" to={`/tvs/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};

//musics
const Music = ({match}) => {
  return <div>Music{match.params.name}</div>
};
const Musics = () => {
    return (
        <div className="">
            {musics.map(product => {
                return (
                    <Link className="" to={`/musics/${product}`} key={product}>
                        {" "}
                        {product}{" "}
                    </Link>
                );
            })}
        </div>
    );
};
export {Macs, Mac, Ipads, Ipad, Iphones, Iphone, Watches,Watch, TVS, TV, Musics, Music};