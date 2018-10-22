import React from 'react';
import iphonexsImg from '../img/iphone/iphonexs.png';
import iphonexrImg from '../img/iphone/iphonexr.png';
import iphone8Img from '../img/iphone/iphone8.png';
import iphone7Img from '../img/iphone/iphone7.png';
import ios12Img from '../img/iphone/ios12.png';
import airpodsImg from '../img/iphone/airpods_2.png';
import accesoriesImg from '../img/iphone/accesories_3.png';
import compareImg from '../img/iphone/compare_2.png';

export default () => {
    return (
         <div>
            <h1>IPHONE Page</h1>
            <p> This is the IPHONE Page </p>
            <div className="icon-row">
                <img src={iphonexsImg} alt="iphonexs"/>
                <img src={iphonexrImg} alt="iphonexr"/>
                <img src={iphone8Img} alt="iphone8"/>
                <img src={iphone7Img} alt="iphone7"/>
                <img src={ios12Img} alt="ios12"/>
                <img src={airpodsImg} alt="airpods_2"/>
                <img src={accesoriesImg} alt="accesories_3"/>
                <img src={compareImg} alt="compare_2"/>
            </div>
        </div>
    );
};