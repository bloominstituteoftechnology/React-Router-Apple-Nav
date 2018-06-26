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
    {this.state.sublinks.map(sublink => {
    return <SubNav sublink={sublink}/>
    })};
    </div>
)
}
}

export default Navigation;