import React from 'react';
import SubNav from './SubNav';
import iphonexr from '../img/iphonexr_dark_large.svg';
import iphonexs from '../img/iphonexs_dark_large.svg';
import iphone8 from '../img/iphone8_dark_large.svg';
import ios from '../img/ios_dark_large.svg';
import airpods from '../img/airpods_dark_large.svg';
import accessories from '../img/accessories_dark_large.svg';
import compare from '../img/compare_dark_large.svg';

const image_object = [
    {
        image: iphonexs,
        text: "iPhone Xs",
    },
    {
        image: iphonexr,
        text: "iPhone Xr",
    },
    {
        image: iphone8,
        text: "iPhone 8",
    },
    {
        image: iphone8,
        text: "iPhone 7",
    },
    {
        image: ios,
        text: "iOS 12",
    },
    {
        image: airpods,
        text: "AirPods",
    },
    {
        image: accessories,
        text: "Accessories",
    },
    {
        image: compare,
        text: "Compare",
    },
]

const Iphone = (props) => {
    return (
        <div>
            <SubNav images={image_object}></SubNav>
            <div>Iphone stuff here</div>
        </div>
    )
}

export default Iphone;