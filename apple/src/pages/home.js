import React from "react";
import Navigation from '../components/navigation'

export default props => {
    const { match } = props;
    console.log(match);
    return (
        <div className="home">
            <Navigation path={match.path}/>
        </div>
    );
};
