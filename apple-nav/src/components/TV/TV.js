import React from 'react';
import { Link } from 'react-router-dom';
const lsty = {
    margin: 10
};
class TV extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the TV Component</h1>
                <Link style={lsty} to='/TV/AppleTV4k'>Apple TV 4k</Link>
                <Link style={lsty} to='/TV/AppleTV'>Apple TV</Link>
                <Link style={lsty} to='/TV/TVApp'>TV App</Link>
                <Link style={lsty} to='/TV/Accessories'>Accessories</Link>
                <Link style={lsty} to='/TV/Compare'>Compare</Link>
            </div>
        )
    }
}
export default TV;