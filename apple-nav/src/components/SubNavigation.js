import React from 'react';
import { NavLink } from 'react-router-dom';
import SubNavLink from './SubNavLink';

const SubNavigation = props => {
    const dataset = props.data.find(dataset => `${dataset.dataName}` === props.match.params.dataName);
    let shouldNotBeDark = true;

    if (dataset) {
        if (dataset.dataName === 'iphone' || dataset.dataName === 'tv') {
            shouldNotBeDark = false;        
        }

        return(
            <nav 
                className={shouldNotBeDark ? 'sub-nav' : 'sub-nav dark'}
            >
                <div className={shouldNotBeDark ? 'sub-nav-links' : 'sub-nav-links dark-links'}>
                    {dataset.subData.map(item => {
                        return <SubNavLink item={item} />
                    })}
                </div>
            </nav>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}

export default SubNavigation;