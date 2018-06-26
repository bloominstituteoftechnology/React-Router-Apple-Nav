import React from 'react';
import SubNav from '../SubNav/SubNav';

class Nav extends React.Component {
    constructor(props) {
        console.log(props, 'nav')       
        super(props);
        this.state = {
            category: props.category,
            subCategory : props.subCategory,
        }   
    }
    
    render(){
    return (
        <div>

            <span>
            {this.state.category} 
            </span>

            {/* <span>
            {this.state.subCategory.map (subCategory => 
                <SubNav key = {Math.random()} subCategory = {subCategory.info} />
            )}
            </span> */}

        </div>
    )
    }
}

export default Nav;