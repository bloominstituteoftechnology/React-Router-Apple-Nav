import React from 'react';
import { FlexContainerWhite } from './Styles/Index';

const Ipad = props => {
    return (
        <FlexContainerWhite>
            <div>
                <img src={require('../../img/ipad/ipadpro.png')} />
            </div>
            <div>
                <img src={require('../../img/ipad/ipad.png')} />
            </div>
            <div>
                <img src={require('../../img/ipad/ipadmini4.png')} />
            </div>
            <div>
                <img src={require('../../img/ipad/ios.png')} />
            </div>
            <div>
                <img src={require('../../img/ipad/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/ipad/compare.png')} />
            </div>
        </FlexContainerWhite>
    );
};

export default Ipad;