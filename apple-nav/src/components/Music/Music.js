import React from 'react';
import { Link } from 'react-router-dom';
const lsty = {
    margin: 10
};

class Music extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the Music Component</h1>
                <Link style={lsty} to='/Music/AppleMusic'>Apple Music</Link>
                <Link style={lsty} to='/Music/iTunes'>iTunes</Link>
                <Link style={lsty} to='/Music/HomePod'>HomePod</Link>
                <Link style={lsty} to='/Music/iPodtouch'>iPod touch</Link>
                <Link style={lsty} to='/Music/Music Accessories'>Music Accessories</Link>
                <Link style={lsty} to='/Music/GiftCards'>Gift Cards</Link>

            </div>
        )
    }
}
export default Music;