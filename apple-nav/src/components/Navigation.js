import React from 'react';
import SubNav from './SubNav';

class Navigation extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            sublinks: props.links
        }
    }

    render() {
    return (
        <div>
            {console.log(this.state.sublinks)}
    {this.state.sublinks.map(sublink => {
    return <SubNav sublink={sublink}/>
    })};
    </div>
)
}
}

export default Navigation;