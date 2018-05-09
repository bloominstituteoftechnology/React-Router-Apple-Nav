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
            <NavItem>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=7&txt=50%C3%9750&w=10&h=10" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{toRender.name}</CardTitle>
                        {toRender.new ? <CardText>New</CardText> : null}                    
                    </CardBody>
                </Card>            
            </NavItem>
        );
    }
}

export default SubNavItem;