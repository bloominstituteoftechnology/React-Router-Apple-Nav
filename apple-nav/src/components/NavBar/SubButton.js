import React from 'react';

const SubButton = props => {
    return (
        <div className="sub-nav-button">
            <img src={props.subButton.img} alt={props.subButton.content} />
            <div className="sub-nav-button-text">{props.subButton.content}</div>
        </div>
    );
}

export default SubButton;