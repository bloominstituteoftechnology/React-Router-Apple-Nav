import React from 'react';
import { SubNavIcon, StyledIconWrapper } from '../ReusableComponents/SubNavigation';

const SubNavigationItems = props => {
    return (
        <React.Fragment>
            
            {props.icons.icons.map(icon => {
                return <StyledIconWrapper key={icon.text}>
                    <SubNavIcon src={icon.icon}></SubNavIcon>
                    <span>{icon.text}</span>
                </StyledIconWrapper>
            })}

        </React.Fragment>
    );
}

export default SubNavigationItems;