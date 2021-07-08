import React from 'react';

const SubHeader = props => {
    let linkName = props.match.params.product;
    return (
        
        <div>
            <div>
            
            {props.link.length > 0 &&
            props.links
                .find(link => link.product === linkName)
                .childProducts.map(link => <div>{link.product}</div>)}
            
            {/* {props.links.map(link => (
                <div>{link.product}</div>
            ))}  */}
            </div>
        </div>
    )
};

export default SubHeader;