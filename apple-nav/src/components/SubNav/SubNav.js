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
        const section = this.props.match.params.section;
        console.log('section',section);
        console.log('sectionContent', this.state.sectionContent.Mac.icon);
    }
    
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
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