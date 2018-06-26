import React from 'react';
import { SubNavIcon, StyledIconWrapper } from '../ReusableComponents/SubNavigation';
import './Navigation.css';

const SubNavigationItems = props => {
    return (
        <React.Fragment>
            
            {props.icons.icons.map(icon => {
                return <StyledIconWrapper key={icon.text}>
                    <SubNavIcon className={icon.class} src={icon.icon}></SubNavIcon>
                    <span>{icon.text}</span>
                </StyledIconWrapper>
            })}

        </React.Fragment>
    );
}

export default SubNavigationItems;