import React from 'react';
import { StyledIconWrapper } from '../ReusableComponents/SubNavigation';
import './Navigation.css';

const SubNavigationItems = props => {
    return (
        <React.Fragment>

            {props.icons.icons.map(icon => {
                return <StyledIconWrapper className={icon.class} key={icon.text}>
                    <img src={icon.icon} alt=''></img>
                    <span>{icon.text}</span>
                </StyledIconWrapper>
            })}

        </React.Fragment>
    );
}

export default SubNavigationItems;