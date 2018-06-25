import React from 'react';

const SubNavigationItems = props => {
    return (
        <div>
            {props.icons.icons.map(icon => {
                return <i key={icon.text} className={icon.icon}>{icon.text}</i>
            })}
        </div>
    );
}

export default SubNavigationItems;