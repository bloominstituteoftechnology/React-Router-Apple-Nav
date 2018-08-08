import React from "react";

function Content (props) {
    {console.log(props)}
    return(
        <div>
            <h1>{props.match.params.contentName}</h1>
        </div>
    );

}

export default Content;