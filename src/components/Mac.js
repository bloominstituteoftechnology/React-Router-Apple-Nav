import React from 'react';
import macbookImg from '../img/mac/macbook.png';
import macbookairImg from '../img/mac/macbookair.png';
import macbookproImg from '../img/mac/macbookpro.png';
import imacImg from '../img/mac/imac.png';
import imacproImg from '../img/mac/imacpro.png';
import macproImg from '../img/mac/macpro.png';
import macminiImg from '../img/mac/macmini.png';
import accesoriesImg from '../img/mac/accesories.png';
import mojaveImg from '../img/mac/mojave.png';
import compareImg from '../img/mac/compare.png';

// const macbookImg = '../img/mac/macbook.png';


export default () => {
    return (
         <div>
            <h1>Mac Page</h1>
            <p> This is the Mac Page </p>
            <div className="icon-row">
                <img src={macbookImg} alt="macbook"/>
                <img src={macbookairImg} alt="macbookair"/>
                <img src={macbookproImg} alt="macbookpro"/>
                <img src={imacImg} alt="imac"/>
                <img src={imacproImg} alt="imacpro"/>
                <img src={macproImg} alt="macpro"/>
                <img src={macminiImg} alt="macmini"/>
                <img src={accesoriesImg} alt="accesories"/>
                <img src={mojaveImg} alt="mojave"/>
                <img src={compareImg} alt="compare"/>
            </div>
        </div>
    );
};