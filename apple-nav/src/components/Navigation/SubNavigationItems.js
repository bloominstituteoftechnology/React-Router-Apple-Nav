import React from 'react';
import { SubNavIcon, StyledIconWrapper, StyledSpan } from '../ReusableComponents/SubNavigation';
import './Navigation.css';

const SubNavigationItems = props => {
    return (
        <React.Fragment>
            
            {props.icons.icons.map(icon => {
                return <StyledIconWrapper className={icon.class} key={icon.text}>
                    <SubNavIcon src={icon.icon}></SubNavIcon>
                    <StyledSpan>{icon.text}</StyledSpan>
                </StyledIconWrapper>
            })}

        </React.Fragment>
    );
}

export default SubNavigationItems;