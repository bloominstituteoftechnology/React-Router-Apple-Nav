import React from 'react';

const Music = props => {
    return (
        <div>
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
        </div>
    );
};

export default Music;