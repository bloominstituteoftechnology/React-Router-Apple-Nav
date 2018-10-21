import React,{ Component }from 'react';
import { Link } from 'react-router-dom';
import NavItem  from "./navItem";



class Nav extends Component {
  render() {
    
    return (
      <div>
        <header>
        {this.props.navlists.map((item,index) =>{
          return(
          <Link to={`/${item}`}>
            <NavItem key={index} item={item} />
          </Link>
          ); 
        })}
        </header>
      </div>
    );
  }
}
 
export default Nav ;