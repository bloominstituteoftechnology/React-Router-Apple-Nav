import React from 'react';
// import {Route} from 'react-router-dom';
import SubNav from './SubNav';
import Nav from './Nav';
import Data from '../Data';



class NavWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: Data,
            selected:"mac"
         }
    }
    render() { 
        return ( 
            <div>
                <Nav data={this.state.data} />
                <SubNav data={this.state.data}/>
            </div>
         )
    }
}
 
export default NavWrapper;