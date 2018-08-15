import React from 'react';

import navItems from '../../data';

function Content(props) {
    return (
        <div>
            <h3>{nav.subNavItem.find(subNav => `${nav.subNavItem.id}` ===
            props.match.params.nav.subNav.id).name} sucks.</h3>
        </div>
    );
}

export default Content;