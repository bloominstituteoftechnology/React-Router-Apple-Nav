import React from 'react' 
import styled from 'styled-components'; 

const ItemName = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold; 
    margin-top: 20px;
`;

function Item ({match}) { 
    console.log(match);
        return (

            <ItemName>
                <div>{match.params.itemId.toUpperCase()}</div>
                
            </ItemName>


        ); 
    
}


export default Item; 