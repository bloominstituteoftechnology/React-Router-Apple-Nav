import React from 'react';
import SubNav from '../SubNav';

const musicLinks = [
    {name: 'Apple Music', url: '/apple-music'},
    {name: 'iTunes', url: '/itunes'},
    {name: 'HomePod', url: '/homepod'},
    {name: 'iPod touch', url: '/ipod-touch'},
    {name: 'Music Accessories', url: '/music-accessories'},
    {name: 'Gift Cards', url: '/gift-cards'},
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