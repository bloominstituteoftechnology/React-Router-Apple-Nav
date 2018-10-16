import React from 'react';

import SubButton from './SubButton';

const SubNav = props => {

    if (!props.buttons.length) {
        return <h2>Loading...</h2>
    }

    const button = props.buttons.find((button) => `${button.id}` === props.match.params.id);

    if (button) {
        if (button.id === "home" || button.id === "support" || button.id === "search" || button.id === "bag") {
            return null;
        } else {
            return (
                <div className="sub-nav-background">
                    <div className="sub-nav-container">
                        {(button.subNav) ? button.subNav.map((subButton) =>
                            <SubButton subButton={subButton} />) :
                            `${button.id} and ${button.content}`}
                    </div>
                </div>
            );

        }
    } else {
        return <h1>404</h1>;
    }
}

export default SubNav;