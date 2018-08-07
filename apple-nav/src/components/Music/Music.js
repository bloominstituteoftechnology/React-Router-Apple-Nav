import React from 'react';
import SubNav from '../SubNav';

const musicLinks = [
    {name: 'Apple Music', url: '/apple-music', img: 'https://www.apple.com/v/music/g/images/overview/icons/apple_music_large.svg'},
    {name: 'iTunes', url: '/itunes', img: 'https://www.apple.com/v/music/g/images/overview/icons/itunes_large.svg'},
    {name: 'HomePod', url: '/homepod', img: 'https://www.apple.com/v/music/g/images/overview/icons/homepod_icon_large.svg'},
    {name: 'iPod touch', url: '/ipod-touch', img: 'https://www.apple.com/v/music/g/images/overview/icons/ipod_touch_light_large.svg'},
    {name: 'Music Accessories', url: '/music-accessories', img: 'https://www.apple.com/v/music/g/images/overview/icons/accessories_large.svg'},
    {name: 'Gift Cards', url: '/gift-cards', img: 'https://www.apple.com/v/music/g/images/overview/icons/gift_cards_large.svg'},
]

const Music = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={musicLinks} width={'55vw'}/>
            <h1>{`\uf8ff`} Music</h1>
        </div>
    )
}

export default Music;