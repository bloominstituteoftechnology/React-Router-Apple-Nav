import React from 'react';
import macbookImg from '../img/mac/macbook.png';

// const macbookImg = '../img/mac/macbook.png';


export default () => {
    return (
         <div>
            <h1>Mac Page</h1>
            <p> This is the Mac Page </p>
            <div className="icon-row">
            <img src={macbookImg} alt="macbook"/>
            </div>
        </div>
    );
};