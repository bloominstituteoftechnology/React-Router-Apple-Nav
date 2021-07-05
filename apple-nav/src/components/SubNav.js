import React, {Component} from 'react';
import styled from 'styled-components';
import NavigationData from '../main_nav';
import {Link} from 'react-router-dom';

const SubNavigation = styled.div`
    
    padding: 12px  0;
    position: relative;
    width: 100%;
    z-index: 9987;
    background-color: #141414;
`
const NavigationLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: 980px;
    height: 92px;
`

const NavLinks = styled.div`

       > a { color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.2rem;
        letter-spacing: -.01em;
        line-height: 3.14286;
        padding: 0 10px;
        height: 44px;
       }
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
                    <NavLinks key={index}>
                        <Link to={`/${subLink.name}`} >
                        {subLink.name}
                        </Link>
                    </NavLinks>
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

  




