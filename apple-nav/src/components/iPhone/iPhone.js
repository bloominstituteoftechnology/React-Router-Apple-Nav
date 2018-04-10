import React from 'react';
import { Link } from 'react-router-dom';


const lsty = {
    margin: 10
};
class IPhone extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the IPhone Component</h1>
                <Link style={lsty} to='/iPhone/iPhoneX'>iPhone X</Link>
                <Link style={lsty} to='/iPhone/iPhone8'>iPhone 8</Link>
                <Link style={lsty} to='/iPhone/iPhone7'>iPhone 7</Link>
                <Link style={lsty} to='/iPhone/iPhone6s'>iPhone 6s</Link>
                <Link style={lsty} to='/iPhone/iPhoneSE'>iPhone SE</Link>
                <Link style={lsty} to='/iPhone/iOS11'>iOS 11</Link>
                <Link style={lsty} to='/iPhone/Accessories'>Accessories</Link>
                <Link style={lsty} to='/iPhone/Compare'>Compare</Link>
            </div>

        )
    }
}
export default IPhone;