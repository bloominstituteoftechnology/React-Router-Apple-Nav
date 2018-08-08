import React, {Component} from 'react';
import styled from 'styled-components';
import NavigationData from '../main_nav';
import {Link} from 'react-router-dom';

const SubNavigation = styled.div`
    
    display: block;
    justify-content: space-between;
    margin: 0;
    background-color: #141414;
    font-size: 14px;
    height: 86px;
    width: 100%;

`
const NavigationLinks = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

   
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        line-height: 3.14286;
        padding: 0 10px;
        
        height: 44px;
    

`

const getSub = (ID) => {
    const data = NavigationData;
    let subObj;
    let values;

    for (let i = 0; i < data.length; i++) {
        values = Object.values(data[i]);
        if (values.indexOf(ID) > -1) 
            subObj = data[i];
    }
    return subObj; 
}


const SubNav = (props) => {
    const list = props.match.params.ID;
    const subData = getSub(list);
     
        return (
            <SubNavigation>
            <NavigationLinks>
                {subData.sub.map((subLink, index) => (
                    <div key={index} className="nav-links">
                        <Link to={`/${subLink.name}`} >
                        {subLink.name}
                        </Link>
                    </div>
                ))}
            </NavigationLinks>
            </SubNavigation>
        );
    
}

export default SubNav;





/* class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: props,
         }
    }

    getSub = id => {
        const data = this.state.data;
        let subObj;
        let values;
        for (let i = 0; i < data.length; i++) {
            values = Object.values(data[i]);
            if (values.indexOf(id) > -1) 
                subObj = data[i];
        }
        return subObj;
    }


    render() { 

        const list = this.props.match.params.id;
        const subData = this.getSub(list);
        
        return (
            <div className="links-container">
                {subData.sub.map((subLink, index) => (
                    <div key={index} className="nav-links">
                        <Link to={`/${subLink.name}`} >
                        {subLink.name}
                        </Link>
                    </div>
                ))}
            </div>
    
        );
    }
}
 
export default SubNav;
 */

  




