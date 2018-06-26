import React from 'react';
// import {Route} from 'react-router-dom';
import SubNav from './SubNav';
import Nav from './Nav';
import Data from '../Data';



class NavWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: Data
         }
    }
    render() { 
        return ( 
            <div>
                <p>NavWrapper</p>
                <Nav data={this.state.data} />
                <SubNav />
             
            </div>
         )
    }
}
 
export default NavWrapper;