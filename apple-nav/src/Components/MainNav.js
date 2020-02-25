import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/apple-logo.svg';

const MainNav = ({data}) => {
    console.log("I'm MainNav props data:", data);
    return (
        <div className="main-nav">
            <Link to="/">
                <img className="logo" src={Logo} alt="apple logo" />
            </Link>
            
            {data.map(item => (
                <Link to={`/${item.id}`}>
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                </Link>
            ))}
            <p>Support</p>

        </div>
    );
}

export default MainNav;