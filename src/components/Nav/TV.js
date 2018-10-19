import React from 'react';
import { FlexContainerBlack } from './Styles/Index';

const TV = props => {
    return (
        <FlexContainerBlack>
            <div>
                <img src={require('../../img/tv/tv4k.png')} />
            </div>
            <div>
                <img src={require('../../img/tv/tv.png')} />
            </div>
            <div>
                <img src={require('../../img/tv/app.png')} />
            </div>
            <div>
                <img src={require('../../img/tv/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/tv/compare.png')} />
            </div>
        </FlexContainerBlack>
    );
};

export default TV;