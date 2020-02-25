import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = ({data}) => {
    console.log("I'm MainNav props data:", data);
    return (
        <div>
            <h1>I'm the Main Nav</h1>
            {data.map(item => (
                <Link to={`/${item.id}`}>
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MainNav;