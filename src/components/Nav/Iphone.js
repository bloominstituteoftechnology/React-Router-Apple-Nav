import React from 'react';
import { FlexContainerBlack } from './Styles/Index';

const Iphone = props => {
    return (
        <FlexContainerBlack>
            <div>
                <img src={require('../../img/iphone/iphonexs.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/iphonexr.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/iphone8.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/iphone7.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/ios12.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/airpods.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/iphone/compare.png')} />
            </div>
        </FlexContainerBlack>
    );
};

export default Iphone;