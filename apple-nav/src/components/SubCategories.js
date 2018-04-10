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

const music =  [
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
    return <div className="">Ipad{match.params.name}</div>;
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




export {Macs, Mac, Ipads, Ipad, Iphones, Iphone};