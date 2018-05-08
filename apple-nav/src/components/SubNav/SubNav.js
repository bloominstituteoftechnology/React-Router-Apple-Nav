import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: true,
            sectionContent: {
                'Mac': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'iPad': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'iPhone': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'Watch': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'TV': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'Music': {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    },
                'Support':
                    {
                    'icon': 'iconUrl',
                    'subSection': 'sub',
                    'new': false
                    }
            },
            toRender: {}
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        // const section = this.props.match.params.section;
        // console.log('section',section);
        // console.log('sectionContent', this.state.sectionContent.Mac.icon);
        // console.log('sectionContent', this.state.sectionContent[section]);
        // const toRender = this.state.sectionContent[section];
        // this.setState({ [toRender]: toRender });
        // console.log(this.state.toRender);
    }
    
    render() {
        const section = this.props.match.params.section;
        const toRender = this.state.sectionContent[section];
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    {toRender.icon}
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}

export default SubNav;