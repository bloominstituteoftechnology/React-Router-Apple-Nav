import React from 'react';
import { FlexContainerBlack } from './Styles/Index';

const Mac = props => {
    return (
        <FlexContainerBlack>
            <div>
                <img src={require('../../img/mac/macbook.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/macbookair.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/macbookpro.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/imac.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/imacpro.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/macpro.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/macmini.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/mojave.png')} />
            </div>
            <div>
                <img src={require('../../img/mac/compare.png')} />
            </div>
        </FlexContainerBlack>
    );
};

export default Mac;
