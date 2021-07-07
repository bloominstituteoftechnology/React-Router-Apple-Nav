import React from 'react';
import Nav from './Nav';
import Subnav from './Subnav';
import Data from '../Data';

class NavWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
        }
    }
    render() { 
        return (
            <div>
                <Nav data={this.state.data} />
                <Subnav data={this.state.data} />
            </div>
          )
    }
}
 
export default NavWrapper;