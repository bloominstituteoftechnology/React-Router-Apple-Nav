import React from 'react' 

function Item ({match}) { 
    console.log(match);
        return (

            <div>
                <div>{match.params.itemId.toUpperCase()}</div>
                
            </div>


        ); 
    
}


export default Item; 