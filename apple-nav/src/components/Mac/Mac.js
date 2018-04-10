import React from 'react';
import { Link } from 'react-router-dom';
const lsty = {
    margin: 10
};
class Mac extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the Mac Component</h1>
                <Link style={lsty} to='/Mac/MacBook'>MacBook</Link>
                <Link style={lsty} to='/Mac/MacBookAir'>MacBook Air</Link>
                <Link style={lsty} to='/Mac/MacBookPro'>MacBook Pro</Link>
                <Link style={lsty} to='/Mac/iMac'>iMac</Link>
                <Link style={lsty} to='/Mac/iMacPro'>iMac Pro</Link>
                <Link style={lsty} to='/Mac/MacPro'>Mac Pro</Link>
                <Link style={lsty} to='/Mac/Macmini'>Mac mini</Link>
                <Link style={lsty} to='/Mac/Accessories'>Accessories</Link>
                <Link style={lsty} to='/Mac/HighSierra'>High Sierra</Link>
                <Link style={lsty} to='/Mac/Compare'>Compare</Link>




            </div>
        )
    }
}
export default Mac;