import React from 'react';

const MacSubItem = props => {
    console.log("props.match: ", props.match)
    return <h1>{props.match.params.macSubMenu}</h1>
}

export default MacSubItem;