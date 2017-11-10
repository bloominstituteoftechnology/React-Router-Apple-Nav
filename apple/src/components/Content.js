import React from 'react';

const Content = (props) => {
    if ( !props.storage.mainNav ) return <h1>...Loading Content</h1>
    const subNavId = props.routeProps.match.params.subnav;
    const contentId = props.routeProps.match.params.content;
    const img = props.storage.mainNav[subNavId].subNav[contentId].img;

    return (
        <img src={img} alt="w: 600 h: 600"/>
    );
};

export default Content;