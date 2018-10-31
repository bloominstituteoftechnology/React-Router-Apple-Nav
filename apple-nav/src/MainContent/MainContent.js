import React from 'react';

const MainContent=(props)=>{
return(
    <div>{props.productTypes.map(
        (productType)=>{
            if(productType.name===props.match.params.id){
                return(
                    productType.types.map(
                        (type)=>{
                           if(type.typeName===props.match.params.itemid){
                               return(
                                   type.typeName
                               )
                           }
                        }
                        

                    )
                )
            }
        }
    )}</div>


)

}

export default MainContent;