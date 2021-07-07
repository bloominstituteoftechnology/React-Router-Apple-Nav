import React from 'react';
import { FlexContainerWhite } from './Styles/Index';

const Watch = props => {
    return (
        <FlexContainerWhite>
            <div>
                <img src={require('../../img/watch/watch4.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/watchnike+.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/watchhermes.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/watch3.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/watchos.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/bands.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/watch/compare.png')} />
            </div>
        </FlexContainerWhite>
    );
};

export default Watch;