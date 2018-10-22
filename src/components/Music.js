import React from 'react';
import applemusicImg from '../img/music/music.png';
import itunesImg from '../img/music/itunes.png';
import homepodImg from '../img/music/homepod.png';
import airpodsImg from '../img/music/airpods.png';
import ipodtouchImg from '../img/music/ipodtouch.png';
import musicaccessoriesImg from '../img/music/accesories_2.png';
import giftcardsImg from '../img/music/gift.png';

export default () => {
    return (
         <div>
            <h1>Music Page</h1>
            <p> This is the Music Page </p>
            <div className="icon-row">
                <img src={applemusicImg} alt="applemusic"/>
                <img src={itunesImg} alt="itunes"/>
                <img src={homepodImg} alt="homepod"/>
                <img src={airpodsImg} alt="airpods"/>
                <img src={ipodtouchImg} alt="ipodtouch"/>
                <img src={musicaccessoriesImg} alt="musicaccessories"/>
                <img src={giftcardsImg} alt="giftcards"/>
            </div>
        </div>
    );
};