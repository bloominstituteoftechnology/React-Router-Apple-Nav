import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            subNav: this.props
         }
    }

    getSub = (ID) => {
        const data = this.state.subNav;
        let subObj;
        let values;
        for (let i = 0; i < data.length; i++) {
            values = Object.values(data[i]);
            if (values.indexOf(ID) > -1) 
                subObj = data[i];
        }
        return subObj;
    }


    render() { 

        const list = this.props.match.params.ID;
        const subData = this.getSub(list);
        if (subData.sub.length === 0) {
            return null;
        }
        
        return (
            <div className="links-container">
                {subData.sub.map((subLink, index) => (
                    <div key={index} className="nav-links">
                        <Link to={`/${subLink.name}`} >
                        {subLink.name}
                        </Link>
                    </div>
                ))}
            </div>
    
        );
    }
}
 
export default SubNav;
  




