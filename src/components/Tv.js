import React from 'react';
import tv4kImg from '../img/tv/tv4k.png';
import tvImg from '../img/tv/tv.png';
import tvappImg from '../img/tv/tvapp.png';
import tv_accesoriesImg from '../img/tv/tv_accesories.png';
import tv_compareImg from '../img/tv/tv_compare.png';

export default () => {
    return (
         <div>
            <h1>TV Page</h1>
            <p> This is the TV Page </p>
            <div className="icon-row">
                <img src={tv4kImg} alt="tv4k"/>
                <img src={tvImg} alt="tv"/>
                <img src={tvappImg} alt="tvapp"/>
                <img src={tv_accesoriesImg} alt="tv_accesories"/>
                <img src={tv_compareImg} alt="tv_compare"/>
            </div>
        </div>
    );
};