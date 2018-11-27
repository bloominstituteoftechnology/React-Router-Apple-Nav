import React from 'react';

export default function NavSub({parentName, history, location, data}) {

  return (

    <div className='sub-bar'>

      {data.map(subItem => {

        return (

          <div onClick={() => /*history.replace(`${parentName}/${subItem.name}`)*/null} className='sub-link'>

            <img src={subItem.img} />
            <span>{subItem.name}</span>

          </div>

        );

      })}

    </div>

  );

}
