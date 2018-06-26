import React from 'react';


const TopMenuItem = (props) => {
    return (
        <div>
          <Link to='/'>{props.item}  </Link>
        </div>
    );
};

export default TopMenuItem;