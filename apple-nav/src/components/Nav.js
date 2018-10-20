import React from 'react'; 


const Nav = props => {
    return (
        <div className="nav-container">
            <i className="fab fa-apple"></i>
            <a href="#">iPad</a>
            <a href="#">Mac</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">TV</a>
            <a href="#">Music</a>
            <a href="#">Support</a>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag"></i>
        </div>
    )
}

export default Nav;