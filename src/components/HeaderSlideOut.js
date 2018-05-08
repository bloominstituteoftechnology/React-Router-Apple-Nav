import React from 'react';

const HeaderSlide = props => {
    console.log(props)
    return (
        <div className='slide-bar container-fluid'>
            <div className="row slide-out">
                {props.props.map((element, i) => {
                    console.log(element[Object.keys(element).join('')])
                    return (
                        <div className='nav-el'>
                            <img key={i} src={element[Object.keys(element).join('')]} alt={i} />
                            <p>{Object.getOwnPropertyNames(element).join('')}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HeaderSlide;