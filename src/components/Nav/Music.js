import React from 'react';
import { FlexContainerWhite } from './Styles/Index';

const Music = props => {
    return (
        <FlexContainerWhite>
            <div>
                <img src={require('../../img/music/music.png')} />
            </div>
            <div>
                <img src={require('../../img/music/itunes.png')} />
            </div>
            <div>
                <img src={require('../../img/music/homepod.png')} />
            </div>
            <div>
                <img src={require('../../img/music/airpods.png')} />
            </div>
            <div>
                <img src={require('../../img/music/ipodtouch.png')} />
            </div>
            <div>
                <img src={require('../../img/music/accesories.png')} />
            </div>
            <div>
                <img src={require('../../img/music/gift.png')} />
            </div>
        </FlexContainerWhite>
    );
};

export default Music;