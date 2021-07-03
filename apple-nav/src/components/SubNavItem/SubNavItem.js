import React, {Component} from 'react';
import { NavItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom';

// const SubNavItem = ({toRender}) => {
    
//     return (
//         <NavItem>
//             <Card>
//                 <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=7&txt=50%C3%9750&w=50&h=50" alt="Card image cap" />
//                 <CardBody>
//                     <CardTitle>{toRender.name}</CardTitle>
//                     {toRender.new ? <CardText>New</CardText> : null}                    
//                 </CardBody>
//             </Card>            
//         </NavItem>
//     );
// };


class SubNavItem extends Component {
    componentDidMount({toRender} = this.props) {
        // console.log(toRender);
    }
    render() {
        const {toRender} = this.props;
        return (
            <NavItem className="custom-nav-link">
            <figure className="figure">
                {/* <img src="http://www.lepoint.fr/images/2015/01/30/star-wars-universe-3075506-jpg_2691048_660x281.JPG" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img> */}
                {/* <img src="https://source.unsplash.com/1600x900/?space,planet" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img> */}
                <img src={`https://source.unsplash.com/5${Math.floor(Math.random()*3)}x5${Math.floor(Math.random()*3)}/?apple-${toRender.name}`} className="figure-img img-fluid rounded" alt="Picture of {img}"></img>
            </figure>
            <p>{toRender.name}</p>
            {toRender.new ? <p>New</p> : null}
                
            </NavItem>
        );
    }
}

export default SubNavItem;