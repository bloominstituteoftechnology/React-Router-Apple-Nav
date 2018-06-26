import React from 'react';
import Nav from '../Nav/Nav';


class NavWrapper extends React.Component {
    constructor(props) {
        console.log(props, 'navwrap')       
        super(props);
        this.state = {
            data : props.data,
        }   
    }
    

    render(){
    return(
        <div>
            <div>
                {this.state.data.map (data =>
                <Nav 
                key = {data.id} 
                category ={data.category}
                subCategory = {data.subCategory} />
                )}
            </div>
            
        </div>
    )
}
}

export default NavWrapper;
