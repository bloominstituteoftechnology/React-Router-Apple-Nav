////navigation header 
import React from 'react';
import Nav from './Nav';
import SubNav from './SubNav';
import Data from '../data';



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
            <div>
            <Nav data={this.state.data} />
            </div>
            <div>
            <SubNav />
            </div>
            </div>
         )
    }
}
 
export default NavWrapper