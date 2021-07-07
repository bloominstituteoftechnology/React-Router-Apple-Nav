import React from 'react';
import { Link } from 'react-router-dom';
const lsty = {
    margin: 10
};
class Watch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the Watch Component</h1>
                <Link style={lsty} to='/Watch/AppleWatchSeries3'>Apple Watch Series 3</Link>
                <Link style={lsty} to='/Watch/AppleWatchNike+'>Apple Watch Nike+</Link>
                <Link style={lsty} to='/Watch/AppleWatchHermes'>Apple Watch Hermes</Link>
                <Link style={lsty} to='/Watch/AppleWatchEdition'>Apple Watch Editions</Link>
                <Link style={lsty} to='/Watch/AppleWatchSeries1'>Apple Watch Series 1</Link>
                <Link style={lsty} to='/Watch/watchOS'>watchOS</Link>
                <Link style={lsty} to='/Watch/Bands'>Bands</Link>
                <Link style={lsty} to='/Watch/Accessories'>Accessories</Link>
                <Link style={lsty} to='/Watch/Compare'>Compare</Link>

            </div>
        )
    }
}
export default Watch;