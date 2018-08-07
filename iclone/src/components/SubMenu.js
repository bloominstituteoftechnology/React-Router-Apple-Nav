import React from 'react';

function SubMenu(props) {
   const submenu = props.match.params.subMenu.toLowerCase()+'Items';
   console.log(props[submenu]);
   return(
        <div>
            {props[submenu].map((subitem,i)=>
            <button key={i}>
                {subitem}
            </button>
            )}
        </div>
    )
}

export default SubMenu;