import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Fade, Nav } from 'reactstrap';
import { SubNavItem } from '../../components';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: true,
            subSectionContent: { // 
                'Mac': [
                    {
                    'icon': 'iconUrl',
                    'name': 'MAc-1',
                    'new': true
                    },
                    {
                    'icon': 'iconUrl',
                    'name': 'MAc-2',
                    'new': false
                    }
                ],
                'iPad': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ],
                'iPhone': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ],
                'Watch': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ],
                'TV': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ],
                'Music': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ],
                'Support': [
                    {
                    'icon': 'iconUrl',
                    'name': 'sub',
                    'new': false
                    }
                ]
            }, //  {[{icon, name, new},{icon, name, new}]} 
            toRender: {}
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
       const subSectionContent =  this.state.subSectionContent;
       console.log(subSectionContent);
       for (let item in subSectionContent ) {
           console.log(subSectionContent[item]);
           let aux = subSectionContent[item];
           for (let i = 0; i < 6; ++i) {
               console.log(i);
               aux.push(
                   {
                    'icon': 'iconUrl',
                    'name': `${item}.${i}`,
                    'new': Math.random() > 0.5 ? true: false
                   }
               )
           }
           console.log(aux);
           this.setState({ [subSectionContent[item]]: aux  });
       }
    }
    
    render() {
        // if ( this.props.match.params.section ) {console.log('test',true) }
        const section = this.props.match.params.section;
        const toRender = this.state.subSectionContent[section];
        return (
            <Nav>
                {toRender.map(
                    (subSection, i) => (<Link to={`${this.props.match.url}${subSection.name}`} > <SubNavItem  key={i} toRender={subSection} /> </Link>)
                )}
            </Nav>
        );
    }

    toggle() {
        // if ( this.props.match.param.section ) {console.log(true) }
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}

export default SubNav;