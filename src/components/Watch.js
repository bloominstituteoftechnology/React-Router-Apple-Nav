import React from 'react';
import watch4Img from '../img/watch/watch4.png';
import watchnikeImg from '../img/watch/watchnike+.png';
import watchhermesImg from '../img/watch/watchhermes.png';
import watch3Img from '../img/watch/watch3.png';
import watchosImg from '../img/watch/watchos.png';
import bandsImg from '../img/watch/bands.png';
import watch_accesoriesImg from '../img/watch/watch_accesories.png';
import watch_compareImg from '../img/watch/watch_compare.png';

export default () => {
    return (
         <div>
            <h1>W A T C H Page</h1>
            <p> This is the Watch Page </p>
            <div className="icon-row">
                <img src={watch4Img} alt="watch4"/>
                <img src={watchnikeImg} alt="watchnike+"/>
                <img src={watchhermesImg} alt="watchhermes"/>
                <img src={watch3Img} alt="watch3"/>
                <img src={watchosImg} alt="watchos"/>
                <img src={bandsImg} alt="bands"/>
                <img src={watch_accesoriesImg} alt="watch_accesories"/>
                <img src={watch_compareImg} alt="watch_compare"/>
            </div>
        </div>
    );
};